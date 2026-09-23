---
title: "CONFIG | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/modules/CONFIG.html"
category: "modules"
---

# Module CONFIG

Runtime configuration settings for Foundry VTT which exposes a large number of variables which determine how
aspects of the software behaves.

Unlike the CONST analog which is frozen and immutable, the CONFIG object may be updated during the course of a
session or modified by system and module developers to adjust how the application behaves.

## Namespaces

[Dice](CONFIG.Dice.md)

## Interfaces

[\_FontDefinition](../interfaces/CONFIG._FontDefinition.md)

[\_StatusEffectConfig](../interfaces/CONFIG._StatusEffectConfig.md)

[ActiveEffectChangeTypeConfig](../interfaces/CONFIG.ActiveEffectChangeTypeConfig.md)

[CursorDescriptor](../interfaces/CONFIG.CursorDescriptor.md)

[DiceFulfillmentConfiguration](../interfaces/CONFIG.DiceFulfillmentConfiguration.md)

[DiceFulfillmentDenomination](../interfaces/CONFIG.DiceFulfillmentDenomination.md)

[DiceFulfillmentMethod](../interfaces/CONFIG.DiceFulfillmentMethod.md)

[FontFamilyDefinition](../interfaces/CONFIG.FontFamilyDefinition.md)

[FormulaEditorConfiguration](../interfaces/CONFIG.FormulaEditorConfiguration.md)

[FormulaEditorContext](../interfaces/CONFIG.FormulaEditorContext.md)

[ProseMirrorInsert](../interfaces/CONFIG.ProseMirrorInsert.md)

[SceneTransitionDefinition](../interfaces/CONFIG.SceneTransitionDefinition.md)

[TextEditorEngineConfig](../interfaces/CONFIG.TextEditorEngineConfig.md)

[TextEditorEnricherConfig](../interfaces/CONFIG.TextEditorEnricherConfig.md)

[WallDoorAnimationConfig](../interfaces/CONFIG.WallDoorAnimationConfig.md)

[WallDoorSound](../interfaces/CONFIG.WallDoorSound.md)

[WeatherAmbienceConfiguration](../interfaces/CONFIG.WeatherAmbienceConfiguration.md)

[WeatherEffectConfiguration](../interfaces/CONFIG.WeatherEffectConfiguration.md)

## Type Aliases

[DarknessSourceAnimationConfig](../types/CONFIG.DarknessSourceAnimationConfig.md)

[DiceFulfillmentHandler](../types/CONFIG.DiceFulfillmentHandler.md)

[DocumentEmbedHandler](../types/CONFIG.DocumentEmbedHandler.md)

[FontDefinition](../types/CONFIG.FontDefinition.md)

[LightSourceAnimationConfig](../types/CONFIG.LightSourceAnimationConfig.md)

[RollFunction](../types/CONFIG.RollFunction.md)

[StatusEffectConfig](../types/CONFIG.StatusEffectConfig.md)

[TextEditorEngineFactory](../types/CONFIG.TextEditorEngineFactory.md)

[TextEditorEngineRenderer](../types/CONFIG.TextEditorEngineRenderer.md)

[TextEditorEnricher](../types/CONFIG.TextEditorEnricher.md)

[WallDoorAnimationFunction](../types/CONFIG.WallDoorAnimationFunction.md)

[WallDoorAnimationHook](../types/CONFIG.WallDoorAnimationHook.md)

[WeatherParticleConfiguration](../types/CONFIG.WeatherParticleConfiguration.md)

## Variables

[ActiveEffect](../variables/CONFIG.ActiveEffect.md)

[Actor](../variables/CONFIG.Actor.md)

[ActorDelta](../variables/CONFIG.ActorDelta.md)

[Adventure](../variables/CONFIG.Adventure.md)

[AmbientLight](../variables/CONFIG.AmbientLight.md)

[AmbientSound](../variables/CONFIG.AmbientSound.md)

[Canvas](../variables/CONFIG.Canvas.md)

[canvasTextStyle](../variables/CONFIG.canvasTextStyle.md)

[Card](../variables/CONFIG.Card.md)

[Cards](../variables/CONFIG.Cards.md)

[ChatMessage](../variables/CONFIG.ChatMessage.md)

[Combat](../variables/CONFIG.Combat.md)

[Combatant](../variables/CONFIG.Combatant.md)

[CombatantGroup](../variables/CONFIG.CombatantGroup.md)

[compatibility](../variables/CONFIG.compatibility.md)

[controlIcons](../variables/CONFIG.controlIcons.md)

[cursors](../variables/CONFIG.cursors.md)

[DatabaseBackend](../variables/CONFIG.DatabaseBackend.md)

[debug](../variables/CONFIG.debug.md)

[defaultFontFamily](../variables/CONFIG.defaultFontFamily.md)

[Dice](../variables/CONFIG.Dice.md)

[Drawing](../variables/CONFIG.Drawing.md)

[FogExploration](../variables/CONFIG.FogExploration.md)

[Folder](../variables/CONFIG.Folder.md)

[fontDefinitions](../variables/CONFIG.fontDefinitions.md)

[formulaEditor](../variables/CONFIG.formulaEditor.md)

[i18n](../variables/CONFIG.i18n.md)

[Item](../variables/CONFIG.Item.md)

[JournalEntry](../variables/CONFIG.JournalEntry.md)

[JournalEntryCategory](../variables/CONFIG.JournalEntryCategory.md)

[JournalEntryPage](../variables/CONFIG.JournalEntryPage.md)

[Level](../variables/CONFIG.Level.md)

[Macro](../variables/CONFIG.Macro.md)

[Note](../variables/CONFIG.Note.md)

[Playlist](../variables/CONFIG.Playlist.md)

[PlaylistSound](../variables/CONFIG.PlaylistSound.md)

[queries](../variables/CONFIG.queries.md)

[Region](../variables/CONFIG.Region.md)

[RegionBehavior](../variables/CONFIG.RegionBehavior.md)

[RollTable](../variables/CONFIG.RollTable.md)

[Scene](../variables/CONFIG.Scene.md)

[soundEffects](../variables/CONFIG.soundEffects.md)

[sounds](../variables/CONFIG.sounds.md)

[specialStatusEffects](../variables/CONFIG.specialStatusEffects.md)

[statusEffects](../variables/CONFIG.statusEffects.md)

[supportedLanguages](../variables/CONFIG.supportedLanguages.md)

[TableResult](../variables/CONFIG.TableResult.md)

[TextEditor](../variables/CONFIG.TextEditor.md)

[Tile](../variables/CONFIG.Tile.md)

[time](../variables/CONFIG.time.md)

[Token](../variables/CONFIG.Token.md)

[ui](../variables/CONFIG.ui.md)

[User](../variables/CONFIG.User.md)

[ux](../variables/CONFIG.ux.md)

[Wall](../variables/CONFIG.Wall.md)

[weatherEffects](../variables/CONFIG.weatherEffects.md)

[WebRTC](../variables/CONFIG.WebRTC.md)