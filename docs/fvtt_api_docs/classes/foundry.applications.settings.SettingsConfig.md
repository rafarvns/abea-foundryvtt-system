---
title: "SettingsConfig | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.applications.settings.SettingsConfig.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [applications](../modules/foundry.applications.html)
* [settings](../modules/foundry.applications.settings.html)
* [SettingsConfig](foundry.applications.settings.SettingsConfig.html)

# Class SettingsConfig

The Application responsible for displaying and editing the client and world settings for this world.
This form renders the settings defined via the game.settings.register API which have config = true

#### Hierarchy ([View Summary](../hierarchy.html#foundry.applications.settings.SettingsConfig))

* [CategoryBrowser](foundry.applications.api.CategoryBrowser.html)
  + SettingsConfig

##### Index

### Constructors

[constructor](foundry.applications.settings.SettingsConfig.html#constructor)

### Properties

[options](foundry.applications.settings.SettingsConfig.html#options)
[position](foundry.applications.settings.SettingsConfig.html#position)
[tabGroups](foundry.applications.settings.SettingsConfig.html#tabgroups)
[\_appId](foundry.applications.settings.SettingsConfig.html#_appid)
[\_maxZ](foundry.applications.settings.SettingsConfig.html#_maxz)
[BASE\_APPLICATION](foundry.applications.settings.SettingsConfig.html#base_application)
[DEFAULT\_OPTIONS](foundry.applications.settings.SettingsConfig.html#default_options)
[emittedEvents](foundry.applications.settings.SettingsConfig.html#emittedevents)
[PARTS](foundry.applications.settings.SettingsConfig.html#parts)
[RENDER\_STATES](foundry.applications.settings.SettingsConfig.html#render_states)
[TABS](foundry.applications.settings.SettingsConfig.html#tabs)

### Accessors

[classList](foundry.applications.settings.SettingsConfig.html#classlist)
[element](foundry.applications.settings.SettingsConfig.html#element)
[form](foundry.applications.settings.SettingsConfig.html#form)
[hasFrame](foundry.applications.settings.SettingsConfig.html#hasframe)
[id](foundry.applications.settings.SettingsConfig.html#id)
[minimized](foundry.applications.settings.SettingsConfig.html#minimized)
[rendered](foundry.applications.settings.SettingsConfig.html#rendered)
[state](foundry.applications.settings.SettingsConfig.html#state)
[title](foundry.applications.settings.SettingsConfig.html#title)
[window](foundry.applications.settings.SettingsConfig.html#window)
[\_dataLoaded](foundry.applications.settings.SettingsConfig.html#_dataloaded)

### Methods

[\_awaitTransition](foundry.applications.settings.SettingsConfig.html#_awaittransition)
[\_configureRenderParts](foundry.applications.settings.SettingsConfig.html#_configurerenderparts)
[\_doEvent](foundry.applications.settings.SettingsConfig.html#_doevent)
[\_initializeApplicationOptions](foundry.applications.settings.SettingsConfig.html#_initializeapplicationoptions)
[\_loadCategoryData](foundry.applications.settings.SettingsConfig.html#_loadcategorydata)
[\_onRender](foundry.applications.settings.SettingsConfig.html#_onrender)
[\_prepareCategoryData](foundry.applications.settings.SettingsConfig.html#_preparecategorydata)
[\_prepareContext](foundry.applications.settings.SettingsConfig.html#_preparecontext)
[\_renderHTML](foundry.applications.settings.SettingsConfig.html#_renderhtml)
[\_tearDown](foundry.applications.settings.SettingsConfig.html#_teardown)
[addEventListener](foundry.applications.settings.SettingsConfig.html#addeventlistener)
[bringToFront](foundry.applications.settings.SettingsConfig.html#bringtofront)
[changeTab](foundry.applications.settings.SettingsConfig.html#changetab)
[close](foundry.applications.settings.SettingsConfig.html#close)
[dispatchEvent](foundry.applications.settings.SettingsConfig.html#dispatchevent)
[maximize](foundry.applications.settings.SettingsConfig.html#maximize)
[minimize](foundry.applications.settings.SettingsConfig.html#minimize)
[removeEventListener](foundry.applications.settings.SettingsConfig.html#removeeventlistener)
[render](foundry.applications.settings.SettingsConfig.html#render)
[search](foundry.applications.settings.SettingsConfig.html#search)
[setPosition](foundry.applications.settings.SettingsConfig.html#setposition)
[submit](foundry.applications.settings.SettingsConfig.html#submit)
[toggleControls](foundry.applications.settings.SettingsConfig.html#togglecontrols)
[\_attachFrameListeners](foundry.applications.settings.SettingsConfig.html#_attachframelisteners)
[\_canRender](foundry.applications.settings.SettingsConfig.html#_canrender)
[\_categorizeEntry](foundry.applications.settings.SettingsConfig.html#_categorizeentry)
[\_configureRenderOptions](foundry.applications.settings.SettingsConfig.html#_configurerenderoptions)
[\_createContextMenu](foundry.applications.settings.SettingsConfig.html#_createcontextmenu)
[\_getHeaderControls](foundry.applications.settings.SettingsConfig.html#_getheadercontrols)
[\_getTabsConfig](foundry.applications.settings.SettingsConfig.html#_gettabsconfig)
[\_headerControlButtons](foundry.applications.settings.SettingsConfig.html#_headercontrolbuttons)
[\_insertElement](foundry.applications.settings.SettingsConfig.html#_insertelement)
[\_onChangeForm](foundry.applications.settings.SettingsConfig.html#_onchangeform)
[\_onClickAction](foundry.applications.settings.SettingsConfig.html#_onclickaction)
[\_onClickTab](foundry.applications.settings.SettingsConfig.html#_onclicktab)
[\_onClose](foundry.applications.settings.SettingsConfig.html#_onclose)
[\_onFirstRender](foundry.applications.settings.SettingsConfig.html#_onfirstrender)
[\_onPosition](foundry.applications.settings.SettingsConfig.html#_onposition)
[\_onSearchFilter](foundry.applications.settings.SettingsConfig.html#_onsearchfilter)
[\_onSubmitForm](foundry.applications.settings.SettingsConfig.html#_onsubmitform)
[\_postRender](foundry.applications.settings.SettingsConfig.html#_postrender)
[\_preClose](foundry.applications.settings.SettingsConfig.html#_preclose)
[\_preFirstRender](foundry.applications.settings.SettingsConfig.html#_prefirstrender)
[\_prepareTabs](foundry.applications.settings.SettingsConfig.html#_preparetabs)
[\_prePosition](foundry.applications.settings.SettingsConfig.html#_preposition)
[\_preRender](foundry.applications.settings.SettingsConfig.html#_prerender)
[\_removeElement](foundry.applications.settings.SettingsConfig.html#_removeelement)
[\_renderFrame](foundry.applications.settings.SettingsConfig.html#_renderframe)
[\_renderHeaderControl](foundry.applications.settings.SettingsConfig.html#_renderheadercontrol)
[\_replaceHTML](foundry.applications.settings.SettingsConfig.html#_replacehtml)
[\_sortCategories](foundry.applications.settings.SettingsConfig.html#_sortcategories)
[\_updateFrame](foundry.applications.settings.SettingsConfig.html#_updateframe)
[\_updatePosition](foundry.applications.settings.SettingsConfig.html#_updateposition)
[inheritanceChain](foundry.applications.settings.SettingsConfig.html#inheritancechain)
[parseCSSDimension](foundry.applications.settings.SettingsConfig.html#parsecssdimension)
[reloadConfirm](foundry.applications.settings.SettingsConfig.html#reloadconfirm)
[waitForImages](foundry.applications.settings.SettingsConfig.html#waitforimages)

## Constructors

### constructor

* new SettingsConfig(  
  Â Â Â Â options?: Partial<  
  Â Â Â Â Â Â Â Â [ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html) & [CategoryBrowserConfiguration](../interfaces/foundry.CategoryBrowserConfiguration.html),  
  Â Â Â Â >,  
  ): [SettingsConfig](foundry.applications.settings.SettingsConfig.html)

  Applications are constructed by providing an object of configuration options.

  #### Parameters

  + `Optional`options: Partial<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html) & [CategoryBrowserConfiguration](../interfaces/foundry.CategoryBrowserConfiguration.html)> = {}

    Options used to configure the Application instance

  #### Returns [SettingsConfig](foundry.applications.settings.SettingsConfig.html)

  Inherited from CategoryBrowser.constructor

## Properties

### options

options: Readonly<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html) & [CategoryBrowserConfiguration](../interfaces/foundry.CategoryBrowserConfiguration.html)>

Application instance configuration options.

Inherited from CategoryBrowser.options

### position

position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html) = ...

The current position of the application with respect to the window.document.body.

Inherited from CategoryBrowser.position

### tabGroups

tabGroups: Record<string, null | string> = ...

If this Application uses tabbed navigation groups, this mapping is updated whenever the changeTab method is called.
Reports the active tab for each group, with a value of `null` indicating no tab is active.
Subclasses may override this property to define default tabs for each group.

Inherited from CategoryBrowser.tabGroups

### `Static` `Internal`\_appId

\_appId: number = 0

An incrementing integer Application ID.

Inherited from CategoryBrowser.\_appId

### `Static` `Internal`\_maxZ

\_maxZ: number = ...

The current maximum z-index of any displayed Application.

Inherited from CategoryBrowser.\_maxZ

### `Static`BASE\_APPLICATION

BASE\_APPLICATION: typeof [ApplicationV2](foundry.applications.api.ApplicationV2.html) = ApplicationV2

Designates which upstream Application class in this class' inheritance chain is the base application.
Any DEFAULT\_OPTIONS of super-classes further upstream of the BASE\_APPLICATION are ignored.
Hook events for super-classes further upstream of the BASE\_APPLICATION are not dispatched.

Inherited from CategoryBrowser.BASE\_APPLICATION

### `Static`DEFAULT\_OPTIONS

DEFAULT\_OPTIONS: {  
Â Â Â Â actions: {  
Â Â Â Â Â Â Â Â openSubmenu: (  
Â Â Â Â Â Â Â Â Â Â Â Â event: PointerEvent,  
Â Â Â Â Â Â Â Â Â Â Â Â target: HTMLElement,  
Â Â Â Â Â Â Â Â ) => void | Promise<void>;  
Â Â Â Â Â Â Â Â resetDefaults: (  
Â Â Â Â Â Â Â Â Â Â Â Â event: PointerEvent,  
Â Â Â Â Â Â Â Â Â Â Â Â target: HTMLElement,  
Â Â Â Â Â Â Â Â ) => void | Promise<void>;  
Â Â Â Â };  
Â Â Â Â form: {  
Â Â Â Â Â Â Â Â handler: (  
Â Â Â Â Â Â Â Â Â Â Â Â event: Event | SubmitEvent,  
Â Â Â Â Â Â Â Â Â Â Â Â form: HTMLFormElement,  
Â Â Â Â Â Â Â Â Â Â Â Â formData: [FormDataExtended](foundry.applications.ux.FormDataExtended.html),  
Â Â Â Â Â Â Â Â ) => Promise<any>;  
Â Â Â Â };  
Â Â Â Â id: string;  
Â Â Â Â initialCategory: string;  
Â Â Â Â position: { height: number; width: number };  
Â Â Â Â subtemplates: { category: string; sidebarFooter: string };  
Â Â Â Â window: { icon: string; resizable: boolean; title: string };  
} = ...

#### Inherit Doc

Overrides CategoryBrowser.DEFAULT\_OPTIONS

### `Static`emittedEvents

emittedEvents: readonly ["render", "close", "position"] = ...

Inherited from CategoryBrowser.emittedEvents

### `Static`PARTS

PARTS: {  
Â Â Â Â main: { template: string };  
Â Â Â Â sidebar: { scrollable: string[]; template: string };  
} = ...

Inherited from CategoryBrowser.PARTS

### `Static`RENDER\_STATES

RENDER\_STATES: Record<string, number> = ...

The sequence of rendering states that describe the Application life-cycle.

Inherited from CategoryBrowser.RENDER\_STATES

### `Static`TABS

TABS: Record<string, [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.html)> = {}

Configuration of application tabs, with an entry per tab group.

Inherited from CategoryBrowser.TABS

## Accessors

### classList

* get classList(): DOMTokenList

  The CSS class list of this Application instance

  #### Returns DOMTokenList

  Inherited from CategoryBrowser.classList

### element

* get element(): HTMLElement

  The HTMLElement which renders this Application into the DOM.

  #### Returns HTMLElement

  Inherited from CategoryBrowser.element

### form

* get form(): null | HTMLFormElement

  Does this Application have a top-level form element?

  #### Returns null | HTMLFormElement

  Inherited from CategoryBrowser.form

### hasFrame

* get hasFrame(): boolean

  Does this Application instance render within an outer window frame?

  #### Returns boolean

  Inherited from CategoryBrowser.hasFrame

### id

* get id(): string

  The HTML element ID of this Application instance.
  This provides a readonly view into the internal ID used by this application.
  This getter should not be overridden by subclasses, which should instead configure the ID in `DEFAULT_OPTIONS` or
  by defining a `uniqueId` during `_initializeApplicationOptions`.

  #### Returns string

  Inherited from CategoryBrowser.id

### minimized

* get minimized(): boolean

  Is this Application instance currently minimized?

  #### Returns boolean

  Inherited from CategoryBrowser.minimized

### rendered

* get rendered(): boolean

  Is this Application instance currently rendered?

  #### Returns boolean

  Inherited from CategoryBrowser.rendered

### state

* get state(): number

  The current render state of the Application.

  #### Returns number

  Inherited from CategoryBrowser.state

### title

* get title(): string

  A convenience reference to the title of the Application window.

  #### Returns string

  Inherited from CategoryBrowser.title

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

  Inherited from CategoryBrowser.window

### `Protected`\_dataLoaded

* get \_dataLoaded(): boolean

  `Protected`

  Is category and/or entry data loaded? Most subclasses will already have their data close at hand.

  #### Returns boolean

  Inherited from CategoryBrowser.\_dataLoaded

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

  Inherited from CategoryBrowser.\_awaitTransition

### \_configureRenderParts

* \_configureRenderParts(options: any): any

  #### Parameters

  + options: any

  #### Returns any

  #### Inherit Doc

  Inherited from CategoryBrowser.\_configureRenderParts

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

  Inherited from CategoryBrowser.\_doEvent

### \_initializeApplicationOptions

* \_initializeApplicationOptions(options: any): [ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html)

  #### Parameters

  + options: any

  #### Returns [ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html)

  #### Inherit Doc

  Inherited from CategoryBrowser.\_initializeApplicationOptions

### \_loadCategoryData

* \_loadCategoryData(): Promise<void>

  An optional method to make a potentially long-running request to load category data: a temporary message will be
  displayed until completion.

  #### Returns Promise<void>

  Inherited from CategoryBrowser.\_loadCategoryData

### \_onRender

* \_onRender(context: any, options: any): Promise<void>

  #### Parameters

  + context: any
  + options: any

  #### Returns Promise<void>

  #### Inherit Doc

  Inherited from CategoryBrowser.\_onRender

### \_prepareCategoryData

* \_prepareCategoryData(): {}

  #### Returns {}

  #### Inherit Doc

  Overrides CategoryBrowser.\_prepareCategoryData

### \_prepareContext

* \_prepareContext(  
  Â Â Â Â options: any,  
  ): Promise<  
  Â Â Â Â {  
  Â Â Â Â Â Â Â Â categories: object;  
  Â Â Â Â Â Â Â Â loading: null;  
  Â Â Â Â Â Â Â Â packageList: boolean;  
  Â Â Â Â Â Â Â Â rootId: string;  
  Â Â Â Â Â Â Â Â submitButton: boolean;  
  Â Â Â Â Â Â Â Â subtemplates: {  
  Â Â Â Â Â Â Â Â Â Â Â Â category: string;  
  Â Â Â Â Â Â Â Â Â Â Â Â filters: null  
  Â Â Â Â Â Â Â Â Â Â Â Â | string;  
  Â Â Â Â Â Â Â Â Â Â Â Â sidebarFooter: null | string;  
  Â Â Â Â Â Â Â Â };  
  Â Â Â Â },  
  >

  #### Parameters

  + options: any

  #### Returns Promise< Â Â Â Â { Â Â Â Â Â Â Â Â categories: object; Â Â Â Â Â Â Â Â loading: null; Â Â Â Â Â Â Â Â packageList: boolean; Â Â Â Â Â Â Â Â rootId: string; Â Â Â Â Â Â Â Â submitButton: boolean; Â Â Â Â Â Â Â Â subtemplates: { Â Â Â Â Â Â Â Â Â Â Â Â category: string; Â Â Â Â Â Â Â Â Â Â Â Â filters: null Â Â Â Â Â Â Â Â Â Â Â Â | string; Â Â Â Â Â Â Â Â Â Â Â Â sidebarFooter: null | string; Â Â Â Â Â Â Â Â }; Â Â Â Â }, >

  #### Inherit Doc

  Inherited from CategoryBrowser.\_prepareContext

### `Abstract`\_renderHTML

* \_renderHTML(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html),  
  Â Â Â Â options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html),  
  ): Promise<any>

  Render an HTMLElement for the Application.
  An Application subclass must implement this method in order for the Application to be renderable.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)

    Context data for the render operation
  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html)

    Options which configure application rendering behavior

  #### Returns Promise<any>

  The result of HTML rendering may be implementation specific.
  Whatever value is returned here is passed to \_replaceHTML

  Inherited from CategoryBrowser.\_renderHTML

### \_tearDown

* \_tearDown(options: any): void

  #### Parameters

  + options: any

  #### Returns void

  #### Inherit Doc

  Inherited from CategoryBrowser.\_tearDown

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

  Inherited from CategoryBrowser.addEventListener

### bringToFront

* bringToFront(): void

  Bring this Application window to the front of the rendering stack by increasing its z-index.
  Once ApplicationV1 is deprecated we should switch from \_maxZ to ApplicationV2#maxZ
  We should also eliminate ui.activeWindow in favor of only ApplicationV2#frontApp

  #### Returns void

  Inherited from CategoryBrowser.bringToFront

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

  Inherited from CategoryBrowser.changeTab

### close

* close(options?: Partial<[ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.html)>): Promise<[SettingsConfig](foundry.applications.settings.SettingsConfig.html)>

  Close the Application, removing it from the DOM.

  #### Parameters

  + `Optional`options: Partial<[ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.html)> = {}

    Options which modify how the application is closed.

  #### Returns Promise<[SettingsConfig](foundry.applications.settings.SettingsConfig.html)>

  A Promise which resolves to the closed Application instance

  Inherited from CategoryBrowser.close

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

  Inherited from CategoryBrowser.dispatchEvent

### maximize

* maximize(): Promise<void>

  Restore the Application to its original dimensions.

  #### Returns Promise<void>

  Inherited from CategoryBrowser.maximize

### minimize

* minimize(): Promise<void>

  Minimize the Application, collapsing it to a minimal header.

  #### Returns Promise<void>

  Inherited from CategoryBrowser.minimize

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

  Inherited from CategoryBrowser.removeEventListener

### render

* render(options: any): Promise<[SettingsConfig](foundry.applications.settings.SettingsConfig.html)>

  #### Parameters

  + options: any

  #### Returns Promise<[SettingsConfig](foundry.applications.settings.SettingsConfig.html)>

  #### Inherit Doc

  Inherited from CategoryBrowser.render

### search

* search(query: string): void

  Perform a text search without a `KeyboardEvent`.

  #### Parameters

  + query: string

  #### Returns void

  Inherited from CategoryBrowser.search

### setPosition

* setPosition(position?: Partial<[ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)>): void | [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)

  Update the Application element position using provided data which is merged with the prior position.

  #### Parameters

  + `Optional`position: Partial<[ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)>

    New Application positioning data

  #### Returns void | [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)

  The updated application position

  Inherited from CategoryBrowser.setPosition

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

  Inherited from CategoryBrowser.submit

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

  Inherited from CategoryBrowser.toggleControls

### `Protected`\_attachFrameListeners

* \_attachFrameListeners(): void

  `Protected`

  Attach event listeners to the Application frame.

  #### Returns void

  Inherited from CategoryBrowser.\_attachFrameListeners

### `Protected`\_canRender

* \_canRender(options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html)): false | void

  `Protected`

  Test whether this Application is allowed to be rendered.

  #### Parameters

  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html)

    Provided render options

  #### Returns false | void

  Return false to prevent rendering

  #### Throws

  An Error to display a warning message

  Inherited from CategoryBrowser.\_canRender

### `Protected`\_categorizeEntry

* \_categorizeEntry(namespace: string): { id: string; label: string }

  `Protected`

  Classify what Category an Action belongs to

  #### Parameters

  + namespace: string

    The entry to classify

  #### Returns { id: string; label: string }

  The category the entry belongs to

### `Protected`\_configureRenderOptions

* \_configureRenderOptions(options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html)): void

  `Protected`

  Modify the provided options passed to a render request.

  #### Parameters

  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html)

    Options which configure application rendering behavior

  #### Returns void

  Inherited from CategoryBrowser.\_configureRenderOptions

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

  Inherited from CategoryBrowser.\_createContextMenu

### `Protected`\_getHeaderControls

* \_getHeaderControls(): [ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html)[]

  `Protected`

  Configure the array of header control menu options

  #### Returns [ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html)[]

  Inherited from CategoryBrowser.\_getHeaderControls

### `Protected`\_getTabsConfig

* \_getTabsConfig(group: string): null | [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.html)

  `Protected`

  Get the configuration for a tabs group.

  #### Parameters

  + group: string

    The ID of a tabs group

  #### Returns null | [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.html)

  Inherited from CategoryBrowser.\_getTabsConfig

### `Protected`\_headerControlButtons

* \_headerControlButtons(): Generator<[ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html), any, any>

  `Protected`

  Iterate over header control buttons, filtering for controls which are visible for the current client.

  #### Returns Generator<[ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html), any, any>

  #### Yields

  Inherited from CategoryBrowser.\_headerControlButtons

### `Protected`\_insertElement

* \_insertElement(element: HTMLElement): void

  `Protected`

  Insert the application HTML element into the DOM.
  Subclasses may override this method to customize how the application is inserted.

  #### Parameters

  + element: HTMLElement

    The element to insert

  #### Returns void

  Inherited from CategoryBrowser.\_insertElement

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

  Inherited from CategoryBrowser.\_onChangeForm

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

  Inherited from CategoryBrowser.\_onClickAction

### `Protected`\_onClickTab

* \_onClickTab(event: PointerEvent): void

  `Protected`

  Handle click events on a tab within the Application.

  #### Parameters

  + event: PointerEvent

  #### Returns void

  Inherited from CategoryBrowser.\_onClickTab

### `Protected`\_onClose

* \_onClose(options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html)): void

  `Protected`

  Actions performed after closing the Application.
  Post-close steps are not awaited by the close process.

  #### Parameters

  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html)

    Provided render options

  #### Returns void

  Inherited from CategoryBrowser.\_onClose

### `Protected`\_onFirstRender

* \_onFirstRender(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html),  
  Â Â Â Â options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html),  
  ): Promise<void>

  `Protected`

  Actions performed after a first render of the Application.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)

    Prepared context data
  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html)

    Provided render options

  #### Returns Promise<void>

  Inherited from CategoryBrowser.\_onFirstRender

### `Protected`\_onPosition

* \_onPosition(position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)): void

  `Protected`

  Actions performed after the Application is re-positioned.

  #### Parameters

  + position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)

    The requested application position

  #### Returns void

  Inherited from CategoryBrowser.\_onPosition

### `Protected`\_onSearchFilter

* \_onSearchFilter(  
  Â Â Â Â event: null | KeyboardEvent,  
  Â Â Â Â query: string,  
  Â Â Â Â rgx: RegExp,  
  Â Â Â Â content: HTMLElement,  
  ): void

  #### Parameters

  + event: null | KeyboardEvent
  + query: string
  + rgx: RegExp
  + content: HTMLElement

  #### Returns void

  Inherited from CategoryBrowser.\_onSearchFilter

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

  Inherited from CategoryBrowser.\_onSubmitForm

### `Protected`\_postRender

* \_postRender(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html),  
  Â Â Â Â options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html),  
  ): Promise<void>

  `Protected`

  Perform post-render finalization actions.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)

    Prepared context data.
  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html)

    Provided render options.

  #### Returns Promise<void>

  Inherited from CategoryBrowser.\_postRender

### `Protected`\_preClose

* \_preClose(options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html)): Promise<void>

  `Protected`

  Actions performed before closing the Application.
  Pre-close steps are awaited by the close process.

  #### Parameters

  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html)

    Provided render options

  #### Returns Promise<void>

  Inherited from CategoryBrowser.\_preClose

### `Protected`\_preFirstRender

* \_preFirstRender(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html),  
  Â Â Â Â options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html),  
  ): Promise<void>

  `Protected`

  Actions performed before a first render of the Application.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)

    Prepared context data
  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html)

    Provided render options

  #### Returns Promise<void>

  Inherited from CategoryBrowser.\_preFirstRender

### `Protected`\_prepareTabs

* \_prepareTabs(group: string): Record<string, [ApplicationTab](../interfaces/foundry.applications.types.ApplicationTab.html)>

  `Protected`

  Prepare application tab data for a single tab group.

  #### Parameters

  + group: string

    The ID of the tab group to prepare

  #### Returns Record<string, [ApplicationTab](../interfaces/foundry.applications.types.ApplicationTab.html)>

  Inherited from CategoryBrowser.\_prepareTabs

### `Protected`\_prePosition

* \_prePosition(position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)): void

  `Protected`

  Actions performed before the Application is re-positioned.
  Pre-position steps are not awaited because setPosition is synchronous.

  #### Parameters

  + position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)

    The requested application position

  #### Returns void

  Inherited from CategoryBrowser.\_prePosition

### `Protected`\_preRender

* \_preRender(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html),  
  Â Â Â Â options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html),  
  ): Promise<void>

  `Protected`

  Actions performed before any render of the Application.
  Pre-render steps are awaited by the render process.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)

    Prepared context data
  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html)

    Provided render options

  #### Returns Promise<void>

  Inherited from CategoryBrowser.\_preRender

### `Protected`\_removeElement

* \_removeElement(element: HTMLElement): void

  `Protected`

  Remove the application HTML element from the DOM.
  Subclasses may override this method to customize how the application element is removed.

  #### Parameters

  + element: HTMLElement

    The element to be removed

  #### Returns void

  Inherited from CategoryBrowser.\_removeElement

### `Protected`\_renderFrame

* \_renderFrame(options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html)): Promise<HTMLElement>

  `Protected`

  Render the outer framing HTMLElement which wraps the inner HTML of the Application.

  #### Parameters

  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html)

    Options which configure application rendering behavior

  #### Returns Promise<HTMLElement>

  Inherited from CategoryBrowser.\_renderFrame

### `Protected`\_renderHeaderControl

* \_renderHeaderControl(control: [ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html)): HTMLLIElement

  `Protected`

  Render a header control button.

  #### Parameters

  + control: [ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html)

  #### Returns HTMLLIElement

  Inherited from CategoryBrowser.\_renderHeaderControl

### `Protected`\_replaceHTML

* \_replaceHTML(  
  Â Â Â Â result: any,  
  Â Â Â Â content: HTMLElement,  
  Â Â Â Â options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html),  
  ): void

  `Protected`

  Replace the HTML of the application with the result provided by the rendering backend.
  An Application subclass should implement this method in order for the Application to be renderable.

  #### Parameters

  + result: any

    The result returned by the application rendering backend
  + content: HTMLElement

    The content element into which the rendered result must be inserted
  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html)

    Options which configure application rendering behavior

  #### Returns void

  Inherited from CategoryBrowser.\_replaceHTML

### `Protected`\_sortCategories

* \_sortCategories(  
  Â Â Â Â a: { id: string; label: string },  
  Â Â Â Â b: { id: string; label: string },  
  ): number

  `Protected`

  Sort categories in order of core, system, and finally modules.

  #### Parameters

  + a: { id: string; label: string }
  + b: { id: string; label: string }

  #### Returns number

  Overrides CategoryBrowser.\_sortCategories

### `Protected`\_updateFrame

* \_updateFrame(options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html)): void

  `Protected`

  When the Application is rendered, optionally update aspects of the window frame.

  #### Parameters

  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html)

    Options provided at render-time

  #### Returns void

  Inherited from CategoryBrowser.\_updateFrame

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

  Inherited from CategoryBrowser.\_updatePosition

### `Static`inheritanceChain

* inheritanceChain(): Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.html), void, unknown>

  Iterate over the inheritance chain of this Application.
  The chain includes this Application itself and all parents until the base application is encountered.

  #### Returns Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.html), void, unknown>

  #### See

  [ApplicationV2.BASE\_APPLICATION](foundry.applications.api.ApplicationV2.html#base_application)

  #### Yields

  Inherited from CategoryBrowser.inheritanceChain

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

  Inherited from CategoryBrowser.parseCSSDimension

### `Static`reloadConfirm

* reloadConfirm(options?: { world?: boolean }): Promise<void>

  Confirm if the user wishes to reload the application.

  #### Parameters

  + `Optional`options: { world?: boolean } = {}

    Additional options to configure the prompt.

    - ##### `Optional`world?: boolean

      Whether to reload all connected clients as well.

  #### Returns Promise<void>

### `Static`waitForImages

* waitForImages(element: HTMLElement): Promise<void>

  Wait for any images in the given element to load.

  #### Parameters

  + element: HTMLElement

    The element.

  #### Returns Promise<void>

  Inherited from CategoryBrowser.waitForImages