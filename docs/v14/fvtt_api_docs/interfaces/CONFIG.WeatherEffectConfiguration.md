---
title: "WeatherEffectConfiguration | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/CONFIG.WeatherEffectConfiguration.html"
category: "interfaces"
---

# Interface WeatherEffectConfiguration

interface WeatherEffectConfiguration {  
Â Â Â Â [blendMode](#blendmode)?: BLEND\_MODES;  
Â Â Â Â [config](#config)?: object;  
Â Â Â Â [effectClass](#effectclass)?: typeof [WeatherShaderEffect](../classes/foundry.canvas.rendering.shaders.WeatherShaderEffect.md);  
Â Â Â Â [id](#id): string;  
Â Â Â Â [particles](#particles)?: [ParticleGeneratorConfiguration](foundry.canvas.animation.types.ParticleGeneratorConfiguration.md)[];  
Â Â Â Â [performanceLevel](#performancelevel)?: number;  
Â Â Â Â [shaderClass](#shaderclass)?: typeof [AbstractWeatherShader](../classes/foundry.canvas.rendering.shaders.AbstractWeatherShader.md);  
}

##### Index

### Properties

[blendMode?](#blendmode)
[config?](#config)
[effectClass?](#effectclass)
[id](#id)
[particles?](#particles)
[performanceLevel?](#performancelevel)
[shaderClass?](#shaderclass)

## Properties

### `Optional`blendMode

blendMode?: BLEND\_MODES

### `Optional`config

config?: object

### `Optional`effectClass

effectClass?: typeof [WeatherShaderEffect](../classes/foundry.canvas.rendering.shaders.WeatherShaderEffect.md)

### id

id: string

### `Optional`particles

particles?: [ParticleGeneratorConfiguration](foundry.canvas.animation.types.ParticleGeneratorConfiguration.md)[]

### `Optional`performanceLevel

performanceLevel?: number

### `Optional`shaderClass

shaderClass?: typeof [AbstractWeatherShader](../classes/foundry.canvas.rendering.shaders.AbstractWeatherShader.md)