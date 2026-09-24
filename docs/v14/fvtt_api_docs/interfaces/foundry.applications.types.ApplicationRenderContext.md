---
title: "ApplicationRenderContext | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.applications.types.ApplicationRenderContext.html"
category: "interfaces"
---

# Interface ApplicationRenderContext

Context data provided to the renderer

interface ApplicationRenderContext {  
Â Â Â Â [tabs](#tabs)?: Record<string, [ApplicationTab](foundry.applications.types.ApplicationTab.md)>;  
}

##### Index

### Properties

[tabs?](#tabs)

## Properties

### `Optional`tabs

tabs?: Record<string, [ApplicationTab](foundry.applications.types.ApplicationTab.md)>

Tab data prepared from an entry in
[foundry.applications.api.ApplicationV2.TABS](../classes/foundry.applications.api.ApplicationV2.md#tabs)