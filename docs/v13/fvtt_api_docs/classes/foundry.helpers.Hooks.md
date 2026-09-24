---
title: "Hooks | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.helpers.Hooks.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [helpers](../modules/foundry.helpers.html)
* [Hooks](foundry.helpers.Hooks.html)

# Class Hooks

A simple event framework used throughout Foundry Virtual Tabletop.
When key actions or events occur, a "hook" is defined where user-defined callback functions can execute.
This class manages the registration and execution of hooked callback functions.

##### Index

### Accessors

[events](foundry.helpers.Hooks.html#events)

### Methods

[call](foundry.helpers.Hooks.html#call)
[callAll](foundry.helpers.Hooks.html#callall)
[off](foundry.helpers.Hooks.html#off)
[on](foundry.helpers.Hooks.html#on)
[once](foundry.helpers.Hooks.html#once)
[onError](foundry.helpers.Hooks.html#onerror)

## Accessors

### `Static`events

* get events(): Record<string, [HookedFunction](../interfaces/foundry.HookedFunction.html)[]>

  A mapping of hook events which have functions registered to them.

  #### Returns Record<string, [HookedFunction](../interfaces/foundry.HookedFunction.html)[]>

## Methods

### `Static`call

* call(hook: string, ...args: any[]): boolean

  Call hook listeners in the order in which they were registered.
  Continue calling hooks until either all have been called or one returns false.

  Hook listeners which return false denote that the original event has been adequately handled and no further
  hooks should be called.

  #### Parameters

  + hook: string

    The hook being triggered
  + ...args: any[]

    Arguments passed to the hook callback functions

  #### Returns boolean

  Were all hooks called without execution being prevented?

### `Static`callAll

* callAll(hook: string, ...args: any[]): void

  Call all hook listeners in the order in which they were registered
  Hooks called this way can not be handled by returning false and will always trigger every hook callback.

  #### Parameters

  + hook: string

    The hook being triggered
  + ...args: any[]

    Arguments passed to the hook callback functions

  #### Returns void

### `Static`off

* off(hook: string, fn: number | Function): void

  Unregister a callback handler for a particular hook event

  #### Parameters

  + hook: string

    The unique name of the hooked event
  + fn: number | Function

    The function, or ID number for the function, that should be turned off

  #### Returns void

### `Static`on

* on(hook: string, fn: Function, options?: { once: boolean }): number

  Register a callback handler which should be triggered when a hook is triggered.

  #### Parameters

  + hook: string

    The unique name of the hooked event
  + fn: Function

    The callback function which should be triggered when the hook event occurs
  + options: { once: boolean } = {}

    Options which customize hook registration

    - ##### once: boolean

      Only trigger the hooked function once

  #### Returns number

  An ID number of the hooked function which can be used to turn off the hook later

### `Static`once

* once(hook: string, fn: Function): number

  Register a callback handler for an event which is only triggered once the first time the event occurs.
  An alias for Hooks.on with {once: true}

  #### Parameters

  + hook: string

    The unique name of the hooked event
  + fn: Function

    The callback function which should be triggered when the hook event occurs

  #### Returns number

  An ID number of the hooked function which can be used to turn off the hook later

### `Static`onError

* onError(  
  Â Â Â Â location: string,  
  Â Â Â Â error: Error,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â data?: object;  
  Â Â Â Â Â Â Â Â log?: null | string;  
  Â Â Â Â Â Â Â Â msg?: string;  
  Â Â Â Â Â Â Â Â notify?: null | string;  
  Â Â Â Â },  
  ): void

  Notify subscribers that an error has occurred within foundry.

  #### Parameters

  + location: string

    The method where the error was caught.
  + error: Error

    The error.
  + `Optional`options: { data?: object; log?: null | string; msg?: string; notify?: null | string } = {}

    Additional options to configure behaviour.

    - ##### `Optional`data?: object

      Additional data to pass to the hook subscribers.
    - ##### `Optional`log?: null | string

      The level at which to log the error to console (if at all).
    - ##### `Optional`msg?: string

      A message which should prefix the resulting error or notification.
    - ##### `Optional`notify?: null | string

      The level at which to spawn a notification in the UI (if at all).

  #### Returns void