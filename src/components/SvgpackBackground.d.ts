import React from 'react';

export interface SvgpackBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  image?: string;
  width?: string;
  height?: string;
}

export declare function SvgpackBackground(props: SvgpackBackgroundProps): JSX.Element;