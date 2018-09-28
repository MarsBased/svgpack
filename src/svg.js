const Svgo = require("svgo");

/**
 * SVG Processing utilities
 *
 * @module Svg
 */
module.exports = { optimize, sanitize };

/**
 * Optimize a svg file
 *
 * @param {*} options - optimize options
 * @param {String|Buffer} svg - the svg
 * @return {String}
 */
function optimize(opts) {
  const optimizer = new Svgo(getSvgoOptions(opts));

  return function(data) {
    try {
      return optimizer.optimize(data);
    } catch (err) {
      throw err;
    }
  };
}

/**
 * To give support IE browser must change some characters
 *
 * @see https://github.com/MarsBased/svgpack/issues/1
 * @see https://codepen.io/jakob-e/pen/doMoML
 */
function sanitize() {
  return svg =>
    svg
      .replace(
        "<svg",
        ~svg.indexOf("xmlns")
          ? "<svg"
          : '<svg xmlns="http://www.w3.org/2000/svg"'
      )
      .replace(/"/g, "'")
      .replace(/%/g, "%25")
      .replace(/#/g, "%23")
      .replace(/{/g, "%7B")
      .replace(/}/g, "%7D")
      .replace(/</g, "%3C")
      .replace(/>/g, "%3E")
      .replace(/\s+/g, " ");
  //
  //    The maybe list (add on documented fail)
  //
  //  .replace(/&/g, '%26')
  //  .replace('|', '%7C')
  //  .replace('[', '%5B')
  //  .replace(']', '%5D')
  //  .replace('^', '%5E')
  //  .replace('`', '%60')
  //  .replace(';', '%3B')
  //  .replace('?', '%3F')
  //  .replace(':', '%3A')
  //  .replace('@', '%40')
  //  .replace('=', '%3D')
}

function getSvgoOptions(options) {
  const plugins = [
    { cleanupAttrs: true },
    { removeDoctype: true },
    { removeXMLProcInst: true },
    { removeComments: true },
    { removeMetadata: true },
    { removeTitle: true },
    { removeDesc: true },
    { removeUselessDefs: true },
    { removeEditorsNSData: true },
    { removeEmptyAttrs: false },
    { removeHiddenElems: true },
    { removeEmptyText: true },
    { removeEmptyContainers: true },
    { removeViewBox: false },
    { cleanUpEnableBackground: true },
    { convertStyleToAttrs: true },
    { convertColors: true },
    { convertPathData: true },
    { convertTransform: true },
    { removeUnknownsAndDefaults: true },
    { removeNonInheritableGroupAttrs: true },
    { removeUselessStrokeAndFill: true },
    { removeUnusedNS: true },
    { cleanupIDs: true },
    { cleanupNumericValues: true },
    { moveElemsAttrsToGroup: true },
    { moveGroupAttrsToElems: true },
    { collapseGroups: true },
    { removeRasterImages: false },
    { mergePaths: true },
    { convertShapeToPath: true },
    { sortAttrs: true },
    { transformsWithOnePath: false },
    { removeDimensions: true },
    { removeAttrs: { attrs: ["xmlns", "fill=none"] } }
  ];
  return Object.assign({ plugins }, options);
}
