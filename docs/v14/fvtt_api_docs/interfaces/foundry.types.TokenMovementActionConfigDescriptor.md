---
title: "TokenMovementActionConfigDescriptor | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.types.TokenMovementActionConfigDescriptor.html"
category: "interfaces"
---

# Interface TokenMovementActionConfigDescriptor

interface TokenMovementActionConfigDescriptor {  
Â Â Â Â [canSelect](#canselect):  
Â Â Â Â Â Â Â Â | boolean  
Â Â Â Â Â Â Â Â | ((token: [TokenDocument](../classes/foundry.documents.TokenDocument.md) | [PrototypeToken](../classes/foundry.data.PrototypeToken.md)) => boolean);  
Â Â Â Â [costMultiplier](#costmultiplier)?: number;  
Â Â Â Â [deriveTerrainDifficulty](#deriveterraindifficulty)?:  
Â Â Â Â Â Â Â Â | ((nonDerivedDifficulties: { [action: string]: number }) => number)  
Â Â Â Â Â Â Â Â | null;  
Â Â Â Â [getAnimationOptions](#getanimationoptions)?: (  
Â Â Â Â Â Â Â Â token: [TokenDocument](../classes/foundry.documents.TokenDocument.md),  
Â Â Â Â ) => Pick<  
Â Â Â Â Â Â Â Â [TokenAnimationOptions](foundry.types.TokenAnimationOptions.md),  
Â Â Â Â Â Â Â Â "duration"  
Â Â Â Â Â Â Â Â | "movementSpeed"  
Â Â Â Â Â Â Â Â | "easing"  
Â Â Â Â Â Â Â Â | "ontick",  
Â Â Â Â >;  
Â Â Â Â [getCostFunction](#getcostfunction)?: (  
Â Â Â Â Â Â Â Â token: [TokenDocument](../classes/foundry.documents.TokenDocument.md),  
Â Â Â Â Â Â Â Â options: [TokenMeasureMovementPathOptions](foundry.types.TokenMeasureMovementPathOptions.md),  
Â Â Â Â ) => [TokenMovementActionCostFunction](../types/foundry.types.TokenMovementActionCostFunction.md);  
Â Â Â Â [icon](#icon)?: string;  
Â Â Â Â [img](#img)?: string;  
Â Â Â Â [label](#label): string;  
Â Â Â Â [measure](#measure)?: boolean;  
Â Â Â Â [order](#order)?: number;  
Â Â Â Â [speedMultiplier](#speedmultiplier)?: number;  
Â Â Â Â [teleport](#teleport)?: boolean;  
Â Â Â Â [terrainAction](#terrainaction)?: string | null;  
Â Â Â Â [visualize](#visualize)?: boolean;  
Â Â Â Â [walls](#walls)?: "darkness" | "light" | "sight" | "sound" | "move" | null;  
}

##### Index

### Properties

[canSelect](#canselect)
[costMultiplier?](#costmultiplier)
[deriveTerrainDifficulty?](#deriveterraindifficulty)
[getAnimationOptions?](#getanimationoptions)
[getCostFunction?](#getcostfunction)
[icon?](#icon)
[img?](#img)
[label](#label)
[measure?](#measure)
[order?](#order)
[speedMultiplier?](#speedmultiplier)
[teleport?](#teleport)
[terrainAction?](#terrainaction)
[visualize?](#visualize)
[walls?](#walls)

## Properties

### canSelect

canSelect: boolean | ((token: [TokenDocument](../classes/foundry.documents.TokenDocument.md) | [PrototypeToken](../classes/foundry.data.PrototypeToken.md)) => boolean)

Can the current User select this movement action for the given Token? If selectable, the movement action of the
Token can be set to this movement action by the User via the UI and when cycling. Default: `true`.

### `Optional`costMultiplier

costMultiplier?: number

The cost multiplier. This property is ignored if `getCostFunction` is defined.
Default: `1`.

### `Optional`deriveTerrainDifficulty

deriveTerrainDifficulty?:  
Â Â Â Â | ((nonDerivedDifficulties: { [action: string]: number }) => number)  
Â Â Â Â | null

If set, this function is used to derive the terrain difficulty from from nonderived difficulties,
which are those that do not have `deriveTerrainDifficulty` set.
Used by [foundry.data.regionBehaviors.ModifyMovementCostRegionBehaviorType](../classes/foundry.data.regionBehaviors.ModifyMovementCostRegionBehaviorType.md).
Derived terrain difficulties are not configurable via the behavior UI.

### `Optional`getAnimationOptions

getAnimationOptions?: (  
Â Â Â Â token: [TokenDocument](../classes/foundry.documents.TokenDocument.md),  
) => Pick<  
Â Â Â Â [TokenAnimationOptions](foundry.types.TokenAnimationOptions.md),  
Â Â Â Â "duration"  
Â Â Â Â | "movementSpeed"  
Â Â Â Â | "easing"  
Â Â Â Â | "ontick",  
>

Get the default animation options for this movement action.
Default: `() => ({speedMultiplier})`.

### `Optional`getCostFunction

getCostFunction?: (  
Â Â Â Â token: [TokenDocument](../classes/foundry.documents.TokenDocument.md),  
Â Â Â Â options: [TokenMeasureMovementPathOptions](foundry.types.TokenMeasureMovementPathOptions.md),  
) => [TokenMovementActionCostFunction](../types/foundry.types.TokenMovementActionCostFunction.md)

The cost modification function.
Default: `() => cost => cost * costMultiplier`.

### `Optional`icon

icon?: string

The FontAwesome icon class.

### `Optional`img

img?: string

An image filename. Takes precedence over the `icon` if both are supplied.

### label

label: string

The label of the movement action.

### `Optional`measure

measure?: boolean

Is the movement measured? The distance, cost, spaces, and diagonals
of a segment that is not measured are always 0. Default: `true`.

### `Optional`order

order?: number

The number that is used to sort the movement actions / movement action configs.
Determines the order in the Token Config/HUD and of cycling. Default: `0`.

### `Optional`speedMultiplier

speedMultiplier?: number

The movement speed multiplier. This property is ignored if
`getAnimationOptions` is defined.

### `Optional`teleport

teleport?: boolean

Is teleportation? If true, the movement does not go through all grid spaces
between the origin and destination: it goes from the origin immediately to the
destination grid space. Default: `false`.

### `Optional`terrainAction

terrainAction?: string | null

Derive the terrain difficulty from this movement action. If `null`, the
terrain difficulty is always 1. This property is ignored if `deriveTerrainDifficulty` is defined.

### `Optional`visualize

visualize?: boolean

Is segment of the movement visualized by the ruler? Default: `true`.

### `Optional`walls

walls?: "darkness" | "light" | "sight" | "sound" | "move" | null

The type of walls and surfaces that block this movement, if any.
Default: `"move"`.