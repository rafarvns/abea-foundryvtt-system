---
title: "TurnMarkerAnimationConfigData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.TurnMarkerAnimationConfigData.html"
category: "interfaces"
---

# Interface TurnMarkerAnimationConfigData

The turn marker config data.

interface TurnMarkerAnimationConfigData {  
Â Â Â Â [pulse](#pulse): { max?: number; min?: number; speed?: number };  
Â Â Â Â [shader](#shader)?: any;  
Â Â Â Â [spin](#spin)?: number;  
}

##### Index

### Properties

[pulse](#pulse)
[shader?](#shader)
[spin?](#spin)

## Properties

### pulse

pulse: { max?: number; min?: number; speed?: number }

The pulse settings.

#### Type Declaration

* ##### `Optional`max?: number

  The maximum pulse value.
* ##### `Optional`min?: number

  The minimum pulse value.
* ##### `Optional`speed?: number

  The speed of the pulse.

### `Optional`shader

shader?: any

A shader class to apply or null.

### `Optional`spin

spin?: number

The spin speed for the animation.