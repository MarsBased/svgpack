const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

describe('svgpack binary', () => {
  const testAssetsDir = path.join(__dirname, 'assets');
  const svgFiles = [
    'icon-arrow-right.svg',
    'icon-caret-down.svg',
    'icon-required.svg',
    'icon-search.svg',
  ];

  test('should execute without errors', () => {
    expect(() => {
      execSync('node bin/svgpack --help', {
        cwd: path.join(__dirname, '..'),
        stdio: 'pipe',
      });
    }).not.toThrow();
  });

  test('should process SVG files and generate CSS', () => {
    const svgPaths = svgFiles.map((file) => path.join(testAssetsDir, file));
    const command = `node bin/svgpack ${svgPaths.join(' ')}`;

    expect(() => {
      const output = execSync(command, {
        cwd: path.join(__dirname, '..'),
        stdio: 'pipe',
        encoding: 'utf8',
      });

      // Check that output contains CSS variables
      expect(output).toContain('--icon-arrow-right:');
      expect(output).toContain('--icon-caret-down:');
      expect(output).toContain('--icon-required:');
      expect(output).toContain('--icon-search:');
    }).not.toThrow();
  });

  test('should generate CSS with background classes when --background flag is used', () => {
    const svgPaths = svgFiles.map((file) => path.join(testAssetsDir, file));
    const command = `node bin/svgpack ${svgPaths.join(' ')} --background`;

    expect(() => {
      const output = execSync(command, {
        cwd: path.join(__dirname, '..'),
        stdio: 'pipe',
        encoding: 'utf8',
      });

      // Check that output contains CSS classes
      expect(output).toContain('.svgpack-background');
      expect(output).toContain(
        'background: var(--image) center/contain no-repeat'
      );
    }).not.toThrow();
  });

  test('should generate CSS with mask classes when --mask flag is used', () => {
    const svgPaths = svgFiles.map((file) => path.join(testAssetsDir, file));
    const command = `node bin/svgpack ${svgPaths.join(' ')} --mask`;

    expect(() => {
      const output = execSync(command, {
        cwd: path.join(__dirname, '..'),
        stdio: 'pipe',
        encoding: 'utf8',
      });

      // Check that output contains CSS classes
      expect(output).toContain('.svgpack-mask');
      expect(output).toContain('mask: var(--image) center/contain no-repeat');
    }).not.toThrow();
  });

  test('should handle non-existent files gracefully', () => {
    const command = 'node bin/svgpack non-existent-file.svg';

    expect(() => {
      execSync(command, {
        cwd: path.join(__dirname, '..'),
        stdio: 'pipe',
        encoding: 'utf8',
      });
    }).not.toThrow();
  });

  test('should show help when no arguments provided', () => {
    expect(() => {
      const output = execSync('node bin/svgpack', {
        cwd: path.join(__dirname, '..'),
        stdio: 'pipe',
        encoding: 'utf8',
      });

      // Should show help or usage information
      expect(output.length).toBeGreaterThan(0);
    }).not.toThrow();
  });
});
