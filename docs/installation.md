---
layout: default
title: Installation
description: Installation options for svgpack
nav_order: 10
permalink: /installation/
markdown: kramdown
kramdown:
  parse_block_html: true
---

# Installation Options

## Project Dependency (Recommended)

For both React components and build scripts:

```bash
# npm
npm install @marsbased/svgpack

# yarn
yarn add @marsbased/svgpack
```

Use cases:
- **React Components**: Import and use components directly
- **Build Scripts**: Add to package.json scripts for automated SVG processing

## Global Installation (CLI Only)

For one-off usage or manual processing:

```bash
# npm
npm install --global @marsbased/svgpack

# yarn
yarn global add @marsbased/svgpack
```

## Development Installation

To get the latest version, clone the repository and install from it:

```bash
cd svgpack
npm install --global .
```
