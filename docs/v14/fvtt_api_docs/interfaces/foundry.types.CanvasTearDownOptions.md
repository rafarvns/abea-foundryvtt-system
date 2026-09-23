---
title: "CanvasTearDownOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.types.CanvasTearDownOptions.html"
category: "interfaces"
---

# Interface CanvasTearDownOptions

interface CanvasTearDownOptions {  
Â Â Â Â [nextLevel](#nextlevel)?: [documents](../modules/foundry.documents.md).[Level](../classes/foundry.documents.Level.md) | null;  
Â Â Â Â [nextScene](#nextscene)?: [documents](../modules/foundry.documents.md).[Scene](../classes/foundry.documents.Scene.md) | null;  
}

##### Index

### Properties

[nextLevel?](#nextlevel)
[nextScene?](#nextscene)

## Properties

### `Optional`nextLevel

nextLevel?: [documents](../modules/foundry.documents.md).[Level](../classes/foundry.documents.Level.md) | null

The Level about to be drawn, or null if the canvas is going blank.

### `Optional`nextScene

nextScene?: [documents](../modules/foundry.documents.md).[Scene](../classes/foundry.documents.Scene.md) | null

The Scene about to be drawn, or null if the canvas is going blank.