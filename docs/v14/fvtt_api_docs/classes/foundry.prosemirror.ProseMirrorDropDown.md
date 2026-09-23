---
title: "ProseMirrorDropDown | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.prosemirror.ProseMirrorDropDown.html"
category: "classes"
---

# Class ProseMirrorDropDown

A class responsible for creating a drop-down.

##### Index

### Constructors

[constructor](#constructor)

### Accessors

[menu](#menu)
[weight](#weight)

### Methods

[activateListeners](#activatelisteners)
[forEachItem](#foreachitem)
[render](#render)
[#onActivate](#onactivate)
[\_renderMenu](#_rendermenu)
[\_renderMenuItem](#_rendermenuitem)

## Constructors

### constructor

* new ProseMirrorDropDown(  
  Â Â Â Â title: string,  
  Â Â Â Â items: [ProseMirrorDropDownEntry](../types/foundry.prosemirror.types.ProseMirrorDropDownEntry.md)[],  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â cssClass?: string;  
  Â Â Â Â Â Â Â Â icon?: string;  
  Â Â Â Â Â Â Â Â menu?: string;  
  Â Â Â Â Â Â Â Â onAction?: (arg0: MouseEvent) => any;  
  Â Â Â Â Â Â Â Â weight?: number;  
  Â Â Â Â },  
  ): ProseMirrorDropDown

  A class responsible for rendering a menu drop-down.

  #### Parameters

  + title: string

    The default title.
  + items: [ProseMirrorDropDownEntry](../types/foundry.prosemirror.types.ProseMirrorDropDownEntry.md)[]

    The configured menu items.
  + `Optional`options: {  
    Â Â Â Â cssClass?: string;  
    Â Â Â Â icon?: string;  
    Â Â Â Â menu?: string;  
    Â Â Â Â onAction?: (arg0: MouseEvent) => any;  
    Â Â Â Â weight?: number;  
    } = {}
    - ##### `Optional`cssClass?: string

      The menu CSS class name. Required if providing an action.
    - ##### `Optional`icon?: string

      Use an icon for the dropdown rather than a text label.
    - ##### `Optional`menu?: string

      An associated menu that this item collapses under.
    - ##### `Optional`onAction?: (arg0: MouseEvent) => any

      A callback to fire when a menu item is clicked.
    - ##### `Optional`weight?: number

      The relative importance of an entry. Entries with lower weight
      collapse first.

  #### Returns ProseMirrorDropDown

## Accessors

### menu

* get menu(): string

  An associated menu that this item collapses under.

  #### Returns string

### weight

* get weight(): number

  The relative importance of this entry.

  #### Returns number

## Methods

### activateListeners

* activateListeners(html: HTMLMenuElement): void

  Attach event listeners.

  #### Parameters

  + html: HTMLMenuElement

    The root menu element.

  #### Returns void

### forEachItem

* forEachItem(fn: (arg0: [ProseMirrorDropDownEntry](../types/foundry.prosemirror.types.ProseMirrorDropDownEntry.md)) => boolean): void

  Recurse through the menu structure and apply a function to each item in it.

  #### Parameters

  + fn: (arg0: [ProseMirrorDropDownEntry](../types/foundry.prosemirror.types.ProseMirrorDropDownEntry.md)) => boolean

    The function to call on each item. Return false to prevent
    iterating over any further items.

  #### Returns void

### render

* render(): string

  Construct the drop-down menu's HTML.

  #### Returns string

  HTML contents as a string.

### `Protected`#onActivate

* "#onActivate"(event: PointerEvent): void

  `Protected`

  Handle spawning a drop-down menu.

  #### Parameters

  + event: PointerEvent

    The triggering event.

  #### Returns void

### `Protected` `Static`\_renderMenu

* \_renderMenu(entries: [ProseMirrorDropDownEntry](../types/foundry.prosemirror.types.ProseMirrorDropDownEntry.md)[]): string

  `Protected`

  Render a list of drop-down menu items.

  #### Parameters

  + entries: [ProseMirrorDropDownEntry](../types/foundry.prosemirror.types.ProseMirrorDropDownEntry.md)[]

    The menu items.

  #### Returns string

  HTML contents as a string.

### `Protected` `Static`\_renderMenuItem

* \_renderMenuItem(item: [ProseMirrorDropDownEntry](../types/foundry.prosemirror.types.ProseMirrorDropDownEntry.md)): string

  `Protected`

  Render an individual drop-down menu item.

  #### Parameters

  + item: [ProseMirrorDropDownEntry](../types/foundry.prosemirror.types.ProseMirrorDropDownEntry.md)

    The menu item.

  #### Returns string

  HTML contents as a string.