import React from 'react';

interface SvgpackBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  image?: string;
  width?: string;
  height?: string;
}

export function SvgpackBackground({
  className,
  image,
  width,
  height,
  style,
  children,
  ...props
}: SvgpackBackgroundProps) {
  const mergedStyle = {
    ...style,
    ...(image && { '--image': `var(--${image})` }),
    ...(width && { '--image--width': width }),
    ...(height && { '--image--height': height }),
  };

  return (
    <div 
      className={`svgpack-background${className ? ` ${className}` : ''}`} 
      style={mergedStyle} 
      {...props}
    >
      {children}
    </div>
  );
}
