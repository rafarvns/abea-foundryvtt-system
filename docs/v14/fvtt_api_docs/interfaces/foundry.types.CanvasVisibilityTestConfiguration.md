---
title: "CanvasVisibilityTestConfiguration | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.types.CanvasVisibilityTestConfiguration.html"
category: "interfaces"
---

# Interface CanvasVisibilityTestConfiguration

interface CanvasVisibilityTestConfiguration {  
Â Â Â Â [level](#level): [documents](../modules/foundry.documents.md).[Level](../classes/foundry.documents.Level.md);  
Â Â Â Â [object](#object): object | null;  
Â Â Â Â [tests](#tests): [CanvasVisibilityTest](foundry.types.CanvasVisibilityTest.md)[];  
}

##### Index

### Properties

[level](#level)
[object](#object)
[tests](#tests)

## Properties

### level

level: [documents](../modules/foundry.documents.md).[Level](../classes/foundry.documents.Level.md)

The target level

### object

object: object | null

The target object

### tests

tests: [CanvasVisibilityTest](foundry.types.CanvasVisibilityTest.md)[]

An array of visibility tests