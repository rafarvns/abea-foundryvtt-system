---
title: "Draggable | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.applications.ux.Draggable.html"
category: "classes"
---

# Class Draggable

A UI utility to make an element draggable.

##### Index

### Constructors

[constructor](#constructor)

### Properties

[app](#app)
[element](#element)
[handle](#handle)
[handlers](#handlers)
[position](#position)
[resizable](#resizable)

### Accessors

[implementation](#implementation)

### Methods

[activateListeners](#activatelisteners)
[\_activateDragListeners](#_activatedraglisteners)
[\_activateResizeListeners](#_activateresizelisteners)
[\_onDragMouseDown](#_ondragmousedown)
[\_onDragMouseMove](#_ondragmousemove)
[\_onDragMouseUp](#_ondragmouseup)
[\_onResizeMouseDown](#_onresizemousedown)
[\_onResizeMouseMove](#_onresizemousemove)
[\_onResizeMouseUp](#_onresizemouseup)

## Constructors

### constructor

* new Draggable(  
  Â Â Â Â app:  
  Â Â Â Â Â Â Â Â | [Application](foundry.appv1.api.Application.md)  
  Â Â Â Â Â Â Â Â | [ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>,  
  Â Â Â Â element: any,  
  Â Â Â Â handle: false | HTMLElement,  
  Â Â Â Â resizable: boolean | [DraggableResizeOptions](../interfaces/foundry.DraggableResizeOptions.md),  
  ): Draggable

  #### Parameters

  + app: [Application](foundry.appv1.api.Application.md) | [ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>

    The Application that is being made draggable.
  + element: any

    The Application's outer-most element.
  + handle: false | HTMLElement

    The element that acts as a drag handle. Supply false to disable dragging.
  + resizable: boolean | [DraggableResizeOptions](../interfaces/foundry.DraggableResizeOptions.md)

    Is the application resizable? Supply an object to configure
    resizing behavior or true to have it automatically configured.

  #### Returns Draggable

## Properties

### app

app:  
Â Â Â Â | [Application](foundry.appv1.api.Application.md)  
Â Â Â Â | [ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>

The Application being made draggable.

### element

element: HTMLElement

The Application's outer-most element.

### handle

handle: false | HTMLElement

The drag handle, or false to disable dragging.

### handlers

handlers: Record<string, Function> = {}

Registered event handlers.

### position

position: object = null

The Application's starting position, pre-drag.

### resizable

resizable: boolean | [DraggableResizeOptions](../interfaces/foundry.DraggableResizeOptions.md)

Resize configuration.

## Accessors

### `Static`implementation

* get implementation(): typeof Draggable

  Retrieve the configured Draggable implementation.

  #### Returns typeof Draggable

## Methods

### activateListeners

* activateListeners(): void

  Activate event handling for a Draggable application
  Attach handlers for floating, dragging, and resizing

  #### Returns void

### `Protected`\_activateDragListeners

* \_activateDragListeners(): void

  `Protected`

  Attach handlers for dragging and floating.

  #### Returns void

### `Protected`\_activateResizeListeners

* \_activateResizeListeners(): void

  `Protected`

  Attach handlers for resizing.

  #### Returns void

### `Protected`\_onDragMouseDown

* \_onDragMouseDown(event: PointerEvent): void

  `Protected`

  Handle the initial mouse click which activates dragging behavior for the application

  #### Parameters

  + event: PointerEvent

  #### Returns void

### `Protected`\_onDragMouseMove

* \_onDragMouseMove(event: PointerEvent): void

  `Protected`

  Move the window with the mouse, bounding the movement to ensure the window stays within bounds of the viewport

  #### Parameters

  + event: PointerEvent

  #### Returns void

### `Protected`\_onDragMouseUp

* \_onDragMouseUp(event: PointerEvent): void

  `Protected`

  Conclude the dragging behavior when the mouse is release, setting the final position and removing listeners

  #### Parameters

  + event: PointerEvent

  #### Returns void

### `Protected`\_onResizeMouseDown

* \_onResizeMouseDown(event: PointerEvent): void

  `Protected`

  Handle the initial mouse click which activates dragging behavior for the application

  #### Parameters

  + event: PointerEvent

  #### Returns void

### `Protected`\_onResizeMouseMove

* \_onResizeMouseMove(event: PointerEvent): void

  `Protected`

  Move the window with the mouse, bounding the movement to ensure the window stays within bounds of the viewport

  #### Parameters

  + event: PointerEvent

  #### Returns void

### `Protected`\_onResizeMouseUp

* \_onResizeMouseUp(event: PointerEvent): void

  `Protected`

  Conclude the dragging behavior when the mouse is release, setting the final position and removing listeners

  #### Parameters

  + event: PointerEvent

  #### Returns void