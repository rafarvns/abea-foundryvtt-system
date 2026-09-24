---
title: "DragDrop | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.applications.ux.DragDrop.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [applications](../modules/foundry.applications.html)
* [ux](../modules/foundry.applications.ux.html)
* [DragDrop](foundry.applications.ux.DragDrop.html)

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

[constructor](foundry.applications.ux.DragDrop.html#constructor)

### Properties

[callbacks](foundry.applications.ux.DragDrop.html#callbacks)
[dragSelector](foundry.applications.ux.DragDrop.html#dragselector)
[dropSelector](foundry.applications.ux.DragDrop.html#dropselector)
[permissions](foundry.applications.ux.DragDrop.html#permissions)

### Accessors

[implementation](foundry.applications.ux.DragDrop.html#implementation)

### Methods

[bind](foundry.applications.ux.DragDrop.html#bind)
[callback](foundry.applications.ux.DragDrop.html#callback)
[can](foundry.applications.ux.DragDrop.html#can)
[\_handleDragEnd](foundry.applications.ux.DragDrop.html#_handledragend)
[\_handleDragEnter](foundry.applications.ux.DragDrop.html#_handledragenter)
[\_handleDragLeave](foundry.applications.ux.DragDrop.html#_handledragleave)
[\_handleDragOver](foundry.applications.ux.DragDrop.html#_handledragover)
[\_handleDragStart](foundry.applications.ux.DragDrop.html#_handledragstart)
[\_handleDrop](foundry.applications.ux.DragDrop.html#_handledrop)
[createDragImage](foundry.applications.ux.DragDrop.html#createdragimage)

## Constructors

### constructor

* new DragDrop(config?: [DragDropConfiguration](../interfaces/foundry.DragDropConfiguration.html)): [DragDrop](foundry.applications.ux.DragDrop.html)

  #### Parameters

  + `Optional`config: [DragDropConfiguration](../interfaces/foundry.DragDropConfiguration.html) = {}

  #### Returns [DragDrop](foundry.applications.ux.DragDrop.html)

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

dragSelector: null | string

The HTML selector which identifies draggable elements.

### dropSelector

dropSelector: null | string

The HTML selector which identifies drop targets.

### permissions

permissions: Record<"dragstart" | "drop", (selector: string) => boolean>

A set of functions to control authorization to begin drag workflows, and drop content.

## Accessors

### `Static`implementation

* get implementation(): typeof [DragDrop](foundry.applications.ux.DragDrop.html)

  Retrieve the configured DragDrop implementation.

  #### Returns typeof [DragDrop](foundry.applications.ux.DragDrop.html)

## Methods

### bind

* bind(html: HTMLElement): [DragDrop](foundry.applications.ux.DragDrop.html)

  Bind the DragDrop controller to an HTML application

  #### Parameters

  + html: HTMLElement

    The HTML element to which the handler is bound

  #### Returns [DragDrop](foundry.applications.ux.DragDrop.html)

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