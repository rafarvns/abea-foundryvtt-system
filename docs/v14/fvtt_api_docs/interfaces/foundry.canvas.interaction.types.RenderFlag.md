---
title: "RenderFlag | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.canvas.interaction.types.RenderFlag.html"
category: "interfaces"
---

# Interface RenderFlag

interface RenderFlag {  
Â Â Â Â [deprecated](#deprecated)?: object;  
Â Â Â Â [propagate](#propagate)?: string[];  
Â Â Â Â [reset](#reset)?: string[];  
}

##### Index

### Properties

[deprecated?](#deprecated)
[propagate?](#propagate)
[reset?](#reset)

## Properties

### `Optional`deprecated

deprecated?: object

Is this flag deprecated? The deprecation options are passed to
logCompatibilityWarning. The deprectation message is auto-generated
unless message is passed with the options.
By default the message is logged only once.

### `Optional`propagate

propagate?: string[]

Activating this flag also sets these flags to true

### `Optional`reset

reset?: string[]

Activating this flag resets these flags to false