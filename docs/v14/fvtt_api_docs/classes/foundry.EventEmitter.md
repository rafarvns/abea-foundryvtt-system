---
title: "EventEmitter | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.EventEmitter.html"
category: "classes"
---

# Class EventEmitter<TBaseClass>

A mixin class which implements the behavior of EventTarget.
This is useful in cases where a class wants EventTarget-like behavior but needs to extend some other class.

#### See

<https://developer.mozilla.org/en-US/docs/Web/API/EventTarget>

#### Type Parameters

* TBaseClass extends Function

#### Hierarchy ([View Summary](../hierarchy.md#foundry.EventEmitter))

* BaseClass
  + EventEmitter
    - [Sound](foundry.audio.Sound.md)
    - [ApplicationV2](foundry.applications.api.ApplicationV2.md)
    - [FogManager](foundry.canvas.perception.FogManager.md)

##### Index

### Properties

[emittedEvents](#emittedevents)

### Methods

[addEventListener](#addeventlistener)
[dispatchEvent](#dispatchevent)
[removeEventListener](#removeeventlistener)

## Properties

### `Static`emittedEvents

emittedEvents: string[] = []

An array of event types which are valid for this class.

## Methods

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