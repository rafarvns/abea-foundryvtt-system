---
title: "CanvasTour | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.nue.tours.CanvasTour.html"
category: "classes"
---

# Class CanvasTour

A tour for demonstrating an aspect of Canvas functionality.
Automatically activates a certain canvas layer or tool depending on the needs of the step.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.nue.tours.CanvasTour))

* [Tour](foundry.nue.Tour.md)
  + CanvasTour

##### Index

### Constructors

[constructor](#constructor)

### Properties

[config](#config)
[fadeElement](#fadeelement)
[overlayElement](#overlayelement)
[targetElement](#targetelement)
[HIGHLIGHT\_PADDING](#highlight_padding)

### Accessors

[canStart](#canstart)
[currentStep](#currentstep)
[description](#description)
[hasNext](#hasnext)
[hasPrevious](#hasprevious)
[id](#id)
[key](#key)
[namespace](#namespace)
[status](#status)
[stepIndex](#stepindex)
[steps](#steps)
[title](#title)
[activeTour](#activetour)
[tourInProgress](#tourinprogress)

### Methods

[\_preStep](#_prestep)
[\_reloadProgress](#_reloadprogress)
[complete](#complete)
[exit](#exit)
[next](#next)
[previous](#previous)
[progress](#progress)
[reset](#reset)
[start](#start)
[\_getTargetElement](#_gettargetelement)
[\_postStep](#_poststep)
[\_renderStep](#_renderstep)
[fromJSON](#fromjson)
[highlightElement](#highlightelement)
[onMovementAction](#onmovementaction)

## Constructors

### constructor

* new CanvasTour(  
  Â Â Â Â config: [TourConfig](../interfaces/foundry.TourConfig.md),  
  Â Â Â Â options?: { id?: string; namespace?: string },  
  ): CanvasTour

  Construct a Tour by providing a configuration.

  #### Parameters

  + config: [TourConfig](../interfaces/foundry.TourConfig.md)

    The configuration of the Tour
  + `Optional`options: { id?: string; namespace?: string } = {}

    Additional options for configuring the tour

    - ##### `Optional`id?: string

      A tour ID that supercedes TourConfig#id
    - ##### `Optional`namespace?: string

      A tour namespace that supercedes TourConfig#namespace

  #### Returns CanvasTour

  Inherited from [Tour](foundry.nue.Tour.md).[constructor](foundry.nue.Tour.md#constructor)

## Properties

### config

config: [TourConfig](../interfaces/foundry.TourConfig.md)

Configuration of the tour. This object is cloned to avoid mutating the original configuration.

Inherited from [Tour](foundry.nue.Tour.md).[config](foundry.nue.Tour.md#config)

### fadeElement

fadeElement: HTMLElement

The HTMLElement that fades out the rest of the screen

Inherited from [Tour](foundry.nue.Tour.md).[fadeElement](foundry.nue.Tour.md#fadeelement)

### overlayElement

overlayElement: any

The HTMLElement that blocks input while a Tour is active

Inherited from [Tour](foundry.nue.Tour.md).[overlayElement](foundry.nue.Tour.md#overlayelement)

### targetElement

targetElement: HTMLElement

The HTMLElement which is the focus of the current tour step.

Inherited from [Tour](foundry.nue.Tour.md).[targetElement](foundry.nue.Tour.md#targetelement)

### `Static`HIGHLIGHT\_PADDING

HIGHLIGHT\_PADDING: number = 10

Padding around a Highlighted Element

Inherited from [Tour](foundry.nue.Tour.md).[HIGHLIGHT\_PADDING](foundry.nue.Tour.md#highlight_padding)

## Accessors

### canStart

* get canStart(): boolean

  #### Returns boolean

  Overrides Tour.canStart

### currentStep

* get currentStep(): [TourStep](../interfaces/foundry.TourStep.md) | null

  Return the current Step, or null if the tour has not yet started.

  #### Returns [TourStep](../interfaces/foundry.TourStep.md) | null

  Inherited from Tour.currentStep

### description

* get description(): string

  The human-readable description of the tour.

  #### Returns string

  Inherited from Tour.description

### hasNext

* get hasNext(): boolean

  Returns True if there is a next TourStep

  #### Returns boolean

  Inherited from Tour.hasNext

### hasPrevious

* get hasPrevious(): boolean

  Returns True if there is a previous TourStep

  #### Returns boolean

  Inherited from Tour.hasPrevious

### id

* get id(): string

  The unique identifier of the tour.

  #### Returns string

  Inherited from Tour.id

### key

* get key(): string

  The key the Tour is stored under in game.tours, of the form `${namespace}.${id}`

  #### Returns string

  Inherited from Tour.key

### namespace

* get namespace(): string

  The package namespace for the tour.

  #### Returns string

  Inherited from Tour.namespace

### status

* get status(): [TourStatus](../types/foundry.TourStatus.md)

  The current status of the Tour

  #### Returns [TourStatus](../types/foundry.TourStatus.md)

  Inherited from Tour.status

### stepIndex

* get stepIndex(): number | null

  The index of the current step; -1 if the tour has not yet started, or null if the tour is finished.

  #### Returns number | null

  Inherited from Tour.stepIndex

### steps

* get steps(): [TourStep](../interfaces/foundry.TourStep.md)[]

  The configuration of tour steps

  #### Returns [TourStep](../interfaces/foundry.TourStep.md)[]

  Inherited from Tour.steps

### title

* get title(): string

  The human-readable title for the tour.

  #### Returns string

  Inherited from Tour.title

### `Static`activeTour

* get activeTour(): [Tour](foundry.nue.Tour.md) | null

  Returns the active Tour, if any

  #### Returns [Tour](foundry.nue.Tour.md) | null

  Inherited from Tour.activeTour

### `Static`tourInProgress

* get tourInProgress(): boolean

  Indicates if a Tour is currently in progress.

  #### Returns boolean

  Inherited from Tour.tourInProgress

## Methods

### \_preStep

* \_preStep(): Promise<void>

  #### Returns Promise<void>

  Overrides [Tour](foundry.nue.Tour.md).[\_preStep](foundry.nue.Tour.md#_prestep)

### \_reloadProgress

* \_reloadProgress(): void

  `Internal`

  Reloads the Tour's current step from the saved progress

  #### Returns void

  Inherited from [Tour](foundry.nue.Tour.md).[\_reloadProgress](foundry.nue.Tour.md#_reloadprogress)

### complete

* complete(): Promise<any>

  Advance the tour to a completed state.

  #### Returns Promise<any>

  Inherited from [Tour](foundry.nue.Tour.md).[complete](foundry.nue.Tour.md#complete)

### exit

* exit(): void

  Exit the tour at the current step.

  #### Returns void

  Inherited from [Tour](foundry.nue.Tour.md).[exit](foundry.nue.Tour.md#exit)

### next

* next(): Promise<any>

  Progress the Tour to the next step.

  #### Returns Promise<any>

  Inherited from [Tour](foundry.nue.Tour.md).[next](foundry.nue.Tour.md#next)

### previous

* previous(): Promise<any>

  Rewind the Tour to the previous step.

  #### Returns Promise<any>

  Inherited from [Tour](foundry.nue.Tour.md).[previous](foundry.nue.Tour.md#previous)

### progress

* progress(stepIndex: number): Promise<any>

  Progresses to a given Step

  #### Parameters

  + stepIndex: number

    The step to progress to

  #### Returns Promise<any>

  Inherited from [Tour](foundry.nue.Tour.md).[progress](foundry.nue.Tour.md#progress)

### reset

* reset(): Promise<any>

  Reset the Tour to an un-started state.

  #### Returns Promise<any>

  Inherited from [Tour](foundry.nue.Tour.md).[reset](foundry.nue.Tour.md#reset)

### start

* start(): Promise<void>

  #### Returns Promise<void>

  Overrides [Tour](foundry.nue.Tour.md).[start](foundry.nue.Tour.md#start)

### `Protected`\_getTargetElement

* \_getTargetElement(selector: string): Element | null

  `Protected`

  Query the DOM for the target element using the provided selector

  #### Parameters

  + selector: string

    A CSS selector

  #### Returns Element | null

  The target element, or null if not found

  Inherited from [Tour](foundry.nue.Tour.md).[\_getTargetElement](foundry.nue.Tour.md#_gettargetelement)

### `Protected` `Abstract`\_postStep

* \_postStep(): Promise<void>

  `Protected`

  Clean-up operations performed after a step is completed.

  #### Returns Promise<void>

  Inherited from [Tour](foundry.nue.Tour.md).[\_postStep](foundry.nue.Tour.md#_poststep)

### `Protected`\_renderStep

* \_renderStep(): Promise<void>

  `Protected`

  Renders the current Step of the Tour

  #### Returns Promise<void>

  Inherited from [Tour](foundry.nue.Tour.md).[\_renderStep](foundry.nue.Tour.md#_renderstep)

### `Static`fromJSON

* fromJSON(filepath: string): Promise<[Tour](foundry.nue.Tour.md)>

  Creates and returns a Tour by loading a JSON file

  #### Parameters

  + filepath: string

    The path to the JSON file

  #### Returns Promise<[Tour](foundry.nue.Tour.md)>

  Inherited from [Tour](foundry.nue.Tour.md).[fromJSON](foundry.nue.Tour.md#fromjson)

### `Static`highlightElement

* highlightElement(  
  Â Â Â Â element: HTMLElement,  
  Â Â Â Â options?: { padding?: number; preventInteraction?: boolean },  
  ): HTMLElement

  Create and append a tour-fadeout highlight element positioned over the given target element.

  #### Parameters

  + element: HTMLElement

    The element to highlight.
  + `Optional`options: { padding?: number; preventInteraction?: boolean } = {}
    - ##### `Optional`padding?: number

      Padding (px) around the element. Defaults to
      Tour.HIGHLIGHT\_PADDING.
    - ##### `Optional`preventInteraction?: boolean

      Whether user interaction should be prevented while the
      highlight is in effect.

  #### Returns HTMLElement

  The created fadeout element, already appended to document.body.

  Inherited from [Tour](foundry.nue.Tour.md).[highlightElement](foundry.nue.Tour.md#highlightelement)

### `Static`onMovementAction

* onMovementAction(movementDirections: string[]): true | void

  Handle a movement action to either progress or regress the Tour.

  #### Parameters

  + movementDirections: string[]

    The Directions being moved in

  #### Returns true | void

  Inherited from [Tour](foundry.nue.Tour.md).[onMovementAction](foundry.nue.Tour.md#onmovementaction)