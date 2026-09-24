---
title: "DoorControl | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.containers.DoorControl.html"
category: "classes"
---

# Class DoorControl

An icon representing a Door Control

#### Hierarchy

* Container
  + DoorControl

##### Index

### Accessors

[center](#center)
[isVisible](#isvisible)

### Methods

[draw](#draw)
[\_getTexture](#_gettexture)
[\_onMouseDown](#_onmousedown)
[\_onMouseOut](#_onmouseout)
[\_onMouseOver](#_onmouseover)
[\_onRightDown](#_onrightdown)

## Accessors

### center

* get center(): Point

  The center of the wall which contains the door.

  #### Returns Point

### isVisible

* get isVisible(): boolean

  Determine whether the DoorControl is visible to the calling user's perspective.
  The control is always visible if the user is a GM and no Tokens are controlled.

  #### Returns boolean

  #### See

## Methods

### draw

* draw(): Promise<DoorControl>

  Draw the DoorControl icon, displaying its icon texture and border

  #### Returns Promise<DoorControl>

### `Protected`\_getTexture

* \_getTexture(): Texture<Resource>

  `Protected`

  Get the icon texture to use for the Door Control icon based on the door state

  #### Returns Texture<Resource>

### `Protected`\_onMouseDown

* \_onMouseDown(event: FederatedEvent<UIEvent | PixiTouch>): any

  `Protected`

  Handle left mouse down events on a door control icon.
  This should only toggle between the OPEN and CLOSED states.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The originating interaction event

  #### Returns any

### `Protected`\_onMouseOut

* \_onMouseOut(event: FederatedEvent<UIEvent | PixiTouch>): false | undefined

  `Protected`

  Handle mouse out events on a door control icon.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The originating interaction event

  #### Returns false | undefined

### `Protected`\_onMouseOver

* \_onMouseOver(event: FederatedEvent<UIEvent | PixiTouch>): false | undefined

  `Protected`

  Handle mouse over events on a door control icon.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The originating interaction event

  #### Returns false | undefined

### `Protected`\_onRightDown

* \_onRightDown(event: FederatedEvent<UIEvent | PixiTouch>): any

  `Protected`

  Handle right mouse down events on a door control icon.
  This should toggle whether the door is LOCKED or CLOSED.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The originating interaction event

  #### Returns any