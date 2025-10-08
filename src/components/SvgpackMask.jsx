import React from 'react';

export function SvgpackMask({
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

  return (
    <div 
      className={`svgpack-mask${className ? ` ${className}` : ''}`} 
      style={mergedStyle} 
      {...props}
    >
      {children}
    </div>
  );
}
