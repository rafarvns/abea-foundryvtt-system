---
title: "ApplicationV2 | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.applications.api.ApplicationV2.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [applications](../modules/foundry.applications.html)
* [api](../modules/foundry.applications.api.html)
* [ApplicationV2](foundry.applications.api.ApplicationV2.html)

# Class ApplicationV2<Configuration, RenderOptions>

The Application class is responsible for rendering an HTMLElement into the Foundry Virtual Tabletop user interface.

#### Type Parameters

* Configuration = [ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html)
* RenderOptions = [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)

#### Hierarchy ([View Summary](../hierarchy.html#foundry.applications.api.ApplicationV2))

* [EventEmitter](foundry.EventEmitter.html)<Function, this>
  + ApplicationV2
    - [DialogV2](foundry.applications.api.DialogV2.html)
    - [DocumentSheetV2](foundry.applications.api.DocumentSheetV2.html)
    - [CategoryBrowser](foundry.applications.api.CategoryBrowser.html)
    - [CameraPopout](foundry.applications.apps.av.CameraPopout.html)
    - [CameraViews](foundry.applications.apps.av.CameraViews.html)
    - [CombatTrackerConfig](foundry.applications.apps.CombatTrackerConfig.html)
    - [CompendiumArtConfig](foundry.applications.apps.CompendiumArtConfig.html)
    - [DocumentSheetConfig](foundry.applications.apps.DocumentSheetConfig.html)
    - [FilePicker](foundry.applications.apps.FilePicker.html)
    - [ImagePopout](foundry.applications.apps.ImagePopout.html)
    - [PermissionConfig](foundry.applications.apps.PermissionConfig.html)
    - [RollResolver](foundry.applications.dice.RollResolver.html)
    - [HeadsUpDisplayContainer](foundry.applications.hud.HeadsUpDisplayContainer.html)
    - [BasePlaceableHUD](foundry.applications.hud.BasePlaceableHUD.html)
    - [DependencyResolution](foundry.applications.settings.DependencyResolution.html)
    - [AVConfig](foundry.applications.settings.menus.AVConfig.html)
    - [PrototypeTokenConfig](foundry.applications.sheets.PrototypeTokenConfig.html)
    - [ChatPopout](foundry.applications.sidebar.apps.ChatPopout.html)
    - [FrameViewer](foundry.applications.sidebar.apps.FrameViewer.html)
    - [ModuleManagement](foundry.applications.sidebar.apps.ModuleManagement.html)
    - [Sidebar](foundry.applications.sidebar.Sidebar.html)
    - [AbstractSidebarTab](foundry.applications.sidebar.AbstractSidebarTab.html)
    - [GamePause](foundry.applications.ui.GamePause.html)
    - [Hotbar](foundry.applications.ui.Hotbar.html)
    - [MainMenu](foundry.applications.ui.MainMenu.html)
    - [Players](foundry.applications.ui.Players.html)
    - [RegionLegend](foundry.applications.ui.RegionLegend.html)
    - [SceneControls](foundry.applications.ui.SceneControls.html)
    - [SceneNavigation](foundry.applications.ui.SceneNavigation.html)

##### Index

### Constructors

