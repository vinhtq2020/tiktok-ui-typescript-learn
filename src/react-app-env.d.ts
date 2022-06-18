/// <reference types="react-scripts" />
declare module '*.mp4' {
    const src: string;
    export default src;
  }
declare module "*.svg"{
  import { ReactElement,SVGProps } from "react";
  const content: ((props: SVGProps<SVGElement>) => ReactElement);
  // const content: any;
  export default content;
}

declare module "*.png" {
  const value: any;
  export default value;
}