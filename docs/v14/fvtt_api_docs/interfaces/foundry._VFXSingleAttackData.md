---
title: "_VFXSingleAttackData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry._VFXSingleAttackData.html"
category: "interfaces"
---

# Interface \_VFXSingleAttackData

interface \_VFXSingleAttackData {  
Â Â Â Â [charge](#charge): [VFXSingleAttackStep](foundry.VFXSingleAttackStep.md);  
Â Â Â Â [impact](#impact): [VFXSingleAttackStep](foundry.VFXSingleAttackStep.md);  
Â Â Â Â [path](#path): [VFXBasePathPoint](foundry.VFXBasePathPoint.md)[];  
Â Â Â Â [pathType](#pathtype): [VFXSingleAttackPathTypeData](foundry.VFXSingleAttackPathTypeData.md);  
Â Â Â Â [projectile](#projectile): [VFXSingleAttackStep](foundry.VFXSingleAttackStep.md) & { speed?: number };  
}

##### Index

### Properties

[charge](#charge)
[impact](#impact)
[path](#path)
[pathType](#pathtype)
[projectile](#projectile)

## Properties

### charge

charge: [VFXSingleAttackStep](foundry.VFXSingleAttackStep.md)

### impact

impact: [VFXSingleAttackStep](foundry.VFXSingleAttackStep.md)

### path

path: [VFXBasePathPoint](foundry.VFXBasePathPoint.md)[]

### pathType

pathType: [VFXSingleAttackPathTypeData](foundry.VFXSingleAttackPathTypeData.md)

### projectile

projectile: [VFXSingleAttackStep](foundry.VFXSingleAttackStep.md) & { speed?: number }