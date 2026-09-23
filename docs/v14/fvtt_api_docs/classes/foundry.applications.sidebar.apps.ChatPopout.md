---
title: "ChatPopout | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.applications.sidebar.apps.ChatPopout.html"
category: "classes"
---

# Class ChatPopout

A simple application for rendering a single chat message in its own frame.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.applications.sidebar.apps.ChatPopout))

* [ApplicationV2](foundry.applications.api.ApplicationV2.md)
  + ChatPopout

##### Index

### Properties

[options](#options)
[position](#position)
[tabGroups](#tabgroups)
[\_appId](#_appid)
[\_maxZ](#_maxz)
[BASE\_APPLICATION](#base_application)
[DEFAULT\_OPTIONS](#default_options)
[emittedEvents](#emittedevents)
[RENDER\_STATES](#render_states)
[TABS](#tabs)

### Accessors

[children](#children)
[classList](#classlist)
[element](#element)
[form](#form)
[hasFrame](#hasframe)
[id](#id)
[message](#message)
[minimized](#minimized)
[parent](#parent)
[rendered](#rendered)
[state](#state)
[title](#title)
[window](#window)

### Methods

[\_attachFrameListeners](#_attachframelisteners)
[\_awaitTransition](#_awaittransition)
[\_canDetach](#_candetach)
[\_doEvent](#_doevent)
[\_initializeApplicationOptions](#_initializeapplicationoptions)
[\_onClose](#_onclose)
[\_onFirstRender](#_onfirstrender)
[\_renderHTML](#_renderhtml)
[\_replaceHTML](#_replacehtml)
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
[\_canAttach](#_canattach)
[\_canRender](#_canrender)
[\_configureRenderOptions](#_configurerenderoptions)
[\_createContextMenu](#_createcontextmenu)
[\_getFrameButtons](#_getframebuttons)
[\_getHeaderControls](#_getheadercontrols)
[\_getTabsConfig](#_gettabsconfig)
[\_headerControlButtons](#_headercontrolbuttons)
[\_headerControlContextEntries](#_headercontrolcontextentries)
[\_insertElement](#_insertelement)
[\_onAttach](#_onattach)
[\_onChangeForm](#_onchangeform)
[\_onClickAction](#_onclickaction)
[\_onClickTab](#_onclicktab)
[\_onDetach](#_ondetach)
[\_onPosition](#_onposition)
[\_onRender](#_onrender)
[\_onSubmitForm](#_onsubmitform)
[\_postRender](#_postrender)
[\_preClose](#_preclose)
[\_preFirstRender](#_prefirstrender)
[\_prepareContext](#_preparecontext)
[\_prepareTabs](#_preparetabs)
[\_prePosition](#_preposition)
[\_preRender](#_prerender)
[\_refit](#_refit)
[\_removeElement](#_removeelement)
[\_renderFrame](#_renderframe)
[\_renderFrameButtons](#_renderframebuttons)
[\_renderHeaderControl](#_renderheadercontrol)
[\_tearDown](#_teardown)
[\_updateFrame](#_updateframe)
[\_updatePosition](#_updateposition)
[inheritanceChain](#inheritancechain)
[instances](#instances)
[parseCSSDimension](#parsecssdimension)
[waitForImages](#waitforimages)

## Properties

### options

options: ApplicationConfiguration

Application instance configuration options.

Inherited from ApplicationV2.options

### position

position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md) = ...

The current position of the application with respect to the window.document.body.

Inherited from ApplicationV2.position

### tabGroups

tabGroups: Record<string, string | null> = ...

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

BASE\_APPLICATION: typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md) = ApplicationV2

Designates which upstream Application class in this class' inheritance chain is the base application.
Any DEFAULT\_OPTIONS of super-classes further upstream of the BASE\_APPLICATION are ignored.
Hook events for super-classes further upstream of the BASE\_APPLICATION are not dispatched.

Inherited from ApplicationV2.BASE\_APPLICATION

### `Static`DEFAULT\_OPTIONS

DEFAULT\_OPTIONS: { classes: string[]; position: { width: number } } = ...

Overrides ApplicationV2.DEFAULT\_OPTIONS

### `Static`emittedEvents

emittedEvents: readonly ["prerender", "render", "close", "position"] = ...

Inherited from ApplicationV2.emittedEvents

### `Static`RENDER\_STATES

RENDER\_STATES: Record<string, number> = ...

The sequence of rendering states that describe the Application life-cycle.

Inherited from ApplicationV2.RENDER\_STATES

### `Static`TABS

TABS: Record<string, [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.md)> = {}

Configuration of application tabs, with an entry per tab group.

Inherited from ApplicationV2.TABS

## Accessors

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

  Inherited from ApplicationV2.classList

### element

* get element(): HTMLElement

  The HTMLElement which renders this Application into the DOM.

  #### Returns HTMLElement

  Inherited from ApplicationV2.element

### form

* get form(): HTMLFormElement | null

  Does this Application have a top-level form element?

  #### Returns HTMLFormElement | null

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

### message

* get message(): [documents](../modules/foundry.documents.md).[ChatMessage](foundry.documents.ChatMessage.md)

  The message being rendered.

  #### Returns [documents](../modules/foundry.documents.md).[ChatMessage](foundry.documents.ChatMessage.md)

### minimized

* get minimized(): boolean

  Is this Application instance currently minimized?

  #### Returns boolean

  Inherited from ApplicationV2.minimized

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

  Inherited from ApplicationV2.rendered

### state

* get state(): number

  The current render state of the Application.

  #### Returns number

  Inherited from ApplicationV2.state

### title

* get title(): any

  #### Returns any

  Overrides ApplicationV2.title

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

### \_attachFrameListeners

* \_attachFrameListeners(): void

  #### Returns void

  #### Inherit Doc

  Overrides ApplicationV2.\_attachFrameListeners

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

### \_canDetach

* \_canDetach(): boolean

  Whether this Application is permitted to detach from the main workspace.
  Managed children (those with an active parent) may detach to break the parent link and claim their own window.

  #### Returns boolean

  Inherited from ApplicationV2.\_canDetach

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

### \_initializeApplicationOptions

* \_initializeApplicationOptions(options: any): [ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md)

  #### Parameters

  + options: any

  #### Returns [ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md)

  #### Inherit Doc

  Overrides ApplicationV2.\_initializeApplicationOptions

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

### \_renderHTML

* \_renderHTML(context: any, options: any): Promise<HTMLElement>

  #### Parameters

  + context: any
  + options: any

  #### Returns Promise<HTMLElement>

  Overrides ApplicationV2.\_renderHTML

### \_replaceHTML

* \_replaceHTML(result: any, content: any, options: any): void

  #### Parameters

  + result: any
  + content: any
  + options: any

  #### Returns void

  Overrides ApplicationV2.\_replaceHTML

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

  Inherited from ApplicationV2.addEventListener

### attachWindow

* attachWindow(  
  Â Â Â Â options?: any,  
  ): Promise<  
  Â Â Â Â [ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>,  
  >

  Re-attach a detached application to the main workspace.
  If this application was previously a child and was manually detached, breaking its parent link, this method first
  attempts to re-join the prior parent's window before falling back to the main workspace.

  #### Parameters

  + `Optional`options: any = {}

    Render options.

  #### Returns Promise<[ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>>

  Inherited from ApplicationV2.attachWindow

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

* close(options?: Partial<[ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.md)>): Promise<ChatPopout>

  Close the Application, removing it from the DOM.

  #### Parameters

  + `Optional`options: Partial<[ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.md)> = {}

    Options which modify how the application is closed.

  #### Returns Promise<ChatPopout>

  A Promise which resolves to the closed Application instance

  Inherited from ApplicationV2.close

### detachWindow

* detachWindow(options?: any): Promise<ChatPopout>

  Detach an application from the main workspace, and render it in a separate browser window.
  If this application is a registered child, detaching it breaks the parent link and gives it its own window.

  #### Parameters

  + `Optional`options: any = {}

    Render options.

  #### Returns Promise<ChatPopout>

  Inherited from ApplicationV2.detachWindow

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

  Inherited from ApplicationV2.removeEventListener

### render

* render(options?: any, \_options?: any): Promise<ChatPopout>

  Render the Application, creating its HTMLElement and replacing its innerHTML.
  Add it to the DOM if it is not currently rendered and rendering is forced. Otherwise, re-render its contents.

  #### Parameters

  + `Optional`options: any = {}

    Options which configure application rendering behavior.
    A boolean is interpreted as the "force" option.
  + `Optional`\_options: any = {}

    Legacy options for backwards-compatibility with the original
    ApplicationV1#render signature.

  #### Returns Promise<ChatPopout>

  A Promise which resolves to the rendered Application instance

  Inherited from ApplicationV2.render

### renderChild

* renderChild(  
  Â Â Â Â app: [ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>,  
  Â Â Â Â options?: any,  
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
  + `Optional`options: any = {}

    Render options passed to the child's render method.

  #### Returns Promise<[ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>>

  A Promise which resolves to the rendered child Application.

  Inherited from ApplicationV2.renderChild

### setPosition

* setPosition(position?: Partial<[ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)>): void | [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)

  Update the Application element position using provided data which is merged with the prior position.

  #### Parameters

  + `Optional`position: Partial<[ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)>

    New Application positioning data

  #### Returns void | [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)

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

### `Protected`\_canAttach

* \_canAttach(): boolean

  `Protected`

  Whether this Application is permitted to re-attach to the main workspace.
  Managed children (those with an active parent) cannot re-attach independently; their parent controls placement.

  #### Returns boolean

  Inherited from ApplicationV2.\_canAttach

### `Protected`\_canRender

* \_canRender(options: ApplicationRenderOptions): false | void

  `Protected`

  Test whether this Application is allowed to be rendered.

  #### Parameters

  + options: ApplicationRenderOptions

    Provided render options

  #### Returns false | void

  Return false to prevent rendering

  #### Throws

  An Error to display a warning message

  Inherited from ApplicationV2.\_canRender

### `Protected`\_configureRenderOptions

* \_configureRenderOptions(options: ApplicationRenderOptions): void

  `Protected`

  Modify the provided options passed to a render request.

  #### Parameters

  + options: ApplicationRenderOptions

    Options which configure application rendering behavior

  #### Returns void

  Inherited from ApplicationV2.\_configureRenderOptions

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

  Inherited from ApplicationV2.\_createContextMenu

### `Protected`\_getFrameButtons

* \_getFrameButtons(  
  Â Â Â Â options: ApplicationRenderOptions,  
  ): [ApplicationHeaderControlsEntry](../types/foundry.applications.types.ApplicationHeaderControlsEntry.md)[]

  `Protected`

  Return an array of header button config entries to render into the Application frame.
  Subclasses may override this method to add, remove, or replace frame header buttons.

  #### Parameters

  + options: ApplicationRenderOptions

    Options which configure application rendering behavior.

  #### Returns [ApplicationHeaderControlsEntry](../types/foundry.applications.types.ApplicationHeaderControlsEntry.md)[]

  Inherited from ApplicationV2.\_getFrameButtons

### `Protected`\_getHeaderControls

* \_getHeaderControls(): [ApplicationHeaderControlsEntry](../types/foundry.applications.types.ApplicationHeaderControlsEntry.md)[]

  `Protected`

  Configure the array of header control menu options

  #### Returns [ApplicationHeaderControlsEntry](../types/foundry.applications.types.ApplicationHeaderControlsEntry.md)[]

  Inherited from ApplicationV2.\_getHeaderControls

### `Protected`\_getTabsConfig

* \_getTabsConfig(group: string): [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.md) | null

  `Protected`

  Get the configuration for a tabs group.

  #### Parameters

  + group: string

    The ID of a tabs group

  #### Returns [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.md) | null

  Inherited from ApplicationV2.\_getTabsConfig

### `Protected`\_headerControlButtons

* \_headerControlButtons(): Generator<[ApplicationHeaderControlsEntry](../types/foundry.applications.types.ApplicationHeaderControlsEntry.md), any, any>

  `Protected`

  Iterate over header control buttons, filtering for controls which are visible for the current client.

  #### Returns Generator<[ApplicationHeaderControlsEntry](../types/foundry.applications.types.ApplicationHeaderControlsEntry.md), any, any>

  #### Yields

  Inherited from ApplicationV2.\_headerControlButtons

### `Protected`\_headerControlContextEntries

* \_headerControlContextEntries(): Generator<[ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.md), void, any>

  `Protected`

  Generate context menu entries based on the header control specification.

  #### Returns Generator<[ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.md), void, any>

  #### Yields

  Inherited from ApplicationV2.\_headerControlContextEntries

### `Protected`\_insertElement

* \_insertElement(element: HTMLElement, options?: any): Promise<void>

  `Protected`

  Insert the application HTML element into the DOM.
  Subclasses may override this method to customize how the application is inserted.

  #### Parameters

  + element: HTMLElement

    The element to insert
  + `Optional`options: any = {}

    Render options.

  #### Returns Promise<void>

  Inherited from ApplicationV2.\_insertElement

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

  Inherited from ApplicationV2.\_onAttach

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

  Inherited from ApplicationV2.\_onChangeForm

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

  Inherited from ApplicationV2.\_onDetach

### `Protected`\_onPosition

* \_onPosition(position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)): void

  `Protected`

  Actions performed after the Application is re-positioned.

  #### Parameters

  + position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)

    The requested application position

  #### Returns void

  Inherited from ApplicationV2.\_onPosition

### `Protected`\_onRender

* \_onRender(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md),  
  Â Â Â Â options: ApplicationRenderOptions,  
  ): Promise<void>

  `Protected`

  Actions performed after any render of the Application.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md)

    Prepared context data
  + options: ApplicationRenderOptions

    Provided render options

  #### Returns Promise<void>

  Inherited from ApplicationV2.\_onRender

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
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md),  
  Â Â Â Â options: ApplicationRenderOptions,  
  ): Promise<void>

  `Protected`

  Perform post-render finalization actions.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md)

    Prepared context data.
  + options: ApplicationRenderOptions

    Provided render options.

  #### Returns Promise<void>

  Inherited from ApplicationV2.\_postRender

### `Protected`\_preClose

* \_preClose(options: ApplicationRenderOptions): Promise<void>

  `Protected`

  Actions performed before closing the Application.
  Pre-close steps are awaited by the close process.

  #### Parameters

  + options: ApplicationRenderOptions

    Provided render options

  #### Returns Promise<void>

  Inherited from ApplicationV2.\_preClose

### `Protected`\_preFirstRender

* \_preFirstRender(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md),  
  Â Â Â Â options: ApplicationRenderOptions,  
  ): Promise<void>

  `Protected`

  Actions performed before a first render of the Application.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md)

    Prepared context data
  + options: ApplicationRenderOptions

    Provided render options

  #### Returns Promise<void>

  Inherited from ApplicationV2.\_preFirstRender

### `Protected`\_prepareContext

* \_prepareContext(  
  Â Â Â Â options: ApplicationRenderOptions,  
  ): Promise<[ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md)>

  `Protected`

  Prepare application rendering context data for a given render request. If exactly one tab group is configured for
  this application, it will be prepared automatically.

  #### Parameters

  + options: ApplicationRenderOptions

    Options which configure application rendering behavior

  #### Returns Promise<[ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md)>

  Context data for the render operation

  Inherited from ApplicationV2.\_prepareContext

### `Protected`\_prepareTabs

* \_prepareTabs(group: string): Record<string, [ApplicationTab](../interfaces/foundry.applications.types.ApplicationTab.md)>

  `Protected`

  Prepare application tab data for a single tab group.

  #### Parameters

  + group: string

    The ID of the tab group to prepare

  #### Returns Record<string, [ApplicationTab](../interfaces/foundry.applications.types.ApplicationTab.md)>

  Inherited from ApplicationV2.\_prepareTabs

### `Protected`\_prePosition

* \_prePosition(position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)): void

  `Protected`

  Actions performed before the Application is re-positioned.
  Pre-position steps are not awaited because setPosition is synchronous.

  #### Parameters

  + position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)

    The requested application position

  #### Returns void

  Inherited from ApplicationV2.\_prePosition

### `Protected`\_preRender

* \_preRender(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md),  
  Â Â Â Â options: ApplicationRenderOptions,  
  ): Promise<void>

  `Protected`

  Actions performed before any render of the Application.
  Pre-render steps are awaited by the render process.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md)

    Prepared context data
  + options: ApplicationRenderOptions

    Provided render options

  #### Returns Promise<void>

  Inherited from ApplicationV2.\_preRender

### `Protected`\_refit

* \_refit(positionUpdate?: Partial<[ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)>): void

  `Protected`

  Re-fit an application to its content following a change in its natural size.

  #### Parameters

  + `Optional`positionUpdate: Partial<[ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)> = {}

    Position data forwarded to setPosition.

  #### Returns void

  Inherited from ApplicationV2.\_refit

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

### `Protected`\_renderFrame

* \_renderFrame(options: ApplicationRenderOptions): Promise<HTMLElement>

  `Protected`

  Render the outer framing HTMLElement which wraps the inner HTML of the Application.

  #### Parameters

  + options: ApplicationRenderOptions

    Options which configure application rendering behavior

  #### Returns Promise<HTMLElement>

  Inherited from ApplicationV2.\_renderFrame

### `Protected`\_renderFrameButtons

* \_renderFrameButtons(options: ApplicationRenderOptions): Promise<void>

  `Protected`

  Render buttons that are inserted directly into the frame header. Header controls should be preferred over frame
  buttons, which should be used sparingly.

  #### Parameters

  + options: ApplicationRenderOptions

    Options which configure application rendering behavior.

  #### Returns Promise<void>

  Inherited from ApplicationV2.\_renderFrameButtons

### `Protected`\_renderHeaderControl

* \_renderHeaderControl(control: [ApplicationHeaderControlsEntry](../types/foundry.applications.types.ApplicationHeaderControlsEntry.md)): HTMLLIElement

  `Protected`

  Render a header control button.

  #### Parameters

  + control: [ApplicationHeaderControlsEntry](../types/foundry.applications.types.ApplicationHeaderControlsEntry.md)

  #### Returns HTMLLIElement

  Inherited from ApplicationV2.\_renderHeaderControl

### `Protected`\_tearDown

* \_tearDown(options: [ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.md)): void

  `Protected`

  Remove elements from the DOM and trigger garbage collection as part of application closure.

  #### Parameters

  + options: [ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.md)

  #### Returns void

  Inherited from ApplicationV2.\_tearDown

### `Protected`\_updateFrame

* \_updateFrame(options: ApplicationRenderOptions): void

  `Protected`

  When the Application is rendered, optionally update aspects of the window frame.

  #### Parameters

  + options: ApplicationRenderOptions

    Options provided at render-time

  #### Returns void

  Inherited from ApplicationV2.\_updateFrame

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

  Inherited from ApplicationV2.\_updatePosition

### `Static`inheritanceChain

* inheritanceChain(): Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md), void, unknown>

  Iterate over the inheritance chain of this Application.
  The chain includes this Application itself and all parents until the base application is encountered.

  #### Returns Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md), void, unknown>

  #### See

  [ApplicationV2.BASE\_APPLICATION](foundry.applications.api.ApplicationV2.md#base_application)

  #### Yields

  Inherited from ApplicationV2.inheritanceChain

### `Static`instances

* instances(): Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md), any, any>

  Iterate over the instances of this Application.

  #### Returns Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md), any, any>

  #### Yields

  Inherited from ApplicationV2.instances

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