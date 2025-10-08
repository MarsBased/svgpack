import React from 'react';

interface SvgpackMaskProps extends React.HTMLAttributes<HTMLDivElement> {
  image?: string;
  width?: string;
  height?: string;
}

export function SvgpackMask({
  className,
  image,
  width,
  height,
  style,
  children,
  ...props
}: SvgpackMaskProps) {
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
