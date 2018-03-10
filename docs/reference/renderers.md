---
options:
  order: 14
---

# Reference: Renderers

`patternplate` renderer packages provide necessary glue 
code to produce code a browser understands (`HTML`, `CSS` and `JavaScript`)
from your components. 

Renderers allow `patternplate` to support any frontend framework that
can be written in or transformed to `JavaScript` and render `HTML`.

## Core renderers

* `@patternplate/default`: Pass `html` and `css` exports from demos
* `@patternplate/react`: Render `html` from demo on server, mount on client
* `@patternplate/styled-components`: Render `html`, `css`, mount on client

## Contracts

`patternplate` renderer packages are assumed to provide server (render) and client-side (mount)
utilities. 

A well-behaved `patternplate` render package provides both `mount` and `render` entry point, e.g.:

* `@patternplate/default/render`
* `@patternplate/default/mount`

If your integration target does not support one of the environments, you'll want to reexport
the corresponding `@patternplate/render-default` function.

### render

Create an object representing `HTML` and `CSS` output from an
object representing the exports of a demo file.

```ts
type DemoExports {
  /**
   * Demo function returning a "component"
   * according to semantics of used technology
   * .default should take precedence over call signature
   * if present 
   **/
  default?: (...args: any[]): any;
  (...args: any[]): any;
  /** 
   * HTML fragment that may have been provided 
   * by user via export const html = "" 
   **/
  html?: string;

  /** 
   * CSS code that may have been provided 
   * by user via export const html = "" 
   **/
  css?: string;
}

type RenderOutput {
  /**
   * HTML fragment to inject into <body>
   */
  html: string;
  /**
   * CSS <style> tag to inject into <head>
   */
  css: string;
}

function render(DemoExports): RenderOutput;
```

### mount

Perform the necessary side effects to register 
client-side functionality, e.g. `ReactDOM.mount`

```ts
type DemoExecutable {
  /**
   * Demo function returning a "component"
   * according to semantics of used technology
   * .default should take precedence over call signature
   * if present 
   **/
  default?: (...args: any[]): any;
  (...args: any[]): any;
}

function mount(DemoExecutable, element: Node): void;
```
