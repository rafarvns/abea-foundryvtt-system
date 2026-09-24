---
title: "ChatMenuPlugin | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.common_prosemirror_chat__module.ChatMenuPlugin.html"
category: "classes"
---

# Class ChatMenuPlugin

A ProseMirror menu implementation specialized for the chat editor.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.common/prosemirror/chat/_module.ChatMenuPlugin))

* [ProseMirrorMenu](foundry.prosemirror.ProseMirrorMenu.md)
  + ChatMenuPlugin

##### Index

### Constructors

[constructor](#constructor)

### Properties

[options](#options)
[schema](#schema)
[key](#key)
[\_MENU\_ITEM\_SCOPES](#_menu_item_scopes)

### Accessors

[editingSource](#editingsource)

### Methods

[\_getMenuItems](#_getmenuitems)
[activateListeners](#activatelisteners)
[render](#render)
[update](#update)
[\_clearFormatting](#_clearformatting)
[\_clearMark](#_clearmark)
[\_createDropDowns](#_createdropdowns)
[\_editSource](#_editsource)
[\_fontColorPrompt](#_fontcolorprompt)
[\_fontSizePrompt](#_fontsizeprompt)
[\_getDropDownMenus](#_getdropdownmenus)
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

* new ChatMenuPlugin(  
  Â Â Â Â schema: Schema<any, any>,  
  Â Â Â Â view: EditorView,  
  Â Â Â Â options?: [ProseMirrorMenuOptions](../interfaces/foundry.prosemirror.types.ProseMirrorMenuOptions.md),  
  ): ChatMenuPlugin

  #### Parameters

  + schema: Schema<any, any>

    The ProseMirror schema to build a menu for.
  + view: EditorView

    The editor view.
  + `Optional`options: [ProseMirrorMenuOptions](../interfaces/foundry.prosemirror.types.ProseMirrorMenuOptions.md) = {}

    Additional options to configure the plugin's behaviour.

  #### Returns ChatMenuPlugin

  Inherited from [ProseMirrorMenu](foundry.prosemirror.ProseMirrorMenu.md).[constructor](foundry.prosemirror.ProseMirrorMenu.md#constructor)

## Properties

### options

options: [ProseMirrorMenuOptions](../interfaces/foundry.prosemirror.types.ProseMirrorMenuOptions.md)

Additional options to configure the plugin's behaviour.

Inherited from [ProseMirrorMenu](foundry.prosemirror.ProseMirrorMenu.md).[options](foundry.prosemirror.ProseMirrorMenu.md#options)

### schema

schema: Schema<any, any>

The ProseMirror schema to build the plugin against.

Inherited from [ProseMirrorMenu](foundry.prosemirror.ProseMirrorMenu.md).[schema](foundry.prosemirror.ProseMirrorMenu.md#schema)

### `Static`key

key: PluginKey<any> = ...

Overrides [ProseMirrorMenu](foundry.prosemirror.ProseMirrorMenu.md).[key](foundry.prosemirror.ProseMirrorMenu.md#key)

### `Protected` `Static`\_MENU\_ITEM\_SCOPES

\_MENU\_ITEM\_SCOPES: { BOTH: string; HTML: string; TEXT: string } = ...

An enumeration of editor scopes in which a menu item can appear

Inherited from [ProseMirrorMenu](foundry.prosemirror.ProseMirrorMenu.md).[\_MENU\_ITEM\_SCOPES](foundry.prosemirror.ProseMirrorMenu.md#_menu_item_scopes)

## Accessors

### editingSource

* get editingSource(): boolean

  Track whether we are currently in a state of editing the HTML source.

  #### Returns boolean

  Inherited from ProseMirrorMenu.editingSource

## Methods

### \_getMenuItems

* \_getMenuItems(): [ProseMirrorMenuItem](../interfaces/foundry.prosemirror.types.ProseMirrorMenuItem.md)[]

  Configure the items for this menu.

  #### Returns [ProseMirrorMenuItem](../interfaces/foundry.prosemirror.types.ProseMirrorMenuItem.md)[]

  Overrides [ProseMirrorMenu](foundry.prosemirror.ProseMirrorMenu.md).[\_getMenuItems](foundry.prosemirror.ProseMirrorMenu.md#_getmenuitems)

### activateListeners

* activateListeners(html: HTMLMenuElement): void

  Attach event listeners.

  #### Parameters

  + html: HTMLMenuElement

    The root menu element.

  #### Returns void

  Inherited from [ProseMirrorMenu](foundry.prosemirror.ProseMirrorMenu.md).[activateListeners](foundry.prosemirror.ProseMirrorMenu.md#activatelisteners)

### render

* render(): ChatMenuPlugin

  Render the menu's HTML.

  #### Returns ChatMenuPlugin

  Overrides [ProseMirrorMenu](foundry.prosemirror.ProseMirrorMenu.md).[render](foundry.prosemirror.ProseMirrorMenu.md#render)

### update

* update(view: EditorView, prevState: EditorView): void

  Called whenever the view's state is updated.

  #### Parameters

  + view: EditorView

    The current editor state.
  + prevState: EditorView

    The previous editor state.

  #### Returns void

  Inherited from [ProseMirrorMenu](foundry.prosemirror.ProseMirrorMenu.md).[update](foundry.prosemirror.ProseMirrorMenu.md#update)

### `Protected`\_clearFormatting

* \_clearFormatting(): void

  `Protected`

  Clear any marks from the current selection.

  #### Returns void

  Inherited from [ProseMirrorMenu](foundry.prosemirror.ProseMirrorMenu.md).[\_clearFormatting](foundry.prosemirror.ProseMirrorMenu.md#_clearformatting)

### `Protected`\_clearMark

* \_clearMark(markType: MarkType): void

  `Protected`

  Clear a specific mark from the selection.

  #### Parameters

  + markType: MarkType

    The mark to remove.

  #### Returns void

  Inherited from [ProseMirrorMenu](foundry.prosemirror.ProseMirrorMenu.md).[\_clearMark](foundry.prosemirror.ProseMirrorMenu.md#_clearmark)

### `Protected`\_createDropDowns

* \_createDropDowns(): void

  `Protected`

  Instantiate the ProseMirrorDropDown instances and configure them with the defined menu items.

  #### Returns void

  Inherited from [ProseMirrorMenu](foundry.prosemirror.ProseMirrorMenu.md).[\_createDropDowns](foundry.prosemirror.ProseMirrorMenu.md#_createdropdowns)

### `Protected`\_editSource

* \_editSource(): void

  `Protected`

  Spawn a dialog for editing the message's source HTML.

  #### Returns void

### `Protected`\_fontColorPrompt

* \_fontColorPrompt(): Promise<void>

  `Protected`

  Display a prompt for font color.

  #### Returns Promise<void>

  Inherited from [ProseMirrorMenu](foundry.prosemirror.ProseMirrorMenu.md).[\_fontColorPrompt](foundry.prosemirror.ProseMirrorMenu.md#_fontcolorprompt)

### `Protected`\_fontSizePrompt

* \_fontSizePrompt(): Promise<void>

  `Protected`

  Display a prompt for a custom font size.

  #### Returns Promise<void>

  Inherited from [ProseMirrorMenu](foundry.prosemirror.ProseMirrorMenu.md).[\_fontSizePrompt](foundry.prosemirror.ProseMirrorMenu.md#_fontsizeprompt)

### `Protected`\_getDropDownMenus

* \_getDropDownMenus(): Record<string, [ProseMirrorDropDownConfig](../interfaces/foundry.prosemirror.types.ProseMirrorDropDownConfig.md)>

  `Protected`

  Configure dropdowns for this menu. Each entry in the top-level array corresponds to a separate drop-down.

  #### Returns Record<string, [ProseMirrorDropDownConfig](../interfaces/foundry.prosemirror.types.ProseMirrorDropDownConfig.md)>

  Inherited from [ProseMirrorMenu](foundry.prosemirror.ProseMirrorMenu.md).[\_getDropDownMenus](foundry.prosemirror.ProseMirrorMenu.md#_getdropdownmenus)

### `Protected`\_handleSave

* \_handleSave(): any

  `Protected`

  Handle requests to save the editor contents

  #### Returns any

  Inherited from [ProseMirrorMenu](foundry.prosemirror.ProseMirrorMenu.md).[\_handleSave](foundry.prosemirror.ProseMirrorMenu.md#_handlesave)

### `Protected`\_insertImagePrompt

* \_insertImagePrompt(): Promise<void>

  `Protected`

  Display the insert image prompt.

  #### Returns Promise<void>

  Inherited from [ProseMirrorMenu](foundry.prosemirror.ProseMirrorMenu.md).[\_insertImagePrompt](foundry.prosemirror.ProseMirrorMenu.md#_insertimageprompt)

### `Protected`\_insertLinkPrompt

* \_insertLinkPrompt(): Promise<void>

  `Protected`

  Display the insert link prompt.

  #### Returns Promise<void>

  Inherited from [ProseMirrorMenu](foundry.prosemirror.ProseMirrorMenu.md).[\_insertLinkPrompt](foundry.prosemirror.ProseMirrorMenu.md#_insertlinkprompt)

### `Protected`\_insertTablePrompt

* \_insertTablePrompt(): Promise<void>

  `Protected`

  Display the insert table prompt.

  #### Returns Promise<void>

  Inherited from [ProseMirrorMenu](foundry.prosemirror.ProseMirrorMenu.md).[\_insertTablePrompt](foundry.prosemirror.ProseMirrorMenu.md#_inserttableprompt)

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

  Inherited from [ProseMirrorMenu](foundry.prosemirror.ProseMirrorMenu.md).[\_isItemActive](foundry.prosemirror.ProseMirrorMenu.md#_isitemactive)

### `Protected`\_isMarkActive

* \_isMarkActive(item: [ProseMirrorMenuItem](../interfaces/foundry.prosemirror.types.ProseMirrorMenuItem.md)): boolean

  `Protected`

  Determine whether the given menu item representing a mark is active or not.

  #### Parameters

  + item: [ProseMirrorMenuItem](../interfaces/foundry.prosemirror.types.ProseMirrorMenuItem.md)

    The menu item representing a MarkType.

  #### Returns boolean

  Whether the cursor or selection is in a state represented by the given mark.

  Inherited from [ProseMirrorMenu](foundry.prosemirror.ProseMirrorMenu.md).[\_isMarkActive](foundry.prosemirror.ProseMirrorMenu.md#_ismarkactive)

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

  Inherited from [ProseMirrorMenu](foundry.prosemirror.ProseMirrorMenu.md).[\_isNodeActive](foundry.prosemirror.ProseMirrorMenu.md#_isnodeactive)

### `Protected`\_onAction

* \_onAction(event: MouseEvent): void

  `Protected`

  Handle a button press.

  #### Parameters

  + event: MouseEvent

    The click event.

  #### Returns void

  Inherited from [ProseMirrorMenu](foundry.prosemirror.ProseMirrorMenu.md).[\_onAction](foundry.prosemirror.ProseMirrorMenu.md#_onaction)

### `Protected`\_onResize

* \_onResize(entries: ResizeObserverEntry[]): void

  `Protected`

  Handle collapsing various menu items to accommodate the menu's available width.

  #### Parameters

  + entries: ResizeObserverEntry[]

  #### Returns void

  Inherited from [ProseMirrorMenu](foundry.prosemirror.ProseMirrorMenu.md).[\_onResize](foundry.prosemirror.ProseMirrorMenu.md#_onresize)

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

  Inherited from [ProseMirrorMenu](foundry.prosemirror.ProseMirrorMenu.md).[\_placeInsert](foundry.prosemirror.ProseMirrorMenu.md#_placeinsert)

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

  Inherited from [ProseMirrorMenu](foundry.prosemirror.ProseMirrorMenu.md).[\_showDialog](foundry.prosemirror.ProseMirrorMenu.md#_showdialog)

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

  Inherited from [ProseMirrorMenu](foundry.prosemirror.ProseMirrorMenu.md).[\_toggleBlock](foundry.prosemirror.ProseMirrorMenu.md#_toggleblock)

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

  Inherited from [ProseMirrorMenu](foundry.prosemirror.ProseMirrorMenu.md).[\_toggleMark](foundry.prosemirror.ProseMirrorMenu.md#_togglemark)

### `Protected`\_toggleMatches

* \_toggleMatches(): Promise<void>

  `Protected`

  Toggle link recommendations

  #### Returns Promise<void>

  Inherited from [ProseMirrorMenu](foundry.prosemirror.ProseMirrorMenu.md).[\_toggleMatches](foundry.prosemirror.ProseMirrorMenu.md#_togglematches)

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

  Inherited from [ProseMirrorMenu](foundry.prosemirror.ProseMirrorMenu.md).[\_toggleTextBlock](foundry.prosemirror.ProseMirrorMenu.md#_toggletextblock)

### `Protected`\_wrapEditor

* \_wrapEditor(): void

  `Protected`

  Wrap the editor view element and inject our template ready to be rendered into.

  #### Returns void

  Inherited from [ProseMirrorMenu](foundry.prosemirror.ProseMirrorMenu.md).[\_wrapEditor](foundry.prosemirror.ProseMirrorMenu.md#_wrapeditor)

### `Protected`getActionElement

* getActionElement(action: string): HTMLElement

  `Protected`

  Get the visible element from its action.

  #### Parameters

  + action: string

    The action.

  #### Returns HTMLElement

  Inherited from [ProseMirrorMenu](foundry.prosemirror.ProseMirrorMenu.md).[getActionElement](foundry.prosemirror.ProseMirrorMenu.md#getactionelement)

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

  Inherited from [ProseMirrorMenu](foundry.prosemirror.ProseMirrorMenu.md).[activateListeners](foundry.prosemirror.ProseMirrorMenu.md#activatelisteners-2)

### `Static`build

* build(schema: any, options?: {}): Plugin<any>

  Build the plugin.

  #### Parameters

  + schema: any

    The ProseMirror schema to build the plugin against.
  + options: {} = {}

    Additional options to pass to the plugin.

  #### Returns Plugin<any>

  Inherited from [ProseMirrorMenu](foundry.prosemirror.ProseMirrorMenu.md).[build](foundry.prosemirror.ProseMirrorMenu.md#build)