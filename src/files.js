const fp = require('lodash/fp');
const glob = require('globby');
const { join } = require('path');
const fs = require('fs');
const util = require('util');

const hasExtension =
  (ext = '.svg') =>
  (name) =>
    name.endsWith(ext);

/**
 * Create a getEntries function using the given options
 *
 * Valid options:
 *
 * @option {String} [extension='.svg'] - the file extension
 */
module.exports = function (options = {}) {
  const isValid = options.isValid || hasExtension(options.extension);

  /**
   * Given a list of sources, return all the file paths relative to current directory
   *
   * It accepts files, directories and globs as sources
   *
   * @param {Array<String>} sources
   * @return {Promise<String[]>} the file paths
   */
  return function getEntries(sources) {
    const lstat = util.promisify(fs.lstat);
    const readdir = util.promisify(fs.readdir);

    const readDir = (base) =>
      readdir(base).then(fp.map((name) => join(base, name)));
    const expand = (name) =>
      lstat(name)
        .then((stats) => (stats.isFile() ? name : readDir(name)))
        .catch(() => glob(name));

    return Promise.all(sources.map(expand))
      .then(fp.flatten)
      .then(fp.filter(isValid))
      .then(fp.uniq);
  };
};
