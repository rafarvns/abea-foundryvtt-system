---
title: "SceneViewOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.SceneViewOptions.html"
category: "interfaces"
---

# Interface SceneViewOptions

interface SceneViewOptions {  
Â Â Â Â [controlledTokens](#controlledtokens)?: string[];  
Â Â Â Â [level](#level)?: string;  
Â Â Â Â [transition](#transition)?: { duration?: number; type?: string };  
}

##### Index

### Properties

[controlledTokens?](#controlledtokens)
[level?](#level)
[transition?](#transition)

## Properties

### `Optional`controlledTokens

controlledTokens?: string[]

The IDs of initially controlled tokens

### `Optional`level

level?: string

The ID of the Level to view

### `Optional`transition

transition?: { duration?: number; type?: string }

The transition animation to used when viewing the scene

#### Type Declaration

* ##### `Optional`duration?: number

  The duration of the transition animation
* ##### `Optional`type?: string

  The type of the transition animation