import React from 'react';

export interface SvgpackMaskProps extends React.HTMLAttributes<HTMLDivElement> {
  image?: string;
  width?: string;
  height?: string;
}

export declare function SvgpackMask(props: SvgpackMaskProps): JSX.Element;