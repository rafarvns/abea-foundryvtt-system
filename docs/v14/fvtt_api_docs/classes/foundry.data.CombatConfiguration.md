---
title: "CombatConfiguration | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.data.CombatConfiguration.html"
category: "classes"
---

# Class CombatConfiguration

A configuration class managing the Combat Turn Markers.

##### Index

### Properties

[CONFIG\_SETTING](#config_setting)

### Accessors

[currentTurnMarkerAnimation](#currentturnmarkeranimation)
[resource](#resource)
[skipDefeated](#skipdefeated)
[turnMarker](#turnmarker)
[turnMarkerAnimations](#turnmarkeranimations)
[schema](#schema)

### Methods

[addTurnMarkerAnimation](#addturnmarkeranimation)
[getTurnMarkerAnimation](#getturnmarkeranimation)
[useTurnMarkerAnimation](#useturnmarkeranimation)
[initialize](#initialize)
[registerSettings](#registersettings)

## Properties

### `Static`CONFIG\_SETTING

CONFIG\_SETTING: string = "combatTrackerConfig"

The configuration setting used to record Combat preferences

## Accessors

### currentTurnMarkerAnimation

* get currentTurnMarkerAnimation(): [TurnMarkerAnimationData](../interfaces/foundry.TurnMarkerAnimationData.md)

  Get current turn marker animation.

  #### Returns [TurnMarkerAnimationData](../interfaces/foundry.TurnMarkerAnimationData.md)

### resource

* get resource(): string

  Get tracked resource setting.

  #### Returns string

### skipDefeated

* get skipDefeated(): boolean

  Get skip defeated setting.

  #### Returns boolean

### turnMarker

* get turnMarker(): Object

  Get turn marker settings.

  #### Returns Object

### turnMarkerAnimations

* get turnMarkerAnimations(): { label: string; value: string }[]

  Get all animations and labels as an array of choices suitable for a select element.

  #### Returns { label: string; value: string }[]

### `Static`schema

* get schema(): SchemaField

  The data model schema used to structure and validate the stored setting.

  #### Returns SchemaField

## Methods

### addTurnMarkerAnimation

* addTurnMarkerAnimation(id: string, config: [TurnMarkerAnimationData](../interfaces/foundry.TurnMarkerAnimationData.md)): void

  Add a new turn marker animation.

  #### Parameters

  + id: string

    The id of the turn marker animation.
  + config: [TurnMarkerAnimationData](../interfaces/foundry.TurnMarkerAnimationData.md)

    The configuration object for the turn marker animation.

  #### Returns void

### getTurnMarkerAnimation

* getTurnMarkerAnimation(id: string): [TurnMarkerAnimationData](../interfaces/foundry.TurnMarkerAnimationData.md)

  Get a turn marker animation by id.

  #### Parameters

  + id: string

    The id of the turn marker configuration.

  #### Returns [TurnMarkerAnimationData](../interfaces/foundry.TurnMarkerAnimationData.md)

  The turn marker configuration object.

### useTurnMarkerAnimation

* useTurnMarkerAnimation(animationId: string): boolean

  Use a turn marker animation.

  #### Parameters

  + animationId: string

    The id of the turn marker animation to use.

  #### Returns boolean

  True if the animation was successfully set, false otherwise.

### `Static`initialize

* initialize(): void

  Register the token ring config and initialize it

  #### Returns void

### `Static`registerSettings

* registerSettings(): void

  Register game settings used by the Combat Tracker

  #### Returns void