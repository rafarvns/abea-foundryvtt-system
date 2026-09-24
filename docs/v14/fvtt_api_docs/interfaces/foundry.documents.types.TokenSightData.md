---
title: "TokenSightData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.TokenSightData.html"
category: "interfaces"
---

# Interface TokenSightData

interface TokenSightData {  
Â Â Â Â [angle](#angle)?: number;  
Â Â Â Â [attenuation](#attenuation)?: number;  
Â Â Â Â [brightness](#brightness)?: number;  
Â Â Â Â [color](#color)?: string;  
Â Â Â Â [contrast](#contrast)?: number;  
Â Â Â Â [enabled](#enabled): boolean;  
Â Â Â Â [range](#range): number | null;  
Â Â Â Â [saturation](#saturation)?: number;  
Â Â Â Â [visionMode](#visionmode)?: string;  
}

##### Index

### Properties

[angle?](#angle)
[attenuation?](#attenuation)
[brightness?](#brightness)
[color?](#color)
[contrast?](#contrast)
[enabled](#enabled)
[range](#range)
[saturation?](#saturation)
[visionMode?](#visionmode)

## Properties

### `Optional`angle

angle?: number

An angle at which the Token can see relative to their direction of facing

### `Optional`attenuation

attenuation?: number

A degree of attenuation which gradually fades the edges of the visible area

### `Optional`brightness

brightness?: number

An advanced customization for the perceived brightness of the visible area

### `Optional`color

color?: string

A special color which applies a hue to the visible area

### `Optional`contrast

contrast?: number

An advanced customization for contrast within the visible area

### enabled

enabled: boolean

Should vision computation and rendering be active for this Token?

### range

range: number | null

How far in distance units the Token can see without the aid of a light
source. If null, the sight range is unlimited.

### `Optional`saturation

saturation?: number

An advanced customization of color saturation within the visible area

### `Optional`visionMode

visionMode?: string

The vision mode which is used to render the appearance of the visible area