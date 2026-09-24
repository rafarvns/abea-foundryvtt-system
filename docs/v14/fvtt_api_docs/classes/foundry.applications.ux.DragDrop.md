---
title: "DragDrop | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.applications.ux.DragDrop.html"
category: "classes"
---

# Class DragDrop

A controller class for managing drag and drop workflows within an Application instance.
The controller manages the following actions: dragstart, dragover, drop.

#### Example: Activate drag-and-drop handling for a certain set of elements

```
const dragDrop = new DragDrop({  
  dragSelector: ".item",  
  dropSelector: ".items",  
  permissions: { dragstart: this._canDragStart.bind(this), drop: this._canDragDrop.bind(this) },  
  callbacks: { dragstart: this._onDragStart.bind(this), drop: this._onDragDrop.bind(this) }  
});  
dragDrop.bind(html);
Copy
```

##### Index

### Constructors

[constructor](#constructor)

### Properties

[callbacks](#callbacks)
[dragSelector](#dragselector)
[dropSelector](#dropselector)
[permissions](#permissions)

### Accessors

[implementation](#implementation)

### Methods

[bind](#bind)
[callback](#callback)
[can](#can)
[\_handleDragEnd](#_handledragend)
[\_handleDragEnter](#_handledragenter)
[\_handleDragLeave](#_handledragleave)
[\_handleDragOver](#_handledragover)
[\_handleDragStart](#_handledragstart)
[\_handleDrop](#_handledrop)
[createDragImage](#createdragimage)

## Constructors

### constructor

* new DragDrop(config?: [DragDropConfiguration](../interfaces/foundry.DragDropConfiguration.md)): DragDrop

  #### Parameters

  + `Optional`config: [DragDropConfiguration](../interfaces/foundry.DragDropConfiguration.md) = {}

  #### Returns DragDrop

## Properties

### callbacks

callbacks: Record<  
Â Â Â Â | "dragstart"  
Â Â Â Â | "drop"  
Â Â Â Â | "dragover"  
Â Â Â Â | "dragenter"  
Â Â Â Â | "dragleave"  
Â Â Â Â | "dragend",  
Â Â Â Â (event: DragEvent) => void,  
>

A set of callback functions for each action of the drag & drop workflow.

### dragSelector

dragSelector: string | null

The HTML selector which identifies draggable elements.

### dropSelector

dropSelector: string | null

The HTML selector which identifies drop targets.

### permissions

permissions: Record<"dragstart" | "drop", (selector: string) => boolean>

A set of functions to control authorization to begin drag workflows, and drop content.

## Accessors

### `Static`implementation

* get implementation(): typeof DragDrop

  Retrieve the configured DragDrop implementation.

  #### Returns typeof DragDrop

## Methods

### bind

* bind(html: HTMLElement): DragDrop

  Bind the DragDrop controller to an HTML application

  #### Parameters

  + html: HTMLElement

    The HTML element to which the handler is bound

  #### Returns DragDrop

### callback

* callback(event: DragEvent, action: string): any

  Execute a callback function associated with a certain action in the workflow

  #### Parameters

  + event: DragEvent

    The drag event being handled
  + action: string

    The action being attempted

  #### Returns any

### can

* can(action: string, selector: string): boolean

  Test whether the current user has permission to perform a step of the workflow

  #### Parameters

  + action: string

    The action being attempted
  + selector: string

    The selector being targeted

  #### Returns boolean

  Can the action be performed?

### `Protected`\_handleDragEnd

* \_handleDragEnd(event: DragEvent): void

  `Protected`

  Handle a drag workflow ending for any reason.

  #### Parameters

  + event: DragEvent

    The drag event.

  #### Returns void

### `Protected`\_handleDragEnter

* \_handleDragEnter(event: DragEvent): void

  `Protected`

  Handle entering a drop target while dragging.

  #### Parameters

  + event: DragEvent

    The drag event.

  #### Returns void

### `Protected`\_handleDragLeave

* \_handleDragLeave(event: DragEvent): void

  `Protected`

  Handle leaving a drop target while dragging.

  #### Parameters

  + event: DragEvent

    The drag event.

  #### Returns void

### `Protected`\_handleDragOver

* \_handleDragOver(event: DragEvent): boolean

  `Protected`

  Handle a dragged element over a droppable target

  #### Parameters

  + event: DragEvent

    The drag event being handled

  #### Returns boolean

### `Protected`\_handleDragStart

* \_handleDragStart(event: DragEvent): void

  `Protected`

  Handle the start of a drag workflow

  #### Parameters

  + event: DragEvent

    The drag event being handled

  #### Returns void

### `Protected`\_handleDrop

* \_handleDrop(event: DragEvent): any

  `Protected`

  Handle a dragged element dropped on a droppable target

  #### Parameters

  + event: DragEvent

    The drag event being handled

  #### Returns any

### `Static`createDragImage

* createDragImage(  
  Â Â Â Â img: HTMLImageElement,  
  Â Â Â Â width: number,  
  Â Â Â Â height: number,  
  ): HTMLDivElement

  A helper to create an image preview element for use during HTML element dragging.

  #### Parameters

  + img: HTMLImageElement
  + width: number
  + height: number

  #### Returns HTMLDivElement