[constructor](foundry.applications.api.ApplicationV2.html#constructor)

### Properties

[options](foundry.applications.api.ApplicationV2.html#options)
[position](foundry.applications.api.ApplicationV2.html#position)
[tabGroups](foundry.applications.api.ApplicationV2.html#tabgroups)
[\_appId](foundry.applications.api.ApplicationV2.html#_appid)
[\_maxZ](foundry.applications.api.ApplicationV2.html#_maxz)
[BASE\_APPLICATION](foundry.applications.api.ApplicationV2.html#base_application)
[DEFAULT\_OPTIONS](foundry.applications.api.ApplicationV2.html#default_options)
[emittedEvents](foundry.applications.api.ApplicationV2.html#emittedevents)
[RENDER\_STATES](foundry.applications.api.ApplicationV2.html#render_states)
[TABS](foundry.applications.api.ApplicationV2.html#tabs)

### Accessors

[classList](foundry.applications.api.ApplicationV2.html#classlist)
[element](foundry.applications.api.ApplicationV2.html#element)
[form](foundry.applications.api.ApplicationV2.html#form)
[hasFrame](foundry.applications.api.ApplicationV2.html#hasframe)
[id](foundry.applications.api.ApplicationV2.html#id)
[minimized](foundry.applications.api.ApplicationV2.html#minimized)
[rendered](foundry.applications.api.ApplicationV2.html#rendered)
[state](foundry.applications.api.ApplicationV2.html#state)
[title](foundry.applications.api.ApplicationV2.html#title)
[window](foundry.applications.api.ApplicationV2.html#window)

### Methods

[\_awaitTransition](foundry.applications.api.ApplicationV2.html#_awaittransition)
[\_doEvent](foundry.applications.api.ApplicationV2.html#_doevent)
[\_renderHTML](foundry.applications.api.ApplicationV2.html#_renderhtml)
[addEventListener](foundry.applications.api.ApplicationV2.html#addeventlistener)
[bringToFront](foundry.applications.api.ApplicationV2.html#bringtofront)
[changeTab](foundry.applications.api.ApplicationV2.html#changetab)
[close](foundry.applications.api.ApplicationV2.html#close)
[dispatchEvent](foundry.applications.api.ApplicationV2.html#dispatchevent)
[maximize](foundry.applications.api.ApplicationV2.html#maximize)
[minimize](foundry.applications.api.ApplicationV2.html#minimize)
[removeEventListener](foundry.applications.api.ApplicationV2.html#removeeventlistener)
[render](foundry.applications.api.ApplicationV2.html#render)
[setPosition](foundry.applications.api.ApplicationV2.html#setposition)
[submit](foundry.applications.api.ApplicationV2.html#submit)
[toggleControls](foundry.applications.api.ApplicationV2.html#togglecontrols)
[\_attachFrameListeners](foundry.applications.api.ApplicationV2.html#_attachframelisteners)
[\_canRender](foundry.applications.api.ApplicationV2.html#_canrender)
[\_configureRenderOptions](foundry.applications.api.ApplicationV2.html#_configurerenderoptions)
[\_createContextMenu](foundry.applications.api.ApplicationV2.html#_createcontextmenu)
[\_getHeaderControls](foundry.applications.api.ApplicationV2.html#_getheadercontrols)
[\_getTabsConfig](foundry.applications.api.ApplicationV2.html#_gettabsconfig)
[\_headerControlButtons](foundry.applications.api.ApplicationV2.html#_headercontrolbuttons)
[\_initializeApplicationOptions](foundry.applications.api.ApplicationV2.html#_initializeapplicationoptions)
[\_insertElement](foundry.applications.api.ApplicationV2.html#_insertelement)
[\_onChangeForm](foundry.applications.api.ApplicationV2.html#_onchangeform)
[\_onClickAction](foundry.applications.api.ApplicationV2.html#_onclickaction)
[\_onClickTab](foundry.applications.api.ApplicationV2.html#_onclicktab)
[\_onClose](foundry.applications.api.ApplicationV2.html#_onclose)
[\_onFirstRender](foundry.applications.api.ApplicationV2.html#_onfirstrender)
[\_onPosition](foundry.applications.api.ApplicationV2.html#_onposition)
[\_onRender](foundry.applications.api.ApplicationV2.html#_onrender)
[\_onSubmitForm](foundry.applications.api.ApplicationV2.html#_onsubmitform)
[\_postRender](foundry.applications.api.ApplicationV2.html#_postrender)
[\_preClose](foundry.applications.api.ApplicationV2.html#_preclose)
[\_preFirstRender](foundry.applications.api.ApplicationV2.html#_prefirstrender)
[\_prepareContext](foundry.applications.api.ApplicationV2.html#_preparecontext)
[\_prepareTabs](foundry.applications.api.ApplicationV2.html#_preparetabs)
[\_prePosition](foundry.applications.api.ApplicationV2.html#_preposition)
[\_preRender](foundry.applications.api.ApplicationV2.html#_prerender)
[\_removeElement](foundry.applications.api.ApplicationV2.html#_removeelement)
[\_renderFrame](foundry.applications.api.ApplicationV2.html#_renderframe)
[\_renderHeaderControl](foundry.applications.api.ApplicationV2.html#_renderheadercontrol)
[\_replaceHTML](foundry.applications.api.ApplicationV2.html#_replacehtml)
[\_tearDown](foundry.applications.api.ApplicationV2.html#_teardown)
[\_updateFrame](foundry.applications.api.ApplicationV2.html#_updateframe)
[\_updatePosition](foundry.applications.api.ApplicationV2.html#_updateposition)
[inheritanceChain](foundry.applications.api.ApplicationV2.html#inheritancechain)
[parseCSSDimension](foundry.applications.api.ApplicationV2.html#parsecssdimension)
[waitForImages](foundry.applications.api.ApplicationV2.html#waitforimages)

## Constructors

### constructor

* new ApplicationV2<  
  Â Â Â Â [Configuration](foundry.applications.api.ApplicationV2.html#constructorapplicationv2configuration) extends  
  Â Â Â Â Â Â Â Â [ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html) = [ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html),  
  Â Â Â Â [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions) extends [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html) = [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html),  
  >(  
  Â Â Â Â options?: Partial<[Configuration](foundry.applications.api.ApplicationV2.html#constructorapplicationv2configuration)>,  
  ): [ApplicationV2](foundry.applications.api.ApplicationV2.html)<[Configuration](foundry.applications.api.ApplicationV2.html#constructorapplicationv2configuration), [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions)>

  Applications are constructed by providing an object of configuration options.

  #### Type Parameters

  + Configuration extends [ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html) = [ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html)
  + RenderOptions extends [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html) = [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)

  #### Parameters

  + `Optional`options: Partial<[Configuration](foundry.applications.api.ApplicationV2.html#constructorapplicationv2configuration)> = {}

    Options used to configure the Application instance

  #### Returns [ApplicationV2](foundry.applications.api.ApplicationV2.html)<[Configuration](foundry.applications.api.ApplicationV2.html#constructorapplicationv2configuration), [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions)>

  Overrides EventEmitterMixin().constructor

## Properties

### options

options: Readonly<[Configuration](foundry.applications.api.ApplicationV2.html#constructorapplicationv2configuration)>

Application instance configuration options.

### position

position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html) = ...

The current position of the application with respect to the window.document.body.

### tabGroups

tabGroups: Record<string, null | string> = ...

If this Application uses tabbed navigation groups, this mapping is updated whenever the changeTab method is called.
Reports the active tab for each group, with a value of `null` indicating no tab is active.
Subclasses may override this property to define default tabs for each group.

### `Static` `Internal`\_appId

\_appId: number = 0

An incrementing integer Application ID.

### `Static` `Internal`\_maxZ

\_maxZ: number = ...

The current maximum z-index of any displayed Application.

### `Static`BASE\_APPLICATION

BASE\_APPLICATION: typeof [ApplicationV2](foundry.applications.api.ApplicationV2.html) = ApplicationV2

Designates which upstream Application class in this class' inheritance chain is the base application.
Any DEFAULT\_OPTIONS of super-classes further upstream of the BASE\_APPLICATION are ignored.
Hook events for super-classes further upstream of the BASE\_APPLICATION are not dispatched.

### `Static`DEFAULT\_OPTIONS

DEFAULT\_OPTIONS: Configuration = ...

The default configuration options which are assigned to every instance of this Application class.

### `Static`emittedEvents

emittedEvents: readonly ["render", "close", "position"] = ...

Overrides EventEmitterMixin().emittedEvents

### `Static`RENDER\_STATES

RENDER\_STATES: Record<string, number> = ...

The sequence of rendering states that describe the Application life-cycle.

### `Static`TABS

TABS: Record<string, [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.html)> = {}

Configuration of application tabs, with an entry per tab group.

## Accessors

### classList

* get classList(): DOMTokenList

  The CSS class list of this Application instance

  #### Returns DOMTokenList

### element

* get element(): HTMLElement

  The HTMLElement which renders this Application into the DOM.

  #### Returns HTMLElement

### form

* get form(): null | HTMLFormElement

  Does this Application have a top-level form element?

  #### Returns null | HTMLFormElement

### hasFrame

* get hasFrame(): boolean

  Does this Application instance render within an outer window frame?

  #### Returns boolean

### id

* get id(): string

  The HTML element ID of this Application instance.
  This provides a readonly view into the internal ID used by this application.
  This getter should not be overridden by subclasses, which should instead configure the ID in `DEFAULT_OPTIONS` or
  by defining a `uniqueId` during `_initializeApplicationOptions`.

  #### Returns string

### minimized

* get minimized(): boolean

  Is this Application instance currently minimized?

  #### Returns boolean

### rendered

* get rendered(): boolean

  Is this Application instance currently rendered?

  #### Returns boolean

### state

* get state(): number

  The current render state of the Application.

  #### Returns number

### title

* get title(): string

  A convenience reference to the title of the Application window.

  #### Returns string

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

### `Abstract`\_renderHTML

* \_renderHTML(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html),  
  Â Â Â Â options: [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions),  
  ): Promise<any>

  Render an HTMLElement for the Application.
  An Application subclass must implement this method in order for the Application to be renderable.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)

    Context data for the render operation
  + options: [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions)

    Options which configure application rendering behavior

  #### Returns Promise<any>

  The result of HTML rendering may be implementation specific.
  Whatever value is returned here is passed to \_replaceHTML

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

  Inherited from EventEmitterMixin().addEventListener

### bringToFront

* bringToFront(): void

  Bring this Application window to the front of the rendering stack by increasing its z-index.
  Once ApplicationV1 is deprecated we should switch from \_maxZ to ApplicationV2#maxZ
  We should also eliminate ui.activeWindow in favor of only ApplicationV2#frontApp

  #### Returns void

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

### close

* close(  
  Â Â Â Â options?: Partial<[ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.html)>,  
  ): Promise<[ApplicationV2](foundry.applications.api.ApplicationV2.html)<[Configuration](foundry.applications.api.ApplicationV2.html#constructorapplicationv2configuration), [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions)>>

  Close the Application, removing it from the DOM.

  #### Parameters

  + `Optional`options: Partial<[ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.html)> = {}

    Options which modify how the application is closed.

  #### Returns Promise<[ApplicationV2](foundry.applications.api.ApplicationV2.html)<[Configuration](foundry.applications.api.ApplicationV2.html#constructorapplicationv2configuration), [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions)>>

  A Promise which resolves to the closed Application instance

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

  Inherited from EventEmitterMixin().dispatchEvent

### maximize

* maximize(): Promise<void>

  Restore the Application to its original dimensions.

  #### Returns Promise<void>

### minimize

* minimize(): Promise<void>

  Minimize the Application, collapsing it to a minimal header.

  #### Returns Promise<void>

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

  Inherited from EventEmitterMixin().removeEventListener

### render

* render(  
  Â Â Â Â options?: boolean | [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions),  
  Â Â Â Â \_options?: [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions),  
  ): Promise<[ApplicationV2](foundry.applications.api.ApplicationV2.html)<[Configuration](foundry.applications.api.ApplicationV2.html#constructorapplicationv2configuration), [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions)>>

  Render the Application, creating its HTMLElement and replacing its innerHTML.
  Add it to the DOM if it is not currently rendered and rendering is forced. Otherwise, re-render its contents.

  #### Parameters

  + `Optional`options: boolean | [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions) = {}

    Options which configure application rendering behavior.
    A boolean is interpreted as the "force" option.
  + `Optional`\_options: [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions) = {}

    Legacy options for backwards-compatibility with the original
    ApplicationV1#render signature.

  #### Returns Promise<[ApplicationV2](foundry.applications.api.ApplicationV2.html)<[Configuration](foundry.applications.api.ApplicationV2.html#constructorapplicationv2configuration), [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions)>>

  A Promise which resolves to the rendered Application instance

### setPosition

* setPosition(position?: Partial<[ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)>): void | [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)

  Update the Application element position using provided data which is merged with the prior position.

  #### Parameters

  + `Optional`position: Partial<[ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)>

    New Application positioning data

  #### Returns void | [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)

  The updated application position

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

### `Protected`\_attachFrameListeners

* \_attachFrameListeners(): void

  `Protected`

  Attach event listeners to the Application frame.

  #### Returns void

### `Protected`\_canRender

* \_canRender(options: [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions)): false | void

  `Protected`

  Test whether this Application is allowed to be rendered.

  #### Parameters

  + options: [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions)

    Provided render options

  #### Returns false | void

  Return false to prevent rendering

  #### Throws

  An Error to display a warning message

### `Protected`\_configureRenderOptions

* \_configureRenderOptions(options: [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions)): void

  `Protected`

  Modify the provided options passed to a render request.

  #### Parameters

  + options: [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions)

    Options which configure application rendering behavior

  #### Returns void

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

### `Protected`\_getHeaderControls

* \_getHeaderControls(): [ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html)[]

  `Protected`

  Configure the array of header control menu options

  #### Returns [ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html)[]

### `Protected`\_getTabsConfig

* \_getTabsConfig(group: string): null | [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.html)

  `Protected`

  Get the configuration for a tabs group.

  #### Parameters

  + group: string

    The ID of a tabs group

  #### Returns null | [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.html)

### `Protected`\_headerControlButtons

* \_headerControlButtons(): Generator<[ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html), any, any>

  `Protected`

  Iterate over header control buttons, filtering for controls which are visible for the current client.

  #### Returns Generator<[ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html), any, any>

  #### Yields

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

### `Protected`\_insertElement

* \_insertElement(element: HTMLElement): void

  `Protected`

  Insert the application HTML element into the DOM.
  Subclasses may override this method to customize how the application is inserted.

  #### Parameters

  + element: HTMLElement

    The element to insert

  #### Returns void

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

### `Protected`\_onClickTab

* \_onClickTab(event: PointerEvent): void

  `Protected`

  Handle click events on a tab within the Application.

  #### Parameters

  + event: PointerEvent

  #### Returns void

### `Protected`\_onClose

* \_onClose(options: [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions)): void

  `Protected`

  Actions performed after closing the Application.
  Post-close steps are not awaited by the close process.

  #### Parameters

  + options: [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions)

    Provided render options

  #### Returns void

### `Protected`\_onFirstRender

* \_onFirstRender(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html),  
  Â Â Â Â options: [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions),  
  ): Promise<void>

  `Protected`

  Actions performed after a first render of the Application.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)

    Prepared context data
  + options: [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions)

    Provided render options

  #### Returns Promise<void>

### `Protected`\_onPosition

* \_onPosition(position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)): void

  `Protected`

  Actions performed after the Application is re-positioned.

  #### Parameters

  + position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)

    The requested application position

  #### Returns void

### `Protected`\_onRender

* \_onRender(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html),  
  Â Â Â Â options: [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions),  
  ): Promise<void>

  `Protected`

  Actions performed after any render of the Application.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)

    Prepared context data
  + options: [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions)

    Provided render options

  #### Returns Promise<void>

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

### `Protected`\_postRender

* \_postRender(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html),  
  Â Â Â Â options: [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions),  
  ): Promise<void>

  `Protected`

  Perform post-render finalization actions.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)

    Prepared context data.
  + options: [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions)

    Provided render options.

  #### Returns Promise<void>

### `Protected`\_preClose

* \_preClose(options: [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions)): Promise<void>

  `Protected`

  Actions performed before closing the Application.
  Pre-close steps are awaited by the close process.

  #### Parameters

  + options: [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions)

    Provided render options

  #### Returns Promise<void>

### `Protected`\_preFirstRender

* \_preFirstRender(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html),  
  Â Â Â Â options: [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions),  
  ): Promise<void>

  `Protected`

  Actions performed before a first render of the Application.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)

    Prepared context data
  + options: [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions)

    Provided render options

  #### Returns Promise<void>

### `Protected`\_prepareContext

* \_prepareContext(options: [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions)): Promise<[ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)>

  `Protected`

  Prepare application rendering context data for a given render request. If exactly one tab group is configured for
  this application, it will be prepared automatically.

  #### Parameters

  + options: [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions)

    Options which configure application rendering behavior

  #### Returns Promise<[ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)>

  Context data for the render operation

### `Protected`\_prepareTabs

* \_prepareTabs(group: string): Record<string, [ApplicationTab](../interfaces/foundry.applications.types.ApplicationTab.html)>

  `Protected`

  Prepare application tab data for a single tab group.

  #### Parameters

  + group: string

    The ID of the tab group to prepare

  #### Returns Record<string, [ApplicationTab](../interfaces/foundry.applications.types.ApplicationTab.html)>

### `Protected`\_prePosition

* \_prePosition(position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)): void

  `Protected`

  Actions performed before the Application is re-positioned.
  Pre-position steps are not awaited because setPosition is synchronous.

  #### Parameters

  + position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)

    The requested application position

  #### Returns void

### `Protected`\_preRender

* \_preRender(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html),  
  Â Â Â Â options: [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions),  
  ): Promise<void>

  `Protected`

  Actions performed before any render of the Application.
  Pre-render steps are awaited by the render process.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)

    Prepared context data
  + options: [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions)

    Provided render options

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

### `Protected`\_renderFrame

* \_renderFrame(options: [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions)): Promise<HTMLElement>

  `Protected`

  Render the outer framing HTMLElement which wraps the inner HTML of the Application.

  #### Parameters

  + options: [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions)

    Options which configure application rendering behavior

  #### Returns Promise<HTMLElement>

### `Protected`\_renderHeaderControl

* \_renderHeaderControl(control: [ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html)): HTMLLIElement

  `Protected`

  Render a header control button.

  #### Parameters

  + control: [ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html)

  #### Returns HTMLLIElement

### `Protected`\_replaceHTML

* \_replaceHTML(result: any, content: HTMLElement, options: [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions)): void

  `Protected`

  Replace the HTML of the application with the result provided by the rendering backend.
  An Application subclass should implement this method in order for the Application to be renderable.

  #### Parameters

  + result: any

    The result returned by the application rendering backend
  + content: HTMLElement

    The content element into which the rendered result must be inserted
  + options: [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions)

    Options which configure application rendering behavior

  #### Returns void

### `Protected`\_tearDown

* \_tearDown(options: [ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.html)): void

  `Protected`

  Remove elements from the DOM and trigger garbage collection as part of application closure.

  #### Parameters

  + options: [ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.html)

  #### Returns void

### `Protected`\_updateFrame

* \_updateFrame(options: [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions)): void

  `Protected`

  When the Application is rendered, optionally update aspects of the window frame.

  #### Parameters

  + options: [RenderOptions](foundry.applications.api.ApplicationV2.html#constructorapplicationv2renderoptions)

    Options provided at render-time

  #### Returns void

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

### `Static`inheritanceChain

* inheritanceChain(): Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.html), void, unknown>

  Iterate over the inheritance chain of this Application.
  The chain includes this Application itself and all parents until the base application is encountered.

  #### Returns Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.html), void, unknown>

  #### See

  [ApplicationV2.BASE\_APPLICATION](foundry.applications.api.ApplicationV2.html#base_application)

  #### Yields

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

### `Static`waitForImages

* waitForImages(element: HTMLElement): Promise<void>

  Wait for any images in the given element to load.

  #### Parameters

  + element: HTMLElement

    The element.

  #### Returns Promise<void>