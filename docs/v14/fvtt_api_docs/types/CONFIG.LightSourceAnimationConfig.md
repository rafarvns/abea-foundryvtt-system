---
title: "LightSourceAnimationConfig | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/types/CONFIG.LightSourceAnimationConfig.html"
category: "types"
---

# Type Alias LightSourceAnimationConfig

LightSourceAnimationConfig: Record<  
Â Â Â Â string,  
Â Â Â Â {  
Â Â Â Â Â Â Â Â animation: Function;  
Â Â Â Â Â Â Â Â backgroundShader?: typeof [AdaptiveBackgroundShader](../classes/foundry.canvas.rendering.shaders.AdaptiveBackgroundShader.md);  
Â Â Â Â Â Â Â Â colorationShader: typeof [AdaptiveColorationShader](../classes/foundry.canvas.rendering.shaders.AdaptiveColorationShader.md);  
Â Â Â Â Â Â Â Â illuminationShader?: typeof [AdaptiveIlluminationShader](../classes/foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md);  
Â Â Â Â Â Â Â Â label: string;  
Â Â Â Â },  
>

A light source animation configuration object.