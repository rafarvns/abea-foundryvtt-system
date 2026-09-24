---
title: "DialogV2 | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.applications.api.DialogV2.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [applications](../modules/foundry.applications.html)
* [api](../modules/foundry.applications.api.html)
* [DialogV2](foundry.applications.api.DialogV2.html)

# Class DialogV2

A lightweight Application that renders a dialog containing a form with arbitrary content, and some buttons.

#### Example: Prompt the user to confirm an action.

```
const proceed = await foundry.applications.api.DialogV2.confirm({  
  content: "Are you sure?",  
  rejectClose: false,  
  modal: true  
});  
if ( proceed ) console.log("Proceed.");  
else console.log("Do not proceed.");
Copy
```

#### Example: Prompt the user for some input.

```
let guess;  
try {  
  guess = await foundry.applications.api.DialogV2.prompt({  
    window: { title: "Guess a number between 1 and 10" },  
    content: '<input name="guess" type="number" min="1" max="10" step="1" autofocus>',  
    ok: {  
      label: "Submit Guess",  
      callback: (event, button, dialog) => button.form.elements.guess.valueAsNumber  
    }  
  });  
} catch {  
  console.log("User did not make a guess.");  
  return;  
}  
const n = Math.ceil(CONFIG.Dice.randomUniform() * 10);  
if ( n === guess ) console.log("User guessed correctly.");  
else console.log("User guessed incorrectly.");
Copy
```

#### Example: A custom dialog.

```
new foundry.applications.api.DialogV2({  
  window: { title: "Choose an option" },  
  content: `  
    <label><input type="radio" name="choice" value="one" checked> Option 1</label>  
    <label><input type="radio" name="choice" value="two"> Option 2</label>  
    <label><input type="radio" name="choice" value="three"> Options 3</label>  
  `,  
  buttons: [{  
    action: "choice",  
    label: "Make Choice",  
    default: true,  
    callback: (event, button, dialog) => button.form.elements.choice.value  
  }, {  
    action: "all",  
    label: "Take All"  
  }],  
  submit: result => {  
    if ( result === "all" ) console.log("User picked all options.");  
    else console.log(`User picked option: ${result}`);  
  }  
}).render({ force: true });
Copy
```

#### Hierarchy ([View Summary](../hierarchy.html#foundry.applications.api.DialogV2))

* [ApplicationV2](foundry.applications.api.ApplicationV2.html)
  + DialogV2
    - [ShowToPlayersDialog](foundry.applications.sheets.journal.ShowToPlayersDialog.html)
    - [FolderExport](foundry.applications.sidebar.apps.FolderExport.html)

##### Index

### Constructors

