/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface EchoPlex {
      'setDelayTime': (val: number) => void;
      'signal': string;
    }
  }

  interface HTMLEchoPlexElement extends StencilComponents.EchoPlex, HTMLStencilElement {}

  var HTMLEchoPlexElement: {
    prototype: HTMLEchoPlexElement;
    new (): HTMLEchoPlexElement;
  };
  interface HTMLElementTagNameMap {
    'echo-plex': HTMLEchoPlexElement;
  }
  interface ElementTagNameMap {
    'echo-plex': HTMLEchoPlexElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'echo-plex': JSXElements.EchoPlexAttributes;
    }
  }
  namespace JSXElements {
    export interface EchoPlexAttributes extends HTMLAttributes {
      'onEchoEmitted'?: (event: CustomEvent) => void;
      'signal'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;