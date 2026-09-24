---
title: "WallThresholdData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.WallThresholdData.html"
category: "interfaces"
---

# Interface WallThresholdData

interface WallThresholdData {  
Â Â Â Â [attenuation](#attenuation)?: boolean;  
Â Â Â Â [light](#light)?: number;  
Â Â Â Â [sight](#sight)?: number;  
Â Â Â Â [sound](#sound)?: number;  
}

##### Index

### Properties

[attenuation?](#attenuation)
[light?](#light)
[sight?](#sight)
[sound?](#sound)

## Properties

### `Optional`attenuation

attenuation?: boolean

Whether to attenuate the source radius when passing through the wall

### `Optional`light

light?: number

Minimum distance in grid units from a light source for which this wall blocks light
and darkness

### `Optional`sight

sight?: number

Minimum distance in grid units from a vision source for which this wall blocks vision

### `Optional`sound

sound?: number

Minimum distance in grid units from a sound source for which this wall blocks sound