const Svgo = require("svgo");

/**
 * Optimize a svg file
 *
 * @param {*} options - optimize options
 * @param {String|Buffer} svg - the svg
 * @return {Promise<String>}
 */
module.exports = function optimize(options) {
  const optimizer = new Svgo(getSvgoOptions(options));
  return svg => optimizer.optimize(svg.toString()).then(r => r.data);
};

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
    { convertColors: false },
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
    { removeDimensions: false },
    { removeAttrs: { attrs: ["xmlns", "fill=none"] } }
  ];
  return Object.assign({ plugins }, options);
}
