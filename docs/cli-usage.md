---
layout: default
title: CLI Usage
nav_order: 3
permalink: /cli-usage/
---

# CLI Usage

## Basic Usage

```bash
# Generate CSS variables
svgpack my-images/

# Save to file
svgpack my-images/ > images.css
```

## CSS Classes Mode

Generate CSS variables with ready-to-use classes:

```bash
# Generate with default class names
svgpack my-images/ --background --mask

# Generate with custom class names
svgpack my-images/ --background my-image --mask my-mask > images.css
```

## SCSS Functions Mode

Generate SCSS functions instead of CSS variables:

```bash
# Generate SCSS functions
svgpack my-images/ --sass > images.scss
```

## CLI Options

- `--background [className]` - Generate background CSS classes
- `--mask [className]` - Generate mask CSS classes  
- `--sass` - Generate SCSS functions instead of CSS variables
- `--help` - Show help information

Write `svgpack --help` for more options
