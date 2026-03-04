import type { CustomElements, CustomCssProperties } from '@awesome.me/webawesome/dist/custom-elements-jsx.d.ts';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {
      'mp-card': HTMLAttributes<HTMLElement>;
    }
  }
  interface CSSProperties extends CustomCssProperties {}
}
