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

### As Production Dependency

Install as a regular dependency if you need **React components** in your application:

```bash
# npm
npm install @marsbased/svgpack

# yarn
yarn add @marsbased/svgpack
```

Use this when:
- **React Components**: You import and use `SvgpackBackground` or `SvgpackMask` components in your React app
- The package needs to be available in production/runtime

### As Development Dependency

Install as a dev dependency if you only need **build-time SVG processing** (CSS/SCSS generation):

```bash
# npm
npm install --save-dev @marsbased/svgpack

# yarn
yarn add --dev @marsbased/svgpack
```

Use this when:
- **Build Scripts**: You only use svgpack to generate CSS/SCSS files during build time
- You don't use React components
- The package is only needed during development/build process

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
