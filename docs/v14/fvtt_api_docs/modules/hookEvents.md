---
title: "hookEvents | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/modules/hookEvents.html"
category: "modules"
---

# Module hookEvents

A module which provides documentation for the various hook events which are dispatched throughout the Foundry Virtual
Tabletop client-side software. Packages can respond to these events by using the
[`Hooks.on`](../classes/foundry.helpers.Hooks.md#on) method.

Systems and modules can add their own hooks by using [`Hooks.call`](../classes/foundry.helpers.Hooks.md#call) or
[`Hooks.callAll`](../classes/foundry.helpers.Hooks.md#callall); This page is only a listing of the hooks called
by core. See package pages for information about the hooks they provide.

#### See

[Hooks](../classes/foundry.helpers.Hooks.md) - The class responsible for managing hook events

## Once Hooks

Every time a client connects to the server, either from logging in or refreshing the page, it always goes through the
following hooks in order and never calls them again. Other hooks may fire during this time, such as canvas drawing
hooks, but those other hooks will also fire when relevant changes happen in world (such as switching scenes).

1. [init](../functions/hookEvents.init.md)
2. [i18nInit](../functions/hookEvents.i18nInit.md)
3. [setup](../functions/hookEvents.setup.md)
4. [initializeDynamicTokenRingConfig](../functions/hookEvents.initializeDynamicTokenRingConfig.md)
5. [initializeCombatConfiguration](../functions/hookEvents.initializeCombatConfiguration.md)
6. [canvasConfig](../functions/hookEvents.canvasConfig.md) (if the Canvas is enabled)
7. [ready](../functions/hookEvents.ready.md)

## Generic Hooks

Many of the commonly used hooks in Foundry are "generic", which is to say the actual name of the hook is dynamic
based on the class that is calling the hook. While looking for the appropriate hook to use for your code, keep
these in mind as possible candidates.

* [renderApplicationV1](../functions/hookEvents.renderApplicationV1.md)
* [renderApplicationV2](../functions/hookEvents.renderApplicationV2.md)
* [preCreateDocument](../functions/hookEvents.preCreateDocument.md)
* [createDocument](../functions/hookEvents.createDocument.md)
* [preUpdateDocument](../functions/hookEvents.preUpdateDocument.md)
* [updateDocument](../functions/hookEvents.updateDocument.md)
* [preDeleteDocument](../functions/hookEvents.preDeleteDocument.md)
* [deleteDocument](../functions/hookEvents.deleteDocument.md)

## Cancellable Hooks

Some hooks, such as [preCreateDocument](../functions/hookEvents.preCreateDocument.md), can be cancelled by returning an explicit `false`. These hooks
mention this capability and note that they return `boolean | void`. Hooks are never awaited, which means that an
async function will always return a Promise, which is not a boolean. This is an important limitation to keep in
mind while working with these kinds of hooks.

## Interfaces

[RenderChatInputContext](../interfaces/hookEvents.RenderChatInputContext.md)

## Events - AVSettings

[rtcSettingsChanged](../functions/hookEvents.rtcSettingsChanged.md)

## Events - ActiveEffect

[applyActiveEffect](../functions/hookEvents.applyActiveEffect.md)

## Events - Actor

[modifyTokenAttribute](../functions/hookEvents.modifyTokenAttribute.md)

## Events - ActorSheet

[dropActorSheetData](../functions/hookEvents.dropActorSheetData.md)

## Events - AdventureImporter

[importAdventure](../functions/hookEvents.importAdventure.md)

[preImportAdventure](../functions/hookEvents.preImportAdventure.md)

## Events - ApplicationV1

[closeApplicationV1](../functions/hookEvents.closeApplicationV1.md)

[getApplicationV1HeaderButtons](../functions/hookEvents.getApplicationV1HeaderButtons.md)

[renderApplicationV1](../functions/hookEvents.renderApplicationV1.md)

## Events - ApplicationV2

[closeApplicationV2](../functions/hookEvents.closeApplicationV2.md)

[closeDetachedWindow](../functions/hookEvents.closeDetachedWindow.md)

[getDocumentContextOptions](../functions/hookEvents.getDocumentContextOptions.md)

[getHeaderControlsApplicationV2](../functions/hookEvents.getHeaderControlsApplicationV2.md)

[getPlaceableContextOptions](../functions/hookEvents.getPlaceableContextOptions.md)

[openDetachedWindow](../functions/hookEvents.openDetachedWindow.md)

[preRenderApplication](../functions/hookEvents.preRenderApplication.md)

[renderApplicationV2](../functions/hookEvents.renderApplicationV2.md)

## Events - AudioHelper

[globalVolumeChanged](../functions/hookEvents.globalVolumeChanged.md)

## Events - Canvas

[canvasConfig](../functions/hookEvents.canvasConfig.md)

[canvasDraw](../functions/hookEvents.canvasDraw.md)

[canvasInit](../functions/hookEvents.canvasInit.md)

[canvasPan](../functions/hookEvents.canvasPan.md)

[canvasReady](../functions/hookEvents.canvasReady.md)

[canvasTearDown](../functions/hookEvents.canvasTearDown.md)

[dropCanvasData](../functions/hookEvents.dropCanvasData.md)

[highlightObjects](../functions/hookEvents.highlightObjects.md)

[initializeEdges](../functions/hookEvents.initializeEdges.md)

## Events - CanvasGroup

[drawGroup](../functions/hookEvents.drawGroup.md)

[tearDownGroup](../functions/hookEvents.tearDownGroup.md)

## Events - CanvasLayer

[drawLayer](../functions/hookEvents.drawLayer.md)

[pastePlaceableObject](../functions/hookEvents.pastePlaceableObject.md)

[tearDownLayer](../functions/hookEvents.tearDownLayer.md)

## Events - CanvasVisibility

[initializeVisionMode](../functions/hookEvents.initializeVisionMode.md)

[initializeVisionSources](../functions/hookEvents.initializeVisionSources.md)

[sightRefresh](../functions/hookEvents.sightRefresh.md)

[visibilityRefresh](../functions/hookEvents.visibilityRefresh.md)

## Events - Cards

[dealCards](../functions/hookEvents.dealCards.md)

[passCards](../functions/hookEvents.passCards.md)

[returnCards](../functions/hookEvents.returnCards.md)

## Events - ChatBubbles

[chatBubbleHTML](../functions/hookEvents.chatBubbleHTML.md)

## Events - ChatLog

[chatInput](../functions/hookEvents.chatInput.md)

[chatMessage](../functions/hookEvents.chatMessage.md)

[renderChatInput](../functions/hookEvents.renderChatInput.md)

## Events - ChatMessage

[renderChatMessageHTML](../functions/hookEvents.renderChatMessageHTML.md)

## Events - ClientSettings

[clientSettingChanged](../functions/hookEvents.clientSettingChanged.md)

## Events - Combat

[combatRound](../functions/hookEvents.combatRound.md)

[combatStart](../functions/hookEvents.combatStart.md)

[combatTurn](../functions/hookEvents.combatTurn.md)

[combatTurnChange](../functions/hookEvents.combatTurnChange.md)

[initializeCombatConfiguration](../functions/hookEvents.initializeCombatConfiguration.md)

## Events - CompendiumCollection

[updateCompendium](../functions/hookEvents.updateCompendium.md)

## Events - Document

[applyCompendiumArt](../functions/hookEvents.applyCompendiumArt.md)

[createDocument](../functions/hookEvents.createDocument.md)

[deleteDocument](../functions/hookEvents.deleteDocument.md)

[preCreateDocument](../functions/hookEvents.preCreateDocument.md)

[preDeleteDocument](../functions/hookEvents.preDeleteDocument.md)

[preUpdateDocument](../functions/hookEvents.preUpdateDocument.md)

[updateDocument](../functions/hookEvents.updateDocument.md)

## Events - EffectsCanvasGroup

[initializeLightSources](../functions/hookEvents.initializeLightSources.md)

[initializePriorityLightSources](../functions/hookEvents.initializePriorityLightSources.md)

[lightingRefresh](../functions/hookEvents.lightingRefresh.md)

## Events - EnvironmentCanvasGroup

[configureCanvasEnvironment](../functions/hookEvents.configureCanvasEnvironment.md)

[initializeCanvasEnvironment](../functions/hookEvents.initializeCanvasEnvironment.md)

## Events - Game

[error](../functions/hookEvents.error.md)

[hotReload](../functions/hookEvents.hotReload.md)

[i18nInit](../functions/hookEvents.i18nInit.md)

[init](../functions/hookEvents.init.md)

[pauseGame](../functions/hookEvents.pauseGame.md)

[ready](../functions/hookEvents.ready.md)

[setup](../functions/hookEvents.setup.md)

[streamReady](../functions/hookEvents.streamReady.md)

[updateWorldTime](../functions/hookEvents.updateWorldTime.md)

## Events - Hotbar

[hotbarDrop](../functions/hookEvents.hotbarDrop.md)

## Events - InteractionLayer

[activateCanvasLayer](../functions/hookEvents.activateCanvasLayer.md)

[activateLayer](../functions/hookEvents.activateLayer.md)

[deactivateLayer](../functions/hookEvents.deactivateLayer.md)

## Events - Note

[activateNote](../functions/hookEvents.activateNote.md)

## Events - PlaceableObject

[controlObject](../functions/hookEvents.controlObject.md)

[destroyObject](../functions/hookEvents.destroyObject.md)

[drawObject](../functions/hookEvents.drawObject.md)

[hoverObject](../functions/hookEvents.hoverObject.md)

[refreshObject](../functions/hookEvents.refreshObject.md)

## Events - ProseMirrorEditor

[createProseMirrorEditor](../functions/hookEvents.createProseMirrorEditor.md)

## Events - ProseMirrorMenu

[getProseMirrorMenuDropDowns](../functions/hookEvents.getProseMirrorMenuDropDowns.md)

[getProseMirrorMenuItems](../functions/hookEvents.getProseMirrorMenuItems.md)

## Events - RenderedEffectSource

[initializeRenderedEffectSourceShaders](../functions/hookEvents.initializeRenderedEffectSourceShaders.md)

## Events - RollTableSheet

[dropRollTableSheetData](../functions/hookEvents.dropRollTableSheetData.md)

## Events - SceneControls

[getSceneControlButtons](../functions/hookEvents.getSceneControlButtons.md)

## Events - SceneNavigation

[collapseSceneNavigation](../functions/hookEvents.collapseSceneNavigation.md)

## Events - Sidebar

[changeSidebarTab](../functions/hookEvents.changeSidebarTab.md)

[collapseSidebar](../functions/hookEvents.collapseSidebar.md)

## Events - TextEditor

[activateEditorLegacy](../functions/hookEvents.activateEditorLegacy.md)

## Events - Token

[applyTokenStatusEffect](../functions/hookEvents.applyTokenStatusEffect.md)

[targetToken](../functions/hookEvents.targetToken.md)

## Events - TokenDocument

[moveToken](../functions/hookEvents.moveToken.md)

[pauseToken](../functions/hookEvents.pauseToken.md)

[planToken](../functions/hookEvents.planToken.md)

[preMoveToken](../functions/hookEvents.preMoveToken.md)

[recordToken](../functions/hookEvents.recordToken.md)

[stopToken](../functions/hookEvents.stopToken.md)

## Events - TokenRingConfig

[initializeDynamicTokenRingConfig](../functions/hookEvents.initializeDynamicTokenRingConfig.md)

## Events - Users

[userConnected](../functions/hookEvents.userConnected.md)

## Events - WeatherEffects

[initializeWeatherEffects](../functions/hookEvents.initializeWeatherEffects.md)