import React from 'react';
declare module '@marsbased/svgpack/components' {
  export interface SvgpackBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
    image?: string;
    width?: string;
    height?: string;
  }

  export interface SvgpackMaskProps extends React.HTMLAttributes<HTMLDivElement> {
    image?: string;
    width?: string;
    height?: string;
  }

  export function SvgpackBackground(props: SvgpackBackgroundProps): JSX.Element;
  export function SvgpackMask(props: SvgpackMaskProps): JSX.Element;
}
