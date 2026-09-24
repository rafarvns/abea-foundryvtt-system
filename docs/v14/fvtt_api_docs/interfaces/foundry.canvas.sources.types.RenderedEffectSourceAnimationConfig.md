---
title: "RenderedEffectSourceAnimationConfig | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.canvas.sources.types.RenderedEffectSourceAnimationConfig.html"
category: "interfaces"
---

# Interface RenderedEffectSourceAnimationConfig

interface RenderedEffectSourceAnimationConfig {  
Â Â Â Â [animation](#animation)?: Function;  
Â Â Â Â [backgroundShader](#backgroundshader)?: any;  
Â Â Â Â [colorationShader](#colorationshader)?: any;  
Â Â Â Â [darknessShader](#darknessshader)?: any;  
Â Â Â Â [illuminationShader](#illuminationshader)?: any;  
Â Â Â Â [label](#label)?: string;  
Â Â Â Â [seed](#seed)?: number;  
Â Â Â Â [time](#time)?: number;  
}

##### Index

### Properties

[animation?](#animation)
[backgroundShader?](#backgroundshader)
[colorationShader?](#colorationshader)
[darknessShader?](#darknessshader)
[illuminationShader?](#illuminationshader)
[label?](#label)
[seed?](#seed)
[time?](#time)

## Properties

### `Optional`animation

animation?: Function

The animation function that runs every frame

### `Optional`backgroundShader

backgroundShader?: any

A custom background shader used by this animation

### `Optional`colorationShader

colorationShader?: any

A custom coloration shader used by this animation

### `Optional`darknessShader

darknessShader?: any

A custom darkness shader used by this animation

### `Optional`illuminationShader

illuminationShader?: any

A custom illumination shader used by this animation

### `Optional`label

label?: string

The human-readable (localized) label for the animation

### `Optional`seed

seed?: number

The animation seed

### `Optional`time

time?: number

The animation time