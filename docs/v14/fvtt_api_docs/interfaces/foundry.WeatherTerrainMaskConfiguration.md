---
title: "WeatherTerrainMaskConfiguration | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.WeatherTerrainMaskConfiguration.html"
category: "interfaces"
---

# Interface WeatherTerrainMaskConfiguration

interface WeatherTerrainMaskConfiguration {  
Â Â Â Â [channelWeights](#channelweights): number[];  
Â Â Â Â [enabled](#enabled): boolean;  
Â Â Â Â [reverse](#reverse)?: boolean;  
Â Â Â Â [texture](#texture): Texture<Resource> | RenderTexture;  
}

##### Index

### Properties

[channelWeights](#channelweights)
[enabled](#enabled)
[reverse?](#reverse)
[texture](#texture)

## Properties

### channelWeights

channelWeights: number[]

An RGBA array of channel weights applied to the mask texture.

### enabled

enabled: boolean

Enable or disable this mask.

### `Optional`reverse

reverse?: boolean

If the mask should be reversed.

### texture

texture: Texture<Resource> | RenderTexture

A texture which defines the mask region.