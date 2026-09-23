---
title: "TokenConfig | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.applications.sheets.TokenConfig.html"
category: "classes"
---

# Class TokenConfig

The Application responsible for configuring a single token document within a parent Scene

#### Mixes

TokenApplication

#### Hierarchy ([View Summary](../hierarchy.md#foundry.applications.sheets.TokenConfig))

* [PlaceableConfig](foundry.applications.sheets.PlaceableConfig.md)<this>
  + TokenConfig

##### Index

### Constructors

[constructor](#constructor)

### Properties

[isPrototype](#isprototype)
[options](#options)
[position](#position)
[tabGroups](#tabgroups)
[\_preview](#_preview)
[\_appId](#_appid)
[\_maxZ](#_maxz)
[BASE\_APPLICATION](#base_application)
[DEFAULT\_OPTIONS](#default_options)
[emittedEvents](#emittedevents)
[RENDER\_STATES](#render_states)
[TABS](#tabs)

### Accessors

[\_fields](#_fields)
[actor](#actor)
[children](#children)
[classList](#classlist)
[document](#document)
[element](#element)
[form](#form)
[hasFrame](#hasframe)
[id](#id)
[isEditable](#iseditable)
[isVisible](#isvisible)
[minimized](#minimized)
[parent](#parent)
[rendered](#rendered)
[state](#state)
[title](#title)
[token](#token)
[window](#window)

### Methods

[\_awaitTransition](#_awaittransition)
[\_canDetach](#_candetach)
[\_canRender](#_canrender)
[\_configureRenderOptions](#_configurerenderoptions)
[\_doEvent](#_doevent)
[\_getFrameButtons](#_getframebuttons)
[\_headerControlButtons](#_headercontrolbuttons)
[\_initializeApplicationOptions](#_initializeapplicationoptions)
[\_onChangeForm](#_onchangeform)
[\_onClose](#_onclose)
[\_onFirstRender](#_onfirstrender)
[\_onRender](#_onrender)
[\_postRender](#_postrender)
[\_preClose](#_preclose)
[\_prepareAppearanceTab](#_prepareappearancetab)
[\_prepareContext](#_preparecontext)
[\_previewChanges](#_previewchanges)
[\_processSubmitData](#_processsubmitdata)
[\_renderFrame](#_renderframe)
[\_renderHTML](#_renderhtml)
[addEventListener](#addeventlistener)
[attachWindow](#attachwindow)
[bringToFront](#bringtofront)
[changeTab](#changetab)
[close](#close)
[detachWindow](#detachwindow)
[dispatchEvent](#dispatchevent)
[maximize](#maximize)
[minimize](#minimize)
[removeEventListener](#removeeventlistener)
[render](#render)
[renderChild](#renderchild)
[setPosition](#setposition)
[submit](#submit)
[\_attachFrameListeners](#_attachframelisteners)
[\_canAttach](#_canattach)
[\_createContextMenu](#_createcontextmenu)
[\_createPreview](#_createpreview)
[\_destroyPreview](#_destroypreview)
[\_getHeaderControls](#_getheadercontrols)
[\_getTabsConfig](#_gettabsconfig)
[\_headerControlContextEntries](#_headercontrolcontextentries)
[\_initializePreview](#_initializepreview)
[\_insertElement](#_insertelement)
[\_onAttach](#_onattach)
[\_onChangeBar](#_onchangebar)
[\_onClickAction](#_onclickaction)
[\_onClickTab](#_onclicktab)
[\_onDetach](#_ondetach)
[\_onPosition](#_onposition)
[\_onRevealSecret](#_onrevealsecret)
[\_onSubmitForm](#_onsubmitform)
[\_preFirstRender](#_prefirstrender)
[\_prepareSubmitData](#_preparesubmitdata)
[\_prepareTabs](#_preparetabs)
[\_prePosition](#_preposition)
[\_preRender](#_prerender)
[\_processFormData](#_processformdata)
[\_refit](#_refit)
[\_removeElement](#_removeelement)
[\_renderFrameButtons](#_renderframebuttons)
[\_renderHeaderControl](#_renderheadercontrol)
[\_replaceHTML](#_replacehtml)
[\_resetPreview](#_resetpreview)
[\_tearDown](#_teardown)
[\_toggleDisabled](#_toggledisabled)
[\_updateFrame](#_updateframe)
[\_updatePosition](#_updateposition)
[\_migrateConstructorParams](#_migrateconstructorparams)
[inheritanceChain](#inheritancechain)
[instances](#instances)
[parseCSSDimension](#parsecssdimension)
[waitForImages](#waitforimages)

## Constructors

### constructor

* new TokenConfig(options: any, ...args: any[]): TokenConfig

  #### Parameters

  + options: any
  + ...args: any[]

  #### Returns TokenConfig

  #### Inherit Doc

  Inherited from TokenApplicationMixin(PlaceableConfig).constructor

## Properties

### isPrototype

isPrototype: boolean = false

### options

options: Readonly<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md) & [DocumentSheetConfiguration](../interfaces/foundry.DocumentSheetConfiguration.md)>

Application instance configuration options.

Inherited from TokenApplicationMixin(PlaceableConfig).options

### position

position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md) = ...

The current position of the application with respect to the window.document.body.

Inherited from TokenApplicationMixin(PlaceableConfig).position

### tabGroups

tabGroups: Record<string, string | null> = ...

If this Application uses tabbed navigation groups, this mapping is updated whenever the changeTab method is called.
Reports the active tab for each group, with a value of `null` indicating no tab is active.
Subclasses may override this property to define default tabs for each group.

Inherited from TokenApplicationMixin(PlaceableConfig).tabGroups

### `Protected`\_preview

\_preview: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | null = null

The preview of this config.

Inherited from TokenApplicationMixin(PlaceableConfig).\_preview

### `Static` `Internal`\_appId

\_appId: number = 0

An incrementing integer Application ID.

Inherited from TokenApplicationMixin(PlaceableConfig).\_appId

### `Static` `Internal`\_maxZ

\_maxZ: number = ...

The current maximum z-index of any displayed Application.

Inherited from TokenApplicationMixin(PlaceableConfig).\_maxZ

### `Static`BASE\_APPLICATION

BASE\_APPLICATION: typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md) = ApplicationV2

Designates which upstream Application class in this class' inheritance chain is the base application.
Any DEFAULT\_OPTIONS of super-classes further upstream of the BASE\_APPLICATION are ignored.
Hook events for super-classes further upstream of the BASE\_APPLICATION are not dispatched.

Inherited from TokenApplicationMixin(PlaceableConfig).BASE\_APPLICATION

### `Static`DEFAULT\_OPTIONS

DEFAULT\_OPTIONS: { preview: boolean } = ...

#### Inherit Doc

Inherited from TokenApplicationMixin(PlaceableConfig).DEFAULT\_OPTIONS

### `Static`emittedEvents

emittedEvents: readonly ["prerender", "render", "close", "position"] = ...

Inherited from TokenApplicationMixin(PlaceableConfig).emittedEvents

### `Static`RENDER\_STATES

RENDER\_STATES: Record<string, number> = ...

The sequence of rendering states that describe the Application life-cycle.

Inherited from TokenApplicationMixin(PlaceableConfig).RENDER\_STATES

### `Static`TABS

TABS: Record<string, [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.md)> = {}

Configuration of application tabs, with an entry per tab group.

Inherited from TokenApplicationMixin(PlaceableConfig).TABS

## Accessors

### \_fields

* get \_fields(): [DataSchema](../types/foundry.abstract.types.DataSchema.md)

  #### Returns [DataSchema](../types/foundry.abstract.types.DataSchema.md)

### actor

* get actor(): any

  #### Returns any

### children

* get children(): Map<  
  Â Â Â Â string,  
  Â Â Â Â [ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>,  
  >

  The child Applications registered under this one via renderChild.

  #### Returns Map<string, [ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>>

  Inherited from [foundry](../modules/foundry.md).[children](../modules/foundry.md#children)

### classList

* get classList(): DOMTokenList

  The CSS class list of this Application instance

  #### Returns DOMTokenList

  Inherited from TokenApplicationMixin(PlaceableConfig).classList

### document

* get document(): ClientDocument

  The Document instance associated with the application

  #### Returns ClientDocument

  Inherited from TokenApplicationMixin(PlaceableConfig).document

### element

* get element(): HTMLElement

  The HTMLElement which renders this Application into the DOM.

  #### Returns HTMLElement

  Inherited from TokenApplicationMixin(PlaceableConfig).element

### form

* get form(): HTMLFormElement | null

  Does this Application have a top-level form element?

  #### Returns HTMLFormElement | null

  Inherited from TokenApplicationMixin(PlaceableConfig).form

### hasFrame

* get hasFrame(): boolean

  Does this Application instance render within an outer window frame?

  #### Returns boolean

  Inherited from TokenApplicationMixin(PlaceableConfig).hasFrame

### id

* get id(): string

  The HTML element ID of this Application instance.
  This provides a readonly view into the internal ID used by this application.
  This getter should not be overridden by subclasses, which should instead configure the ID in `DEFAULT_OPTIONS` or
  by defining a `uniqueId` during `_initializeApplicationOptions`.

  #### Returns string

  Inherited from TokenApplicationMixin(PlaceableConfig).id

### isEditable

* get isEditable(): boolean

  Is this Document sheet editable by the current User?
  This is governed by the editPermission threshold configured for the class.

  #### Returns boolean

  Inherited from TokenApplicationMixin(PlaceableConfig).isEditable

### isVisible

* get isVisible(): boolean

  #### Returns boolean

  #### Inherit Doc

  Overrides TokenApplicationMixin(PlaceableConfig).isVisible

### minimized

* get minimized(): boolean

  Is this Application instance currently minimized?

  #### Returns boolean

  Inherited from TokenApplicationMixin(PlaceableConfig).minimized

### parent

* get parent(): | [ApplicationV2](foundry.applications.api.ApplicationV2.md)<  
  Â Â Â Â [ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md),  
  Â Â Â Â [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md),  
  >  
  | null

  The parent Application of this Application, if registered via renderChild.

  #### Returns [ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)> | null

  Inherited from [foundry](../modules/foundry.md).[parent](../modules/foundry.md#parent)

### rendered

* get rendered(): boolean

  Is this Application instance currently rendered?

  #### Returns boolean

  Inherited from TokenApplicationMixin(PlaceableConfig).rendered

### state

* get state(): number

  The current render state of the Application.

  #### Returns number

  Inherited from TokenApplicationMixin(PlaceableConfig).state

### title

* get title(): string

  #### Returns string

  Inherited from TokenApplicationMixin(PlaceableConfig).title

### token

* get token(): any

  #### Returns any

### window

* get window(): {  
  Â Â Â Â close: HTMLButtonElement;  
  Â Â Â Â content: HTMLElement;  
  Â Â Â Â controls: HTMLButtonElement;  
  Â Â Â Â header: HTMLElement;  
  Â Â Â Â icon: HTMLElement;  
  Â Â Â Â onDrag: Function;  
  Â Â Â Â onResize: Function;  
  Â Â Â Â pointerMoveThrottle: boolean;  
  Â Â Â Â pointerStartPosition: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md);  
  Â Â Â Â resize: HTMLElement;  
  Â Â Â Â title: HTMLHeadingElement;  
  Â Â Â Â windowId: string;  
  }

  Convenience references to window header elements.

  #### Returns { Â Â Â Â close: HTMLButtonElement; Â Â Â Â content: HTMLElement; Â Â Â Â controls: HTMLButtonElement; Â Â Â Â header: HTMLElement; Â Â Â Â icon: HTMLElement; Â Â Â Â onDrag: Function; Â Â Â Â onResize: Function; Â Â Â Â pointerMoveThrottle: boolean; Â Â Â Â pointerStartPosition: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md); Â Â Â Â resize: HTMLElement; Â Â Â Â title: HTMLHeadingElement; Â Â Â Â windowId: string; }

  Inherited from [foundry](../modules/foundry.md).[window](../modules/foundry.md#window)

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

  Inherited from TokenApplicationMixin(PlaceableConfig).\_awaitTransition

### \_canDetach

* \_canDetach(): boolean

  Whether this Application is permitted to detach from the main workspace.
  Managed children (those with an active parent) may detach to break the parent link and claim their own window.

  #### Returns boolean

  Inherited from TokenApplicationMixin(PlaceableConfig).\_canDetach

### \_canRender

* \_canRender(\_options: any): void

  #### Parameters

  + \_options: any

  #### Returns void

  Inherited from TokenApplicationMixin(PlaceableConfig).\_canRender

### \_configureRenderOptions

* \_configureRenderOptions(options: any): void

  #### Parameters

  + options: any

  #### Returns void

  #### Inherit Doc

  Inherited from TokenApplicationMixin(PlaceableConfig).\_configureRenderOptions

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

  Inherited from TokenApplicationMixin(PlaceableConfig).\_doEvent

### \_getFrameButtons

* \_getFrameButtons(options: any): [ApplicationHeaderControlsEntry](../types/foundry.applications.types.ApplicationHeaderControlsEntry.md)[]

  #### Parameters

  + options: any

  #### Returns [ApplicationHeaderControlsEntry](../types/foundry.applications.types.ApplicationHeaderControlsEntry.md)[]

  #### Inherit Doc

  Inherited from TokenApplicationMixin(PlaceableConfig).\_getFrameButtons

### \_headerControlButtons

* \_headerControlButtons(): Generator<  
  Â Â Â Â [ApplicationHeaderControlsEntry](../types/foundry.applications.types.ApplicationHeaderControlsEntry.md),  
  Â Â Â Â void,  
  Â Â Â Â unknown,  
  >

  #### Returns Generator<[ApplicationHeaderControlsEntry](../types/foundry.applications.types.ApplicationHeaderControlsEntry.md), void, unknown>

  #### Inherit Doc

  Inherited from TokenApplicationMixin(PlaceableConfig).\_headerControlButtons

### \_initializeApplicationOptions

* \_initializeApplicationOptions(options: any): any

  #### Parameters

  + options: any

  #### Returns any

  #### Inherit Doc

  Inherited from TokenApplicationMixin(PlaceableConfig).\_initializeApplicationOptions

### \_onChangeForm

* \_onChangeForm(formConfig: any, event: any): void

  #### Parameters

  + formConfig: any
  + event: any

  #### Returns void

  #### Inherit Doc

  Overrides TokenApplicationMixin(PlaceableConfig).\_onChangeForm

### \_onClose

* \_onClose(options: any): void

  #### Parameters

  + options: any

  #### Returns void

  #### Inherit Doc

  Inherited from TokenApplicationMixin(PlaceableConfig).\_onClose

### \_onFirstRender

* \_onFirstRender(context: any, options: any): Promise<void>

  #### Parameters

  + context: any
  + options: any

  #### Returns Promise<void>

  #### Inherit Doc

  Inherited from TokenApplicationMixin(PlaceableConfig).\_onFirstRender

### \_onRender

* \_onRender(context: any, options: any): Promise<void>

  #### Parameters

  + context: any
  + options: any

  #### Returns Promise<void>

  #### Inherit Doc

  Overrides TokenApplicationMixin(PlaceableConfig).\_onRender

### \_postRender

* \_postRender(context: any, options: any): Promise<void>

  #### Parameters

  + context: any
  + options: any

  #### Returns Promise<void>

  #### Inherit Doc

  Inherited from TokenApplicationMixin(PlaceableConfig).\_postRender

### \_preClose

* \_preClose(options: any): Promise<void>

  #### Parameters

  + options: any

  #### Returns Promise<void>

  #### Inherit Doc

  Inherited from TokenApplicationMixin(PlaceableConfig).\_preClose

### \_prepareAppearanceTab

* \_prepareAppearanceTab(options: any): Promise<any>

  #### Parameters

  + options: any

  #### Returns Promise<any>

  #### Inherit Doc

### \_prepareContext

* \_prepareContext(  
  Â Â Â Â options: any,  
  ): Promise<  
  Â Â Â Â [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md) & {  
  Â Â Â Â Â Â Â Â document: ClientDocument;  
  Â Â Â Â Â Â Â Â editable: boolean;  
  Â Â Â Â Â Â Â Â fields: any;  
  Â Â Â Â Â Â Â Â model: ClientDocument;  
  Â Â Â Â Â Â Â Â rootId: string;  
  Â Â Â Â Â Â Â Â source: any;  
  Â Â Â Â Â Â Â Â user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md)  
  Â Â Â Â Â Â Â Â | null;  
  Â Â Â Â } & {  
  Â Â Â Â Â Â Â Â document: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>  
  Â Â Â Â Â Â Â Â | null;  
  Â Â Â Â Â Â Â Â gridUnits: any;  
  Â Â Â Â Â Â Â Â inputs: {  
  Â Â Â Â Â Â Â Â Â Â Â Â createMultiSelectInput: (  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â field: any,  
  Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â config: any,  
  Â Â Â Â Â Â Â Â Â Â Â Â ) => AbstractMultiSelectElement;  
  Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â model: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>  
  Â Â Â Â Â Â Â Â | null;  
  Â Â Â Â Â Â Â Â selectableLevels: any;  
  Â Â Â Â Â Â Â Â source: object;  
  Â Â Â Â },  
  >

  #### Parameters

  + options: any

  #### Returns Promise< Â Â Â Â [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md) & { Â Â Â Â Â Â Â Â document: ClientDocument; Â Â Â Â Â Â Â Â editable: boolean; Â Â Â Â Â Â Â Â fields: any; Â Â Â Â Â Â Â Â model: ClientDocument; Â Â Â Â Â Â Â Â rootId: string; Â Â Â Â Â Â Â Â source: any; Â Â Â Â Â Â Â Â user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md) Â Â Â Â Â Â Â Â | null; Â Â Â Â } & { Â Â Â Â Â Â Â Â document: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> Â Â Â Â Â Â Â Â | null; Â Â Â Â Â Â Â Â gridUnits: any; Â Â Â Â Â Â Â Â inputs: { Â Â Â Â Â Â Â Â Â Â Â Â createMultiSelectInput: ( Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â field: any, Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â config: any, Â Â Â Â Â Â Â Â Â Â Â Â ) => AbstractMultiSelectElement; Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â model: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> Â Â Â Â Â Â Â Â | null; Â Â Â Â Â Â Â Â selectableLevels: any; Â Â Â Â Â Â Â Â source: object; Â Â Â Â }, >

  #### Inherit Doc

  Inherited from TokenApplicationMixin(PlaceableConfig).\_prepareContext

### \_previewChanges

* \_previewChanges(changes: any): void

  #### Parameters

  + changes: any

  #### Returns void

  #### Inherit Doc

  Overrides TokenApplicationMixin(PlaceableConfig).\_previewChanges

### \_processSubmitData

* \_processSubmitData(  
  Â Â Â Â event: any,  
  Â Â Â Â form: any,  
  Â Â Â Â submitData: any,  
  Â Â Â Â options: any,  
  ): Promise<  
  Â Â Â Â {  
  Â Â Â Â Â Â Â Â created?: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>;  
  Â Â Â Â Â Â Â Â updated?: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>;  
  Â Â Â Â },  
  >

  #### Parameters

  + event: any
  + form: any
  + submitData: any
  + options: any

  #### Returns Promise< Â Â Â Â { Â Â Â Â Â Â Â Â created?: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>; Â Â Â Â Â Â Â Â updated?: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>; Â Â Â Â }, >

  #### Inherit Doc

  Overrides TokenApplicationMixin(PlaceableConfig).\_processSubmitData

### \_renderFrame

* \_renderFrame(options: any): Promise<HTMLElement>

  #### Parameters

  + options: any

  #### Returns Promise<HTMLElement>

  #### Inherit Doc

  Inherited from TokenApplicationMixin(PlaceableConfig).\_renderFrame

### `Abstract`\_renderHTML

* \_renderHTML(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md),  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.md),  
  ): Promise<any>

  Render an HTMLElement for the Application.
  An Application subclass must implement this method in order for the Application to be renderable.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md)

    Context data for the render operation
  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.md)

    Options which configure application rendering behavior

  #### Returns Promise<any>

  The result of HTML rendering may be implementation specific.
  Whatever value is returned here is passed to \_replaceHTML

  Inherited from TokenApplicationMixin(PlaceableConfig).\_renderHTML

### addEventListener

* addEventListener(  
  Â Â Â Â type: string,  
  Â Â Â Â listener: [EmittedEventListener](../types/foundry.utils.types.EmittedEventListener.md),  
  Â Â Â Â options?: { once?: boolean },  
  ): void

  Add a new event listener for a certain type of event.

  #### Parameters

  + type: string

    The type of event being registered for
  + listener: [EmittedEventListener](../types/foundry.utils.types.EmittedEventListener.md)

    The listener function called when the event occurs
  + `Optional`options: { once?: boolean } = {}

    Options which configure the event listener

    - ##### `Optional`once?: boolean

      Should the event only be responded to once and then removed

  #### Returns void

  #### See

  <https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener>

  Inherited from TokenApplicationMixin(PlaceableConfig).addEventListener

### attachWindow

* attachWindow(  
  Â Â Â Â options?: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.md),  
  ): Promise<  
  Â Â Â Â [ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>,  
  >

  Re-attach a detached application to the main workspace.
  If this application was previously a child and was manually detached, breaking its parent link, this method first
  attempts to re-join the prior parent's window before falling back to the main workspace.

  #### Parameters

  + `Optional`options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.md) = {}

    Render options.

  #### Returns Promise<[ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>>

  Inherited from TokenApplicationMixin(PlaceableConfig).attachWindow

### bringToFront

* bringToFront(): void

  Bring this Application window to the front of the rendering stack by increasing its z-index.
  Once ApplicationV1 is deprecated we should switch from \_maxZ to ApplicationV2#maxZ
  We should also eliminate ui.activeWindow in favor of only ApplicationV2#frontApp

  #### Returns void

  Inherited from TokenApplicationMixin(PlaceableConfig).bringToFront

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

  Inherited from TokenApplicationMixin(PlaceableConfig).changeTab

### close

* close(options?: Partial<[ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.md)>): Promise<TokenConfig>

  Close the Application, removing it from the DOM.

  #### Parameters

  + `Optional`options: Partial<[ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.md)> = {}

    Options which modify how the application is closed.

  #### Returns Promise<TokenConfig>

  A Promise which resolves to the closed Application instance

  Inherited from TokenApplicationMixin(PlaceableConfig).close

### detachWindow

* detachWindow(  
  Â Â Â Â options?: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.md),  
  ): Promise<TokenConfig>

  Detach an application from the main workspace, and render it in a separate browser window.
  If this application is a registered child, detaching it breaks the parent link and gives it its own window.

  #### Parameters

  + `Optional`options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.md) = {}

    Render options.

  #### Returns Promise<TokenConfig>

  Inherited from TokenApplicationMixin(PlaceableConfig).detachWindow

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

  Inherited from TokenApplicationMixin(PlaceableConfig).dispatchEvent

### maximize

* maximize(): Promise<void>

  Restore the Application to its original dimensions.

  #### Returns Promise<void>

  Inherited from TokenApplicationMixin(PlaceableConfig).maximize

### minimize

* minimize(): Promise<void>

  Minimize the Application, collapsing it to a minimal header.

  #### Returns Promise<void>

  Inherited from TokenApplicationMixin(PlaceableConfig).minimize

### removeEventListener

* removeEventListener(type: string, listener: [EmittedEventListener](../types/foundry.utils.types.EmittedEventListener.md)): void

  Remove an event listener for a certain type of event.

  #### Parameters

  + type: string

    The type of event being removed
  + listener: [EmittedEventListener](../types/foundry.utils.types.EmittedEventListener.md)

    The listener function being removed

  #### Returns void

  #### See

  <https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener>

  Inherited from TokenApplicationMixin(PlaceableConfig).removeEventListener

### render

* render(  
  Â Â Â Â options?:  
  Â Â Â Â Â Â Â Â | boolean  
  Â Â Â Â Â Â Â Â | [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.md),  
  Â Â Â Â \_options?: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.md),  
  ): Promise<TokenConfig>

  Render the Application, creating its HTMLElement and replacing its innerHTML.
  Add it to the DOM if it is not currently rendered and rendering is forced. Otherwise, re-render its contents.

  #### Parameters

  + `Optional`options: boolean | [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.md) = {}

    Options which configure application rendering behavior.
    A boolean is interpreted as the "force" option.
  + `Optional`\_options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.md) = {}

    Legacy options for backwards-compatibility with the original
    ApplicationV1#render signature.

  #### Returns Promise<TokenConfig>

  A Promise which resolves to the rendered Application instance

  Inherited from TokenApplicationMixin(PlaceableConfig).render

### renderChild

* renderChild(  
  Â Â Â Â app: [ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>,  
  Â Â Â Â options?: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.md),  
  ): Promise<  
  Â Â Â Â [ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>,  
  >

  Render another Application as a child of this one.
  The child is rendered in the same window as this application and moves with it when it is detached or re-attached.
  Closing this application will also close the child.
  If the child was previously registered under a different parent, that link is replaced.

  #### Parameters

  + app: [ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>

    The child application to render.
  + `Optional`options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.md) = {}

    Render options passed to the child's render method.

  #### Returns Promise<[ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>>

  A Promise which resolves to the rendered child Application.

  Inherited from TokenApplicationMixin(PlaceableConfig).renderChild

### setPosition

* setPosition(position?: Partial<[ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)>): void | [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)

  Update the Application element position using provided data which is merged with the prior position.

  #### Parameters

  + `Optional`position: Partial<[ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)>

    New Application positioning data

  #### Returns void | [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)

  The updated application position

  Inherited from TokenApplicationMixin(PlaceableConfig).setPosition

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

  Inherited from TokenApplicationMixin(PlaceableConfig).submit

### `Protected`\_attachFrameListeners

* \_attachFrameListeners(): void

  `Protected`

  Attach event listeners to the Application frame.

  #### Returns void

  Inherited from TokenApplicationMixin(PlaceableConfig).\_attachFrameListeners

### `Protected`\_canAttach

* \_canAttach(): boolean

  `Protected`

  Whether this Application is permitted to re-attach to the main workspace.
  Managed children (those with an active parent) cannot re-attach independently; their parent controls placement.

  #### Returns boolean

  Inherited from TokenApplicationMixin(PlaceableConfig).\_canAttach

### `Protected`\_createContextMenu

* \_createContextMenu(  
  Â Â Â Â handler: () => [ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.md)[],  
  Â Â Â Â selector: string,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â container?: HTMLElement;  
  Â Â Â Â Â Â Â Â hookName?: string;  
  Â Â Â Â Â Â Â Â parentClassHooks?: boolean;  
  Â Â Â Â },  
  ): [ContextMenu](foundry.applications.ux.ContextMenu.md)  
  | null

  `Protected`

  Create a ContextMenu instance used in this Application.

  #### Parameters

  + handler: () => [ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.md)[]

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

  #### Returns [ContextMenu](foundry.applications.ux.ContextMenu.md) | null

  A created ContextMenu or null if no menu items were defined

  Inherited from TokenApplicationMixin(PlaceableConfig).\_createContextMenu

### `Protected`\_createPreview

* \_createPreview(  
  Â Â Â Â data?: object,  
  ): Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>>

  `Protected`

  Create the preview.

  #### Parameters

  + `Optional`data: object = {}

    Additional data which overrides current document data at the time of creation

  #### Returns Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>>

  Inherited from TokenApplicationMixin(PlaceableConfig).\_createPreview

### `Protected`\_destroyPreview

* \_destroyPreview(): void

  `Protected`

  Destroy the preview.

  #### Returns void

  Inherited from TokenApplicationMixin(PlaceableConfig).\_destroyPreview

### `Protected`\_getHeaderControls

* \_getHeaderControls(): [ApplicationHeaderControlsEntry](../types/foundry.applications.types.ApplicationHeaderControlsEntry.md)[]

  `Protected`

  Configure the array of header control menu options

  #### Returns [ApplicationHeaderControlsEntry](../types/foundry.applications.types.ApplicationHeaderControlsEntry.md)[]

  Inherited from TokenApplicationMixin(PlaceableConfig).\_getHeaderControls

### `Protected`\_getTabsConfig

* \_getTabsConfig(group: string): [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.md) | null

  `Protected`

  Get the configuration for a tabs group.

  #### Parameters

  + group: string

    The ID of a tabs group

  #### Returns [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.md) | null

  Inherited from TokenApplicationMixin(PlaceableConfig).\_getTabsConfig

### `Protected`\_headerControlContextEntries

* \_headerControlContextEntries(): Generator<[ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.md), void, any>

  `Protected`

  Generate context menu entries based on the header control specification.

  #### Returns Generator<[ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.md), void, any>

  #### Yields

  Inherited from TokenApplicationMixin(PlaceableConfig).\_headerControlContextEntries

### `Protected`\_initializePreview

* \_initializePreview(): Promise<void>

  `Protected`

  Initialize the preview.

  #### Returns Promise<void>

  Inherited from TokenApplicationMixin(PlaceableConfig).\_initializePreview

### `Protected`\_insertElement

* \_insertElement(  
  Â Â Â Â element: HTMLElement,  
  Â Â Â Â options?: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.md),  
  ): Promise<void>

  `Protected`

  Insert the application HTML element into the DOM.
  Subclasses may override this method to customize how the application is inserted.

  #### Parameters

  + element: HTMLElement

    The element to insert
  + `Optional`options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.md) = {}

    Render options.

  #### Returns Promise<void>

  Inherited from TokenApplicationMixin(PlaceableConfig).\_insertElement

### `Protected`\_onAttach

* \_onAttach(from: Document, to: Document): void

  `Protected`

  Actions performed after the Application has been re-attached to the main workspace.
  Registered child Applications are re-attached automatically after this method returns.

  #### Parameters

  + from: Document

    The Application's former host document. This document's window may have been closed.
  + to: Document

    The main workspace document.

  #### Returns void

  Inherited from TokenApplicationMixin(PlaceableConfig).\_onAttach

### `Protected`\_onChangeBar

* \_onChangeBar(event: Event): void

  `Protected`

  Handle changing the attribute bar in the drop-down selector to update the default current and max value

  #### Parameters

  + event: Event

    The select input change event

  #### Returns void

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

  Inherited from TokenApplicationMixin(PlaceableConfig).\_onClickAction

### `Protected`\_onClickTab

* \_onClickTab(event: PointerEvent): void

  `Protected`

  Handle click events on a tab within the Application.

  #### Parameters

  + event: PointerEvent

  #### Returns void

  Inherited from TokenApplicationMixin(PlaceableConfig).\_onClickTab

### `Protected`\_onDetach

* \_onDetach(from: Document, to: Document): void

  `Protected`

  Actions performed after the Application has been detached from the main workspace.
  Registered child Applications are moved into the same detached window automatically after this method returns.

  #### Parameters

  + from: Document

    The main workspace document.
  + to: Document

    The Application's new host document.

  #### Returns void

  Inherited from TokenApplicationMixin(PlaceableConfig).\_onDetach

### `Protected`\_onPosition

* \_onPosition(position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)): void

  `Protected`

  Actions performed after the Application is re-positioned.

  #### Parameters

  + position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)

    The requested application position

  #### Returns void

  Inherited from TokenApplicationMixin(PlaceableConfig).\_onPosition

### `Protected`\_onRevealSecret

* \_onRevealSecret(event: Event): void

  `Protected`

  Handle toggling the revealed state of a secret embedded in some content.

  #### Parameters

  + event: Event

    The triggering event.

  #### Returns void

  Inherited from TokenApplicationMixin(PlaceableConfig).\_onRevealSecret

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

  Inherited from TokenApplicationMixin(PlaceableConfig).\_onSubmitForm

### `Protected`\_preFirstRender

* \_preFirstRender(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md),  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.md),  
  ): Promise<void>

  `Protected`

  Actions performed before a first render of the Application.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md)

    Prepared context data
  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.md)

    Provided render options

  #### Returns Promise<void>

  Inherited from TokenApplicationMixin(PlaceableConfig).\_preFirstRender

### `Protected`\_prepareSubmitData

* \_prepareSubmitData(  
  Â Â Â Â event: SubmitEvent,  
  Â Â Â Â form: HTMLFormElement,  
  Â Â Â Â formData: [FormDataExtended](foundry.applications.ux.FormDataExtended.md),  
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
  + formData: [FormDataExtended](foundry.applications.ux.FormDataExtended.md)

    Processed data for the submitted form
  + `Optional`updateData: object

    Additional data passed in if this form is submitted manually which
    should be merged with prepared formData.

  #### Returns object

  Prepared submission data as an object

  #### Throws

  Subclasses may throw validation errors here to prevent form submission

  Inherited from TokenApplicationMixin(PlaceableConfig).\_prepareSubmitData

### `Protected`\_prepareTabs

* \_prepareTabs(group: string): Record<string, [ApplicationTab](../interfaces/foundry.applications.types.ApplicationTab.md)>

  `Protected`

  Prepare application tab data for a single tab group.

  #### Parameters

  + group: string

    The ID of the tab group to prepare

  #### Returns Record<string, [ApplicationTab](../interfaces/foundry.applications.types.ApplicationTab.md)>

  Inherited from TokenApplicationMixin(PlaceableConfig).\_prepareTabs

### `Protected`\_prePosition

* \_prePosition(position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)): void

  `Protected`

  Actions performed before the Application is re-positioned.
  Pre-position steps are not awaited because setPosition is synchronous.

  #### Parameters

  + position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)

    The requested application position

  #### Returns void

  Inherited from TokenApplicationMixin(PlaceableConfig).\_prePosition

### `Protected`\_preRender

* \_preRender(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md),  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.md),  
  ): Promise<void>

  `Protected`

  Actions performed before any render of the Application.
  Pre-render steps are awaited by the render process.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md)

    Prepared context data
  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.md)

    Provided render options

  #### Returns Promise<void>

  Inherited from TokenApplicationMixin(PlaceableConfig).\_preRender

### `Protected`\_processFormData

* \_processFormData(  
  Â Â Â Â event: SubmitEvent | null,  
  Â Â Â Â form: HTMLFormElement,  
  Â Â Â Â formData: [FormDataExtended](foundry.applications.ux.FormDataExtended.md),  
  ): object

  `Protected`

  Customize how form data is extracted into an expanded object.

  #### Parameters

  + event: SubmitEvent | null

    The originating form submission event
  + form: HTMLFormElement

    The form element that was submitted
  + formData: [FormDataExtended](foundry.applications.ux.FormDataExtended.md)

    Processed data for the submitted form

  #### Returns object

  An expanded object of processed form data

  #### Throws

  Subclasses may throw validation errors here to prevent form submission

  Inherited from TokenApplicationMixin(PlaceableConfig).\_processFormData

### `Protected`\_refit

* \_refit(positionUpdate?: Partial<[ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)>): void

  `Protected`

  Re-fit an application to its content following a change in its natural size.

  #### Parameters

  + `Optional`positionUpdate: Partial<[ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)> = {}

    Position data forwarded to setPosition.

  #### Returns void

  Inherited from TokenApplicationMixin(PlaceableConfig).\_refit

### `Protected`\_removeElement

* \_removeElement(element: HTMLElement): void

  `Protected`

  Remove the application HTML element from the DOM.
  Subclasses may override this method to customize how the application element is removed.

  #### Parameters

  + element: HTMLElement

    The element to be removed

  #### Returns void

  Inherited from TokenApplicationMixin(PlaceableConfig).\_removeElement

### `Protected`\_renderFrameButtons

* \_renderFrameButtons(  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.md),  
  ): Promise<void>

  `Protected`

  Render buttons that are inserted directly into the frame header. Header controls should be preferred over frame
  buttons, which should be used sparingly.

  #### Parameters

  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.md)

    Options which configure application rendering behavior.

  #### Returns Promise<void>

  Inherited from TokenApplicationMixin(PlaceableConfig).\_renderFrameButtons

### `Protected`\_renderHeaderControl

* \_renderHeaderControl(control: [ApplicationHeaderControlsEntry](../types/foundry.applications.types.ApplicationHeaderControlsEntry.md)): HTMLLIElement

  `Protected`

  Render a header control button.

  #### Parameters

  + control: [ApplicationHeaderControlsEntry](../types/foundry.applications.types.ApplicationHeaderControlsEntry.md)

  #### Returns HTMLLIElement

  Inherited from TokenApplicationMixin(PlaceableConfig).\_renderHeaderControl

### `Protected`\_replaceHTML

* \_replaceHTML(  
  Â Â Â Â result: any,  
  Â Â Â Â content: HTMLElement,  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.md),  
  ): void

  `Protected`

  Replace the HTML of the application with the result provided by the rendering backend.
  An Application subclass should implement this method in order for the Application to be renderable.

  #### Parameters

  + result: any

    The result returned by the application rendering backend
  + content: HTMLElement

    The content element into which the rendered result must be inserted
  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.md)

    Options which configure application rendering behavior

  #### Returns void

  Inherited from TokenApplicationMixin(PlaceableConfig).\_replaceHTML

### `Protected`\_resetPreview

* \_resetPreview(): void

  `Protected`

  Reset the preview.

  #### Returns void

  Inherited from TokenApplicationMixin(PlaceableConfig).\_resetPreview

### `Protected`\_tearDown

* \_tearDown(options: [ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.md)): void

  `Protected`

  Remove elements from the DOM and trigger garbage collection as part of application closure.

  #### Parameters

  + options: [ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.md)

  #### Returns void

  Inherited from TokenApplicationMixin(PlaceableConfig).\_tearDown

### `Protected`\_toggleDisabled

* \_toggleDisabled(disabled: boolean): void

  `Protected`

  Disable or reenable all form fields in this application.

  #### Parameters

  + disabled: boolean

    Should the fields be disabled?

  #### Returns void

  Inherited from TokenApplicationMixin(PlaceableConfig).\_toggleDisabled

### `Protected`\_updateFrame

* \_updateFrame(  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.md),  
  ): void

  `Protected`

  When the Application is rendered, optionally update aspects of the window frame.

  #### Parameters

  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md) & [DocumentSheetRenderOptions](../interfaces/foundry.DocumentSheetRenderOptions.md)

    Options provided at render-time

  #### Returns void

  Inherited from TokenApplicationMixin(PlaceableConfig).\_updateFrame

### `Protected`\_updatePosition

* \_updatePosition(position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)): [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)

  `Protected`

  Translate a requested application position updated into a resolved allowed position for the Application.
  Subclasses may override this method to implement more advanced positioning behavior.

  #### Parameters

  + position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)

    Requested Application positioning data

  #### Returns [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)

  Resolved Application positioning data

  Inherited from TokenApplicationMixin(PlaceableConfig).\_updatePosition

### `Static`\_migrateConstructorParams

* \_migrateConstructorParams(  
  Â Â Â Â first: unknown,  
  Â Â Â Â rest: unknown[],  
  ): Partial<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md) & [DocumentSheetConfiguration](../interfaces/foundry.DocumentSheetConfiguration.md)>

  `Internal`

  Provide a deprecation path for converted V1 document sheets.

  #### Parameters

  + first: unknown

    The first parameter received by this class's constructor
  + rest: unknown[]

    Any additional parameters received

  #### Returns Partial<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md) & [DocumentSheetConfiguration](../interfaces/foundry.DocumentSheetConfiguration.md)>

### `Static`inheritanceChain

* inheritanceChain(): Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md), void, unknown>

  Iterate over the inheritance chain of this Application.
  The chain includes this Application itself and all parents until the base application is encountered.

  #### Returns Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md), void, unknown>

  #### See

  [ApplicationV2.BASE\_APPLICATION](foundry.applications.api.ApplicationV2.md#base_application)

  #### Yields

  Inherited from TokenApplicationMixin(PlaceableConfig).inheritanceChain

### `Static`instances

* instances(): Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md), any, any>

  Iterate over the instances of this Application.

  #### Returns Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md), any, any>

  #### Yields

  Inherited from TokenApplicationMixin(PlaceableConfig).instances

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

  Inherited from TokenApplicationMixin(PlaceableConfig).parseCSSDimension

### `Static`waitForImages

* waitForImages(element: HTMLElement): Promise<void>

  Wait for any images in the given element to load.

  #### Parameters

  + element: HTMLElement

    The element.

  #### Returns Promise<void>

  Inherited from TokenApplicationMixin(PlaceableConfig).waitForImages