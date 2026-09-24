---
title: "EventEmitterMixin | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.EventEmitterMixin.html"
category: "functions"
---

# Function EventEmitterMixin

* EventEmitterMixin<[TBaseClass](#eventemittermixintbaseclass) extends Function>(  
  Â Â Â Â BaseClass?: [TBaseClass](#eventemittermixintbaseclass),  
  ): typeof [EventEmitter](../classes/foundry.EventEmitter.md)

  Augment a base class with EventEmitter behavior.

  #### Type Parameters

  + TBaseClass extends Function

  #### Parameters

  + `Optional`BaseClass: [TBaseClass](#eventemittermixintbaseclass) = ...

    Some base class to be augmented with event emitter functionality: defaults to an
    anonymous empty class.

  #### Returns typeof [EventEmitter](../classes/foundry.EventEmitter.md)