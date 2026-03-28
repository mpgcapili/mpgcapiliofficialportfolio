import type { CustomElements, CustomCssProperties } from '@awesome.me/webawesome/dist/custom-elements-jsx.d.ts';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {
      'project-card': HTMLAttributes<HTMLElement> & {
        // List your custom attributes here (use lowercase for attributes)
        projtitle?: string;
        subtitle?: string;
        desc?: string;
        image?: string;
        // For arrays/objects passed as strings, use string
        tags?: array; 
      };
      'theme-toggle':HTMLAttributes<HTMLElement>;
      'page-section':HTMLAttributes<HTMLElement>;
      'page-subsection':HTMLAttributes<HTMLElement>;
      'wa-button':Partial<WaButtonProps & BaseProps<WaButton>> ;
    }
  }
  interface CSSProperties extends CustomCssProperties {}
}
