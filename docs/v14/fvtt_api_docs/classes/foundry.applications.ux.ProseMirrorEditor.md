---
title: "ProseMirrorEditor | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.applications.ux.ProseMirrorEditor.html"
category: "classes"
---

# Class ProseMirrorEditor

A class responsible for managing state and collaborative editing of a single ProseMirror instance.

##### Index

### Constructors

[constructor](#constructor)

### Methods

[destroy](#destroy)
[isDirty](#isdirty)
[\_disableSourceCodeEditing](#_disablesourcecodeediting)
[\_handleAutosave](#_handleautosave)
[\_onNewSteps](#_onnewsteps)
[\_resync](#_resync)
[\_updateUserDisplay](#_updateuserdisplay)
[\_activateSocketListeners](#_activatesocketlisteners)
[buildDefaultPlugins](#builddefaultplugins)
[create](#create)
[\_createCollaborativeEditorView](#_createcollaborativeeditorview)
[\_createLocalEditorView](#_createlocaleditorview)
[\_onAutosave](#_onautosave)
[\_onNewSteps](#_onnewsteps-2)
[\_onResync](#_onresync)
[\_onUsersEditing](#_onusersediting)

## Constructors

### constructor

* new ProseMirrorEditor(  
  Â Â Â Â uuid: string,  
  Â Â Â Â view: EditorView,  
  Â Â Â Â options?: { collaborate?: boolean; document?: any },  
  Â Â Â Â \_collaborate: any,  
  Â Â Â Â \_options?: {},  
  ): ProseMirrorEditor

  #### Parameters

  + uuid: string

    A string that uniquely identifies this ProseMirror instance.
  + view: EditorView

    The ProseMirror EditorView.
  + `Optional`options: { collaborate?: boolean; document?: any } = {}

    Additional options.

    - ##### `Optional`collaborate?: boolean

      Whether this is a collaborative editor.
    - ##### `Optional`document?: any

      A document associated with this editor.
  + \_collaborate: any
  + \_options: {} = {}

  #### Returns ProseMirrorEditor

## Methods

### destroy

* destroy(): void

  Retire this editor instance and clean up.

  #### Returns void

### isDirty

* isDirty(): boolean

  Have the contents of the editor been edited by the user?

  #### Returns boolean

### `Protected`\_disableSourceCodeEditing

* \_disableSourceCodeEditing(): void

  `Protected`

  Disable source code editing if the user was editing it when new steps arrived.

  #### Returns void

### `Protected`\_handleAutosave

* \_handleAutosave(html: string): void

  `Protected`

  Handle an autosave update for an already-open editor.

  #### Parameters

  + html: string

    The updated editor contents.

  #### Returns void

### `Protected`\_onNewSteps

* \_onNewSteps(offset: string, history: [ProseMirrorHistory](../interfaces/foundry.ProseMirrorHistory.md)[]): void

  `Protected`

  Handle new editing steps supplied by the server.

  #### Parameters

  + offset: string

    The offset into the history, representing the point at which it was last
    truncated.
  + history: [ProseMirrorHistory](../interfaces/foundry.ProseMirrorHistory.md)[]

    The entire edit history.

  #### Returns void

### `Protected`\_resync

* \_resync(): void

  `Protected`

  The state of this ProseMirror editor has fallen too far behind the central authority's and must be re-synced.

  #### Returns void

### `Protected`\_updateUserDisplay

* \_updateUserDisplay(users: string[]): void

  `Protected`

  Handle users joining or leaving collaborative editing.

  #### Parameters

  + users: string[]

    The IDs of users currently editing (including ourselves).

  #### Returns void

### `Static`\_activateSocketListeners

* \_activateSocketListeners(socket: Socket): void

  `Internal`

  Listen for ProseMirror collaboration events.

  #### Parameters

  + socket: Socket

    The open websocket.

  #### Returns void

### `Static`buildDefaultPlugins

* buildDefaultPlugins(): Record<string, Plugin>

  Instantiate a list of default editor plugins.

  #### Returns Record<string, Plugin>

### `Static`create

* create(  
  Â Â Â Â target: HTMLElement,  
  Â Â Â Â content?: string,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â collaborate?: boolean;  
  Â Â Â Â Â Â Â Â document?: any;  
  Â Â Â Â Â Â Â Â fieldName?: string;  
  Â Â Â Â Â Â Â Â plugins?: Record<string, Plugin>;  
  Â Â Â Â Â Â Â Â props?: object;  
  Â Â Â Â Â Â Â Â relativeLinks?: boolean;  
  Â Â Â Â Â Â Â Â uuid?: string;  
  Â Â Â Â },  
  ): Promise<ProseMirrorEditor>

  Create a ProseMirror editor instance.

  #### Parameters

  + target: HTMLElement

    An HTML element to mount the editor to.
  + `Optional`content: string = ""

    Content to populate the editor with.
  + `Optional`options: {  
    Â Â Â Â collaborate?: boolean;  
    Â Â Â Â document?: any;  
    Â Â Â Â fieldName?: string;  
    Â Â Â Â plugins?: Record<string, Plugin>;  
    Â Â Â Â props?: object;  
    Â Â Â Â relativeLinks?: boolean;  
    Â Â Â Â uuid?: string;  
    } = {}

    Additional options to configure the ProseMirror instance.

    - ##### `Optional`collaborate?: boolean

      Whether collaborative editing enabled.
    - ##### `Optional`document?: any

      A Document whose content is being edited. Required for
      collaborative editing and relative UUID generation.
    - ##### `Optional`fieldName?: string

      The field within the Document that is being edited. Required for
      collaborative editing.
    - ##### `Optional`plugins?: Record<string, Plugin>

      Plugins to include with the editor.
    - ##### `Optional`props?: object

      Additional ProseMirror editor properties.
    - ##### `Optional`relativeLinks?: boolean

      Whether to generate relative UUID links to Documents that are
      dropped on the editor.
    - ##### `Optional`uuid?: string

      A string to uniquely identify this ProseMirror instance. Ignored
      for a collaborative editor.

  #### Returns Promise<ProseMirrorEditor>

### `Protected` `Static`\_createCollaborativeEditorView

* \_createCollaborativeEditorView(  
  Â Â Â Â uuid: string,  
  Â Â Â Â target: HTMLElement,  
  Â Â Â Â state: EditorState,  
  Â Â Â Â plugins: Plugin[],  
  Â Â Â Â props: object,  
  ): Promise<EditorView>

  `Protected`

  Create an EditorView with collaborative editing enabled.

  #### Parameters

  + uuid: string

    The ProseMirror instance UUID.
  + target: HTMLElement

    An HTML element to mount the editor view to.
  + state: EditorState

    The ProseMirror editor state.
  + plugins: Plugin[]

    The ProseMirror editor plugins to load.
  + props: object

    Additional ProseMirror editor properties.

  #### Returns Promise<EditorView>

### `Protected` `Static`\_createLocalEditorView

* \_createLocalEditorView(  
  Â Â Â Â target: HTMLElement,  
  Â Â Â Â state: EditorState,  
  Â Â Â Â plugins: Plugin[],  
  Â Â Â Â props: object,  
  ): EditorView

  `Protected`

  Create a plain EditorView without collaborative editing.

  #### Parameters

  + target: HTMLElement

    An HTML element to mount the editor view to.
  + state: EditorState

    The ProseMirror editor state.
  + plugins: Plugin[]

    The ProseMirror editor plugins to load.
  + props: object

    Additional ProseMirror editor properties.

  #### Returns EditorView

### `Protected` `Static`\_onAutosave

* \_onAutosave(uuid: string, html: string): Promise<void>

  `Protected`

  Update client state when the editor contents are autosaved server-side.

  #### Parameters

  + uuid: string

    The UUID that uniquely identifies the ProseMirror instance.
  + html: string

    The updated editor contents.

  #### Returns Promise<void>

### `Protected` `Static`\_onNewSteps

* \_onNewSteps(uuid: string, offset: number, history: [ProseMirrorHistory](../interfaces/foundry.ProseMirrorHistory.md)[]): void

  `Protected`

  Handle new editing steps supplied by the server.

  #### Parameters

  + uuid: string

    The UUID that uniquely identifies the ProseMirror instance.
  + offset: number

    The offset into the history, representing the point at which it was last
    truncated.
  + history: [ProseMirrorHistory](../interfaces/foundry.ProseMirrorHistory.md)[]

    The entire edit history.

  #### Returns void

### `Protected` `Static`\_onResync

* \_onResync(uuid: string): void

  `Protected`

  Our client is too far behind the central authority's state and must be re-synced.

  #### Parameters

  + uuid: string

    The UUID that uniquely identifies the ProseMirror instance.

  #### Returns void

### `Protected` `Static`\_onUsersEditing

* \_onUsersEditing(uuid: string, users: string[]): void

  `Protected`

  Handle users joining or leaving collaborative editing.

  #### Parameters

  + uuid: string

    The UUID that uniquely identifies the ProseMirror instance.
  + users: string[]

    The IDs of the users editing (including ourselves).

  #### Returns void