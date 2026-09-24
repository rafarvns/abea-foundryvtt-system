---
title: "EdgeThresholdData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.canvas.geometry.types.EdgeThresholdData.html"
category: "interfaces"
---

# Interface EdgeThresholdData

interface EdgeThresholdData {  
Â Â Â Â [attenuation](#attenuation)?: boolean;  
Â Â Â Â [darkness](#darkness)?: number;  
Â Â Â Â [light](#light)?: number;  
Â Â Â Â [sight](#sight)?: number;  
Â Â Â Â [sound](#sound)?: number;  
}

##### Index

### Properties

[attenuation?](#attenuation)
[darkness?](#darkness)
[light?](#light)
[sight?](#sight)
[sound?](#sound)

## Properties

### `Optional`attenuation

attenuation?: boolean

Whether to attenuate the source radius when passing through the edge

### `Optional`darkness

darkness?: number

Minimum distance in pixels from a light source for which this edge blocks darkness

### `Optional`light

light?: number

Minimum distance in pixels from a light source for which this edge blocks light

### `Optional`sight

sight?: number

Minimum distance in pixels from a vision source for which this edge blocks vision

### `Optional`sound

sound?: number

Minimum distance in pixels from a sound source for which this edge blocks sound