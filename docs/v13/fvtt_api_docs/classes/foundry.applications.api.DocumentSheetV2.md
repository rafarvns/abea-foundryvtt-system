---
title: "DocumentSheetV2 | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.applications.api.DocumentSheetV2.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [applications](../modules/foundry.applications.html)
* [api](../modules/foundry.applications.api.html)
* [DocumentSheetV2](foundry.applications.api.DocumentSheetV2.html)

# Class DocumentSheetV2

The Application class is responsible for rendering an HTMLElement into the Foundry Virtual Tabletop user interface.

#### Hierarchy ([View Summary](../hierarchy.html#foundry.applications.api.DocumentSheetV2))

* [ApplicationV2](foundry.applications.api.ApplicationV2.html)
  + DocumentSheetV2
    - [DocumentOwnershipConfig](foundry.applications.apps.DocumentOwnershipConfig.html)
    - [GridConfig](foundry.applications.apps.GridConfig.html)
    - [JournalEntryCategoryConfig](foundry.applications.sheets.journal.JournalEntryCategoryConfig.html)
    - [JournalEntryPageSheet](foundry.applications.sheets.journal.JournalEntryPageSheet.html)
    - [ActiveEffectConfig](foundry.applications.sheets.ActiveEffectConfig.html)
    - [ActorSheetV2](foundry.applications.sheets.ActorSheetV2.html)
    - [AdventureImporterV2](foundry.applications.sheets.AdventureImporterV2.html)
    - [AmbientLightConfig](foundry.applications.sheets.AmbientLightConfig.html)
    - [AmbientSoundConfig](foundry.applications.sheets.AmbientSoundConfig.html)
    - [CardConfig](foundry.applications.sheets.CardConfig.html)
    - [CardsConfig](foundry.applications.sheets.CardsConfig.html)
    - [CombatantConfig](foundry.applications.sheets.CombatantConfig.html)
    - [DrawingConfig](foundry.applications.sheets.DrawingConfig.html)
    - [FolderConfig](foundry.applications.sheets.FolderConfig.html)
    - [ItemSheetV2](foundry.applications.sheets.ItemSheetV2.html)
    - [MacroConfig](foundry.applications.sheets.MacroConfig.html)
    - [NoteConfig](foundry.applications.sheets.NoteConfig.html)
    - [PlaylistConfig](foundry.applications.sheets.PlaylistConfig.html)
    - [PlaylistSoundConfig](foundry.applications.sheets.PlaylistSoundConfig.html)
    - [RegionBehaviorConfig](foundry.applications.sheets.RegionBehaviorConfig.html)
    - [RegionConfig](foundry.applications.sheets.RegionConfig.html)
    - [RollTableSheet](foundry.applications.sheets.RollTableSheet.html)
    - [SceneConfig](foundry.applications.sheets.SceneConfig.html)
    - [TableResultConfig](foundry.applications.sheets.TableResultConfig.html)
    - [TileConfig](foundry.applications.sheets.TileConfig.html)
    - [UserConfig](foundry.applications.sheets.UserConfig.html)
    - [WallConfig](foundry.applications.sheets.WallConfig.html)
    - [AdventureExporter](foundry.applications.sheets.AdventureExporter.html)
    - [BaseSheet](foundry.applications.sheets.BaseSheet.html)

##### Index

### Constructors

