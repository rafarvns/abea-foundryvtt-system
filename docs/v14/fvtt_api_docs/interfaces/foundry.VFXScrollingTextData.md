---
title: "VFXScrollingTextData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.VFXScrollingTextData.html"
category: "interfaces"
---

# Interface VFXScrollingTextData

interface VFXScrollingTextData {  
Â Â Â Â [content](#content): string;  
Â Â Â Â [distance](#distance)?: number;  
Â Â Â Â [duration](#duration): number;  
Â Â Â Â [jitter](#jitter): number;  
Â Â Â Â [origin](#origin): { x: number; y: number };  
Â Â Â Â [scrollDirection](#scrolldirection): number;  
Â Â Â Â [textAnchor](#textanchor): number;  
Â Â Â Â [textStyle](#textstyle): object;  
}

##### Index

### Properties

[content](#content)
[distance?](#distance)
[duration](#duration)
[jitter](#jitter)
[origin](#origin)
[scrollDirection](#scrolldirection)
[textAnchor](#textanchor)
[textStyle](#textstyle)

## Properties

### content

content: string

The text string to display

### `Optional`distance

distance?: number

The distance in pixels the text travels; defaults to twice the text size

### duration

duration: number

The duration of the scrolling effect in milliseconds (default 2000)

### jitter

jitter: number

Randomization between [0, 1] applied to the initial position (default 0)

### origin

origin: { x: number; y: number }

The canvas point where the text originates

### scrollDirection

scrollDirection: number

The direction the text scrolls in CONST.TEXT\_ANCHOR\_POINTS (default TOP)

### textAnchor

textAnchor: number

An anchor point in CONST.TEXT\_ANCHOR\_POINTS (default CENTER)

### textStyle

textStyle: object

Additional PIXI.TextStyle parameters applied to the text