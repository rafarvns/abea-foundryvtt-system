---
title: "CanvasVisibilityTest | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.types.CanvasVisibilityTest.html"
category: "interfaces"
---

# Interface CanvasVisibilityTest

interface CanvasVisibilityTest {  
Â Â Â Â [level](#level): [documents](../modules/foundry.documents.md).[Level](../classes/foundry.documents.Level.md);  
Â Â Â Â [los](#los): Map<[PointVisionSource](../classes/foundry.canvas.sources.PointVisionSource.md), boolean>;  
Â Â Â Â [point](#point): [ElevatedPoint](foundry.types.ElevatedPoint.md);  
}

##### Index

### Properties

[level](#level)
[los](#los)
[point](#point)

## Properties

### level

level: [documents](../modules/foundry.documents.md).[Level](../classes/foundry.documents.Level.md)

The target level

### los

los: Map<[PointVisionSource](../classes/foundry.canvas.sources.PointVisionSource.md), boolean>

The LOS test cache

### point

point: [ElevatedPoint](foundry.types.ElevatedPoint.md)

The target point