[constructor](foundry.applications.api.DocumentSheetV2.html#constructor)

### Properties

[options](foundry.applications.api.DocumentSheetV2.html#options)
[position](foundry.applications.api.DocumentSheetV2.html#position)
[tabGroups](foundry.applications.api.DocumentSheetV2.html#tabgroups)
[\_appId](foundry.applications.api.DocumentSheetV2.html#_appid)
[\_maxZ](foundry.applications.api.DocumentSheetV2.html#_maxz)
[BASE\_APPLICATION](foundry.applications.api.DocumentSheetV2.html#base_application)
[DEFAULT\_OPTIONS](foundry.applications.api.DocumentSheetV2.html#default_options)
[emittedEvents](foundry.applications.api.DocumentSheetV2.html#emittedevents)
[RENDER\_STATES](foundry.applications.api.DocumentSheetV2.html#render_states)
[TABS](foundry.applications.api.DocumentSheetV2.html#tabs)

### Accessors

[classList](foundry.applications.api.DocumentSheetV2.html#classlist)
[document](foundry.applications.api.DocumentSheetV2.html#document)
[element](foundry.applications.api.DocumentSheetV2.html#element)
[form](foundry.applications.api.DocumentSheetV2.html#form)
[hasFrame](foundry.applications.api.DocumentSheetV2.html#hasframe)
[id](foundry.applications.api.DocumentSheetV2.html#id)
[isEditable](foundry.applications.api.DocumentSheetV2.html#iseditable)
[isVisible](foundry.applications.api.DocumentSheetV2.html#isvisible)
[minimized](foundry.applications.api.DocumentSheetV2.html#minimized)
[rendered](foundry.applications.api.DocumentSheetV2.html#rendered)
[state](foundry.applications.api.DocumentSheetV2.html#state)
[title](foundry.applications.api.DocumentSheetV2.html#title)
[window](foundry.applications.api.DocumentSheetV2.html#window)

### Methods

[\_awaitTransition](foundry.applications.api.DocumentSheetV2.html#_awaittransition)
[\_canRender](foundry.applications.api.DocumentSheetV2.html#_canrender)
[\_configureRenderOptions](foundry.applications.api.DocumentSheetV2.html#_configurerenderoptions)
[\_doEvent](foundry.applications.api.DocumentSheetV2.html#_doevent)
[\_headerControlButtons](foundry.applications.api.DocumentSheetV2.html#_headercontrolbuttons)
[\_initializeApplicationOptions](foundry.applications.api.DocumentSheetV2.html#_initializeapplicationoptions)
[\_onChangeForm](foundry.applications.api.DocumentSheetV2.html#_onchangeform)
[\_onClose](foundry.applications.api.DocumentSheetV2.html#_onclose)
[\_onFirstRender](foundry.applications.api.DocumentSheetV2.html#_onfirstrender)
[\_onRender](foundry.applications.api.DocumentSheetV2.html#_onrender)
[\_prepareContext](foundry.applications.api.DocumentSheetV2.html#_preparecontext)
[\_renderFrame](foundry.applications.api.DocumentSheetV2.html#_renderframe)
[\_renderHTML](foundry.applications.api.DocumentSheetV2.html#_renderhtml)
[addEventListener](foundry.applications.api.DocumentSheetV2.html#addeventlistener)
[bringToFront](foundry.applications.api.DocumentSheetV2.html#bringtofront)
[changeTab](foundry.applications.api.DocumentSheetV2.html#changetab)
[close](foundry.applications.api.DocumentSheetV2.html#close)
[dispatchEvent](foundry.applications.api.DocumentSheetV2.html#dispatchevent)
[maximize](foundry.applications.api.DocumentSheetV2.html#maximize)
[minimize](foundry.applications.api.DocumentSheetV2.html#minimize)
[removeEventListener](foundry.applications.api.DocumentSheetV2.html#removeeventlistener)
[render](foundry.applications.api.DocumentSheetV2.html#render)
[setPosition](foundry.applications.api.DocumentSheetV2.html#setposition)
[submit](foundry.applications.api.DocumentSheetV2.html#submit)
[toggleControls](foundry.applications.api.DocumentSheetV2.html#togglecontrols)
[\_attachFrameListeners](foundry.applications.api.DocumentSheetV2.html#_attachframelisteners)
[\_createContextMenu](foundry.applications.api.DocumentSheetV2.html#_createcontextmenu)
[\_getHeaderControls](foundry.applications.api.DocumentSheetV2.html#_getheadercontrols)
[\_getTabsConfig](foundry.applications.api.DocumentSheetV2.html#_gettabsconfig)
[\_insertElement](foundry.applications.api.DocumentSheetV2.html#_insertelement)
[\_onClickAction](foundry.applications.api.DocumentSheetV2.html#_onclickaction)
[\_onClickTab](foundry.applications.api.DocumentSheetV2.html#_onclicktab)
[\_onPosition](foundry.applications.api.DocumentSheetV2.html#_onposition)
[\_onRevealSecret](foundry.applications.api.DocumentSheetV2.html#_onrevealsecret)
[\_onSubmitForm](foundry.applications.api.DocumentSheetV2.html#_onsubmitform)
[\_postRender](foundry.applications.api.DocumentSheetV2.html#_postrender)
[\_preClose](foundry.applications.api.DocumentSheetV2.html#_preclose)
[\_preFirstRender](foundry.applications.api.DocumentSheetV2.html#_prefirstrender)
[\_prepareSubmitData](foundry.applications.api.DocumentSheetV2.html#_preparesubmitdata)
[\_prepareTabs](foundry.applications.api.DocumentSheetV2.html#_preparetabs)
[\_prePosition](foundry.applications.api.DocumentSheetV2.html#_preposition)
[\_preRender](foundry.applications.api.DocumentSheetV2.html#_prerender)
[\_processFormData](foundry.applications.api.DocumentSheetV2.html#_processformdata)
[\_processSubmitData](foundry.applications.api.DocumentSheetV2.html#_processsubmitdata)
[\_removeElement](foundry.applications.api.DocumentSheetV2.html#_removeelement)
[\_renderHeaderControl](foundry.applications.api.DocumentSheetV2.html#_renderheadercontrol)
[\_replaceHTML](foundry.applications.api.DocumentSheetV2.html#_replacehtml)
[\_tearDown](foundry.applications.api.DocumentSheetV2.html#_teardown)
[\_toggleDisabled](foundry.applications.api.DocumentSheetV2.html#_toggledisabled)
[\_updateFrame](foundry.applications.api.DocumentSheetV2.html#_updateframe)
[\_updatePosition](foundry.applications.api.DocumentSheetV2.html#_updateposition)
[\_migrateConstructorParams](foundry.applications.api.DocumentSheetV2.html#_migrateconstructorparams)
[inheritanceChain](foundry.applications.api.DocumentSheetV2.html#inheritancechain)
[parseCSSDimension](foundry.applications.api.DocumentSheetV2.html#parsecssdimension)
[waitForImages](foundry.applications.api.DocumentSheetV2.html#waitforimages)

## Constructors

### constructor

* new DocumentSheetV2(options: any, ...args: any[]): [DocumentSheetV2](foundry.applications.api.DocumentSheetV2.html)

  #### Parameters

  + options: any
  + ...args: any[]

  #### Returns [DocumentSheetV2](foundry.applications.api.DocumentSheetV2.html)

  #### Inherit Doc

  Overrides ApplicationV2.constructor

## Properties

### options

options: Readonly<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html) & [DocumentSheetConfiguration](../interfaces/foundry.DocumentSheetConfiguration.html)>

Application instance configuration options.

Inherited from ApplicationV2.options

### position

position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html) = ...

The current position of the application with respect to the window.document.body.

Inherited from ApplicationV2.position

### tabGroups

tabGroups: Record<string, null | string> = ...

If this Application uses tabbed navigation groups, this mapping is updated whenever the changeTab method is called.
Reports the active tab for each group, with a value of `null` indicating no tab is active.
Subclasses may override this property to define default tabs for each group.

Inherited from ApplicationV2.tabGroups

### `Static` `Internal`\_appId

\_appId: number = 0

An incrementing integer Application ID.

Inherited from ApplicationV2.\_appId

### `Static` `Internal`\_maxZ

\_maxZ: number = ...

The current maximum z-index of any displayed Application.

Inherited from ApplicationV2.\_maxZ

### `Static`BASE\_APPLICATION

BASE\_APPLICATION: typeof [ApplicationV2](foundry.applications.api.ApplicationV2.html) = ApplicationV2

Designates which upstream Application class in this class' inheritance chain is the base application.
Any DEFAULT\_OPTIONS of super-classes further upstream of the BASE\_APPLICATION are ignored.
Hook events for super-classes further upstream of the BASE\_APPLICATION are not dispatched.

Inherited from ApplicationV2.BASE\_APPLICATION

### `Static`DEFAULT\_OPTIONS

DEFAULT\_OPTIONS: {  
Â Â Â Â actions: {  
Â Â Â Â Â Â Â Â configureSheet: (...this: any, event: PointerEvent) => void;  
Â Â Â Â Â Â Â Â copyUuid: {  
Â Â Â Â Â Â Â Â Â Â Â Â buttons: number[];  
Â Â Â Â Â Â Â Â Â Â Â Â handler: (...this: any, event: PointerEvent) => void;  
Â Â Â Â Â Â Â Â };  
Â Â Â Â Â Â Â Â editImage: (  
Â Â Â Â Â Â Â Â Â Â Â Â event: PointerEvent,  
Â Â Â Â Â Â Â Â Â Â Â Â target: HTMLElement,  
Â Â Â Â Â Â Â Â ) => void | Promise<void>;  
Â Â Â Â Â Â Â Â importDocument: (...this: any) => Promise<any>;  
Â Â Â Â };  
Â Â Â Â canCreate: boolean;  
Â Â Â Â classes: string[];  
Â Â Â Â document: null;  
Â Â Â Â editPermission: 3;  
Â Â Â Â form: {  
Â Â Â Â Â Â Â Â closeOnSubmit: boolean;  
Â Â Â Â Â Â Â Â handler: (  
Â Â Â Â Â Â Â Â Â Â Â Â ...this: any,  
Â Â Â Â Â Â Â Â Â Â Â Â event: SubmitEvent,  
Â Â Â Â Â Â Â Â Â Â Â Â form: HTMLFormElement,  
Â Â Â Â Â Â Â Â Â Â Â Â formData: [FormDataExtended](foundry.applications.ux.FormDataExtended.html),  
Â Â Â Â Â Â Â Â Â Â Â Â options?: { updateData?: object },  
Â Â Â Â Â Â Â Â ) => Promise<void>;  
Â Â Â Â Â Â Â Â submitOnChange: boolean;  
Â Â Â Â };  
Â Â Â Â id: string;  
Â Â Â Â sheetConfig: boolean;  
Â Â Â Â tag: string;  
Â Â Â Â viewPermission: 1;  
Â Â Â Â window: {  
Â Â Â Â Â Â Â Â controls: {  
Â Â Â Â Â Â Â Â Â Â Â Â action: string;  
Â Â Â Â Â Â Â Â Â Â Â Â icon: string;  
Â Â Â Â Â Â Â Â Â Â Â Â label: string;  
Â Â Â Â Â Â Â Â Â Â Â Â visible: (...this: any) => boolean;  
Â Â Â Â Â Â Â Â }[];  
Â Â Â Â };  
} = ...

#### Inherit Doc

Overrides ApplicationV2.DEFAULT\_OPTIONS

### `Static`emittedEvents

emittedEvents: readonly ["render", "close", "position"] = ...

Inherited from ApplicationV2.emittedEvents

### `Static`RENDER\_STATES

RENDER\_STATES: Record<string, number> = ...

The sequence of rendering states that describe the Application life-cycle.

Inherited from ApplicationV2.RENDER\_STATES

### `Static`TABS

TABS: Record<string, [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.html)> = {}

Configuration of application tabs, with an entry per tab group.

Inherited from ApplicationV2.TABS

## Accessors

### classList

* get classList(): DOMTokenList

  The CSS class list of this Application instance

  #### Returns DOMTokenList

  Inherited from ApplicationV2.classList

### document

* get document(): ClientDocument

  The Document instance associated with the application

  #### Returns ClientDocument

### element

* get element(): HTMLElement

  The HTMLElement which renders this Application into the DOM.

  #### Returns HTMLElement

  Inherited from ApplicationV2.element

### form

* get form(): null | HTMLFormElement

  Does this Application have a top-level form element?

  #### Returns null | HTMLFormElement

  Inherited from ApplicationV2.form

### hasFrame

* get hasFrame(): boolean

  Does this Application instance render within an outer window frame?

  #### Returns boolean

  Inherited from ApplicationV2.hasFrame

### id

* get id(): string

  The HTML element ID of this Application instance.
  This provides a readonly view into the internal ID used by this application.
  This getter should not be overridden by subclasses, which should instead configure the ID in `DEFAULT_OPTIONS` or
  by defining a `uniqueId` during `_initializeApplicationOptions`.

  #### Returns string

  Inherited from ApplicationV2.id

### isEditable

* get isEditable(): boolean

  Is this Document sheet editable by the current User?
  This is governed by the editPermission threshold configured for the class.

  #### Returns boolean

### isVisible

* get isVisible(): boolean

  Is this Document sheet visible to the current User?
  This is governed by the viewPermission threshold configured for the class.

  #### Returns boolean

### minimized

* get minimized(): boolean

  Is this Application instance currently minimized?

  #### Returns boolean

  Inherited from ApplicationV2.minimized

### rendered

* get rendered(): boolean

  Is this Application instance currently rendered?

  #### Returns boolean

  Inherited from ApplicationV2.rendered

### state

* get state(): number

  The current render state of the Application.

  #### Returns number

  Inherited from ApplicationV2.state

### title

* get title(): string

  #### Returns string

  Overrides ApplicationV2.title

### window

* get window(): {  
  Â Â Â Â close: HTMLButtonElement;  
  Â Â Â Â content: HTMLElement;  
  Â Â Â Â controls: HTMLButtonElement;  
  Â Â Â Â controlsDropdown: HTMLDivElement;  
  Â Â Â Â header: HTMLElement;  
  Â Â Â Â icon: HTMLElement;  
  Â Â Â Â onDrag: Function;  
  Â Â Â Â onResize: Function;  
  Â Â Â Â pointerMoveThrottle: boolean;  
  Â Â Â Â pointerStartPosition: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html);  
  Â Â Â Â resize: HTMLElement;  
  Â Â Â Â title: HTMLHeadingElement;  
  }

  Convenience references to window header elements.

  #### Returns { Â Â Â Â close: HTMLButtonElement; Â Â Â Â content: HTMLElement; Â Â Â Â controls: HTMLButtonElement; Â Â Â Â controlsDropdown: HTMLDivElement; Â Â Â Â header: HTMLElement; Â Â Â Â icon: HTMLElement; Â Â Â Â onDrag: Function; Â Â Â Â onResize: Function; Â Â Â Â pointerMoveThrottle: boolean; Â Â Â Â pointerStartPosition: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html); Â Â Â Â resize: HTMLElement; Â Â Â Â title: HTMLHeadingElement; }

  Inherited from ApplicationV2.window

## Methods

### \_awaitTransition

* \_awaitTransition(element: HTMLElement, timeout: number): Promise<void>

  `Internal`

  Wait for a CSS transition to complete for an element.

  #### Parameters

  + element: HTMLElement

    The element which is transitioning
  + timeout: number

    A timeout in milliseconds in case the transitionend event does not occur

  #### Returns Promise<void>

  Inherited from ApplicationV2.\_awaitTransition

### \_canRender

* \_canRender(\_options: any): void

  #### Parameters

  + \_options: any

  #### Returns void

  Overrides ApplicationV2.\_canRender

### \_configureRenderOptions

* \_configureRenderOptions(options: any): void

  #### Parameters

  + options: any

  #### Returns void

  #### Inherit Doc

  Overrides ApplicationV2.\_configureRenderOptions

### \_doEvent

* \_doEvent(  
  Â Â Â Â handler: Function,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â async?: boolean;  
  Â Â Â Â Â Â Â Â debugText?: string;  
  Â Â Â Â Â Â Â Â eventName?: string;  
  Â Â Â Â Â Â Â Â handlerArgs?: any[];  
  Â Â Â Â Â Â Â Â hookArgs?: any[];  
  Â Â Â Â Â Â Â Â hookName?: string;  
  Â Â Â Â Â Â Â Â hookResponse?: boolean;  
  Â Â Â Â Â Â Â Â parentClassHooks?: boolean;  
  Â Â Â Â },  
  ): void  
  | Promise<void>

  `Internal`

  Perform an event in the application life-cycle.
  Await an internal life-cycle method defined by the class.
  Optionally dispatch an event for any registered listeners.

  #### Parameters

  + handler: Function

    A handler function to call
  + options: {  
    Â Â Â Â async?: boolean;  
    Â Â Â Â debugText?: string;  
    Â Â Â Â eventName?: string;  
    Â Â Â Â handlerArgs?: any[];  
    Â Â Â Â hookArgs?: any[];  
    Â Â Â Â hookName?: string;  
    Â Â Â Â hookResponse?: boolean;  
    Â Â Â Â parentClassHooks?: boolean;  
    } = {}

    Options which configure event handling

    - ##### `Optional`async?: boolean

      Await the result of the handler function?
    - ##### `Optional`debugText?: string

      Debugging text to log for the event
    - ##### `Optional`eventName?: string

      An event name to dispatch for registered listeners
    - ##### `Optional`handlerArgs?: any[]

      Arguments passed to the handler function
    - ##### `Optional`hookArgs?: any[]

      Arguments passed to the requested hook function
    - ##### `Optional`hookName?: string

      A hook name to dispatch for this and all parent classes
    - ##### `Optional`hookResponse?: boolean

      Add the handler response to hookArgs
    - ##### `Optional`parentClassHooks?: boolean

      Call hooks for parent classes in the inheritance chain?

  #### Returns void | Promise<void>

  A promise which resoles once the handler is complete if async is true

  Inherited from ApplicationV2.\_doEvent

### \_headerControlButtons

* \_headerControlButtons(): Generator<  
  Â Â Â Â [ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html),  
  Â Â Â Â void,  
  Â Â Â Â unknown,  
  >

  #### Returns Generator<[ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html), void, unknown>

  #### Inherit Doc

  Overrides ApplicationV2.\_headerControlButtons

### \_initializeApplicationOptions

* \_initializeApplicationOptions(options: any): any

  #### Parameters

  + options: any

  #### Returns any

  #### Inherit Doc

  Overrides ApplicationV2.\_initializeApplicationOptions

### \_onChangeForm

* \_onChangeForm(formConfig: any, event: any): void

  #### Parameters

  + formConfig: any
  + event: any

  #### Returns void

  #### Inherit Doc

  Overrides ApplicationV2.\_onChangeForm

### \_onClose

* \_onClose(options: any): void

  #### Parameters

  + options: any

  #### Returns void

  #### Inherit Doc

  Overrides ApplicationV2.\_onClose

### \_onFirstRender

* \_onFirstRender(context: any, options: any): Promise<void>

  #### Parameters

  + context: any
  + options: any

  #### Returns Promise<void>

  #### Inherit Doc

  Overrides ApplicationV2.\_onFirstRender

### \_onRender

* \_onRender(context: any, options: any): Promise<void>

  #### Parameters

  + context: any
  + options: any

  #### Returns Promise<void>

  #### Inherit Doc

  Overrides ApplicationV2.\_onRender

### \_prepareContext

* \_prepareContext(  
  Â Â Â Â options: any,  
  ): Promise<  
  Â Â Â Â [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html) & {  
  Â Â Â Â Â Â Â Â document: ClientDocument;  
  Â Â Â Â Â Â Â Â editable: boolean;  
  Â Â Â Â Â Â Â Â fields: any;  
  Â Â Â Â Â Â Â Â rootId: string;  
  Â Â Â Â Â Â Â Â source: any;  
  Â Â Â Â Â Â Â Â user: null  
  Â Â Â Â Â Â Â Â | [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html);  
  Â Â Â Â },  
  >

  #### Parameters

  + options: any

  #### Returns Promise< Â Â Â Â [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html) & { Â Â Â Â Â Â Â Â document: ClientDocument; Â Â Â Â Â Â Â Â editable: boolean; Â Â Â Â Â Â Â Â fields: any; Â Â Â Â Â Â Â Â rootId: string; Â Â Â Â Â Â Â Â source: any; Â Â Â Â Â Â Â Â user: null Â Â Â Â Â Â Â Â | [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html); Â Â Â Â }, >

  #### Inherit Doc

  Overrides ApplicationV2.\_prepareContext

### \_renderFrame

* \_renderFrame(options: any): Promise<HTMLElement>

  #### Parameters

  + options: any

  #### Returns Promise<HTMLElement>

  #### Inherit Doc

  Overrides ApplicationV2.\_renderFrame

### `Abstract`\_renderHTML

* \_renderHTML(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html),  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.html),  
  ): Promise<any>

  Render an HTMLElement for the Application.
  An Application subclass must implement this method in order for the Application to be renderable.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)

    Context data for the render operation
  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.html)

    Options which configure application rendering behavior

  #### Returns Promise<any>

  The result of HTML rendering may be implementation specific.
  Whatever value is returned here is passed to \_replaceHTML

  Inherited from ApplicationV2.\_renderHTML

### addEventListener

* addEventListener(  
  Â Â Â Â type: string,  
  Â Â Â Â listener: [EmittedEventListener](../types/foundry.utils.types.EmittedEventListener.html),  
  Â Â Â Â options?: { once?: boolean },  
  ): void

  Add a new event listener for a certain type of event.

  #### Parameters

  + type: string

    The type of event being registered for
  + listener: [EmittedEventListener](../types/foundry.utils.types.EmittedEventListener.html)

    The listener function called when the event occurs
  + `Optional`options: { once?: boolean } = {}

    Options which configure the event listener

    - ##### `Optional`once?: boolean

      Should the event only be responded to once and then removed

  #### Returns void

  #### See

  <https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener>

  Inherited from ApplicationV2.addEventListener

### bringToFront

* bringToFront(): void

  Bring this Application window to the front of the rendering stack by increasing its z-index.
  Once ApplicationV1 is deprecated we should switch from \_maxZ to ApplicationV2#maxZ
  We should also eliminate ui.activeWindow in favor of only ApplicationV2#frontApp

  #### Returns void

  Inherited from ApplicationV2.bringToFront

### changeTab

* changeTab(  
  Â Â Â Â tab: string,  
  Â Â Â Â group: string,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â event?: Event;  
  Â Â Â Â Â Â Â Â force?: boolean;  
  Â Â Â Â Â Â Â Â navElement?: HTMLElement;  
  Â Â Â Â Â Â Â Â updatePosition?: boolean;  
  Â Â Â Â },  
  ): void

  Change the active tab within a tab group in this Application instance.

  #### Parameters

  + tab: string

    The name of the tab which should become active
  + group: string

    The name of the tab group which defines the set of tabs
  + `Optional`options: {  
    Â Â Â Â event?: Event;  
    Â Â Â Â force?: boolean;  
    Â Â Â Â navElement?: HTMLElement;  
    Â Â Â Â updatePosition?: boolean;  
    } = {}

    Additional options which affect tab navigation

    - ##### `Optional`event?: Event

      An interaction event which caused the tab change, if any
    - ##### `Optional`force?: boolean

      Force changing the tab even if the new tab is already active
    - ##### `Optional`navElement?: HTMLElement

      An explicit navigation element being modified
    - ##### `Optional`updatePosition?: boolean

      Update application position after changing the tab?

  #### Returns void

  Inherited from ApplicationV2.changeTab

### close

* close(options?: Partial<[ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.html)>): Promise<[DocumentSheetV2](foundry.applications.api.DocumentSheetV2.html)>

  Close the Application, removing it from the DOM.

  #### Parameters

  + `Optional`options: Partial<[ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.html)> = {}

    Options which modify how the application is closed.

  #### Returns Promise<[DocumentSheetV2](foundry.applications.api.DocumentSheetV2.html)>

  A Promise which resolves to the closed Application instance

  Inherited from ApplicationV2.close

### dispatchEvent

* dispatchEvent(event: Event): boolean

  Dispatch an event on this target.

  #### Parameters

  + event: Event

    The Event to dispatch

  #### Returns boolean

  Was default behavior for the event prevented?

  #### See

  <https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent>

  Inherited from ApplicationV2.dispatchEvent

### maximize

* maximize(): Promise<void>

  Restore the Application to its original dimensions.

  #### Returns Promise<void>

  Inherited from ApplicationV2.maximize

### minimize

* minimize(): Promise<void>

  Minimize the Application, collapsing it to a minimal header.

  #### Returns Promise<void>

  Inherited from ApplicationV2.minimize

### removeEventListener

* removeEventListener(type: string, listener: [EmittedEventListener](../types/foundry.utils.types.EmittedEventListener.html)): void

  Remove an event listener for a certain type of event.

  #### Parameters

  + type: string

    The type of event being removed
  + listener: [EmittedEventListener](../types/foundry.utils.types.EmittedEventListener.html)

    The listener function being removed

  #### Returns void

  #### See

  <https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener>

  Inherited from ApplicationV2.removeEventListener

### render

* render(  
  Â Â Â Â options?:  
  Â Â Â Â Â Â Â Â | boolean  
  Â Â Â Â Â Â Â Â | [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.html),  
  Â Â Â Â \_options?: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.html),  
  ): Promise<[DocumentSheetV2](foundry.applications.api.DocumentSheetV2.html)>

  Render the Application, creating its HTMLElement and replacing its innerHTML.
  Add it to the DOM if it is not currently rendered and rendering is forced. Otherwise, re-render its contents.

  #### Parameters

  + `Optional`options: boolean | [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.html) = {}

    Options which configure application rendering behavior.
    A boolean is interpreted as the "force" option.
  + `Optional`\_options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.html) = {}

    Legacy options for backwards-compatibility with the original
    ApplicationV1#render signature.

  #### Returns Promise<[DocumentSheetV2](foundry.applications.api.DocumentSheetV2.html)>

  A Promise which resolves to the rendered Application instance

  Inherited from ApplicationV2.render

### setPosition

* setPosition(position?: Partial<[ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)>): void | [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)

  Update the Application element position using provided data which is merged with the prior position.

  #### Parameters

  + `Optional`position: Partial<[ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)>

    New Application positioning data

  #### Returns void | [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)

  The updated application position

  Inherited from ApplicationV2.setPosition

### submit

* submit(submitOptions?: object): Promise<any>

  Programmatically submit an ApplicationV2 instance which implements a single top-level form.

  #### Parameters

  + `Optional`submitOptions: object = {}

    Arbitrary options which are supported by and provided to the configured form
    submission handler.

  #### Returns Promise<any>

  A promise that resolves to the returned result of the form submission handler,
  if any.

  Inherited from ApplicationV2.submit

### toggleControls

* toggleControls(  
  Â Â Â Â expanded?: boolean,  
  Â Â Â Â options?: { animate?: boolean },  
  ): Promise<void>

  Toggle display of the Application controls menu.
  Only applicable to window Applications.

  #### Parameters

  + `Optional`expanded: boolean

    Set the controls visibility to a specific state.
    Otherwise, the visible state is toggled from its current value
  + `Optional`options: { animate?: boolean } = {}

    Options to configure the toggling behavior.

    - ##### `Optional`animate?: boolean

      Animate the controls toggling.

  #### Returns Promise<void>

  A Promise which resolves once the control expansion animation is complete

  Inherited from ApplicationV2.toggleControls

### `Protected`\_attachFrameListeners

* \_attachFrameListeners(): void

  `Protected`

  Attach event listeners to the Application frame.

  #### Returns void

  Inherited from ApplicationV2.\_attachFrameListeners

### `Protected`\_createContextMenu

* \_createContextMenu(  
  Â Â Â Â handler: () => ContextMenuEntry[],  
  Â Â Â Â selector: string,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â container?: HTMLElement;  
  Â Â Â Â Â Â Â Â hookName?: string;  
  Â Â Â Â Â Â Â Â parentClassHooks?: boolean;  
  Â Â Â Â },  
  ): null  
  | [ContextMenu](foundry.applications.ux.ContextMenu.html)

  `Protected`

  Create a ContextMenu instance used in this Application.

  #### Parameters

  + handler: () => ContextMenuEntry[]

    A handler function that provides initial context options
  + selector: string

    A CSS selector to which the ContextMenu will be bound
  + `Optional`options: { container?: HTMLElement; hookName?: string; parentClassHooks?: boolean } = {}

    Additional options which affect ContextMenu construction

    - ##### `Optional`container?: HTMLElement

      A parent HTMLElement which contains the selector target
    - ##### `Optional`hookName?: string

      The hook name
    - ##### `Optional`parentClassHooks?: boolean

      Whether to call hooks for the parent classes in the inheritance
      chain.

  #### Returns null | [ContextMenu](foundry.applications.ux.ContextMenu.html)

  A created ContextMenu or null if no menu items were defined

  Inherited from ApplicationV2.\_createContextMenu

### `Protected`\_getHeaderControls

* \_getHeaderControls(): [ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html)[]

  `Protected`

  Configure the array of header control menu options

  #### Returns [ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html)[]

  Inherited from ApplicationV2.\_getHeaderControls

### `Protected`\_getTabsConfig

* \_getTabsConfig(group: string): null | [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.html)

  `Protected`

  Get the configuration for a tabs group.

  #### Parameters

  + group: string

    The ID of a tabs group

  #### Returns null | [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.html)

  Inherited from ApplicationV2.\_getTabsConfig

### `Protected`\_insertElement

* \_insertElement(element: HTMLElement): void

  `Protected`

  Insert the application HTML element into the DOM.
  Subclasses may override this method to customize how the application is inserted.

  #### Parameters

  + element: HTMLElement

    The element to insert

  #### Returns void

  Inherited from ApplicationV2.\_insertElement

### `Protected`\_onClickAction

* \_onClickAction(event: PointerEvent, target: HTMLElement): void

  `Protected`

  A generic event handler for action clicks which can be extended by subclasses.
  Action handlers defined in DEFAULT\_OPTIONS are called first. This method is only called for actions which have
  no defined handler.

  #### Parameters

  + event: PointerEvent

    The originating click event
  + target: HTMLElement

    The capturing HTML element which defined a [data-action]

  #### Returns void

  Inherited from ApplicationV2.\_onClickAction

### `Protected`\_onClickTab

* \_onClickTab(event: PointerEvent): void

  `Protected`

  Handle click events on a tab within the Application.

  #### Parameters

  + event: PointerEvent

  #### Returns void

  Inherited from ApplicationV2.\_onClickTab

### `Protected`\_onPosition

* \_onPosition(position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)): void

  `Protected`

  Actions performed after the Application is re-positioned.

  #### Parameters

  + position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)

    The requested application position

  #### Returns void

  Inherited from ApplicationV2.\_onPosition

### `Protected`\_onRevealSecret

* \_onRevealSecret(event: Event): void

  `Protected`

  Handle toggling the revealed state of a secret embedded in some content.

  #### Parameters

  + event: Event

    The triggering event.

  #### Returns void

### `Protected`\_onSubmitForm

* \_onSubmitForm(  
  Â Â Â Â formConfig: ApplicationFormConfiguration,  
  Â Â Â Â event: Event | SubmitEvent,  
  ): Promise<void>

  `Protected`

  Handle submission for an Application which uses the form element.

  #### Parameters

  + formConfig: ApplicationFormConfiguration

    The form configuration for which this handler is bound
  + event: Event | SubmitEvent

    The form submission event

  #### Returns Promise<void>

  Inherited from ApplicationV2.\_onSubmitForm

### `Protected`\_postRender

* \_postRender(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html),  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.html),  
  ): Promise<void>

  `Protected`

  Perform post-render finalization actions.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)

    Prepared context data.
  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.html)

    Provided render options.

  #### Returns Promise<void>

  Inherited from ApplicationV2.\_postRender

### `Protected`\_preClose

* \_preClose(  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.html),  
  ): Promise<void>

  `Protected`

  Actions performed before closing the Application.
  Pre-close steps are awaited by the close process.

  #### Parameters

  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.html)

    Provided render options

  #### Returns Promise<void>

  Inherited from ApplicationV2.\_preClose

### `Protected`\_preFirstRender

* \_preFirstRender(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html),  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.html),  
  ): Promise<void>

  `Protected`

  Actions performed before a first render of the Application.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)

    Prepared context data
  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.html)

    Provided render options

  #### Returns Promise<void>

  Inherited from ApplicationV2.\_preFirstRender

### `Protected`\_prepareSubmitData

* \_prepareSubmitData(  
  Â Â Â Â event: SubmitEvent,  
  Â Â Â Â form: HTMLFormElement,  
  Â Â Â Â formData: [FormDataExtended](foundry.applications.ux.FormDataExtended.html),  
  Â Â Â Â updateData?: object,  
  ): object

  `Protected`

  Prepare data used to update the Document upon form submission.
  This data is cleaned and validated before being returned for further processing.

  #### Parameters

  + event: SubmitEvent

    The originating form submission event
  + form: HTMLFormElement

    The form element that was submitted
  + formData: [FormDataExtended](foundry.applications.ux.FormDataExtended.html)

    Processed data for the submitted form
  + `Optional`updateData: object

    Additional data passed in if this form is submitted manually which
    should be merged with prepared formData.

  #### Returns object

  Prepared submission data as an object

  #### Throws

  Subclasses may throw validation errors here to prevent form submission

### `Protected`\_prepareTabs

* \_prepareTabs(group: string): Record<string, [ApplicationTab](../interfaces/foundry.applications.types.ApplicationTab.html)>

  `Protected`

  Prepare application tab data for a single tab group.

  #### Parameters

  + group: string

    The ID of the tab group to prepare

  #### Returns Record<string, [ApplicationTab](../interfaces/foundry.applications.types.ApplicationTab.html)>

  Inherited from ApplicationV2.\_prepareTabs

### `Protected`\_prePosition

* \_prePosition(position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)): void

  `Protected`

  Actions performed before the Application is re-positioned.
  Pre-position steps are not awaited because setPosition is synchronous.

  #### Parameters

  + position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)

    The requested application position

  #### Returns void

  Inherited from ApplicationV2.\_prePosition

### `Protected`\_preRender

* \_preRender(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html),  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.html),  
  ): Promise<void>

  `Protected`

  Actions performed before any render of the Application.
  Pre-render steps are awaited by the render process.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)

    Prepared context data
  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.html)

    Provided render options

  #### Returns Promise<void>

  Inherited from ApplicationV2.\_preRender

### `Protected`\_processFormData

* \_processFormData(  
  Â Â Â Â event: null | SubmitEvent,  
  Â Â Â Â form: HTMLFormElement,  
  Â Â Â Â formData: [FormDataExtended](foundry.applications.ux.FormDataExtended.html),  
  ): object

  `Protected`

  Customize how form data is extracted into an expanded object.

  #### Parameters

  + event: null | SubmitEvent

    The originating form submission event
  + form: HTMLFormElement

    The form element that was submitted
  + formData: [FormDataExtended](foundry.applications.ux.FormDataExtended.html)

    Processed data for the submitted form

  #### Returns object

  An expanded object of processed form data

  #### Throws

  Subclasses may throw validation errors here to prevent form submission

### `Protected`\_processSubmitData

* \_processSubmitData(  
  Â Â Â Â event: SubmitEvent,  
  Â Â Â Â form: HTMLFormElement,  
  Â Â Â Â submitData: object,  
  Â Â Â Â options?: Partial<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html) | [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html)>,  
  ): Promise<void>

  `Protected`

  Submit a document update or creation request based on the processed form data.

  #### Parameters

  + event: SubmitEvent

    The originating form submission event
  + form: HTMLFormElement

    The form element that was submitted
  + submitData: object

    Processed and validated form data to be used for a document update
  + `Optional`options: Partial<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html) | [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html)> = {}

    Additional options altering the request

  #### Returns Promise<void>

### `Protected`\_removeElement

* \_removeElement(element: HTMLElement): void

  `Protected`

  Remove the application HTML element from the DOM.
  Subclasses may override this method to customize how the application element is removed.

  #### Parameters

  + element: HTMLElement

    The element to be removed

  #### Returns void

  Inherited from ApplicationV2.\_removeElement

### `Protected`\_renderHeaderControl

* \_renderHeaderControl(control: [ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html)): HTMLLIElement

  `Protected`

  Render a header control button.

  #### Parameters

  + control: [ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html)

  #### Returns HTMLLIElement

  Inherited from ApplicationV2.\_renderHeaderControl

### `Protected`\_replaceHTML

* \_replaceHTML(  
  Â Â Â Â result: any,  
  Â Â Â Â content: HTMLElement,  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.html),  
  ): void

  `Protected`

  Replace the HTML of the application with the result provided by the rendering backend.
  An Application subclass should implement this method in order for the Application to be renderable.

  #### Parameters

  + result: any

    The result returned by the application rendering backend
  + content: HTMLElement

    The content element into which the rendered result must be inserted
  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.html)

    Options which configure application rendering behavior

  #### Returns void

  Inherited from ApplicationV2.\_replaceHTML

### `Protected`\_tearDown

* \_tearDown(options: [ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.html)): void

  `Protected`

  Remove elements from the DOM and trigger garbage collection as part of application closure.

  #### Parameters

  + options: [ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.html)

  #### Returns void

  Inherited from ApplicationV2.\_tearDown

### `Protected`\_toggleDisabled

* \_toggleDisabled(disabled: boolean): void

  `Protected`

  Disable or reenable all form fields in this application.

  #### Parameters

  + disabled: boolean

    Should the fields be disabled?

  #### Returns void

### `Protected`\_updateFrame

* \_updateFrame(  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.html),  
  ): void

  `Protected`

  When the Application is rendered, optionally update aspects of the window frame.

  #### Parameters

  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.html)

    Options provided at render-time

  #### Returns void

  Inherited from ApplicationV2.\_updateFrame

### `Protected`\_updatePosition

* \_updatePosition(position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)): [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)

  `Protected`

  Translate a requested application position updated into a resolved allowed position for the Application.
  Subclasses may override this method to implement more advanced positioning behavior.

  #### Parameters

  + position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)

    Requested Application positioning data

  #### Returns [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)

  Resolved Application positioning data

  Inherited from ApplicationV2.\_updatePosition

### `Static`\_migrateConstructorParams

* \_migrateConstructorParams(  
  Â Â Â Â first: unknown,  
  Â Â Â Â rest: unknown[],  
  ): Partial<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html) & [DocumentSheetConfiguration](../interfaces/foundry.DocumentSheetConfiguration.html)>

  `Internal`

  Provide a deprecation path for converted V1 document sheets.

  #### Parameters

  + first: unknown

    The first parameter received by this class's constructor
  + rest: unknown[]

    Any additional parameters received

  #### Returns Partial<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html) & [DocumentSheetConfiguration](../interfaces/foundry.DocumentSheetConfiguration.html)>

### `Static`inheritanceChain

* inheritanceChain(): Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.html), void, unknown>

  Iterate over the inheritance chain of this Application.
  The chain includes this Application itself and all parents until the base application is encountered.

  #### Returns Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.html), void, unknown>

  #### See

  [ApplicationV2.BASE\_APPLICATION](foundry.applications.api.ApplicationV2.html#base_application)

  #### Yields

  Inherited from ApplicationV2.inheritanceChain

### `Static`parseCSSDimension

* parseCSSDimension(style: string, parentDimension: number): number | void

  Parse a CSS style rule into a number of pixels which apply to that dimension.

  #### Parameters

  + style: string

    The CSS style rule
  + parentDimension: number

    The relevant dimension of the parent element

  #### Returns number | void

  The parsed style dimension in pixels

  Inherited from ApplicationV2.parseCSSDimension

### `Static`waitForImages

* waitForImages(element: HTMLElement): Promise<void>

  Wait for any images in the given element to load.

  #### Parameters

  + element: HTMLElement

    The element.

  #### Returns Promise<void>

  Inherited from ApplicationV2.waitForImages