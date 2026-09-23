---
title: "SceneNavigation | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.applications.ui.SceneNavigation.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [applications](../modules/foundry.applications.html)
* [ui](../modules/foundry.applications.ui.html)
* [SceneNavigation](foundry.applications.ui.SceneNavigation.html)

# Class SceneNavigation

The Scene Navigation UI element.

#### Mixes

HandlebarsApplication

#### Hierarchy ([View Summary](../hierarchy.html#foundry.applications.ui.SceneNavigation))

* [ApplicationV2](foundry.applications.api.ApplicationV2.html)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html), this>
  + SceneNavigation

##### Index

### Constructors

[constructor](foundry.applications.ui.SceneNavigation.html#constructor)

### Properties

[options](foundry.applications.ui.SceneNavigation.html#options)
[position](foundry.applications.ui.SceneNavigation.html#position)
[tabGroups](foundry.applications.ui.SceneNavigation.html#tabgroups)
[\_appId](foundry.applications.ui.SceneNavigation.html#_appid)
[\_maxZ](foundry.applications.ui.SceneNavigation.html#_maxz)
[BASE\_APPLICATION](foundry.applications.ui.SceneNavigation.html#base_application)
[DEFAULT\_OPTIONS](foundry.applications.ui.SceneNavigation.html#default_options)
[emittedEvents](foundry.applications.ui.SceneNavigation.html#emittedevents)
[PARTS](foundry.applications.ui.SceneNavigation.html#parts)
[RENDER\_STATES](foundry.applications.ui.SceneNavigation.html#render_states)
[TABS](foundry.applications.ui.SceneNavigation.html#tabs)

### Accessors

[classList](foundry.applications.ui.SceneNavigation.html#classlist)
[element](foundry.applications.ui.SceneNavigation.html#element)
[expanded](foundry.applications.ui.SceneNavigation.html#expanded)
[form](foundry.applications.ui.SceneNavigation.html#form)
[hasFrame](foundry.applications.ui.SceneNavigation.html#hasframe)
[id](foundry.applications.ui.SceneNavigation.html#id)
[minimized](foundry.applications.ui.SceneNavigation.html#minimized)
[rendered](foundry.applications.ui.SceneNavigation.html#rendered)
[state](foundry.applications.ui.SceneNavigation.html#state)
[title](foundry.applications.ui.SceneNavigation.html#title)
[window](foundry.applications.ui.SceneNavigation.html#window)

### Methods

[\_awaitTransition](foundry.applications.ui.SceneNavigation.html#_awaittransition)
[\_doEvent](foundry.applications.ui.SceneNavigation.html#_doevent)
[\_onFirstRender](foundry.applications.ui.SceneNavigation.html#_onfirstrender)
[\_onRender](foundry.applications.ui.SceneNavigation.html#_onrender)
[\_prepareContext](foundry.applications.ui.SceneNavigation.html#_preparecontext)
[\_renderHTML](foundry.applications.ui.SceneNavigation.html#_renderhtml)
[addEventListener](foundry.applications.ui.SceneNavigation.html#addeventlistener)
[bringToFront](foundry.applications.ui.SceneNavigation.html#bringtofront)
[changeTab](foundry.applications.ui.SceneNavigation.html#changetab)
[close](foundry.applications.ui.SceneNavigation.html#close)
[collapse](foundry.applications.ui.SceneNavigation.html#collapse)
[dispatchEvent](foundry.applications.ui.SceneNavigation.html#dispatchevent)
[expand](foundry.applications.ui.SceneNavigation.html#expand)
[maximize](foundry.applications.ui.SceneNavigation.html#maximize)
[minimize](foundry.applications.ui.SceneNavigation.html#minimize)
[removeEventListener](foundry.applications.ui.SceneNavigation.html#removeeventlistener)
[render](foundry.applications.ui.SceneNavigation.html#render)
[setPosition](foundry.applications.ui.SceneNavigation.html#setposition)
[submit](foundry.applications.ui.SceneNavigation.html#submit)
[toggleControls](foundry.applications.ui.SceneNavigation.html#togglecontrols)
[toggleExpanded](foundry.applications.ui.SceneNavigation.html#toggleexpanded)
[\_attachFrameListeners](foundry.applications.ui.SceneNavigation.html#_attachframelisteners)
[\_canRender](foundry.applications.ui.SceneNavigation.html#_canrender)
[\_configureRenderOptions](foundry.applications.ui.SceneNavigation.html#_configurerenderoptions)
[\_createContextMenu](foundry.applications.ui.SceneNavigation.html#_createcontextmenu)
[\_getContextMenuOptions](foundry.applications.ui.SceneNavigation.html#_getcontextmenuoptions)
[\_getHeaderControls](foundry.applications.ui.SceneNavigation.html#_getheadercontrols)
[\_getTabsConfig](foundry.applications.ui.SceneNavigation.html#_gettabsconfig)
[\_headerControlButtons](foundry.applications.ui.SceneNavigation.html#_headercontrolbuttons)
[\_initializeApplicationOptions](foundry.applications.ui.SceneNavigation.html#_initializeapplicationoptions)
[\_insertElement](foundry.applications.ui.SceneNavigation.html#_insertelement)
[\_onChangeForm](foundry.applications.ui.SceneNavigation.html#_onchangeform)
[\_onClickAction](foundry.applications.ui.SceneNavigation.html#_onclickaction)
[\_onClickTab](foundry.applications.ui.SceneNavigation.html#_onclicktab)
[\_onClose](foundry.applications.ui.SceneNavigation.html#_onclose)
[\_onPosition](foundry.applications.ui.SceneNavigation.html#_onposition)
[\_onSubmitForm](foundry.applications.ui.SceneNavigation.html#_onsubmitform)
[\_postRender](foundry.applications.ui.SceneNavigation.html#_postrender)
[\_preClose](foundry.applications.ui.SceneNavigation.html#_preclose)
[\_preFirstRender](foundry.applications.ui.SceneNavigation.html#_prefirstrender)
[\_prepareTabs](foundry.applications.ui.SceneNavigation.html#_preparetabs)
[\_prePosition](foundry.applications.ui.SceneNavigation.html#_preposition)
[\_preRender](foundry.applications.ui.SceneNavigation.html#_prerender)
[\_removeElement](foundry.applications.ui.SceneNavigation.html#_removeelement)
[\_renderFrame](foundry.applications.ui.SceneNavigation.html#_renderframe)
[\_renderHeaderControl](foundry.applications.ui.SceneNavigation.html#_renderheadercontrol)
[\_replaceHTML](foundry.applications.ui.SceneNavigation.html#_replacehtml)
[\_tearDown](foundry.applications.ui.SceneNavigation.html#_teardown)
[\_updateFrame](foundry.applications.ui.SceneNavigation.html#_updateframe)
[\_updatePosition](foundry.applications.ui.SceneNavigation.html#_updateposition)
[inheritanceChain](foundry.applications.ui.SceneNavigation.html#inheritancechain)
[parseCSSDimension](foundry.applications.ui.SceneNavigation.html#parsecssdimension)
[waitForImages](foundry.applications.ui.SceneNavigation.html#waitforimages)

## Constructors

### constructor

* new SceneNavigation(  
  Â Â Â Â options?: Partial<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html)>,  
  ): [SceneNavigation](foundry.applications.ui.SceneNavigation.html)

  Applications are constructed by providing an object of configuration options.

  #### Parameters

  + `Optional`options: Partial<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html)> = {}

    Options used to configure the Application instance

  #### Returns [SceneNavigation](foundry.applications.ui.SceneNavigation.html)

  Inherited from HandlebarsApplicationMixin(ApplicationV2).constructor

## Properties

### options

options: Readonly<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html)>

Application instance configuration options.

Inherited from HandlebarsApplicationMixin(ApplicationV2).options

### position

position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html) = ...

The current position of the application with respect to the window.document.body.

Inherited from HandlebarsApplicationMixin(ApplicationV2).position

### tabGroups

tabGroups: Record<string, null | string> = ...

If this Application uses tabbed navigation groups, this mapping is updated whenever the changeTab method is called.
Reports the active tab for each group, with a value of `null` indicating no tab is active.
Subclasses may override this property to define default tabs for each group.

Inherited from HandlebarsApplicationMixin(ApplicationV2).tabGroups

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
Â Â Â Â Â Â Â Â toggleExpand: (...this: any) => void;  
Â Â Â Â Â Â Â Â viewScene: (...this: any, event: PointerEvent) => Promise<void>;  
Â Â Â Â };  
Â Â Â Â classes: string[];  
Â Â Â Â id: string;  
Â Â Â Â tag: string;  
Â Â Â Â window: { frame: boolean; positioned: boolean };  
} = ...

#### Inherit Doc

Overrides HandlebarsApplicationMixin(ApplicationV2).DEFAULT\_OPTIONS

### `Static`emittedEvents

emittedEvents: readonly ["render", "close", "position"] = ...

Inherited from HandlebarsApplicationMixin(ApplicationV2).emittedEvents

### `Static`PARTS

PARTS: { scenes: { root: boolean; template: string } } = ...

Overrides HandlebarsApplicationMixin(ApplicationV2).PARTS

### `Static`RENDER\_STATES

RENDER\_STATES: Record<string, number> = ...

The sequence of rendering states that describe the Application life-cycle.

Inherited from HandlebarsApplicationMixin(ApplicationV2).RENDER\_STATES

### `Static`TABS

TABS: Record<string, [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.html)> = {}

Configuration of application tabs, with an entry per tab group.

Inherited from HandlebarsApplicationMixin(ApplicationV2).TABS

## Accessors

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

### expanded

* get expanded(): boolean

  Whether the scene navigation is currently expanded.

  #### Returns boolean

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

### state

* get state(): number

  The current render state of the Application.

  #### Returns number

  Inherited from HandlebarsApplicationMixin(ApplicationV2).state

### title

* get title(): string

  A convenience reference to the title of the Application window.

  #### Returns string

  Inherited from HandlebarsApplicationMixin(ApplicationV2).title

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

### \_onFirstRender

* \_onFirstRender(\_context: any, \_options: any): Promise<void>

  #### Parameters

  + \_context: any
  + \_options: any

  #### Returns Promise<void>

  Overrides HandlebarsApplicationMixin(ApplicationV2).\_onFirstRender

### \_onRender

* \_onRender(\_context: any, \_options: any): Promise<void>

  #### Parameters

  + \_context: any
  + \_options: any

  #### Returns Promise<void>

  Overrides HandlebarsApplicationMixin(ApplicationV2).\_onRender

### \_prepareContext

* \_prepareContext(  
  Â Â Â Â \_options: any,  
  ): Promise<  
  Â Â Â Â { canExpand: number; scenes: { active: object[]; inactive: object[] } },  
  >

  #### Parameters

  + \_options: any

  #### Returns Promise<{ canExpand: number; scenes: { active: object[]; inactive: object[] } }>

  Overrides HandlebarsApplicationMixin(ApplicationV2).\_prepareContext

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

  Inherited from HandlebarsApplicationMixin(ApplicationV2).changeTab

### close

* close(options?: Partial<[ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.html)>): Promise<[SceneNavigation](foundry.applications.ui.SceneNavigation.html)>

  Close the Application, removing it from the DOM.

  #### Parameters

  + `Optional`options: Partial<[ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.html)> = {}

    Options which modify how the application is closed.

  #### Returns Promise<[SceneNavigation](foundry.applications.ui.SceneNavigation.html)>

  A Promise which resolves to the closed Application instance

  Inherited from HandlebarsApplicationMixin(ApplicationV2).close

### collapse

* collapse(): Promise<void>

  Collapse Scene Navigation, hiding inactive Scenes.

  #### Returns Promise<void>

  #### Fires

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

### expand

* expand(): void

  Expand Scene Navigation, displaying inactive Scenes.

  #### Returns void

  #### Fires

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

* render(  
  Â Â Â Â options?: boolean | [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html),  
  Â Â Â Â \_options?: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html),  
  ): Promise<[SceneNavigation](foundry.applications.ui.SceneNavigation.html)>

  Render the Application, creating its HTMLElement and replacing its innerHTML.
  Add it to the DOM if it is not currently rendered and rendering is forced. Otherwise, re-render its contents.

  #### Parameters

  + `Optional`options: boolean | [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html) = {}

    Options which configure application rendering behavior.
    A boolean is interpreted as the "force" option.
  + `Optional`\_options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html) = {}

    Legacy options for backwards-compatibility with the original
    ApplicationV1#render signature.

  #### Returns Promise<[SceneNavigation](foundry.applications.ui.SceneNavigation.html)>

  A Promise which resolves to the rendered Application instance

  Inherited from HandlebarsApplicationMixin(ApplicationV2).render

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

### toggleExpanded

* toggleExpanded(expanded?: boolean): void

  Toggle the expanded state of scene navigation.

  #### Parameters

  + `Optional`expanded: boolean

    Force the expanded state to the provided value, otherwise toggle the state.

  #### Returns void

  #### Fires

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

### `Protected`\_getContextMenuOptions

* \_getContextMenuOptions(): ContextMenuEntry[]

  `Protected`

  Get the set of ContextMenu options which should be applied for Scenes in the menu.

  #### Returns ContextMenuEntry[]

  The Array of context options passed to the ContextMenu instance

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

### `Protected`\_onPosition

* \_onPosition(position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)): void

  `Protected`

  Actions performed after the Application is re-positioned.

  #### Parameters

  + position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)

    The requested application position

  #### Returns void

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_onPosition

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

### `Protected`\_prepareTabs

* \_prepareTabs(group: string): Record<string, [ApplicationTab](../interfaces/foundry.applications.types.ApplicationTab.html)>

  `Protected`

  Prepare application tab data for a single tab group.

  #### Parameters

  + group: string

    The ID of the tab group to prepare

  #### Returns Record<string, [ApplicationTab](../interfaces/foundry.applications.types.ApplicationTab.html)>

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_prepareTabs

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

### `Protected`\_tearDown

* \_tearDown(options: [ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.html)): void

  `Protected`

  Remove elements from the DOM and trigger garbage collection as part of application closure.

  #### Parameters

  + options: [ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.html)

  #### Returns void

  Inherited from HandlebarsApplicationMixin(ApplicationV2).\_tearDown

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

### `Static`inheritanceChain

* inheritanceChain(): Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.html), void, unknown>

  Iterate over the inheritance chain of this Application.
  The chain includes this Application itself and all parents until the base application is encountered.

  #### Returns Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.html), void, unknown>

  #### See

  [ApplicationV2.BASE\_APPLICATION](foundry.applications.api.ApplicationV2.html#base_application)

  #### Yields

  Inherited from HandlebarsApplicationMixin(ApplicationV2).inheritanceChain

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

### `Static`waitForImages

* waitForImages(element: HTMLElement): Promise<void>

  Wait for any images in the given element to load.

  #### Parameters

  + element: HTMLElement

    The element.

  #### Returns Promise<void>

  Inherited from HandlebarsApplicationMixin(ApplicationV2).waitForImages