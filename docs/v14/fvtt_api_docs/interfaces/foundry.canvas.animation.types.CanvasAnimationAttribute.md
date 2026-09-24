---
title: "CanvasAnimationAttribute | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.canvas.animation.types.CanvasAnimationAttribute.html"
category: "interfaces"
---

# Interface CanvasAnimationAttribute

interface CanvasAnimationAttribute {  
Â Â Â Â [attribute](#attribute): string;  
Â Â Â Â [color](#color)?: boolean;  
Â Â Â Â [delta](#delta)?: number;  
Â Â Â Â [done](#done)?: number;  
Â Â Â Â [from](#from)?: number | [Color](../classes/foundry.utils.Color.md);  
Â Â Â Â [parent](#parent): object;  
Â Â Â Â [to](#to): number | [Color](../classes/foundry.utils.Color.md);  
}

##### Index

### Properties

[attribute](#attribute)
[color?](#color)
[delta?](#delta)
[done?](#done)
[from?](#from)
[parent](#parent)
[to](#to)

## Properties

### attribute

attribute: string

The attribute name being animated

### `Optional`color

color?: boolean

Is this a color animation that applies to RGB channels

### `Optional`delta

delta?: number

The computed delta between to and from

### `Optional`done

done?: number

The amount of the total delta which has been animated

### `Optional`from

from?: number | [Color](../classes/foundry.utils.Color.md)

An initial value of the attribute, otherwise `parent[attribute]` is used

### parent

parent: object

The object within which the attribute is stored

### to

to: number | [Color](../classes/foundry.utils.Color.md)

The destination value of the attribute