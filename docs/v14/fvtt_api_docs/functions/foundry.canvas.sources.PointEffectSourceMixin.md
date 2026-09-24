---
title: "PointEffectSourceMixin | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.canvas.sources.PointEffectSourceMixin.html"
category: "functions"
---

# Function PointEffectSourceMixin

* PointEffectSourceMixin<[T](#pointeffectsourcemixint) extends class>(BaseSource: [T](#pointeffectsourcemixint)): typeof PointEffectSource

  Provides a common framework for effect sources that emanate from a central point and extend within a specific radius.
  This mixin can be used to manage any effect with a point-based origin, such as light, darkness, or other effects.

  #### Type Parameters

  + T extends class

  #### Parameters

  + BaseSource: [T](#pointeffectsourcemixint)

    The base source class to extend

  #### Returns typeof PointEffectSource