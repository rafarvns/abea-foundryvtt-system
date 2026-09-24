---
title: "TextEditorEngineConfig | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/CONFIG.TextEditorEngineConfig.html"
category: "interfaces"
---

# Interface TextEditorEngineConfig

interface TextEditorEngineConfig {  
Â Â Â Â [create](#create): [TextEditorEngineFactory](../types/CONFIG.TextEditorEngineFactory.md);  
Â Â Â Â [render](#render): [TextEditorEngineRenderer](../types/CONFIG.TextEditorEngineRenderer.md);  
}

##### Index

### Properties

[create](#create)
[render](#render)

## Properties

### create

create: [TextEditorEngineFactory](../types/CONFIG.TextEditorEngineFactory.md)

A callback used to instantiate the editor instance.

### render

render: [TextEditorEngineRenderer](../types/CONFIG.TextEditorEngineRenderer.md)

A callback used to generate markup used for the createEditorInput method
and {{ editor }} handlebars helper.