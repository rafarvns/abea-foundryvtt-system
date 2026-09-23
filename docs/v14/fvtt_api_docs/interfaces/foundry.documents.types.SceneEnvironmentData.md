---
title: "SceneEnvironmentData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.SceneEnvironmentData.html"
category: "interfaces"
---

# Interface SceneEnvironmentData

interface SceneEnvironmentData {  
Â Â Â Â [base](#base): [EnvironmentData](foundry.documents.types.EnvironmentData.md);  
Â Â Â Â [cycle](#cycle): boolean;  
Â Â Â Â [dark](#dark): [EnvironmentData](foundry.documents.types.EnvironmentData.md);  
Â Â Â Â [darknessLevel](#darknesslevel): number;  
Â Â Â Â [darknessLevelLock](#darknesslevellock): boolean;  
Â Â Â Â [globalLight](#globallight): [GlobalLightData](../types/foundry.documents.types.GlobalLightData.md);  
}

##### Index

### Properties

[base](#base)
[cycle](#cycle)
[dark](#dark)
[darknessLevel](#darknesslevel)
[darknessLevelLock](#darknesslevellock)
[globalLight](#globallight)

## Properties

### base

base: [EnvironmentData](foundry.documents.types.EnvironmentData.md)

The base (darkness level 0) ambience lighting data.

### cycle

cycle: boolean

If cycling between base and dark is activated.

### dark

dark: [EnvironmentData](foundry.documents.types.EnvironmentData.md)

The dark (darkness level 1) ambience lighting data.

### darknessLevel

darknessLevel: number

The ambient darkness level in this Scene, where 0 represents midday (maximum
illumination) and 1 represents midnight (maximum darkness)

### darknessLevelLock

darknessLevelLock: boolean

The darkness level lock state.

### globalLight

globalLight: [GlobalLightData](../types/foundry.documents.types.GlobalLightData.md)

The global light data configuration.