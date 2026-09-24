---
title: "JournalTextPageSheet | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.appv1.sheets.JournalTextPageSheet.html"
category: "classes"
---

# Class JournalTextPageSheet

The Application responsible for displaying and editing a single JournalEntryPage text document.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.appv1.sheets.JournalTextPageSheet))

* [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md)
  + JournalTextPageSheet

##### Index

### Constructors

[constructor](#constructor)

### Properties

[\_dragDrop](#_dragdrop)
[\_element](#_element)
[\_minimized](#_minimized)
[\_scrollPositions](#_scrollpositions)
[\_searchFilters](#_searchfilters)
[\_tabs](#_tabs)
[appId](#appid)
[editors](#editors)
[form](#form)
[isV2](#isv2)
[object](#object)
[options](#options)
[position](#position)
[toc](#toc)
[\_priorState](#_priorstate)
[\_secrets](#_secrets)
[\_state](#_state)
[isV2](#isv2-1)
[RENDER\_STATES](#render_states)
[\_converter](#_converter)

### Accessors

[closing](#closing)
[document](#document)
[element](#element)
[id](#id)
[isEditable](#iseditable)
[popOut](#popout)
[rendered](#rendered)
[template](#template)
[title](#title)
[defaultOptions](#defaultoptions)
[format](#format)
[\_customElements](#_customelements)

### Methods

[\_activateCoreListeners](#_activatecorelisteners)
[\_closeView](#_closeview)
[\_contextMenu](#_contextmenu)
[\_createDragDropHandlers](#_createdragdrophandlers)
[\_createSearchFilters](#_createsearchfilters)
[\_createTabHandlers](#_createtabhandlers)
[\_getHeaderButtons](#_getheaderbuttons)
[\_getSecretContent](#_getsecretcontent)
[\_injectHTML](#_injecthtml)
[\_onAutosave](#_onautosave)
[\_onNewSteps](#_onnewsteps)
[\_onResize](#_onresize)
[\_onToggleMinimize](#_ontoggleminimize)
[\_render](#_render)
[\_renderInner](#_renderinner)
[\_renderOuter](#_renderouter)
[\_replaceHTML](#_replacehtml)
[\_updateObject](#_updateobject)
[\_updateSecret](#_updatesecret)
[activateEditor](#activateeditor)
[activateListeners](#activatelisteners)
[activateTab](#activatetab)
[bringToFront](#bringtofront)
[bringToTop](#bringtotop)
[close](#close)
[getData](#getdata)
[isEditorDirty](#iseditordirty)
[maximize](#maximize)
[minimize](#minimize)
[render](#render)
[saveEditor](#saveeditor)
[setPosition](#setposition)
[submit](#submit)
[\_activateEditor](#_activateeditor)
[\_callHooks](#_callhooks)
[\_canDragDrop](#_candragdrop)
[\_canDragStart](#_candragstart)
[\_canUserView](#_canuserview)
[\_configureProseMirrorPlugins](#_configureprosemirrorplugins)
[\_convertFormats](#_convertformats)
[\_createDocumentIdLink](#_createdocumentidlink)
[\_createSecretHandlers](#_createsecrethandlers)
[\_disableFields](#_disablefields)
[\_getSubmitData](#_getsubmitdata)
[\_onChangeColorPicker](#_onchangecolorpicker)
[\_onChangeInput](#_onchangeinput)
[\_onChangeRange](#_onchangerange)
[\_onChangeTab](#_onchangetab)
[\_onConfigureSheet](#_onconfiguresheet)
[\_onDragOver](#_ondragover)
[\_onDragStart](#_ondragstart)
[\_onDrop](#_ondrop)
[\_onEditImage](#_oneditimage)
[\_onSearchFilter](#_onsearchfilter)
[\_onSubmit](#_onsubmit)
[\_restoreScrollPositions](#_restorescrollpositions)
[\_saveScrollPositions](#_savescrollpositions)
[\_waitForImages](#_waitforimages)
[\_getInheritanceChain](#_getinheritancechain)

## Constructors

### constructor

* new JournalTextPageSheet(  
  Â Â Â Â object: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>,  
  Â Â Â Â options?: any,  
  ): JournalTextPageSheet

  #### Parameters

  + object: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

    A Document instance which should be managed by this form.
  + `Optional`options: any = {}

    Optional configuration parameters for how the
    form behaves.

  #### Returns JournalTextPageSheet

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[constructor](foundry.appv1.sheets.JournalPageSheet.md#constructor)

## Properties

### `Internal`\_dragDrop

\_dragDrop: [DragDrop](foundry.applications.ux.DragDrop.md)[]

DragDrop workflow handlers which are active for this Application

Inherited from [JournalSheet](foundry.appv1.sheets.JournalSheet.md).[\_dragDrop](foundry.appv1.sheets.JournalSheet.md#_dragdrop)

### `Internal`\_element

\_element: jQuery

An internal reference to the HTML element this application renders

Inherited from [JournalSheet](foundry.appv1.sheets.JournalSheet.md).[\_element](foundry.appv1.sheets.JournalSheet.md#_element)

### `Internal`\_minimized

\_minimized: boolean | null

Track whether the Application is currently minimized

Inherited from [JournalSheet](foundry.appv1.sheets.JournalSheet.md).[\_minimized](foundry.appv1.sheets.JournalSheet.md#_minimized)

### `Internal`\_scrollPositions

\_scrollPositions: object | null

Track the most recent scroll positions for any vertically scrolling containers

Inherited from [JournalSheet](foundry.appv1.sheets.JournalSheet.md).[\_scrollPositions](foundry.appv1.sheets.JournalSheet.md#_scrollpositions)

### `Internal`\_searchFilters

\_searchFilters: [SearchFilter](foundry.applications.ux.SearchFilter.md)[]

SearchFilter handlers which are active for this Application

Inherited from [JournalSheet](foundry.appv1.sheets.JournalSheet.md).[\_searchFilters](foundry.appv1.sheets.JournalSheet.md#_searchfilters)

### `Internal`\_tabs

\_tabs: [Tabs](foundry.applications.ux.Tabs.md)[]

Tab navigation handlers which are active for this Application

Inherited from [JournalSheet](foundry.appv1.sheets.JournalSheet.md).[\_tabs](foundry.appv1.sheets.JournalSheet.md#_tabs)

### appId

appId: number

The application ID is a unique incrementing integer which is used to identify every application window
drawn by the VTT

Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[appId](foundry.appv1.sheets.JournalPageSheet.md#appid)

### editors

editors: Record<string, object>

Keep track of any mce editors which may be active as part of this form
The values of this object are inner-objects with references to the MCE editor and other metadata

Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[editors](foundry.appv1.sheets.JournalPageSheet.md#editors)

### form

form: HTMLElement

A convenience reference to the form HTMLElement

Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[form](foundry.appv1.sheets.JournalPageSheet.md#form)

### isV2

isV2: boolean = ...

Indicates that the sheet renders with App V2 rather than V1.

Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[isV2](foundry.appv1.sheets.JournalPageSheet.md#isv2)

### object

object: any

The object target which we are using this form to modify

Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[object](foundry.appv1.sheets.JournalPageSheet.md#object)

### options

options: object

The options provided to this application upon initialization

Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[options](foundry.appv1.sheets.JournalPageSheet.md#options)

### position

position: object

Track the current position and dimensions of the Application UI

Inherited from [JournalSheet](foundry.appv1.sheets.JournalSheet.md).[position](foundry.appv1.sheets.JournalSheet.md#position)

### toc

toc: Record<string, JournalEntryPageHeading> = {}

The table of contents for this JournalTextPageSheet.

Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[toc](foundry.appv1.sheets.JournalPageSheet.md#toc)

### `Protected`\_priorState

\_priorState: number

The prior render state of this Application.
This allows for rendering logic to understand if the application is being rendered for the first time.

#### See

Inherited from [JournalSheet](foundry.appv1.sheets.JournalSheet.md).[\_priorState](foundry.appv1.sheets.JournalSheet.md#_priorstate)

### `Protected`\_secrets

\_secrets: [HTMLSecret](foundry.applications.ux.HTMLSecret.md)[]

The list of handlers for secret block functionality.

Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_secrets](foundry.appv1.sheets.JournalPageSheet.md#_secrets)

### `Protected`\_state

\_state: number

The current render state of the Application

#### See

[Application.RENDER\_STATES](foundry.appv1.api.Application.md#render_states)

Inherited from [JournalSheet](foundry.appv1.sheets.JournalSheet.md).[\_state](foundry.appv1.sheets.JournalSheet.md#_state)

### `Static`isV2

isV2: boolean = false

Indicates that the sheet renders with App V2 rather than V1.

Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[isV2](foundry.appv1.sheets.JournalPageSheet.md#isv2-1)

### `Static`RENDER\_STATES

RENDER\_STATES: Readonly<  
Â Â Â Â {  
Â Â Â Â Â Â Â Â CLOSED: -1;  
Â Â Â Â Â Â Â Â CLOSING: -2;  
Â Â Â Â Â Â Â Â ERROR: -3;  
Â Â Â Â Â Â Â Â NONE: 0;  
Â Â Â Â Â Â Â Â RENDERED: 2;  
Â Â Â Â Â Â Â Â RENDERING: 1;  
Â Â Â Â },  
> = ...

The sequence of rendering states that track the Application life-cycle.

Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[RENDER\_STATES](foundry.appv1.sheets.JournalPageSheet.md#render_states)

### `Protected` `Static`\_converter

\_converter: Converter = ...

Bi-directional HTML <-> Markdown converter.

## Accessors

### closing

* get closing(): boolean

  Whether the Application is currently closing.

  #### Returns boolean

  Inherited from JournalTextPageSheet.[closing](#closing)

### document

* get document(): ClientDocument

  A semantic convenience reference to the Document instance which is the target object for this form.

  #### Returns ClientDocument

  Inherited from JournalPageSheet.document

### element

* get element(): jQuery

  Return the active application element, if it currently exists in the DOM

  #### Returns jQuery

  Inherited from JournalTextPageSheet.[element](#element)

### id

* get id(): string

  Return the CSS application ID which uniquely references this UI element

  #### Returns string

  Inherited from JournalPageSheet.id

### isEditable

* get isEditable(): any

  Is the Form Application currently editable?

  #### Returns any

  Inherited from JournalPageSheet.isEditable

### popOut

* get popOut(): boolean

  Control the rendering style of the application. If popOut is true, the application is rendered in its own
  wrapper window, otherwise only the inner app content is rendered

  #### Returns boolean

  Inherited from JournalTextPageSheet.[popOut](#popout)

### rendered

* get rendered(): boolean

  Return a flag for whether the Application instance is currently rendered

  #### Returns boolean

  Inherited from JournalTextPageSheet.[rendered](#rendered)

### template

* get template(): string

  The path to the HTML template file which should be used to render the inner content of the app

  #### Returns string

  Inherited from JournalPageSheet.template

### title

* get title(): any

  An Application window should define its own title definition logic which may be dynamic depending on its data

  #### Returns any

  Inherited from JournalPageSheet.title

### `Static`defaultOptions

* get defaultOptions(): object

  #### Returns object

  Overrides JournalPageSheet.defaultOptions

### `Static`format

* get format(): number

  Declare the format that we edit text content in for this sheet so we can perform conversions as necessary.

  #### Returns number

### `Protected` `Static`\_customElements

* get \_customElements(): string[]

  `Protected`

  An array of custom element tag names that should be listened to for changes.

  #### Returns string[]

  Inherited from JournalPageSheet.\_customElements

## Methods

### \_activateCoreListeners

* \_activateCoreListeners(html: any): void

  Activate required listeners which must be enabled on every Application.
  These are internal interactions which should not be overridden by downstream subclasses.

  #### Parameters

  + html: any

  #### Returns void

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_activateCoreListeners](foundry.appv1.sheets.JournalPageSheet.md#_activatecorelisteners)

### \_closeView

* \_closeView(): void

  `Internal`

  A method called by the journal sheet when the view mode of the page sheet is closed.

  #### Returns void

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_closeView](foundry.appv1.sheets.JournalPageSheet.md#_closeview)

### \_contextMenu

* \_contextMenu(html: jQuery): void

  `Internal`

  Create a [foundry.applications.ux.ContextMenu](foundry.applications.ux.ContextMenu.md) for this Application.

  #### Parameters

  + html: jQuery

    The Application's HTML.

  #### Returns void

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_contextMenu](foundry.appv1.sheets.JournalPageSheet.md#_contextmenu)

### \_createDragDropHandlers

* \_createDragDropHandlers(): [DragDrop](foundry.applications.ux.DragDrop.md)[]

  `Internal`

  Create drag-and-drop workflow handlers for this Application

  #### Returns [DragDrop](foundry.applications.ux.DragDrop.md)[]

  An array of DragDrop handlers

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_createDragDropHandlers](foundry.appv1.sheets.JournalPageSheet.md#_createdragdrophandlers)

### \_createSearchFilters

* \_createSearchFilters(): [SearchFilter](foundry.applications.ux.SearchFilter.md)[]

  `Internal`

  Create search filter handlers for this Application

  #### Returns [SearchFilter](foundry.applications.ux.SearchFilter.md)[]

  An array of SearchFilter handlers

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_createSearchFilters](foundry.appv1.sheets.JournalPageSheet.md#_createsearchfilters)

### \_createTabHandlers

* \_createTabHandlers(): [Tabs](foundry.applications.ux.Tabs.md)[]

  `Internal`

  Create tabbed navigation handlers for this Application

  #### Returns [Tabs](foundry.applications.ux.Tabs.md)[]

  An array of Tabs handlers

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_createTabHandlers](foundry.appv1.sheets.JournalPageSheet.md#_createtabhandlers)

### \_getHeaderButtons

* \_getHeaderButtons(): [ApplicationV1HeaderButton](../types/foundry.ApplicationV1HeaderButton.md)[]

  Specify the set of config buttons which should appear in the Application header.
  Buttons should be returned as an Array of objects.
  The header buttons which are added to the application can be modified by the getApplicationV1HeaderButtons hook.

  #### Returns [ApplicationV1HeaderButton](../types/foundry.ApplicationV1HeaderButton.md)[]

  #### Fires

  getApplicationHeaderButtons

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_getHeaderButtons](foundry.appv1.sheets.JournalPageSheet.md#_getheaderbuttons)

### \_getSecretContent

* \_getSecretContent(secret: any): any

  Get the HTML content that a given secret block is embedded in.

  #### Parameters

  + secret: any

    The secret block.

  #### Returns any

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_getSecretContent](foundry.appv1.sheets.JournalPageSheet.md#_getsecretcontent)

### \_injectHTML

* \_injectHTML(html: jQuery): void

  `Internal`

  Customize how a new HTML Application is added and first appears in the DOM

  #### Parameters

  + html: jQuery

    The HTML element which is ready to be added to the DOM

  #### Returns void

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_injectHTML](foundry.appv1.sheets.JournalPageSheet.md#_injecthtml)

### \_onAutosave

* \_onAutosave(html: string): void

  `Internal`

  Update the parent sheet if it is open when the server autosaves the contents of this editor.

  #### Parameters

  + html: string

    The updated editor contents.

  #### Returns void

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_onAutosave](foundry.appv1.sheets.JournalPageSheet.md#_onautosave)

### \_onNewSteps

* \_onNewSteps(): void

  `Internal`

  Update the UI appropriately when receiving new steps from another client.

  #### Returns void

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_onNewSteps](foundry.appv1.sheets.JournalPageSheet.md#_onnewsteps)

### \_onResize

* \_onResize(event: Event): void

  `Internal`

  Additional actions to take when the application window is resized

  #### Parameters

  + event: Event

  #### Returns void

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_onResize](foundry.appv1.sheets.JournalPageSheet.md#_onresize)

### \_onToggleMinimize

* \_onToggleMinimize(ev: Event): void

  `Internal`

  Handle application minimization behavior - collapsing content and reducing the size of the header

  #### Parameters

  + ev: Event

  #### Returns void

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_onToggleMinimize](foundry.appv1.sheets.JournalPageSheet.md#_ontoggleminimize)

### \_render

* \_render(force: any, options: any): Promise<void>

  An asynchronous inner function which handles the rendering of the Application

  #### Parameters

  + force: any

    Render and display the application even if it is not currently displayed.
  + options: any

    Additional options which update the current values of the Application#options object

  #### Returns Promise<void>

  A Promise that resolves to the Application once rendering is complete

  #### Fires

  renderApplication

  Overrides [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_render](foundry.appv1.sheets.JournalPageSheet.md#_render)

### \_renderInner

* \_renderInner(...args: any[]): Promise<jQuery>

  `Internal`

  Render the inner application content

  #### Parameters

  + ...args: any[]

    The data used to render the inner template

  #### Returns Promise<jQuery>

  A promise resolving to the constructed jQuery object

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_renderInner](foundry.appv1.sheets.JournalPageSheet.md#_renderinner)

### \_renderOuter

* \_renderOuter(): Promise<jQuery>

  Render the outer application wrapper

  #### Returns Promise<jQuery>

  A promise resolving to the constructed jQuery object

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_renderOuter](foundry.appv1.sheets.JournalPageSheet.md#_renderouter)

### \_replaceHTML

* \_replaceHTML(element: jQuery, html: jQuery): void

  `Internal`

  Customize how inner HTML is replaced when the application is refreshed

  #### Parameters

  + element: jQuery

    The original HTML processed as a jQuery object
  + html: jQuery

    New updated HTML as a jQuery object

  #### Returns void

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_replaceHTML](foundry.appv1.sheets.JournalPageSheet.md#_replacehtml)

### \_updateObject

* \_updateObject(event: any, formData: any): Promise<any>

  This method is called upon form submission after form data is validated

  #### Parameters

  + event: any

    The initial triggering submission event
  + formData: any

    The object of validated form data with which to update the object

  #### Returns Promise<any>

  A Promise which resolves once the update operation has completed

  Overrides [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_updateObject](foundry.appv1.sheets.JournalPageSheet.md#_updateobject)

### \_updateSecret

* \_updateSecret(secret: any, content: any): any

  Update the HTML content that a given secret block is embedded in.

  #### Parameters

  + secret: any

    The secret block.
  + content: any

    The new content.

  #### Returns any

  The updated Document.

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_updateSecret](foundry.appv1.sheets.JournalPageSheet.md#_updatesecret)

### activateEditor

* activateEditor(  
  Â Â Â Â name: any,  
  Â Â Â Â options?: {},  
  Â Â Â Â initialContent?: string,  
  ): Promise<EditorView>

  Activate a named text editor

  #### Parameters

  + name: any

    The named data field which the editor modifies.
  + options: {} = {}

    Editor initialization options passed to
    [foundry.applications.ux.TextEditor.create](foundry.applications.ux.TextEditor.md#create).
  + initialContent: string = ""

    Initial text content for the editor area.

  #### Returns Promise<EditorView>

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[activateEditor](foundry.appv1.sheets.JournalPageSheet.md#activateeditor)

### activateListeners

* activateListeners(html: any): void

  After rendering, activate event listeners which provide interactivity for the Application.
  This is where user-defined Application subclasses should attach their event-handling logic.

  #### Parameters

  + html: any

  #### Returns void

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[activateListeners](foundry.appv1.sheets.JournalPageSheet.md#activatelisteners)

### activateTab

* activateTab(  
  Â Â Â Â tabName: string,  
  Â Â Â Â options?: { group: string; triggerCallback: boolean },  
  ): void

  Change the currently active tab

  #### Parameters

  + tabName: string

    The target tab name to switch to
  + options: { group: string; triggerCallback: boolean } = {}

    Options which configure changing the tab

    - ##### group: string

      A specific named tab group, useful if multiple sets of tabs are present
    - ##### triggerCallback: boolean

      Whether to trigger tab-change callback functions

  #### Returns void

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[activateTab](foundry.appv1.sheets.JournalPageSheet.md#activatetab)

### bringToFront

* bringToFront(): void

  A convenience alias for [bringToTop](foundry.appv1.api.Application.md#bringtotop) for when operating on an object that is either an Application or an
  [ApplicationV2](foundry.applications.api.ApplicationV2.md)

  #### Returns void

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[bringToFront](foundry.appv1.sheets.JournalPageSheet.md#bringtofront)

### bringToTop

* bringToTop(): void

  Bring the application to the top of the rendering stack

  #### Returns void

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[bringToTop](foundry.appv1.sheets.JournalPageSheet.md#bringtotop)

### close

* close(options?: {}): Promise<void>

  Close the application and un-register references to it within UI mappings
  This function returns a Promise which resolves once the window closing animation concludes

  #### Parameters

  + options: {} = {}

    Options which affect how the Application is closed

  #### Returns Promise<void>

  A Promise which resolves once the application is closed

  #### Fires

  closeApplication

  Overrides [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[close](foundry.appv1.sheets.JournalPageSheet.md#close)

### getData

* getData(options?: {}): Promise<object>

  An application should define the data object used to render its template.
  This function may either return an Object directly, or a Promise which resolves to an Object
  If undefined, the default implementation will return an empty object allowing only for rendering of static HTML

  #### Parameters

  + options: {} = {}

  #### Returns Promise<object>

  Overrides [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[getData](foundry.appv1.sheets.JournalPageSheet.md#getdata)

### isEditorDirty

* isEditorDirty(): boolean

  Determine if any editors are dirty.

  #### Returns boolean

### maximize

* maximize(): Promise<void>

  Maximize the pop-out window, expanding it to its original size
  Take no action for applications which are not of the pop-out variety or are already maximized

  #### Returns Promise<void>

  A Promise which resolves once the maximization action has completed

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[maximize](foundry.appv1.sheets.JournalPageSheet.md#maximize)

### minimize

* minimize(): Promise<void>

  Minimize the pop-out window, collapsing it to a small tab
  Take no action for applications which are not of the pop-out variety or apps which are already minimized

  #### Returns Promise<void>

  A Promise which resolves once the minimization action has completed

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[minimize](foundry.appv1.sheets.JournalPageSheet.md#minimize)

### render

* render(  
  Â Â Â Â force?: boolean,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â focus?: boolean;  
  Â Â Â Â Â Â Â Â height?: number;  
  Â Â Â Â Â Â Â Â left?: number;  
  Â Â Â Â Â Â Â Â renderContext?: string;  
  Â Â Â Â Â Â Â Â renderData?: object;  
  Â Â Â Â Â Â Â Â scale?: number;  
  Â Â Â Â Â Â Â Â top?: number;  
  Â Â Â Â Â Â Â Â width?: number;  
  Â Â Â Â },  
  ): [Application](foundry.appv1.api.Application.md)

  Render the Application by evaluating its HTML template against the object of data provided by the getData method
  If the Application is rendered as a pop-out window, wrap the contained HTML in an outer frame with window controls

  #### Parameters

  + force: boolean = false

    Add the rendered application to the DOM if it is not already present. If false, the
    Application will only be re-rendered if it is already present.
  + options: {  
    Â Â Â Â focus?: boolean;  
    Â Â Â Â height?: number;  
    Â Â Â Â left?: number;  
    Â Â Â Â renderContext?: string;  
    Â Â Â Â renderData?: object;  
    Â Â Â Â scale?: number;  
    Â Â Â Â top?: number;  
    Â Â Â Â width?: number;  
    } = {}

    Additional rendering options which are applied to customize the way that the Application
    is rendered in the DOM.

    - ##### `Optional`focus?: boolean

      Apply focus to the application, maximizing it and bringing it to the top
      of the vertical stack.
    - ##### `Optional`height?: number

      The rendered height
    - ##### `Optional`left?: number

      The left positioning attribute
    - ##### `Optional`renderContext?: string

      A context-providing string which suggests what event triggered the render
    - ##### `Optional`renderData?: object

      The data change which motivated the render request
    - ##### `Optional`scale?: number

      The rendered transformation scale
    - ##### `Optional`top?: number

      The top positioning attribute
    - ##### `Optional`width?: number

      The rendered width

  #### Returns [Application](foundry.appv1.api.Application.md)

  The rendered Application instance

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[render](foundry.appv1.sheets.JournalPageSheet.md#render)

### saveEditor

* saveEditor(  
  Â Â Â Â name: any,  
  Â Â Â Â \_\_namedParameters?: { preventRender?: boolean },  
  ): Promise<void>

  Handle saving the content of a specific editor by name

  #### Parameters

  + name: any

    The named editor to save
  + \_\_namedParameters: { preventRender?: boolean } = {}

  #### Returns Promise<void>

  Overrides [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[saveEditor](foundry.appv1.sheets.JournalPageSheet.md#saveeditor)

### setPosition

* setPosition(  
  Â Â Â Â position?: {  
  Â Â Â Â Â Â Â Â height: string | number | null;  
  Â Â Â Â Â Â Â Â left: number | null;  
  Â Â Â Â Â Â Â Â scale: number | null;  
  Â Â Â Â Â Â Â Â top: number | null;  
  Â Â Â Â Â Â Â Â width: number | null;  
  Â Â Â Â },  
  ): | void  
  | {  
  Â Â Â Â height: number;  
  Â Â Â Â left: number;  
  Â Â Â Â scale: number;  
  Â Â Â Â top: number;  
  Â Â Â Â width: number;  
  }

  Set the application position and store its new location.
  Returns the updated position object for the application containing the new values.

  #### Parameters

  + position: {  
    Â Â Â Â height: string | number | null;  
    Â Â Â Â left: number | null;  
    Â Â Â Â scale: number | null;  
    Â Â Â Â top: number | null;  
    Â Â Â Â width: number | null;  
    } = {}

    Positional data

    - ##### height: string | number | null

      The application height in pixels
    - ##### left: number | null

      The left offset position in pixels
    - ##### scale: number | null

      The application scale as a numeric factor where 1.0 is default
    - ##### top: number | null

      The top offset position in pixels
    - ##### width: number | null

      The application width in pixels

  #### Returns Â Â Â Â | void Â Â Â Â | { Â Â Â Â Â Â Â Â height: number; Â Â Â Â Â Â Â Â left: number; Â Â Â Â Â Â Â Â scale: number; Â Â Â Â Â Â Â Â top: number; Â Â Â Â Â Â Â Â width: number; Â Â Â Â }

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[setPosition](foundry.appv1.sheets.JournalPageSheet.md#setposition)

### submit

* submit(options?: object): Promise<JournalTextPageSheet>

  Submit the contents of a Form Application, processing its content as defined by the Application

  #### Parameters

  + `Optional`options: object = {}

    Options passed to the \_onSubmit event handler

  #### Returns Promise<JournalTextPageSheet>

  Return a self-reference for convenient method chaining

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[submit](foundry.appv1.sheets.JournalPageSheet.md#submit)

### `Protected`\_activateEditor

* \_activateEditor(div: HTMLElement): void

  `Protected`

  Activate an editor instance present within the form

  #### Parameters

  + div: HTMLElement

    The element which contains the editor

  #### Returns void

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_activateEditor](foundry.appv1.sheets.JournalPageSheet.md#_activateeditor)

### `Protected`\_callHooks

* \_callHooks(  
  Â Â Â Â hookName: string | ((className: string) => string),  
  Â Â Â Â ...hookArgs: any[],  
  ): void

  `Protected`

  Call all hooks for all applications in the inheritance chain.

  #### Parameters

  + hookName: string | ((className: string) => string)

    The hook being triggered, which formatted
    with the Application class name
  + ...hookArgs: any[]

    The arguments passed to the hook calls

  #### Returns void

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_callHooks](foundry.appv1.sheets.JournalPageSheet.md#_callhooks)

### `Protected`\_canDragDrop

* \_canDragDrop(selector: string): boolean

  `Protected`

  Define whether a user is able to conclude a drag-and-drop workflow for a given drop selector

  #### Parameters

  + selector: string

    The candidate HTML selector for the drop target

  #### Returns boolean

  Can the current user drop on this selector?

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_canDragDrop](foundry.appv1.sheets.JournalPageSheet.md#_candragdrop)

### `Protected`\_canDragStart

* \_canDragStart(selector: string): boolean

  `Protected`

  Define whether a user is able to begin a dragstart workflow for a given drag selector

  #### Parameters

  + selector: string

    The candidate HTML selector for dragging

  #### Returns boolean

  Can the current user drag this selector?

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_canDragStart](foundry.appv1.sheets.JournalPageSheet.md#_candragstart)

### `Protected`\_canUserView

* \_canUserView(user: User): boolean

  `Protected`

  Test whether a certain User has permission to view this Document Sheet.

  #### Parameters

  + user: User

    The user requesting to render the sheet

  #### Returns boolean

  Does the User have permission to view this sheet?

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_canUserView](foundry.appv1.sheets.JournalPageSheet.md#_canuserview)

### `Protected`\_configureProseMirrorPlugins

* \_configureProseMirrorPlugins(  
  Â Â Â Â name: string,  
  Â Â Â Â options?: { remove?: boolean },  
  ): object

  `Protected`

  Configure ProseMirror plugins for this sheet.

  #### Parameters

  + name: string

    The name of the editor.
  + `Optional`options: { remove?: boolean } = {}

    Additional options to configure the plugins.

    - ##### `Optional`remove?: boolean

      Whether the editor should destroy itself on save.

  #### Returns object

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_configureProseMirrorPlugins](foundry.appv1.sheets.JournalPageSheet.md#_configureprosemirrorplugins)

### `Protected`\_convertFormats

* \_convertFormats(renderData: object): void

  `Protected`

  Lazily convert text formats if we detect the document being saved in a different format.

  #### Parameters

  + renderData: object

    Render data.

  #### Returns void

### `Protected`\_createDocumentIdLink

* \_createDocumentIdLink(html: jQuery): void

  `Protected`

  Create an ID link button in the document sheet header which displays the document ID and copies to clipboard

  #### Parameters

  + html: jQuery

  #### Returns void

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_createDocumentIdLink](foundry.appv1.sheets.JournalPageSheet.md#_createdocumentidlink)

### `Protected`\_createSecretHandlers

* \_createSecretHandlers(): [HTMLSecret](foundry.applications.ux.HTMLSecret.md)[]

  `Protected`

  Create objects for managing the functionality of secret blocks within this Document's content.

  #### Returns [HTMLSecret](foundry.applications.ux.HTMLSecret.md)[]

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_createSecretHandlers](foundry.appv1.sheets.JournalPageSheet.md#_createsecrethandlers)

### `Protected`\_disableFields

* \_disableFields(form: HTMLElement): void

  `Protected`

  If the form is not editable, disable its input fields

  #### Parameters

  + form: HTMLElement

    The form HTML

  #### Returns void

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_disableFields](foundry.appv1.sheets.JournalPageSheet.md#_disablefields)

### `Protected`\_getSubmitData

* \_getSubmitData(updateData?: object): object

  `Protected`

  Get an object of update data used to update the form's target object

  #### Parameters

  + updateData: object = {}

    Additional data that should be merged with the form data

  #### Returns object

  The prepared update data

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_getSubmitData](foundry.appv1.sheets.JournalPageSheet.md#_getsubmitdata)

### `Protected`\_onChangeColorPicker

* \_onChangeColorPicker(event: Event): void

  `Protected`

  Handle the change of a color picker input which enters it's chosen value into a related input field

  #### Parameters

  + event: Event

    The color picker change event

  #### Returns void

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_onChangeColorPicker](foundry.appv1.sheets.JournalPageSheet.md#_onchangecolorpicker)

### `Protected`\_onChangeInput

* \_onChangeInput(event: Event): Promise<any>

  `Protected`

  Handle changes to an input element, submitting the form if options.submitOnChange is true.
  Do not preventDefault in this handler as other interactions on the form may also be occurring.

  #### Parameters

  + event: Event

    The initial change event

  #### Returns Promise<any>

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_onChangeInput](foundry.appv1.sheets.JournalPageSheet.md#_onchangeinput)

### `Protected`\_onChangeRange

* \_onChangeRange(event: Event): void

  `Protected`

  Handle changes to a range type input by propagating those changes to the sibling range-value element

  #### Parameters

  + event: Event

    The initial change event

  #### Returns void

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_onChangeRange](foundry.appv1.sheets.JournalPageSheet.md#_onchangerange)

### `Protected`\_onChangeTab

* \_onChangeTab(event: MouseEvent | null, tabs: [Tabs](foundry.applications.ux.Tabs.md), active: string): void

  `Protected`

  Handle changes to the active tab in a configured Tabs controller

  #### Parameters

  + event: MouseEvent | null

    A left click event
  + tabs: [Tabs](foundry.applications.ux.Tabs.md)

    The Tabs controller
  + active: string

    The new active tab name

  #### Returns void

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_onChangeTab](foundry.appv1.sheets.JournalPageSheet.md#_onchangetab)

### `Protected`\_onConfigureSheet

* \_onConfigureSheet(event: ClickEvent): void

  `Protected`

  Handle requests to configure the default sheet used by this Document

  #### Parameters

  + event: ClickEvent

  #### Returns void

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_onConfigureSheet](foundry.appv1.sheets.JournalPageSheet.md#_onconfiguresheet)

### `Protected`\_onDragOver

* \_onDragOver(event: DragEvent): void

  `Protected`

  Callback actions which occur when a dragged element is over a drop target.

  #### Parameters

  + event: DragEvent

    The originating DragEvent

  #### Returns void

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_onDragOver](foundry.appv1.sheets.JournalPageSheet.md#_ondragover)

### `Protected`\_onDragStart

* \_onDragStart(event: DragEvent): void

  `Protected`

  Callback actions which occur at the beginning of a drag start workflow.

  #### Parameters

  + event: DragEvent

    The originating DragEvent

  #### Returns void

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_onDragStart](foundry.appv1.sheets.JournalPageSheet.md#_ondragstart)

### `Protected`\_onDrop

* \_onDrop(event: DragEvent): void

  `Protected`

  Callback actions which occur when a dragged element is dropped on a target.

  #### Parameters

  + event: DragEvent

    The originating DragEvent

  #### Returns void

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_onDrop](foundry.appv1.sheets.JournalPageSheet.md#_ondrop)

### `Protected`\_onEditImage

* \_onEditImage(event: MouseEvent): Promise<[FilePicker](foundry.applications.apps.FilePicker.md)>

  `Protected`

  Handle changing a Document's image.

  #### Parameters

  + event: MouseEvent

    The click event.

  #### Returns Promise<[FilePicker](foundry.applications.apps.FilePicker.md)>

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_onEditImage](foundry.appv1.sheets.JournalPageSheet.md#_oneditimage)

### `Protected`\_onSearchFilter

* \_onSearchFilter(  
  Â Â Â Â event: KeyboardEvent,  
  Â Â Â Â query: string,  
  Â Â Â Â rgx: RegExp,  
  Â Â Â Â html: HTMLElement,  
  ): void

  `Protected`

  Handle changes to search filtering controllers which are bound to the Application

  #### Parameters

  + event: KeyboardEvent

    The key-up event from keyboard input
  + query: string

    The raw string input to the search field
  + rgx: RegExp

    The regular expression to test against
  + html: HTMLElement

    The HTML element which should be filtered

  #### Returns void

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_onSearchFilter](foundry.appv1.sheets.JournalPageSheet.md#_onsearchfilter)

### `Protected`\_onSubmit

* \_onSubmit(  
  Â Â Â Â event: Event,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â preventClose?: boolean;  
  Â Â Â Â Â Â Â Â preventRender?: boolean;  
  Â Â Â Â Â Â Â Â updateData?: object | null;  
  Â Â Â Â },  
  ): Promise<any>

  `Protected`

  Handle standard form submission steps

  #### Parameters

  + event: Event

    The submit event which triggered this handler
  + options: { preventClose?: boolean; preventRender?: boolean; updateData?: object | null } = {}
    - ##### `Optional`preventClose?: boolean

      Override the standard behavior of whether to close the form on submit
    - ##### `Optional`preventRender?: boolean

      Prevent the application from re-rendering as a result of form submission
    - ##### `Optional`updateData?: object | null

      Additional specific data keys/values which override or extend the
      contents of the parsed form. This can be used to update other flags or
      data fields at the same time as processing a form submission to avoid
      multiple database operations.

  #### Returns Promise<any>

  A promise which resolves to the validated update data

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_onSubmit](foundry.appv1.sheets.JournalPageSheet.md#_onsubmit)

### `Protected`\_restoreScrollPositions

* \_restoreScrollPositions(html: jQuery): void

  `Protected`

  Restore the scroll positions of containers within the app after re-rendering the content

  #### Parameters

  + html: jQuery

    The HTML object being traversed

  #### Returns void

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_restoreScrollPositions](foundry.appv1.sheets.JournalPageSheet.md#_restorescrollpositions)

### `Protected`\_saveScrollPositions

* \_saveScrollPositions(html: jQuery): void

  `Protected`

  Persist the scroll positions of containers within the app before re-rendering the content

  #### Parameters

  + html: jQuery

    The HTML object being traversed

  #### Returns void

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_saveScrollPositions](foundry.appv1.sheets.JournalPageSheet.md#_savescrollpositions)

### `Protected`\_waitForImages

* \_waitForImages(): Promise<void>

  `Protected`

  Wait for any images present in the Application to load.

  #### Returns Promise<void>

  A Promise that resolves when all images have loaded.

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_waitForImages](foundry.appv1.sheets.JournalPageSheet.md#_waitforimages)

### `Static`\_getInheritanceChain

* \_getInheritanceChain(): Function[]

  `Internal`

  Return the inheritance chain for this Application class up to (and including) it's base Application class.

  #### Returns Function[]

  Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[\_getInheritanceChain](foundry.appv1.sheets.JournalPageSheet.md#_getinheritancechain)