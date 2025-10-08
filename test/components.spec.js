describe('Svgpack Components', () => {
  test('Components can be imported from index', () => {
    // Test that the components can be imported without errors
    expect(() => {
      require('../src/components');
    }).not.toThrow();
  });

  test('SvgpackMask component exists', () => {
    const components = require('../src/components');
    expect(components.SvgpackMask).toBeDefined();
    expect(typeof components.SvgpackMask).toBe('function');
  });

  test('SvgpackBackground component exists', () => {
    const components = require('../src/components');
    expect(components.SvgpackBackground).toBeDefined();
    expect(typeof components.SvgpackBackground).toBe('function');
  });
});
