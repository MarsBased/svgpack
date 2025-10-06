const { optimize } = require('svgo');

/**
 * Optimize a svg file
 *
 * @param {*} options - optimize options
 * @param {String|Buffer} svg - the svg
 * @return {Promise<String>}
 */
module.exports = function optimizeSvg(options) {
  const svgoOptions = getSvgoOptions(options);
  return (svg) => {
    const result = optimize(svg.toString(), svgoOptions);
    return Promise.resolve(result.data);
  };
};

function getSvgoOptions(options) {
  return {
    plugins: [
      'cleanupAttrs',
      'removeDoctype',
      'removeXMLProcInst',
      'removeComments',
      'removeMetadata',
      'removeTitle',
      'removeDesc',
      'removeUselessDefs',
      'removeEditorsNSData',
      'removeEmptyAttrs',
      'removeHiddenElems',
      'removeEmptyText',
      'removeEmptyContainers',
      'convertStyleToAttrs',
      'convertPathData',
      'convertTransform',
      'removeUnknownsAndDefaults',
      'removeNonInheritableGroupAttrs',
      'removeUselessStrokeAndFill',
      'removeUnusedNS',
      'cleanupNumericValues',
      'moveElemsAttrsToGroup',
      'moveGroupAttrsToElems',
      'collapseGroups',
      'mergePaths',
      'convertShapeToPath',
      'sortAttrs',
      'removeDimensions',
    ],
    ...options,
  };
}
