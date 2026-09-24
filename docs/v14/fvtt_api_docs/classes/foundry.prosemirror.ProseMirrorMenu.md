---
title: "ProseMirrorMenu | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.prosemirror.ProseMirrorMenu.html"
category: "classes"
---

# Class ProseMirrorMenu

A class responsible for building a menu for a ProseMirror instance.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.prosemirror.ProseMirrorMenu))

* [ProseMirrorPlugin](foundry.prosemirror.ProseMirrorPlugin.md)
  + ProseMirrorMenu
    - [ChatMenuPlugin](foundry.common_prosemirror_chat__module.ChatMenuPlugin.md)

##### Index

### Constructors

[constructor](#constructor)

### Properties

[options](#options)
[schema](#schema)
[\_MENU\_ITEM\_SCOPES](#_menu_item_scopes)

### Accessors

[editingSource](#editingsource)
[key](#key)

### Methods

[activateListeners](#activatelisteners)
[render](#render)
[update](#update)
[\_clearFormatting](#_clearformatting)
[\_clearMark](#_clearmark)
[\_createDropDowns](#_createdropdowns)
[\_fontColorPrompt](#_fontcolorprompt)
[\_fontSizePrompt](#_fontsizeprompt)
[\_getDropDownMenus](#_getdropdownmenus)
[\_getMenuItems](#_getmenuitems)
[\_handleSave](#_handlesave)
[\_insertImagePrompt](#_insertimageprompt)
[\_insertLinkPrompt](#_insertlinkprompt)
[\_insertTablePrompt](#_inserttableprompt)
[\_isItemActive](#_isitemactive)
[\_isMarkActive](#_ismarkactive)
[\_isNodeActive](#_isnodeactive)
[\_onAction](#_onaction)
[\_onResize](#_onresize)
[\_placeInsert](#_placeinsert)
[\_showDialog](#_showdialog)
[\_toggleBlock](#_toggleblock)
[\_toggleMark](#_togglemark)
[\_toggleMatches](#_togglematches)
[\_toggleTextBlock](#_toggletextblock)
[\_wrapEditor](#_wrapeditor)
[getActionElement](#getactionelement)
[activateListeners](#activatelisteners-2)
[build](#build)

## Constructors

### constructor

* new ProseMirrorMenu(  
  Â Â Â Â schema: Schema<any, any>,  
  Â Â Â Â view: EditorView,  
  Â Â Â Â options?: [ProseMirrorMenuOptions](../interfaces/foundry.prosemirror.types.ProseMirrorMenuOptions.md),  
  ): ProseMirrorMenu

  #### Parameters

  + schema: Schema<any, any>

    The ProseMirror schema to build a menu for.
  + view: EditorView

    The editor view.
  + `Optional`options: [ProseMirrorMenuOptions](../interfaces/foundry.prosemirror.types.ProseMirrorMenuOptions.md) = {}

    Additional options to configure the plugin's behaviour.

  #### Returns ProseMirrorMenu

  Overrides [ProseMirrorPlugin](foundry.prosemirror.ProseMirrorPlugin.md).[constructor](foundry.prosemirror.ProseMirrorPlugin.md#constructor)

## Properties

### options

options: [ProseMirrorMenuOptions](../interfaces/foundry.prosemirror.types.ProseMirrorMenuOptions.md)

Additional options to configure the plugin's behaviour.

### schema

schema: Schema<any, any>

The ProseMirror schema to build the plugin against.

Inherited from [ProseMirrorPlugin](foundry.prosemirror.ProseMirrorPlugin.md).[schema](foundry.prosemirror.ProseMirrorPlugin.md#schema)

### `Protected` `Static`\_MENU\_ITEM\_SCOPES

\_MENU\_ITEM\_SCOPES: { BOTH: string; HTML: string; TEXT: string } = ...

An enumeration of editor scopes in which a menu item can appear

## Accessors

### editingSource

* get editingSource(): boolean

  Track whether we are currently in a state of editing the HTML source.

  #### Returns boolean

### `Static`key

* get key(): PluginKey<any>

  A unique key for this plugin that can be used to identify a plugin instance in any given editor.

  #### Returns PluginKey<any>

  Inherited from ProseMirrorPlugin.key

## Methods

### activateListeners

* activateListeners(html: HTMLMenuElement): void

  Attach event listeners.

  #### Parameters

  + html: HTMLMenuElement

    The root menu element.

  #### Returns void

### render

* render(): ProseMirrorMenu

  Render the menu's HTML.

  #### Returns ProseMirrorMenu

### update

* update(view: EditorView, prevState: EditorView): void

  Called whenever the view's state is updated.

  #### Parameters

  + view: EditorView

    The current editor state.
  + prevState: EditorView

    The previous editor state.

  #### Returns void

### `Protected`\_clearFormatting

* \_clearFormatting(): void

  `Protected`

  Clear any marks from the current selection.

  #### Returns void

### `Protected`\_clearMark

* \_clearMark(markType: MarkType): void

  `Protected`

  Clear a specific mark from the selection.

  #### Parameters

  + markType: MarkType

    The mark to remove.

  #### Returns void

### `Protected`\_createDropDowns

* \_createDropDowns(): void

  `Protected`

  Instantiate the ProseMirrorDropDown instances and configure them with the defined menu items.

  #### Returns void

### `Protected`\_fontColorPrompt

* \_fontColorPrompt(): Promise<void>

  `Protected`

  Display a prompt for font color.

  #### Returns Promise<void>

### `Protected`\_fontSizePrompt

* \_fontSizePrompt(): Promise<void>

  `Protected`

  Display a prompt for a custom font size.

  #### Returns Promise<void>

### `Protected`\_getDropDownMenus

* \_getDropDownMenus(): Record<string, [ProseMirrorDropDownConfig](../interfaces/foundry.prosemirror.types.ProseMirrorDropDownConfig.md)>

  `Protected`

  Configure dropdowns for this menu. Each entry in the top-level array corresponds to a separate drop-down.

  #### Returns Record<string, [ProseMirrorDropDownConfig](../interfaces/foundry.prosemirror.types.ProseMirrorDropDownConfig.md)>

### `Protected`\_getMenuItems

* \_getMenuItems(): [ProseMirrorMenuItem](../interfaces/foundry.prosemirror.types.ProseMirrorMenuItem.md)[]

  `Protected`

  Configure the items for this menu.

  #### Returns [ProseMirrorMenuItem](../interfaces/foundry.prosemirror.types.ProseMirrorMenuItem.md)[]

### `Protected`\_handleSave

* \_handleSave(): any

  `Protected`

  Handle requests to save the editor contents

  #### Returns any

### `Protected`\_insertImagePrompt

* \_insertImagePrompt(): Promise<void>

  `Protected`

  Display the insert image prompt.

  #### Returns Promise<void>

### `Protected`\_insertLinkPrompt

* \_insertLinkPrompt(): Promise<void>

  `Protected`

  Display the insert link prompt.

  #### Returns Promise<void>

### `Protected`\_insertTablePrompt

* \_insertTablePrompt(): Promise<void>

  `Protected`

  Display the insert table prompt.

  #### Returns Promise<void>

### `Protected`\_isItemActive

* \_isItemActive(item: [ProseMirrorMenuItem](../interfaces/foundry.prosemirror.types.ProseMirrorMenuItem.md)): boolean

  `Protected`

  Determine whether the given menu item is currently active or not.

  #### Parameters

  + item: [ProseMirrorMenuItem](../interfaces/foundry.prosemirror.types.ProseMirrorMenuItem.md)

    The menu item.

  #### Returns boolean

  Whether the cursor or selection is in a state represented by the given menu
  item.

### `Protected`\_isMarkActive

* \_isMarkActive(item: [ProseMirrorMenuItem](../interfaces/foundry.prosemirror.types.ProseMirrorMenuItem.md)): boolean

  `Protected`

  Determine whether the given menu item representing a mark is active or not.

  #### Parameters

  + item: [ProseMirrorMenuItem](../interfaces/foundry.prosemirror.types.ProseMirrorMenuItem.md)

    The menu item representing a MarkType.

  #### Returns boolean

  Whether the cursor or selection is in a state represented by the given mark.

### `Protected`\_isNodeActive

* \_isNodeActive(item: [ProseMirrorMenuItem](../interfaces/foundry.prosemirror.types.ProseMirrorMenuItem.md)): boolean

  `Protected`

  Determine whether the given menu item representing a node is active or not.

  #### Parameters

  + item: [ProseMirrorMenuItem](../interfaces/foundry.prosemirror.types.ProseMirrorMenuItem.md)

    The menu item representing a NodeType.

  #### Returns boolean

  Whether the cursor or selection is currently within a block of this menu item's
  node type.

### `Protected`\_onAction

* \_onAction(event: MouseEvent): void

  `Protected`

  Handle a button press.

  #### Parameters

  + event: MouseEvent

    The click event.

  #### Returns void

### `Protected`\_onResize

* \_onResize(entries: ResizeObserverEntry[]): void

  `Protected`

  Handle collapsing various menu items to accommodate the menu's available width.

  #### Parameters

  + entries: ResizeObserverEntry[]

  #### Returns void

### `Protected`\_placeInsert

* \_placeInsert(  
  Â Â Â Â state: EditorState,  
  Â Â Â Â dispatch: Function,  
  Â Â Â Â view: EditorView,  
  Â Â Â Â html: string,  
  Â Â Â Â options?: { inline?: boolean },  
  ): void

  `Protected`

  Place the given insert into the ProseMirror Document.

  #### Parameters

  + state: EditorState

    The editor state.
  + dispatch: Function

    Dispatch changes to the editor state.
  + view: EditorView

    The editor view.
  + html: string

    The insert's markup.
  + `Optional`options: { inline?: boolean } = {}
    - ##### `Optional`inline?: boolean

      Whether the insert contains inline content, otherwise block content is assumed.

  #### Returns void

### `Protected`\_showDialog

* \_showDialog(  
  Â Â Â Â action: string,  
  Â Â Â Â template: string,  
  Â Â Â Â options?: { data?: object },  
  ): HTMLDialogElement

  `Protected`

  Create a dialog for a menu button.

  #### Parameters

  + action: string

    The unique menu button action.
  + template: string

    The dialog's template.
  + `Optional`options: { data?: object } = {}

    Additional options to configure the dialog's behaviour.

    - ##### `Optional`data?: object

      Data to pass to the template.

  #### Returns HTMLDialogElement

### `Protected`\_toggleBlock

* \_toggleBlock(  
  Â Â Â Â node: NodeType,  
  Â Â Â Â wrap: [MenuToggleBlockWrapCommand](../types/foundry.prosemirror.types.MenuToggleBlockWrapCommand.md),  
  Â Â Â Â options?: { attrs?: object },  
  ): void

  `Protected`

  Toggle the given selection by wrapping it in a given block or lifting it out of one.

  #### Parameters

  + node: NodeType

    The type of node being interacted with.
  + wrap: [MenuToggleBlockWrapCommand](../types/foundry.prosemirror.types.MenuToggleBlockWrapCommand.md)

    The wrap command specific to the given node.
  + `Optional`options: { attrs?: object } = {}

    Additional options to configure behaviour.

    - ##### `Optional`attrs?: object

      Attributes for the node.

  #### Returns void

### `Protected`\_toggleMark

* \_toggleMark(markType: MarkType, attrs?: any): void

  `Protected`

  Toggle a mark in the selection. Unlike the built-in toggleMark command, this will check for exact attribute
  matches to determine toggling behavior.

  #### Parameters

  + markType: MarkType

    The mark to apply.
  + attrs: any = null

    The mark's attributes.

  #### Returns void

### `Protected`\_toggleMatches

* \_toggleMatches(): Promise<void>

  `Protected`

  Toggle link recommendations

  #### Returns Promise<void>

### `Protected`\_toggleTextBlock

* \_toggleTextBlock(node: NodeType, options?: { attrs?: object }): void

  `Protected`

  Toggle the given selection by wrapping it in a given text block, or reverting to a paragraph block.

  #### Parameters

  + node: NodeType

    The type of node being interacted with.
  + `Optional`options: { attrs?: object } = {}

    Additional options to configure behaviour.

    - ##### `Optional`attrs?: object

      Attributes for the node.

  #### Returns void

### `Protected`\_wrapEditor

* \_wrapEditor(): void

  `Protected`

  Wrap the editor view element and inject our template ready to be rendered into.

  #### Returns void

### `Protected`getActionElement

* getActionElement(action: string): HTMLElement

  `Protected`

  Get the visible element from its action.

  #### Parameters

  + action: string

    The action.

  #### Returns HTMLElement

### `Static`activateListeners

* activateListeners(  
  Â Â Â Â document: Document,  
  Â Â Â Â \_\_namedParameters?: { \_deprecated?: boolean },  
  ): void

  Global listeners for the drop-down menu.

  #### Parameters

  + document: Document

    The document to bind to.
  + \_\_namedParameters: { \_deprecated?: boolean } = {}

  #### Returns void

### `Static`build

* build(schema: any, options?: {}): Plugin<any>

  Build the plugin.

  #### Parameters

  + schema: any

    The ProseMirror schema to build the plugin against.
  + options: {} = {}

    Additional options to pass to the plugin.

  #### Returns Plugin<any>

  Overrides [ProseMirrorPlugin](foundry.prosemirror.ProseMirrorPlugin.md).[build](foundry.prosemirror.ProseMirrorPlugin.md#build)