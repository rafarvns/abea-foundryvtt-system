---
title: "FilePicker | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.applications.apps.FilePicker.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [applications](../modules/foundry.applications.html)
* [apps](../modules/foundry.applications.apps.html)
* [FilePicker](foundry.applications.apps.FilePicker.html)

# Class FilePicker

The FilePicker application renders contents of the server-side public directory.
This app allows for navigating and uploading files to the public path.

#### Mixes

HandlebarsApplication

#### Hierarchy ([View Summary](../hierarchy.html#foundry.applications.apps.FilePicker))

* [ApplicationV2](foundry.applications.api.ApplicationV2.html)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html), this>
  + FilePicker

##### Index

### Constructors

[constructor](foundry.applications.apps.FilePicker.html#constructor)

### Properties

[activeSource](foundry.applications.apps.FilePicker.html#activesource)
[button](foundry.applications.apps.FilePicker.html#button)
[callback](foundry.applications.apps.FilePicker.html#callback)
[displayMode](foundry.applications.apps.FilePicker.html#displaymode)
[extensions](foundry.applications.apps.FilePicker.html#extensions)
[field](foundry.applications.apps.FilePicker.html#field)
[options](foundry.applications.apps.FilePicker.html#options)
[position](foundry.applications.apps.FilePicker.html#position)
[request](foundry.applications.apps.FilePicker.html#request)
[results](foundry.applications.apps.FilePicker.html#results)
[sources](foundry.applications.apps.FilePicker.html#sources)
[tabGroups](foundry.applications.apps.FilePicker.html#tabgroups)
[type](foundry.applications.apps.FilePicker.html#type)
[\_appId](foundry.applications.apps.FilePicker.html#_appid)
[\_maxZ](foundry.applications.apps.FilePicker.html#_maxz)
[BASE\_APPLICATION](foundry.applications.apps.FilePicker.html#base_application)
[DEFAULT\_OPTIONS](foundry.applications.apps.FilePicker.html#default_options)
[DISPLAY\_MODES](foundry.applications.apps.FilePicker.html#display_modes)
[emittedEvents](foundry.applications.apps.FilePicker.html#emittedevents)
[FILE\_TYPES](foundry.applications.apps.FilePicker.html#file_types)
[LAST\_BROWSED\_DIRECTORY](foundry.applications.apps.FilePicker.html#last_browsed_directory)
[LAST\_DISPLAY\_MODE](foundry.applications.apps.FilePicker.html#last_display_mode)
[LAST\_TILE\_SIZE](foundry.applications.apps.FilePicker.html#last_tile_size)
[PARTS](foundry.applications.apps.FilePicker.html#parts)
[RENDER\_STATES](foundry.applications.apps.FilePicker.html#render_states)
[S3\_BUCKETS](foundry.applications.apps.FilePicker.html#s3_buckets)
[TABS](foundry.applications.apps.FilePicker.html#tabs)

### Accessors

[canCreateFolder](foundry.applications.apps.FilePicker.html#cancreatefolder)
[canUpload](foundry.applications.apps.FilePicker.html#canupload)
[classList](foundry.applications.apps.FilePicker.html#classlist)
[element](foundry.applications.apps.FilePicker.html#element)
[favorites](foundry.applications.apps.FilePicker.html#favorites)
[form](foundry.applications.apps.FilePicker.html#form)
[hasFrame](foundry.applications.apps.FilePicker.html#hasframe)
[id](foundry.applications.apps.FilePicker.html#id)
[minimized](foundry.applications.apps.FilePicker.html#minimized)
[rendered](foundry.applications.apps.FilePicker.html#rendered)
[source](foundry.applications.apps.FilePicker.html#source)
[state](foundry.applications.apps.FilePicker.html#state)
[target](foundry.applications.apps.FilePicker.html#target)
[title](foundry.applications.apps.FilePicker.html#title)
[window](foundry.applications.apps.FilePicker.html#window)
[implementation](foundry.applications.apps.FilePicker.html#implementation)
[uploadURL](foundry.applications.apps.FilePicker.html#uploadurl)

### Methods

[\_awaitTransition](foundry.applications.apps.FilePicker.html#_awaittransition)
[\_doEvent](foundry.applications.apps.FilePicker.html#_doevent)
[\_onRender](foundry.applications.apps.FilePicker.html#_onrender)
[\_prepareContext](foundry.applications.apps.FilePicker.html#_preparecontext)
[\_prepareTabs](foundry.applications.apps.FilePicker.html#_preparetabs)
[\_renderHTML](foundry.applications.apps.FilePicker.html#_renderhtml)
[\_tearDown](foundry.applications.apps.FilePicker.html#_teardown)
[addEventListener](foundry.applications.apps.FilePicker.html#addeventlistener)
[bringToFront](foundry.applications.apps.FilePicker.html#bringtofront)
[browse](foundry.applications.apps.FilePicker.html#browse)
[changeTab](foundry.applications.apps.FilePicker.html#changetab)
[close](foundry.applications.apps.FilePicker.html#close)
[dispatchEvent](foundry.applications.apps.FilePicker.html#dispatchevent)
[maximize](foundry.applications.apps.FilePicker.html#maximize)
[minimize](foundry.applications.apps.FilePicker.html#minimize)
[removeEventListener](foundry.applications.apps.FilePicker.html#removeeventlistener)
[render](foundry.applications.apps.FilePicker.html#render)
[setPosition](foundry.applications.apps.FilePicker.html#setposition)
[submit](foundry.applications.apps.FilePicker.html#submit)
[toggleControls](foundry.applications.apps.FilePicker.html#togglecontrols)
[\_attachFrameListeners](foundry.applications.apps.FilePicker.html#_attachframelisteners)
[\_canRender](foundry.applications.apps.FilePicker.html#_canrender)
[\_configureRenderOptions](foundry.applications.apps.FilePicker.html#_configurerenderoptions)
[\_createContextMenu](foundry.applications.apps.FilePicker.html#_createcontextmenu)
[\_getHeaderControls](foundry.applications.apps.FilePicker.html#_getheadercontrols)
[\_getTabsConfig](foundry.applications.apps.FilePicker.html#_gettabsconfig)
[\_headerControlButtons](foundry.applications.apps.FilePicker.html#_headercontrolbuttons)
[\_inferSourceAndTarget](foundry.applications.apps.FilePicker.html#_infersourceandtarget)
[\_initializeApplicationOptions](foundry.applications.apps.FilePicker.html#_initializeapplicationoptions)
[\_insertElement](foundry.applications.apps.FilePicker.html#_insertelement)
[\_onChangeForm](foundry.applications.apps.FilePicker.html#_onchangeform)
[\_onChangeTileSize](foundry.applications.apps.FilePicker.html#_onchangetilesize)
[\_onClickAction](foundry.applications.apps.FilePicker.html#_onclickaction)
[\_onClickTab](foundry.applications.apps.FilePicker.html#_onclicktab)
[\_onClose](foundry.applications.apps.FilePicker.html#_onclose)
[\_onFirstRender](foundry.applications.apps.FilePicker.html#_onfirstrender)
[\_onPosition](foundry.applications.apps.FilePicker.html#_onposition)
[\_onSearchFilter](foundry.applications.apps.FilePicker.html#_onsearchfilter)
[\_onSubmitForm](foundry.applications.apps.FilePicker.html#_onsubmitform)
[\_postRender](foundry.applications.apps.FilePicker.html#_postrender)
[\_preClose](foundry.applications.apps.FilePicker.html#_preclose)
[\_preFirstRender](foundry.applications.apps.FilePicker.html#_prefirstrender)
[\_prePosition](foundry.applications.apps.FilePicker.html#_preposition)
[\_preRender](foundry.applications.apps.FilePicker.html#_prerender)
[\_removeElement](foundry.applications.apps.FilePicker.html#_removeelement)
[\_renderFrame](foundry.applications.apps.FilePicker.html#_renderframe)
[\_renderHeaderControl](foundry.applications.apps.FilePicker.html#_renderheadercontrol)
[\_replaceHTML](foundry.applications.apps.FilePicker.html#_replacehtml)
[\_updateFrame](foundry.applications.apps.FilePicker.html#_updateframe)
[\_updatePosition](foundry.applications.apps.FilePicker.html#_updateposition)
[browse](foundry.applications.apps.FilePicker.html#browse-2)
[configurePath](foundry.applications.apps.FilePicker.html#configurepath)
[createDirectory](foundry.applications.apps.FilePicker.html#createdirectory)
[fromButton](foundry.applications.apps.FilePicker.html#frombutton)
[inheritanceChain](foundry.applications.apps.FilePicker.html#inheritancechain)
[matchS3URL](foundry.applications.apps.FilePicker.html#matchs3url)
[parseCSSDimension](foundry.applications.apps.FilePicker.html#parsecssdimension)
[requestTokenImages](foundry.applications.apps.FilePicker.html#requesttokenimages)
[upload](foundry.applications.apps.FilePicker.html#upload)
[uploadPersistent](foundry.applications.apps.FilePicker.html#uploadpersistent)
[waitForImages](foundry.applications.apps.FilePicker.html#waitforimages)

## Constructors

### constructor

* new FilePicker(options?: any): [FilePicker](foundry.applications.apps.FilePicker.html)

  #### Parameters

  + `Optional`options: any = {}

    Options that configure the
    behavior of the FilePicker

  #### Returns [FilePicker](foundry.applications.apps.FilePicker.html)

  Overrides HandlebarsApplicationMixin(ApplicationV2).constructor

## Properties

### activeSource

activeSource: "data" | "public" | "s3"

Track the active source tab which is being browsed

### button

button: null | HTMLElement

A button controlling the display of the picker UI

### callback

callback: null | Function

A callback function to trigger once a file has been selected

### displayMode

displayMode: string

The display mode of the FilePicker UI

### extensions

extensions: string[] = ...

The current set of file extensions which are being filtered upon

### field

field: null | HTMLElement

The target HTML element this file picker is bound to

### options

options: Readonly<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html)>

Application instance configuration options.

Inherited from HandlebarsApplicationMixin(ApplicationV2).options

### position

position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html) = ...

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
Â Â Â Â undefined | { bucket?: string; buckets?: string[]; target: string },  
>

The file sources available for browsing

### tabGroups

tabGroups: Record<string, null | string> = ...

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

BASE\_APPLICATION: typeof [ApplicationV2](foundry.applications.api.ApplicationV2.html) = ApplicationV2

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
Â Â Â Â Â Â Â Â Â Â Â Â formData: [FormDataExtended](foundry.applications.ux.FormDataExtended.html),  
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

emittedEvents: readonly ["render", "close", "position"] = ...

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

LAST\_TILE\_SIZE: null | number = null

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

S3\_BUCKETS: null | any[] = null

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

* get favorites(): Record<string, [FavoriteFolder](../interfaces/foundry.FavoriteFolder.html)>

  Get favorite folders for quick access

  #### Returns Record<string, [FavoriteFolder](../interfaces/foundry.FavoriteFolder.html)>

### form

* get form(): null | HTMLFormElement

  Does this Application have a top-level form element?

  #### Returns null | HTMLFormElement

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

  Inherited from HandlebarsApplicationMixin(ApplicationV2).window

### `Static`implementation

* get implementation(): typeof [FilePicker](foundry.applications.apps.FilePicker.html)

  Retrieve the configured FilePicker implementation.

  #### Returns typeof [FilePicker](foundry.applications.apps.FilePicker.html)

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
  Â Â Â Â [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html) & {  
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
  Â Â Â Â Â Â Â Â favorites: Record<string, [FavoriteFolder](../interfaces/foundry.FavoriteFolder.html)>;  
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
  Â Â Â Â Â Â Â Â Â Â Â Â undefined | { bucket?: string; buckets?: string[]; target: string },  
  Â Â Â Â Â Â Â Â >;  
  Â Â Â Â Â Â Â Â target: string;  
  Â Â Â Â Â Â Â Â tileSize: any;  
  Â Â Â Â Â Â Â Â user: null | [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html);  
  Â Â Â Â },  
  >

  #### Parameters

  + options: any

  #### Returns Promise< Â Â Â Â [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html) & { Â Â Â Â Â Â Â Â bucket: any; Â Â Â Â Â Â Â Â buckets: any; Â Â Â Â Â Â Â Â buttons: { icon: string; label: string; type: string }[]; Â Â Â Â Â Â Â Â canCreateFolder: boolean; Â Â Â Â Â Â Â Â canGoBack: boolean; Â Â Â Â Â Â Â Â canSelect: boolean; Â Â Â Â Â Â Â Â canTogglePrivacy: boolean; Â Â Â Â Â Â Â Â canUpload: boolean; Â Â Â Â Â Â Â Â dirs: any; Â Â Â Â Â Â Â Â displayMode: string; Â Â Â Â Â Â Â Â extensions: string[]; Â Â Â Â Â Â Â Â favorites: Record<string, [FavoriteFolder](../interfaces/foundry.FavoriteFolder.html)>; Â Â Â Â Â Â Â Â files: any; Â Â Â Â Â Â Â Â isFolderPicker: boolean; Â Â Â Â Â Â Â Â isS3: boolean; Â Â Â Â Â Â Â Â noResults: boolean; Â Â Â Â Â Â Â Â rootId: string; Â Â Â Â Â Â Â Â selected: any; Â Â Â Â Â Â Â Â source: object; Â Â Â Â Â Â Â Â sources: Record< Â Â Â Â Â Â Â Â Â Â Â Â "data" Â Â Â Â Â Â Â Â Â Â Â Â | "public" Â Â Â Â Â Â Â Â Â Â Â Â | "s3", Â Â Â Â Â Â Â Â Â Â Â Â undefined | { bucket?: string; buckets?: string[]; target: string }, Â Â Â Â Â Â Â Â >; Â Â Â Â Â Â Â Â target: string; Â Â Â Â Â Â Â Â tileSize: any; Â Â Â Â Â Â Â Â user: null | [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html); Â Â Â Â }, >

  #### Inherit Doc

  Overrides HandlebarsApplicationMixin(ApplicationV2).\_prepareContext

### \_prepareTabs

* \_prepareTabs(group: any): Record<string, [ApplicationTab](../interfaces/foundry.applications.types.ApplicationTab.html)>

  #### Parameters

  + group: any

  #### Returns Record<string, [ApplicationTab](../interfaces/foundry.applications.types.ApplicationTab.html)>

  #### Inherit Doc

  Overrides HandlebarsApplicationMixin(ApplicationV2).\_prepareTabs

### `Abstract`\_renderHTML

* \_renderHTML(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html),  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html),  
  ): Promise<any>

  Render an HTMLElement for the Application.
  An Application subclass must implement this method in order for the Application to be renderable.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)

    Context data for the render operation
  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)

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

  Inherited from HandlebarsApplicationMixin(ApplicationV2).addEventListener

### bringToFront

* bringToFront(): void

  Bring this Application window to the front of the rendering stack by increasing its z-index.
  Once ApplicationV1 is deprecated we should switch from \_maxZ to ApplicationV2#maxZ
  We should also eliminate ui.activeWindow in favor of only ApplicationV2#frontApp

  #### Returns void

  Inherited from HandlebarsApplicationMixin(ApplicationV2).bringToFront

### browse

* browse(target?: string, options?: object): Promise<[FilePicker](foundry.applications.apps.FilePicker.html)>

  Browse to a specific location for this FilePicker instance

  #### Parameters

  + `Optional`target: string = ...

    The target within the currently active source location.
  + `Optional`options: object = {}

    Browsing options

  #### Returns Promise<[FilePicker](foundry.applications.apps.FilePicker.html)>

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

* close(options?: Partial<[ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.html)>): Promise<[FilePicker](foundry.applications.apps.FilePicker.html)>

  Close the Application, removing it from the DOM.

  #### Parameters

  + `Optional`options: Partial<[ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.html)> = {}

    Options which modify how the application is closed.

  #### Returns Promise<[FilePicker](foundry.applications.apps.FilePicker.html)>

  A Promise which resolves to the closed Application instance

  Inherited from HandlebarsApplicationMixin(ApplicationV2).close

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

  Inherited from HandlebarsApplicationMixin(ApplicationV2).removeEventListener

### render

* render(...args: any[]): Promise<[FilePicker](foundry.applications.apps.FilePicker.html)>

  #### Parameters

  + ...args: any[]

  #### Returns Promise<[FilePicker](foundry.applications.apps.FilePicker.html)>

  #### Inherit Doc

  Overrides HandlebarsApplicationMixin(ApplicationV2).render

### setPosition

* setPosition(position?: Partial<[ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)>): void | [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)

  Update the Application element position using provided data which is merged with the prior position.

  #### Parameters

  + `Optional`position: Partial<[ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)>

    New Application positioning data

  #### Returns void | [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)

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

  Inherited from HandlebarsApplicationMixin(ApplicationV2).toggleControls

### `Protected`\_attachFrameListeners

* \_attachFrameListeners(): void

  `Protected`

  Attach event listeners to the Application frame.

  #### Returns void

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_attachFrameListeners

### `Protected`\_canRender

* \_canRender(options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)): false | void

  `Protected`

  Test whether this Application is allowed to be rendered.

  #### Parameters

  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)

    Provided render options

  #### Returns false | void

  Return false to prevent rendering

  #### Throws

  An Error to display a warning message

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_canRender

### `Protected`\_configureRenderOptions

* \_configureRenderOptions(options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)): void

  `Protected`

  Modify the provided options passed to a render request.

  #### Parameters

  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)

    Options which configure application rendering behavior

  #### Returns void

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_configureRenderOptions

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

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_createContextMenu

### `Protected`\_getHeaderControls

* \_getHeaderControls(): [ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html)[]

  `Protected`

  Configure the array of header control menu options

  #### Returns [ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html)[]

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_getHeaderControls

### `Protected`\_getTabsConfig

* \_getTabsConfig(group: string): null | [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.html)

  `Protected`

  Get the configuration for a tabs group.

  #### Parameters

  + group: string

    The ID of a tabs group

  #### Returns null | [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.html)

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_getTabsConfig

### `Protected`\_headerControlButtons

* \_headerControlButtons(): Generator<[ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html), any, any>

  `Protected`

  Iterate over header control buttons, filtering for controls which are visible for the current client.

  #### Returns Generator<[ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html), any, any>

  #### Yields

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_headerControlButtons

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
  Â Â Â Â options: Partial<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html)>,  
  ): [ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html)

  `Protected`

  Initialize configuration options for the Application instance.
  The default behavior of this method is to intelligently merge options for each class with those of their parents.

  + Array-based options are concatenated
  + Inner objects are merged
  + Otherwise, properties in the subclass replace those defined by a parent

  #### Parameters

  + options: Partial<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html)>

    Options provided directly to the constructor

  #### Returns [ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html)

  Configured options for the application instance

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_initializeApplicationOptions

### `Protected`\_insertElement

* \_insertElement(element: HTMLElement): void

  `Protected`

  Insert the application HTML element into the DOM.
  Subclasses may override this method to customize how the application is inserted.

  #### Parameters

  + element: HTMLElement

    The element to insert

  #### Returns void

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_insertElement

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

* \_onClose(options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)): void

  `Protected`

  Actions performed after closing the Application.
  Post-close steps are not awaited by the close process.

  #### Parameters

  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)

    Provided render options

  #### Returns void

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_onClose

### `Protected`\_onFirstRender

* \_onFirstRender(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html),  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html),  
  ): Promise<void>

  `Protected`

  Actions performed after a first render of the Application.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)

    Prepared context data
  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)

    Provided render options

  #### Returns Promise<void>

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_onFirstRender

### `Protected`\_onPosition

* \_onPosition(position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)): void

  `Protected`

  Actions performed after the Application is re-positioned.

  #### Parameters

  + position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)

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
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html),  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html),  
  ): Promise<void>

  `Protected`

  Perform post-render finalization actions.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)

    Prepared context data.
  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)

    Provided render options.

  #### Returns Promise<void>

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_postRender

### `Protected`\_preClose

* \_preClose(options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)): Promise<void>

  `Protected`

  Actions performed before closing the Application.
  Pre-close steps are awaited by the close process.

  #### Parameters

  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)

    Provided render options

  #### Returns Promise<void>

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_preClose

### `Protected`\_preFirstRender

* \_preFirstRender(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html),  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html),  
  ): Promise<void>

  `Protected`

  Actions performed before a first render of the Application.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)

    Prepared context data
  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)

    Provided render options

  #### Returns Promise<void>

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_preFirstRender

### `Protected`\_prePosition

* \_prePosition(position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)): void

  `Protected`

  Actions performed before the Application is re-positioned.
  Pre-position steps are not awaited because setPosition is synchronous.

  #### Parameters

  + position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)

    The requested application position

  #### Returns void

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_prePosition

### `Protected`\_preRender

* \_preRender(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html),  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html),  
  ): Promise<void>

  `Protected`

  Actions performed before any render of the Application.
  Pre-render steps are awaited by the render process.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)

    Prepared context data
  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)

    Provided render options

  #### Returns Promise<void>

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_preRender

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

* \_renderFrame(options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)): Promise<HTMLElement>

  `Protected`

  Render the outer framing HTMLElement which wraps the inner HTML of the Application.

  #### Parameters

  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)

    Options which configure application rendering behavior

  #### Returns Promise<HTMLElement>

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_renderFrame

### `Protected`\_renderHeaderControl

* \_renderHeaderControl(control: [ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html)): HTMLLIElement

  `Protected`

  Render a header control button.

  #### Parameters

  + control: [ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html)

  #### Returns HTMLLIElement

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_renderHeaderControl

### `Protected`\_replaceHTML

* \_replaceHTML(  
  Â Â Â Â result: any,  
  Â Â Â Â content: HTMLElement,  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html),  
  ): void

  `Protected`

  Replace the HTML of the application with the result provided by the rendering backend.
  An Application subclass should implement this method in order for the Application to be renderable.

  #### Parameters

  + result: any

    The result returned by the application rendering backend
  + content: HTMLElement

    The content element into which the rendered result must be inserted
  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)

    Options which configure application rendering behavior

  #### Returns void

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_replaceHTML

### `Protected`\_updateFrame

* \_updateFrame(options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)): void

  `Protected`

  When the Application is rendered, optionally update aspects of the window frame.

  #### Parameters

  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)

    Options provided at render-time

  #### Returns void

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_updateFrame

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

* fromButton(button: HTMLButtonElement): [FilePicker](foundry.applications.apps.FilePicker.html)

  Bind the file picker to a new target field.
  Assumes the user will provide a HTMLButtonElement which has the data-target and data-type attributes
  The data-target attribute should provide the name of the input field which should receive the selected file
  The data-type attribute is a string in ["image", "audio"] which sets the file extensions which will be accepted

  #### Parameters

  + button: HTMLButtonElement

    The button element

  #### Returns [FilePicker](foundry.applications.apps.FilePicker.html)

### `Static`inheritanceChain

* inheritanceChain(): Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.html), void, unknown>

  Iterate over the inheritance chain of this Application.
  The chain includes this Application itself and all parents until the base application is encountered.

  #### Returns Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.html), void, unknown>

  #### See

  [ApplicationV2.BASE\_APPLICATION](foundry.applications.api.ApplicationV2.html#base_application)

  #### Yields

  Inherited from HandlebarsApplicationMixin(ApplicationV2).inheritanceChain

### `Static`matchS3URL

* matchS3URL(url: string): null | RegExpMatchArray

  Test a URL to see if it matches a well known s3 key pattern

  #### Parameters

  + url: string

    An input URL to test

  #### Returns null | RegExpMatchArray

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