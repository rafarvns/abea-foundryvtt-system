---
title: "LightSourceData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.LightSourceData.html"
category: "interfaces"
---

# Interface LightSourceData

interface LightSourceData {  
Â Â Â Â [alpha](#alpha): number;  
Â Â Â Â [attenuation](#attenuation): number;  
Â Â Â Â [bright](#bright): number;  
Â Â Â Â [coloration](#coloration): number;  
Â Â Â Â [contrast](#contrast): number;  
Â Â Â Â [dim](#dim): number;  
Â Â Â Â [luminosity](#luminosity): number;  
Â Â Â Â [saturation](#saturation): number;  
Â Â Â Â [shadows](#shadows): number;  
Â Â Â Â [vision](#vision): boolean;  
}

##### Index

### Properties

[alpha](#alpha)
[attenuation](#attenuation)
[bright](#bright)
[coloration](#coloration)
[contrast](#contrast)
[dim](#dim)
[luminosity](#luminosity)
[saturation](#saturation)
[shadows](#shadows)
[vision](#vision)

## Properties

### alpha

alpha: number

An opacity for the emitted light, if any

### attenuation

attenuation: number

Strength of the attenuation between bright, dim, and dark

### bright

bright: number

The allowed radius of bright vision or illumination

### coloration

coloration: number

The coloration technique applied in the shader

### contrast

contrast: number

The amount of contrast this light applies to the background texture

### dim

dim: number

The allowed radius of dim vision or illumination

### luminosity

luminosity: number

The luminosity applied in the shader

### saturation

saturation: number

The amount of color saturation this light applies to the background texture

### shadows

shadows: number

The depth of shadows this light applies to the background texture

### vision

vision: boolean

Whether or not this source provides a source of vision