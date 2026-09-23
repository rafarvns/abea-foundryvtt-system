---
title: "Tour | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.nue.Tour.html"
category: "classes"
---

# Class Tour

A Tour that shows a series of guided steps.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.nue.Tour))

* Tour
  + [CanvasTour](foundry.nue.tours.CanvasTour.md)
  + [SetupTour](foundry.nue.tours.SetupTour.md)
  + [SidebarTour](foundry.nue.tours.SidebarTour.md)

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
[\_preStep](#_prestep)
[\_renderStep](#_renderstep)
[fromJSON](#fromjson)
[highlightElement](#highlightelement)
[onMovementAction](#onmovementaction)

## Constructors

### constructor

* new Tour(  
  Â Â Â Â config: [TourConfig](../interfaces/foundry.TourConfig.md),  
  Â Â Â Â options?: { id?: string; namespace?: string },  
  ): Tour

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

  #### Returns Tour

## Properties

### config

config: [TourConfig](../interfaces/foundry.TourConfig.md)

Configuration of the tour. This object is cloned to avoid mutating the original configuration.

### fadeElement

fadeElement: HTMLElement

The HTMLElement that fades out the rest of the screen

### overlayElement

overlayElement: any

The HTMLElement that blocks input while a Tour is active

### targetElement

targetElement: HTMLElement

The HTMLElement which is the focus of the current tour step.

### `Static`HIGHLIGHT\_PADDING

HIGHLIGHT\_PADDING: number = 10

Padding around a Highlighted Element

## Accessors

### canStart

* get canStart(): boolean

  Return whether this Tour is currently eligible to be started?
  This is useful for tours which can only be used in certain circumstances, like if the canvas is active.

  #### Returns boolean

### currentStep

* get currentStep(): [TourStep](../interfaces/foundry.TourStep.md) | null

  Return the current Step, or null if the tour has not yet started.

  #### Returns [TourStep](../interfaces/foundry.TourStep.md) | null

### description

* get description(): string

  The human-readable description of the tour.

  #### Returns string

### hasNext

* get hasNext(): boolean

  Returns True if there is a next TourStep

  #### Returns boolean

### hasPrevious

* get hasPrevious(): boolean

  Returns True if there is a previous TourStep

  #### Returns boolean

### id

* get id(): string

  The unique identifier of the tour.

  #### Returns string

### key

* get key(): string

  The key the Tour is stored under in game.tours, of the form `${namespace}.${id}`

  #### Returns string

### namespace

* get namespace(): string

  The package namespace for the tour.

  #### Returns string

### status

* get status(): [TourStatus](../types/foundry.TourStatus.md)

  The current status of the Tour

  #### Returns [TourStatus](../types/foundry.TourStatus.md)

### stepIndex

* get stepIndex(): number | null

  The index of the current step; -1 if the tour has not yet started, or null if the tour is finished.

  #### Returns number | null

### steps

* get steps(): [TourStep](../interfaces/foundry.TourStep.md)[]

  The configuration of tour steps

  #### Returns [TourStep](../interfaces/foundry.TourStep.md)[]

### title

* get title(): string

  The human-readable title for the tour.

  #### Returns string

### `Static`activeTour

* get activeTour(): Tour | null

  Returns the active Tour, if any

  #### Returns Tour | null

### `Static`tourInProgress

* get tourInProgress(): boolean

  Indicates if a Tour is currently in progress.

  #### Returns boolean

## Methods

### \_reloadProgress

* \_reloadProgress(): void

  `Internal`

  Reloads the Tour's current step from the saved progress

  #### Returns void

### complete

* complete(): Promise<any>

  Advance the tour to a completed state.

  #### Returns Promise<any>

### exit

* exit(): void

  Exit the tour at the current step.

  #### Returns void

### next

* next(): Promise<any>

  Progress the Tour to the next step.

  #### Returns Promise<any>

### previous

* previous(): Promise<any>

  Rewind the Tour to the previous step.

  #### Returns Promise<any>

### progress

* progress(stepIndex: number): Promise<any>

  Progresses to a given Step

  #### Parameters

  + stepIndex: number

    The step to progress to

  #### Returns Promise<any>

### reset

* reset(): Promise<any>

  Reset the Tour to an un-started state.

  #### Returns Promise<any>

### start

* start(): Promise<any>

  Start the Tour at its current step, or at the beginning if the tour has not yet been started.

  #### Returns Promise<any>

### `Protected`\_getTargetElement

* \_getTargetElement(selector: string): Element | null

  `Protected`

  Query the DOM for the target element using the provided selector

  #### Parameters

  + selector: string

    A CSS selector

  #### Returns Element | null

  The target element, or null if not found

### `Protected` `Abstract`\_postStep

* \_postStep(): Promise<void>

  `Protected`

  Clean-up operations performed after a step is completed.

  #### Returns Promise<void>

### `Protected` `Abstract`\_preStep

* \_preStep(): Promise<void>

  `Protected`

  Set-up operations performed before a step is shown.

  #### Returns Promise<void>

### `Protected`\_renderStep

* \_renderStep(): Promise<void>

  `Protected`

  Renders the current Step of the Tour

  #### Returns Promise<void>

### `Static`fromJSON

* fromJSON(filepath: string): Promise<Tour>

  Creates and returns a Tour by loading a JSON file

  #### Parameters

  + filepath: string

    The path to the JSON file

  #### Returns Promise<Tour>

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

### `Static`onMovementAction

* onMovementAction(movementDirections: string[]): true | void

  Handle a movement action to either progress or regress the Tour.

  #### Parameters

  + movementDirections: string[]

    The Directions being moved in

  #### Returns true | void