[constructor](foundry.applications.api.DialogV2.html#constructor)

### Properties

[options](foundry.applications.api.DialogV2.html#options)
[position](foundry.applications.api.DialogV2.html#position)
[tabGroups](foundry.applications.api.DialogV2.html#tabgroups)
[\_appId](foundry.applications.api.DialogV2.html#_appid)
[\_maxZ](foundry.applications.api.DialogV2.html#_maxz)
[BASE\_APPLICATION](foundry.applications.api.DialogV2.html#base_application)
[DEFAULT\_OPTIONS](foundry.applications.api.DialogV2.html#default_options)
[emittedEvents](foundry.applications.api.DialogV2.html#emittedevents)
[RENDER\_STATES](foundry.applications.api.DialogV2.html#render_states)
[TABS](foundry.applications.api.DialogV2.html#tabs)

### Accessors

[classList](foundry.applications.api.DialogV2.html#classlist)
[element](foundry.applications.api.DialogV2.html#element)
[form](foundry.applications.api.DialogV2.html#form)
[hasFrame](foundry.applications.api.DialogV2.html#hasframe)
[id](foundry.applications.api.DialogV2.html#id)
[minimized](foundry.applications.api.DialogV2.html#minimized)
[rendered](foundry.applications.api.DialogV2.html#rendered)
[state](foundry.applications.api.DialogV2.html#state)
[title](foundry.applications.api.DialogV2.html#title)
[window](foundry.applications.api.DialogV2.html#window)

### Methods

[\_attachFrameListeners](foundry.applications.api.DialogV2.html#_attachframelisteners)
[\_awaitTransition](foundry.applications.api.DialogV2.html#_awaittransition)
[\_doEvent](foundry.applications.api.DialogV2.html#_doevent)
[\_initializeApplicationOptions](foundry.applications.api.DialogV2.html#_initializeapplicationoptions)
[\_onFirstRender](foundry.applications.api.DialogV2.html#_onfirstrender)
[\_renderHTML](foundry.applications.api.DialogV2.html#_renderhtml)
[\_replaceHTML](foundry.applications.api.DialogV2.html#_replacehtml)
[addEventListener](foundry.applications.api.DialogV2.html#addeventlistener)
[bringToFront](foundry.applications.api.DialogV2.html#bringtofront)
[changeTab](foundry.applications.api.DialogV2.html#changetab)
[close](foundry.applications.api.DialogV2.html#close)
[dispatchEvent](foundry.applications.api.DialogV2.html#dispatchevent)
[maximize](foundry.applications.api.DialogV2.html#maximize)
[minimize](foundry.applications.api.DialogV2.html#minimize)
[removeEventListener](foundry.applications.api.DialogV2.html#removeeventlistener)
[render](foundry.applications.api.DialogV2.html#render)
[setPosition](foundry.applications.api.DialogV2.html#setposition)
[submit](foundry.applications.api.DialogV2.html#submit)
[toggleControls](foundry.applications.api.DialogV2.html#togglecontrols)
[\_canRender](foundry.applications.api.DialogV2.html#_canrender)
[\_configureRenderOptions](foundry.applications.api.DialogV2.html#_configurerenderoptions)
[\_createContextMenu](foundry.applications.api.DialogV2.html#_createcontextmenu)
[\_getHeaderControls](foundry.applications.api.DialogV2.html#_getheadercontrols)
[\_getTabsConfig](foundry.applications.api.DialogV2.html#_gettabsconfig)
[\_headerControlButtons](foundry.applications.api.DialogV2.html#_headercontrolbuttons)
[\_insertElement](foundry.applications.api.DialogV2.html#_insertelement)
[\_onChangeForm](foundry.applications.api.DialogV2.html#_onchangeform)
[\_onClickAction](foundry.applications.api.DialogV2.html#_onclickaction)
[\_onClickTab](foundry.applications.api.DialogV2.html#_onclicktab)
[\_onClose](foundry.applications.api.DialogV2.html#_onclose)
[\_onKeyDown](foundry.applications.api.DialogV2.html#_onkeydown)
[\_onPosition](foundry.applications.api.DialogV2.html#_onposition)
[\_onRender](foundry.applications.api.DialogV2.html#_onrender)
[\_onSubmit](foundry.applications.api.DialogV2.html#_onsubmit)
[\_onSubmitForm](foundry.applications.api.DialogV2.html#_onsubmitform)
[\_postRender](foundry.applications.api.DialogV2.html#_postrender)
[\_preClose](foundry.applications.api.DialogV2.html#_preclose)
[\_preFirstRender](foundry.applications.api.DialogV2.html#_prefirstrender)
[\_prepareContext](foundry.applications.api.DialogV2.html#_preparecontext)
[\_prepareTabs](foundry.applications.api.DialogV2.html#_preparetabs)
[\_prePosition](foundry.applications.api.DialogV2.html#_preposition)
[\_preRender](foundry.applications.api.DialogV2.html#_prerender)
[\_removeElement](foundry.applications.api.DialogV2.html#_removeelement)
[\_renderButtons](foundry.applications.api.DialogV2.html#_renderbuttons)
[\_renderFrame](foundry.applications.api.DialogV2.html#_renderframe)
[\_renderHeaderControl](foundry.applications.api.DialogV2.html#_renderheadercontrol)
[\_tearDown](foundry.applications.api.DialogV2.html#_teardown)
[\_updateFrame](foundry.applications.api.DialogV2.html#_updateframe)
[\_updatePosition](foundry.applications.api.DialogV2.html#_updateposition)
[\_handleQuery](foundry.applications.api.DialogV2.html#_handlequery)
[confirm](foundry.applications.api.DialogV2.html#confirm)
[inheritanceChain](foundry.applications.api.DialogV2.html#inheritancechain)
[input](foundry.applications.api.DialogV2.html#input)
[parseCSSDimension](foundry.applications.api.DialogV2.html#parsecssdimension)
[prompt](foundry.applications.api.DialogV2.html#prompt)
[query](foundry.applications.api.DialogV2.html#query)
[wait](foundry.applications.api.DialogV2.html#wait)
[waitForImages](foundry.applications.api.DialogV2.html#waitforimages)
[\_onClickButton](foundry.applications.api.DialogV2.html#_onclickbutton)

## Constructors

### constructor

* new DialogV2(  
  Â Â Â Â options?: Partial<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html) & [DialogV2Configuration](../interfaces/foundry.DialogV2Configuration.html)>,  
  ): [DialogV2](foundry.applications.api.DialogV2.html)

  Applications are constructed by providing an object of configuration options.

  #### Parameters

  + `Optional`options: Partial<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html) & [DialogV2Configuration](../interfaces/foundry.DialogV2Configuration.html)> = {}

    Options used to configure the Application instance

  #### Returns [DialogV2](foundry.applications.api.DialogV2.html)

  Inherited from ApplicationV2.constructor

## Properties

### options

options: Readonly<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html) & [DialogV2Configuration](../interfaces/foundry.DialogV2Configuration.html)>

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
Â Â Â Â classes: string[];  
Â Â Â Â form: { closeOnSubmit: boolean };  
Â Â Â Â id: string;  
Â Â Â Â tag: string;  
Â Â Â Â window: { frame: boolean; minimizable: boolean; positioned: boolean };  
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

  A convenience reference to the title of the Application window.

  #### Returns string

  Inherited from ApplicationV2.title

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

* \_initializeApplicationOptions(options: any): any

  #### Parameters

  + options: any

  #### Returns any

  #### Inherit Doc

  Overrides ApplicationV2.\_initializeApplicationOptions

### \_onFirstRender

* \_onFirstRender(\_context: any, \_options: any): Promise<void>

  #### Parameters

  + \_context: any
  + \_options: any

  #### Returns Promise<void>

  Overrides ApplicationV2.\_onFirstRender

### \_renderHTML

* \_renderHTML(\_context: any, \_options: any): Promise<HTMLFormElement>

  #### Parameters

  + \_context: any
  + \_options: any

  #### Returns Promise<HTMLFormElement>

  Overrides ApplicationV2.\_renderHTML

### \_replaceHTML

* \_replaceHTML(result: any, content: any, \_options: any): void

  #### Parameters

  + result: any
  + content: any
  + \_options: any

  #### Returns void

  Overrides ApplicationV2.\_replaceHTML

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

* close(options?: Partial<[ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.html)>): Promise<[DialogV2](foundry.applications.api.DialogV2.html)>

  Close the Application, removing it from the DOM.

  #### Parameters

  + `Optional`options: Partial<[ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.html)> = {}

    Options which modify how the application is closed.

  #### Returns Promise<[DialogV2](foundry.applications.api.DialogV2.html)>

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
  Â Â Â Â options?: boolean | [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html),  
  Â Â Â Â \_options?: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html),  
  ): Promise<[DialogV2](foundry.applications.api.DialogV2.html)>

  Render the Application, creating its HTMLElement and replacing its innerHTML.
  Add it to the DOM if it is not currently rendered and rendering is forced. Otherwise, re-render its contents.

  #### Parameters

  + `Optional`options: boolean | [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html) = {}

    Options which configure application rendering behavior.
    A boolean is interpreted as the "force" option.
  + `Optional`\_options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html) = {}

    Legacy options for backwards-compatibility with the original
    ApplicationV1#render signature.

  #### Returns Promise<[DialogV2](foundry.applications.api.DialogV2.html)>

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

  Inherited from ApplicationV2.\_canRender

### `Protected`\_configureRenderOptions

* \_configureRenderOptions(options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)): void

  `Protected`

  Modify the provided options passed to a render request.

  #### Parameters

  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)

    Options which configure application rendering behavior

  #### Returns void

  Inherited from ApplicationV2.\_configureRenderOptions

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

### `Protected`\_headerControlButtons

* \_headerControlButtons(): Generator<[ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html), any, any>

  `Protected`

  Iterate over header control buttons, filtering for controls which are visible for the current client.

  #### Returns Generator<[ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html), any, any>

  #### Yields

  Inherited from ApplicationV2.\_headerControlButtons

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

### `Protected`\_onClose

* \_onClose(options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)): void

  `Protected`

  Actions performed after closing the Application.
  Post-close steps are not awaited by the close process.

  #### Parameters

  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)

    Provided render options

  #### Returns void

  Inherited from ApplicationV2.\_onClose

### `Protected`\_onKeyDown

* \_onKeyDown(event: KeyboardEvent): void

  `Protected`

  Handle keypresses within the dialog.

  #### Parameters

  + event: KeyboardEvent

    The triggering event.

  #### Returns void

### `Protected`\_onPosition

* \_onPosition(position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)): void

  `Protected`

  Actions performed after the Application is re-positioned.

  #### Parameters

  + position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)

    The requested application position

  #### Returns void

  Inherited from ApplicationV2.\_onPosition

### `Protected`\_onRender

* \_onRender(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html),  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html),  
  ): Promise<void>

  `Protected`

  Actions performed after any render of the Application.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)

    Prepared context data
  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)

    Provided render options

  #### Returns Promise<void>

  Inherited from ApplicationV2.\_onRender

### `Protected`\_onSubmit

* \_onSubmit(  
  Â Â Â Â target: HTMLButtonElement,  
  Â Â Â Â event: PointerEvent | SubmitEvent,  
  ): Promise<[DialogV2](foundry.applications.api.DialogV2.html)>

  `Protected`

  Handle submitting the dialog.

  #### Parameters

  + target: HTMLButtonElement

    The button that was clicked or the default button.
  + event: PointerEvent | SubmitEvent

    The triggering event.

  #### Returns Promise<[DialogV2](foundry.applications.api.DialogV2.html)>

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

  Inherited from ApplicationV2.\_postRender

### `Protected`\_preClose

* \_preClose(options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)): Promise<void>

  `Protected`

  Actions performed before closing the Application.
  Pre-close steps are awaited by the close process.

  #### Parameters

  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)

    Provided render options

  #### Returns Promise<void>

  Inherited from ApplicationV2.\_preClose

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

  Inherited from ApplicationV2.\_preFirstRender

### `Protected`\_prepareContext

* \_prepareContext(  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html),  
  ): Promise<[ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)>

  `Protected`

  Prepare application rendering context data for a given render request. If exactly one tab group is configured for
  this application, it will be prepared automatically.

  #### Parameters

  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)

    Options which configure application rendering behavior

  #### Returns Promise<[ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)>

  Context data for the render operation

  Inherited from ApplicationV2.\_prepareContext

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

  Inherited from ApplicationV2.\_preRender

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

### `Protected`\_renderButtons

* \_renderButtons(): string

  `Protected`

  Render configured buttons.

  #### Returns string

### `Protected`\_renderFrame

* \_renderFrame(options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)): Promise<HTMLElement>

  `Protected`

  Render the outer framing HTMLElement which wraps the inner HTML of the Application.

  #### Parameters

  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)

    Options which configure application rendering behavior

  #### Returns Promise<HTMLElement>

  Inherited from ApplicationV2.\_renderFrame

### `Protected`\_renderHeaderControl

* \_renderHeaderControl(control: [ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html)): HTMLLIElement

  `Protected`

  Render a header control button.

  #### Parameters

  + control: [ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html)

  #### Returns HTMLLIElement

  Inherited from ApplicationV2.\_renderHeaderControl

### `Protected`\_tearDown

* \_tearDown(options: [ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.html)): void

  `Protected`

  Remove elements from the DOM and trigger garbage collection as part of application closure.

  #### Parameters

  + options: [ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.html)

  #### Returns void

  Inherited from ApplicationV2.\_tearDown

### `Protected`\_updateFrame

* \_updateFrame(options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)): void

  `Protected`

  When the Application is rendered, optionally update aspects of the window frame.

  #### Parameters

  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)

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

### `Static`\_handleQuery

* \_handleQuery(  
  Â Â Â Â \_\_namedParameters: {  
  Â Â Â Â Â Â Â Â config: object;  
  Â Â Â Â Â Â Â Â type: "input" | "wait" | "prompt" | "confirm";  
  Â Â Â Â },  
  ): Promise<any>

  `Internal`

  The dialog query handler.

  #### Parameters

  + \_\_namedParameters: { config: object; type: "input" | "wait" | "prompt" | "confirm" }

  #### Returns Promise<any>

### `Static`confirm

* confirm(  
  Â Â Â Â config?: Partial<  
  Â Â Â Â Â Â Â Â [ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html) & [DialogV2Configuration](../interfaces/foundry.DialogV2Configuration.html) & [DialogV2WaitOptions](../interfaces/foundry.DialogV2WaitOptions.html),  
  Â Â Â Â >,  
  ): Promise<any>

  A utility helper to generate a dialog with yes and no buttons.

  #### Parameters

  + `Optional`config: Partial<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html) & [DialogV2Configuration](../interfaces/foundry.DialogV2Configuration.html) & [DialogV2WaitOptions](../interfaces/foundry.DialogV2WaitOptions.html)> = {}
    - ##### yes

      Options to overwrite the default yes button configuration.
    - ##### no

      Options to overwrite the default no button configuration.

  #### Returns Promise<any>

  Resolves to true if the yes button was pressed, or false if the no button
  was pressed. If additional buttons were provided, the Promise resolves to
  the identifier of the one that was pressed, or the value returned by its
  callback. If the dialog was dismissed, and rejectClose is false, the
  Promise resolves to null.

### `Static`inheritanceChain

* inheritanceChain(): Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.html), void, unknown>

  Iterate over the inheritance chain of this Application.
  The chain includes this Application itself and all parents until the base application is encountered.

  #### Returns Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.html), void, unknown>

  #### See

  [ApplicationV2.BASE\_APPLICATION](foundry.applications.api.ApplicationV2.html#base_application)

  #### Yields

  Inherited from ApplicationV2.inheritanceChain

### `Static`input

* input(  
  Â Â Â Â config?: Partial<  
  Â Â Â Â Â Â Â Â [ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html) & [DialogV2Configuration](../interfaces/foundry.DialogV2Configuration.html) & [DialogV2WaitOptions](../interfaces/foundry.DialogV2WaitOptions.html),  
  Â Â Â Â >,  
  ): Promise<any>

  A utility helper to generate a dialog for user input.

  #### Parameters

  + `Optional`config: Partial<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html) & [DialogV2Configuration](../interfaces/foundry.DialogV2Configuration.html) & [DialogV2WaitOptions](../interfaces/foundry.DialogV2WaitOptions.html)> = {}
    - ##### ok

      Options to overwrite the default confirmation button configuration.

  #### Returns Promise<any>

  Resolves to the data of the form if the ok button was pressed,
  or the value returned by that button's callback. If additional
  buttons were provided, the Promise resolves to the identifier of
  the one that was pressed, or the value returned by its callback.
  If the dialog was dismissed, and rejectClose is false, the Promise
  resolves to null.

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

### `Static`prompt

* prompt(  
  Â Â Â Â config?: Partial<  
  Â Â Â Â Â Â Â Â [ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html) & [DialogV2Configuration](../interfaces/foundry.DialogV2Configuration.html) & [DialogV2WaitOptions](../interfaces/foundry.DialogV2WaitOptions.html),  
  Â Â Â Â >,  
  ): Promise<any>

  A utility helper to generate a dialog with a single confirmation button.

  #### Parameters

  + `Optional`config: Partial<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html) & [DialogV2Configuration](../interfaces/foundry.DialogV2Configuration.html) & [DialogV2WaitOptions](../interfaces/foundry.DialogV2WaitOptions.html)> = {}
    - ##### ok

      Options to overwrite the default confirmation button configuration.

  #### Returns Promise<any>

  Resolves to the identifier of the button used to submit the dialog,
  or the value returned by that button's callback. If additional
  buttons were provided, the Promise resolves to the identifier of
  the one that was pressed, or the value returned by its callback.
  If the dialog was dismissed, and rejectClose is false, the Promise
  resolves to null.

### `Static`query

* query(  
  Â Â Â Â user: any,  
  Â Â Â Â type: "input" | "wait" | "prompt" | "confirm",  
  Â Â Â Â config?: object,  
  ): Promise<any>

  Present an asynchronous Dialog query to a specific User for response.

  #### Parameters

  + user: any

    A User instance or a User id
  + type: "input" | "wait" | "prompt" | "confirm"

    The type of Dialog to present
  + `Optional`config: object = {}

    Dialog configuration forwarded on to the Dialog.prompt, Dialog.confirm,
    Dialog.input, or Dialog.wait function depending on the query type.
    Callback options are not supported.

  #### Returns Promise<any>

  The query response or null if no response was provided

  #### See

  + [DialogV2.prompt](foundry.applications.api.DialogV2.html#prompt)
  + [DialogV2.confirm](foundry.applications.api.DialogV2.html#confirm)
  + [DialogV2.input](foundry.applications.api.DialogV2.html#input)
  + [DialogV2.wait](foundry.applications.api.DialogV2.html#wait)

### `Static`wait

* wait(  
  Â Â Â Â config?: Partial<  
  Â Â Â Â Â Â Â Â [ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html) & [DialogV2Configuration](../interfaces/foundry.DialogV2Configuration.html) & [DialogV2WaitOptions](../interfaces/foundry.DialogV2WaitOptions.html),  
  Â Â Â Â >,  
  ): Promise<any>

  Spawn a dialog and wait for it to be dismissed or submitted.

  #### Parameters

  + `Optional`config: Partial<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html) & [DialogV2Configuration](../interfaces/foundry.DialogV2Configuration.html) & [DialogV2WaitOptions](../interfaces/foundry.DialogV2WaitOptions.html)> = {}

  #### Returns Promise<any>

  Resolves to the identifier of the button used to submit the
  dialog, or the value returned by that button's callback. If the
  dialog was dismissed, and rejectClose is false, the Promise
  resolves to null.

### `Static`waitForImages

* waitForImages(element: HTMLElement): Promise<void>

  Wait for any images in the given element to load.

  #### Parameters

  + element: HTMLElement

    The element.

  #### Returns Promise<void>

  Inherited from ApplicationV2.waitForImages

### `Protected` `Static`\_onClickButton

* \_onClickButton(  
  Â Â Â Â ...this: any,  
  Â Â Â Â event: PointerEvent,  
  Â Â Â Â target: HTMLButtonElement,  
  ): void

  `Protected`

  Redirect all clicks of buttons with action specifications to the submit handler.

  #### Parameters

  + ...this: any
  + event: PointerEvent

    The originating click event.
  + target: HTMLButtonElement

    The button element that was clicked.

  #### Returns void