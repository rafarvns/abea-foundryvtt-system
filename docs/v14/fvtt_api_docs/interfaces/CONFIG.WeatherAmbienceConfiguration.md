---
title: "WeatherAmbienceConfiguration | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/CONFIG.WeatherAmbienceConfiguration.html"
category: "interfaces"
---

# Interface WeatherAmbienceConfiguration

Available Weather Effects implementations

interface WeatherAmbienceConfiguration {  
Â Â Â Â [effects](#effects): [WeatherEffectConfiguration](CONFIG.WeatherEffectConfiguration.md)[];  
Â Â Â Â [filter](#filter)?: { blendMode?: BLEND\_MODES; enabled: boolean };  
Â Â Â Â [id](#id): string;  
Â Â Â Â [label](#label): string;  
}

##### Index

### Properties

[effects](#effects)
[filter?](#filter)
[id](#id)
[label](#label)

## Properties

### effects

effects: [WeatherEffectConfiguration](CONFIG.WeatherEffectConfiguration.md)[]

### `Optional`filter

filter?: { blendMode?: BLEND\_MODES; enabled: boolean }

### id

id: string

### label

label: string