---
title: "soundEffects | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/variables/CONFIG.soundEffects.html"
category: "variables"
---

# Variable soundEffects`Const`

soundEffects: Record<  
Â Â Â Â string,  
Â Â Â Â {  
Â Â Â Â Â Â Â Â effectClass: | (  
Â Â Â Â Â Â Â Â Â Â Â Â new (  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â context: BaseAudioContext,  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â options?: BiquadFilterOptions,  
Â Â Â Â Â Â Â Â Â Â Â Â ) => BiquadFilterNode  
Â Â Â Â Â Â Â Â )  
Â Â Â Â Â Â Â Â | (  
Â Â Â Â Â Â Â Â Â Â Â Â new (  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â context: BaseAudioContext,  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â options?: ConvolverOptions,  
Â Â Â Â Â Â Â Â Â Â Â Â ) => ConvolverNode  
Â Â Â Â Â Â Â Â );  
Â Â Â Â Â Â Â Â label: string;  
Â Â Â Â },  
> = ...

An enumeration of sound effects which can be applied to Sound instances.