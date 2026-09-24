---
title: "ShaderTechnique | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.ShaderTechnique.html"
category: "interfaces"
---

# Interface ShaderTechnique

interface ShaderTechnique {  
Â Â Â Â [background](#background)?: string;  
Â Â Â Â [coloration](#coloration)?: string;  
Â Â Â Â [id](#id): number;  
Â Â Â Â [illumination](#illumination)?: string;  
Â Â Â Â [label](#label): string;  
}

##### Index

### Properties

[background?](#background)
[coloration?](#coloration)
[id](#id)
[illumination?](#illumination)
[label](#label)

## Properties

### `Optional`background

background?: string

The background shader fragment when the technique is used

### `Optional`coloration

coloration?: string

The coloration shader fragment when the technique is used

### id

id: number

The numeric identifier of the technique

### `Optional`illumination

illumination?: string

The illumination shader fragment when the technique is used

### label

label: string

The localization string that labels the technique