---
title: "TokenMovementOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.TokenMovementOptions.html"
category: "interfaces"
---

# Interface TokenMovementOptions

interface TokenMovementOptions {  
Â Â Â Â [animate](#animate)?: boolean;  
Â Â Â Â [animation](#animation)?: {  
Â Â Â Â Â Â Â Â duration?: number;  
Â Â Â Â Â Â Â Â easing?: [CanvasAnimationEasingFunction](../types/foundry.canvas.animation.types.CanvasAnimationEasingFunction.md);  
Â Â Â Â Â Â Â Â linkToMovement?: boolean;  
Â Â Â Â Â Â Â Â movementSpeed?: number;  
Â Â Â Â };  
Â Â Â Â [autoRotate](#autorotate)?: boolean;  
Â Â Â Â [constrainOptions](#constrainoptions)?: Omit<  
Â Â Â Â Â Â Â Â [TokenConstrainMovementPathOptions](foundry.types.TokenConstrainMovementPathOptions.md),  
Â Â Â Â Â Â Â Â "preview"  
Â Â Â Â Â Â Â Â | "history"  
Â Â Â Â Â Â Â Â | "measureOptions",  
Â Â Â Â >;  
Â Â Â Â [id](#id)?: string;  
Â Â Â Â [measureOptions](#measureoptions)?: Omit<[TokenMeasureMovementPathOptions](foundry.types.TokenMeasureMovementPathOptions.md), "preview">;  
Â Â Â Â [method](#method)?: [TokenMovementMethod](../types/foundry.documents.types.TokenMovementMethod.md);  
Â Â Â Â [pan](#pan)?: boolean | [TokenPanningOptions](foundry.types.TokenPanningOptions.md);  
Â Â Â Â [planned](#planned)?: boolean;  
Â Â Â Â [showRuler](#showruler)?: boolean;  
Â Â Â Â [split](#split)?: boolean;  
Â Â Â Â [terrainOptions](#terrainoptions)?: Omit<[TokenCreateTerrainMovementPathOptions](foundry.types.TokenCreateTerrainMovementPathOptions.md), "preview">;  
}

##### Index

### Properties

[animate?](#animate)
[animation?](#animation)
[autoRotate?](#autorotate)
[constrainOptions?](#constrainoptions)
[id?](#id)
[measureOptions?](#measureoptions)
[method?](#method)
[pan?](#pan)
[planned?](#planned)
[showRuler?](#showruler)
[split?](#split)
[terrainOptions?](#terrainoptions)

## Properties

### `Optional`animate

animate?: boolean

Animate movement. Default: `true`.

### `Optional`animation

animation?: {  
Â Â Â Â duration?: number;  
Â Â Â Â easing?: [CanvasAnimationEasingFunction](../types/foundry.canvas.animation.types.CanvasAnimationEasingFunction.md);  
Â Â Â Â linkToMovement?: boolean;  
Â Â Â Â movementSpeed?: number;  
}

The animation options.

#### Type Declaration

* ##### `Optional`duration?: number

  The duration of the animation in milliseconds (nonnegative).
* ##### `Optional`easing?: [CanvasAnimationEasingFunction](../types/foundry.canvas.animation.types.CanvasAnimationEasingFunction.md)

  The easing function of the animation of non-movement
  properties. Default: `undefined` (linear).
* ##### `Optional`linkToMovement?: boolean

  Set the duration of non-movement properties to the animation.
* ##### `Optional`movementSpeed?: number

  The base movement speed in grid size per second (positive).

### `Optional`autoRotate

autoRotate?: boolean

Automatically rotate the token in the direction of movement? Default:
`game.settings.get("core", "tokenAutoRotate")` if `method` is `"dragging"` or `"keyboard"` otherwise `false`.

### `Optional`constrainOptions

constrainOptions?: Omit<  
Â Â Â Â [TokenConstrainMovementPathOptions](foundry.types.TokenConstrainMovementPathOptions.md),  
Â Â Â Â "preview"  
Â Â Â Â | "history"  
Â Â Â Â | "measureOptions",  
>

The options to constrain movement.

### `Optional`id

id?: string

The movement ID, which must be unique. Default: auto-generated.

### `Optional`measureOptions

measureOptions?: Omit<[TokenMeasureMovementPathOptions](foundry.types.TokenMeasureMovementPathOptions.md), "preview">

The options to measure movement.

### `Optional`method

method?: [TokenMovementMethod](../types/foundry.documents.types.TokenMovementMethod.md)

The method of movement. Default: `"api"`.

### `Optional`pan

pan?: boolean | [TokenPanningOptions](foundry.types.TokenPanningOptions.md)

Pan the canvas (with transition animation) to the destination
if the token is controlled? Default: `true`.

### `Optional`planned

planned?: boolean

Don't start the movement yet? Default: `false`.

### `Optional`showRuler

showRuler?: boolean

Show the ruler during the movement animation of the token? Default: `true` if
`method` is `"dragging"` otherwise `false`.
duration of movement. Default: `false`.

### `Optional`split

split?: boolean

Start a new subpath? Default: `false` if it's movement
without history or keyboard movement that follows keyboard
movement, otherwise `true`.

### `Optional`terrainOptions

terrainOptions?: Omit<[TokenCreateTerrainMovementPathOptions](foundry.types.TokenCreateTerrainMovementPathOptions.md), "preview">

The terrain movement options.