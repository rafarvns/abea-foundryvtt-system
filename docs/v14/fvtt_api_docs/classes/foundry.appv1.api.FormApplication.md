---
title: "FormApplication | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.appv1.api.FormApplication.html"
category: "classes"
---

# Class FormApplication`Abstract`

An abstract pattern for defining an Application responsible for updating some object using an HTML form

A few critical assumptions:

1. This application is used to only edit one object at a time
2. The template used contains one (and only one) HTML form as it's outermost element
3. This abstract layer has no knowledge of what is being updated, so the implementation must define \_updateObject

#### Deprecated

since V13

#### Hierarchy ([View Summary](../hierarchy.md#foundry.appv1.api.FormApplication))

* [Application](foundry.appv1.api.Application.md)
  + FormApplication
    - [DocumentSheet](foundry.appv1.api.DocumentSheet.md)

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
[object](#object)
[options](#options)
[position](#position)
[\_priorState](#_priorstate)
[\_state](#_state)
[RENDER\_STATES](#render_states)

### Accessors

[closing](#closing)
[element](#element)
[id](#id)
[isEditable](#iseditable)
[popOut](#popout)
[rendered](#rendered)
[template](#template)
[title](#title)
[defaultOptions](#defaultoptions)
[\_customElements](#_customelements)

### Methods

[\_activateCoreListeners](#_activatecorelisteners)
[\_contextMenu](#_contextmenu)
[\_createDragDropHandlers](#_createdragdrophandlers)
[\_createSearchFilters](#_createsearchfilters)
[\_createTabHandlers](#_createtabhandlers)
[\_injectHTML](#_injecthtml)
[\_onResize](#_onresize)
[\_onToggleMinimize](#_ontoggleminimize)
[\_render](#_render)
[\_renderInner](#_renderinner)
[\_replaceHTML](#_replacehtml)
[\_updateObject](#_updateobject)
[activateEditor](#activateeditor)
[activateListeners](#activatelisteners)
[activateTab](#activatetab)
[bringToFront](#bringtofront)
[bringToTop](#bringtotop)
[close](#close)
[getData](#getdata)
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
[\_configureProseMirrorPlugins](#_configureprosemirrorplugins)
[\_disableFields](#_disablefields)
[\_getHeaderButtons](#_getheaderbuttons)
[\_getSubmitData](#_getsubmitdata)
[\_onChangeColorPicker](#_onchangecolorpicker)
[\_onChangeInput](#_onchangeinput)
[\_onChangeRange](#_onchangerange)
[\_onChangeTab](#_onchangetab)
[\_onDragOver](#_ondragover)
[\_onDragStart](#_ondragstart)
[\_onDrop](#_ondrop)
[\_onSearchFilter](#_onsearchfilter)
[\_onSubmit](#_onsubmit)
[\_renderOuter](#_renderouter)
[\_restoreScrollPositions](#_restorescrollpositions)
[\_saveScrollPositions](#_savescrollpositions)
[\_waitForImages](#_waitforimages)
[\_getInheritanceChain](#_getinheritancechain)

## Constructors

### constructor

* new FormApplication(  
  Â Â Â Â object?: object,  
  Â Â Â Â options?: [FormApplicationOptions](../interfaces/foundry.FormApplicationOptions.md) & [ApplicationV1Options](../interfaces/foundry.ApplicationV1Options.md),  
  ): FormApplication

  #### Parameters

  + object: object = {}

    Some object which is the target data structure to be updated by the form.
  + `Optional`options: [FormApplicationOptions](../interfaces/foundry.FormApplicationOptions.md) & [ApplicationV1Options](../interfaces/foundry.ApplicationV1Options.md) = {}

    Additional options which modify the rendering of
    the sheet.

  #### Returns FormApplication

  Overrides [Application](foundry.appv1.api.Application.md).[constructor](foundry.appv1.api.Application.md#constructor)

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

Inherited from [Application](foundry.appv1.api.Application.md).[appId](foundry.appv1.api.Application.md#appid)

### editors

editors: Record<string, object>

Keep track of any mce editors which may be active as part of this form
The values of this object are inner-objects with references to the MCE editor and other metadata

### form

form: HTMLElement

A convenience reference to the form HTMLElement

### object

object: any

The object target which we are using this form to modify

### options

options: object

The options provided to this application upon initialization

Inherited from [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md).[options](foundry.appv1.sheets.JournalPageSheet.md#options)

### position

position: object

Track the current position and dimensions of the Application UI

Inherited from [JournalSheet](foundry.appv1.sheets.JournalSheet.md).[position](foundry.appv1.sheets.JournalSheet.md#position)

### `Protected`\_priorState

\_priorState: number

The prior render state of this Application.
This allows for rendering logic to understand if the application is being rendered for the first time.

#### See

Inherited from [JournalSheet](foundry.appv1.sheets.JournalSheet.md).[\_priorState](foundry.appv1.sheets.JournalSheet.md#_priorstate)

### `Protected`\_state

\_state: number

The current render state of the Application

#### See

[Application.RENDER\_STATES](foundry.appv1.api.Application.md#render_states)

Inherited from [JournalSheet](foundry.appv1.sheets.JournalSheet.md).[\_state](foundry.appv1.sheets.JournalSheet.md#_state)

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

Inherited from [Application](foundry.appv1.api.Application.md).[RENDER\_STATES](foundry.appv1.api.Application.md#render_states)

## Accessors

### closing

* get closing(): boolean

  Whether the Application is currently closing.

  #### Returns boolean

  Inherited from [JournalTextPageSheet](foundry.appv1.sheets.JournalTextPageSheet.md).[closing](foundry.appv1.sheets.JournalTextPageSheet.md#closing)

### element

* get element(): jQuery

  Return the active application element, if it currently exists in the DOM

  #### Returns jQuery

  Inherited from [JournalTextPageSheet](foundry.appv1.sheets.JournalTextPageSheet.md).[element](foundry.appv1.sheets.JournalTextPageSheet.md#element)

### id

* get id(): string

  Return the CSS application ID which uniquely references this UI element

  #### Returns string

  Inherited from [Dialog](foundry.appv1.api.Dialog.md).[id](foundry.appv1.api.Dialog.md#id)

### isEditable

* get isEditable(): boolean

  Is the Form Application currently editable?

  #### Returns boolean

### popOut

* get popOut(): boolean

  Control the rendering style of the application. If popOut is true, the application is rendered in its own
  wrapper window, otherwise only the inner app content is rendered

  #### Returns boolean

  Inherited from [JournalTextPageSheet](foundry.appv1.sheets.JournalTextPageSheet.md).[popOut](foundry.appv1.sheets.JournalTextPageSheet.md#popout)

### rendered

* get rendered(): boolean

  Return a flag for whether the Application instance is currently rendered

  #### Returns boolean

  Inherited from [JournalTextPageSheet](foundry.appv1.sheets.JournalTextPageSheet.md).[rendered](foundry.appv1.sheets.JournalTextPageSheet.md#rendered)

### template

* get template(): string

  The path to the HTML template file which should be used to render the inner content of the app

  #### Returns string

  Inherited from [JournalSheet](foundry.appv1.sheets.JournalSheet.md).[template](foundry.appv1.sheets.JournalSheet.md#template)

### title

* get title(): string

  An Application window should define its own title definition logic which may be dynamic depending on its data

  #### Returns string

  Inherited from Application.title

### `Static`defaultOptions

* get defaultOptions(): [ApplicationV1Options](../interfaces/foundry.ApplicationV1Options.md) & [FormApplicationOptions](../interfaces/foundry.FormApplicationOptions.md)

  Assign the default options which are supported by the document edit sheet.
  In addition to the default options object supported by the parent Application class, the Form Application
  supports the following additional keys and values:

  #### Returns [ApplicationV1Options](../interfaces/foundry.ApplicationV1Options.md) & [FormApplicationOptions](../interfaces/foundry.FormApplicationOptions.md)

  The default options for this FormApplication class

  Overrides Application.defaultOptions

### `Protected` `Static`\_customElements

* get \_customElements(): string[]

  `Protected`

  An array of custom element tag names that should be listened to for changes.

  #### Returns string[]

## Methods

### \_activateCoreListeners

* \_activateCoreListeners(html: any): void

  Activate required listeners which must be enabled on every Application.
  These are internal interactions which should not be overridden by downstream subclasses.

  #### Parameters

  + html: any

  #### Returns void

  Overrides [Application](foundry.appv1.api.Application.md).[\_activateCoreListeners](foundry.appv1.api.Application.md#_activatecorelisteners)

### \_contextMenu

* \_contextMenu(html: jQuery): void

  `Internal`

  Create a [foundry.applications.ux.ContextMenu](foundry.applications.ux.ContextMenu.md) for this Application.

  #### Parameters

  + html: jQuery

    The Application's HTML.

  #### Returns void

  Inherited from [Application](foundry.appv1.api.Application.md).[\_contextMenu](foundry.appv1.api.Application.md#_contextmenu)

### \_createDragDropHandlers

* \_createDragDropHandlers(): [DragDrop](foundry.applications.ux.DragDrop.md)[]

  `Internal`

  Create drag-and-drop workflow handlers for this Application

  #### Returns [DragDrop](foundry.applications.ux.DragDrop.md)[]

  An array of DragDrop handlers

  Inherited from [Application](foundry.appv1.api.Application.md).[\_createDragDropHandlers](foundry.appv1.api.Application.md#_createdragdrophandlers)

### \_createSearchFilters

* \_createSearchFilters(): [SearchFilter](foundry.applications.ux.SearchFilter.md)[]

  `Internal`

  Create search filter handlers for this Application

  #### Returns [SearchFilter](foundry.applications.ux.SearchFilter.md)[]

  An array of SearchFilter handlers

  Inherited from [Application](foundry.appv1.api.Application.md).[\_createSearchFilters](foundry.appv1.api.Application.md#_createsearchfilters)

### \_createTabHandlers

* \_createTabHandlers(): [Tabs](foundry.applications.ux.Tabs.md)[]

  `Internal`

  Create tabbed navigation handlers for this Application

  #### Returns [Tabs](foundry.applications.ux.Tabs.md)[]

  An array of Tabs handlers

  Inherited from [Application](foundry.appv1.api.Application.md).[\_createTabHandlers](foundry.appv1.api.Application.md#_createtabhandlers)

### \_injectHTML

* \_injectHTML(html: jQuery): void

  `Internal`

  Customize how a new HTML Application is added and first appears in the DOM

  #### Parameters

  + html: jQuery

    The HTML element which is ready to be added to the DOM

  #### Returns void

  Inherited from [Application](foundry.appv1.api.Application.md).[\_injectHTML](foundry.appv1.api.Application.md#_injecthtml)

### \_onResize

* \_onResize(event: Event): void

  `Internal`

  Additional actions to take when the application window is resized

  #### Parameters

  + event: Event

  #### Returns void

  Inherited from [Application](foundry.appv1.api.Application.md).[\_onResize](foundry.appv1.api.Application.md#_onresize)

### \_onToggleMinimize

* \_onToggleMinimize(ev: Event): void

  `Internal`

  Handle application minimization behavior - collapsing content and reducing the size of the header

  #### Parameters

  + ev: Event

  #### Returns void

  Inherited from [Application](foundry.appv1.api.Application.md).[\_onToggleMinimize](foundry.appv1.api.Application.md#_ontoggleminimize)

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

  Overrides [Application](foundry.appv1.api.Application.md).[\_render](foundry.appv1.api.Application.md#_render)

### \_renderInner

* \_renderInner(...args: any[]): Promise<jQuery>

  `Internal`

  Render the inner application content

  #### Parameters

  + ...args: any[]

    The data used to render the inner template

  #### Returns Promise<jQuery>

  A promise resolving to the constructed jQuery object

  Overrides [Application](foundry.appv1.api.Application.md).[\_renderInner](foundry.appv1.api.Application.md#_renderinner)

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

  Inherited from [Application](foundry.appv1.api.Application.md).[\_replaceHTML](foundry.appv1.api.Application.md#_replacehtml)

### `Abstract`\_updateObject

* \_updateObject(event: Event, formData: object): Promise<any>

  This method is called upon form submission after form data is validated

  #### Parameters

  + event: Event

    The initial triggering submission event
  + formData: object

    The object of validated form data with which to update the object

  #### Returns Promise<any>

  A Promise which resolves once the update operation has completed

### activateEditor

* activateEditor(  
  Â Â Â Â name: string,  
  Â Â Â Â options?: object,  
  Â Â Â Â initialContent?: string,  
  ): Promise<EditorView>

  Activate a named text editor

  #### Parameters

  + name: string

    The named data field which the editor modifies.
  + options: object = {}

    Editor initialization options passed to
    [foundry.applications.ux.TextEditor.create](foundry.applications.ux.TextEditor.md#create).
  + initialContent: string = ""

    Initial text content for the editor area.

  #### Returns Promise<EditorView>

### activateListeners

* activateListeners(html: any): void

  After rendering, activate event listeners which provide interactivity for the Application.
  This is where user-defined Application subclasses should attach their event-handling logic.

  #### Parameters

  + html: any

  #### Returns void

  Overrides [Application](foundry.appv1.api.Application.md).[activateListeners](foundry.appv1.api.Application.md#activatelisteners)

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

  Inherited from [Application](foundry.appv1.api.Application.md).[activateTab](foundry.appv1.api.Application.md#activatetab)

### bringToFront

* bringToFront(): void

  A convenience alias for [bringToTop](foundry.appv1.api.Application.md#bringtotop) for when operating on an object that is either an Application or an
  [ApplicationV2](foundry.applications.api.ApplicationV2.md)

  #### Returns void

  Inherited from [Application](foundry.appv1.api.Application.md).[bringToFront](foundry.appv1.api.Application.md#bringtofront)

### bringToTop

* bringToTop(): void

  Bring the application to the top of the rendering stack

  #### Returns void

  Inherited from [Application](foundry.appv1.api.Application.md).[bringToTop](foundry.appv1.api.Application.md#bringtotop)

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

  Overrides [Application](foundry.appv1.api.Application.md).[close](foundry.appv1.api.Application.md#close)

### getData

* getData(\_options: any): object | Promise<object>

  An application should define the data object used to render its template.
  This function may either return an Object directly, or a Promise which resolves to an Object
  If undefined, the default implementation will return an empty object allowing only for rendering of static HTML

  #### Parameters

  + \_options: any

  #### Returns object | Promise<object>

  Overrides [Application](foundry.appv1.api.Application.md).[getData](foundry.appv1.api.Application.md#getdata)

### maximize

* maximize(): Promise<void>

  Maximize the pop-out window, expanding it to its original size
  Take no action for applications which are not of the pop-out variety or are already maximized

  #### Returns Promise<void>

  A Promise which resolves once the maximization action has completed

  Inherited from [Application](foundry.appv1.api.Application.md).[maximize](foundry.appv1.api.Application.md#maximize)

### minimize

* minimize(): Promise<void>

  Minimize the pop-out window, collapsing it to a small tab
  Take no action for applications which are not of the pop-out variety or apps which are already minimized

  #### Returns Promise<void>

  A Promise which resolves once the minimization action has completed

  Inherited from [Application](foundry.appv1.api.Application.md).[minimize](foundry.appv1.api.Application.md#minimize)

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

  Inherited from [Application](foundry.appv1.api.Application.md).[render](foundry.appv1.api.Application.md#render)

### saveEditor

* saveEditor(  
  Â Â Â Â name: string,  
  Â Â Â Â options?: { preventRender?: boolean; remove?: boolean },  
  ): Promise<void>

  Handle saving the content of a specific editor by name

  #### Parameters

  + name: string

    The named editor to save
  + `Optional`options: { preventRender?: boolean; remove?: boolean } = {}
    - ##### `Optional`preventRender?: boolean

      Prevent normal re-rendering of the sheet after saving.
    - ##### `Optional`remove?: boolean

      Remove the editor after saving its content

  #### Returns Promise<void>

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

  Inherited from [Application](foundry.appv1.api.Application.md).[setPosition](foundry.appv1.api.Application.md#setposition)

### submit

* submit(options?: object): Promise<FormApplication>

  Submit the contents of a Form Application, processing its content as defined by the Application

  #### Parameters

  + `Optional`options: object = {}

    Options passed to the \_onSubmit event handler

  #### Returns Promise<FormApplication>

  Return a self-reference for convenient method chaining

### `Protected`\_activateEditor

* \_activateEditor(div: HTMLElement): void

  `Protected`

  Activate an editor instance present within the form

  #### Parameters

  + div: HTMLElement

    The element which contains the editor

  #### Returns void

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

  Inherited from [Application](foundry.appv1.api.Application.md).[\_callHooks](foundry.appv1.api.Application.md#_callhooks)

### `Protected`\_canDragDrop

* \_canDragDrop(selector: string): boolean

  `Protected`

  Define whether a user is able to conclude a drag-and-drop workflow for a given drop selector

  #### Parameters

  + selector: string

    The candidate HTML selector for the drop target

  #### Returns boolean

  Can the current user drop on this selector?

  Inherited from [Application](foundry.appv1.api.Application.md).[\_canDragDrop](foundry.appv1.api.Application.md#_candragdrop)

### `Protected`\_canDragStart

* \_canDragStart(selector: string): boolean

  `Protected`

  Define whether a user is able to begin a dragstart workflow for a given drag selector

  #### Parameters

  + selector: string

    The candidate HTML selector for dragging

  #### Returns boolean

  Can the current user drag this selector?

  Inherited from [Application](foundry.appv1.api.Application.md).[\_canDragStart](foundry.appv1.api.Application.md#_candragstart)

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

### `Protected`\_disableFields

* \_disableFields(form: HTMLElement): void

  `Protected`

  If the form is not editable, disable its input fields

  #### Parameters

  + form: HTMLElement

    The form HTML

  #### Returns void

### `Protected`\_getHeaderButtons

* \_getHeaderButtons(): [ApplicationV1HeaderButton](../types/foundry.ApplicationV1HeaderButton.md)[]

  `Protected`

  Specify the set of config buttons which should appear in the Application header.
  Buttons should be returned as an Array of objects.
  The header buttons which are added to the application can be modified by the getApplicationV1HeaderButtons hook.

  #### Returns [ApplicationV1HeaderButton](../types/foundry.ApplicationV1HeaderButton.md)[]

  #### Fires

  getApplicationHeaderButtons

  Inherited from [Application](foundry.appv1.api.Application.md).[\_getHeaderButtons](foundry.appv1.api.Application.md#_getheaderbuttons)

### `Protected`\_getSubmitData

* \_getSubmitData(updateData?: object): object

  `Protected`

  Get an object of update data used to update the form's target object

  #### Parameters

  + updateData: object = {}

    Additional data that should be merged with the form data

  #### Returns object

  The prepared update data

### `Protected`\_onChangeColorPicker

* \_onChangeColorPicker(event: Event): void

  `Protected`

  Handle the change of a color picker input which enters it's chosen value into a related input field

  #### Parameters

  + event: Event

    The color picker change event

  #### Returns void

### `Protected`\_onChangeInput

* \_onChangeInput(event: Event): Promise<any>

  `Protected`

  Handle changes to an input element, submitting the form if options.submitOnChange is true.
  Do not preventDefault in this handler as other interactions on the form may also be occurring.

  #### Parameters

  + event: Event

    The initial change event

  #### Returns Promise<any>

### `Protected`\_onChangeRange

* \_onChangeRange(event: Event): void

  `Protected`

  Handle changes to a range type input by propagating those changes to the sibling range-value element

  #### Parameters

  + event: Event

    The initial change event

  #### Returns void

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

  Inherited from [Application](foundry.appv1.api.Application.md).[\_onChangeTab](foundry.appv1.api.Application.md#_onchangetab)

### `Protected`\_onDragOver

* \_onDragOver(event: DragEvent): void

  `Protected`

  Callback actions which occur when a dragged element is over a drop target.

  #### Parameters

  + event: DragEvent

    The originating DragEvent

  #### Returns void

  Inherited from [Application](foundry.appv1.api.Application.md).[\_onDragOver](foundry.appv1.api.Application.md#_ondragover)

### `Protected`\_onDragStart

* \_onDragStart(event: DragEvent): void

  `Protected`

  Callback actions which occur at the beginning of a drag start workflow.

  #### Parameters

  + event: DragEvent

    The originating DragEvent

  #### Returns void

  Inherited from [Application](foundry.appv1.api.Application.md).[\_onDragStart](foundry.appv1.api.Application.md#_ondragstart)

### `Protected`\_onDrop

* \_onDrop(event: DragEvent): void

  `Protected`

  Callback actions which occur when a dragged element is dropped on a target.

  #### Parameters

  + event: DragEvent

    The originating DragEvent

  #### Returns void

  Inherited from [Application](foundry.appv1.api.Application.md).[\_onDrop](foundry.appv1.api.Application.md#_ondrop)

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

  Inherited from [Application](foundry.appv1.api.Application.md).[\_onSearchFilter](foundry.appv1.api.Application.md#_onsearchfilter)

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

### `Protected`\_renderOuter

* \_renderOuter(): Promise<jQuery>

  `Protected`

  Render the outer application wrapper

  #### Returns Promise<jQuery>

  A promise resolving to the constructed jQuery object

  Inherited from [Application](foundry.appv1.api.Application.md).[\_renderOuter](foundry.appv1.api.Application.md#_renderouter)

### `Protected`\_restoreScrollPositions

* \_restoreScrollPositions(html: jQuery): void

  `Protected`

  Restore the scroll positions of containers within the app after re-rendering the content

  #### Parameters

  + html: jQuery

    The HTML object being traversed

  #### Returns void

  Inherited from [Application](foundry.appv1.api.Application.md).[\_restoreScrollPositions](foundry.appv1.api.Application.md#_restorescrollpositions)

### `Protected`\_saveScrollPositions

* \_saveScrollPositions(html: jQuery): void

  `Protected`

  Persist the scroll positions of containers within the app before re-rendering the content

  #### Parameters

  + html: jQuery

    The HTML object being traversed

  #### Returns void

  Inherited from [Application](foundry.appv1.api.Application.md).[\_saveScrollPositions](foundry.appv1.api.Application.md#_savescrollpositions)

### `Protected`\_waitForImages

* \_waitForImages(): Promise<void>

  `Protected`

  Wait for any images present in the Application to load.

  #### Returns Promise<void>

  A Promise that resolves when all images have loaded.

  Inherited from [Application](foundry.appv1.api.Application.md).[\_waitForImages](foundry.appv1.api.Application.md#_waitforimages)

### `Static`\_getInheritanceChain

* \_getInheritanceChain(): Function[]

  `Internal`

  Return the inheritance chain for this Application class up to (and including) it's base Application class.

  #### Returns Function[]

  Inherited from [Application](foundry.appv1.api.Application.md).[\_getInheritanceChain](foundry.appv1.api.Application.md#_getinheritancechain)