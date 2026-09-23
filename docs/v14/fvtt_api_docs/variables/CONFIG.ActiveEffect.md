---
title: "ActiveEffect | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/variables/CONFIG.ActiveEffect.html"
category: "variables"
---

# Variable ActiveEffect`Const`

ActiveEffect: {  
Â Â Â Â changeTypes: Record<string, [ActiveEffectChangeTypeConfig](../interfaces/CONFIG.ActiveEffectChangeTypeConfig.md)>;  
Â Â Â Â compendiumBanner: string;  
Â Â Â Â dataModels: Record<string, typeof [ActiveEffectTypeDataModel](../classes/foundry.data.ActiveEffectTypeDataModel.md)>;  
Â Â Â Â defaultType: string;  
Â Â Â Â documentClass: typeof [documents](../modules/foundry.documents.md).[ActiveEffect](../classes/foundry.documents.ActiveEffect.md);  
Â Â Â Â embedHandlers: [DocumentEmbedHandler](../types/CONFIG.DocumentEmbedHandler.md)[];  
Â Â Â Â expiryAction: "update" | "delete" | null;  
Â Â Â Â expiryEvents: Record<string, string>;  
Â Â Â Â phases: Record<string, { hint: string; label: string }>;  
Â Â Â Â sidebarIcon: string;  
Â Â Â Â typeHints: Record<string, string>;  
Â Â Â Â typeIcons: Record<string, string>;  
Â Â Â Â typeLabels: Record<string, string>;  
} = ...

Configuration for the ActiveEffect embedded document type

#### Type Declaration

* ##### changeTypes: Record<string, [ActiveEffectChangeTypeConfig](../interfaces/CONFIG.ActiveEffectChangeTypeConfig.md)>
* ##### compendiumBanner: string
* ##### dataModels: Record<string, typeof [ActiveEffectTypeDataModel](../classes/foundry.data.ActiveEffectTypeDataModel.md)>
* ##### defaultType: string
* ##### documentClass: typeof [documents](../modules/foundry.documents.md).[ActiveEffect](../classes/foundry.documents.ActiveEffect.md)
* ##### embedHandlers: [DocumentEmbedHandler](../types/CONFIG.DocumentEmbedHandler.md)[]
* ##### expiryAction: "update" | "delete" | null

  The action taken by the [ActiveEffectRegistry](../classes/foundry.helpers.ActiveEffectRegistry.md) upon an ActiveEffect's expiration. An update action will
  set the value of [ActiveEffectDuration#expired](../interfaces/foundry.documents.types.ActiveEffectDuration.md#expired).
* ##### expiryEvents: Record<string, string>

  Additional expiry events registered by packages, with the key of each entry being an identifier and the value a
  label. Such events must be triggered by calling [documents.ActiveEffect.registry.refresh](../classes/foundry.helpers.ActiveEffectRegistry.md#refresh). If an expiry event
  happens in tandem with advancing world time, the advancement must be done before notifying the registry of the
  custom event.
* ##### phases: Record<string, { hint: string; label: string }>

  Additional change phases registered by packages. Actor#applyActiveEffects must be called by introducing packages
  at the desired points in data preparation or on certain events.
* ##### sidebarIcon: string
* ##### typeHints: Record<string, string>
* ##### typeIcons: Record<string, string>
* ##### typeLabels: Record<string, string>