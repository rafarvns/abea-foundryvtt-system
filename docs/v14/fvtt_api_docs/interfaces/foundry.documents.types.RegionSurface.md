---
title: "RegionSurface | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.RegionSurface.html"
category: "interfaces"
---

# Interface RegionSurface

interface RegionSurface {  
Â Â Â Â [culling](#culling): boolean;  
Â Â Â Â [elevation](#elevation): number;  
Â Â Â Â [exposure](#exposure): boolean;  
Â Â Â Â [key](#key): string;  
Â Â Â Â [light](#light): boolean;  
Â Â Â Â [move](#move): boolean;  
Â Â Â Â [occlusion](#occlusion): boolean;  
Â Â Â Â [region](#region): [RegionDocument](../classes/foundry.documents.RegionDocument.md);  
Â Â Â Â [sight](#sight): boolean;  
Â Â Â Â [sound](#sound): boolean;  
}

##### Index

### Properties

[culling](#culling)
[elevation](#elevation)
[exposure](#exposure)
[key](#key)
[light](#light)
[move](#move)
[occlusion](#occlusion)
[region](#region)
[sight](#sight)
[sound](#sound)

## Properties

### culling

culling: boolean

Does the surface cause culling?

### elevation

elevation: number

The elevation of the surface

### exposure

exposure: boolean

Does the surface cause exposure?

### key

key: string

A key that uniquely identifies the surface

### light

light: boolean

Does the surface restrict light?

### move

move: boolean

Does the surface restrict movement?

### occlusion

occlusion: boolean

Does the surface cause occlusion?

### region

region: [RegionDocument](../classes/foundry.documents.RegionDocument.md)

The region of the surface

### sight

sight: boolean

Does the surface restrict sight?

### sound

sound: boolean

Does the surface restrict sound?