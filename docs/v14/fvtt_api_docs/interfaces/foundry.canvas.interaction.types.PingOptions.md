---
title: "PingOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.canvas.interaction.types.PingOptions.html"
category: "interfaces"
---

# Interface PingOptions

interface PingOptions {  
Â Â Â Â [color](#color)?: string;  
Â Â Â Â [duration](#duration)?: number;  
Â Â Â Â [name](#name)?: string;  
Â Â Â Â [size](#size)?: number;  
}

##### Index

### Properties

[color?](#color)
[duration?](#duration)
[name?](#name)
[size?](#size)

## Properties

### `Optional`color

color?: string

The color of the ping graphic.

### `Optional`duration

duration?: number

The duration of the animation in milliseconds.

### `Optional`name

name?: string

The name for the ping animation to pass to
[foundry.canvas.animation.CanvasAnimation.animate](../classes/foundry.canvas.animation.CanvasAnimation.md#animate).

### `Optional`size

size?: number

The size of the ping graphic.