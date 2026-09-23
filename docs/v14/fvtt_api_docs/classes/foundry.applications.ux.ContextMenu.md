---
title: "ContextMenu | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.applications.ux.ContextMenu.html"
category: "classes"
---

# Class ContextMenu

Display a right-click activated Context Menu which provides a dropdown menu of options.
A ContextMenu is constructed by designating a parent HTML container and a target selector.
An Array of menuItems defines the entries of the menu which is displayed.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.applications.ux.ContextMenu))

* ContextMenu
  + [FilterMenu](foundry.applications.ux.FilterMenu.md)

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
[\_preRenderEntries](#_prerenderentries)
[\_setFixedPosition](#_setfixedposition)
[\_setPosition](#_setposition)
[activateListeners](#activatelisteners-2)
[create](#create)

## Constructors

### constructor

* new ContextMenu(  
  Â Â Â Â container: any,  
  Â Â Â Â selector: string,  
  Â Â Â Â menuItems: [ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.md)[],  
  Â Â Â Â options?: [ContextMenuOptions](../interfaces/foundry.ContextMenuOptions.md),  
  ): ContextMenu

  #### Parameters

  + container: any

    The HTML element that contains the context menu targets.
  + selector: string

    A CSS selector which activates the context menu.
  + menuItems: [ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.md)[]

    An Array of entries to display in the menu
  + `Optional`options: [ContextMenuOptions](../interfaces/foundry.ContextMenuOptions.md) = {}

    Additional options to configure the context menu.

  #### Returns ContextMenu

## Properties

### menuItems

menuItems: ([ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.md) & { element: HTMLElement })[]

The array of menu items to render.

### onClose

onClose: [ContextMenuCallback](../types/foundry.ContextMenuCallback.md)

A function to call when the context menu is closed.

### onOpen

onOpen: [ContextMenuCallback](../types/foundry.ContextMenuCallback.md)

A function to call when the context menu is opened.

## Accessors

### element

* get element(): HTMLElement

  The menu element.

  #### Returns HTMLElement

### eventName

* get eventName(): string

  The event name to listen for.

  #### Returns string

### expandUp

* get expandUp(): boolean

  Check which direction the menu is expanded in.

  #### Returns boolean

### fixed

* get fixed(): boolean

  Whether to position the context menu as a fixed element, or inject it into the target.

  #### Returns boolean

### relative

* get relative(): "target" | "cursor"

  For fixed context menus, control whether the menu is positioned relative to the target or to the mouse cursor.
  Non-fixed context menus are always positioned relative to the target.

  #### Returns "target" | "cursor"

### selector

* get selector(): string

  A CSS selector to identify context menu targets.

  #### Returns string

### target

* get target(): HTMLElement

  The parent HTML element to which the context menu is attached

  #### Returns HTMLElement

### `Static`implementation

* get implementation(): typeof ContextMenu

  Retrieve the configured ContextMenu implementation.

  #### Returns typeof ContextMenu

## Methods

### activateListeners

* activateListeners(menu: HTMLElement, options?: [ContextMenuRenderOptions](../interfaces/foundry.ContextMenuRenderOptions.md)): void

  Local listeners which apply to each ContextMenu instance which is created.

  #### Parameters

  + menu: HTMLElement

    The context menu element.
  + `Optional`options: [ContextMenuRenderOptions](../interfaces/foundry.ContextMenuRenderOptions.md) = {}

  #### Returns void

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

### `Protected`\_animate

* \_animate(open?: boolean): Promise<void>

  `Protected`

  Animate the context menu's height when opening or closing.

  #### Parameters

  + open: boolean = false

    Whether the menu is opening or closing.

  #### Returns Promise<void>

  A Promise that resolves when the animation completes.

### `Protected`\_close

* \_close(options?: { target?: HTMLElement }): void

  `Protected`

  Close the menu and remove it from the DOM.

  #### Parameters

  + `Optional`options: { target?: HTMLElement } = {}
    - ##### `Optional`target?: HTMLElement

      The target element to close on.

  #### Returns void

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

### `Protected`\_onActivate

* \_onActivate(event: Event): Promise<void> | undefined

  `Protected`

  Handle context menu activation.

  #### Parameters

  + event: Event

    The triggering event.

  #### Returns Promise<void> | undefined

### `Protected`\_onRender

* \_onRender(options?: [ContextMenuRenderOptions](../interfaces/foundry.ContextMenuRenderOptions.md)): Promise<void>

  `Protected`

  Called after the context menu has finished rendering and animating open.

  #### Parameters

  + `Optional`options: [ContextMenuRenderOptions](../interfaces/foundry.ContextMenuRenderOptions.md) = {}

  #### Returns Promise<void>

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

### `Protected`\_preRenderEntries

* \_preRenderEntries(options?: [ContextMenuRenderOptions](../interfaces/foundry.ContextMenuRenderOptions.md)): Promise<void>

  `Protected`

  Called before the menu's entries are rendered.

  #### Parameters

  + `Optional`options: [ContextMenuRenderOptions](../interfaces/foundry.ContextMenuRenderOptions.md) = {}

  #### Returns Promise<void>

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

### `Static`create

* create(  
  Â Â Â Â app: [Application](foundry.appv1.api.Application.md),  
  Â Â Â Â html: any,  
  Â Â Â Â selector: string,  
  Â Â Â Â menuItems: [ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.md)[],  
  Â Â Â Â options?: { hookName?: string },  
  ): ContextMenu

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

  #### Returns ContextMenu

  #### Deprecated

  since v13