import React from 'react';

export function SvgpackBackground({
  className,
  image,
  width,
  height,
  style,
  children,
  ...props
}) {
  const mergedStyle = {
    ...style,
    ...(image && { '--image': `var(--${image})` }),
    ...(width && { '--image--width': width }),
    ...(height && { '--image--height': height }),
  };

  return React.createElement(
    'div',
    {
      className: `svgpack-background${className ? ` ${className}` : ''}`,
      style: mergedStyle,
      ...props,
    },
    children
  );
}
