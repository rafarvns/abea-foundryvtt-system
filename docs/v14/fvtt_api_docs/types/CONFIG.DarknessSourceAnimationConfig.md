---
title: "DarknessSourceAnimationConfig | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/types/CONFIG.DarknessSourceAnimationConfig.html"
category: "types"
---

# Type Alias DarknessSourceAnimationConfig

DarknessSourceAnimationConfig: Record<  
Â Â Â Â string,  
Â Â Â Â {  
Â Â Â Â Â Â Â Â animation: Function;  
Â Â Â Â Â Â Â Â darknessShader: typeof [AdaptiveDarknessShader](../classes/foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md);  
Â Â Â Â Â Â Â Â label: string;  
Â Â Â Â },  
>

A darkness source animation configuration object.