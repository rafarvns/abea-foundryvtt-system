---
title: "FilterMenu | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.applications.ux.FilterMenu.html"
category: "classes"
---

# Class FilterMenu

A specialized subclass of ContextMenu designed for displaying a menu of filter options.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.applications.ux.FilterMenu))

* [ContextMenu](foundry.applications.ux.ContextMenu.md)
  + FilterMenu

##### Index

### Constructors

[constructor](#constructor)

### Properties

[menuItems](#menuitems)
[onClose](#onclose)
[onOpen](#onopen)

### Accessors

[element](#element)
[eventName](#eventname)
[expandUp](#expandup)
[fixed](#fixed)
[relative](#relative)
[selector](#selector)
[target](#target)
[implementation](#implementation)

### Methods

[\_preRenderEntries](#_prerenderentries)
[activateListeners](#activatelisteners)
[close](#close)
[render](#render)
[\_animate](#_animate)
[\_close](#_close)
[\_injectMenu](#_injectmenu)
[\_onActivate](#_onactivate)
[\_onRender](#_onrender)
[\_onRenderEntries](#_onrenderentries)
[\_preRender](#_prerender)
[\_setFixedPosition](#_setfixedposition)
[\_setPosition](#_setposition)
[activateListeners](#activatelisteners-2)
[create](#create)

## Constructors

### constructor

* new FilterMenu(  
  Â Â Â Â container: HTMLElement,  
  Â Â Â Â selector: string,  
  Â Â Â Â options?: [FilterMenuOptions](../types/foundry.FilterMenuOptions.md),  
  ): FilterMenu

  #### Parameters

  + container: HTMLElement

    The HTML element that contains the context menu targets.
  + selector: string

    A CSS selector which activates the context menu.
  + `Optional`options: [FilterMenuOptions](../types/foundry.FilterMenuOptions.md) = {}

    Additional options to configure the context menu.

  #### Returns FilterMenu

  Overrides [ContextMenu](foundry.applications.ux.ContextMenu.md).[constructor](foundry.applications.ux.ContextMenu.md#constructor)

## Properties

### menuItems

menuItems: ([ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.md) & { element: HTMLElement })[]

The array of menu items to render.

Inherited from [ContextMenu](foundry.applications.ux.ContextMenu.md).[menuItems](foundry.applications.ux.ContextMenu.md#menuitems)

### onClose

onClose: [ContextMenuCallback](../types/foundry.ContextMenuCallback.md)

A function to call when the context menu is closed.

Inherited from [ContextMenu](foundry.applications.ux.ContextMenu.md).[onClose](foundry.applications.ux.ContextMenu.md#onclose)

### onOpen

onOpen: [ContextMenuCallback](../types/foundry.ContextMenuCallback.md)

A function to call when the context menu is opened.

Inherited from [ContextMenu](foundry.applications.ux.ContextMenu.md).[onOpen](foundry.applications.ux.ContextMenu.md#onopen)

## Accessors

### element

* get element(): HTMLElement

  The menu element.

  #### Returns HTMLElement

  Inherited from ContextMenu.element

### eventName

* get eventName(): string

  The event name to listen for.

  #### Returns string

  Inherited from ContextMenu.eventName

### expandUp

* get expandUp(): boolean

  Check which direction the menu is expanded in.

  #### Returns boolean

  Inherited from ContextMenu.expandUp

### fixed

* get fixed(): boolean

  Whether to position the context menu as a fixed element, or inject it into the target.

  #### Returns boolean

  Inherited from ContextMenu.fixed

### relative

* get relative(): "target" | "cursor"

  For fixed context menus, control whether the menu is positioned relative to the target or to the mouse cursor.
  Non-fixed context menus are always positioned relative to the target.

  #### Returns "target" | "cursor"

  Inherited from ContextMenu.relative

### selector

* get selector(): string

  A CSS selector to identify context menu targets.

  #### Returns string

  Inherited from ContextMenu.selector

### target

* get target(): HTMLElement

  The parent HTML element to which the context menu is attached

  #### Returns HTMLElement

  Inherited from ContextMenu.target

### `Static`implementation

* get implementation(): typeof FilterMenu

  Retrieve the configured FilterMenu implementation.

  #### Returns typeof FilterMenu

  Overrides ContextMenu.implementation

## Methods

### \_preRenderEntries

* \_preRenderEntries(options?: {}): Promise<void>

  Called before the menu's entries are rendered.

  #### Parameters

  + options: {} = {}

  #### Returns Promise<void>

  Overrides [ContextMenu](foundry.applications.ux.ContextMenu.md).[\_preRenderEntries](foundry.applications.ux.ContextMenu.md#_prerenderentries)

### activateListeners

* activateListeners(menu: HTMLElement, options?: [ContextMenuRenderOptions](../interfaces/foundry.ContextMenuRenderOptions.md)): void

  Local listeners which apply to each ContextMenu instance which is created.

  #### Parameters

  + menu: HTMLElement

    The context menu element.
  + `Optional`options: [ContextMenuRenderOptions](../interfaces/foundry.ContextMenuRenderOptions.md) = {}

  #### Returns void

  Inherited from [ContextMenu](foundry.applications.ux.ContextMenu.md).[activateListeners](foundry.applications.ux.ContextMenu.md#activatelisteners)

### close

* close(options?: { animate?: boolean; target?: HTMLElement }): Promise<void>

  Closes the menu and removes it from the DOM.

  #### Parameters

  + `Optional`options: { animate?: boolean; target?: HTMLElement } = {}

    Options to configure the closing behavior.

    - ##### `Optional`animate?: boolean

      Animate the context menu closing.
    - ##### `Optional`target?: HTMLElement

      The target element to close on.

  #### Returns Promise<void>

  Inherited from [ContextMenu](foundry.applications.ux.ContextMenu.md).[close](foundry.applications.ux.ContextMenu.md#close)

### render

* render(target: HTMLElement, options?: [ContextMenuRenderOptions](../interfaces/foundry.ContextMenuRenderOptions.md)): Promise<void>

  Render the Context Menu by iterating over the menuItems it contains.
  Check the visibility of each menu item, and only render ones which are allowed by the item's logical condition.
  Attach a click handler to each item which is rendered.

  #### Parameters

  + target: HTMLElement

    The target element to which the context menu is attached.
  + `Optional`options: [ContextMenuRenderOptions](../interfaces/foundry.ContextMenuRenderOptions.md) = {}

  #### Returns Promise<void>

  A Promise that resolves when the open animation has completed.

  Inherited from [ContextMenu](foundry.applications.ux.ContextMenu.md).[render](foundry.applications.ux.ContextMenu.md#render)

### `Protected`\_animate

* \_animate(open?: boolean): Promise<void>

  `Protected`

  Animate the context menu's height when opening or closing.

  #### Parameters

  + open: boolean = false

    Whether the menu is opening or closing.

  #### Returns Promise<void>

  A Promise that resolves when the animation completes.

  Inherited from [ContextMenu](foundry.applications.ux.ContextMenu.md).[\_animate](foundry.applications.ux.ContextMenu.md#_animate)

### `Protected`\_close

* \_close(options?: { target?: HTMLElement }): void

  `Protected`

  Close the menu and remove it from the DOM.

  #### Parameters

  + `Optional`options: { target?: HTMLElement } = {}
    - ##### `Optional`target?: HTMLElement

      The target element to close on.

  #### Returns void

  Inherited from [ContextMenu](foundry.applications.ux.ContextMenu.md).[\_close](foundry.applications.ux.ContextMenu.md#_close)

### `Protected`\_injectMenu

* \_injectMenu(menu: HTMLElement, target: HTMLElement): void

  `Protected`

  Inject the menu inside the target.

  #### Parameters

  + menu: HTMLElement

    The menu element.
  + target: HTMLElement

    The context target.

  #### Returns void

  Inherited from [ContextMenu](foundry.applications.ux.ContextMenu.md).[\_injectMenu](foundry.applications.ux.ContextMenu.md#_injectmenu)

### `Protected`\_onActivate

* \_onActivate(event: Event): Promise<void> | undefined

  `Protected`

  Handle context menu activation.

  #### Parameters

  + event: Event

    The triggering event.

  #### Returns Promise<void> | undefined

  Inherited from [ContextMenu](foundry.applications.ux.ContextMenu.md).[\_onActivate](foundry.applications.ux.ContextMenu.md#_onactivate)

### `Protected`\_onRender

* \_onRender(options?: [ContextMenuRenderOptions](../interfaces/foundry.ContextMenuRenderOptions.md)): Promise<void>

  `Protected`

  Called after the context menu has finished rendering and animating open.

  #### Parameters

  + `Optional`options: [ContextMenuRenderOptions](../interfaces/foundry.ContextMenuRenderOptions.md) = {}

  #### Returns Promise<void>

  Inherited from [ContextMenu](foundry.applications.ux.ContextMenu.md).[\_onRender](foundry.applications.ux.ContextMenu.md#_onrender)

### `Protected`\_onRenderEntries

* \_onRenderEntries(  
  Â Â Â Â menu: HTMLMenuElement,  
  Â Â Â Â options?: [ContextMenuRenderOptions](../interfaces/foundry.ContextMenuRenderOptions.md),  
  ): Promise<void>

  `Protected`

  Called after the context menu has finished rendering its entries.

  #### Parameters

  + menu: HTMLMenuElement

    The rendered menu.
  + `Optional`options: [ContextMenuRenderOptions](../interfaces/foundry.ContextMenuRenderOptions.md) = {}

  #### Returns Promise<void>

  Inherited from [ContextMenu](foundry.applications.ux.ContextMenu.md).[\_onRenderEntries](foundry.applications.ux.ContextMenu.md#_onrenderentries)

### `Protected`\_preRender

* \_preRender(  
  Â Â Â Â target: HTMLElement,  
  Â Â Â Â options?: [ContextMenuRenderOptions](../interfaces/foundry.ContextMenuRenderOptions.md),  
  ): Promise<void>

  `Protected`

  Called before the context menu begins rendering.

  #### Parameters

  + target: HTMLElement

    The context target.
  + `Optional`options: [ContextMenuRenderOptions](../interfaces/foundry.ContextMenuRenderOptions.md) = {}

  #### Returns Promise<void>

  Inherited from [ContextMenu](foundry.applications.ux.ContextMenu.md).[\_preRender](foundry.applications.ux.ContextMenu.md#_prerender)

### `Protected`\_setFixedPosition

* \_setFixedPosition(  
  Â Â Â Â menu: HTMLElement,  
  Â Â Â Â target: HTMLElement,  
  Â Â Â Â options?: { event?: Event },  
  ): void

  `Protected`

  Set the context menu at a fixed position in the viewport.

  #### Parameters

  + menu: HTMLElement

    The menu element.
  + target: HTMLElement

    The context target.
  + `Optional`options: { event?: Event } = {}
    - ##### `Optional`event?: Event

      The event that triggered the context menu opening.

  #### Returns void

  Inherited from [ContextMenu](foundry.applications.ux.ContextMenu.md).[\_setFixedPosition](foundry.applications.ux.ContextMenu.md#_setfixedposition)

### `Protected`\_setPosition

* \_setPosition(  
  Â Â Â Â menu: HTMLElement,  
  Â Â Â Â target: HTMLElement,  
  Â Â Â Â options?: { event?: Event },  
  ): void

  `Protected`

  Set the position of the context menu, taking into consideration whether the menu should expand upward or downward

  #### Parameters

  + menu: HTMLElement

    The context menu element.
  + target: HTMLElement

    The element that the context menu was spawned on.
  + `Optional`options: { event?: Event } = {}
    - ##### `Optional`event?: Event

      The event that triggered the context menu opening.

  #### Returns void

  Inherited from [ContextMenu](foundry.applications.ux.ContextMenu.md).[\_setPosition](foundry.applications.ux.ContextMenu.md#_setposition)

### `Static`activateListeners

* activateListeners(  
  Â Â Â Â document: Document,  
  Â Â Â Â \_\_namedParameters?: { \_deprecated?: boolean },  
  ): void

  Bind global context menu listeners to a given document.

  #### Parameters

  + document: Document

    The document.
  + \_\_namedParameters: { \_deprecated?: boolean } = {}

  #### Returns void

  Inherited from [ContextMenu](foundry.applications.ux.ContextMenu.md).[activateListeners](foundry.applications.ux.ContextMenu.md#activatelisteners-2)

### `Static`create

* create(  
  Â Â Â Â app: [Application](foundry.appv1.api.Application.md),  
  Â Â Â Â html: any,  
  Â Â Â Â selector: string,  
  Â Â Â Â menuItems: [ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.md)[],  
  Â Â Â Â options?: { hookName?: string },  
  ): [ContextMenu](foundry.applications.ux.ContextMenu.md)

  Create a ContextMenu for this Application and dispatch hooks.

  #### Parameters

  + app: [Application](foundry.appv1.api.Application.md)

    The Application this ContextMenu belongs to.
  + html: any

    The Application's rendered HTML.
  + selector: string

    The target CSS selector which activates the menu.
  + menuItems: [ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.md)[]

    The array of menu items being rendered.
  + `Optional`options: { hookName?: string } = {}

    Additional options to configure context menu initialization.

    - ##### `Optional`hookName?: string

      The name of the hook to call.

  #### Returns [ContextMenu](foundry.applications.ux.ContextMenu.md)

  #### Deprecated

  since v13

  Inherited from [ContextMenu](foundry.applications.ux.ContextMenu.md).[create](foundry.applications.ux.ContextMenu.md#create)