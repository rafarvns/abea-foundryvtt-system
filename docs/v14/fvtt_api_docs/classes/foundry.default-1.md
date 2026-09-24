---
title: "default | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.default-1.html"
category: "classes"
---

# Class default

A singleton class that provides an API for spawning and managing detached windows.

##### Index

### Accessors

[focused](#focused)
[windows](#windows)

### Methods

[\_onWindowClosed](#_onwindowclosed)
[adoptNodes](#adoptnodes)
[checkEmpty](#checkempty)
[copyAttributes](#copyattributes)
[importNodes](#importnodes)
[openWindow](#openwindow)
[querySelector](#queryselector)
[querySelectorAll](#queryselectorall)

## Accessors

### focused

* get focused(): Window | null

  The currently-focused window.

  #### Returns Window | null

### windows

* get windows(): Map<string, [DetachedWindowDescriptor](../interfaces/foundry.DetachedWindowDescriptor.md)>

  A registry of detached window instances.

  #### Returns Map<string, [DetachedWindowDescriptor](../interfaces/foundry.DetachedWindowDescriptor.md)>

## Methods

### \_onWindowClosed

* \_onWindowClosed(win: Window): void

  `Internal`

  Handle tear-down when a detached window is closed.

  #### Parameters

  + win: Window

    The window instance.

  #### Returns void

### adoptNodes

* adoptNodes(target: HTMLElement, ...nodes: Node[]): void

  Adopt nodes into a new host window and append them to the given target.

  #### Parameters

  + target: HTMLElement

    The target.
  + ...nodes: Node[]

    The nodes.

  #### Returns void

### checkEmpty

* checkEmpty(win: Window): void

  Check if a detached window contains any applications, and closes it if there are none.

  #### Parameters

  + win: Window

    The window.

  #### Returns void

### copyAttributes

* copyAttributes(  
  Â Â Â Â from: HTMLElement,  
  Â Â Â Â to: HTMLElement,  
  Â Â Â Â options?: { attrs?: Iterable<string, any, any> },  
  ): void

  Copy attributes between two elements.

  #### Parameters

  + from: HTMLElement

    The element to copy from.
  + to: HTMLElement

    The element to copy to.
  + `Optional`options: { attrs?: Iterable<string, any, any> } = {}
    - ##### `Optional`attrs?: Iterable<string, any, any>

      Copy only the specified attributes.

  #### Returns void

### importNodes

* importNodes(target: HTMLElement, ...nodes: Node[]): void

  Import nodes into a new host window and append them to the given target.

  #### Parameters

  + target: HTMLElement

    The target.
  + ...nodes: Node[]

    The nodes.

  #### Returns void

### openWindow

* openWindow(options?: [DetachedWindowOptions](../interfaces/foundry.applications.types.DetachedWindowOptions.md)): Promise<Window>

  Open a window detached from the main application window.

  #### Parameters

  + `Optional`options: [DetachedWindowOptions](../interfaces/foundry.applications.types.DetachedWindowOptions.md) = {}

  #### Returns Promise<Window>

### querySelector

* querySelector(selector: string): HTMLElement | null

  Performs a DOM query across all detached windows and the main workspace, and return the first match.

  #### Parameters

  + selector: string

    The query selector.

  #### Returns HTMLElement | null

### querySelectorAll

* querySelectorAll(selector: string): HTMLElement[]

  Perform a DOM query across all detached windows and the main workspace, and return all matches.

  #### Parameters

  + selector: string

    The query selector.

  #### Returns HTMLElement[]