---
title: "TokenRingData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.TokenRingData.html"
category: "interfaces"
---

# Interface TokenRingData

interface TokenRingData {  
Â Â Â Â [colors](#colors): { background?: string; ring?: string };  
Â Â Â Â [effects](#effects)?: number;  
Â Â Â Â [enabled](#enabled)?: number;  
Â Â Â Â [subject](#subject): { scale?: number; texture?: string };  
}

##### Index

### Properties

[colors](#colors)
[effects?](#effects)
[enabled?](#enabled)
[subject](#subject)

## Properties

### colors

colors: { background?: string; ring?: string }

#### Type Declaration

* ##### `Optional`background?: string

  Color of the background (behind the token, inside the ring).
* ##### `Optional`ring?: string

  Color of the ring.

### `Optional`effects

effects?: number

Numerical bitmask to toggle effects. Default: 0x01

### `Optional`enabled

enabled?: number

Dynamic Token ring is enabled?

### subject

subject: { scale?: number; texture?: string }

#### Type Declaration

* ##### `Optional`scale?: number

  Scale of the subject texture.
* ##### `Optional`texture?: string

  Path of the subject texture.