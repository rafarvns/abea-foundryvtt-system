---
title: "FilePicker | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.applications.apps.FilePicker.html"
category: "classes"
---

# Class FilePicker

The FilePicker application renders contents of the server-side public directory.
This app allows for navigating and uploading files to the public path.

#### Mixes

HandlebarsApplication

#### Hierarchy ([View Summary](../hierarchy.md#foundry.applications.apps.FilePicker))

* [ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md), this>
  + FilePicker

##### Index

### Constructors

[constructor](#constructor)

### Properties

[activeSource](#activesource)
[button](#button)
[callback](#callback)
[displayMode](#displaymode)
[extensions](#extensions)
[field](#field)
[options](#options)
[position](#position)
[request](#request)
[results](#results)
[sources](#sources)
[tabGroups](#tabgroups)
[type](#type)
[\_appId](#_appid)
[\_maxZ](#_maxz)
[BASE\_APPLICATION](#base_application)
[DEFAULT\_OPTIONS](#default_options)
[DISPLAY\_MODES](#display_modes)
[emittedEvents](#emittedevents)
[FILE\_TYPES](#file_types)
[LAST\_BROWSED\_DIRECTORY](#last_browsed_directory)
[LAST\_DISPLAY\_MODE](#last_display_mode)
[LAST\_TILE\_SIZE](#last_tile_size)
[PARTS](#parts)
[RENDER\_STATES](#render_states)
[S3\_BUCKETS](#s3_buckets)
[TABS](#tabs)

### Accessors

[canCreateFolder](#cancreatefolder)
[canUpload](#canupload)
[children](#children)
[classList](#classlist)
[element](#element)
[favorites](#favorites)
[form](#form)
[hasFrame](#hasframe)
[id](#id)
[minimized](#minimized)
[parent](#parent)
[rendered](#rendered)
[source](#source)
[state](#state)
[target](#target)
[title](#title)
[window](#window)
[implementation](#implementation)
[uploadURL](#uploadurl)

### Methods

[\_awaitTransition](#_awaittransition)
[\_canDetach](#_candetach)
[\_doEvent](#_doevent)
[\_onRender](#_onrender)
[\_prepareContext](#_preparecontext)
[\_prepareTabs](#_preparetabs)
[\_renderHTML](#_renderhtml)
[\_tearDown](#_teardown)
[addEventListener](#addeventlistener)
[attachWindow](#attachwindow)
[bringToFront](#bringtofront)
[browse](#browse)
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
[\_canRender](#_canrender)
[\_configureRenderOptions](#_configurerenderoptions)
[\_createContextMenu](#_createcontextmenu)
[\_getFrameButtons](#_getframebuttons)
[\_getHeaderControls](#_getheadercontrols)
[\_getTabsConfig](#_gettabsconfig)
[\_headerControlButtons](#_headercontrolbuttons)
[\_headerControlContextEntries](#_headercontrolcontextentries)
[\_inferSourceAndTarget](#_infersourceandtarget)
[\_initializeApplicationOptions](#_initializeapplicationoptions)
[\_insertElement](#_insertelement)
[\_onAttach](#_onattach)
[\_onChangeForm](#_onchangeform)
[\_onChangeTileSize](#_onchangetilesize)
[\_onClickAction](#_onclickaction)
[\_onClickTab](#_onclicktab)
[\_onClose](#_onclose)
[\_onDetach](#_ondetach)
[\_onFirstRender](#_onfirstrender)
[\_onPosition](#_onposition)
[\_onSearchFilter](#_onsearchfilter)
[\_onSubmitForm](#_onsubmitform)
[\_postRender](#_postrender)
[\_preClose](#_preclose)
[\_preFirstRender](#_prefirstrender)
[\_prePosition](#_preposition)
[\_preRender](#_prerender)
[\_refit](#_refit)
[\_removeElement](#_removeelement)
[\_renderFrame](#_renderframe)
[\_renderFrameButtons](#_renderframebuttons)
[\_renderHeaderControl](#_renderheadercontrol)
[\_replaceHTML](#_replacehtml)
[\_updateFrame](#_updateframe)
[\_updatePosition](#_updateposition)
[browse](#browse-2)
[configurePath](#configurepath)
[createDirectory](#createdirectory)
[fromButton](#frombutton)
[inheritanceChain](#inheritancechain)
[instances](#instances)
[matchS3URL](#matchs3url)
[parseCSSDimension](#parsecssdimension)
[requestTokenImages](#requesttokenimages)
[upload](#upload)
[uploadPersistent](#uploadpersistent)
[waitForImages](#waitforimages)

## Constructors

### constructor

* new FilePicker(options?: any): FilePicker

  #### Parameters

  + `Optional`options: any = {}

    Options that configure the
    behavior of the FilePicker

  #### Returns FilePicker

  Overrides HandlebarsApplicationMixin(ApplicationV2).constructor

## Properties

### activeSource

activeSource: "data" | "public" | "s3"

Track the active source tab which is being browsed

### button

button: HTMLElement | null

A button controlling the display of the picker UI

### callback

callback: Function | null

A callback function to trigger once a file has been selected

### displayMode

displayMode: string

The display mode of the FilePicker UI

### extensions

extensions: string[] = ...

The current set of file extensions which are being filtered upon

### field

field: HTMLElement | null

The target HTML element this file picker is bound to

### options

options: Readonly<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md)>

Application instance configuration options.

Inherited from HandlebarsApplicationMixin(ApplicationV2).options

### position

position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md) = ...

The current position of the application with respect to the window.document.body.

Inherited from HandlebarsApplicationMixin(ApplicationV2).position

### request

request: string

The full requested path given by the user

### results

results: object = {}

The latest set of results browsed from the server

### sources

sources: Record<  
Â Â Â Â "data"  
Â Â Â Â | "public"  
Â Â Â Â | "s3",  
Â Â Â Â { bucket?: string; buckets?: string[]; target: string } | undefined,  
>

The file sources available for browsing

### tabGroups

tabGroups: Record<string, string | null> = ...

If this Application uses tabbed navigation groups, this mapping is updated whenever the changeTab method is called.
Reports the active tab for each group, with a value of `null` indicating no tab is active.
Subclasses may override this property to define default tabs for each group.

Inherited from HandlebarsApplicationMixin(ApplicationV2).tabGroups

### type

type: string

The general file type which controls the set of extensions which will be accepted

### `Static` `Internal`\_appId

\_appId: number = 0

An incrementing integer Application ID.

Inherited from HandlebarsApplicationMixin(ApplicationV2).\_appId

### `Static` `Internal`\_maxZ

\_maxZ: number = ...

The current maximum z-index of any displayed Application.

Inherited from HandlebarsApplicationMixin(ApplicationV2).\_maxZ

### `Static`BASE\_APPLICATION

BASE\_APPLICATION: typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md) = ApplicationV2

Designates which upstream Application class in this class' inheritance chain is the base application.
Any DEFAULT\_OPTIONS of super-classes further upstream of the BASE\_APPLICATION are ignored.
Hook events for super-classes further upstream of the BASE\_APPLICATION are not dispatched.

Inherited from HandlebarsApplicationMixin(ApplicationV2).BASE\_APPLICATION

### `Static`DEFAULT\_OPTIONS

DEFAULT\_OPTIONS: {  
Â Â Â Â actions: {  
Â Â Â Â Â Â Â Â backTraverse: (  
Â Â Â Â Â Â Â Â Â Â Â Â event: PointerEvent,  
Â Â Â Â Â Â Â Â Â Â Â Â target: HTMLElement,  
Â Â Â Â Â Â Â Â ) => void | Promise<void>;  
Â Â Â Â Â Â Â Â changeDisplayMode: (  
Â Â Â Â Â Â Â Â Â Â Â Â event: PointerEvent,  
Â Â Â Â Â Â Â Â Â Â Â Â target: HTMLElement,  
Â Â Â Â Â Â Â Â ) => void | Promise<void>;  
Â Â Â Â Â Â Â Â goToFavorite: (  
Â Â Â Â Â Â Â Â Â Â Â Â event: PointerEvent,  
Â Â Â Â Â Â Â Â Â Â Â Â target: HTMLElement,  
Â Â Â Â Â Â Â Â ) => void | Promise<void>;  
Â Â Â Â Â Â Â Â makeDirectory: (  
Â Â Â Â Â Â Â Â Â Â Â Â event: PointerEvent,  
Â Â Â Â Â Â Â Â Â Â Â Â target: HTMLElement,  
Â Â Â Â Â Â Â Â ) => void | Promise<void>;  
Â Â Â Â Â Â Â Â pickDirectory: (  
Â Â Â Â Â Â Â Â Â Â Â Â event: PointerEvent,  
Â Â Â Â Â Â Â Â Â Â Â Â target: HTMLElement,  
Â Â Â Â Â Â Â Â ) => void | Promise<void>;  
Â Â Â Â Â Â Â Â pickFile: (  
Â Â Â Â Â Â Â Â Â Â Â Â event: PointerEvent,  
Â Â Â Â Â Â Â Â Â Â Â Â target: HTMLElement,  
Â Â Â Â Â Â Â Â ) => void | Promise<void>;  
Â Â Â Â Â Â Â Â removeFavorite: (  
Â Â Â Â Â Â Â Â Â Â Â Â event: PointerEvent,  
Â Â Â Â Â Â Â Â Â Â Â Â target: HTMLElement,  
Â Â Â Â Â Â Â Â ) => void | Promise<void>;  
Â Â Â Â Â Â Â Â setFavorite: (  
Â Â Â Â Â Â Â Â Â Â Â Â event: PointerEvent,  
Â Â Â Â Â Â Â Â Â Â Â Â target: HTMLElement,  
Â Â Â Â Â Â Â Â ) => void | Promise<void>;  
Â Â Â Â Â Â Â Â togglePrivacy: (  
Â Â Â Â Â Â Â Â Â Â Â Â event: PointerEvent,  
Â Â Â Â Â Â Â Â Â Â Â Â target: HTMLElement,  
Â Â Â Â Â Â Â Â ) => void | Promise<void>;  
Â Â Â Â };  
Â Â Â Â form: {  
Â Â Â Â Â Â Â Â closeOnSubmit: boolean;  
Â Â Â Â Â Â Â Â handler: (  
Â Â Â Â Â Â Â Â Â Â Â Â event: Event | SubmitEvent,  
Â Â Â Â Â Â Â Â Â Â Â Â form: HTMLFormElement,  
Â Â Â Â Â Â Â Â Â Â Â Â formData: [FormDataExtended](foundry.applications.ux.FormDataExtended.md),  
Â Â Â Â Â Â Â Â ) => Promise<any>;  
Â Â Â Â Â Â Â Â submitOnChange: boolean;  
Â Â Â Â };  
Â Â Â Â id: string;  
Â Â Â Â position: { width: number };  
Â Â Â Â tag: string;  
Â Â Â Â tileSize: boolean;  
Â Â Â Â window: { contentClasses: string[]; icon: string };  
} = ...

#### Inherit Doc

Overrides HandlebarsApplicationMixin(ApplicationV2).DEFAULT\_OPTIONS

### `Static`DISPLAY\_MODES

DISPLAY\_MODES: string[] = ...

Enumerate the allowed FilePicker display modes

### `Static`emittedEvents

emittedEvents: readonly ["prerender", "render", "close", "position"] = ...

Inherited from HandlebarsApplicationMixin(ApplicationV2).emittedEvents

### `Static`FILE\_TYPES

FILE\_TYPES: string[] = ...

The allowed values for the type of this FilePicker instance.

### `Static`LAST\_BROWSED\_DIRECTORY

LAST\_BROWSED\_DIRECTORY: string = ""

Record the last-browsed directory path so that re-opening a different FilePicker instance uses the same target

### `Static`LAST\_DISPLAY\_MODE

LAST\_DISPLAY\_MODE: string = "list"

Record the last-configured display mode so that re-opening a different FilePicker instance uses the same mode.

### `Static`LAST\_TILE\_SIZE

LAST\_TILE\_SIZE: number | null = null

Record the last-configured tile size which can automatically be applied to new FilePicker instances

### `Static`PARTS

PARTS: {  
Â Â Â Â body: { template: string };  
Â Â Â Â footer: { template: string };  
Â Â Â Â subfooter: { template: string };  
Â Â Â Â subheader: { template: string };  
Â Â Â Â tabs: { template: string };  
} = ...

Overrides HandlebarsApplicationMixin(ApplicationV2).PARTS

### `Static`RENDER\_STATES

RENDER\_STATES: Record<string, number> = ...

The sequence of rendering states that describe the Application life-cycle.

Inherited from HandlebarsApplicationMixin(ApplicationV2).RENDER\_STATES

### `Static`S3\_BUCKETS

S3\_BUCKETS: any[] | null = null

Cache the names of S3 buckets which can be used

### `Static`TABS

TABS: {  
Â Â Â Â sources: {  
Â Â Â Â Â Â Â Â initial: string;  
Â Â Â Â Â Â Â Â labelPrefix: string;  
Â Â Â Â Â Â Â Â tabs: { icon: string; id: string }[];  
Â Â Â Â };  
} = ...

Overrides HandlebarsApplicationMixin(ApplicationV2).TABS

## Accessors

### canCreateFolder

* get canCreateFolder(): boolean

  Whether the current user is able to create folders.

  #### Returns boolean

### canUpload

* get canUpload(): boolean

  Whether the current use is able to upload file content.

  #### Returns boolean

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

  Inherited from HandlebarsApplicationMixin(ApplicationV2).classList

### element

* get element(): HTMLElement

  The HTMLElement which renders this Application into the DOM.

  #### Returns HTMLElement

  Inherited from HandlebarsApplicationMixin(ApplicationV2).element

### favorites

* get favorites(): Record<string, [FavoriteFolder](../interfaces/foundry.FavoriteFolder.md)>

  Get favorite folders for quick access

  #### Returns Record<string, [FavoriteFolder](../interfaces/foundry.FavoriteFolder.md)>

### form

* get form(): HTMLFormElement | null

  Does this Application have a top-level form element?

  #### Returns HTMLFormElement | null

  Inherited from HandlebarsApplicationMixin(ApplicationV2).form

### hasFrame

* get hasFrame(): boolean

  Does this Application instance render within an outer window frame?

  #### Returns boolean

  Inherited from HandlebarsApplicationMixin(ApplicationV2).hasFrame

### id

* get id(): string

  The HTML element ID of this Application instance.
  This provides a readonly view into the internal ID used by this application.
  This getter should not be overridden by subclasses, which should instead configure the ID in `DEFAULT_OPTIONS` or
  by defining a `uniqueId` during `_initializeApplicationOptions`.

  #### Returns string

  Inherited from HandlebarsApplicationMixin(ApplicationV2).id

### minimized

* get minimized(): boolean

  Is this Application instance currently minimized?

  #### Returns boolean

  Inherited from HandlebarsApplicationMixin(ApplicationV2).minimized

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

  Inherited from HandlebarsApplicationMixin(ApplicationV2).rendered

### source

* get source(): object

  Return the source object for the currently active source

  #### Returns object

### state

* get state(): number

  The current render state of the Application.

  #### Returns number

  Inherited from HandlebarsApplicationMixin(ApplicationV2).state

### target

* get target(): string

  Return the target directory for the currently active source

  #### Returns string

### title

* get title(): string

  #### Returns string

  Overrides HandlebarsApplicationMixin(ApplicationV2).title

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

### `Static`implementation

* get implementation(): typeof FilePicker

  Retrieve the configured FilePicker implementation.

  #### Returns typeof FilePicker

### `Static`uploadURL

* get uploadURL(): string

  Return the upload URL to which the FilePicker should post uploaded files

  #### Returns string

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

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_awaitTransition

### \_canDetach

* \_canDetach(): boolean

  Whether this Application is permitted to detach from the main workspace.
  Managed children (those with an active parent) may detach to break the parent link and claim their own window.

  #### Returns boolean

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_canDetach

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

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_doEvent

### \_onRender

* \_onRender(context: any, options: any): Promise<void>

  #### Parameters

  + context: any
  + options: any

  #### Returns Promise<void>

  #### Inherit Doc

  Overrides HandlebarsApplicationMixin(ApplicationV2).\_onRender

### \_prepareContext

* \_prepareContext(  
  Â Â Â Â options: any,  
  ): Promise<  
  Â Â Â Â [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md) & {  
  Â Â Â Â Â Â Â Â bucket: any;  
  Â Â Â Â Â Â Â Â buckets: any;  
  Â Â Â Â Â Â Â Â buttons: { icon: string; label: string; type: string }[];  
  Â Â Â Â Â Â Â Â canCreateFolder: boolean;  
  Â Â Â Â Â Â Â Â canGoBack: boolean;  
  Â Â Â Â Â Â Â Â canSelect: boolean;  
  Â Â Â Â Â Â Â Â canTogglePrivacy: boolean;  
  Â Â Â Â Â Â Â Â canUpload: boolean;  
  Â Â Â Â Â Â Â Â dirs: any;  
  Â Â Â Â Â Â Â Â displayMode: string;  
  Â Â Â Â Â Â Â Â extensions: string[];  
  Â Â Â Â Â Â Â Â favorites: Record<string, [FavoriteFolder](../interfaces/foundry.FavoriteFolder.md)>;  
  Â Â Â Â Â Â Â Â files: any;  
  Â Â Â Â Â Â Â Â isFolderPicker: boolean;  
  Â Â Â Â Â Â Â Â isS3: boolean;  
  Â Â Â Â Â Â Â Â noResults: boolean;  
  Â Â Â Â Â Â Â Â rootId: string;  
  Â Â Â Â Â Â Â Â selected: any;  
  Â Â Â Â Â Â Â Â source: object;  
  Â Â Â Â Â Â Â Â sources: Record<  
  Â Â Â Â Â Â Â Â Â Â Â Â "data"  
  Â Â Â Â Â Â Â Â Â Â Â Â | "public"  
  Â Â Â Â Â Â Â Â Â Â Â Â | "s3",  
  Â Â Â Â Â Â Â Â Â Â Â Â { bucket?: string; buckets?: string[]; target: string } | undefined,  
  Â Â Â Â Â Â Â Â >;  
  Â Â Â Â Â Â Â Â target: string;  
  Â Â Â Â Â Â Â Â tileSize: any;  
  Â Â Â Â Â Â Â Â user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md) | null;  
  Â Â Â Â },  
  >

  #### Parameters

  + options: any

  #### Returns Promise< Â Â Â Â [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md) & { Â Â Â Â Â Â Â Â bucket: any; Â Â Â Â Â Â Â Â buckets: any; Â Â Â Â Â Â Â Â buttons: { icon: string; label: string; type: string }[]; Â Â Â Â Â Â Â Â canCreateFolder: boolean; Â Â Â Â Â Â Â Â canGoBack: boolean; Â Â Â Â Â Â Â Â canSelect: boolean; Â Â Â Â Â Â Â Â canTogglePrivacy: boolean; Â Â Â Â Â Â Â Â canUpload: boolean; Â Â Â Â Â Â Â Â dirs: any; Â Â Â Â Â Â Â Â displayMode: string; Â Â Â Â Â Â Â Â extensions: string[]; Â Â Â Â Â Â Â Â favorites: Record<string, [FavoriteFolder](../interfaces/foundry.FavoriteFolder.md)>; Â Â Â Â Â Â Â Â files: any; Â Â Â Â Â Â Â Â isFolderPicker: boolean; Â Â Â Â Â Â Â Â isS3: boolean; Â Â Â Â Â Â Â Â noResults: boolean; Â Â Â Â Â Â Â Â rootId: string; Â Â Â Â Â Â Â Â selected: any; Â Â Â Â Â Â Â Â source: object; Â Â Â Â Â Â Â Â sources: Record< Â Â Â Â Â Â Â Â Â Â Â Â "data" Â Â Â Â Â Â Â Â Â Â Â Â | "public" Â Â Â Â Â Â Â Â Â Â Â Â | "s3", Â Â Â Â Â Â Â Â Â Â Â Â { bucket?: string; buckets?: string[]; target: string } | undefined, Â Â Â Â Â Â Â Â >; Â Â Â Â Â Â Â Â target: string; Â Â Â Â Â Â Â Â tileSize: any; Â Â Â Â Â Â Â Â user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md) | null; Â Â Â Â }, >

  #### Inherit Doc

  Overrides HandlebarsApplicationMixin(ApplicationV2).\_prepareContext

### \_prepareTabs

* \_prepareTabs(group: any): Record<string, [ApplicationTab](../interfaces/foundry.applications.types.ApplicationTab.md)>

  #### Parameters

  + group: any

  #### Returns Record<string, [ApplicationTab](../interfaces/foundry.applications.types.ApplicationTab.md)>

  #### Inherit Doc

  Overrides HandlebarsApplicationMixin(ApplicationV2).\_prepareTabs

### `Abstract`\_renderHTML

* \_renderHTML(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md),  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md),  
  ): Promise<any>

  Render an HTMLElement for the Application.
  An Application subclass must implement this method in order for the Application to be renderable.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md)

    Context data for the render operation
  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)

    Options which configure application rendering behavior

  #### Returns Promise<any>

  The result of HTML rendering may be implementation specific.
  Whatever value is returned here is passed to \_replaceHTML

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_renderHTML

### \_tearDown

* \_tearDown(options: any): void

  #### Parameters

  + options: any

  #### Returns void

  #### Inherit Doc

  Overrides HandlebarsApplicationMixin(ApplicationV2).\_tearDown

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

  Inherited from HandlebarsApplicationMixin(ApplicationV2).addEventListener

### attachWindow

* attachWindow(  
  Â Â Â Â options?: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md),  
  ): Promise<  
  Â Â Â Â [ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>,  
  >

  Re-attach a detached application to the main workspace.
  If this application was previously a child and was manually detached, breaking its parent link, this method first
  attempts to re-join the prior parent's window before falling back to the main workspace.

  #### Parameters

  + `Optional`options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md) = {}

    Render options.

  #### Returns Promise<[ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>>

  Inherited from HandlebarsApplicationMixin(ApplicationV2).attachWindow

### bringToFront

* bringToFront(): void

  Bring this Application window to the front of the rendering stack by increasing its z-index.
  Once ApplicationV1 is deprecated we should switch from \_maxZ to ApplicationV2#maxZ
  We should also eliminate ui.activeWindow in favor of only ApplicationV2#frontApp

  #### Returns void

  Inherited from HandlebarsApplicationMixin(ApplicationV2).bringToFront

### browse

* browse(target?: string, options?: object): Promise<FilePicker>

  Browse to a specific location for this FilePicker instance

  #### Parameters

  + `Optional`target: string = ...

    The target within the currently active source location.
  + `Optional`options: object = {}

    Browsing options

  #### Returns Promise<FilePicker>

### changeTab

* changeTab(tab: any, group: any, options: any): void

  #### Parameters

  + tab: any
  + group: any
  + options: any

  #### Returns void

  #### Inherit Doc

  Overrides HandlebarsApplicationMixin(ApplicationV2).changeTab

### close

* close(options?: Partial<[ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.md)>): Promise<FilePicker>

  Close the Application, removing it from the DOM.

  #### Parameters

  + `Optional`options: Partial<[ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.md)> = {}

    Options which modify how the application is closed.

  #### Returns Promise<FilePicker>

  A Promise which resolves to the closed Application instance

  Inherited from HandlebarsApplicationMixin(ApplicationV2).close

### detachWindow

* detachWindow(options?: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)): Promise<FilePicker>

  Detach an application from the main workspace, and render it in a separate browser window.
  If this application is a registered child, detaching it breaks the parent link and gives it its own window.

  #### Parameters

  + `Optional`options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md) = {}

    Render options.

  #### Returns Promise<FilePicker>

  Inherited from HandlebarsApplicationMixin(ApplicationV2).detachWindow

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

  Inherited from HandlebarsApplicationMixin(ApplicationV2).dispatchEvent

### maximize

* maximize(): Promise<void>

  Restore the Application to its original dimensions.

  #### Returns Promise<void>

  Inherited from HandlebarsApplicationMixin(ApplicationV2).maximize

### minimize

* minimize(): Promise<void>

  Minimize the Application, collapsing it to a minimal header.

  #### Returns Promise<void>

  Inherited from HandlebarsApplicationMixin(ApplicationV2).minimize

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

  Inherited from HandlebarsApplicationMixin(ApplicationV2).removeEventListener

### render

* render(...args: any[]): Promise<FilePicker>

  #### Parameters

  + ...args: any[]

  #### Returns Promise<FilePicker>

  #### Inherit Doc

  Overrides HandlebarsApplicationMixin(ApplicationV2).render

### renderChild

* renderChild(  
  Â Â Â Â app: [ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>,  
  Â Â Â Â options?: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md),  
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
  + `Optional`options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md) = {}

    Render options passed to the child's render method.

  #### Returns Promise<[ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>>

  A Promise which resolves to the rendered child Application.

  Inherited from HandlebarsApplicationMixin(ApplicationV2).renderChild

### setPosition

* setPosition(position?: Partial<[ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)>): void | [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)

  Update the Application element position using provided data which is merged with the prior position.

  #### Parameters

  + `Optional`position: Partial<[ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)>

    New Application positioning data

  #### Returns void | [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)

  The updated application position

  Inherited from HandlebarsApplicationMixin(ApplicationV2).setPosition

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

  Inherited from HandlebarsApplicationMixin(ApplicationV2).submit

### `Protected`\_attachFrameListeners

* \_attachFrameListeners(): void

  `Protected`

  Attach event listeners to the Application frame.

  #### Returns void

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_attachFrameListeners

### `Protected`\_canAttach

* \_canAttach(): boolean

  `Protected`

  Whether this Application is permitted to re-attach to the main workspace.
  Managed children (those with an active parent) cannot re-attach independently; their parent controls placement.

  #### Returns boolean

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_canAttach

### `Protected`\_canRender

* \_canRender(options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)): false | void

  `Protected`

  Test whether this Application is allowed to be rendered.

  #### Parameters

  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)

    Provided render options

  #### Returns false | void

  Return false to prevent rendering

  #### Throws

  An Error to display a warning message

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_canRender

### `Protected`\_configureRenderOptions

* \_configureRenderOptions(options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)): void

  `Protected`

  Modify the provided options passed to a render request.

  #### Parameters

  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)

    Options which configure application rendering behavior

  #### Returns void

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_configureRenderOptions

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

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_createContextMenu

### `Protected`\_getFrameButtons

* \_getFrameButtons(  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md),  
  ): [ApplicationHeaderControlsEntry](../types/foundry.applications.types.ApplicationHeaderControlsEntry.md)[]

  `Protected`

  Return an array of header button config entries to render into the Application frame.
  Subclasses may override this method to add, remove, or replace frame header buttons.

  #### Parameters

  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)

    Options which configure application rendering behavior.

  #### Returns [ApplicationHeaderControlsEntry](../types/foundry.applications.types.ApplicationHeaderControlsEntry.md)[]

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_getFrameButtons

### `Protected`\_getHeaderControls

* \_getHeaderControls(): [ApplicationHeaderControlsEntry](../types/foundry.applications.types.ApplicationHeaderControlsEntry.md)[]

  `Protected`

  Configure the array of header control menu options

  #### Returns [ApplicationHeaderControlsEntry](../types/foundry.applications.types.ApplicationHeaderControlsEntry.md)[]

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_getHeaderControls

### `Protected`\_getTabsConfig

* \_getTabsConfig(group: string): [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.md) | null

  `Protected`

  Get the configuration for a tabs group.

  #### Parameters

  + group: string

    The ID of a tabs group

  #### Returns [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.md) | null

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_getTabsConfig

### `Protected`\_headerControlButtons

* \_headerControlButtons(): Generator<[ApplicationHeaderControlsEntry](../types/foundry.applications.types.ApplicationHeaderControlsEntry.md), any, any>

  `Protected`

  Iterate over header control buttons, filtering for controls which are visible for the current client.

  #### Returns Generator<[ApplicationHeaderControlsEntry](../types/foundry.applications.types.ApplicationHeaderControlsEntry.md), any, any>

  #### Yields

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_headerControlButtons

### `Protected`\_headerControlContextEntries

* \_headerControlContextEntries(): Generator<[ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.md), void, any>

  `Protected`

  Generate context menu entries based on the header control specification.

  #### Returns Generator<[ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.md), void, any>

  #### Yields

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_headerControlContextEntries

### `Protected`\_inferSourceAndTarget

* \_inferSourceAndTarget(target: string): [source: string, revisedTarget: string]

  `Protected`

  Given a current file path, determine the directory to which it belongs.

  #### Parameters

  + target: string

    The currently requested target path

  #### Returns [source: string, revisedTarget: string]

  A tuple of the inferred source and target directory path

### `Protected`\_initializeApplicationOptions

* \_initializeApplicationOptions(  
  Â Â Â Â options: Partial<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md)>,  
  ): [ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md)

  `Protected`

  Initialize configuration options for the Application instance.
  The default behavior of this method is to intelligently merge options for each class with those of their parents.

  + Array-based options are concatenated
  + Inner objects are merged
  + Otherwise, properties in the subclass replace those defined by a parent

  #### Parameters

  + options: Partial<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md)>

    Options provided directly to the constructor

  #### Returns [ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md)

  Configured options for the application instance

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_initializeApplicationOptions

### `Protected`\_insertElement

* \_insertElement(  
  Â Â Â Â element: HTMLElement,  
  Â Â Â Â options?: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md),  
  ): Promise<void>

  `Protected`

  Insert the application HTML element into the DOM.
  Subclasses may override this method to customize how the application is inserted.

  #### Parameters

  + element: HTMLElement

    The element to insert
  + `Optional`options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md) = {}

    Render options.

  #### Returns Promise<void>

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_insertElement

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

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_onAttach

### `Protected`\_onChangeForm

* \_onChangeForm(formConfig: ApplicationFormConfiguration, event: Event): void

  `Protected`

  Handle changes to an input element within the form.

  #### Parameters

  + formConfig: ApplicationFormConfiguration

    The form configuration for which this handler is bound
  + event: Event

    An input change event within the form

  #### Returns void

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_onChangeForm

### `Protected`\_onChangeTileSize

* \_onChangeTileSize(event: Event): void

  `Protected`

  Handle changes to the tile size.

  #### Parameters

  + event: Event

    The triggering event.

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

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_onClickAction

### `Protected`\_onClickTab

* \_onClickTab(event: PointerEvent): void

  `Protected`

  Handle click events on a tab within the Application.

  #### Parameters

  + event: PointerEvent

  #### Returns void

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_onClickTab

### `Protected`\_onClose

* \_onClose(options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)): void

  `Protected`

  Actions performed after closing the Application.
  Post-close steps are not awaited by the close process.

  #### Parameters

  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)

    Provided render options

  #### Returns void

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_onClose

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

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_onDetach

### `Protected`\_onFirstRender

* \_onFirstRender(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md),  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md),  
  ): Promise<void>

  `Protected`

  Actions performed after a first render of the Application.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md)

    Prepared context data
  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)

    Provided render options

  #### Returns Promise<void>

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_onFirstRender

### `Protected`\_onPosition

* \_onPosition(position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)): void

  `Protected`

  Actions performed after the Application is re-positioned.

  #### Parameters

  + position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)

    The requested application position

  #### Returns void

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_onPosition

### `Protected`\_onSearchFilter

* \_onSearchFilter(  
  Â Â Â Â event: KeyboardEvent,  
  Â Â Â Â query: string,  
  Â Â Â Â rgx: RegExp,  
  Â Â Â Â html: HTMLElement,  
  ): void

  `Protected`

  Search among shown directories and files.

  #### Parameters

  + event: KeyboardEvent

    The triggering event
  + query: string

    The search input value
  + rgx: RegExp
  + html: HTMLElement

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

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_onSubmitForm

### `Protected`\_postRender

* \_postRender(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md),  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md),  
  ): Promise<void>

  `Protected`

  Perform post-render finalization actions.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md)

    Prepared context data.
  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)

    Provided render options.

  #### Returns Promise<void>

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_postRender

### `Protected`\_preClose

* \_preClose(options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)): Promise<void>

  `Protected`

  Actions performed before closing the Application.
  Pre-close steps are awaited by the close process.

  #### Parameters

  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)

    Provided render options

  #### Returns Promise<void>

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_preClose

### `Protected`\_preFirstRender

* \_preFirstRender(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md),  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md),  
  ): Promise<void>

  `Protected`

  Actions performed before a first render of the Application.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md)

    Prepared context data
  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)

    Provided render options

  #### Returns Promise<void>

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_preFirstRender

### `Protected`\_prePosition

* \_prePosition(position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)): void

  `Protected`

  Actions performed before the Application is re-positioned.
  Pre-position steps are not awaited because setPosition is synchronous.

  #### Parameters

  + position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)

    The requested application position

  #### Returns void

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_prePosition

### `Protected`\_preRender

* \_preRender(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md),  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md),  
  ): Promise<void>

  `Protected`

  Actions performed before any render of the Application.
  Pre-render steps are awaited by the render process.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md)

    Prepared context data
  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)

    Provided render options

  #### Returns Promise<void>

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_preRender

### `Protected`\_refit

* \_refit(positionUpdate?: Partial<[ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)>): void

  `Protected`

  Re-fit an application to its content following a change in its natural size.

  #### Parameters

  + `Optional`positionUpdate: Partial<[ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)> = {}

    Position data forwarded to setPosition.

  #### Returns void

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_refit

### `Protected`\_removeElement

* \_removeElement(element: HTMLElement): void

  `Protected`

  Remove the application HTML element from the DOM.
  Subclasses may override this method to customize how the application element is removed.

  #### Parameters

  + element: HTMLElement

    The element to be removed

  #### Returns void

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_removeElement

### `Protected`\_renderFrame

* \_renderFrame(options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)): Promise<HTMLElement>

  `Protected`

  Render the outer framing HTMLElement which wraps the inner HTML of the Application.

  #### Parameters

  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)

    Options which configure application rendering behavior

  #### Returns Promise<HTMLElement>

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_renderFrame

### `Protected`\_renderFrameButtons

* \_renderFrameButtons(options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)): Promise<void>

  `Protected`

  Render buttons that are inserted directly into the frame header. Header controls should be preferred over frame
  buttons, which should be used sparingly.

  #### Parameters

  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)

    Options which configure application rendering behavior.

  #### Returns Promise<void>

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_renderFrameButtons

### `Protected`\_renderHeaderControl

* \_renderHeaderControl(control: [ApplicationHeaderControlsEntry](../types/foundry.applications.types.ApplicationHeaderControlsEntry.md)): HTMLLIElement

  `Protected`

  Render a header control button.

  #### Parameters

  + control: [ApplicationHeaderControlsEntry](../types/foundry.applications.types.ApplicationHeaderControlsEntry.md)

  #### Returns HTMLLIElement

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_renderHeaderControl

### `Protected`\_replaceHTML

* \_replaceHTML(  
  Â Â Â Â result: any,  
  Â Â Â Â content: HTMLElement,  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md),  
  ): void

  `Protected`

  Replace the HTML of the application with the result provided by the rendering backend.
  An Application subclass should implement this method in order for the Application to be renderable.

  #### Parameters

  + result: any

    The result returned by the application rendering backend
  + content: HTMLElement

    The content element into which the rendered result must be inserted
  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)

    Options which configure application rendering behavior

  #### Returns void

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_replaceHTML

### `Protected`\_updateFrame

* \_updateFrame(options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)): void

  `Protected`

  When the Application is rendered, optionally update aspects of the window frame.

  #### Parameters

  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)

    Options provided at render-time

  #### Returns void

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_updateFrame

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

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_updatePosition

### `Static`browse

* browse(  
  Â Â Â Â source: string,  
  Â Â Â Â target: string,  
  Â Â Â Â options?: { bucket?: string; extensions?: string[]; wildcard?: boolean },  
  ): Promise<object>

  Browse files for a certain directory location

  #### Parameters

  + source: string

    The source location in which to browse: see FilePicker#sources for details.
  + target: string

    The target within the source location
  + options: { bucket?: string; extensions?: string[]; wildcard?: boolean } = {}

    Optional arguments

    - ##### `Optional`bucket?: string

      A bucket within which to search if using the S3 source
    - ##### `Optional`extensions?: string[]

      An Array of file extensions to filter on
    - ##### `Optional`wildcard?: boolean

      The requested dir represents a wildcard path

  #### Returns Promise<object>

  A Promise that resolves to the directories and files contained in the location

### `Static`configurePath

* configurePath(source: string, target: string, options?: object): Promise<object>

  Configure metadata settings regarding a certain file system path

  #### Parameters

  + source: string

    The source location in which to browse: see FilePicker#sources for details.
  + target: string

    The target within the source location
  + options: object = {}

    Optional arguments modifying the request

  #### Returns Promise<object>

### `Static`createDirectory

* createDirectory(  
  Â Â Â Â source: string,  
  Â Â Â Â target: string,  
  Â Â Â Â options?: object,  
  ): Promise<object>

  Create a subdirectory within a given source. The requested subdirectory path must not already exist.

  #### Parameters

  + source: string

    The source location in which to browse. See FilePicker#sources for details
  + target: string

    The target within the source location
  + options: object = {}

    Optional arguments which modify the request

  #### Returns Promise<object>

### `Static`fromButton

* fromButton(button: HTMLButtonElement): FilePicker

  Bind the file picker to a new target field.
  Assumes the user will provide a HTMLButtonElement which has the data-target and data-type attributes
  The data-target attribute should provide the name of the input field which should receive the selected file
  The data-type attribute is a string in ["image", "audio"] which sets the file extensions which will be accepted

  #### Parameters

  + button: HTMLButtonElement

    The button element

  #### Returns FilePicker

### `Static`inheritanceChain

* inheritanceChain(): Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md), void, unknown>

  Iterate over the inheritance chain of this Application.
  The chain includes this Application itself and all parents until the base application is encountered.

  #### Returns Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md), void, unknown>

  #### See

  [ApplicationV2.BASE\_APPLICATION](foundry.applications.api.ApplicationV2.md#base_application)

  #### Yields

  Inherited from HandlebarsApplicationMixin(ApplicationV2).inheritanceChain

### `Static`instances

* instances(): Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md), any, any>

  Iterate over the instances of this Application.

  #### Returns Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md), any, any>

  #### Yields

  Inherited from HandlebarsApplicationMixin(ApplicationV2).instances

### `Static`matchS3URL

* matchS3URL(url: string): RegExpMatchArray | null

  Test a URL to see if it matches a well known s3 key pattern

  #### Parameters

  + url: string

    An input URL to test

  #### Returns RegExpMatchArray | null

  A regular expression match

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

  Inherited from HandlebarsApplicationMixin(ApplicationV2).parseCSSDimension

### `Static`requestTokenImages

* requestTokenImages(  
  Â Â Â Â actorId: string,  
  Â Â Â Â options?: { pack?: string },  
  ): Promise<string[]>

  Request wildcard token images from the server and return them.

  #### Parameters

  + actorId: string

    The actor whose prototype token contains the wildcard image path.
  + `Optional`options: { pack?: string } = {}
    - ##### `Optional`pack?: string

      The ID of the compendium the actor is in.

  #### Returns Promise<string[]>

### `Static`upload

* upload(  
  Â Â Â Â source: string,  
  Â Â Â Â path: string,  
  Â Â Â Â file: File,  
  Â Â Â Â body?: object,  
  Â Â Â Â options?: { notify?: boolean },  
  ): Promise<object>

  Dispatch a POST request to the server containing a directory path and a file to upload

  #### Parameters

  + source: string

    The data source to which the file should be uploaded
  + path: string

    The destination path
  + file: File

    The File object to upload
  + `Optional`body: object = {}

    Additional file upload options sent in the POST body
  + `Optional`options: { notify?: boolean } = {}

    Additional options to configure how the method behaves

    - ##### `Optional`notify?: boolean

      Display a UI notification when the upload is processed

  #### Returns Promise<object>

  The response object

### `Static`uploadPersistent

* uploadPersistent(  
  Â Â Â Â packageId: string,  
  Â Â Â Â path: string,  
  Â Â Â Â file: File,  
  Â Â Â Â body?: object,  
  Â Â Â Â options?: { notify?: boolean },  
  ): Promise<object>

  A convenience function that uploads a file to a given package's persistent /storage/ directory

  #### Parameters

  + packageId: string

    The id of the package to which the file should be uploaded.
    Only supports Systems and Modules.
  + path: string

    The relative destination path in the package's storage directory
  + file: File

    The File object to upload
  + `Optional`body: object = {}

    Additional file upload options sent in the POST body
  + `Optional`options: { notify?: boolean } = {}

    Additional options to configure how the method behaves

    - ##### `Optional`notify?: boolean

      Display a UI notification when the upload is processed

  #### Returns Promise<object>

  The response object

### `Static`waitForImages

* waitForImages(element: HTMLElement): Promise<void>

  Wait for any images in the given element to load.

  #### Parameters

  + element: HTMLElement

    The element.

  #### Returns Promise<void>

  Inherited from HandlebarsApplicationMixin(ApplicationV2).waitForImages