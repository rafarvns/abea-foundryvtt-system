---
title: "ReticuleOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.types.ReticuleOptions.html"
category: "interfaces"
---

# Interface ReticuleOptions

interface ReticuleOptions {  
Â Â Â Â [alpha](#alpha)?: number;  
Â Â Â Â [border](#border)?: { color?: number; width?: number };  
Â Â Â Â [color](#color)?: number;  
Â Â Â Â [margin](#margin)?: number;  
Â Â Â Â [size](#size)?: number;  
}

##### Index

### Properties

[alpha?](#alpha)
[border?](#border)
[color?](#color)
[margin?](#margin)
[size?](#size)

## Properties

### `Optional`alpha

alpha?: number

The alpha value of the arrows.

### `Optional`border

border?: { color?: number; width?: number }

The arrows' border style configuration.

#### Type Declaration

* ##### `Optional`color?: number

  The border color.
* ##### `Optional`width?: number

  The border width.

### `Optional`color

color?: number

The color of the arrows.

### `Optional`margin

margin?: number

The amount of margin between the targeting arrows and the token's bounding
box, expressed as a fraction of an arrow's size.

### `Optional`size

size?: number

The size of the arrows as a proportion of grid size.
Default: `CONFIG.Canvas.targeting.size`.