# Foundry VTT API Documentation Index (v14)

Source: https://foundryvtt.com/api/v14/

Generated on 2026-09-23 17:52:34

## Classes

| Title | File | Description |
|-------|------|-------------|
| AVClient | [classes/foundry.av.AVClient.md](classes/foundry.av.AVClient.md) | An interface for an Audio/Video client which is extended to provide broadcasting functionality.... |
| AVConfig | [classes/foundry.applications.settings.menus.AVConfig.md](classes/foundry.applications.settings.menus.AVConfig.md) | Audio/Video Conferencing Configuration Sheet... |
| AVMaster | [classes/foundry.av.AVMaster.md](classes/foundry.av.AVMaster.md) | The master Audio/Video controller instance.... |
| AVSettings | [classes/foundry.av.AVSettings.md](classes/foundry.av.AVSettings.md) | [activity](#activity)... |
| AbstractBaseFilter | [classes/foundry.canvas.rendering.filters.AbstractBaseFilter.md](classes/foundry.canvas.rendering.filters.AbstractBaseFilter.md) | An abstract filter which provides a framework for reusable definition... |
| AbstractBaseMaskFilter | [classes/foundry.canvas.rendering.filters.AbstractBaseMaskFilter.md](classes/foundry.canvas.rendering.filters.AbstractBaseMaskFilter.md) | This class defines an interface for masked custom filters... |
| AbstractBaseShader | [classes/foundry.canvas.rendering.shaders.AbstractBaseShader.md](classes/foundry.canvas.rendering.shaders.AbstractBaseShader.md) | This class defines an interface which all shaders utilize.... |
| AbstractFormInputElement | [classes/foundry.applications.elements.AbstractFormInputElement.md](classes/foundry.applications.elements.AbstractFormInputElement.md) | An abstract custom HTMLElement designed for use with form inputs.... |
| AbstractMultiSelectElement | [classes/foundry.applications.elements.AbstractMultiSelectElement.md](classes/foundry.applications.elements.AbstractMultiSelectElement.md) | An abstract base class designed to standardize the behavior for a multi-select UI component.... |
| AbstractSidebarTab | [classes/foundry.applications.sidebar.AbstractSidebarTab.md](classes/foundry.applications.sidebar.AbstractSidebarTab.md) | The sidebar tab interface that allows any sidebar tab to also be rendered as a popout.... |
| AbstractWeatherShader | [classes/foundry.canvas.rendering.shaders.AbstractWeatherShader.md](classes/foundry.canvas.rendering.shaders.AbstractWeatherShader.md) | The base shader class for weather shaders.... |
| ActiveEffect | [classes/foundry.documents.ActiveEffect.md](classes/foundry.documents.ActiveEffect.md) | The client-side ActiveEffect document which extends the common BaseActiveEffect model.... |
| ActiveEffectConfig | [classes/foundry.applications.sheets.ActiveEffectConfig.md](classes/foundry.applications.sheets.ActiveEffectConfig.md) | The Application responsible for configuring a single ActiveEffect document within a parent Actor or Item.... |
| ActiveEffectRegistry | [classes/foundry.helpers.ActiveEffectRegistry.md](classes/foundry.helpers.ActiveEffectRegistry.md) | A singleton helper class that tracks the duration and expiry of [ActiveEffect](foundry.documents.ActiveEffect.md)s... |
| ActiveEffectTypeDataModel | [classes/foundry.data.ActiveEffectTypeDataModel.md](classes/foundry.data.ActiveEffectTypeDataModel.md) | A TypeDataModel for [ActiveEffect](foundry.documents.BaseActiveEffect.md)s. A single ArrayField is defined for [EffectChangeData](../interfaces/foundry.documents.types.EffectChangeData.md). A system c... |
| Actor | [classes/foundry.documents.Actor.md](classes/foundry.documents.Actor.md) | The client-side Actor document which extends the common BaseActor model.... |
| ActorDelta | [classes/foundry.documents.ActorDelta.md](classes/foundry.documents.ActorDelta.md) | The client-side ActorDelta embedded document which extends the common BaseActorDelta document model.... |
| ActorDeltaField | [classes/foundry.data.ActorDeltaField.md](classes/foundry.data.ActorDeltaField.md) | A special subclass of EmbeddedDocumentField which allows construction of the ActorDelta to be lazily evaluated.... |
| ActorDirectory | [classes/foundry.applications.sidebar.tabs.ActorDirectory.md](classes/foundry.applications.sidebar.tabs.ActorDirectory.md) | The World Actor directory listing.... |
| ActorSheet | [classes/foundry.appv1.sheets.ActorSheet.md](classes/foundry.appv1.sheets.ActorSheet.md) | The Application responsible for displaying and editing a single Actor document.... |
| ActorSheetV2 | [classes/foundry.applications.sheets.ActorSheetV2.md](classes/foundry.applications.sheets.ActorSheetV2.md) | A base class for providing Actor Sheet behavior using ApplicationV2.... |
| Actors | [classes/foundry.documents.collections.Actors.md](classes/foundry.documents.collections.Actors.md) | The singleton collection of Actor documents which exist within the active World.... |
| AdaptiveBackgroundShader | [classes/foundry.canvas.rendering.shaders.AdaptiveBackgroundShader.md](classes/foundry.canvas.rendering.shaders.AdaptiveBackgroundShader.md) | The default coloration shader used by standard rendering and animations.... |
| AdaptiveColorationShader | [classes/foundry.canvas.rendering.shaders.AdaptiveColorationShader.md](classes/foundry.canvas.rendering.shaders.AdaptiveColorationShader.md) | The default coloration shader used by standard rendering and animations.... |
| AdaptiveDarknessShader | [classes/foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md](classes/foundry.canvas.rendering.shaders.AdaptiveDarknessShader.md) | The default coloration shader used by standard rendering and animations.... |
| AdaptiveIlluminationShader | [classes/foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md](classes/foundry.canvas.rendering.shaders.AdaptiveIlluminationShader.md) | The default coloration shader used by standard rendering and animations.... |
| AdaptiveLightingShader | [classes/foundry.canvas.rendering.shaders.AdaptiveLightingShader.md](classes/foundry.canvas.rendering.shaders.AdaptiveLightingShader.md) | This class defines an interface which all adaptive lighting shaders extend.... |
| AdaptiveVisionShader | [classes/foundry.canvas.rendering.shaders.AdaptiveVisionShader.md](classes/foundry.canvas.rendering.shaders.AdaptiveVisionShader.md) | This class defines an interface which all adaptive vision shaders extend.... |
| AdditionalTypesField | [classes/foundry.packages.AdditionalTypesField.md](classes/foundry.packages.AdditionalTypesField.md) | A special ObjectField available to packages which configures any additional Document subtypes... |
| AdjustDarknessLevelRegionBehaviorType | [classes/foundry.data.regionBehaviors.AdjustDarknessLevelRegionBehaviorType.md](classes/foundry.data.regionBehaviors.AdjustDarknessLevelRegionBehaviorType.md) | The data model for a behavior that allows to adjust the darkness level within the Region.... |
| AdoptableHTMLElement | [classes/foundry.applications.elements.AdoptableHTMLElement.md](classes/foundry.applications.elements.AdoptableHTMLElement.md) | An HTMLElement implementation which provides extra resilience when being adopted across Documents, working around a... |
| Adventure | [classes/foundry.documents.Adventure.md](classes/foundry.documents.Adventure.md) | The client-side Adventure document which extends the common [foundry.documents.BaseAdventure](foundry.documents.BaseAdventure.md) model.... |
| AdventureExporter | [classes/foundry.applications.sheets.AdventureExporter.md](classes/foundry.applications.sheets.AdventureExporter.md) | An interface for packaging Adventure content and loading it to a compendium pack.... |
| AdventureImporter | [classes/foundry.appv1.sheets.AdventureImporter.md](classes/foundry.appv1.sheets.AdventureImporter.md) | An interface for importing an adventure from a compendium pack.... |
| AdventureImporterV2 | [classes/foundry.applications.sheets.AdventureImporterV2.md](classes/foundry.applications.sheets.AdventureImporterV2.md) | This Document Sheet is responsible for rendering an Adventure and providing an interface to import it.... |
| AlertPing | [classes/foundry.canvas.interaction.AlertPing.md](classes/foundry.canvas.interaction.AlertPing.md) | A type of ping that produces a pulse warning sign animation.... |
| AlphaBlurFilter | [classes/foundry.canvas.rendering.filters.AlphaBlurFilter.md](classes/foundry.canvas.rendering.filters.AlphaBlurFilter.md) | Apply a gaussian blur going inward by using alpha as the penetrating channel.... |
| AlphaBlurFilterPass | [classes/foundry.canvas.rendering.filters.AlphaBlurFilterPass.md](classes/foundry.canvas.rendering.filters.AlphaBlurFilterPass.md) | Apply a vertical or horizontal gaussian blur going inward by using alpha as the penetrating channel.... |
| AlphaField | [classes/foundry.data.fields.AlphaField.md](classes/foundry.data.fields.AlphaField.md) | A special [foundry.data.fields.NumberField](foundry.data.fields.NumberField.md) represents a number between 0 and 1.... |
| AmbientLight | [classes/foundry.canvas.placeables.AmbientLight.md](classes/foundry.canvas.placeables.AmbientLight.md) | An AmbientLight is an implementation of PlaceableObject which represents a dynamic light source within the Scene.... |
| AmbientLightConfig | [classes/foundry.applications.sheets.AmbientLightConfig.md](classes/foundry.applications.sheets.AmbientLightConfig.md) | The Application responsible for configuring a single AmbientLight document within a parent Scene.... |
| AmbientLightDocument | [classes/foundry.documents.AmbientLightDocument.md](classes/foundry.documents.AmbientLightDocument.md) | The client-side AmbientLight document which extends the common BaseAmbientLight document model.... |
| AmbientLightFilter | [classes/foundry.applications.sidebar.filters.AmbientLightFilter.md](classes/foundry.applications.sidebar.filters.AmbientLightFilter.md) | An advanced filter dialog for the AmbientLight placeable tab.... |
| AmbientLightPalette | [classes/foundry.applications.sheets.palette.AmbientLightPalette.md](classes/foundry.applications.sheets.palette.AmbientLightPalette.md) | A dialog that provides bulk operation or default values for newly-created ambient lights.... |
| AmbientLightShapeControls | [classes/foundry.canvas.placeables.lights.AmbientLightShapeControls.md](classes/foundry.canvas.placeables.lights.AmbientLightShapeControls.md) | Controls for a AmbientLight shape.... |
| AmbientLightTab | [classes/foundry.applications.sidebar.tabs.AmbientLightTab.md](classes/foundry.applications.sidebar.tabs.AmbientLightTab.md) | The AmbientLight-specific placeables tab.... |
| AmbientSound | [classes/foundry.canvas.placeables.AmbientSound.md](classes/foundry.canvas.placeables.AmbientSound.md) | An AmbientSound is an implementation of PlaceableObject which represents a dynamic audio source within the Scene.... |
| AmbientSoundConfig | [classes/foundry.applications.sheets.AmbientSoundConfig.md](classes/foundry.applications.sheets.AmbientSoundConfig.md) | The Application responsible for configuring a single AmbientSound document within a parent Scene.... |
| AmbientSoundDocument | [classes/foundry.documents.AmbientSoundDocument.md](classes/foundry.documents.AmbientSoundDocument.md) | The client-side AmbientSound document which extends the common BaseAmbientSound document model.... |
| AmbientSoundPalette | [classes/foundry.applications.sheets.palette.AmbientSoundPalette.md](classes/foundry.applications.sheets.palette.AmbientSoundPalette.md) | A dialog that provides bulk operation or default values for newly-created ambient sounds.... |
| AmbientSoundShapeControls | [classes/foundry.canvas.placeables.sounds.AmbientSoundShapeControls.md](classes/foundry.canvas.placeables.sounds.AmbientSoundShapeControls.md) | Controls for a AmbientSound shape.... |
| AmbientSoundTab | [classes/foundry.applications.sidebar.tabs.AmbientSoundTab.md](classes/foundry.applications.sidebar.tabs.AmbientSoundTab.md) | The AmbientSound-specific placeables tab.... |
| AmplificationBackgroundVisionShader | [classes/foundry.canvas.rendering.shaders.AmplificationBackgroundVisionShader.md](classes/foundry.canvas.rendering.shaders.AmplificationBackgroundVisionShader.md) | Shader specialized in light amplification... |
| AmplificationSamplerShader | [classes/foundry.canvas.rendering.shaders.AmplificationSamplerShader.md](classes/foundry.canvas.rendering.shaders.AmplificationSamplerShader.md) | A light amplification shader.... |
| AngleField | [classes/foundry.data.fields.AngleField.md](classes/foundry.data.fields.AngleField.md) | A special [foundry.data.fields.NumberField](foundry.data.fields.NumberField.md) which represents an angle of rotation in degrees between 0 and 360.... |
| AnyField | [classes/foundry.data.fields.AnyField.md](classes/foundry.data.fields.AnyField.md) | A special subclass of [foundry.data.fields.DataField](foundry.data.fields.DataField.md) which can contain any value of any type.... |
| Application | [classes/foundry.appv1.api.Application.md](classes/foundry.appv1.api.Application.md) | The legacy application window that is rendered for some UI elements in Foundry VTT.... |
| ApplicationV2 | [classes/foundry.applications.api.ApplicationV2.md](classes/foundry.applications.api.ApplicationV2.md) | The Application class is responsible for rendering an HTMLElement into the Foundry Virtual Tabletop user interface.... |
| ApplyActiveEffectRegionBehaviorType | [classes/foundry.data.regionBehaviors.ApplyActiveEffectRegionBehaviorType.md](classes/foundry.data.regionBehaviors.ApplyActiveEffectRegionBehaviorType.md) | The data model for a behavior that applies Active Effects to Tokens within the Region.... |
| ArrayField | [classes/foundry.data.fields.ArrayField.md](classes/foundry.data.fields.ArrayField.md) | A subclass of [foundry.data.fields.DataField](foundry.data.fields.DataField.md) which deals with array-typed data.... |
| ArrowPing | [classes/foundry.canvas.interaction.ArrowPing.md](classes/foundry.canvas.interaction.ArrowPing.md) | A type of ping that produces an arrow pointing in a given direction.... |
| AsyncWorker | [classes/foundry.helpers.AsyncWorker.md](classes/foundry.helpers.AsyncWorker.md) | An asynchronous web Worker which can load user-defined functions and await execution using Promises.... |
| AudioBufferCache | [classes/foundry.audio.AudioBufferCache.md](classes/foundry.audio.AudioBufferCache.md) | A specialized cache used for audio buffers.... |
| AudioHelper | [classes/foundry.audio.AudioHelper.md](classes/foundry.audio.AudioHelper.md) | A helper class to provide common functionality for working with the Web Audio API.... |
| AudioTimeout | [classes/foundry.audio.AudioTimeout.md](classes/foundry.audio.AudioTimeout.md) | A framework for scheduled audio events with more precise and synchronized timing than using window.setTimeout.... |
| Autocomplete | [classes/foundry.applications.ux.Autocomplete.md](classes/foundry.applications.ux.Autocomplete.md) | A widget that provides a drop-down list of autocompletion options.... |
| BackgroundVisionShader | [classes/foundry.canvas.rendering.shaders.BackgroundVisionShader.md](classes/foundry.canvas.rendering.shaders.BackgroundVisionShader.md) | The default background shader used for vision sources... |
| BaseActiveEffect | [classes/foundry.documents.BaseActiveEffect.md](classes/foundry.documents.BaseActiveEffect.md) | The ActiveEffect Document.... |
| BaseActor | [classes/foundry.documents.BaseActor.md](classes/foundry.documents.BaseActor.md) | The Actor Document.... |
| BaseActorDelta | [classes/foundry.documents.BaseActorDelta.md](classes/foundry.documents.BaseActorDelta.md) | The ActorDelta Document.... |
| BaseAdventure | [classes/foundry.documents.BaseAdventure.md](classes/foundry.documents.BaseAdventure.md) | The Adventure Document.... |
| BaseAmbientLight | [classes/foundry.documents.BaseAmbientLight.md](classes/foundry.documents.BaseAmbientLight.md) | The AmbientLight Document.... |
| BaseAmbientSound | [classes/foundry.documents.BaseAmbientSound.md](classes/foundry.documents.BaseAmbientSound.md) | The AmbientSound Document.... |
| BaseCard | [classes/foundry.documents.BaseCard.md](classes/foundry.documents.BaseCard.md) | The Card Document.... |
| BaseCards | [classes/foundry.documents.BaseCards.md](classes/foundry.documents.BaseCards.md) | The Cards Document.... |
| BaseChatMessage | [classes/foundry.documents.BaseChatMessage.md](classes/foundry.documents.BaseChatMessage.md) | The ChatMessage Document.... |
| BaseCombat | [classes/foundry.documents.BaseCombat.md](classes/foundry.documents.BaseCombat.md) | The Combat Document.... |
| BaseCombatant | [classes/foundry.documents.BaseCombatant.md](classes/foundry.documents.BaseCombatant.md) | The Combatant Document.... |
| BaseCombatantGroup | [classes/foundry.documents.BaseCombatantGroup.md](classes/foundry.documents.BaseCombatantGroup.md) | A Document that represents a grouping of individual Combatants in a Combat.... |
| BaseDrawing | [classes/foundry.documents.BaseDrawing.md](classes/foundry.documents.BaseDrawing.md) | The Drawing Document.... |
| BaseEffectSource | [classes/foundry.canvas.sources.BaseEffectSource.md](classes/foundry.canvas.sources.BaseEffectSource.md) | TODO - Re-document after ESM refactor.... |
| BaseFogExploration | [classes/foundry.documents.BaseFogExploration.md](classes/foundry.documents.BaseFogExploration.md) | The FogExploration Document.... |
| BaseFolder | [classes/foundry.documents.BaseFolder.md](classes/foundry.documents.BaseFolder.md) | The Folder Document.... |
| BaseGrid | [classes/foundry.grid.BaseGrid.md](classes/foundry.grid.BaseGrid.md) | The base grid class.... |
| BaseItem | [classes/foundry.documents.BaseItem.md](classes/foundry.documents.BaseItem.md) | The Item Document.... |
| BaseJournalEntry | [classes/foundry.documents.BaseJournalEntry.md](classes/foundry.documents.BaseJournalEntry.md) | The JournalEntry Document.... |
| BaseJournalEntryCategory | [classes/foundry.documents.BaseJournalEntryCategory.md](classes/foundry.documents.BaseJournalEntryCategory.md) | An embedded Document that represents a category in a JournalEntry.... |
| BaseJournalEntryPage | [classes/foundry.documents.BaseJournalEntryPage.md](classes/foundry.documents.BaseJournalEntryPage.md) | The JournalEntryPage Document.... |
| BaseLevel | [classes/foundry.documents.BaseLevel.md](classes/foundry.documents.BaseLevel.md) | The Level Document.... |
| BaseLightSource | [classes/foundry.canvas.sources.BaseLightSource.md](classes/foundry.canvas.sources.BaseLightSource.md) | A specialized subclass of BaseEffectSource which deals with the rendering of light or darkness.... |
| BaseMacro | [classes/foundry.documents.BaseMacro.md](classes/foundry.documents.BaseMacro.md) | The Macro Document.... |
| BaseModule | [classes/foundry.packages.BaseModule.md](classes/foundry.packages.BaseModule.md) | The data schema used to define Module manifest files.... |
| BaseNote | [classes/foundry.documents.BaseNote.md](classes/foundry.documents.BaseNote.md) | The Note Document.... |
| BasePackage | [classes/foundry.packages.BasePackage.md](classes/foundry.packages.BasePackage.md) | The data schema used to define a Package manifest.... |
| BasePlaceableHUD | [classes/foundry.applications.hud.BasePlaceableHUD.md](classes/foundry.applications.hud.BasePlaceableHUD.md) | An abstract base class for displaying a heads-up-display interface bound to a Placeable Object on the Canvas.... |
| BasePlaylist | [classes/foundry.documents.BasePlaylist.md](classes/foundry.documents.BasePlaylist.md) | The Playlist Document.... |
| BasePlaylistSound | [classes/foundry.documents.BasePlaylistSound.md](classes/foundry.documents.BasePlaylistSound.md) | The PlaylistSound Document.... |
| BaseRegion | [classes/foundry.documents.BaseRegion.md](classes/foundry.documents.BaseRegion.md) | The Region Document.... |
| BaseRegionBehavior | [classes/foundry.documents.BaseRegionBehavior.md](classes/foundry.documents.BaseRegionBehavior.md) | The RegionBehavior Document.... |
| BaseRollTable | [classes/foundry.documents.BaseRollTable.md](classes/foundry.documents.BaseRollTable.md) | The RollTable Document.... |
| BaseRuler | [classes/foundry.canvas.interaction.BaseRuler.md](classes/foundry.canvas.interaction.BaseRuler.md) | The ruler that is used to measure distances on the Canvas.... |
| BaseSamplerShader | [classes/foundry.canvas.rendering.shaders.BaseSamplerShader.md](classes/foundry.canvas.rendering.shaders.BaseSamplerShader.md) | The base sampler shader exposes a simple sprite shader and all the framework to handle:... |
| BaseScene | [classes/foundry.documents.BaseScene.md](classes/foundry.documents.BaseScene.md) | The Scene Document.... |
| BaseSetting | [classes/foundry.documents.BaseSetting.md](classes/foundry.documents.BaseSetting.md) | The Setting Document.... |
| BaseShapeData | [classes/foundry.data.BaseShapeData.md](classes/foundry.data.BaseShapeData.md) | A data model intended to be used as an inner EmbeddedDataField which defines a geometric shape.... |
| BaseSheet | [classes/foundry.applications.sheets.BaseSheet.md](classes/foundry.applications.sheets.BaseSheet.md) | The Application responsible for displaying a basic sheet for any Document sub-types that do not have a sheet... |
| BaseSystem | [classes/foundry.packages.BaseSystem.md](classes/foundry.packages.BaseSystem.md) | The data schema used to define System manifest files.... |
| BaseTableResult | [classes/foundry.documents.BaseTableResult.md](classes/foundry.documents.BaseTableResult.md) | The TableResult Document.... |
| BaseTerrainData | [classes/foundry.data.BaseTerrainData.md](classes/foundry.data.BaseTerrainData.md) | The base TerrainData.... |
| BaseTile | [classes/foundry.documents.BaseTile.md](classes/foundry.documents.BaseTile.md) | The Tile Document.... |
| BaseToken | [classes/foundry.documents.BaseToken.md](classes/foundry.documents.BaseToken.md) | The Token Document.... |
| BaseTokenRuler | [classes/foundry.canvas.placeables.tokens.BaseTokenRuler.md](classes/foundry.canvas.placeables.tokens.BaseTokenRuler.md) | The ruler of a Token visualizes... |
| BaseUser | [classes/foundry.documents.BaseUser.md](classes/foundry.documents.BaseUser.md) | The User Document.... |
| BaseWall | [classes/foundry.documents.BaseWall.md](classes/foundry.documents.BaseWall.md) | The Wall Document.... |
| BaseWorld | [classes/foundry.packages.BaseWorld.md](classes/foundry.packages.BaseWorld.md) | The data schema used to define World manifest files.... |
| BaselineIlluminationSamplerShader | [classes/foundry.canvas.rendering.shaders.BaselineIlluminationSamplerShader.md](classes/foundry.canvas.rendering.shaders.BaselineIlluminationSamplerShader.md) | Compute baseline illumination according to darkness level encoded texture.... |
| BatchRenderer | [classes/foundry.canvas.rendering.batching.BatchRenderer.md](classes/foundry.canvas.rendering.batching.BatchRenderer.md) | A batch renderer with a customizable data transfer function to packed geometries.... |
| BatchShaderGenerator | [classes/foundry.canvas.rendering.batching.BatchShaderGenerator.md](classes/foundry.canvas.rendering.batching.BatchShaderGenerator.md) | A batch shader generator that could handle extra uniforms during initialization.... |
| BewitchingWaveColorationShader | [classes/foundry.canvas.rendering.shaders.BewitchingWaveColorationShader.md](classes/foundry.canvas.rendering.shaders.BewitchingWaveColorationShader.md) | Bewitching Wave animation coloration shader... |
| BewitchingWaveIlluminationShader | [classes/foundry.canvas.rendering.shaders.BewitchingWaveIlluminationShader.md](classes/foundry.canvas.rendering.shaders.BewitchingWaveIlluminationShader.md) | Bewitching Wave animation illumination shader... |
| BiquadFilterEffect | [classes/foundry.audio.BiquadFilterEffect.md](classes/foundry.audio.BiquadFilterEffect.md) | A sound effect which applies a biquad filter.... |
| BitMask | [classes/foundry.utils.BitMask.md](classes/foundry.utils.BitMask.md) | Create a new BitMask instance.... |
| BlackHoleDarknessShader | [classes/foundry.canvas.rendering.shaders.BlackHoleDarknessShader.md](classes/foundry.canvas.rendering.shaders.BlackHoleDarknessShader.md) | Black Hole animation illumination shader... |
| BooleanField | [classes/foundry.data.fields.BooleanField.md](classes/foundry.data.fields.BooleanField.md) | A subclass of [foundry.data.fields.DataField](foundry.data.fields.DataField.md) which deals with boolean-typed data.... |
| CachedContainer | [classes/foundry.canvas.containers.CachedContainer.md](classes/foundry.canvas.containers.CachedContainer.md) | A special type of PIXI.Container which draws its contents to a cached RenderTexture.... |
| CalendarData | [classes/foundry.data.CalendarData.md](classes/foundry.data.CalendarData.md) | Game Time Calendar configuration data model.... |
| CameraPopout | [classes/foundry.applications.apps.av.CameraPopout.md](classes/foundry.applications.apps.av.CameraPopout.md) | An application for a single popped-out camera.... |
| CameraViews | [classes/foundry.applications.apps.av.CameraViews.md](classes/foundry.applications.apps.av.CameraViews.md) | An application that shows docked camera views.... |
| Canvas | [classes/foundry.canvas.Canvas.md](classes/foundry.canvas.Canvas.md) | The virtual tabletop environment is implemented using a WebGL powered HTML 5 canvas using the powerful PIXI.js... |
| CanvasAnimation | [classes/foundry.canvas.animation.CanvasAnimation.md](classes/foundry.canvas.animation.CanvasAnimation.md) | A helper class providing utility methods for PIXI Canvas animation... |
| CanvasBackgroundAlterationEffects | [classes/foundry.canvas.layers.CanvasBackgroundAlterationEffects.md](classes/foundry.canvas.layers.CanvasBackgroundAlterationEffects.md) | A layer of background alteration effects which change the appearance of the primary group render texture.... |
| CanvasColorationEffects | [classes/foundry.canvas.layers.CanvasColorationEffects.md](classes/foundry.canvas.layers.CanvasColorationEffects.md) | A CanvasLayer for displaying coloration visual effects... |
| CanvasDarknessEffects | [classes/foundry.canvas.layers.CanvasDarknessEffects.md](classes/foundry.canvas.layers.CanvasDarknessEffects.md) | A layer of background alteration effects which change the appearance of the primary group render texture.... |
| CanvasDepthMask | [classes/foundry.canvas.layers.CanvasDepthMask.md](classes/foundry.canvas.layers.CanvasDepthMask.md) | The depth mask which contains a mapping of elevation. Needed to know if we must render objects according to depth.... |
| CanvasDocument | [classes/foundry.CanvasDocument.md](classes/foundry.CanvasDocument.md) | A ClientDocument class with additional facilities for utilizing the [foundry.canvas.Canvas](foundry.canvas.Canvas.md) API... |
| CanvasEdges | [classes/foundry.canvas.geometry.edges.CanvasEdges.md](classes/foundry.canvas.geometry.edges.CanvasEdges.md) | A specialized Map class that manages all edges used to restrict perception in a Scene.... |
| CanvasIlluminationEffects | [classes/foundry.canvas.layers.CanvasIlluminationEffects.md](classes/foundry.canvas.layers.CanvasIlluminationEffects.md) | A CanvasLayer for displaying illumination visual effects... |
| CanvasLayer | [classes/foundry.canvas.layers.CanvasLayer.md](classes/foundry.canvas.layers.CanvasLayer.md) | An abstract pattern for primary layers of the game canvas to implement.... |
| CanvasOcclusionMask | [classes/foundry.canvas.layers.CanvasOcclusionMask.md](classes/foundry.canvas.layers.CanvasOcclusionMask.md) | The occlusion mask which contains radial occlusion and vision occlusion from tokens.... |
| CanvasQuadtree | [classes/foundry.canvas.geometry.CanvasQuadtree.md](classes/foundry.canvas.geometry.CanvasQuadtree.md) | A subclass of Quadtree specifically intended for classifying the location of objects on the game canvas.... |
| CanvasShakeEffect | [classes/foundry.canvas.animation.CanvasShakeEffect.md](classes/foundry.canvas.animation.CanvasShakeEffect.md) | A lightweight screen/object shake utility.... |
| CanvasTour | [classes/foundry.nue.tours.CanvasTour.md](classes/foundry.nue.tours.CanvasTour.md) | A tour for demonstrating an aspect of Canvas functionality.... |
| CanvasVisibility | [classes/foundry.canvas.groups.CanvasVisibility.md](classes/foundry.canvas.groups.CanvasVisibility.md) | The visibility group which implements dynamic vision, lighting, and fog of war... |
| CanvasVisionMask | [classes/foundry.canvas.layers.CanvasVisionMask.md](classes/foundry.canvas.layers.CanvasVisionMask.md) | The vision mask which contains the current line-of-sight texture.... |
| Card | [classes/foundry.documents.Card.md](classes/foundry.documents.Card.md) | The client-side Card document which extends the common BaseCard document model.... |
| CardConfig | [classes/foundry.applications.sheets.CardConfig.md](classes/foundry.applications.sheets.CardConfig.md) | A DocumentSheet application responsible for displaying and editing a single embedded Card document.... |
| CardDeckConfig | [classes/foundry.applications.sheets.CardDeckConfig.md](classes/foundry.applications.sheets.CardDeckConfig.md) | A CardsConfig subclass providing a sheet representation for Cards documents with the "deck" type.... |
| CardHandConfig | [classes/foundry.applications.sheets.CardHandConfig.md](classes/foundry.applications.sheets.CardHandConfig.md) | A CardsConfig subclass providing a sheet representation for Cards documents with the "hand" type.... |
| CardPileConfig | [classes/foundry.applications.sheets.CardPileConfig.md](classes/foundry.applications.sheets.CardPileConfig.md) | A subclass of CardsConfig providing a sheet representation for Cards documents with the "pile" type.... |
| CardStacks | [classes/foundry.documents.collections.CardStacks.md](classes/foundry.documents.collections.CardStacks.md) | The collection of Cards documents which exist within the active World.... |
| Cards | [classes/foundry.documents.Cards.md](classes/foundry.documents.Cards.md) | The client-side Cards document which extends the common BaseCards model.... |
| CardsConfig | [classes/foundry.applications.sheets.CardsConfig.md](classes/foundry.applications.sheets.CardsConfig.md) | A DocumentSheet application responsible for displaying and editing a single Cards stack.... |
| CardsDirectory | [classes/foundry.applications.sidebar.tabs.CardsDirectory.md](classes/foundry.applications.sidebar.tabs.CardsDirectory.md) | The World Cards directory listing.... |
| CategoryBrowser | [classes/foundry.applications.api.CategoryBrowser.md](classes/foundry.applications.api.CategoryBrowser.md) | An abstract class responsible for displaying a 2-pane Application that allows for entries to be grouped and filtered... |
| ChangeLevelRegionBehaviorType | [classes/foundry.data.regionBehaviors.ChangeLevelRegionBehaviorType.md](classes/foundry.data.regionBehaviors.ChangeLevelRegionBehaviorType.md) | The data model for a behavior that prompts to change the level of Tokens that enter the Region.... |
| ChatBubbles | [classes/foundry.canvas.animation.ChatBubbles.md](classes/foundry.canvas.animation.ChatBubbles.md) | The Chat Bubble Class... |
| ChatInputPlugin | [classes/foundry.common_prosemirror_chat__module.ChatInputPlugin.md](classes/foundry.common_prosemirror_chat__module.ChatInputPlugin.md) | A plugin for the chat message editor which handles interactivity.... |
| ChatLog | [classes/foundry.applications.sidebar.tabs.ChatLog.md](classes/foundry.applications.sidebar.tabs.ChatLog.md) | The sidebar chat tab.... |
| ChatMenuPlugin | [classes/foundry.common_prosemirror_chat__module.ChatMenuPlugin.md](classes/foundry.common_prosemirror_chat__module.ChatMenuPlugin.md) | A ProseMirror menu implementation specialized for the chat editor.... |
| ChatMessage | [classes/foundry.documents.ChatMessage.md](classes/foundry.documents.ChatMessage.md) | The client-side ChatMessage document which extends the common BaseChatMessage model.... |
| ChatMessages | [classes/foundry.documents.collections.ChatMessages.md](classes/foundry.documents.collections.ChatMessages.md) | The singleton collection of ChatMessage documents which exist within the active World.... |
| ChatPopout | [classes/foundry.applications.sidebar.apps.ChatPopout.md](classes/foundry.applications.sidebar.apps.ChatPopout.md) | A simple application for rendering a single chat message in its own frame.... |
| ChevronPing | [classes/foundry.canvas.interaction.ChevronPing.md](classes/foundry.canvas.interaction.ChevronPing.md) | A type of ping that points to a specific location.... |
| ChromaColorationShader | [classes/foundry.canvas.rendering.shaders.ChromaColorationShader.md](classes/foundry.canvas.rendering.shaders.ChromaColorationShader.md) | Chroma animation coloration shader... |
| CircleShapeData | [classes/foundry.CircleShapeData.md](classes/foundry.CircleShapeData.md) | The data model for a circle shape.... |
| CircleShapeData | [classes/foundry.data.CircleShapeData.md](classes/foundry.data.CircleShapeData.md) | The data model for a circle shape.... |
| ClientDatabaseBackend | [classes/foundry.data.ClientDatabaseBackend.md](classes/foundry.data.ClientDatabaseBackend.md) | The client-side database backend implementation which handles Document modification operations.... |
| ClientDocument | [classes/foundry.ClientDocument.md](classes/foundry.ClientDocument.md) | The ClientDocument extends the base Document class by adding client-specific behaviors to all Document types.... |
| ClientIssues | [classes/foundry.helpers.ClientIssues.md](classes/foundry.helpers.ClientIssues.md) | A class responsible for tracking issues in the current world.... |
| ClientKeybindings | [classes/foundry.helpers.interaction.ClientKeybindings.md](classes/foundry.helpers.interaction.ClientKeybindings.md) | A class responsible for managing defined game keybinding.... |
| ClientPackage | [classes/foundry.ClientPackage.md](classes/foundry.ClientPackage.md) | The ClientDocument extends the BasePackage class by adding client-specific behaviors to all Package types.... |
| ClientSettings | [classes/foundry.helpers.ClientSettings.md](classes/foundry.helpers.ClientSettings.md) | A class responsible for managing defined game settings or settings menus.... |
| ClipboardHelper | [classes/foundry.helpers.interaction.ClipboardHelper.md](classes/foundry.helpers.interaction.ClipboardHelper.md) | A singleton helper class to manage requesting clipboard permissions.... |
| ClockwiseSweepPolygon | [classes/foundry.canvas.geometry.ClockwiseSweepPolygon.md](classes/foundry.canvas.geometry.ClockwiseSweepPolygon.md) | A PointSourcePolygon implementation that uses CCW (counter-clockwise) geometry orientation.... |
| Coin | [classes/foundry.dice.terms.Coin.md](classes/foundry.dice.terms.Coin.md) | A type of DiceTerm used to represent flipping a two-sided coin.... |
| Collection | [classes/foundry.utils.Collection.md](classes/foundry.utils.Collection.md) | A reusable storage concept which blends the functionality of an Array with the efficient key-based lookup of a Map.... |
| CollisionResult | [classes/foundry.canvas.geometry.edges.CollisionResult.md](classes/foundry.canvas.geometry.edges.CollisionResult.md) | A specialized object that contains the result of a collision in the context of the ClockwiseSweepPolygon.... |
| Color | [classes/foundry.utils.Color.md](classes/foundry.utils.Color.md) | A representation of a color in hexadecimal format.... |
| ColorAdjustmentsSamplerShader | [classes/foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md](classes/foundry.canvas.rendering.shaders.ColorAdjustmentsSamplerShader.md) | A color adjustment shader.... |
| ColorField | [classes/foundry.data.fields.ColorField.md](classes/foundry.data.fields.ColorField.md) | A special [foundry.data.fields.StringField](foundry.data.fields.StringField.md) which records a standardized CSS color string.... |
| ColorationVisionShader | [classes/foundry.canvas.rendering.shaders.ColorationVisionShader.md](classes/foundry.canvas.rendering.shaders.ColorationVisionShader.md) | The default coloration shader used for vision sources.... |
| ColorizeBrightnessShader | [classes/foundry.canvas.rendering.shaders.ColorizeBrightnessShader.md](classes/foundry.canvas.rendering.shaders.ColorizeBrightnessShader.md) | A colorization shader which keeps brightness contrary to "normal tinting"... |
| Combat | [classes/foundry.documents.Combat.md](classes/foundry.documents.Combat.md) | The client-side Combat document which extends the common BaseCombat model.... |
| CombatConfiguration | [classes/foundry.data.CombatConfiguration.md](classes/foundry.data.CombatConfiguration.md) | A configuration class managing the Combat Turn Markers.... |
| CombatEncounters | [classes/foundry.documents.collections.CombatEncounters.md](classes/foundry.documents.collections.CombatEncounters.md) | The singleton collection of Combat documents which exist within the active World.... |
| CombatTracker | [classes/foundry.applications.sidebar.tabs.CombatTracker.md](classes/foundry.applications.sidebar.tabs.CombatTracker.md) | An Application that manages switching between Combats and tracking the Combatants in those Combats.... |
| CombatTrackerConfig | [classes/foundry.applications.apps.CombatTrackerConfig.md](classes/foundry.applications.apps.CombatTrackerConfig.md) | The Application responsible for configuring the CombatTracker and its contents.... |
| Combatant | [classes/foundry.documents.Combatant.md](classes/foundry.documents.Combatant.md) | The client-side Combatant document which extends the common BaseCombatant model.... |
| CombatantConfig | [classes/foundry.applications.sheets.CombatantConfig.md](classes/foundry.applications.sheets.CombatantConfig.md) | The Combatant configuration application.... |
| CombatantGroup | [classes/foundry.documents.CombatantGroup.md](classes/foundry.documents.CombatantGroup.md) | The client-side CombatantGroup document which extends the common BaseCombatantGroup model.... |
| Compendium | [classes/foundry.applications.sidebar.apps.Compendium.md](classes/foundry.applications.sidebar.apps.Compendium.md) | An Application that displays the indexed contents of a Compendium pack.... |
| CompendiumArt | [classes/foundry.helpers.media.CompendiumArt.md](classes/foundry.helpers.media.CompendiumArt.md) | A class responsible for managing package-provided art and applying it to Documents in compendium packs.... |
| CompendiumArtConfig | [classes/foundry.applications.apps.CompendiumArtConfig.md](classes/foundry.applications.apps.CompendiumArtConfig.md) | An application for configuring compendium art priorities.... |
| CompendiumCollection | [classes/foundry.documents.collections.CompendiumCollection.md](classes/foundry.documents.collections.CompendiumCollection.md) | A collection of Document objects contained within a specific compendium pack.... |
| CompendiumDirectory | [classes/foundry.applications.sidebar.tabs.CompendiumDirectory.md](classes/foundry.applications.sidebar.tabs.CompendiumDirectory.md) | The listing of compendiums available in the World.... |
| CompendiumFolderCollection | [classes/foundry.documents.collections.CompendiumFolderCollection.md](classes/foundry.documents.collections.CompendiumFolderCollection.md) | A Collection of Folder documents within a Compendium pack.... |
| CompendiumPacks | [classes/foundry.documents.collections.CompendiumPacks.md](classes/foundry.documents.collections.CompendiumPacks.md) | A mapping of CompendiumCollection instances, one per Compendium pack... |
| ConeShapeData | [classes/foundry.ConeShapeData.md](classes/foundry.ConeShapeData.md) | The data model for a cone shape.... |
| ConeShapeData | [classes/foundry.data.ConeShapeData.md](classes/foundry.data.ConeShapeData.md) | The data model for a cone shape.... |
| ContextMenu | [classes/foundry.applications.ux.ContextMenu.md](classes/foundry.applications.ux.ContextMenu.md) | Display a right-click activated Context Menu which provides a dropdown menu of options.... |
| ControlIcon | [classes/foundry.canvas.containers.ControlIcon.md](classes/foundry.canvas.containers.ControlIcon.md) | A generic helper for drawing a standard Control Icon.... |
| ControlsConfig | [classes/foundry.applications.sidebar.apps.ControlsConfig.md](classes/foundry.applications.sidebar.apps.ControlsConfig.md) | View and edit keybinding and (readonly) mouse actions.... |
| ControlsLayer | [classes/foundry.canvas.layers.ControlsLayer.md](classes/foundry.canvas.layers.ControlsLayer.md) | A CanvasLayer for displaying UI controls which are overlayed on top of other layers.... |
| ConvolverEffect | [classes/foundry.audio.ConvolverEffect.md](classes/foundry.audio.ConvolverEffect.md) | A sound effect which applies a convolver filter.... |
| Cursor | [classes/foundry.canvas.containers.Cursor.md](classes/foundry.canvas.containers.Cursor.md) | A single Mouse Cursor... |
| DarknessLevelContainer | [classes/foundry.canvas.layers.DarknessLevelContainer.md](classes/foundry.canvas.layers.DarknessLevelContainer.md) | Cached container used for dynamic darkness level. Display objects (of any type) added to this cached container will... |
| DashLineShader | [classes/foundry.canvas.rendering.shaders.DashLineShader.md](classes/foundry.canvas.rendering.shaders.DashLineShader.md) | A modified version of the PIXI.smooth.DashLineShader that supports an offset.... |
| DataField | [classes/foundry.data.fields.DataField.md](classes/foundry.data.fields.DataField.md) | An abstract class that defines the base pattern for a data field within a data schema.... |
| DataFieldOperator | [classes/foundry.data.operators.DataFieldOperator.md](classes/foundry.data.operators.DataFieldOperator.md) | A base class used for all special database operations.... |
| DataModel | [classes/foundry.abstract.DataModel.md](classes/foundry.abstract.DataModel.md) | An abstract class which is a fundamental building block of numerous structures and concepts in Foundry Virtual... |
| DataModelSchemaField | [classes/foundry.data.fields.DataModelSchemaField.md](classes/foundry.data.fields.DataModelSchemaField.md) | A subclass of [foundry.data.fields.SchemaField](foundry.data.fields.SchemaField.md) that represents the root schema node of a DataModel.... |
| DataModelValidationError | [classes/foundry.data.validation.DataModelValidationError.md](classes/foundry.data.validation.DataModelValidationError.md) | A specialized Error to indicate a model validation failure.... |
| DataModelValidationFailure | [classes/foundry.data.validation.DataModelValidationFailure.md](classes/foundry.data.validation.DataModelValidationFailure.md) | A class responsible for recording information about a validation failure.... |
| DatabaseBackend | [classes/foundry.abstract.DatabaseBackend.md](classes/foundry.abstract.DatabaseBackend.md) | An abstract base class extended on both the client and server which defines how Documents are retrieved, created,... |
| DefineSurfaceRegionBehaviorType | [classes/foundry.data.regionBehaviors.DefineSurfaceRegionBehaviorType.md](classes/foundry.data.regionBehaviors.DefineSurfaceRegionBehaviorType.md) | The data model for a behavior that defines surface(s) that can restrict light, movement, sight, and sound.... |
| DenseSmokeDarknessShader | [classes/foundry.canvas.rendering.shaders.DenseSmokeDarknessShader.md](classes/foundry.canvas.rendering.shaders.DenseSmokeDarknessShader.md) | Creates a dense smoke area... |
| DependencyResolution | [classes/foundry.applications.settings.DependencyResolution.md](classes/foundry.applications.settings.DependencyResolution.md) | A class responsible for prompting the user about dependency resolution for their modules.... |
| DepthSamplerShader | [classes/foundry.canvas.rendering.shaders.DepthSamplerShader.md](classes/foundry.canvas.rendering.shaders.DepthSamplerShader.md) | The depth sampler shader.... |
| DetectionMode | [classes/foundry.canvas.perception.DetectionMode.md](classes/foundry.canvas.perception.DetectionMode.md) | A Detection Mode which can be associated with any kind of sense/vision/perception.... |
| DetectionModeAll | [classes/foundry.canvas.perception.DetectionModeAll.md](classes/foundry.canvas.perception.DetectionModeAll.md) | Detection mode that see ALL creatures (no blockers).... |
| DetectionModeDarkvision | [classes/foundry.canvas.perception.DetectionModeDarkvision.md](classes/foundry.canvas.perception.DetectionModeDarkvision.md) | A special detection mode which models a form of darkvision (night vision).... |
| DetectionModeInvisibility | [classes/foundry.canvas.perception.DetectionModeInvisibility.md](classes/foundry.canvas.perception.DetectionModeInvisibility.md) | Detection mode that see invisible creatures.... |
| DetectionModeLightPerception | [classes/foundry.canvas.perception.DetectionModeLightPerception.md](classes/foundry.canvas.perception.DetectionModeLightPerception.md) | This detection mode tests whether the target is visible due to being illuminated by a light source.... |
| DetectionModeTremor | [classes/foundry.canvas.perception.DetectionModeTremor.md](classes/foundry.canvas.perception.DetectionModeTremor.md) | Detection mode that see creatures in contact with the ground.... |
| Dialog | [classes/foundry.appv1.api.Dialog.md](classes/foundry.appv1.api.Dialog.md) | Create a dialog window displaying a title, a message, and a set of buttons which trigger callback functions.... |
| DialogV2 | [classes/foundry.applications.api.DialogV2.md](classes/foundry.applications.api.DialogV2.md) | A lightweight Application that renders a dialog containing a form with arbitrary content, and some buttons.... |
| DiceConfig | [classes/foundry.applications.settings.menus.DiceConfig.md](classes/foundry.applications.settings.menus.DiceConfig.md) | The application responsible for configuring methods of DiceTerm resolution.... |
| DiceTerm | [classes/foundry.dice.terms.DiceTerm.md](classes/foundry.dice.terms.DiceTerm.md) | An abstract base class for any type of RollTerm which involves randomized input from dice, coins, or other devices.... |
| Die | [classes/foundry.dice.terms.Die.md](classes/foundry.dice.terms.Die.md) | A type of DiceTerm used to represent rolling a fair n-sided die.... |
| DisplayScrollingTextRegionBehaviorType | [classes/foundry.data.regionBehaviors.DisplayScrollingTextRegionBehaviorType.md](classes/foundry.data.regionBehaviors.DisplayScrollingTextRegionBehaviorType.md) | The data model for a behavior that displays scrolling text above a token when one of the subscribed events occurs.... |
| Document | [classes/foundry.abstract.Document.md](classes/foundry.abstract.Document.md) | An extension of the base DataModel which defines a Document.... |
| DocumentAuthorField | [classes/foundry.data.fields.DocumentAuthorField.md](classes/foundry.data.fields.DocumentAuthorField.md) | A special [foundry.data.fields.ForeignDocumentField](foundry.data.fields.ForeignDocumentField.md) which defines the original author of a document.... |
| DocumentCollection | [classes/foundry.documents.abstract.DocumentCollection.md](classes/foundry.documents.abstract.DocumentCollection.md) | An abstract subclass of the Collection container which defines a collection of Document instances.... |
| DocumentDirectory | [classes/foundry.applications.sidebar.DocumentDirectory.md](classes/foundry.applications.sidebar.DocumentDirectory.md) | An abstract class for rendering a foldered directory of Documents.... |
| DocumentFlagsField | [classes/foundry.data.fields.DocumentFlagsField.md](classes/foundry.data.fields.DocumentFlagsField.md) | A subclass of [foundry.data.fields.TypedObjectField](foundry.data.fields.TypedObjectField.md) that is used specifically for the Document "flags" field.... |
| DocumentIdField | [classes/foundry.data.fields.DocumentIdField.md](classes/foundry.data.fields.DocumentIdField.md) | A subclass of [foundry.data.fields.StringField](foundry.data.fields.StringField.md) which provides the primary \_id for a Document.... |
| DocumentIndex | [classes/foundry.helpers.DocumentIndex.md](classes/foundry.helpers.DocumentIndex.md) | This class is responsible for indexing all documents available in the world.... |
| DocumentOwnershipConfig | [classes/foundry.applications.apps.DocumentOwnershipConfig.md](classes/foundry.applications.apps.DocumentOwnershipConfig.md) | A generic application for configuring permissions for various Document types.... |
| DocumentOwnershipField | [classes/foundry.data.fields.DocumentOwnershipField.md](classes/foundry.data.fields.DocumentOwnershipField.md) | A special [foundry.data.fields.ObjectField](foundry.data.fields.ObjectField.md) which captures a mapping of User IDs to Document permission levels.... |
| DocumentSheet | [classes/foundry.appv1.api.DocumentSheet.md](classes/foundry.appv1.api.DocumentSheet.md) | Extend the FormApplication pattern to incorporate specific logic for viewing or editing Document instances.... |
| DocumentSheetConfig | [classes/foundry.applications.apps.DocumentSheetConfig.md](classes/foundry.applications.apps.DocumentSheetConfig.md) | An Application for configuring Document sheet settings.... |
| DocumentSheetV2 | [classes/foundry.applications.api.DocumentSheetV2.md](classes/foundry.applications.api.DocumentSheetV2.md) | The Application class is responsible for rendering an HTMLElement into the Foundry Virtual Tabletop user interface.... |
| DocumentSocketResponse | [classes/foundry.abstract.DocumentSocketResponse.md](classes/foundry.abstract.DocumentSocketResponse.md) | The data structure of a modifyDocument socket response.... |
| DocumentStatsField | [classes/foundry.data.fields.DocumentStatsField.md](classes/foundry.data.fields.DocumentStatsField.md) | A subclass of [foundry.data.fields.SchemaField](foundry.data.fields.SchemaField.md) which stores document metadata in the \_stats field.... |
| DocumentTypeField | [classes/foundry.data.fields.DocumentTypeField.md](classes/foundry.data.fields.DocumentTypeField.md) | A subclass of [foundry.data.fields.StringField](foundry.data.fields.StringField.md) that is used specifically for the Document "type" field.... |
| DocumentUUIDField | [classes/foundry.data.fields.DocumentUUIDField.md](classes/foundry.data.fields.DocumentUUIDField.md) | A subclass of [foundry.data.fields.StringField](foundry.data.fields.StringField.md) which supports referencing some other Document by its UUID.... |
| DoorControl | [classes/foundry.canvas.containers.DoorControl.md](classes/foundry.canvas.containers.DoorControl.md) | An icon representing a Door Control... |
| DoorMesh | [classes/foundry.canvas.containers.DoorMesh.md](classes/foundry.canvas.containers.DoorMesh.md) | A special subclass of PrimarySpriteMesh used to render an interactive door.... |
| DragDrop | [classes/foundry.applications.ux.DragDrop.md](classes/foundry.applications.ux.DragDrop.md) | A controller class for managing drag and drop workflows within an Application instance.... |
| Draggable | [classes/foundry.applications.ux.Draggable.md](classes/foundry.applications.ux.Draggable.md) | A UI utility to make an element draggable.... |
| Drawing | [classes/foundry.canvas.placeables.Drawing.md](classes/foundry.canvas.placeables.Drawing.md) | The Drawing object is an implementation of the PlaceableObject container.... |
| DrawingConfig | [classes/foundry.applications.sheets.DrawingConfig.md](classes/foundry.applications.sheets.DrawingConfig.md) | The Application responsible for configuring a single Drawing document within a parent Scene.... |
| DrawingDocument | [classes/foundry.documents.DrawingDocument.md](classes/foundry.documents.DrawingDocument.md) | The client-side Drawing document which extends the common BaseDrawing model.... |
| DrawingHUD | [classes/foundry.applications.hud.DrawingHUD.md](classes/foundry.applications.hud.DrawingHUD.md) | An implementation of the PlaceableHUD base class which renders a heads-up-display interface for Drawing objects.... |
| DrawingPalette | [classes/foundry.applications.sheets.palette.DrawingPalette.md](classes/foundry.applications.sheets.palette.DrawingPalette.md) | A dialog that provides bulk operation or default values for newly-created drawings.... |
| DrawingShapeControls | [classes/foundry.canvas.placeables.drawings.DrawingShapeControls.md](classes/foundry.canvas.placeables.drawings.DrawingShapeControls.md) | Controls for a Drawing shape.... |
| DrawingTab | [classes/foundry.applications.sidebar.tabs.DrawingTab.md](classes/foundry.applications.sidebar.tabs.DrawingTab.md) | The Drawing-specific placeables tab.... |
| DrawingsLayer | [classes/foundry.canvas.layers.DrawingsLayer.md](classes/foundry.canvas.layers.DrawingsLayer.md) | The DrawingsLayer subclass of PlaceablesLayer.... |
| DynamicRingData | [classes/foundry.canvas.placeables.tokens.DynamicRingData.md](classes/foundry.canvas.placeables.tokens.DynamicRingData.md) | Dynamic Ring configuration data model.... |
| Edge | [classes/foundry.canvas.geometry.edges.Edge.md](classes/foundry.canvas.geometry.edges.Edge.md) | A data structure used to represent potential edges used by the ClockwiseSweepPolygon.... |
| EffectsCanvasGroup | [classes/foundry.canvas.groups.EffectsCanvasGroup.md](classes/foundry.canvas.groups.EffectsCanvasGroup.md) | A container group which contains visual effects rendered above the primary group.... |
| ElevatedSurfaceExposureGenerator | [classes/foundry.canvas.geometry.ElevatedSurfaceExposureGenerator.md](classes/foundry.canvas.geometry.ElevatedSurfaceExposureGenerator.md) | This class computes the elevated surface exposure polygon tree.... |
| EllipseShapeData | [classes/foundry.EllipseShapeData.md](classes/foundry.EllipseShapeData.md) | The data model for an ellipse shape.... |
| EllipseShapeData | [classes/foundry.data.EllipseShapeData.md](classes/foundry.data.EllipseShapeData.md) | The data model for an ellipse shape.... |
| EmanationColorationShader | [classes/foundry.canvas.rendering.shaders.EmanationColorationShader.md](classes/foundry.canvas.rendering.shaders.EmanationColorationShader.md) | Emanation animation coloration shader... |
| EmanationShapeData | [classes/foundry.data.EmanationShapeData.md](classes/foundry.data.EmanationShapeData.md) | The data model for an emanation shape.... |
| EmbeddedCollection | [classes/foundry.abstract.EmbeddedCollection.md](classes/foundry.abstract.EmbeddedCollection.md) | An extension of the Collection.... |
| EmbeddedCollectionDelta | [classes/foundry.abstract.EmbeddedCollectionDelta.md](classes/foundry.abstract.EmbeddedCollectionDelta.md) | An embedded collection delta contains delta source objects that can be compared against other objects inside a base... |
| EmbeddedCollectionDeltaField | [classes/foundry.data.fields.EmbeddedCollectionDeltaField.md](classes/foundry.data.fields.EmbeddedCollectionDeltaField.md) | A subclass of [foundry.data.fields.EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md) which manages a collection of delta objects... |
| EmbeddedCollectionField | [classes/foundry.data.fields.EmbeddedCollectionField.md](classes/foundry.data.fields.EmbeddedCollectionField.md) | A subclass of [foundry.data.fields.ArrayField](foundry.data.fields.ArrayField.md) which supports an embedded Document collection.... |
| EmbeddedDataField | [classes/foundry.data.fields.EmbeddedDataField.md](classes/foundry.data.fields.EmbeddedDataField.md) | A subclass of [foundry.data.fields.DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md) used for embedded data models.... |
| EmbeddedDocumentField | [classes/foundry.data.fields.EmbeddedDocumentField.md](classes/foundry.data.fields.EmbeddedDocumentField.md) | A subclass of [foundry.data.fields.EmbeddedDataField](foundry.data.fields.EmbeddedDataField.md) which supports a single embedded Document.... |
| EnergyFieldColorationShader | [classes/foundry.canvas.rendering.shaders.EnergyFieldColorationShader.md](classes/foundry.canvas.rendering.shaders.EnergyFieldColorationShader.md) | Energy field animation coloration shader... |
| EnvironmentCanvasGroup | [classes/foundry.canvas.groups.EnvironmentCanvasGroup.md](classes/foundry.canvas.groups.EnvironmentCanvasGroup.md) | A container group which contains the primary canvas group and the effects canvas group.... |
| EventEmitter | [classes/foundry.EventEmitter.md](classes/foundry.EventEmitter.md) | A mixin class which implements the behavior of EventTarget.... |
| ExecuteMacroRegionBehaviorType | [classes/foundry.data.regionBehaviors.ExecuteMacroRegionBehaviorType.md](classes/foundry.data.regionBehaviors.ExecuteMacroRegionBehaviorType.md) | The data model for a behavior that executes a Macro.... |
| ExecuteScriptRegionBehaviorType | [classes/foundry.data.regionBehaviors.ExecuteScriptRegionBehaviorType.md](classes/foundry.data.regionBehaviors.ExecuteScriptRegionBehaviorType.md) | The data model for a behavior that executes a script.... |
| FairyLightColorationShader | [classes/foundry.canvas.rendering.shaders.FairyLightColorationShader.md](classes/foundry.canvas.rendering.shaders.FairyLightColorationShader.md) | Fairy light animation coloration shader... |
| FairyLightIlluminationShader | [classes/foundry.canvas.rendering.shaders.FairyLightIlluminationShader.md](classes/foundry.canvas.rendering.shaders.FairyLightIlluminationShader.md) | Fairy light animation illumination shader... |
| FateDie | [classes/foundry.dice.terms.FateDie.md](classes/foundry.dice.terms.FateDie.md) | A type of DiceTerm used to represent a three-sided Fate/Fudge die.... |
| FilePathField | [classes/foundry.data.fields.FilePathField.md](classes/foundry.data.fields.FilePathField.md) | A special [foundry.data.fields.StringField](foundry.data.fields.StringField.md) which records a file path or inline base64 data.... |
| FilePicker | [classes/foundry.applications.apps.FilePicker.md](classes/foundry.applications.apps.FilePicker.md) | The FilePicker application renders contents of the server-side public directory.... |
| FilterMenu | [classes/foundry.applications.ux.FilterMenu.md](classes/foundry.applications.ux.FilterMenu.md) | A specialized subclass of ContextMenu designed for displaying a menu of filter options.... |
| FlameColorationShader | [classes/foundry.canvas.rendering.shaders.FlameColorationShader.md](classes/foundry.canvas.rendering.shaders.FlameColorationShader.md) | Alternative torch coloration shader... |
| FlameIlluminationShader | [classes/foundry.canvas.rendering.shaders.FlameIlluminationShader.md](classes/foundry.canvas.rendering.shaders.FlameIlluminationShader.md) | Alternative torch illumination shader... |
| FogColorationShader | [classes/foundry.canvas.rendering.shaders.FogColorationShader.md](classes/foundry.canvas.rendering.shaders.FogColorationShader.md) | Fog animation coloration shader... |
| FogExploration | [classes/foundry.documents.FogExploration.md](classes/foundry.documents.FogExploration.md) | The client-side FogExploration document which extends the common BaseFogExploration model.... |
| FogExplorations | [classes/foundry.documents.collections.FogExplorations.md](classes/foundry.documents.collections.FogExplorations.md) | The singleton collection of FogExploration documents which exist within the active World.... |
| FogManager | [classes/foundry.canvas.perception.FogManager.md](classes/foundry.canvas.perception.FogManager.md) | A fog of war management class which is the singleton canvas.fog instance.... |
| FogSamplerShader | [classes/foundry.canvas.rendering.shaders.FogSamplerShader.md](classes/foundry.canvas.rendering.shaders.FogSamplerShader.md) | A simple shader that makes the original texture's red channel the alpha channel while still keeping channel... |
| FogShader | [classes/foundry.canvas.rendering.shaders.FogShader.md](classes/foundry.canvas.rendering.shaders.FogShader.md) | Fog shader effect.... |
| Folder | [classes/foundry.documents.Folder.md](classes/foundry.documents.Folder.md) | The client-side Folder document which extends the common BaseFolder model.... |
| FolderConfig | [classes/foundry.applications.sheets.FolderConfig.md](classes/foundry.applications.sheets.FolderConfig.md) | The Application responsible for configuring a single Folder document.... |
| FolderExport | [classes/foundry.applications.sidebar.apps.FolderExport.md](classes/foundry.applications.sidebar.apps.FolderExport.md) | A Dialog subclass that allows the user to configure export options for a Folder... |
| Folders | [classes/foundry.documents.collections.Folders.md](classes/foundry.documents.collections.Folders.md) | The singleton collection of Folder documents which exist within the active World.... |
| FontConfig | [classes/foundry.applications.settings.menus.FontConfig.md](classes/foundry.applications.settings.menus.FontConfig.md) | A V2 application responsible for configuring custom fonts for the world.... |
| ForceGridColorationShader | [classes/foundry.canvas.rendering.shaders.ForceGridColorationShader.md](classes/foundry.canvas.rendering.shaders.ForceGridColorationShader.md) | A futuristic Force Grid animation.... |
| ForcedDeletion | [classes/foundry.data.operators.ForcedDeletion.md](classes/foundry.data.operators.ForcedDeletion.md) | Force the deletion of a certain DataModel field, resetting its value back to undefined.... |
| ForcedReplacement | [classes/foundry.data.operators.ForcedReplacement.md](classes/foundry.data.operators.ForcedReplacement.md) | Force the replacement of a certain DataModel field, assigning it to some explicit value without inner recursion.... |
| ForeignDocumentField | [classes/foundry.data.fields.ForeignDocumentField.md](classes/foundry.data.fields.ForeignDocumentField.md) | A special class of [foundry.data.fields.StringField](foundry.data.fields.StringField.md) field which references another DataModel by its id.... |
| FormApplication | [classes/foundry.appv1.api.FormApplication.md](classes/foundry.appv1.api.FormApplication.md) | An abstract pattern for defining an Application responsible for updating some object using an HTML form... |
| FormDataExtended | [classes/foundry.applications.ux.FormDataExtended.md](classes/foundry.applications.ux.FormDataExtended.md) | An extension of the native FormData implementation.... |
| FormulaEditor | [classes/foundry.applications.apps.FormulaEditor.md](classes/foundry.applications.apps.FormulaEditor.md) | An application that provides improved formula editing capabilities.... |
| FrameViewer | [classes/foundry.applications.sidebar.apps.FrameViewer.md](classes/foundry.applications.sidebar.apps.FrameViewer.md) | A simple window application which shows the built documentation pages within an iframe... |
| FramebufferSnapshot | [classes/foundry.canvas.FramebufferSnapshot.md](classes/foundry.canvas.FramebufferSnapshot.md) | Provide the necessary methods to get a snapshot of the framebuffer into a render texture.... |
| FunctionTerm | [classes/foundry.dice.terms.FunctionTerm.md](classes/foundry.dice.terms.FunctionTerm.md) | A type of RollTerm used to apply a function.... |
| Game | [classes/foundry.Game.md](classes/foundry.Game.md) | The core Game instance which encapsulates the data, settings, and states relevant for managing the game experience.... |
| GamePause | [classes/foundry.applications.ui.GamePause.md](classes/foundry.applications.ui.GamePause.md) | The Game Paused banner.... |
| GameTime | [classes/foundry.helpers.GameTime.md](classes/foundry.helpers.GameTime.md) | A singleton class at which keeps the official Server and World time stamps.... |
| GamepadManager | [classes/foundry.helpers.interaction.GamepadManager.md](classes/foundry.helpers.interaction.GamepadManager.md) | Management class for Gamepad events.... |
| GhostLightColorationShader | [classes/foundry.canvas.rendering.shaders.GhostLightColorationShader.md](classes/foundry.canvas.rendering.shaders.GhostLightColorationShader.md) | Ghost light animation coloration shader... |
| GhostLightIlluminationShader | [classes/foundry.canvas.rendering.shaders.GhostLightIlluminationShader.md](classes/foundry.canvas.rendering.shaders.GhostLightIlluminationShader.md) | Ghost light animation illumination shader... |
| GlobalLightSource | [classes/foundry.canvas.sources.GlobalLightSource.md](classes/foundry.canvas.sources.GlobalLightSource.md) | A specialized subclass of the BaseLightSource which is used to render global light source linked to the scene.... |
| GridConfig | [classes/foundry.applications.apps.GridConfig.md](classes/foundry.applications.apps.GridConfig.md) | A tool for fine-tuning the grid in a Scene... |
| GridHex | [classes/foundry.grid.GridHex.md](classes/foundry.grid.GridHex.md) | A helper class which represents a single hexagon as part of a HexagonalGrid.... |
| GridHighlight | [classes/foundry.canvas.containers.GridHighlight.md](classes/foundry.canvas.containers.GridHighlight.md) | A special Graphics class which handles Grid layer highlighting... |
| GridLayer | [classes/foundry.canvas.layers.GridLayer.md](classes/foundry.canvas.layers.GridLayer.md) | A CanvasLayer responsible for drawing a square grid... |
| GridMesh | [classes/foundry.canvas.containers.GridMesh.md](classes/foundry.canvas.containers.GridMesh.md) | The grid mesh, which uses the [foundry.canvas.rendering.shaders.GridShader](foundry.canvas.rendering.shaders.GridShader.md) to render the grid.... |
| GridOffsetField | [classes/foundry.data.fields.GridOffsetField.md](classes/foundry.data.fields.GridOffsetField.md) | The field for a grid offset.... |
| GridOffsetsField | [classes/foundry.data.fields.GridOffsetsField.md](classes/foundry.data.fields.GridOffsetsField.md) | The field of an array/set of grid offsets.... |
| GridShader | [classes/foundry.canvas.rendering.shaders.GridShader.md](classes/foundry.canvas.rendering.shaders.GridShader.md) | The grid shader used by [foundry.canvas.containers.GridMesh](foundry.canvas.containers.GridMesh.md).... |
| GridShapeData | [classes/foundry.data.GridShapeData.md](classes/foundry.data.GridShapeData.md) | The data model for a shape that is the union of grid spaces.... |
| GridlessGrid | [classes/foundry.grid.GridlessGrid.md](classes/foundry.grid.GridlessGrid.md) | The gridless grid class.... |
| HTMLCodeMirrorElement | [classes/foundry.applications.elements.HTMLCodeMirrorElement.md](classes/foundry.applications.elements.HTMLCodeMirrorElement.md) | A custom HTML element responsible for displaying a CodeMirror rich text editor.... |
| HTMLColorPickerElement | [classes/foundry.applications.elements.HTMLColorPickerElement.md](classes/foundry.applications.elements.HTMLColorPickerElement.md) | A custom HTMLElement used to select a color using a linked pair of input fields.... |
| HTMLDocumentEmbedElement | [classes/foundry.applications.elements.HTMLDocumentEmbedElement.md](classes/foundry.applications.elements.HTMLDocumentEmbedElement.md) | A custom HTMLElement that is used to wrap enriched content that requires additional interactivity.... |
| HTMLDocumentTagsElement | [classes/foundry.applications.elements.HTMLDocumentTagsElement.md](classes/foundry.applications.elements.HTMLDocumentTagsElement.md) | A custom HTMLElement used to render a set of associated Documents referenced by UUID.... |
| HTMLEnrichedContentElement | [classes/foundry.applications.elements.HTMLEnrichedContentElement.md](classes/foundry.applications.elements.HTMLEnrichedContentElement.md) | A custom HTMLElement that is used to wrap enriched content that requires additional interactivity.... |
| HTMLField | [classes/foundry.data.fields.HTMLField.md](classes/foundry.data.fields.HTMLField.md) | A subclass of [foundry.data.fields.StringField](foundry.data.fields.StringField.md) which contains a sanitized HTML string.... |
| HTMLFilePickerElement | [classes/foundry.applications.elements.HTMLFilePickerElement.md](classes/foundry.applications.elements.HTMLFilePickerElement.md) | A custom HTML element responsible for rendering a file input field and associated FilePicker button.... |
| HTMLFormulaInputElement | [classes/foundry.applications.elements.HTMLFormulaInputElement.md](classes/foundry.applications.elements.HTMLFormulaInputElement.md) | A form input element custom tailored to formula expressions.... |
| HTMLGridOffset2DTagsElement | [classes/foundry.applications.elements.HTMLGridOffset2DTagsElement.md](classes/foundry.applications.elements.HTMLGridOffset2DTagsElement.md) | A custom HTMLElement used to render a tagged set of 2D grid offsets.... |
| HTMLGridOffset3DTagsElement | [classes/foundry.applications.elements.HTMLGridOffset3DTagsElement.md](classes/foundry.applications.elements.HTMLGridOffset3DTagsElement.md) | A custom HTMLElement used to render a tagged set of 3D grid offsets.... |
| HTMLHueSelectorSlider | [classes/foundry.applications.elements.HTMLHueSelectorSlider.md](classes/foundry.applications.elements.HTMLHueSelectorSlider.md) | A class designed to standardize the behavior for a hue selector UI component.... |
| HTMLMultiCheckboxElement | [classes/foundry.applications.elements.HTMLMultiCheckboxElement.md](classes/foundry.applications.elements.HTMLMultiCheckboxElement.md) | Provide a multi-select workflow as a grid of input checkbox elements.... |
| HTMLMultiSelectElement | [classes/foundry.applications.elements.HTMLMultiSelectElement.md](classes/foundry.applications.elements.HTMLMultiSelectElement.md) | Provide a multi-select workflow using a select element as the input mechanism.... |
| HTMLProseMirrorElement | [classes/foundry.applications.elements.HTMLProseMirrorElement.md](classes/foundry.applications.elements.HTMLProseMirrorElement.md) | A custom HTML element responsible displaying a ProseMirror rich text editor.... |
| HTMLRangePickerElement | [classes/foundry.applications.elements.HTMLRangePickerElement.md](classes/foundry.applications.elements.HTMLRangePickerElement.md) | A custom HTML element responsible selecting a value on a range slider with a linked number input field.... |
| HTMLSecret | [classes/foundry.applications.ux.HTMLSecret.md](classes/foundry.applications.ux.HTMLSecret.md) | A composable class for managing functionality for secret blocks within DocumentSheets.... |
| HTMLSecretBlockElement | [classes/foundry.applications.elements.HTMLSecretBlockElement.md](classes/foundry.applications.elements.HTMLSecretBlockElement.md) | A custom HTML element used to wrap secret blocks in HTML content in order to provide additional interactivity.... |
| HTMLStringTagsElement | [classes/foundry.applications.elements.HTMLStringTagsElement.md](classes/foundry.applications.elements.HTMLStringTagsElement.md) | A custom HTML element which allows for arbitrary assignment of a set of string tags.... |
| HandlebarsApplication | [classes/foundry.HandlebarsApplication.md](classes/foundry.HandlebarsApplication.md) | The mixed application class augmented with [Handlebars](https://handlebarsjs.com) template rendering behavior.... |
| HeadsUpDisplayContainer | [classes/foundry.applications.hud.HeadsUpDisplayContainer.md](classes/foundry.applications.hud.HeadsUpDisplayContainer.md) | The Heads-Up Display Container is a canvas-sized Application which renders HTML overtop of the game canvas.... |
| HexaDomeColorationShader | [classes/foundry.canvas.rendering.shaders.HexaDomeColorationShader.md](classes/foundry.canvas.rendering.shaders.HexaDomeColorationShader.md) | Hexagonal dome animation coloration shader... |
| HexagonalGrid | [classes/foundry.grid.HexagonalGrid.md](classes/foundry.grid.HexagonalGrid.md) | The hexagonal grid class.... |
| HiddenCanvasGroup | [classes/foundry.canvas.groups.HiddenCanvasGroup.md](classes/foundry.canvas.groups.HiddenCanvasGroup.md) | A specialized canvas group for rendering hidden containers before all others (like masks).... |
| HighlightRegionShader | [classes/foundry.canvas.rendering.shaders.HighlightRegionShader.md](classes/foundry.canvas.rendering.shaders.HighlightRegionShader.md) | Shader for the Region highlight.... |
| Hooks | [classes/foundry.helpers.Hooks.md](classes/foundry.helpers.Hooks.md) | A simple event framework used throughout Foundry Virtual Tabletop.... |
| Hotbar | [classes/foundry.applications.ui.Hotbar.md](classes/foundry.applications.ui.Hotbar.md) | An action bar displayed at the bottom of the game view which contains Macros as interactive buttons.... |
| HttpError | [classes/foundry.utils.HttpError.md](classes/foundry.utils.HttpError.md) | Represents an HTTP Error when a non-OK response is returned by Fetch... |
| HueField | [classes/foundry.data.fields.HueField.md](classes/foundry.data.fields.HueField.md) | A special [foundry.data.fields.NumberField](foundry.data.fields.NumberField.md) represents a number between 0 (inclusive) and 1 (exclusive).... |
| IlluminationVisionShader | [classes/foundry.canvas.rendering.shaders.IlluminationVisionShader.md](classes/foundry.canvas.rendering.shaders.IlluminationVisionShader.md) | The default illumination shader used for vision sources... |
| ImageHelper | [classes/foundry.helpers.media.ImageHelper.md](classes/foundry.helpers.media.ImageHelper.md) | A helper class to provide common functionality for working with Image objects.... |
| ImagePopout | [classes/foundry.applications.apps.ImagePopout.md](classes/foundry.applications.apps.ImagePopout.md) | An Image Popout Application which features a single image in a lightbox style frame.... |
| IntegerSortField | [classes/foundry.data.fields.IntegerSortField.md](classes/foundry.data.fields.IntegerSortField.md) | A subclass of [foundry.data.fields.NumberField](foundry.data.fields.NumberField.md) which is used for storing integer sort keys.... |
| InteractionLayer | [classes/foundry.canvas.layers.InteractionLayer.md](classes/foundry.canvas.layers.InteractionLayer.md) | A subclass of CanvasLayer which provides support for user interaction with its contained objects.... |
| InterfaceCanvasGroup | [classes/foundry.canvas.groups.InterfaceCanvasGroup.md](classes/foundry.canvas.groups.InterfaceCanvasGroup.md) | A container group which displays interface elements rendered above other canvas groups.... |
| InvisibilityFilter | [classes/foundry.canvas.rendering.filters.InvisibilityFilter.md](classes/foundry.canvas.rendering.filters.InvisibilityFilter.md) | Invisibility effect filter for placeables.... |
| Item | [classes/foundry.documents.Item.md](classes/foundry.documents.Item.md) | The client-side Item document which extends the common BaseItem model.... |
| ItemDirectory | [classes/foundry.applications.sidebar.tabs.ItemDirectory.md](classes/foundry.applications.sidebar.tabs.ItemDirectory.md) | The World Item directory listing.... |
| ItemSheet | [classes/foundry.appv1.sheets.ItemSheet.md](classes/foundry.appv1.sheets.ItemSheet.md) | The Application responsible for displaying and editing a single Item document.... |
| ItemSheetV2 | [classes/foundry.applications.sheets.ItemSheetV2.md](classes/foundry.applications.sheets.ItemSheetV2.md) | A base class for providing Item Sheet behavior using ApplicationV2.... |
| Items | [classes/foundry.documents.collections.Items.md](classes/foundry.documents.collections.Items.md) | The singleton collection of Item documents which exist within the active World.... |
| IterableWeakMap | [classes/foundry.utils.IterableWeakMap.md](classes/foundry.utils.IterableWeakMap.md) | Stores a map of objects with weak references to the keys, allowing them to be garbage collected. Both keys and values... |
| IterableWeakSet | [classes/foundry.utils.IterableWeakSet.md](classes/foundry.utils.IterableWeakSet.md) | Stores a set of objects with weak references to them, allowing them to be garbage collected. Can be iterated over,... |
| JSONField | [classes/foundry.data.fields.JSONField.md](classes/foundry.data.fields.JSONField.md) | A special [foundry.data.fields.StringField](foundry.data.fields.StringField.md) which contains serialized JSON data.... |
| JavaScriptField | [classes/foundry.data.fields.JavaScriptField.md](classes/foundry.data.fields.JavaScriptField.md) | A subclass of [foundry.data.fields.StringField](foundry.data.fields.StringField.md) which contains JavaScript code.... |
| Journal | [classes/foundry.documents.collections.Journal.md](classes/foundry.documents.collections.Journal.md) | The singleton collection of JournalEntry documents which exist within the active World.... |
| JournalDirectory | [classes/foundry.applications.sidebar.tabs.JournalDirectory.md](classes/foundry.applications.sidebar.tabs.JournalDirectory.md) | The World Journal.... |
| JournalEntry | [classes/foundry.documents.JournalEntry.md](classes/foundry.documents.JournalEntry.md) | The client-side JournalEntry document which extends the common BaseJournalEntry model.... |
| JournalEntryCategory | [classes/foundry.documents.JournalEntryCategory.md](classes/foundry.documents.JournalEntryCategory.md) | The client-side JournalEntryCategory document which extends the common BaseJournalEntryCategory model.... |
| JournalEntryCategoryConfig | [classes/foundry.applications.sheets.journal.JournalEntryCategoryConfig.md](classes/foundry.applications.sheets.journal.JournalEntryCategoryConfig.md) | An Application responsible for managing a journal entry's categories.... |
| JournalEntryPage | [classes/foundry.documents.JournalEntryPage.md](classes/foundry.documents.JournalEntryPage.md) | The client-side JournalEntryPage document which extends the common BaseJournalEntryPage document model.... |
| JournalEntryPageCodeMirrorSheet | [classes/foundry.applications.sheets.journal.JournalEntryPageCodeMirrorSheet.md](classes/foundry.applications.sheets.journal.JournalEntryPageCodeMirrorSheet.md) | An abstract class that provides code-mirror-specific methods for editing journal page content.... |
| JournalEntryPageHTMLSheet | [classes/foundry.applications.sheets.journal.JournalEntryPageHTMLSheet.md](classes/foundry.applications.sheets.journal.JournalEntryPageHTMLSheet.md) | An Application responsible for displaying a single text-type JournalEntryPage Document, and editing it with an HTML... |
| JournalEntryPageHandlebarsSheet | [classes/foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.md](classes/foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.md) | An abstract subclass that contains specialised handlebars logic for JournalEntryPageSheets.... |
| JournalEntryPageImageSheet | [classes/foundry.applications.sheets.journal.JournalEntryPageImageSheet.md](classes/foundry.applications.sheets.journal.JournalEntryPageImageSheet.md) | An Application responsible for displaying and editing a single image-type JournalEntryPage Document.... |
| JournalEntryPageMarkdownSheet | [classes/foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.md](classes/foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.md) | An Application responsible for displaying a single text-type JournalEntryPage Document, and editing it with a... |
| JournalEntryPagePDFSheet | [classes/foundry.applications.sheets.journal.JournalEntryPagePDFSheet.md](classes/foundry.applications.sheets.journal.JournalEntryPagePDFSheet.md) | An Application responsible for displaying and editing a single pdf-type JournalEntryPage Document.... |
| JournalEntryPageProseMirrorSheet | [classes/foundry.applications.sheets.journal.JournalEntryPageProseMirrorSheet.md](classes/foundry.applications.sheets.journal.JournalEntryPageProseMirrorSheet.md) | An Application responsible for displaying a single text-type JournalEntryPage Document, and editing it with a... |
| JournalEntryPageSheet | [classes/foundry.applications.sheets.journal.JournalEntryPageSheet.md](classes/foundry.applications.sheets.journal.JournalEntryPageSheet.md) | An abstract Application responsible for displaying and editing a single JournalEntryPage Document.... |
| JournalEntryPageTextSheet | [classes/foundry.applications.sheets.journal.JournalEntryPageTextSheet.md](classes/foundry.applications.sheets.journal.JournalEntryPageTextSheet.md) | An abstract Application responsible for displaying and editing a single text-type JournalEntryPage Document.... |
| JournalEntryPageVideoSheet | [classes/foundry.applications.sheets.journal.JournalEntryPageVideoSheet.md](classes/foundry.applications.sheets.journal.JournalEntryPageVideoSheet.md) | An Application responsible for displaying and editing a single video-type JournalEntryPage Document.... |
| JournalEntrySheet | [classes/foundry.applications.sheets.journal.JournalEntrySheet.md](classes/foundry.applications.sheets.journal.JournalEntrySheet.md) | The Application responsible for displaying and editing a single JournalEntry Document.... |
| JournalPageSheet | [classes/foundry.appv1.sheets.JournalPageSheet.md](classes/foundry.appv1.sheets.JournalPageSheet.md) | The Application responsible for displaying and editing a single JournalEntryPage document.... |
| JournalSheet | [classes/foundry.appv1.sheets.JournalSheet.md](classes/foundry.appv1.sheets.JournalSheet.md) | The Application responsible for displaying and editing a single JournalEntry document.... |
| JournalTextPageSheet | [classes/foundry.appv1.sheets.JournalTextPageSheet.md](classes/foundry.appv1.sheets.JournalTextPageSheet.md) | The Application responsible for displaying and editing a single JournalEntryPage text document.... |
| KTX2Parser | [classes/foundry.canvas.KTX2Parser.md](classes/foundry.canvas.KTX2Parser.md) | A KTX2 PIXI loader parser using the official Khronos KTX module.... |
| KeyboardManager | [classes/foundry.helpers.interaction.KeyboardManager.md](classes/foundry.helpers.interaction.KeyboardManager.md) | A set of helpers and management functions for dealing with user input from keyboard events.... |
| Level | [classes/foundry.documents.Level.md](classes/foundry.documents.Level.md) | The client-side Level document which extends the common BaseTile document model.... |
| LevelConfig | [classes/foundry.applications.sheets.LevelConfig.md](classes/foundry.applications.sheets.LevelConfig.md) | The Application responsible for configuring a single Level document.... |
| LightData | [classes/foundry.data.LightData.md](classes/foundry.data.LightData.md) | A reusable document structure for the internal data used to render the appearance of a light source.... |
| LightDomeColorationShader | [classes/foundry.canvas.rendering.shaders.LightDomeColorationShader.md](classes/foundry.canvas.rendering.shaders.LightDomeColorationShader.md) | Light dome animation coloration shader... |
| LightingLayer | [classes/foundry.canvas.layers.LightingLayer.md](classes/foundry.canvas.layers.LightingLayer.md) | The Lighting Layer which ambient light sources as part of the CanvasEffectsGroup.... |
| LimitedAnglePolygon | [classes/foundry.canvas.geometry.LimitedAnglePolygon.md](classes/foundry.canvas.geometry.LimitedAnglePolygon.md) | A special class of Polygon which implements a limited angle of emission for a Point Source.... |
| LineShapeData | [classes/foundry.data.LineShapeData.md](classes/foundry.data.LineShapeData.md) | The data model for a line shape.... |
| Localization | [classes/foundry.helpers.Localization.md](classes/foundry.helpers.Localization.md) | A helper class which assists with localization and string translation... |
| Macro | [classes/foundry.documents.Macro.md](classes/foundry.documents.Macro.md) | The client-side Macro document which extends the common BaseMacro model.... |
| MacroConfig | [classes/foundry.applications.sheets.MacroConfig.md](classes/foundry.applications.sheets.MacroConfig.md) | A Macro configuration sheet... |
| MacroDirectory | [classes/foundry.applications.sidebar.tabs.MacroDirectory.md](classes/foundry.applications.sidebar.tabs.MacroDirectory.md) | The World Macro directory listing.... |
| Macros | [classes/foundry.documents.collections.Macros.md](classes/foundry.documents.collections.Macros.md) | The singleton collection of Macro documents which exist within the active World.... |
| MagicalGloomDarknessShader | [classes/foundry.canvas.rendering.shaders.MagicalGloomDarknessShader.md](classes/foundry.canvas.rendering.shaders.MagicalGloomDarknessShader.md) | Creates a gloomy ring of pure darkness.... |
| MainMenu | [classes/foundry.applications.ui.MainMenu.md](classes/foundry.applications.ui.MainMenu.md) | The main menu application which is toggled via the ESC key.... |
| MersenneTwister | [classes/foundry.dice.MersenneTwister.md](classes/foundry.dice.MersenneTwister.md) | A standalone, pure JavaScript implementation of the Mersenne Twister pseudo random number generator.... |
| ModifyMovementCostRegionBehaviorType | [classes/foundry.data.regionBehaviors.ModifyMovementCostRegionBehaviorType.md](classes/foundry.data.regionBehaviors.ModifyMovementCostRegionBehaviorType.md) | The data model for a behavior that allows to modify the movement cost within the Region.... |
| Module | [classes/foundry.packages.Module.md](classes/foundry.packages.Module.md) | [ClientPackageMixin](../functions/foundry.packages.ClientPackageMixin.md)... |
| ModuleManagement | [classes/foundry.applications.sidebar.apps.ModuleManagement.md](classes/foundry.applications.sidebar.apps.ModuleManagement.md) | The Module Management Application.... |
| MouseInteractionManager | [classes/foundry.canvas.interaction.MouseInteractionManager.md](classes/foundry.canvas.interaction.MouseInteractionManager.md) | Handle mouse interaction events for a Canvas object.... |
| MouseManager | [classes/foundry.helpers.interaction.MouseManager.md](classes/foundry.helpers.interaction.MouseManager.md) | Management class for Mouse events.... |
| NewUserExperienceManager | [classes/foundry.nue.NewUserExperienceManager.md](classes/foundry.nue.NewUserExperienceManager.md) | Responsible for managing the New User Experience workflows.... |
| Note | [classes/foundry.canvas.placeables.Note.md](classes/foundry.canvas.placeables.Note.md) | A Note is an implementation of PlaceableObject which represents an annotated location within the Scene.... |
| NoteConfig | [classes/foundry.applications.sheets.NoteConfig.md](classes/foundry.applications.sheets.NoteConfig.md) | The Application responsible for configuring a single Note document within a parent Scene.... |
| NoteDocument | [classes/foundry.documents.NoteDocument.md](classes/foundry.documents.NoteDocument.md) | The client-side Note document which extends the common BaseNote document model.... |
| NotePalette | [classes/foundry.applications.sheets.palette.NotePalette.md](classes/foundry.applications.sheets.palette.NotePalette.md) | A dialog that provides bulk operation or default values for newly-created notes.... |
| NoteTab | [classes/foundry.applications.sidebar.tabs.NoteTab.md](classes/foundry.applications.sidebar.tabs.NoteTab.md) | The Note-specific placeables tab.... |
| NotesLayer | [classes/foundry.canvas.layers.NotesLayer.md](classes/foundry.canvas.layers.NotesLayer.md) | The Notes Layer which contains Note canvas objects.... |
| Notifications | [classes/foundry.applications.ui.Notifications.md](classes/foundry.applications.ui.Notifications.md) | A common framework for displaying notifications to the client.... |
| NumberField | [classes/foundry.data.fields.NumberField.md](classes/foundry.data.fields.NumberField.md) | A subclass of [foundry.data.fields.DataField](foundry.data.fields.DataField.md) which deals with number-typed data.... |
| NumericTerm | [classes/foundry.dice.terms.NumericTerm.md](classes/foundry.dice.terms.NumericTerm.md) | A type of RollTerm used to represent static numbers.... |
| ObjectField | [classes/foundry.data.fields.ObjectField.md](classes/foundry.data.fields.ObjectField.md) | A subclass of DataField which deals with object-typed data.... |
| ObservableTransform | [classes/foundry.canvas.geometry.ObservableTransform.md](classes/foundry.canvas.geometry.ObservableTransform.md) | A custom Transform class allowing to observe changes with a callback.... |
| OccludableSamplerShader | [classes/foundry.canvas.rendering.shaders.OccludableSamplerShader.md](classes/foundry.canvas.rendering.shaders.OccludableSamplerShader.md) | The occlusion sampler shader.... |
| OperatorTerm | [classes/foundry.dice.terms.OperatorTerm.md](classes/foundry.dice.terms.OperatorTerm.md) | A type of RollTerm used to denote and perform an arithmetic operation.... |
| OverlayCanvasGroup | [classes/foundry.canvas.groups.OverlayCanvasGroup.md](classes/foundry.canvas.groups.OverlayCanvasGroup.md) | A container group which is not bound to the stage world transform.... |
| PackageCompatibility | [classes/foundry.packages.PackageCompatibility.md](classes/foundry.packages.PackageCompatibility.md) | A custom SchemaField for defining package compatibility versions.... |
| PackageCompendiumPacks | [classes/foundry.PackageCompendiumPacks.md](classes/foundry.PackageCompendiumPacks.md) | A special SetField which provides additional validation and initialization behavior specific to compendium packs.... |
| PackageRelationships | [classes/foundry.PackageRelationships.md](classes/foundry.PackageRelationships.md) | A custom SchemaField for defining package relationships.... |
| ParentheticalTerm | [classes/foundry.dice.terms.ParentheticalTerm.md](classes/foundry.dice.terms.ParentheticalTerm.md) | A type of RollTerm used to enclose a parenthetical expression to be recursively evaluated.... |
| ParticleGenerator | [classes/foundry.canvas.animation.ParticleGenerator.md](classes/foundry.canvas.animation.ParticleGenerator.md) | A lightweight, native particle generator designed for VFX.... |
| PauseGameRegionBehaviorType | [classes/foundry.data.regionBehaviors.PauseGameRegionBehaviorType.md](classes/foundry.data.regionBehaviors.PauseGameRegionBehaviorType.md) | The data model for a behavior that pauses the game when a player-controlled Token enters the Region.... |
| PerceptionManager | [classes/foundry.canvas.perception.PerceptionManager.md](classes/foundry.canvas.perception.PerceptionManager.md) | A helper class which manages the refresh workflow for perception layers on the canvas.... |
| PermissionConfig | [classes/foundry.applications.apps.PermissionConfig.md](classes/foundry.applications.apps.PermissionConfig.md) | An application for configuring the permissions which are available to each User role.... |
| Ping | [classes/foundry.canvas.interaction.Ping.md](classes/foundry.canvas.interaction.Ping.md) | A class to manage a user ping on the canvas.... |
| PlaceableConfig | [classes/foundry.applications.sheets.PlaceableConfig.md](classes/foundry.applications.sheets.PlaceableConfig.md) | The Application responsible for configuring a Placeable document within a parent Scene.... |
| PlaceableDirectory | [classes/foundry.applications.sidebar.tabs.PlaceableDirectory.md](classes/foundry.applications.sidebar.tabs.PlaceableDirectory.md) | The sidebar placeables tab.... |
| PlaceableFilter | [classes/foundry.applications.sidebar.filters.PlaceableFilter.md](classes/foundry.applications.sidebar.filters.PlaceableFilter.md) | A dialog application for configuring advanced placeable filters.... |
| PlaceableObject | [classes/foundry.canvas.placeables.PlaceableObject.md](classes/foundry.canvas.placeables.PlaceableObject.md) | An Abstract Base Class which defines a Placeable Object which represents a Document placed on the Canvas... |
| PlaceablePalette | [classes/foundry.PlaceablePalette.md](classes/foundry.PlaceablePalette.md) | The mixed application class augmented with placeable palette functionality.... |
| PlaceableTab | [classes/foundry.applications.sidebar.tabs.PlaceableTab.md](classes/foundry.applications.sidebar.tabs.PlaceableTab.md) | An application responsible for rendering a view of all placeables of a given type on the viewed Scene.... |
| PlaceablesLayer | [classes/foundry.canvas.layers.PlaceablesLayer.md](classes/foundry.canvas.layers.PlaceablesLayer.md) | A subclass of Canvas Layer which is specifically designed to contain multiple PlaceableObject instances,... |
| Players | [classes/foundry.applications.ui.Players.md](classes/foundry.applications.ui.Players.md) | A UI element which displays the Users defined for this world.... |
| Playlist | [classes/foundry.documents.Playlist.md](classes/foundry.documents.Playlist.md) | The client-side Playlist document which extends the common BasePlaylist model.... |
| PlaylistConfig | [classes/foundry.applications.sheets.PlaylistConfig.md](classes/foundry.applications.sheets.PlaylistConfig.md) | The Application responsible for configuring a single Playlist document... |
| PlaylistDirectory | [classes/foundry.applications.sidebar.tabs.PlaylistDirectory.md](classes/foundry.applications.sidebar.tabs.PlaylistDirectory.md) | The World Playlist directory listing.... |
| PlaylistSound | [classes/foundry.documents.PlaylistSound.md](classes/foundry.documents.PlaylistSound.md) | The client-side PlaylistSound document which extends the common BasePlaylistSound model.... |
| PlaylistSoundConfig | [classes/foundry.applications.sheets.PlaylistSoundConfig.md](classes/foundry.applications.sheets.PlaylistSoundConfig.md) | The Application responsible for configuring a single PlaylistSound document within a parent Playlist.... |
| Playlists | [classes/foundry.documents.collections.Playlists.md](classes/foundry.documents.collections.Playlists.md) | The singleton collection of Playlist documents which exist within the active World.... |
| PointDarknessSource | [classes/foundry.canvas.sources.PointDarknessSource.md](classes/foundry.canvas.sources.PointDarknessSource.md) | A specialized subclass of the BaseLightSource which renders a source of darkness as a point-based effect.... |
| PointLightSource | [classes/foundry.canvas.sources.PointLightSource.md](classes/foundry.canvas.sources.PointLightSource.md) | A specialized subclass of the BaseLightSource which renders a source of light as a point-based effect.... |
| PointMovementSource | [classes/foundry.canvas.sources.PointMovementSource.md](classes/foundry.canvas.sources.PointMovementSource.md) | A specialized subclass of the BaseEffectSource which describes a movement-based source.... |
| PointSoundSource | [classes/foundry.canvas.sources.PointSoundSource.md](classes/foundry.canvas.sources.PointSoundSource.md) | A specialized subclass of the BaseEffectSource which describes a point-based source of sound.... |
| PointSourceMesh | [classes/foundry.canvas.containers.PointSourceMesh.md](classes/foundry.canvas.containers.PointSourceMesh.md) | Extension of a PIXI.Mesh for PointEffectSources.... |
| PointSourcePolygon | [classes/foundry.canvas.geometry.PointSourcePolygon.md](classes/foundry.canvas.geometry.PointSourcePolygon.md) | An extension of Polygon which is used to represent the line of sight for a point source.... |
| PointVisionSource | [classes/foundry.canvas.sources.PointVisionSource.md](classes/foundry.canvas.sources.PointVisionSource.md) | A specialized subclass of RenderedEffectSource which represents a source of point-based vision.... |
| PolygonMesher | [classes/foundry.canvas.geometry.PolygonMesher.md](classes/foundry.canvas.geometry.PolygonMesher.md) | A helper class used to construct triangulated polygon meshes... |
| PolygonShapeData | [classes/foundry.PolygonShapeData.md](classes/foundry.PolygonShapeData.md) | The data model for a polygon shape.... |
| PolygonShapeData | [classes/foundry.data.PolygonShapeData.md](classes/foundry.data.PolygonShapeData.md) | The data model for a polygon shape.... |
| PolygonTree | [classes/foundry.data.PolygonTree.md](classes/foundry.data.PolygonTree.md) | A polygon tree.... |
| PolygonTreeNode | [classes/foundry.data.PolygonTreeNode.md](classes/foundry.data.PolygonTreeNode.md) | The node of a [foundry.data.PolygonTree](foundry.data.PolygonTree.md).... |
| PolygonVertex | [classes/foundry.canvas.geometry.edges.PolygonVertex.md](classes/foundry.canvas.geometry.edges.PolygonVertex.md) | A specialized point data structure used to represent vertices in the context of the ClockwiseSweepPolygon.... |
| PoolTerm | [classes/foundry.dice.terms.PoolTerm.md](classes/foundry.dice.terms.PoolTerm.md) | A type of RollTerm which encloses a pool of multiple inner Rolls which are evaluated jointly.... |
| PreciseText | [classes/foundry.canvas.containers.PreciseText.md](classes/foundry.canvas.containers.PreciseText.md) | An extension of the default PIXI.Text object which forces double resolution.... |
| PrimaryBaseSamplerShader | [classes/foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md](classes/foundry.canvas.rendering.shaders.PrimaryBaseSamplerShader.md) | The base shader class of [foundry.canvas.primary.PrimarySpriteMesh](foundry.canvas.primary.PrimarySpriteMesh.md).... |
| PrimaryCanvasContainer | [classes/foundry.canvas.primary.PrimaryCanvasContainer.md](classes/foundry.canvas.primary.PrimaryCanvasContainer.md) | Primary canvas container are reserved for advanced usage.... |
| PrimaryCanvasGroup | [classes/foundry.canvas.groups.PrimaryCanvasGroup.md](classes/foundry.canvas.groups.PrimaryCanvasGroup.md) | The primary Canvas group which generally contains tangible physical objects which exist within the Scene.... |
| PrimaryCanvasGroupAmbienceFilter | [classes/foundry.canvas.rendering.filters.PrimaryCanvasGroupAmbienceFilter.md](classes/foundry.canvas.rendering.filters.PrimaryCanvasGroupAmbienceFilter.md) | A filter used to apply color adjustments and other modifications to the environment.... |
| PrimaryCanvasParticleContainer | [classes/foundry.canvas.primary.PrimaryCanvasParticleContainer.md](classes/foundry.canvas.primary.PrimaryCanvasParticleContainer.md) | A lightweight primary-canvas container designed for particle effects.... |
| PrimaryGraphics | [classes/foundry.canvas.primary.PrimaryGraphics.md](classes/foundry.canvas.primary.PrimaryGraphics.md) | A basic PCO which is handling drawings of any shape.... |
| PrimarySpriteMesh | [classes/foundry.canvas.primary.PrimarySpriteMesh.md](classes/foundry.canvas.primary.PrimarySpriteMesh.md) | A basic PCO sprite mesh which is handling occlusion and depth.... |
| ProseMirrorClickHandler | [classes/foundry.prosemirror.ProseMirrorClickHandler.md](classes/foundry.prosemirror.ProseMirrorClickHandler.md) | A class responsible for managing click events inside a ProseMirror editor.... |
| ProseMirrorContentLinkPlugin | [classes/foundry.prosemirror.ProseMirrorContentLinkPlugin.md](classes/foundry.prosemirror.ProseMirrorContentLinkPlugin.md) | A class responsible for handling the dropping of Documents onto the editor and creating content links for them.... |
| ProseMirrorDirtyPlugin | [classes/foundry.prosemirror.ProseMirrorDirtyPlugin.md](classes/foundry.prosemirror.ProseMirrorDirtyPlugin.md) | A simple plugin that records the dirty state of the editor.... |
| ProseMirrorDropDown | [classes/foundry.prosemirror.ProseMirrorDropDown.md](classes/foundry.prosemirror.ProseMirrorDropDown.md) | A class responsible for creating a drop-down.... |
| ProseMirrorEditor | [classes/foundry.applications.ux.ProseMirrorEditor.md](classes/foundry.applications.ux.ProseMirrorEditor.md) | A class responsible for managing state and collaborative editing of a single ProseMirror instance.... |
| ProseMirrorHighlightMatchesPlugin | [classes/foundry.prosemirror.ProseMirrorHighlightMatchesPlugin.md](classes/foundry.prosemirror.ProseMirrorHighlightMatchesPlugin.md) | A ProseMirrorPlugin wrapper around the PossibleMatchesTooltip class.... |
| ProseMirrorImagePlugin | [classes/foundry.prosemirror.ProseMirrorImagePlugin.md](classes/foundry.prosemirror.ProseMirrorImagePlugin.md) | A class responsible for handle drag-and-drop and pasting of image content. Ensuring no base64 data is injected... |
| ProseMirrorInputRules | [classes/foundry.prosemirror.ProseMirrorInputRules.md](classes/foundry.prosemirror.ProseMirrorInputRules.md) | A class responsible for building the input rules for the ProseMirror editor.... |
| ProseMirrorKeyMaps | [classes/foundry.prosemirror.ProseMirrorKeyMaps.md](classes/foundry.prosemirror.ProseMirrorKeyMaps.md) | A class responsible for building the keyboard commands for the ProseMirror editor.... |
| ProseMirrorMenu | [classes/foundry.prosemirror.ProseMirrorMenu.md](classes/foundry.prosemirror.ProseMirrorMenu.md) | A class responsible for building a menu for a ProseMirror instance.... |
| ProseMirrorPasteTransformer | [classes/foundry.prosemirror.ProseMirrorPasteTransformer.md](classes/foundry.prosemirror.ProseMirrorPasteTransformer.md) | A class responsible for applying transformations to content pasted inside the editor.... |
| ProseMirrorPlugin | [classes/foundry.prosemirror.ProseMirrorPlugin.md](classes/foundry.prosemirror.ProseMirrorPlugin.md) | * ProseMirrorPlugin... |
| PrototypeOverridesConfig | [classes/foundry.applications.settings.menus.PrototypeOverridesConfig.md](classes/foundry.applications.settings.menus.PrototypeOverridesConfig.md) | A submenu for managing user overrides of PrototypeTokens... |
| PrototypeToken | [classes/foundry.data.PrototypeToken.md](classes/foundry.data.PrototypeToken.md) | Extend the base TokenData to define a PrototypeToken which exists within a parent Actor.... |
| PrototypeTokenConfig | [classes/foundry.applications.sheets.PrototypeTokenConfig.md](classes/foundry.applications.sheets.PrototypeTokenConfig.md) | The Application responsible for configuring an actor's PrototypeToken... |
| PrototypeTokenOverrides | [classes/foundry.data.PrototypeTokenOverrides.md](classes/foundry.data.PrototypeTokenOverrides.md) | The data model for the the core.prototypeTokenOverrides setting.... |
| PulseColorationShader | [classes/foundry.canvas.rendering.shaders.PulseColorationShader.md](classes/foundry.canvas.rendering.shaders.PulseColorationShader.md) | Pulse animation coloration shader... |
| PulseIlluminationShader | [classes/foundry.canvas.rendering.shaders.PulseIlluminationShader.md](classes/foundry.canvas.rendering.shaders.PulseIlluminationShader.md) | Pulse animation illumination shader... |
| PulsePing | [classes/foundry.canvas.interaction.PulsePing.md](classes/foundry.canvas.interaction.PulsePing.md) | A type of ping that produces a pulsing animation.... |
| QuadMesh | [classes/foundry.canvas.containers.QuadMesh.md](classes/foundry.canvas.containers.QuadMesh.md) | A basic rectangular mesh with a shader only. Does not natively handle textures (but a bound shader can).... |
| Quadtree | [classes/foundry.canvas.geometry.Quadtree.md](classes/foundry.canvas.geometry.Quadtree.md) | A Quadtree implementation that supports collision detection for rectangles.... |
| RadialRainbowColorationShader | [classes/foundry.canvas.rendering.shaders.RadialRainbowColorationShader.md](classes/foundry.canvas.rendering.shaders.RadialRainbowColorationShader.md) | Radial rainbow animation coloration shader... |
| RainShader | [classes/foundry.canvas.rendering.shaders.RainShader.md](classes/foundry.canvas.rendering.shaders.RainShader.md) | Rain shader effect.... |
| Ray | [classes/foundry.canvas.geometry.Ray.md](classes/foundry.canvas.geometry.Ray.md) | A ray for the purposes of computing sight and collision... |
| RectangleShapeData | [classes/foundry.RectangleShapeData.md](classes/foundry.RectangleShapeData.md) | The data model for a rectangle shape.... |
| RectangleShapeData | [classes/foundry.data.RectangleShapeData.md](classes/foundry.data.RectangleShapeData.md) | The data model for a rectangle shape.... |
| Region | [classes/foundry.canvas.placeables.Region.md](classes/foundry.canvas.placeables.Region.md) | A Region is an implementation of PlaceableObject which represents a Region document... |
| RegionBehavior | [classes/foundry.documents.RegionBehavior.md](classes/foundry.documents.RegionBehavior.md) | The client-side RegionBehavior document which extends the common BaseRegionBehavior model.... |
| RegionBehaviorConfig | [classes/foundry.applications.sheets.RegionBehaviorConfig.md](classes/foundry.applications.sheets.RegionBehaviorConfig.md) | The Scene Region configuration application.... |
| RegionBehaviorType | [classes/foundry.data.regionBehaviors.RegionBehaviorType.md](classes/foundry.data.regionBehaviors.RegionBehaviorType.md) | The data model for a behavior that receives Region events.... |
| RegionConfig | [classes/foundry.applications.sheets.RegionConfig.md](classes/foundry.applications.sheets.RegionConfig.md) | The Application responsible for configuring a single Region document within a parent Scene.... |
| RegionDocument | [classes/foundry.documents.RegionDocument.md](classes/foundry.documents.RegionDocument.md) | The client-side Region document which extends the common BaseRegion model.... |
| RegionFilter | [classes/foundry.applications.sidebar.filters.RegionFilter.md](classes/foundry.applications.sidebar.filters.RegionFilter.md) | An advanced filter dialog for the Regions placeable tab.... |
| RegionGeometry | [classes/foundry.canvas.placeables.regions.RegionGeometry.md](classes/foundry.canvas.placeables.regions.RegionGeometry.md) | The geometry of a [foundry.canvas.placeables.Region](foundry.canvas.placeables.Region.md).... |
| RegionLayer | [classes/foundry.canvas.layers.RegionLayer.md](classes/foundry.canvas.layers.RegionLayer.md) | The Regions Container.... |
| RegionMesh | [classes/foundry.canvas.placeables.regions.RegionMesh.md](classes/foundry.canvas.placeables.regions.RegionMesh.md) | A mesh of a [foundry.canvas.placeables.Region](foundry.canvas.placeables.Region.md).... |
| RegionPalette | [classes/foundry.applications.sheets.palette.RegionPalette.md](classes/foundry.applications.sheets.palette.RegionPalette.md) | A dialog that provides bulk operation or default values for newly-created regions.... |
| RegionShader | [classes/foundry.canvas.rendering.shaders.RegionShader.md](classes/foundry.canvas.rendering.shaders.RegionShader.md) | The shader used by [foundry.canvas.placeables.regions.RegionMesh](foundry.canvas.placeables.regions.RegionMesh.md).... |
| RegionShapeControls | [classes/foundry.canvas.placeables.regions.RegionShapeControls.md](classes/foundry.canvas.placeables.regions.RegionShapeControls.md) | Controls for a Region shape.... |
| RegionTab | [classes/foundry.applications.sidebar.tabs.RegionTab.md](classes/foundry.applications.sidebar.tabs.RegionTab.md) | The Region-specific placeables tab.... |
| RelatedPackage | [classes/foundry.packages.RelatedPackage.md](classes/foundry.packages.RelatedPackage.md) | A custom SchemaField for defining a related Package.... |
| ReleaseData | [classes/foundry.config.ReleaseData.md](classes/foundry.config.ReleaseData.md) | A data object which represents the details of this Release of Foundry VTT... |
| RenderFlags | [classes/foundry.canvas.interaction.RenderFlags.md](classes/foundry.canvas.interaction.RenderFlags.md) | A data structure for tracking a set of boolean status flags.... |
| RenderedCanvasGroup | [classes/foundry.canvas.groups.RenderedCanvasGroup.md](classes/foundry.canvas.groups.RenderedCanvasGroup.md) | A container group which contains the environment canvas group and the interface canvas group.... |
| RenderedEffectSource | [classes/foundry.canvas.sources.RenderedEffectSource.md](classes/foundry.canvas.sources.RenderedEffectSource.md) | An abstract class which extends the base PointSource to provide common functionality for rendering.... |
| ResizeHandle | [classes/foundry.canvas.containers.ResizeHandle.md](classes/foundry.canvas.containers.ResizeHandle.md) | A class based on PIXI.Graphics, that allows to create a resize handle in the desired area.... |
| RevolvingColorationShader | [classes/foundry.canvas.rendering.shaders.RevolvingColorationShader.md](classes/foundry.canvas.rendering.shaders.RevolvingColorationShader.md) | Revolving animation coloration shader... |
| RingShapeData | [classes/foundry.data.RingShapeData.md](classes/foundry.data.RingShapeData.md) | The data model for a ring shape.... |
| RoilingDarknessShader | [classes/foundry.canvas.rendering.shaders.RoilingDarknessShader.md](classes/foundry.canvas.rendering.shaders.RoilingDarknessShader.md) | Roiling mass illumination shader: intended primarily for darkness... |
| Roll | [classes/foundry.dice.Roll.md](classes/foundry.dice.Roll.md) | An interface and API for constructing and evaluating dice rolls.... |
| RollParser | [classes/foundry.dice.RollParser.md](classes/foundry.dice.RollParser.md) | A class for transforming events from the Peggy grammar lexer into various formats.... |
| RollResolver | [classes/foundry.applications.dice.RollResolver.md](classes/foundry.applications.dice.RollResolver.md) | An application responsible for handling unfulfilled dice terms in a roll.... |
| RollTable | [classes/foundry.documents.RollTable.md](classes/foundry.documents.RollTable.md) | The client-side RollTable document which extends the common BaseRollTable model.... |
| RollTableDirectory | [classes/foundry.applications.sidebar.tabs.RollTableDirectory.md](classes/foundry.applications.sidebar.tabs.RollTableDirectory.md) | The World RollTable directory listing.... |
| RollTableSheet | [classes/foundry.applications.sheets.RollTableSheet.md](classes/foundry.applications.sheets.RollTableSheet.md) | The Application responsible for editing, displaying, and using a single [RollTable](foundry.documents.RollTable.md) document.... |
| RollTables | [classes/foundry.documents.collections.RollTables.md](classes/foundry.documents.collections.RollTables.md) | The singleton collection of RollTable documents which exist within the active World.... |
| RollTerm | [classes/foundry.dice.terms.RollTerm.md](classes/foundry.dice.terms.RollTerm.md) | An abstract class which represents a single token that can be used as part of a Roll formula.... |
| Ruler | [classes/foundry.canvas.interaction.Ruler.md](classes/foundry.canvas.interaction.Ruler.md) | The default implementation of the Ruler.... |
| SMAABlendingWeightCalculationFilter | [classes/foundry.canvas.rendering.filters.SMAABlendingWeightCalculationFilter.md](classes/foundry.canvas.rendering.filters.SMAABlendingWeightCalculationFilter.md) | The blending weight calculation filter for [foundry.canvas.rendering.filters.SMAAFilter](foundry.canvas.rendering.filters.SMAAFilter.md).... |
| SMAAEdgeDetectionFilter | [classes/foundry.canvas.rendering.filters.SMAAEdgeDetectionFilter.md](classes/foundry.canvas.rendering.filters.SMAAEdgeDetectionFilter.md) | The edge detection filter for [foundry.canvas.rendering.filters.SMAAFilter](foundry.canvas.rendering.filters.SMAAFilter.md).... |
| SMAAFilter | [classes/foundry.canvas.rendering.filters.SMAAFilter.md](classes/foundry.canvas.rendering.filters.SMAAFilter.md) | The SMAA filter.... |
| SMAANeighborhoodBlendingFilter | [classes/foundry.canvas.rendering.filters.SMAANeighborhoodBlendingFilter.md](classes/foundry.canvas.rendering.filters.SMAANeighborhoodBlendingFilter.md) | The neighborhood blending filter for [foundry.canvas.rendering.filters.SMAAFilter](foundry.canvas.rendering.filters.SMAAFilter.md).... |
| Scene | [classes/foundry.documents.Scene.md](classes/foundry.documents.Scene.md) | The client-side Scene document which extends the common BaseScene model.... |
| SceneConfig | [classes/foundry.applications.sheets.SceneConfig.md](classes/foundry.applications.sheets.SceneConfig.md) | The Application responsible for configuring a single Scene document.... |
| SceneControls | [classes/foundry.applications.ui.SceneControls.md](classes/foundry.applications.ui.SceneControls.md) | The Scene Controls UI element.... |
| SceneDirectory | [classes/foundry.applications.sidebar.tabs.SceneDirectory.md](classes/foundry.applications.sidebar.tabs.SceneDirectory.md) | The World Scene directory listing.... |
| SceneLevelsSetField | [classes/foundry.data.fields.SceneLevelsSetField.md](classes/foundry.data.fields.SceneLevelsSetField.md) | A nullable set field used to reference a set of specific Scene Level documents.... |
| SceneManager | [classes/foundry.canvas.SceneManager.md](classes/foundry.canvas.SceneManager.md) | A framework for imbuing special scripted behaviors into a single specific Scene.... |
| SceneNavigation | [classes/foundry.applications.ui.SceneNavigation.md](classes/foundry.applications.ui.SceneNavigation.md) | The Scene Navigation UI element.... |
| Scenes | [classes/foundry.documents.collections.Scenes.md](classes/foundry.documents.collections.Scenes.md) | The singleton collection of Scene documents which exist within the active World.... |
| SchemaField | [classes/foundry.data.fields.SchemaField.md](classes/foundry.data.fields.SchemaField.md) | A special class of [foundry.data.fields.DataField](foundry.data.fields.DataField.md) which defines a data schema.... |
| SearchFilter | [classes/foundry.applications.ux.SearchFilter.md](classes/foundry.applications.ux.SearchFilter.md) | A controller class for managing a text input widget that filters the contents of some other UI element.... |
| Semaphore | [classes/foundry.utils.Semaphore.md](classes/foundry.utils.Semaphore.md) | A simple Semaphore implementation which provides a limited queue for ensuring proper concurrency.... |
| ServerSettings | [classes/foundry.config.ServerSettings.md](classes/foundry.config.ServerSettings.md) | A data model definition which describes the application configuration options.... |
| SetField | [classes/foundry.data.fields.SetField.md](classes/foundry.data.fields.SetField.md) | A subclass of [foundry.data.fields.ArrayField](foundry.data.fields.ArrayField.md) which supports a set of contained elements.... |
| Setting | [classes/foundry.documents.Setting.md](classes/foundry.documents.Setting.md) | The client-side Setting document which extends the common BaseSetting model.... |
| Settings | [classes/foundry.applications.sidebar.tabs.Settings.md](classes/foundry.applications.sidebar.tabs.Settings.md) | The sidebar settings tab.... |
| SettingsConfig | [classes/foundry.applications.settings.SettingsConfig.md](classes/foundry.applications.settings.SettingsConfig.md) | The Application responsible for displaying and editing the client and world settings for this world.... |
| SetupTour | [classes/foundry.nue.tours.SetupTour.md](classes/foundry.nue.tours.SetupTour.md) | A Tour subclass that handles controlling the UI state of the Setup screen... |
| ShaderField | [classes/foundry.data.fields.ShaderField.md](classes/foundry.data.fields.ShaderField.md) | A special subclass of DataField used to reference an AbstractBaseShader definition. Client only.... |
| ShapeConfig | [classes/foundry.applications.apps.ShapeConfig.md](classes/foundry.applications.apps.ShapeConfig.md) | The configuration to edit a shape of a Document.... |
| ShapeControls | [classes/foundry.canvas.containers.ShapeControls.md](classes/foundry.canvas.containers.ShapeControls.md) | Controls for a shape.... |
| ShapeControlsHandle | [classes/foundry.canvas.containers.ShapeControlsHandle.md](classes/foundry.canvas.containers.ShapeControlsHandle.md) | A handle of a shape controls element.... |
| ShapeData | [classes/foundry.data.ShapeData.md](classes/foundry.data.ShapeData.md) | A data model intended to be used as an inner EmbeddedDataField which defines a geometric shape.... |
| ShapesField | [classes/foundry.data.fields.ShapesField.md](classes/foundry.data.fields.ShapesField.md) | A subclass of [foundry.data.fields.ArrayField](foundry.data.fields.ArrayField.md) for shapes.... |
| ShowToPlayersDialog | [classes/foundry.applications.sheets.journal.ShowToPlayersDialog.md](classes/foundry.applications.sheets.journal.ShowToPlayersDialog.md) | A dialog for configuring options when showing content to players.... |
| Sidebar | [classes/foundry.applications.sidebar.Sidebar.md](classes/foundry.applications.sidebar.Sidebar.md) | The main sidebar application.... |
| SidebarTour | [classes/foundry.nue.tours.SidebarTour.md](classes/foundry.nue.tours.SidebarTour.md) | A Tour subclass for the Sidebar Tour... |
| SimplePeerAVClient | [classes/foundry.av.clients.SimplePeerAVClient.md](classes/foundry.av.clients.SimplePeerAVClient.md) | An implementation of the AVClient which uses the simple-peer library and the Foundry socket server for signaling.... |
| SingletonEmbeddedCollection | [classes/foundry.abstract.SingletonEmbeddedCollection.md](classes/foundry.abstract.SingletonEmbeddedCollection.md) | This class provides a [foundry.utils.Collection](foundry.utils.Collection.md) wrapper around a singleton embedded Document... |
| SirenColorationShader | [classes/foundry.canvas.rendering.shaders.SirenColorationShader.md](classes/foundry.canvas.rendering.shaders.SirenColorationShader.md) | Siren light animation coloration shader... |
| SirenIlluminationShader | [classes/foundry.canvas.rendering.shaders.SirenIlluminationShader.md](classes/foundry.canvas.rendering.shaders.SirenIlluminationShader.md) | Siren light animation illumination shader... |
| SmokePatchColorationShader | [classes/foundry.canvas.rendering.shaders.SmokePatchColorationShader.md](classes/foundry.canvas.rendering.shaders.SmokePatchColorationShader.md) | A patch of smoke... |
| SmokePatchIlluminationShader | [classes/foundry.canvas.rendering.shaders.SmokePatchIlluminationShader.md](classes/foundry.canvas.rendering.shaders.SmokePatchIlluminationShader.md) | A patch of smoke... |
| SmoothNoise | [classes/foundry.canvas.animation.SmoothNoise.md](classes/foundry.canvas.animation.SmoothNoise.md) | A smooth noise generator for one-dimensional values.... |
| SnowShader | [classes/foundry.canvas.rendering.shaders.SnowShader.md](classes/foundry.canvas.rendering.shaders.SnowShader.md) | Snow shader effect.... |
| SocketInterface | [classes/foundry.helpers.SocketInterface.md](classes/foundry.helpers.SocketInterface.md) | A standardized way socket messages are dispatched and their responses are handled... |
| Sound | [classes/foundry.audio.Sound.md](classes/foundry.audio.Sound.md) | A container around an AudioNode which manages sound playback in Foundry Virtual Tabletop.... |
| SoundsLayer | [classes/foundry.canvas.layers.SoundsLayer.md](classes/foundry.canvas.layers.SoundsLayer.md) | This Canvas Layer provides a container for AmbientSound objects.... |
| SpriteMesh | [classes/foundry.canvas.containers.SpriteMesh.md](classes/foundry.canvas.containers.SpriteMesh.md) | An extension of PIXI.Mesh which emulate a PIXI.Sprite with a specific shader.... |
| SquareGrid | [classes/foundry.grid.SquareGrid.md](classes/foundry.grid.SquareGrid.md) | The square grid class.... |
| StarLightColorationShader | [classes/foundry.canvas.rendering.shaders.StarLightColorationShader.md](classes/foundry.canvas.rendering.shaders.StarLightColorationShader.md) | A disco like star light.... |
| StringField | [classes/foundry.data.fields.StringField.md](classes/foundry.data.fields.StringField.md) | A subclass of [foundry.data.fields.DataField](foundry.data.fields.DataField.md) which deals with string-typed data.... |
| StringNode | [classes/foundry.utils.StringNode.md](classes/foundry.utils.StringNode.md) | A class that behaves like a lightweight DOM node, allowing children to be appended. Serializes to an HTML string.... |
| StringTerm | [classes/foundry.dice.terms.StringTerm.md](classes/foundry.dice.terms.StringTerm.md) | A type of RollTerm used to represent strings which have not yet been matched.... |
| StringTree | [classes/foundry.utils.StringTree.md](classes/foundry.utils.StringTree.md) | A data structure representing a tree of string nodes with arbitrary object leaves.... |
| SunburstColorationShader | [classes/foundry.canvas.rendering.shaders.SunburstColorationShader.md](classes/foundry.canvas.rendering.shaders.SunburstColorationShader.md) | Sunburst animation coloration shader... |
| SunburstIlluminationShader | [classes/foundry.canvas.rendering.shaders.SunburstIlluminationShader.md](classes/foundry.canvas.rendering.shaders.SunburstIlluminationShader.md) | Sunburst animation illumination shader... |
| SupportDetails | [classes/foundry.applications.sidebar.apps.SupportDetails.md](classes/foundry.applications.sidebar.apps.SupportDetails.md) | * [HandlebarsApplication](foundry.HandlebarsApplication.md)<this>... |
| SuppressWeatherRegionBehaviorType | [classes/foundry.data.regionBehaviors.SuppressWeatherRegionBehaviorType.md](classes/foundry.data.regionBehaviors.SuppressWeatherRegionBehaviorType.md) | The data model for a behavior that allows to suppress weather effects within the Region... |
| SwirlingRainbowColorationShader | [classes/foundry.canvas.rendering.shaders.SwirlingRainbowColorationShader.md](classes/foundry.canvas.rendering.shaders.SwirlingRainbowColorationShader.md) | Swirling rainbow animation coloration shader... |
| System | [classes/foundry.packages.System.md](classes/foundry.packages.System.md) | [ClientPackageMixin](../functions/foundry.packages.ClientPackageMixin.md)... |
| TableResult | [classes/foundry.documents.TableResult.md](classes/foundry.documents.TableResult.md) | The client-side TableResult document which extends the common BaseTableResult document model.... |
| TableResultConfig | [classes/foundry.applications.sheets.TableResultConfig.md](classes/foundry.applications.sheets.TableResultConfig.md) | The Application responsible for configuring a single TableResult document within a parent RollTable.... |
| Tabs | [classes/foundry.applications.ux.Tabs.md](classes/foundry.applications.ux.Tabs.md) | A controller class for managing tabbed navigation within an Application instance.... |
| TeleportTokenRegionBehaviorType | [classes/foundry.data.regionBehaviors.TeleportTokenRegionBehaviorType.md](classes/foundry.data.regionBehaviors.TeleportTokenRegionBehaviorType.md) | The data model for a behavior that teleports Token that enter the Region to a preset destination Region.... |
| TerrainData | [classes/foundry.data.TerrainData.md](classes/foundry.data.TerrainData.md) | The core TerrainData implementation.... |
| TextEditor | [classes/foundry.applications.ux.TextEditor.md](classes/foundry.applications.ux.TextEditor.md) | A collection of helper functions and utility methods related to the rich text editor.... |
| TextureCompressor | [classes/foundry.canvas.workers.TextureCompressor.md](classes/foundry.canvas.workers.TextureCompressor.md) | Wrapper for a web worker meant to convert a pixel buffer to the specified image format... |
| TextureData | [classes/foundry.data.TextureData.md](classes/foundry.data.TextureData.md) | A [foundry.data.fields.SchemaField](foundry.data.fields.SchemaField.md) subclass used to represent texture data.... |
| TextureExtractor | [classes/foundry.canvas.TextureExtractor.md](classes/foundry.canvas.TextureExtractor.md) | A class or interface that provide support for WebGL async read pixel/texture data extraction.... |
| TextureLoader | [classes/foundry.canvas.TextureLoader.md](classes/foundry.canvas.TextureLoader.md) | A Loader class which helps with loading video and image textures.... |
| TextureTransitionFilter | [classes/foundry.canvas.rendering.filters.TextureTransitionFilter.md](classes/foundry.canvas.rendering.filters.TextureTransitionFilter.md) | A filter specialized for transition effects between a source object and a target texture.... |
| Tile | [classes/foundry.canvas.placeables.Tile.md](classes/foundry.canvas.placeables.Tile.md) | A Tile is an implementation of PlaceableObject which represents a static piece of artwork or prop within the Scene.... |
| TileConfig | [classes/foundry.applications.sheets.TileConfig.md](classes/foundry.applications.sheets.TileConfig.md) | The Application responsible for configuring a single Tile document within a parent Scene.... |
| TileDocument | [classes/foundry.documents.TileDocument.md](classes/foundry.documents.TileDocument.md) | The client-side Tile document which extends the common BaseTile document model.... |
| TileFilter | [classes/foundry.applications.sidebar.filters.TileFilter.md](classes/foundry.applications.sidebar.filters.TileFilter.md) | An advanced filter dialog for the Tiles placeable tab.... |
| TileHUD | [classes/foundry.applications.hud.TileHUD.md](classes/foundry.applications.hud.TileHUD.md) | An implementation of the PlaceableHUD base class which renders a heads-up-display interface for Tile objects.... |
| TilePalette | [classes/foundry.applications.sheets.palette.TilePalette.md](classes/foundry.applications.sheets.palette.TilePalette.md) | A dialog that provides bulk operation or default values for newly-created tiles.... |
| TileTab | [classes/foundry.applications.sidebar.tabs.TileTab.md](classes/foundry.applications.sidebar.tabs.TileTab.md) | The Tile-specific placeables tab.... |
| TilesLayer | [classes/foundry.canvas.layers.TilesLayer.md](classes/foundry.canvas.layers.TilesLayer.md) | A PlaceablesLayer designed for rendering the visual Scene for a specific vertical cross-section.... |
| ToggleBehaviorRegionBehaviorType | [classes/foundry.data.regionBehaviors.ToggleBehaviorRegionBehaviorType.md](classes/foundry.data.regionBehaviors.ToggleBehaviorRegionBehaviorType.md) | The data model for a behavior that toggles Region Behaviors when one of the subscribed events occurs.... |
| Token | [classes/foundry.canvas.placeables.Token.md](classes/foundry.canvas.placeables.Token.md) | A Token is an implementation of PlaceableObject which represents an [foundry.documents.Actor](foundry.documents.Actor.md) within a viewed... |
| TokenConfig | [classes/foundry.applications.sheets.TokenConfig.md](classes/foundry.applications.sheets.TokenConfig.md) | The Application responsible for configuring a single token document within a parent Scene... |
| TokenDocument | [classes/foundry.documents.TokenDocument.md](classes/foundry.documents.TokenDocument.md) | The client-side Token document which extends the common BaseToken document model.... |
| TokenHUD | [classes/foundry.applications.hud.TokenHUD.md](classes/foundry.applications.hud.TokenHUD.md) | An implementation of the BasePlaceableHUD base class which renders a heads-up-display interface for Token objects.... |
| TokenLayer | [classes/foundry.canvas.layers.TokenLayer.md](classes/foundry.canvas.layers.TokenLayer.md) | The Tokens Container.... |
| TokenRing | [classes/foundry.canvas.placeables.tokens.TokenRing.md](classes/foundry.canvas.placeables.tokens.TokenRing.md) | Dynamic Token Ring Manager.... |
| TokenRingConfig | [classes/foundry.canvas.placeables.tokens.TokenRingConfig.md](classes/foundry.canvas.placeables.tokens.TokenRingConfig.md) | Token Ring configuration Singleton Class.... |
| TokenRingSamplerShader | [classes/foundry.canvas.rendering.shaders.TokenRingSamplerShader.md](classes/foundry.canvas.rendering.shaders.TokenRingSamplerShader.md) | The shader definition which powers the TokenRing.... |
| TokenRuler | [classes/foundry.canvas.placeables.tokens.TokenRuler.md](classes/foundry.canvas.placeables.tokens.TokenRuler.md) | The default implementation of the Token ruler.... |
| TokenShapeData | [classes/foundry.data.TokenShapeData.md](classes/foundry.data.TokenShapeData.md) | The data model for a token shape.... |
| TokenTab | [classes/foundry.applications.sidebar.tabs.TokenTab.md](classes/foundry.applications.sidebar.tabs.TokenTab.md) | The Token-specific placeables tab.... |
| TokenTurnMarker | [classes/foundry.canvas.placeables.tokens.TokenTurnMarker.md](classes/foundry.canvas.placeables.tokens.TokenTurnMarker.md) | The Turn Marker of a [foundry.canvas.placeables.Token](foundry.canvas.placeables.Token.md).... |
| TombstoneData | [classes/foundry.data.TombstoneData.md](classes/foundry.data.TombstoneData.md) | A minimal data model used to represent a tombstone entry inside an [foundry.abstract.EmbeddedCollectionDelta](foundry.abstract.EmbeddedCollectionDelta.md).... |
| TooltipManager | [classes/foundry.helpers.interaction.TooltipManager.md](classes/foundry.helpers.interaction.TooltipManager.md) | A singleton Tooltip Manager class responsible for rendering and positioning a dynamic tooltip element which is... |
| TorchColorationShader | [classes/foundry.canvas.rendering.shaders.TorchColorationShader.md](classes/foundry.canvas.rendering.shaders.TorchColorationShader.md) | Torch animation coloration shader... |
| TorchIlluminationShader | [classes/foundry.canvas.rendering.shaders.TorchIlluminationShader.md](classes/foundry.canvas.rendering.shaders.TorchIlluminationShader.md) | Allow coloring of illumination... |
| Tour | [classes/foundry.nue.Tour.md](classes/foundry.nue.Tour.md) | A Tour that shows a series of guided steps.... |
| ToursCollection | [classes/foundry.nue.ToursCollection.md](classes/foundry.nue.ToursCollection.md) | A singleton Tour Collection class responsible for registering and activating Tours, accessible as game.tours.... |
| ToursManagement | [classes/foundry.applications.sidebar.apps.ToursManagement.md](classes/foundry.applications.sidebar.apps.ToursManagement.md) | A management app for configuring which Tours are available or have been completed.... |
| TransitionContainer | [classes/foundry.canvas.TransitionContainer.md](classes/foundry.canvas.TransitionContainer.md) | Persistent overlay dedicated to scene transitions.... |
| TurnMarkerData | [classes/foundry.canvas.placeables.tokens.TurnMarkerData.md](classes/foundry.canvas.placeables.tokens.TurnMarkerData.md) | Turn marker configuration data model.... |
| TypeDataField | [classes/foundry.data.fields.TypeDataField.md](classes/foundry.data.fields.TypeDataField.md) | A subclass of [foundry.data.fields.ObjectField](foundry.data.fields.ObjectField.md) which supports a type-specific data object.... |
| TypeDataModel | [classes/foundry.abstract.TypeDataModel.md](classes/foundry.abstract.TypeDataModel.md) | A specialized subclass of DataModel, intended to represent a Document's type-specific data.... |
| TypedObjectField | [classes/foundry.data.fields.TypedObjectField.md](classes/foundry.data.fields.TypedObjectField.md) | A subclass of ObjectField that represents a mapping of keys to the provided DataField type.... |
| TypedSchemaField | [classes/foundry.data.fields.TypedSchemaField.md](classes/foundry.data.fields.TypedSchemaField.md) | A subclass of [foundry.data.fields.DataField](foundry.data.fields.DataField.md) that defines a union of schema-constrained objects discriminable... |
| UIConfig | [classes/foundry.applications.settings.menus.UIConfig.md](classes/foundry.applications.settings.menus.UIConfig.md) | A submenu that provides UI configuration settings.... |
| UnboundContainer | [classes/foundry.canvas.containers.UnboundContainer.md](classes/foundry.canvas.containers.UnboundContainer.md) | UnboundContainers behave like PIXI.Containers except that they are not bound to their parent's transforms.... |
| UnboundTransform | [classes/foundry.canvas.geometry.UnboundTransform.md](classes/foundry.canvas.geometry.UnboundTransform.md) | A custom Transform class which is not bound to the parent worldTransform.... |
| User | [classes/foundry.documents.User.md](classes/foundry.documents.User.md) | The client-side User document which extends the common BaseUser model.... |
| UserConfig | [classes/foundry.applications.sheets.UserConfig.md](classes/foundry.applications.sheets.UserConfig.md) | The User configuration application.... |
| UserTargets | [classes/foundry.canvas.placeables.tokens.UserTargets.md](classes/foundry.canvas.placeables.tokens.UserTargets.md) | A subclass of Set which manages the Token ids which the User has targeted.... |
| Users | [classes/foundry.documents.collections.Users.md](classes/foundry.documents.collections.Users.md) | The singleton collection of User documents which exist within the active World.... |
| VFXCanvasContainer | [classes/foundry.canvas.vfx.VFXCanvasContainer.md](classes/foundry.canvas.vfx.VFXCanvasContainer.md) | A special subclass of PrimaryCanvasContainer used for the animation of related display objects in VFXEffects.... |
| VFXComponent | [classes/foundry.canvas.vfx.VFXComponent.md](classes/foundry.canvas.vfx.VFXComponent.md) | * ModelData extends object... |
| VFXEffect | [classes/foundry.canvas.vfx.VFXEffect.md](classes/foundry.canvas.vfx.VFXEffect.md) | A specialized DataModel subclass used to configure VFXEffects in a way that can be serialized for storage in... |
| VFXParticleGeneratorComponent | [classes/foundry.canvas.vfx.components.VFXParticleGeneratorComponent.md](classes/foundry.canvas.vfx.components.VFXParticleGeneratorComponent.md) | A VFX component that creates and manages a [foundry.canvas.animation.ParticleGenerator](foundry.canvas.animation.ParticleGenerator.md).... |
| VFXPath | [classes/foundry.canvas.vfx.VFXPath.md](classes/foundry.canvas.vfx.VFXPath.md) | A class responsible for constructing a path of points used for animation.... |
| VFXPointField | [classes/foundry.canvas.vfx.fields.VFXPointField.md](classes/foundry.canvas.vfx.fields.VFXPointField.md) | A specialized subclass of SchemaField that specifically deals with points.... |
| VFXPointSourcePolygonField | [classes/foundry.canvas.vfx.fields.VFXPointSourcePolygonField.md](classes/foundry.canvas.vfx.fields.VFXPointSourcePolygonField.md) | A specialized VFX reference field that accepts either a pre-computed [PointSourcePolygon](foundry.canvas.geometry.PointSourcePolygon.md) instance... |
| VFXPositionalSoundComponent | [classes/foundry.canvas.vfx.components.VFXPositionalSoundComponent.md](classes/foundry.canvas.vfx.components.VFXPositionalSoundComponent.md) | A component for playing positional sound effects that are synchronized with the VFX timeline.... |
| VFXReferenceField | [classes/foundry.canvas.vfx.fields.VFXReferenceField.md](classes/foundry.canvas.vfx.fields.VFXReferenceField.md) | This specialized data field allows storing a data structure that will be later dynamically resolved.... |
| VFXReferenceObjectField | [classes/foundry.canvas.vfx.fields.VFXReferenceObjectField.md](classes/foundry.canvas.vfx.fields.VFXReferenceObjectField.md) | A subclass of VFXReferenceField which is used to target an entire object.... |
| VFXReferencePointField | [classes/foundry.canvas.vfx.fields.VFXReferencePointField.md](classes/foundry.canvas.vfx.fields.VFXReferencePointField.md) | A specialized subclass of VFXReferenceObjectField that specifically deals with points.... |
| VFXScrollingTextComponent | [classes/foundry.canvas.vfx.components.VFXScrollingTextComponent.md](classes/foundry.canvas.vfx.components.VFXScrollingTextComponent.md) | A component for displaying scrolling text effects at a canvas location using the... |
| VFXShakeComponent | [classes/foundry.canvas.vfx.components.VFXShakeComponent.md](classes/foundry.canvas.vfx.components.VFXShakeComponent.md) | A component that applies a canvas shake effect to a target PIXI display object using the... |
| VFXSingleAttackComponent | [classes/foundry.canvas.vfx.components.VFXSingleAttackComponent.md](classes/foundry.canvas.vfx.components.VFXSingleAttackComponent.md) | A base class VFX component used for single actor -> target direct attacks.... |
| VFXSingleImpactComponent | [classes/foundry.canvas.vfx.components.VFXSingleImpactComponent.md](classes/foundry.canvas.vfx.components.VFXSingleImpactComponent.md) | A VFX component used to add a single impact effect at a certain location.... |
| VideoHelper | [classes/foundry.helpers.media.VideoHelper.md](classes/foundry.helpers.media.VideoHelper.md) | A helper class to provide common functionality for working with HTML5 video objects... |
| VisibilityFilter | [classes/foundry.canvas.rendering.filters.VisibilityFilter.md](classes/foundry.canvas.rendering.filters.VisibilityFilter.md) | Apply visibility coloration according to the baseLine color.... |
| VisionMode | [classes/foundry.canvas.perception.VisionMode.md](classes/foundry.canvas.perception.VisionMode.md) | A Vision Mode which can be selected for use by a Token.... |
| VisualEffectsMaskingFilter | [classes/foundry.canvas.rendering.filters.VisualEffectsMaskingFilter.md](classes/foundry.canvas.rendering.filters.VisualEffectsMaskingFilter.md) | This filter handles masking and post-processing for visual effects.... |
| VoidFilter | [classes/foundry.canvas.rendering.filters.VoidFilter.md](classes/foundry.canvas.rendering.filters.VoidFilter.md) | A minimalist filter (just used for blending)... |
| VortexColorationShader | [classes/foundry.canvas.rendering.shaders.VortexColorationShader.md](classes/foundry.canvas.rendering.shaders.VortexColorationShader.md) | Vortex animation coloration shader... |
| VortexIlluminationShader | [classes/foundry.canvas.rendering.shaders.VortexIlluminationShader.md](classes/foundry.canvas.rendering.shaders.VortexIlluminationShader.md) | Vortex animation coloration shader... |
| Wall | [classes/foundry.canvas.placeables.Wall.md](classes/foundry.canvas.placeables.Wall.md) | A Wall is an implementation of PlaceableObject which represents a physical or visual barrier within the Scene.... |
| WallConfig | [classes/foundry.applications.sheets.WallConfig.md](classes/foundry.applications.sheets.WallConfig.md) | The Application responsible for configuring a single Wall document within a parent Scene.... |
| WallDocument | [classes/foundry.documents.WallDocument.md](classes/foundry.documents.WallDocument.md) | The client-side Wall document which extends the common BaseWall document model.... |
| WallPalette | [classes/foundry.applications.sheets.palette.WallPalette.md](classes/foundry.applications.sheets.palette.WallPalette.md) | A dialog that provides bulk operation or default values for newly-created walls.... |
| WallTab | [classes/foundry.applications.sidebar.tabs.WallTab.md](classes/foundry.applications.sidebar.tabs.WallTab.md) | The Wall-specific placeables tab.... |
| WallsLayer | [classes/foundry.canvas.layers.WallsLayer.md](classes/foundry.canvas.layers.WallsLayer.md) | The Walls canvas layer which provides a container for Wall objects within the rendered Scene.... |
| WaveBackgroundVisionShader | [classes/foundry.canvas.rendering.shaders.WaveBackgroundVisionShader.md](classes/foundry.canvas.rendering.shaders.WaveBackgroundVisionShader.md) | Shader specialized in wave like senses (tremorsenses)... |
| WaveColorationShader | [classes/foundry.canvas.rendering.shaders.WaveColorationShader.md](classes/foundry.canvas.rendering.shaders.WaveColorationShader.md) | Wave animation coloration shader... |
| WaveColorationVisionShader | [classes/foundry.canvas.rendering.shaders.WaveColorationVisionShader.md](classes/foundry.canvas.rendering.shaders.WaveColorationVisionShader.md) | The wave vision shader, used to create waves emanations (ex: tremorsense)... |
| WaveIlluminationShader | [classes/foundry.canvas.rendering.shaders.WaveIlluminationShader.md](classes/foundry.canvas.rendering.shaders.WaveIlluminationShader.md) | Wave animation illumination shader... |
| WeatherEffects | [classes/foundry.canvas.layers.WeatherEffects.md](classes/foundry.canvas.layers.WeatherEffects.md) | A CanvasLayer for displaying visual effects like weather, transitions, flashes, or more.... |
| WeatherOcclusionMaskFilter | [classes/foundry.canvas.rendering.filters.WeatherOcclusionMaskFilter.md](classes/foundry.canvas.rendering.filters.WeatherOcclusionMaskFilter.md) | The filter used by the weather layer to mask weather above occluded roofs.... |
| WeatherShaderEffect | [classes/foundry.canvas.rendering.shaders.WeatherShaderEffect.md](classes/foundry.canvas.rendering.shaders.WeatherShaderEffect.md) | An interface for defining shader-based weather effects... |
| WeilerAthertonClipper | [classes/foundry.canvas.geometry.WeilerAthertonClipper.md](classes/foundry.canvas.geometry.WeilerAthertonClipper.md) | An implementation of the Weiler Atherton algorithm for clipping polygons.... |
| WordTree | [classes/foundry.utils.WordTree.md](classes/foundry.utils.WordTree.md) | A data structure for quickly retrieving objects by a string prefix.... |
| WorkerManager | [classes/foundry.helpers.WorkerManager.md](classes/foundry.helpers.WorkerManager.md) | A client-side class responsible for managing a set of web workers.... |
| World | [classes/foundry.packages.World.md](classes/foundry.packages.World.md) | [ClientPackageMixin](../functions/foundry.packages.ClientPackageMixin.md)... |
| WorldCollection | [classes/foundry.documents.abstract.WorldCollection.md](classes/foundry.documents.abstract.WorldCollection.md) | A collection of world-level Document objects with a singleton instance per primary Document type.... |
| WorldConfig | [classes/foundry.applications.sidebar.apps.WorldConfig.md](classes/foundry.applications.sidebar.apps.WorldConfig.md) | The World Management setup application... |
| WorldSettings | [classes/foundry.documents.collections.WorldSettings.md](classes/foundry.documents.collections.WorldSettings.md) | The Collection of Setting documents which exist within the active World.... |
| default | [classes/foundry.default-1.md](classes/foundry.default-1.md) | A singleton class that provides an API for spawning and managing detached windows.... |
| default | [classes/foundry.default.md](classes/foundry.default.md) | ProseMirror implementation of the HTML disclosure widget.... |
| default | [classes/foundry.default-2.md](classes/foundry.default-2.md) | Controls for a Tile shape.... |

## Enums

| Title | File | Description |
|-------|------|-------------|
| SOUND_ALIGNMENT | [enums/foundry.canvas.vfx.constants.SOUND_ALIGNMENT.md](enums/foundry.canvas.vfx.constants.SOUND_ALIGNMENT.md) | An enumeration of animation sound alignment positions.... |

## Functions

| Title | File | Description |
|-------|------|-------------|
| AdaptiveFragmentChannelMixin | [functions/foundry.canvas.rendering.mixins.AdaptiveFragmentChannelMixin.md](functions/foundry.canvas.rendering.mixins.AdaptiveFragmentChannelMixin.md) | * AdaptiveFragmentChannelMixin(... |
| BaseShaderMixin | [functions/foundry.canvas.rendering.mixins.BaseShaderMixin.md](functions/foundry.canvas.rendering.mixins.BaseShaderMixin.md) | * BaseShaderMixin(ShaderClass: any): typeof BaseShader... |
| CanvasDocumentMixin | [functions/foundry.documents.abstract.CanvasDocumentMixin.md](functions/foundry.documents.abstract.CanvasDocumentMixin.md) | * CanvasDocumentMixin(Base: typeof [Document](../classes/foundry.abstract.Document.md)): typeof [CanvasDocument](../classes/foundry.CanvasDocument.md)... |
| CanvasGroupMixin | [functions/foundry.canvas.groups.CanvasGroupMixin.md](functions/foundry.canvas.groups.CanvasGroupMixin.md) | * CanvasGroupMixin(ContainerClass: any): typeof CanvasGroup... |
| CanvasTransformMixin | [functions/foundry.canvas.primary.CanvasTransformMixin.md](functions/foundry.canvas.primary.CanvasTransformMixin.md) | * CanvasTransformMixin(DisplayObject: any): typeof CanvasTransform... |
| ClientDocumentMixin | [functions/foundry.documents.abstract.ClientDocumentMixin.md](functions/foundry.documents.abstract.ClientDocumentMixin.md) | * ClientDocumentMixin(Base: typeof [Document](../classes/foundry.abstract.Document.md)): typeof [ClientDocument](../classes/foundry.ClientDocument.md)... |
| ClientPackageMixin | [functions/foundry.packages.ClientPackageMixin.md](functions/foundry.packages.ClientPackageMixin.md) | * ClientPackageMixin(Base: [Constructor](../types/foundry.types.Constructor.md)<[BasePackage](../classes/foundry.packages.BasePackage.md)<any>>): typeof [ClientPackage](../classes/foundry.ClientPackag... |
| DirectoryCollectionMixin | [functions/foundry.documents.abstract.DirectoryCollectionMixin.md](functions/foundry.documents.abstract.DirectoryCollectionMixin.md) | * DirectoryCollectionMixin(... |
| EventEmitterMixin | [functions/foundry.utils.EventEmitterMixin.md](functions/foundry.utils.EventEmitterMixin.md) | * EventEmitterMixin<[TBaseClass](#eventemittermixintbaseclass) extends Function>(... |
| FullCanvasObjectMixin | [functions/foundry.canvas.containers.FullCanvasObjectMixin.md](functions/foundry.canvas.containers.FullCanvasObjectMixin.md) | * FullCanvasObjectMixin(Base: any): typeof FullCanvasObject... |
| HandlebarsApplicationMixin | [functions/foundry.applications.api.HandlebarsApplicationMixin.md](functions/foundry.applications.api.HandlebarsApplicationMixin.md) | * HandlebarsApplicationMixin(... |
| PlaceablePaletteMixin | [functions/foundry.applications.sheets.palette.PlaceablePaletteMixin.md](functions/foundry.applications.sheets.palette.PlaceablePaletteMixin.md) | * PlaceablePaletteMixin(... |
| PointEffectSourceMixin | [functions/foundry.canvas.sources.PointEffectSourceMixin.md](functions/foundry.canvas.sources.PointEffectSourceMixin.md) | * PointEffectSourceMixin<[T](#pointeffectsourcemixint) extends class>(BaseSource: [T](#pointeffectsourcemixint)): typeof PointEffectSource... |
| PrimaryCanvasObjectMixin | [functions/foundry.canvas.primary.PrimaryCanvasObjectMixin.md](functions/foundry.canvas.primary.PrimaryCanvasObjectMixin.md) | * PrimaryCanvasObjectMixin(DisplayObject: any): typeof PrimaryCanvasObject... |
| PrimaryOccludableObjectMixin | [functions/foundry.canvas.primary.PrimaryOccludableObjectMixin.md](functions/foundry.canvas.primary.PrimaryOccludableObjectMixin.md) | * PrimaryOccludableObjectMixin(DisplayObject: any): typeof PrimaryOccludableObject... |
| RenderFlagsMixin | [functions/foundry.canvas.interaction.RenderFlagsMixin.md](functions/foundry.canvas.interaction.RenderFlagsMixin.md) | * RenderFlagsMixin(Base?: Function): typeof RenderFlagObject... |
| _registerDefaultSheets | [functions/foundry.applications.sheets._registerDefaultSheets.md](functions/foundry.applications.sheets._registerDefaultSheets.md) | * \_registerDefaultSheets(): void... |
| activate | [functions/foundry.canvas.vfx.activate.md](functions/foundry.canvas.vfx.activate.md) | * activate(): void... |
| activateCanvasLayer | [functions/hookEvents.activateCanvasLayer.md](functions/hookEvents.activateCanvasLayer.md) | * activateCanvasLayer(layer: [InteractionLayer](../classes/foundry.canvas.layers.InteractionLayer.md)): void... |
| activateEditorLegacy | [functions/hookEvents.activateEditorLegacy.md](functions/hookEvents.activateEditorLegacy.md) | * activateEditorLegacy(editor: any, options: object, initialContent: string): void... |
| activateLayer | [functions/hookEvents.activateLayer.md](functions/hookEvents.activateLayer.md) | * activateLayer(layer: [InteractionLayer](../classes/foundry.canvas.layers.InteractionLayer.md)): void... |
| activateNote | [functions/hookEvents.activateNote.md](functions/hookEvents.activateNote.md) | * activateNote(note: [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Note](../classes/foundry.canvas.placeables.Note.md), options: object): void... |
| almostEqual | [functions/primitives.Number.almostEqual.md](functions/primitives.Number.almostEqual.md) | * almostEqual(this: number, n: number, e?: number): boolean... |
| applyActiveEffect | [functions/hookEvents.applyActiveEffect.md](functions/hookEvents.applyActiveEffect.md) | * applyActiveEffect(... |
| applyCompendiumArt | [functions/hookEvents.applyCompendiumArt.md](functions/hookEvents.applyCompendiumArt.md) | * applyCompendiumArt(... |
| applyDataOperators | [functions/foundry.utils.applyDataOperators.md](functions/foundry.utils.applyDataOperators.md) | * applyDataOperators(obj: any): any... |
| applyTokenStatusEffect | [functions/hookEvents.applyTokenStatusEffect.md](functions/hookEvents.applyTokenStatusEffect.md) | * applyTokenStatusEffect(... |
| benchmark | [functions/foundry.utils.benchmark.md](functions/foundry.utils.benchmark.md) | * benchmark(func: Function, iterations: number, ...args: any[]): Promise<void>... |
| between | [functions/primitives.Number.between.md](functions/primitives.Number.between.md) | * between(this: number, a: number, b: number, inclusive?: boolean): boolean... |
| buildRelativeUuid | [functions/foundry.utils.buildRelativeUuid.md](functions/foundry.utils.buildRelativeUuid.md) | * buildRelativeUuid(... |
| buildUuid | [functions/foundry.utils.buildUuid.md](functions/foundry.utils.buildUuid.md) | * buildUuid(... |
| canvasConfig | [functions/hookEvents.canvasConfig.md](functions/hookEvents.canvasConfig.md) | * canvasConfig(config: object): void... |
| canvasDraw | [functions/hookEvents.canvasDraw.md](functions/hookEvents.canvasDraw.md) | * canvasDraw(canvas: [canvas](../modules/foundry.canvas.md).[Canvas](../classes/foundry.canvas.Canvas.md)): void... |
| canvasInit | [functions/hookEvents.canvasInit.md](functions/hookEvents.canvasInit.md) | * canvasInit(canvas: [canvas](../modules/foundry.canvas.md).[Canvas](../classes/foundry.canvas.Canvas.md)): void... |
| canvasPan | [functions/hookEvents.canvasPan.md](functions/hookEvents.canvasPan.md) | * canvasPan(canvas: [canvas](../modules/foundry.canvas.md).[Canvas](../classes/foundry.canvas.Canvas.md), position: [CanvasViewPosition](../interfaces/foundry.types.CanvasViewPosition.md)): void... |
| canvasReady | [functions/hookEvents.canvasReady.md](functions/hookEvents.canvasReady.md) | * canvasReady(canvas: [canvas](../modules/foundry.canvas.md).[Canvas](../classes/foundry.canvas.Canvas.md)): void... |
| canvasTearDown | [functions/hookEvents.canvasTearDown.md](functions/hookEvents.canvasTearDown.md) | * canvasTearDown(canvas: [canvas](../modules/foundry.canvas.md).[Canvas](../classes/foundry.canvas.Canvas.md), options: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md)): ... |
| capitalize | [functions/primitives.String.capitalize.md](functions/primitives.String.capitalize.md) | * capitalize(): string... |
| changeSidebarTab | [functions/hookEvents.changeSidebarTab.md](functions/hookEvents.changeSidebarTab.md) | * changeSidebarTab(... |
| chatBubbleHTML | [functions/hookEvents.chatBubbleHTML.md](functions/hookEvents.chatBubbleHTML.md) | * chatBubbleHTML(... |
| chatInput | [functions/hookEvents.chatInput.md](functions/hookEvents.chatInput.md) | * chatInput(... |
| chatMessage | [functions/hookEvents.chatMessage.md](functions/hookEvents.chatMessage.md) | * chatMessage(... |
| checked | [functions/foundry.applications.handlebars.checked.md](functions/foundry.applications.handlebars.checked.md) | * checked(value: unknown): string... |
| circleCircleIntersects | [functions/foundry.utils.circleCircleIntersects.md](functions/foundry.utils.circleCircleIntersects.md) | * circleCircleIntersects(... |
| clamp | [functions/primitives.Math.clamp.md](functions/primitives.Math.clamp.md) | * clamp(num: number, min: number, max: number): number... |
| cleanHTML | [functions/foundry.utils.cleanHTML.md](functions/foundry.utils.cleanHTML.md) | * cleanHTML(raw: string): string... |
| clientSettingChanged | [functions/hookEvents.clientSettingChanged.md](functions/hookEvents.clientSettingChanged.md) | * clientSettingChanged(key: string, value: any, options: object): void... |
| closeApplicationV1 | [functions/hookEvents.closeApplicationV1.md](functions/hookEvents.closeApplicationV1.md) | * closeApplicationV1(application: [Application](../classes/foundry.appv1.api.Application.md), html: JQuery): void... |
| closeApplicationV2 | [functions/hookEvents.closeApplicationV2.md](functions/hookEvents.closeApplicationV2.md) | * closeApplicationV2(... |
| closeDetachedWindow | [functions/hookEvents.closeDetachedWindow.md](functions/hookEvents.closeDetachedWindow.md) | * closeDetachedWindow(id: string, win: Window): void... |
| closestPointToPath | [functions/foundry.utils.closestPointToPath.md](functions/foundry.utils.closestPointToPath.md) | * closestPointToPath(c: Point, points: number[] \| Point[], close: boolean): Point... |
| closestPointToSegment | [functions/foundry.utils.closestPointToSegment.md](functions/foundry.utils.closestPointToSegment.md) | * closestPointToSegment(c: Point, a: Point, b: Point): Point... |
| collapseSceneNavigation | [functions/hookEvents.collapseSceneNavigation.md](functions/hookEvents.collapseSceneNavigation.md) | * collapseSceneNavigation(app: [SceneNavigation](../classes/foundry.applications.ui.SceneNavigation.md), collapsed: boolean): void... |
| collapseSidebar | [functions/hookEvents.collapseSidebar.md](functions/hookEvents.collapseSidebar.md) | * collapseSidebar(sidebar: [Sidebar](../classes/foundry.applications.sidebar.Sidebar.md), collapsed: boolean): void... |
| combatRound | [functions/hookEvents.combatRound.md](functions/hookEvents.combatRound.md) | * combatRound(... |
| combatStart | [functions/hookEvents.combatStart.md](functions/hookEvents.combatStart.md) | * combatStart(... |
| combatTurn | [functions/hookEvents.combatTurn.md](functions/hookEvents.combatTurn.md) | * combatTurn(... |
| combatTurnChange | [functions/hookEvents.combatTurnChange.md](functions/hookEvents.combatTurnChange.md) | * combatTurnChange(... |
| compare | [functions/primitives.String.compare.md](functions/primitives.String.compare.md) | * compare(other: string): number... |
| concat | [functions/foundry.applications.handlebars.concat.md](functions/foundry.applications.handlebars.concat.md) | * concat(...values: string[]): SafeString... |
| configure | [functions/foundry.canvas.vfx.configure.md](functions/foundry.canvas.vfx.configure.md) | * configure(): void... |
| configureCanvasEnvironment | [functions/hookEvents.configureCanvasEnvironment.md](functions/hookEvents.configureCanvasEnvironment.md) | * configureCanvasEnvironment(config: [CanvasEnvironmentConfig](../interfaces/foundry.CanvasEnvironmentConfig.md)): void... |
| controlObject | [functions/hookEvents.controlObject.md](functions/hookEvents.controlObject.md) | * controlObject(object: [PlaceableObject](../classes/foundry.canvas.placeables.PlaceableObject.md), controlled: boolean): void... |
| createCheckboxInput | [functions/foundry.applications.fields.createCheckboxInput.md](functions/foundry.applications.fields.createCheckboxInput.md) | * createCheckboxInput(config: [FormInputConfig](../interfaces/foundry.data.types.FormInputConfig.md)<boolean>): HTMLInputElement... |
| createDocument | [functions/hookEvents.createDocument.md](functions/hookEvents.createDocument.md) | * createDocument(... |
| createEditorInput | [functions/foundry.applications.fields.createEditorInput.md](functions/foundry.applications.fields.createEditorInput.md) | * createEditorInput(... |
| createFontAwesomeIcon | [functions/foundry.applications.fields.createFontAwesomeIcon.md](functions/foundry.applications.fields.createFontAwesomeIcon.md) | * createFontAwesomeIcon(... |
| createFormGroup | [functions/foundry.applications.fields.createFormGroup.md](functions/foundry.applications.fields.createFormGroup.md) | * createFormGroup(config: [FormGroupConfig](../interfaces/foundry.data.types.FormGroupConfig.md)): HTMLDivElement... |
| createMultiSelectInput | [functions/foundry.applications.fields.createMultiSelectInput.md](functions/foundry.applications.fields.createMultiSelectInput.md) | * createMultiSelectInput(... |
| createNumberInput | [functions/foundry.applications.fields.createNumberInput.md](functions/foundry.applications.fields.createNumberInput.md) | * createNumberInput(... |
| createProseMirrorEditor | [functions/hookEvents.createProseMirrorEditor.md](functions/hookEvents.createProseMirrorEditor.md) | * createProseMirrorEditor(... |
| createSelectInput | [functions/foundry.applications.fields.createSelectInput.md](functions/foundry.applications.fields.createSelectInput.md) | * createSelectInput(... |
| createTextInput | [functions/foundry.applications.fields.createTextInput.md](functions/foundry.applications.fields.createTextInput.md) | * createTextInput(config: [FormInputConfig](../interfaces/foundry.data.types.FormInputConfig.md)<string>): HTMLInputElement... |
| createTextareaInput | [functions/foundry.applications.fields.createTextareaInput.md](functions/foundry.applications.fields.createTextareaInput.md) | * createTextareaInput(... |
| deactivate | [functions/foundry.canvas.vfx.deactivate.md](functions/foundry.canvas.vfx.deactivate.md) | * deactivate(): void... |
| deactivateLayer | [functions/hookEvents.deactivateLayer.md](functions/hookEvents.deactivateLayer.md) | * deactivateLayer(layer: [InteractionLayer](../classes/foundry.canvas.layers.InteractionLayer.md)): void... |
| dealCards | [functions/hookEvents.dealCards.md](functions/hookEvents.dealCards.md) | * dealCards(... |
| debounce | [functions/foundry.utils.debounce.md](functions/foundry.utils.debounce.md) | * debounce(callback: Function, delay: number): Function... |
| deepClone | [functions/foundry.utils.deepClone.md](functions/foundry.utils.deepClone.md) | * deepClone<[T](#deepclonet) extends object>(... |
| deepFlatten | [functions/primitives.Array.deepFlatten.md](functions/primitives.Array.deepFlatten.md) | * deepFlatten(): any[]... |
| deepFreeze | [functions/foundry.utils.deepFreeze.md](functions/foundry.utils.deepFreeze.md) | * deepFreeze<const [T](#deepfreezet) extends object>(... |
| deepSeal | [functions/foundry.utils.deepSeal.md](functions/foundry.utils.deepSeal.md) | * deepSeal<[T](#deepsealt) extends object>(obj: [T](#deepsealt), options?: { strict?: boolean }): [T](#deepsealt)... |
| deleteDocument | [functions/hookEvents.deleteDocument.md](functions/hookEvents.deleteDocument.md) | * deleteDocument(... |
| deleteProperty | [functions/foundry.utils.deleteProperty.md](functions/foundry.utils.deleteProperty.md) | * deleteProperty(object: object, key: string): boolean... |
| destroyObject | [functions/hookEvents.destroyObject.md](functions/hookEvents.destroyObject.md) | * destroyObject(object: [PlaceableObject](../classes/foundry.canvas.placeables.PlaceableObject.md)): void... |
| diffObject | [functions/foundry.utils.diffObject.md](functions/foundry.utils.diffObject.md) | * diffObject(... |
| disabled | [functions/foundry.applications.handlebars.disabled.md](functions/foundry.applications.handlebars.disabled.md) | * disabled(value: unknown): string... |
| drawBorder | [functions/foundry.canvas.borders.drawBorder.md](functions/foundry.canvas.borders.drawBorder.md) | * drawBorder(... |
| drawGroup | [functions/hookEvents.drawGroup.md](functions/hookEvents.drawGroup.md) | * drawGroup(group: CanvasGroup, options: object): void... |
| drawLayer | [functions/hookEvents.drawLayer.md](functions/hookEvents.drawLayer.md) | * drawLayer(layer: [CanvasLayer](../classes/foundry.canvas.layers.CanvasLayer.md), options: object): void... |
| drawObject | [functions/hookEvents.drawObject.md](functions/hookEvents.drawObject.md) | * drawObject(object: [PlaceableObject](../classes/foundry.canvas.placeables.PlaceableObject.md)): void... |
| dropActorSheetData | [functions/hookEvents.dropActorSheetData.md](functions/hookEvents.dropActorSheetData.md) | * dropActorSheetData(... |
| dropCanvasData | [functions/hookEvents.dropCanvasData.md](functions/hookEvents.dropCanvasData.md) | * dropCanvasData(canvas: [canvas](../modules/foundry.canvas.md).[Canvas](../classes/foundry.canvas.Canvas.md), data: any, event: DragEvent): void... |
| dropRollTableSheetData | [functions/hookEvents.dropRollTableSheetData.md](functions/hookEvents.dropRollTableSheetData.md) | * dropRollTableSheetData(... |
| duplicate | [functions/foundry.utils.duplicate.md](functions/foundry.utils.duplicate.md) | * duplicate(original: Object): any... |
| editor | [functions/foundry.applications.handlebars.editor.md](functions/foundry.applications.handlebars.editor.md) | * editor(... |
| encodeURL | [functions/foundry.utils.encodeURL.md](functions/foundry.utils.encodeURL.md) | * encodeURL(path: string): string... |
| equals | [functions/foundry.utils.equals.md](functions/foundry.utils.equals.md) | * equals(a: any, b: any): boolean... |
| equals | [functions/primitives.Array.equals.md](functions/primitives.Array.equals.md) | * equals(other: any[]): boolean... |
| equals | [functions/primitives.Set.equals.md](functions/primitives.Set.equals.md) | * equals<[T](#equalst)>(this: Set<[T](#equalst)>, other: Set<unknown>): boolean... |
| error | [functions/hookEvents.error.md](functions/hookEvents.error.md) | * error(location: string, error: Error, data: object): void... |
| escapeHTML | [functions/foundry.utils.escapeHTML.md](functions/foundry.utils.escapeHTML.md) | * escapeHTML(value: any): string... |
| every | [functions/primitives.Set.every.md](functions/primitives.Set.every.md) | * every<[T](#everyt)>(... |
| expandObject | [functions/foundry.utils.expandObject.md](functions/foundry.utils.expandObject.md) | * expandObject(obj: object): object... |
| expandObjectInPlace | [functions/foundry.utils.expandObjectInPlace.md](functions/foundry.utils.expandObjectInPlace.md) | * expandObjectInPlace(data: object, options?: { shallow?: boolean }): boolean... |
| extendPIXICircle | [functions/foundry.canvas.extensions.extendPIXICircle.md](functions/foundry.canvas.extensions.extendPIXICircle.md) | * extendPIXICircle(): void... |
| extendPIXIGraphics | [functions/foundry.canvas.extensions.extendPIXIGraphics.md](functions/foundry.canvas.extensions.extendPIXIGraphics.md) | * extendPIXIGraphics(): void... |
| extendPIXIPolygon | [functions/foundry.canvas.extensions.extendPIXIPolygon.md](functions/foundry.canvas.extensions.extendPIXIPolygon.md) | * extendPIXIPolygon(): void... |
| extendPIXIRectangle | [functions/foundry.canvas.extensions.extendPIXIRectangle.md](functions/foundry.canvas.extensions.extendPIXIRectangle.md) | * extendPIXIRectangle(): void... |
| fetchJsonWithTimeout | [functions/foundry.utils.fetchJsonWithTimeout.md](functions/foundry.utils.fetchJsonWithTimeout.md) | * fetchJsonWithTimeout(... |
| fetchResource | [functions/foundry.utils.fetchResource.md](functions/foundry.utils.fetchResource.md) | * fetchResource(src: string, options?: { bustCache?: boolean }): Promise<Blob>... |
| fetchWithTimeout | [functions/foundry.utils.fetchWithTimeout.md](functions/foundry.utils.fetchWithTimeout.md) | * fetchWithTimeout(... |
| filter | [functions/primitives.Set.filter.md](functions/primitives.Set.filter.md) | * filter<[T](#filtert)>(... |
| filterJoin | [functions/primitives.Array.filterJoin.md](functions/primitives.Array.filterJoin.md) | * filterJoin(sep: string): string... |
| filterObject | [functions/foundry.utils.filterObject.md](functions/foundry.utils.filterObject.md) | * filterObject(... |
| find | [functions/primitives.Set.find.md](functions/primitives.Set.find.md) | * find<[T](#findt)>(... |
| findSplice | [functions/primitives.Array.findSplice.md](functions/primitives.Array.findSplice.md) | * findSplice<[T](#findsplicet)>(find: (element: [T](#findsplicet)) => boolean, replace?: [T](#findsplicet)): [T](#findsplicet) \| null... |
| first | [functions/primitives.Set.first.md](functions/primitives.Set.first.md) | * first<[T](#firstt)>(this: Set<[T](#firstt)>): [T](#firstt) \| undefined... |
| flattenObject | [functions/foundry.utils.flattenObject.md](functions/foundry.utils.flattenObject.md) | * flattenObject(obj: object, \_d?: number): object... |
| formGroup | [functions/foundry.applications.handlebars.formGroup.md](functions/foundry.applications.handlebars.formGroup.md) | * formGroup(field: DataField, options: object): SafeString... |
| formInput | [functions/foundry.applications.handlebars.formInput.md](functions/foundry.applications.handlebars.formInput.md) | * formInput(field: DataField, options: object): SafeString... |
| formatFileSize | [functions/foundry.utils.formatFileSize.md](functions/foundry.utils.formatFileSize.md) | * formatFileSize(... |
| fromRange | [functions/primitives.Array.fromRange.md](functions/primitives.Array.fromRange.md) | * fromRange(n: number, min?: number): number[]... |
| fromString | [functions/primitives.Number.fromString.md](functions/primitives.Number.fromString.md) | * fromString(n: string \| number): number... |
| fromUuid | [functions/foundry.utils.fromUuid.md](functions/foundry.utils.fromUuid.md) | * fromUuid(... |
| fromUuidSync | [functions/foundry.utils.fromUuidSync.md](functions/foundry.utils.fromUuidSync.md) | * fromUuidSync(... |
| generateHermiteSegment | [functions/foundry.canvas.vfx.utils.generateHermiteSegment.md](functions/foundry.canvas.vfx.utils.generateHermiteSegment.md) | * generateHermiteSegment(... |
| getApplicationV1HeaderButtons | [functions/hookEvents.getApplicationV1HeaderButtons.md](functions/hookEvents.getApplicationV1HeaderButtons.md) | * getApplicationV1HeaderButtons(... |
| getCacheBustURL | [functions/foundry.utils.getCacheBustURL.md](functions/foundry.utils.getCacheBustURL.md) | * getCacheBustURL(src: string): string \| boolean... |
| getDefiningClass | [functions/foundry.utils.getDefiningClass.md](functions/foundry.utils.getDefiningClass.md) | * getDefiningClass(obj: any, property: string): Constructor<Object>... |
| getDocumentClass | [functions/foundry.utils.getDocumentClass.md](functions/foundry.utils.getDocumentClass.md) | * getDocumentClass(documentName: string): typeof [Document](../classes/foundry.abstract.Document.md) \| undefined... |
| getDocumentContextOptions | [functions/hookEvents.getDocumentContextOptions.md](functions/hookEvents.getDocumentContextOptions.md) | * getDocumentContextOptions(... |
| getHeaderControlsApplicationV2 | [functions/hookEvents.getHeaderControlsApplicationV2.md](functions/hookEvents.getHeaderControlsApplicationV2.md) | * getHeaderControlsApplicationV2(... |
| getParentClasses | [functions/foundry.utils.getParentClasses.md](functions/foundry.utils.getParentClasses.md) | * getParentClasses(cls: Function): ObjectConstructor[]... |
| getPlaceableContextOptions | [functions/hookEvents.getPlaceableContextOptions.md](functions/hookEvents.getPlaceableContextOptions.md) | * getPlaceableContextOptions(... |
| getPlaceableObjectClass | [functions/foundry.utils.getPlaceableObjectClass.md](functions/foundry.utils.getPlaceableObjectClass.md) | * getPlaceableObjectClass(... |
| getProperty | [functions/foundry.utils.getProperty.md](functions/foundry.utils.getProperty.md) | * getProperty(object: object, key: string): any... |
| getProseMirrorMenuDropDowns | [functions/hookEvents.getProseMirrorMenuDropDowns.md](functions/hookEvents.getProseMirrorMenuDropDowns.md) | * getProseMirrorMenuDropDowns(... |
| getProseMirrorMenuItems | [functions/hookEvents.getProseMirrorMenuItems.md](functions/hookEvents.getProseMirrorMenuItems.md) | * getProseMirrorMenuItems(... |
| getRoute | [functions/foundry.utils.getRoute.md](functions/foundry.utils.getRoute.md) | * getRoute(path: string, prefix?: string \| null): string... |
| getSceneControlButtons | [functions/hookEvents.getSceneControlButtons.md](functions/hookEvents.getSceneControlButtons.md) | * getSceneControlButtons(controls: Record<string, [SceneControl](../interfaces/foundry.SceneControl.md)>): void... |
| getTemplate | [functions/foundry.applications.handlebars.getTemplate.md](functions/foundry.applications.handlebars.getTemplate.md) | * getTemplate(path: string, id?: string): Promise<TemplateDelegate<any>>... |
| getTexture | [functions/foundry.canvas.getTexture.md](functions/foundry.canvas.getTexture.md) | * getTexture(... |
| getType | [functions/foundry.utils.getType.md](functions/foundry.utils.getType.md) | * getType(variable: any): string... |
| globalVolumeChanged | [functions/hookEvents.globalVolumeChanged.md](functions/hookEvents.globalVolumeChanged.md) | * globalVolumeChanged(volume: number): void... |
| hasFileExtension | [functions/foundry.data.validators.hasFileExtension.md](functions/foundry.data.validators.hasFileExtension.md) | * hasFileExtension(path: string, extensions: string[]): boolean... |
| hasProperty | [functions/foundry.utils.hasProperty.md](functions/foundry.utils.hasProperty.md) | * hasProperty(object: object, key: string): boolean... |
| highlightObjects | [functions/hookEvents.highlightObjects.md](functions/hookEvents.highlightObjects.md) | * highlightObjects(active: boolean): void... |
| hotReload | [functions/hookEvents.hotReload.md](functions/hookEvents.hotReload.md) | * hotReload(data: [HotReloadData](../interfaces/foundry.types.HotReloadData.md)): void... |
| hotbarDrop | [functions/hookEvents.hotbarDrop.md](functions/hookEvents.hotbarDrop.md) | * hotbarDrop(hotbar: [Hotbar](../classes/foundry.applications.ui.Hotbar.md), data: object, slot: number): void... |
| hoverObject | [functions/hookEvents.hoverObject.md](functions/hookEvents.hoverObject.md) | * hoverObject(object: [PlaceableObject](../classes/foundry.canvas.placeables.PlaceableObject.md), hovered: boolean): void... |
| i18nInit | [functions/hookEvents.i18nInit.md](functions/hookEvents.i18nInit.md) | * i18nInit(): void... |
| ifThen | [functions/foundry.applications.handlebars.ifThen.md](functions/foundry.applications.handlebars.ifThen.md) | * ifThen(criteria: boolean, ifTrue: string, ifFalse: string): string... |
| importAdventure | [functions/hookEvents.importAdventure.md](functions/hookEvents.importAdventure.md) | * importAdventure(... |
| init | [functions/hookEvents.init.md](functions/hookEvents.init.md) | * init(): void... |
| initialize | [functions/foundry.applications.handlebars.initialize.md](functions/foundry.applications.handlebars.initialize.md) | * initialize(): void... |
| initializeCanvasEnvironment | [functions/hookEvents.initializeCanvasEnvironment.md](functions/hookEvents.initializeCanvasEnvironment.md) | * initializeCanvasEnvironment(): void... |
| initializeCombatConfiguration | [functions/hookEvents.initializeCombatConfiguration.md](functions/hookEvents.initializeCombatConfiguration.md) | * initializeCombatConfiguration(config: [CombatConfiguration](../classes/foundry.data.CombatConfiguration.md)): void... |
| initializeDynamicTokenRingConfig | [functions/hookEvents.initializeDynamicTokenRingConfig.md](functions/hookEvents.initializeDynamicTokenRingConfig.md) | * initializeDynamicTokenRingConfig(ringConfig: [TokenRingConfig](../classes/foundry.canvas.placeables.tokens.TokenRingConfig.md)): void... |
| initializeEdges | [functions/hookEvents.initializeEdges.md](functions/hookEvents.initializeEdges.md) | * initializeEdges(scene: [documents](../modules/foundry.documents.md).[Scene](../classes/foundry.documents.Scene.md)): void... |
| initializeLightSources | [functions/hookEvents.initializeLightSources.md](functions/hookEvents.initializeLightSources.md) | * initializeLightSources(group: [EffectsCanvasGroup](../classes/foundry.canvas.groups.EffectsCanvasGroup.md)): void... |
| initializePriorityLightSources | [functions/hookEvents.initializePriorityLightSources.md](functions/hookEvents.initializePriorityLightSources.md) | * initializePriorityLightSources(group: [EffectsCanvasGroup](../classes/foundry.canvas.groups.EffectsCanvasGroup.md)): void... |
| initializeRenderedEffectSourceShaders | [functions/hookEvents.initializeRenderedEffectSourceShaders.md](functions/hookEvents.initializeRenderedEffectSourceShaders.md) | * initializeRenderedEffectSourceShaders(... |
| initializeVisionMode | [functions/hookEvents.initializeVisionMode.md](functions/hookEvents.initializeVisionMode.md) | * initializeVisionMode(visibility: [CanvasVisibility](../classes/foundry.canvas.groups.CanvasVisibility.md)): void... |
| initializeVisionSources | [functions/hookEvents.initializeVisionSources.md](functions/hookEvents.initializeVisionSources.md) | * initializeVisionSources(sources: Collection<string, [PointVisionSource](../classes/foundry.canvas.sources.PointVisionSource.md)>): void... |
| initializeWeatherEffects | [functions/hookEvents.initializeWeatherEffects.md](functions/hookEvents.initializeWeatherEffects.md) | * initializeWeatherEffects(... |
| interpolateProperties | [functions/foundry.canvas.vfx.utils.interpolateProperties.md](functions/foundry.canvas.vfx.utils.interpolateProperties.md) | * interpolateProperties(... |
| interpolateRotation | [functions/foundry.canvas.vfx.utils.interpolateRotation.md](functions/foundry.canvas.vfx.utils.interpolateRotation.md) | * interpolateRotation(r1: number, r2: number, i: number): number... |
| intersects | [functions/primitives.Set.intersects.md](functions/primitives.Set.intersects.md) | * intersects<[T](#intersectst)>(this: Set<[T](#intersectst)>, other: Set<unknown>): boolean... |
| invertObject | [functions/foundry.utils.invertObject.md](functions/foundry.utils.invertObject.md) | * invertObject(obj: object): object... |
| isBase64Data | [functions/foundry.data.validators.isBase64Data.md](functions/foundry.data.validators.isBase64Data.md) | * isBase64Data(data: string, types?: string[]): boolean... |
| isColorString | [functions/foundry.data.validators.isColorString.md](functions/foundry.data.validators.isColorString.md) | * isColorString(color: string): boolean... |
| isElementInstanceOf | [functions/foundry.utils.isElementInstanceOf.md](functions/foundry.utils.isElementInstanceOf.md) | * isElementInstanceOf(element: HTMLElement, tagOrClass: any): boolean... |
| isEmpty | [functions/foundry.utils.isEmpty.md](functions/foundry.utils.isEmpty.md) | * isEmpty(value: any): boolean... |
| isJSON | [functions/foundry.data.validators.isJSON.md](functions/foundry.data.validators.isJSON.md) | * isJSON(val: string): boolean... |
| isNewerVersion | [functions/foundry.utils.isNewerVersion.md](functions/foundry.utils.isNewerVersion.md) | * isNewerVersion(... |
| isNumeric | [functions/primitives.Number.isNumeric.md](functions/primitives.Number.isNumeric.md) | * isNumeric(n: any): boolean... |
| isPlainObject | [functions/foundry.utils.isPlainObject.md](functions/foundry.utils.isPlainObject.md) | * isPlainObject(value: unknown): boolean... |
| isSubclass | [functions/foundry.utils.isSubclass.md](functions/foundry.utils.isSubclass.md) | * isSubclass(cls: Function, parent: Function): boolean... |
| isSubset | [functions/primitives.Set.isSubset.md](functions/primitives.Set.isSubset.md) | * isSubset<[T](#issubsett)>(this: Set<[T](#issubsett)>, other: Set<unknown>): boolean... |
| isValid | [functions/primitives.Date.isValid.md](functions/primitives.Date.isValid.md) | * isValid(): boolean... |
| isValidId | [functions/foundry.data.validators.isValidId.md](functions/foundry.data.validators.isValidId.md) | * isValidId(id: string): boolean... |
| iterateEntries | [functions/foundry.utils.iterateEntries.md](functions/foundry.utils.iterateEntries.md) | * iterateEntries(obj: object): IteratorObject<[string, any], void, unknown>... |
| iterateKeys | [functions/foundry.utils.iterateKeys.md](functions/foundry.utils.iterateKeys.md) | * iterateKeys(obj: object): IteratorObject<string, void, unknown>... |
| iterateValues | [functions/foundry.utils.iterateValues.md](functions/foundry.utils.iterateValues.md) | * iterateValues(obj: object): IteratorObject<any, void, unknown>... |
| lightingRefresh | [functions/hookEvents.lightingRefresh.md](functions/hookEvents.lightingRefresh.md) | * lightingRefresh(group: [EffectsCanvasGroup](../classes/foundry.canvas.groups.EffectsCanvasGroup.md)): void... |
| lineCircleIntersection | [functions/foundry.utils.lineCircleIntersection.md](functions/foundry.utils.lineCircleIntersection.md) | * lineCircleIntersection(... |
| lineLineIntersection | [functions/foundry.utils.lineLineIntersection.md](functions/foundry.utils.lineLineIntersection.md) | * lineLineIntersection(... |
| lineSegmentIntersection | [functions/foundry.utils.lineSegmentIntersection.md](functions/foundry.utils.lineSegmentIntersection.md) | * lineSegmentIntersection(... |
| lineSegmentIntersects | [functions/foundry.utils.lineSegmentIntersects.md](functions/foundry.utils.lineSegmentIntersects.md) | * lineSegmentIntersects(a: Point, b: Point, c: Point, d: Point): boolean... |
| loadTemplates | [functions/foundry.applications.handlebars.loadTemplates.md](functions/foundry.applications.handlebars.loadTemplates.md) | * loadTemplates(... |
| loadTexture | [functions/foundry.canvas.loadTexture.md](functions/foundry.canvas.loadTexture.md) | * loadTexture(... |
| localize | [functions/foundry.applications.handlebars.localize.md](functions/foundry.applications.handlebars.localize.md) | * localize(value: string, options: { hash: object }): string... |
| logCompatibilityWarning | [functions/foundry.utils.logCompatibilityWarning.md](functions/foundry.utils.logCompatibilityWarning.md) | * logCompatibilityWarning(... |
| map | [functions/primitives.Set.map.md](functions/primitives.Set.map.md) | * map<[T](#mapt), [U](#mapu)>(... |
| mergeObject | [functions/foundry.utils.mergeObject.md](functions/foundry.utils.mergeObject.md) | * mergeObject(... |
| mix | [functions/primitives.Math.mix.md](functions/primitives.Math.mix.md) | * mix(a: number, b: number, w: number): number... |
| modifyBatch | [functions/foundry.documents.modifyBatch.md](functions/foundry.documents.modifyBatch.md) | * modifyBatch(... |
| modifyTokenAttribute | [functions/hookEvents.modifyTokenAttribute.md](functions/hookEvents.modifyTokenAttribute.md) | * modifyTokenAttribute(... |
| moveToken | [functions/hookEvents.moveToken.md](functions/hookEvents.moveToken.md) | * moveToken(... |
| nextAfter | [functions/primitives.Math.nextAfter.md](functions/primitives.Math.nextAfter.md) | * nextAfter(x: number, y: number): number... |
| nextDown | [functions/primitives.Math.nextDown.md](functions/primitives.Math.nextDown.md) | * nextDown(x: number): number... |
| nextUp | [functions/primitives.Math.nextUp.md](functions/primitives.Math.nextUp.md) | * nextUp(x: number): number... |
| normalizeDegrees | [functions/primitives.Math.normalizeDegrees.md](functions/primitives.Math.normalizeDegrees.md) | * normalizeDegrees(degrees: number): number... |
| normalizeRadians | [functions/primitives.Math.normalizeRadians.md](functions/primitives.Math.normalizeRadians.md) | * normalizeRadians(radians: number): number... |
| numberFormat | [functions/foundry.applications.handlebars.numberFormat.md](functions/foundry.applications.handlebars.numberFormat.md) | * numberFormat(... |
| numberInput | [functions/foundry.applications.handlebars.numberInput.md](functions/foundry.applications.handlebars.numberInput.md) | * numberInput(value: number, options: any): SafeString... |
| object | [functions/foundry.applications.handlebars.object.md](functions/foundry.applications.handlebars.object.md) | * object(options: HelperOptions): Record<string, unknown>... |
| objectEntries | [functions/foundry.utils.objectEntries.md](functions/foundry.utils.objectEntries.md) | * objectEntries(obj: object): Generator<any[], void, unknown>... |
| objectKeys | [functions/foundry.utils.objectKeys.md](functions/foundry.utils.objectKeys.md) | * objectKeys(obj: object): Generator<string, void, unknown>... |
| objectValues | [functions/foundry.utils.objectValues.md](functions/foundry.utils.objectValues.md) | * objectValues(obj: object): Generator<any, void, unknown>... |
| openDetachedWindow | [functions/hookEvents.openDetachedWindow.md](functions/hookEvents.openDetachedWindow.md) | * openDetachedWindow(id: string, win: Window): void... |
| ordinalString | [functions/primitives.Number.ordinalString.md](functions/primitives.Number.ordinalString.md) | * ordinalString(this: number): string... |
| orient2dFast | [functions/foundry.utils.orient2dFast.md](functions/foundry.utils.orient2dFast.md) | * orient2dFast(a: Point, b: Point, c: Point): number... |
| oscillation | [functions/primitives.Math.oscillation.md](functions/primitives.Math.oscillation.md) | * oscillation(... |
| paddedString | [functions/primitives.Number.paddedString.md](functions/primitives.Number.paddedString.md) | * paddedString(this: number, digits: number): string... |
| parseHTML | [functions/foundry.applications.parseHTML.md](functions/foundry.applications.parseHTML.md) | * parseHTML(htmlString: string): HTMLElement \| HTMLCollection \| null... |
| parseHTML | [functions/foundry.utils.parseHTML.md](functions/foundry.utils.parseHTML.md) | * parseHTML(htmlString: string): HTMLElement \| HTMLCollection \| null... |
| parseRotation | [functions/foundry.canvas.vfx.utils.parseRotation.md](functions/foundry.canvas.vfx.utils.parseRotation.md) | * parseRotation(... |
| parseS3URL | [functions/foundry.utils.parseS3URL.md](functions/foundry.utils.parseS3URL.md) | * parseS3URL(key: string): { bucket: string \| null; keyPrefix: string }... |
| parseUuid | [functions/foundry.utils.parseUuid.md](functions/foundry.utils.parseUuid.md) | * parseUuid(... |
| partition | [functions/primitives.Array.partition.md](functions/primitives.Array.partition.md) | * partition<[T](#partitiont)>(rule: (element: [T](#partitiont)) => boolean): [[T](#partitiont)[], [T](#partitiont)[]]... |
| passCards | [functions/hookEvents.passCards.md](functions/hookEvents.passCards.md) | * passCards(... |
| pastePlaceableObject | [functions/hookEvents.pastePlaceableObject.md](functions/hookEvents.pastePlaceableObject.md) | * pastePlaceableObject(... |
| pathCircleIntersects | [functions/foundry.utils.pathCircleIntersects.md](functions/foundry.utils.pathCircleIntersects.md) | * pathCircleIntersects(... |
| pauseGame | [functions/hookEvents.pauseGame.md](functions/hookEvents.pauseGame.md) | * pauseGame(... |
| pauseToken | [functions/hookEvents.pauseToken.md](functions/hookEvents.pauseToken.md) | * pauseToken(document: [TokenDocument](../classes/foundry.documents.TokenDocument.md)): void... |
| performIntegerSort | [functions/foundry.utils.performIntegerSort.md](functions/foundry.utils.performIntegerSort.md) | * performIntegerSort(... |
| planToken | [functions/hookEvents.planToken.md](functions/hookEvents.planToken.md) | * planToken(document: [TokenDocument](../classes/foundry.documents.TokenDocument.md)): void... |
| polygonCentroid | [functions/foundry.utils.polygonCentroid.md](functions/foundry.utils.polygonCentroid.md) | * polygonCentroid(points: number[] \| Point[]): Point... |
| preCreateDocument | [functions/hookEvents.preCreateDocument.md](functions/hookEvents.preCreateDocument.md) | * preCreateDocument(... |
| preDeleteDocument | [functions/hookEvents.preDeleteDocument.md](functions/hookEvents.preDeleteDocument.md) | * preDeleteDocument(... |
| preImportAdventure | [functions/hookEvents.preImportAdventure.md](functions/hookEvents.preImportAdventure.md) | * preImportAdventure(... |
| preMoveToken | [functions/hookEvents.preMoveToken.md](functions/hookEvents.preMoveToken.md) | * preMoveToken(... |
| preRenderApplication | [functions/hookEvents.preRenderApplication.md](functions/hookEvents.preRenderApplication.md) | * preRenderApplication(... |
| preUpdateDocument | [functions/hookEvents.preUpdateDocument.md](functions/hookEvents.preUpdateDocument.md) | * preUpdateDocument(... |
| prepareSelectOptionGroups | [functions/foundry.applications.fields.prepareSelectOptionGroups.md](functions/foundry.applications.fields.prepareSelectOptionGroups.md) | * prepareSelectOptionGroups(... |
| quadraticIntersection | [functions/foundry.utils.quadraticIntersection.md](functions/foundry.utils.quadraticIntersection.md) | * quadraticIntersection(... |
| radioBoxes | [functions/foundry.applications.handlebars.radioBoxes.md](functions/foundry.applications.handlebars.radioBoxes.md) | * radioBoxes(... |
| randomID | [functions/foundry.utils.randomID.md](functions/foundry.utils.randomID.md) | * randomID(length?: number): string... |
| readTextFromFile | [functions/foundry.utils.readTextFromFile.md](functions/foundry.utils.readTextFromFile.md) | * readTextFromFile(file: File): Promise<string>... |
| ready | [functions/hookEvents.ready.md](functions/hookEvents.ready.md) | * ready(): void... |
| reconstructOperator | [functions/foundry.data.operators.reconstructOperator.md](functions/foundry.data.operators.reconstructOperator.md) | * reconstructOperator(obj: { value: any }): [ForcedDeletion](../classes/foundry.data.operators.ForcedDeletion.md) \| [ForcedReplacement](../classes/foundry.data.operators.ForcedReplacement.md)... |
| recordToken | [functions/hookEvents.recordToken.md](functions/hookEvents.recordToken.md) | * recordToken(document: [TokenDocument](../classes/foundry.documents.TokenDocument.md)): void... |
| reduce | [functions/primitives.Set.reduce.md](functions/primitives.Set.reduce.md) | * reduce<[T](#reducet), [U](#reduceu)>(... |
| refreshObject | [functions/hookEvents.refreshObject.md](functions/hookEvents.refreshObject.md) | * refreshObject(object: [PlaceableObject](../classes/foundry.canvas.placeables.PlaceableObject.md)): void... |
| registerTours | [functions/foundry.nue.registerTours.md](functions/foundry.nue.registerTours.md) | * registerTours(): Promise<void>... |
| renderApplicationV1 | [functions/hookEvents.renderApplicationV1.md](functions/hookEvents.renderApplicationV1.md) | * renderApplicationV1(application: [Application](../classes/foundry.appv1.api.Application.md), html: JQuery, data: object): void... |
| renderApplicationV2 | [functions/hookEvents.renderApplicationV2.md](functions/hookEvents.renderApplicationV2.md) | * renderApplicationV2(... |
| renderChatInput | [functions/hookEvents.renderChatInput.md](functions/hookEvents.renderChatInput.md) | * renderChatInput(... |
| renderChatMessageHTML | [functions/hookEvents.renderChatMessageHTML.md](functions/hookEvents.renderChatMessageHTML.md) | * renderChatMessageHTML(... |
| renderTemplate | [functions/foundry.applications.handlebars.renderTemplate.md](functions/foundry.applications.handlebars.renderTemplate.md) | * renderTemplate(path: string, data: object): Promise<string>... |
| resolveAnimation | [functions/foundry.canvas.vfx.utils.resolveAnimation.md](functions/foundry.canvas.vfx.utils.resolveAnimation.md) | * resolveAnimation(functionName: string): [VFXComponentAnimation](../interfaces/foundry.VFXComponentAnimation.md)... |
| resolveEasing | [functions/foundry.canvas.vfx.utils.resolveEasing.md](functions/foundry.canvas.vfx.utils.resolveEasing.md) | * resolveEasing(... |
| returnCards | [functions/hookEvents.returnCards.md](functions/hookEvents.returnCards.md) | * returnCards(... |
| rtcSettingsChanged | [functions/hookEvents.rtcSettingsChanged.md](functions/hookEvents.rtcSettingsChanged.md) | * rtcSettingsChanged(settings: [AVSettings](../classes/foundry.av.AVSettings.md), changed: object): void... |
| saveDataToFile | [functions/foundry.utils.saveDataToFile.md](functions/foundry.utils.saveDataToFile.md) | * saveDataToFile(data: string, type: string, filename: string): void... |
| selectOptions | [functions/foundry.applications.handlebars.selectOptions.md](functions/foundry.applications.handlebars.selectOptions.md) | * selectOptions(choices: object \| object[], options: any): SafeString... |
| setInputAttributes | [functions/foundry.applications.fields.setInputAttributes.md](functions/foundry.applications.fields.setInputAttributes.md) | * setInputAttributes(input: HTMLElement, config: [FormInputConfig](../interfaces/foundry.data.types.FormInputConfig.md)<any>): void... |
| setProperty | [functions/foundry.utils.setProperty.md](functions/foundry.utils.setProperty.md) | * setProperty(object: object, key: string, value: any): boolean... |
| setup | [functions/hookEvents.setup.md](functions/hookEvents.setup.md) | * setup(): void... |
| sightRefresh | [functions/hookEvents.sightRefresh.md](functions/hookEvents.sightRefresh.md) | * sightRefresh(visibility: [CanvasVisibility](../classes/foundry.canvas.groups.CanvasVisibility.md)): void... |
| signedString | [functions/primitives.Number.signedString.md](functions/primitives.Number.signedString.md) | * signedString(this: number): string... |
| slugify | [functions/primitives.String.slugify.md](functions/primitives.String.slugify.md) | * slugify(... |
| some | [functions/primitives.Set.some.md](functions/primitives.Set.some.md) | * some<[T](#somet)>(... |
| srcExists | [functions/foundry.utils.srcExists.md](functions/foundry.utils.srcExists.md) | * srcExists(src: string): Promise<boolean>... |
| stopToken | [functions/hookEvents.stopToken.md](functions/hookEvents.stopToken.md) | * stopToken(document: [TokenDocument](../classes/foundry.documents.TokenDocument.md)): void... |
| streamReady | [functions/hookEvents.streamReady.md](functions/hookEvents.streamReady.md) | * streamReady(): void... |
| stripDiacritics | [functions/primitives.String.stripDiacritics.md](functions/primitives.String.stripDiacritics.md) | * stripDiacritics(this: string): string... |
| stripScripts | [functions/primitives.String.stripScripts.md](functions/primitives.String.stripScripts.md) | * stripScripts(): string... |
| targetToken | [functions/hookEvents.targetToken.md](functions/hookEvents.targetToken.md) | * targetToken(... |
| tearDownGroup | [functions/hookEvents.tearDownGroup.md](functions/hookEvents.tearDownGroup.md) | * tearDownGroup(group: CanvasGroup, options: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md)): void... |
| tearDownLayer | [functions/hookEvents.tearDownLayer.md](functions/hookEvents.tearDownLayer.md) | * tearDownLayer(layer: [CanvasLayer](../classes/foundry.canvas.layers.CanvasLayer.md), options: [CanvasTearDownOptions](../interfaces/foundry.types.CanvasTearDownOptions.md)): void... |
| threadLock | [functions/foundry.utils.threadLock.md](functions/foundry.utils.threadLock.md) | * threadLock(ms: number, debug?: boolean): Promise<void>... |
| throttle | [functions/foundry.utils.throttle.md](functions/foundry.utils.throttle.md) | * throttle(callback: Function, delay: number): Function... |
| timeSince | [functions/foundry.utils.timeSince.md](functions/foundry.utils.timeSince.md) | * timeSince(timeStamp: string \| Date): string... |
| titleCase | [functions/primitives.String.titleCase.md](functions/primitives.String.titleCase.md) | * titleCase(): string... |
| toDateInputString | [functions/primitives.Date.toDateInputString.md](functions/primitives.Date.toDateInputString.md) | * toDateInputString(): string... |
| toDegrees | [functions/primitives.Math.toDegrees.md](functions/primitives.Math.toDegrees.md) | * toDegrees(angle: number): number... |
| toNearest | [functions/primitives.Number.toNearest.md](functions/primitives.Number.toNearest.md) | * toNearest(... |
| toObject | [functions/primitives.Set.toObject.md](functions/primitives.Set.toObject.md) | * toObject<[T](#toobjectt)>(this: Set<[T](#toobjectt)>): [T](#toobjectt)[]... |
| toRadians | [functions/primitives.Math.toRadians.md](functions/primitives.Math.toRadians.md) | * toRadians(angle: number): number... |
| toTimeInputString | [functions/primitives.Date.toTimeInputString.md](functions/primitives.Date.toTimeInputString.md) | * toTimeInputString(): string... |
| unescapeHTML | [functions/foundry.utils.unescapeHTML.md](functions/foundry.utils.unescapeHTML.md) | * unescapeHTML(value: string): string... |
| updateCompendium | [functions/hookEvents.updateCompendium.md](functions/hookEvents.updateCompendium.md) | * updateCompendium(... |
| updateDocument | [functions/hookEvents.updateDocument.md](functions/hookEvents.updateDocument.md) | * updateDocument(... |
| updateWorldTime | [functions/hookEvents.updateWorldTime.md](functions/hookEvents.updateWorldTime.md) | * updateWorldTime(... |
| userConnected | [functions/hookEvents.userConnected.md](functions/hookEvents.userConnected.md) | * userConnected(user: [documents](../modules/foundry.documents.md).[User](../classes/foundry.documents.User.md), connected: boolean): void... |
| visibilityRefresh | [functions/hookEvents.visibilityRefresh.md](functions/hookEvents.visibilityRefresh.md) | * visibilityRefresh(visibility: [CanvasVisibility](../classes/foundry.canvas.groups.CanvasVisibility.md)): void... |

## Interfaces

| Title | File | Description |
|-------|------|-------------|
| AVConfigConfiguration | [interfaces/foundry.AVConfigConfiguration.md](interfaces/foundry.AVConfigConfiguration.md) | interface AVConfigConfiguration {... |
| AVSettingsData | [interfaces/foundry.AVSettingsData.md](interfaces/foundry.AVSettingsData.md) | interface AVSettingsData {... |
| ActiveEffectChangeData | [interfaces/foundry.documents.types.ActiveEffectChangeData.md](interfaces/foundry.documents.types.ActiveEffectChangeData.md) | interface ActiveEffectChangeData {... |
| ActiveEffectChangeTypeConfig | [interfaces/CONFIG.ActiveEffectChangeTypeConfig.md](interfaces/CONFIG.ActiveEffectChangeTypeConfig.md) | interface ActiveEffectChangeTypeConfig {... |
| ActiveEffectData | [interfaces/foundry.documents.types.ActiveEffectData.md](interfaces/foundry.documents.types.ActiveEffectData.md) | interface ActiveEffectData {... |
| ActiveEffectDuration | [interfaces/foundry.documents.types.ActiveEffectDuration.md](interfaces/foundry.documents.types.ActiveEffectDuration.md) | interface ActiveEffectDuration {... |
| ActivityData | [interfaces/foundry.types.ActivityData.md](interfaces/foundry.types.ActivityData.md) | interface ActivityData {... |
| ActorData | [interfaces/foundry.documents.types.ActorData.md](interfaces/foundry.documents.types.ActorData.md) | interface ActorData {... |
| ActorDeltaData | [interfaces/foundry.documents.types.ActorDeltaData.md](interfaces/foundry.documents.types.ActorDeltaData.md) | interface ActorDeltaData {... |
| ActorTrackableAttributes | [interfaces/foundry.types.ActorTrackableAttributes.md](interfaces/foundry.types.ActorTrackableAttributes.md) | interface ActorTrackableAttributes {... |
| AdventureContentTreeNode | [interfaces/foundry.AdventureContentTreeNode.md](interfaces/foundry.AdventureContentTreeNode.md) | interface AdventureContentTreeNode {... |
| AdventureData | [interfaces/foundry.documents.types.AdventureData.md](interfaces/foundry.documents.types.AdventureData.md) | interface AdventureData {... |
| AdventureImportData | [interfaces/foundry.documents.types.AdventureImportData.md](interfaces/foundry.documents.types.AdventureImportData.md) | The data that is planned to be imported for the adventure, categorized into new documents that will be created and... |
| AdventureImportOptions | [interfaces/foundry.documents.types.AdventureImportOptions.md](interfaces/foundry.documents.types.AdventureImportOptions.md) | Options which customize how the adventure import process is orchestrated.... |
| AdventureImportResult | [interfaces/foundry.documents.types.AdventureImportResult.md](interfaces/foundry.documents.types.AdventureImportResult.md) | A report of the world Document instances that were created or updated during the import process.... |
| AmbientLightData | [interfaces/foundry.documents.types.AmbientLightData.md](interfaces/foundry.documents.types.AmbientLightData.md) | interface AmbientLightData {... |
| AmbientSoundData | [interfaces/foundry.documents.types.AmbientSoundData.md](interfaces/foundry.documents.types.AmbientSoundData.md) | interface AmbientSoundData {... |
| AmbientSoundEffect | [interfaces/foundry.documents.types.AmbientSoundEffect.md](interfaces/foundry.documents.types.AmbientSoundEffect.md) | interface AmbientSoundEffect {... |
| AmbientSoundPlaybackConfig | [interfaces/foundry.canvas.layers.types.AmbientSoundPlaybackConfig.md](interfaces/foundry.canvas.layers.types.AmbientSoundPlaybackConfig.md) | interface AmbientSoundPlaybackConfig {... |
| AnalysisData | [interfaces/foundry.audio.AnalysisData.md](interfaces/foundry.audio.AnalysisData.md) | interface AnalysisData {... |
| AnalysisDataValue | [interfaces/foundry.audio.AnalysisDataValue.md](interfaces/foundry.audio.AnalysisDataValue.md) | interface AnalysisDataValue {... |
| AnalysisNodes | [interfaces/foundry.audio.AnalysisNodes.md](interfaces/foundry.audio.AnalysisNodes.md) | interface AnalysisNodes {... |
| ApplicationClosingOptions | [interfaces/foundry.applications.types.ApplicationClosingOptions.md](interfaces/foundry.applications.types.ApplicationClosingOptions.md) | interface ApplicationClosingOptions {... |
| ApplicationConfiguration | [interfaces/foundry.applications.types.ApplicationConfiguration.md](interfaces/foundry.applications.types.ApplicationConfiguration.md) | interface ApplicationConfiguration {... |
| ApplicationConstructorParams | [interfaces/foundry.applications.types.ApplicationConstructorParams.md](interfaces/foundry.applications.types.ApplicationConstructorParams.md) | interface ApplicationConstructorParams {... |
| ApplicationFormConfiguration | [interfaces/foundry.applications.types.ApplicationFormConfiguration.md](interfaces/foundry.applications.types.ApplicationFormConfiguration.md) | interface ApplicationFormConfiguration {... |
| ApplicationPosition | [interfaces/foundry.applications.types.ApplicationPosition.md](interfaces/foundry.applications.types.ApplicationPosition.md) | interface ApplicationPosition {... |
| ApplicationRenderContext | [interfaces/foundry.applications.types.ApplicationRenderContext.md](interfaces/foundry.applications.types.ApplicationRenderContext.md) | Context data provided to the renderer... |
| ApplicationRenderOptions | [interfaces/foundry.applications.types.ApplicationRenderOptions.md](interfaces/foundry.applications.types.ApplicationRenderOptions.md) | interface ApplicationRenderOptions {... |
| ApplicationTab | [interfaces/foundry.applications.types.ApplicationTab.md](interfaces/foundry.applications.types.ApplicationTab.md) | interface ApplicationTab {... |
| ApplicationTabsConfiguration | [interfaces/foundry.applications.types.ApplicationTabsConfiguration.md](interfaces/foundry.applications.types.ApplicationTabsConfiguration.md) | interface ApplicationTabsConfiguration {... |
| ApplicationV1Options | [interfaces/foundry.ApplicationV1Options.md](interfaces/foundry.ApplicationV1Options.md) | Configuration options which control how the application is rendered. Application subclasses may add additional... |
| ApplicationWindowConfiguration | [interfaces/foundry.applications.types.ApplicationWindowConfiguration.md](interfaces/foundry.applications.types.ApplicationWindowConfiguration.md) | interface ApplicationWindowConfiguration {... |
| ApplicationWindowRenderOptions | [interfaces/foundry.applications.types.ApplicationWindowRenderOptions.md](interfaces/foundry.applications.types.ApplicationWindowRenderOptions.md) | interface ApplicationWindowRenderOptions {... |
| AudioBufferCacheEntry | [interfaces/foundry.audio.AudioBufferCacheEntry.md](interfaces/foundry.audio.AudioBufferCacheEntry.md) | interface AudioBufferCacheEntry {... |
| AudioTimeoutOptions | [interfaces/foundry.AudioTimeoutOptions.md](interfaces/foundry.AudioTimeoutOptions.md) | interface AudioTimeoutOptions {... |
| AutocompleteEntry | [interfaces/foundry.AutocompleteEntry.md](interfaces/foundry.AutocompleteEntry.md) | interface AutocompleteEntry {... |
| BaseEffectSourceData | [interfaces/foundry.canvas.sources.types.BaseEffectSourceData.md](interfaces/foundry.canvas.sources.types.BaseEffectSourceData.md) | interface BaseEffectSourceData {... |
| BaseEffectSourceOptions | [interfaces/foundry.canvas.sources.types.BaseEffectSourceOptions.md](interfaces/foundry.canvas.sources.types.BaseEffectSourceOptions.md) | interface BaseEffectSourceOptions {... |
| BrowserTest | [interfaces/foundry.BrowserTest.md](interfaces/foundry.BrowserTest.md) | interface BrowserTest {... |
| CalendarConfig | [interfaces/foundry.data.types.CalendarConfig.md](interfaces/foundry.data.types.CalendarConfig.md) | interface CalendarConfig {... |
| CalendarConfigDay | [interfaces/foundry.data.types.CalendarConfigDay.md](interfaces/foundry.data.types.CalendarConfigDay.md) | A definition of the days of the week within a calendar.... |
| CalendarConfigDays | [interfaces/foundry.data.types.CalendarConfigDays.md](interfaces/foundry.data.types.CalendarConfigDays.md) | Day related configuration for a calendar.... |
| CalendarConfigLeapYear | [interfaces/foundry.data.types.CalendarConfigLeapYear.md](interfaces/foundry.data.types.CalendarConfigLeapYear.md) | A definition of how leap years work within a calendar.... |
| CalendarConfigMonth | [interfaces/foundry.data.types.CalendarConfigMonth.md](interfaces/foundry.data.types.CalendarConfigMonth.md) | A definition of a month within a calendar year.... |
| CalendarConfigMonths | [interfaces/foundry.data.types.CalendarConfigMonths.md](interfaces/foundry.data.types.CalendarConfigMonths.md) | Month related configuration for a calendar.... |
| CalendarConfigSeason | [interfaces/foundry.data.types.CalendarConfigSeason.md](interfaces/foundry.data.types.CalendarConfigSeason.md) | A definition of a season within a calendar year. By default, seasons can be defined as aligning to either months or... |
| CalendarConfigSeasons | [interfaces/foundry.data.types.CalendarConfigSeasons.md](interfaces/foundry.data.types.CalendarConfigSeasons.md) | Season related configuration for a calendar.... |
| CalendarConfigYears | [interfaces/foundry.data.types.CalendarConfigYears.md](interfaces/foundry.data.types.CalendarConfigYears.md) | A definition of a year within a calendar.... |
| CameraViewControlContext | [interfaces/foundry.CameraViewControlContext.md](interfaces/foundry.CameraViewControlContext.md) | interface CameraViewControlContext {... |
| CameraViewUserContext | [interfaces/foundry.CameraViewUserContext.md](interfaces/foundry.CameraViewUserContext.md) | interface CameraViewUserContext {... |
| CanvasAnimationAttribute | [interfaces/foundry.canvas.animation.types.CanvasAnimationAttribute.md](interfaces/foundry.canvas.animation.types.CanvasAnimationAttribute.md) | interface CanvasAnimationAttribute {... |
| CanvasAnimationOptions | [interfaces/foundry.canvas.animation.types.CanvasAnimationOptions.md](interfaces/foundry.canvas.animation.types.CanvasAnimationOptions.md) | interface CanvasAnimationOptions {... |
| CanvasAnimationPanOptions | [interfaces/foundry.types.CanvasAnimationPanOptions.md](interfaces/foundry.types.CanvasAnimationPanOptions.md) | interface CanvasAnimationPanOptions {... |
| CanvasEnvironmentConfig | [interfaces/foundry.CanvasEnvironmentConfig.md](interfaces/foundry.CanvasEnvironmentConfig.md) | interface CanvasEnvironmentConfig {... |
| CanvasHistoryEvent | [interfaces/foundry.canvas.layers.types.CanvasHistoryEvent.md](interfaces/foundry.canvas.layers.types.CanvasHistoryEvent.md) | interface CanvasHistoryEvent {... |
| CanvasPerformanceSettings | [interfaces/foundry.types.CanvasPerformanceSettings.md](interfaces/foundry.types.CanvasPerformanceSettings.md) | interface CanvasPerformanceSettings {... |
| CanvasSupportedComponents | [interfaces/foundry.types.CanvasSupportedComponents.md](interfaces/foundry.types.CanvasSupportedComponents.md) | interface CanvasSupportedComponents {... |
| CanvasTearDownOptions | [interfaces/foundry.types.CanvasTearDownOptions.md](interfaces/foundry.types.CanvasTearDownOptions.md) | interface CanvasTearDownOptions {... |
| CanvasViewPosition | [interfaces/foundry.types.CanvasViewPosition.md](interfaces/foundry.types.CanvasViewPosition.md) | interface CanvasViewPosition {... |
| CanvasVisibilityTest | [interfaces/foundry.types.CanvasVisibilityTest.md](interfaces/foundry.types.CanvasVisibilityTest.md) | interface CanvasVisibilityTest {... |
| CanvasVisibilityTestConfiguration | [interfaces/foundry.types.CanvasVisibilityTestConfiguration.md](interfaces/foundry.types.CanvasVisibilityTestConfiguration.md) | interface CanvasVisibilityTestConfiguration {... |
| CanvasVisibilityTextureConfiguration | [interfaces/foundry.types.CanvasVisibilityTextureConfiguration.md](interfaces/foundry.types.CanvasVisibilityTextureConfiguration.md) | interface CanvasVisibilityTextureConfiguration {... |
| CardData | [interfaces/foundry.documents.types.CardData.md](interfaces/foundry.documents.types.CardData.md) | interface CardData {... |
| CardFaceData | [interfaces/foundry.documents.types.CardFaceData.md](interfaces/foundry.documents.types.CardFaceData.md) | interface CardFaceData {... |
| CardsData | [interfaces/foundry.documents.types.CardsData.md](interfaces/foundry.documents.types.CardsData.md) | interface CardsData {... |
| CategoryBrowserConfiguration | [interfaces/foundry.CategoryBrowserConfiguration.md](interfaces/foundry.CategoryBrowserConfiguration.md) | interface CategoryBrowserConfiguration {... |
| ChatBubbleOptions | [interfaces/foundry.canvas.animation.types.ChatBubbleOptions.md](interfaces/foundry.canvas.animation.types.ChatBubbleOptions.md) | interface ChatBubbleOptions {... |
| ChatMessageData | [interfaces/foundry.documents.types.ChatMessageData.md](interfaces/foundry.documents.types.ChatMessageData.md) | interface ChatMessageData {... |
| ChatSpeakerData | [interfaces/foundry.documents.types.ChatSpeakerData.md](interfaces/foundry.documents.types.ChatSpeakerData.md) | interface ChatSpeakerData {... |
| ChoiceInputConfig | [interfaces/foundry.data.types.ChoiceInputConfig.md](interfaces/foundry.data.types.ChoiceInputConfig.md) | interface ChoiceInputConfig {... |
| ClipperPoint | [interfaces/foundry.canvas.geometry.types.ClipperPoint.md](interfaces/foundry.canvas.geometry.types.ClipperPoint.md) | interface ClipperPoint {... |
| ClipperPoint | [interfaces/foundry.types.ClipperPoint.md](interfaces/foundry.types.ClipperPoint.md) | interface ClipperPoint {... |
| CodeMirrorInputConfig | [interfaces/foundry.data.types.CodeMirrorInputConfig.md](interfaces/foundry.data.types.CodeMirrorInputConfig.md) | interface CodeMirrorInputConfig {... |
| CombatConfigurationData | [interfaces/foundry.data.types.CombatConfigurationData.md](interfaces/foundry.data.types.CombatConfigurationData.md) | Default combat tracker settings used in Foundry VTT.... |
| CombatData | [interfaces/foundry.documents.types.CombatData.md](interfaces/foundry.documents.types.CombatData.md) | interface CombatData {... |
| CombatHistoryData | [interfaces/foundry.documents.types.CombatHistoryData.md](interfaces/foundry.documents.types.CombatHistoryData.md) | interface CombatHistoryData {... |
| CombatTurnEventContext | [interfaces/foundry.documents.types.CombatTurnEventContext.md](interfaces/foundry.documents.types.CombatTurnEventContext.md) | interface CombatTurnEventContext {... |
| CombatantData | [interfaces/foundry.documents.types.CombatantData.md](interfaces/foundry.documents.types.CombatantData.md) | interface CombatantData {... |
| CombatantGroupData | [interfaces/foundry.documents.types.CombatantGroupData.md](interfaces/foundry.documents.types.CombatantGroupData.md) | interface CombatantGroupData {... |
| CompendiumArtDescriptor | [interfaces/foundry.helpers.types.CompendiumArtDescriptor.md](interfaces/foundry.helpers.types.CompendiumArtDescriptor.md) | interface CompendiumArtDescriptor {... |
| CompendiumArtFlag | [interfaces/foundry.packages.types.CompendiumArtFlag.md](interfaces/foundry.packages.types.CompendiumArtFlag.md) | interface CompendiumArtFlag {... |
| CompendiumArtInfo | [interfaces/foundry.helpers.types.CompendiumArtInfo.md](interfaces/foundry.helpers.types.CompendiumArtInfo.md) | interface CompendiumArtInfo {... |
| CompendiumPackDirectoryContext | [interfaces/foundry.CompendiumPackDirectoryContext.md](interfaces/foundry.CompendiumPackDirectoryContext.md) | interface CompendiumPackDirectoryContext {... |
| ConnectedGamepad | [interfaces/foundry.types.ConnectedGamepad.md](interfaces/foundry.types.ConnectedGamepad.md) | Connected Gamepad info... |
| ContextMenuEntry | [interfaces/foundry.ContextMenuEntry.md](interfaces/foundry.ContextMenuEntry.md) | interface ContextMenuEntry {... |
| ContextMenuOptions | [interfaces/foundry.ContextMenuOptions.md](interfaces/foundry.ContextMenuOptions.md) | interface ContextMenuOptions {... |
| ContextMenuRenderOptions | [interfaces/foundry.ContextMenuRenderOptions.md](interfaces/foundry.ContextMenuRenderOptions.md) | interface ContextMenuRenderOptions {... |
| CursorDescriptor | [interfaces/CONFIG.CursorDescriptor.md](interfaces/CONFIG.CursorDescriptor.md) | interface CursorDescriptor {... |
| DataFieldContext | [interfaces/foundry.data.types.DataFieldContext.md](interfaces/foundry.data.types.DataFieldContext.md) | interface DataFieldContext {... |
| DataFieldOptions | [interfaces/foundry.data.types.DataFieldOptions.md](interfaces/foundry.data.types.DataFieldOptions.md) | interface DataFieldOptions {... |
| DataFieldValidationOptions | [interfaces/foundry.data.types.DataFieldValidationOptions.md](interfaces/foundry.data.types.DataFieldValidationOptions.md) | interface DataFieldValidationOptions {... |
| DataModelCleaningOptions | [interfaces/foundry.data.types.DataModelCleaningOptions.md](interfaces/foundry.data.types.DataModelCleaningOptions.md) | interface DataModelCleaningOptions {... |
| DataModelFromSourceOptions | [interfaces/foundry.abstract.types.DataModelFromSourceOptions.md](interfaces/foundry.abstract.types.DataModelFromSourceOptions.md) | interface DataModelFromSourceOptions {... |
| DataModelSanitizationOptions | [interfaces/foundry.data.types.DataModelSanitizationOptions.md](interfaces/foundry.data.types.DataModelSanitizationOptions.md) | interface DataModelSanitizationOptions {... |
| DataModelUpdateOptions | [interfaces/foundry.abstract.types.DataModelUpdateOptions.md](interfaces/foundry.abstract.types.DataModelUpdateOptions.md) | interface DataModelUpdateOptions {... |
| DataModelUpdateState | [interfaces/foundry.abstract.types.DataModelUpdateState.md](interfaces/foundry.abstract.types.DataModelUpdateState.md) | interface DataModelUpdateState {... |
| DataModelUpdateState | [interfaces/foundry.data.types.DataModelUpdateState.md](interfaces/foundry.data.types.DataModelUpdateState.md) | interface DataModelUpdateState {... |
| DataModelValidationFailureElement | [interfaces/foundry.data.validation.DataModelValidationFailureElement.md](interfaces/foundry.data.validation.DataModelValidationFailureElement.md) | interface DataModelValidationFailureElement {... |
| DataModelValidationOptions | [interfaces/foundry.abstract.types.DataModelValidationOptions.md](interfaces/foundry.abstract.types.DataModelValidationOptions.md) | interface DataModelValidationOptions {... |
| DatabaseCreateOperation | [interfaces/foundry.abstract.types.DatabaseCreateOperation.md](interfaces/foundry.abstract.types.DatabaseCreateOperation.md) | interface DatabaseCreateOperation {... |
| DatabaseDeleteOperation | [interfaces/foundry.abstract.types.DatabaseDeleteOperation.md](interfaces/foundry.abstract.types.DatabaseDeleteOperation.md) | interface DatabaseDeleteOperation {... |
| DatabaseGetOperation | [interfaces/foundry.abstract.types.DatabaseGetOperation.md](interfaces/foundry.abstract.types.DatabaseGetOperation.md) | interface DatabaseGetOperation {... |
| DatabaseUpdateOperation | [interfaces/foundry.abstract.types.DatabaseUpdateOperation.md](interfaces/foundry.abstract.types.DatabaseUpdateOperation.md) | interface DatabaseUpdateOperation {... |
| DependencyResolutionDescriptor | [interfaces/foundry.DependencyResolutionDescriptor.md](interfaces/foundry.DependencyResolutionDescriptor.md) | interface DependencyResolutionDescriptor {... |
| DepthBatchData | [interfaces/foundry.canvas.rendering.shaders.types.DepthBatchData.md](interfaces/foundry.canvas.rendering.shaders.types.DepthBatchData.md) | The batch data that is needed by [foundry.canvas.rendering.shaders.DepthSamplerShader](../classes/foundry.canvas.rendering.shaders.DepthSamplerShader.md) to... |
| DetachedWindowDescriptor | [interfaces/foundry.DetachedWindowDescriptor.md](interfaces/foundry.DetachedWindowDescriptor.md) | interface DetachedWindowDescriptor {... |
| DetachedWindowOptions | [interfaces/foundry.applications.types.DetachedWindowOptions.md](interfaces/foundry.applications.types.DetachedWindowOptions.md) | interface DetachedWindowOptions {... |
| DialogData | [interfaces/foundry.DialogData.md](interfaces/foundry.DialogData.md) | interface DialogData {... |
| DialogV1Button | [interfaces/foundry.DialogV1Button.md](interfaces/foundry.DialogV1Button.md) | interface DialogV1Button {... |
| DialogV1ConfirmOptions | [interfaces/foundry.DialogV1ConfirmOptions.md](interfaces/foundry.DialogV1ConfirmOptions.md) | interface DialogV1ConfirmOptions {... |
| DialogV1Options | [interfaces/foundry.DialogV1Options.md](interfaces/foundry.DialogV1Options.md) | interface DialogV1Options {... |
| DialogV2Button | [interfaces/foundry.DialogV2Button.md](interfaces/foundry.DialogV2Button.md) | interface DialogV2Button {... |
| DialogV2Configuration | [interfaces/foundry.DialogV2Configuration.md](interfaces/foundry.DialogV2Configuration.md) | interface DialogV2Configuration {... |
| DialogV2WaitOptions | [interfaces/foundry.DialogV2WaitOptions.md](interfaces/foundry.DialogV2WaitOptions.md) | interface DialogV2WaitOptions {... |
| DiceFulfillmentConfiguration | [interfaces/CONFIG.DiceFulfillmentConfiguration.md](interfaces/CONFIG.DiceFulfillmentConfiguration.md) | interface DiceFulfillmentConfiguration {... |
| DiceFulfillmentDenomination | [interfaces/CONFIG.DiceFulfillmentDenomination.md](interfaces/CONFIG.DiceFulfillmentDenomination.md) | interface DiceFulfillmentDenomination {... |
| DiceFulfillmentMethod | [interfaces/CONFIG.DiceFulfillmentMethod.md](interfaces/CONFIG.DiceFulfillmentMethod.md) | interface DiceFulfillmentMethod {... |
| DiceTermFulfillmentDescriptor | [interfaces/foundry.DiceTermFulfillmentDescriptor.md](interfaces/foundry.DiceTermFulfillmentDescriptor.md) | interface DiceTermFulfillmentDescriptor {... |
| DiceTermResult | [interfaces/foundry.dice.DiceTermResult.md](interfaces/foundry.dice.DiceTermResult.md) | interface DiceTermResult {... |
| DocumentClassMetadata | [interfaces/foundry.abstract.types.DocumentClassMetadata.md](interfaces/foundry.abstract.types.DocumentClassMetadata.md) | interface DocumentClassMetadata {... |
| DocumentCloneOptions | [interfaces/foundry.abstract.types.DocumentCloneOptions.md](interfaces/foundry.abstract.types.DocumentCloneOptions.md) | interface DocumentCloneOptions {... |
| DocumentHTMLEmbedConfig | [interfaces/foundry.DocumentHTMLEmbedConfig.md](interfaces/foundry.DocumentHTMLEmbedConfig.md) | interface DocumentHTMLEmbedConfig {... |
| DocumentSheetConfigFieldDescriptor | [interfaces/foundry.DocumentSheetConfigFieldDescriptor.md](interfaces/foundry.DocumentSheetConfigFieldDescriptor.md) | interface DocumentSheetConfigFieldDescriptor {... |
| DocumentSheetConfigRenderContext | [interfaces/foundry.DocumentSheetConfigRenderContext.md](interfaces/foundry.DocumentSheetConfigRenderContext.md) | interface DocumentSheetConfigRenderContext {... |
| DocumentSheetConfiguration | [interfaces/foundry.DocumentSheetConfiguration.md](interfaces/foundry.DocumentSheetConfiguration.md) | interface DocumentSheetConfiguration {... |
| DocumentSheetRenderOptions | [interfaces/foundry.DocumentSheetRenderOptions.md](interfaces/foundry.DocumentSheetRenderOptions.md) | interface DocumentSheetRenderOptions {... |
| DocumentSheetV1Options | [interfaces/foundry.DocumentSheetV1Options.md](interfaces/foundry.DocumentSheetV1Options.md) | interface DocumentSheetV1Options {... |
| DocumentSocketRequest | [interfaces/foundry.abstract.types.DocumentSocketRequest.md](interfaces/foundry.abstract.types.DocumentSocketRequest.md) | interface DocumentSocketRequest {... |
| DocumentStats | [interfaces/foundry.data.types.DocumentStats.md](interfaces/foundry.data.types.DocumentStats.md) | interface DocumentStats {... |
| DocumentTagsInputConfig | [interfaces/foundry.DocumentTagsInputConfig.md](interfaces/foundry.DocumentTagsInputConfig.md) | interface DocumentTagsInputConfig {... |
| DoorAnimationConfiguration | [interfaces/foundry.DoorAnimationConfiguration.md](interfaces/foundry.DoorAnimationConfiguration.md) | interface DoorAnimationConfiguration {... |
| DoorStateSnapshot | [interfaces/foundry.DoorStateSnapshot.md](interfaces/foundry.DoorStateSnapshot.md) | interface DoorStateSnapshot {... |
| DragDropConfiguration | [interfaces/foundry.DragDropConfiguration.md](interfaces/foundry.DragDropConfiguration.md) | interface DragDropConfiguration {... |
| DraggableResizeOptions | [interfaces/foundry.DraggableResizeOptions.md](interfaces/foundry.DraggableResizeOptions.md) | interface DraggableResizeOptions {... |
| DrawingData | [interfaces/foundry.documents.types.DrawingData.md](interfaces/foundry.documents.types.DrawingData.md) | interface DrawingData {... |
| EdgeCreationOptions | [interfaces/foundry.canvas.geometry.types.EdgeCreationOptions.md](interfaces/foundry.canvas.geometry.types.EdgeCreationOptions.md) | Additional options which describe the edge... |
| EdgeThresholdData | [interfaces/foundry.canvas.geometry.types.EdgeThresholdData.md](interfaces/foundry.canvas.geometry.types.EdgeThresholdData.md) | interface EdgeThresholdData {... |
| EditorInputConfig | [interfaces/foundry.applications.fields.EditorInputConfig.md](interfaces/foundry.applications.fields.EditorInputConfig.md) | interface EditorInputConfig {... |
| EffectChangeData | [interfaces/foundry.documents.types.EffectChangeData.md](interfaces/foundry.documents.types.EffectChangeData.md) | interface EffectChangeData {... |
| EffectDurationData | [interfaces/foundry.documents.types.EffectDurationData.md](interfaces/foundry.documents.types.EffectDurationData.md) | interface EffectDurationData {... |
| EffectStartData | [interfaces/foundry.documents.types.EffectStartData.md](interfaces/foundry.documents.types.EffectStartData.md) | interface EffectStartData {... |
| ElevatedPoint | [interfaces/foundry.types.ElevatedPoint.md](interfaces/foundry.types.ElevatedPoint.md) | A 3D point, expessed as {x, y, elevation}.... |
| ElevatedSurfaceExposureOptions | [interfaces/foundry.canvas.geometry.types.ElevatedSurfaceExposureOptions.md](interfaces/foundry.canvas.geometry.types.ElevatedSurfaceExposureOptions.md) | interface ElevatedSurfaceExposureOptions {... |
| EmbeddedCollectionUpdateContext | [interfaces/foundry.data.types.EmbeddedCollectionUpdateContext.md](interfaces/foundry.data.types.EmbeddedCollectionUpdateContext.md) | interface EmbeddedCollectionUpdateContext {... |
| EnrichmentAnchorOptions | [interfaces/foundry.EnrichmentAnchorOptions.md](interfaces/foundry.EnrichmentAnchorOptions.md) | interface EnrichmentAnchorOptions {... |
| EnrichmentOptions | [interfaces/foundry.EnrichmentOptions.md](interfaces/foundry.EnrichmentOptions.md) | interface EnrichmentOptions {... |
| EnvironmentData | [interfaces/foundry.documents.types.EnvironmentData.md](interfaces/foundry.documents.types.EnvironmentData.md) | interface EnvironmentData {... |
| FavoriteFolder | [interfaces/foundry.FavoriteFolder.md](interfaces/foundry.FavoriteFolder.md) | interface FavoriteFolder {... |
| FieldFilter | [interfaces/foundry.FieldFilter.md](interfaces/foundry.FieldFilter.md) | interface FieldFilter {... |
| FilePickerInputConfig | [interfaces/foundry.FilePickerInputConfig.md](interfaces/foundry.FilePickerInputConfig.md) | interface FilePickerInputConfig {... |
| FogExplorationData | [interfaces/foundry.documents.types.FogExplorationData.md](interfaces/foundry.documents.types.FogExplorationData.md) | interface FogExplorationData {... |
| FolderChildNode | [interfaces/foundry.documents.types.FolderChildNode.md](interfaces/foundry.documents.types.FolderChildNode.md) | A node of a Folder-content tree... |
| FolderData | [interfaces/foundry.documents.types.FolderData.md](interfaces/foundry.documents.types.FolderData.md) | interface FolderData {... |
| FontFamilyDefinition | [interfaces/CONFIG.FontFamilyDefinition.md](interfaces/CONFIG.FontFamilyDefinition.md) | interface FontFamilyDefinition {... |
| FontTypes | [interfaces/foundry.FontTypes.md](interfaces/foundry.FontTypes.md) | interface FontTypes {... |
| FormApplicationOptions | [interfaces/foundry.FormApplicationOptions.md](interfaces/foundry.FormApplicationOptions.md) | interface FormApplicationOptions {... |
| FormFooterButton | [interfaces/foundry.applications.types.FormFooterButton.md](interfaces/foundry.applications.types.FormFooterButton.md) | interface FormFooterButton {... |
| FormGroupConfig | [interfaces/foundry.data.types.FormGroupConfig.md](interfaces/foundry.data.types.FormGroupConfig.md) | interface FormGroupConfig {... |
| FormInputConfig | [interfaces/foundry.data.types.FormInputConfig.md](interfaces/foundry.data.types.FormInputConfig.md) | interface FormInputConfig<[FormInputValue](#forminputvalue) = unknown> {... |
| FormNode | [interfaces/foundry.applications.types.FormNode.md](interfaces/foundry.applications.types.FormNode.md) | interface FormNode {... |
| FormSelectOption | [interfaces/foundry.applications.fields.FormSelectOption.md](interfaces/foundry.applications.fields.FormSelectOption.md) | interface FormSelectOption {... |
| FormulaEditorConfiguration | [interfaces/CONFIG.FormulaEditorConfiguration.md](interfaces/CONFIG.FormulaEditorConfiguration.md) | interface FormulaEditorConfiguration {... |
| FormulaEditorConfiguration | [interfaces/foundry.FormulaEditorConfiguration.md](interfaces/foundry.FormulaEditorConfiguration.md) | interface FormulaEditorConfiguration {... |
| FormulaEditorContext | [interfaces/CONFIG.FormulaEditorContext.md](interfaces/CONFIG.FormulaEditorContext.md) | interface FormulaEditorContext {... |
| FormulaInputConfig | [interfaces/foundry.FormulaInputConfig.md](interfaces/foundry.FormulaInputConfig.md) | interface FormulaInputConfig {... |
| FrameViewerConfiguration | [interfaces/foundry.FrameViewerConfiguration.md](interfaces/foundry.FrameViewerConfiguration.md) | interface FrameViewerConfiguration {... |
| FromCompendiumOptions | [interfaces/foundry.types.FromCompendiumOptions.md](interfaces/foundry.types.FromCompendiumOptions.md) | interface FromCompendiumOptions {... |
| GameUIConfiguration | [interfaces/foundry.GameUIConfiguration.md](interfaces/foundry.GameUIConfiguration.md) | interface GameUIConfiguration {... |
| GridConfiguration | [interfaces/foundry.grid.types.GridConfiguration.md](interfaces/foundry.grid.types.GridConfiguration.md) | interface GridConfiguration {... |
| GridData | [interfaces/foundry.documents.types.GridData.md](interfaces/foundry.documents.types.GridData.md) | interface GridData {... |
| GridMeasurePathResult | [interfaces/foundry.grid.types.GridMeasurePathResult.md](interfaces/foundry.grid.types.GridMeasurePathResult.md) | A result of [foundry.grid.BaseGrid#measurePath](../classes/foundry.grid.BaseGrid.md#measurepath).... |
| GridMeasurePathResultSegment | [interfaces/foundry.grid.types.GridMeasurePathResultSegment.md](interfaces/foundry.grid.types.GridMeasurePathResultSegment.md) | A segment of [foundry.grid.types.GridMeasurePathResult](foundry.grid.types.GridMeasurePathResult.md).... |
| GridMeasurePathResultWaypoint | [interfaces/foundry.grid.types.GridMeasurePathResultWaypoint.md](interfaces/foundry.grid.types.GridMeasurePathResultWaypoint.md) | A waypoint of [foundry.grid.types.GridMeasurePathResult](foundry.grid.types.GridMeasurePathResult.md).... |
| GridMeasurePathWaypointData2D | [interfaces/foundry.grid.types.GridMeasurePathWaypointData2D.md](interfaces/foundry.grid.types.GridMeasurePathWaypointData2D.md) | interface GridMeasurePathWaypointData2D {... |
| GridMeasurePathWaypointData3D | [interfaces/foundry.grid.types.GridMeasurePathWaypointData3D.md](interfaces/foundry.grid.types.GridMeasurePathWaypointData3D.md) | interface GridMeasurePathWaypointData3D {... |
| GridMeshData | [interfaces/foundry.canvas.containers.types.GridMeshData.md](interfaces/foundry.canvas.containers.types.GridMeshData.md) | The grid mesh data.... |
| GridOffset2D | [interfaces/foundry.grid.types.GridOffset2D.md](interfaces/foundry.grid.types.GridOffset2D.md) | 2D offset coordinates of a grid space.... |
| GridOffset3D | [interfaces/foundry.grid.types.GridOffset3D.md](interfaces/foundry.grid.types.GridOffset3D.md) | 3D offset coordinates of a grid space.... |
| GridOffsetFieldOptions | [interfaces/foundry.data.types.GridOffsetFieldOptions.md](interfaces/foundry.data.types.GridOffsetFieldOptions.md) | interface GridOffsetFieldOptions {... |
| GridOffsetsFieldOptions | [interfaces/foundry.data.types.GridOffsetsFieldOptions.md](interfaces/foundry.data.types.GridOffsetsFieldOptions.md) | interface GridOffsetsFieldOptions {... |
| GridSnappingBehavior | [interfaces/foundry.grid.types.GridSnappingBehavior.md](interfaces/foundry.grid.types.GridSnappingBehavior.md) | A snapping behavior is defined by the snapping mode at the given resolution of the grid.... |
| HTMLCodeMirrorOptions | [interfaces/foundry.HTMLCodeMirrorOptions.md](interfaces/foundry.HTMLCodeMirrorOptions.md) | interface HTMLCodeMirrorOptions {... |
| HTMLColorPickerOptions | [interfaces/foundry.HTMLColorPickerOptions.md](interfaces/foundry.HTMLColorPickerOptions.md) | interface HTMLColorPickerOptions {... |
| HTMLDocumentTagsOptions | [interfaces/foundry.HTMLDocumentTagsOptions.md](interfaces/foundry.HTMLDocumentTagsOptions.md) | interface HTMLDocumentTagsOptions {... |
| HTMLRangePickerOptions | [interfaces/foundry.HTMLRangePickerOptions.md](interfaces/foundry.HTMLRangePickerOptions.md) | interface HTMLRangePickerOptions {... |
| HTMLSecretConfiguration | [interfaces/foundry.HTMLSecretConfiguration.md](interfaces/foundry.HTMLSecretConfiguration.md) | interface HTMLSecretConfiguration {... |
| HTMLStringTagsOptions | [interfaces/foundry.HTMLStringTagsOptions.md](interfaces/foundry.HTMLStringTagsOptions.md) | interface HTMLStringTagsOptions {... |
| HandlebarsRenderOptions | [interfaces/foundry.HandlebarsRenderOptions.md](interfaces/foundry.HandlebarsRenderOptions.md) | interface HandlebarsRenderOptions {... |
| HandlebarsTemplatePart | [interfaces/foundry.HandlebarsTemplatePart.md](interfaces/foundry.HandlebarsTemplatePart.md) | interface HandlebarsTemplatePart {... |
| HexagonalGridConfiguration | [interfaces/foundry.grid.types.HexagonalGridConfiguration.md](interfaces/foundry.grid.types.HexagonalGridConfiguration.md) | interface HexagonalGridConfiguration {... |
| HexagonalGridCube2D | [interfaces/foundry.grid.types.HexagonalGridCube2D.md](interfaces/foundry.grid.types.HexagonalGridCube2D.md) | 2D cube coordinates in a hexagonal grid. q + r + s = 0.... |
| HexagonalGridCube3D | [interfaces/foundry.grid.types.HexagonalGridCube3D.md](interfaces/foundry.grid.types.HexagonalGridCube3D.md) | 3D cube coordinates in a hexagonal grid. q + r + s = 0.... |
| HookedFunction | [interfaces/foundry.HookedFunction.md](interfaces/foundry.HookedFunction.md) | interface HookedFunction {... |
| HotReloadData | [interfaces/foundry.types.HotReloadData.md](interfaces/foundry.types.HotReloadData.md) | interface HotReloadData {... |
| HotbarSlotData | [interfaces/foundry.HotbarSlotData.md](interfaces/foundry.HotbarSlotData.md) | interface HotbarSlotData {... |
| HoverFadeState | [interfaces/foundry.HoverFadeState.md](interfaces/foundry.HoverFadeState.md) | interface HoverFadeState {... |
| ImagePopoutConfiguration | [interfaces/foundry.ImagePopoutConfiguration.md](interfaces/foundry.ImagePopoutConfiguration.md) | interface ImagePopoutConfiguration {... |
| ItemData | [interfaces/foundry.documents.types.ItemData.md](interfaces/foundry.documents.types.ItemData.md) | interface ItemData {... |
| IterableWeakMapHeldValue | [interfaces/foundry.utils.types.IterableWeakMapHeldValue.md](interfaces/foundry.utils.types.IterableWeakMapHeldValue.md) | interface IterableWeakMapHeldValue<[K](#k) extends WeakKey> {... |
| IterableWeakMapValue | [interfaces/foundry.utils.types.IterableWeakMapValue.md](interfaces/foundry.utils.types.IterableWeakMapValue.md) | interface IterableWeakMapValue<[K](#k) extends WeakKey, [V](#v)> {... |
| JournalEntryCategoryData | [interfaces/foundry.documents.types.JournalEntryCategoryData.md](interfaces/foundry.documents.types.JournalEntryCategoryData.md) | interface JournalEntryCategoryData {... |
| JournalEntryData | [interfaces/foundry.documents.types.JournalEntryData.md](interfaces/foundry.documents.types.JournalEntryData.md) | interface JournalEntryData {... |
| JournalEntryPageData | [interfaces/foundry.documents.types.JournalEntryPageData.md](interfaces/foundry.documents.types.JournalEntryPageData.md) | interface JournalEntryPageData {... |
| JournalEntryPageHeading | [interfaces/foundry.types.JournalEntryPageHeading.md](interfaces/foundry.types.JournalEntryPageHeading.md) | interface JournalEntryPageHeading {... |
| JournalEntryPageImageData | [interfaces/foundry.documents.types.JournalEntryPageImageData.md](interfaces/foundry.documents.types.JournalEntryPageImageData.md) | interface JournalEntryPageImageData {... |
| JournalEntryPageTextData | [interfaces/foundry.documents.types.JournalEntryPageTextData.md](interfaces/foundry.documents.types.JournalEntryPageTextData.md) | interface JournalEntryPageTextData {... |
| JournalEntryPageTitleData | [interfaces/foundry.documents.types.JournalEntryPageTitleData.md](interfaces/foundry.documents.types.JournalEntryPageTitleData.md) | interface JournalEntryPageTitleData {... |
| JournalEntryPageVideoData | [interfaces/foundry.documents.types.JournalEntryPageVideoData.md](interfaces/foundry.documents.types.JournalEntryPageVideoData.md) | interface JournalEntryPageVideoData {... |
| JournalSheetCategoryContext | [interfaces/foundry.applications.sheets.journal.JournalSheetCategoryContext.md](interfaces/foundry.applications.sheets.journal.JournalSheetCategoryContext.md) | interface JournalSheetCategoryContext {... |
| JournalSheetOptions | [interfaces/foundry.JournalSheetOptions.md](interfaces/foundry.JournalSheetOptions.md) | interface JournalSheetOptions {... |
| JournalSheetPageContext | [interfaces/foundry.applications.sheets.journal.JournalSheetPageContext.md](interfaces/foundry.applications.sheets.journal.JournalSheetPageContext.md) | interface JournalSheetPageContext {... |
| JournalSheetRenderOptions | [interfaces/foundry.applications.sheets.journal.JournalSheetRenderOptions.md](interfaces/foundry.applications.sheets.journal.JournalSheetRenderOptions.md) | interface JournalSheetRenderOptions {... |
| KTX2Header | [interfaces/foundry.canvas.types.KTX2Header.md](interfaces/foundry.canvas.types.KTX2Header.md) | interface KTX2Header {... |
| KTX2ParserInitOptions | [interfaces/foundry.canvas.types.KTX2ParserInitOptions.md](interfaces/foundry.canvas.types.KTX2ParserInitOptions.md) | interface KTX2ParserInitOptions {... |
| KTX2ParserParseOptions | [interfaces/foundry.canvas.types.KTX2ParserParseOptions.md](interfaces/foundry.canvas.types.KTX2ParserParseOptions.md) | interface KTX2ParserParseOptions {... |
| KTX2TranscodeTarget | [interfaces/foundry.canvas.types.KTX2TranscodeTarget.md](interfaces/foundry.canvas.types.KTX2TranscodeTarget.md) | interface KTX2TranscodeTarget {... |
| KeybindingAction | [interfaces/foundry.types.KeybindingAction.md](interfaces/foundry.types.KeybindingAction.md) | An action that can occur when a key is pressed... |
| KeybindingActionBinding | [interfaces/foundry.types.KeybindingActionBinding.md](interfaces/foundry.types.KeybindingActionBinding.md) | A Client Keybinding Action Binding... |
| KeybindingActionConfig | [interfaces/foundry.types.KeybindingActionConfig.md](interfaces/foundry.types.KeybindingActionConfig.md) | A Client Keybinding Action Configuration... |
| KeyboardEventContext | [interfaces/foundry.types.KeyboardEventContext.md](interfaces/foundry.types.KeyboardEventContext.md) | A keyboard event context... |
| LevelData | [interfaces/foundry.documents.types.LevelData.md](interfaces/foundry.documents.types.LevelData.md) | interface LevelData {... |
| LevelTexture | [interfaces/foundry.documents.types.LevelTexture.md](interfaces/foundry.documents.types.LevelTexture.md) | interface LevelTexture {... |
| LightAnimationData | [interfaces/foundry.data.types.LightAnimationData.md](interfaces/foundry.data.types.LightAnimationData.md) | interface LightAnimationData {... |
| LightSourceData | [interfaces/foundry.LightSourceData.md](interfaces/foundry.LightSourceData.md) | interface LightSourceData {... |
| LineCircleIntersection | [interfaces/foundry.utils.types.LineCircleIntersection.md](interfaces/foundry.utils.types.LineCircleIntersection.md) | interface LineCircleIntersection {... |
| LineIntersection | [interfaces/foundry.utils.types.LineIntersection.md](interfaces/foundry.utils.types.LineIntersection.md) | interface LineIntersection {... |
| MacroData | [interfaces/foundry.documents.types.MacroData.md](interfaces/foundry.documents.types.MacroData.md) | interface MacroData {... |
| MainMenuItem | [interfaces/foundry.MainMenuItem.md](interfaces/foundry.MainMenuItem.md) | interface MainMenuItem {... |
| ModuleManifestData | [interfaces/foundry.packages.types.ModuleManifestData.md](interfaces/foundry.packages.types.ModuleManifestData.md) | The data structure for module.json.... |
| NewFontDefinition | [interfaces/foundry.NewFontDefinition.md](interfaces/foundry.NewFontDefinition.md) | interface NewFontDefinition {... |
| NoteData | [interfaces/foundry.documents.types.NoteData.md](interfaces/foundry.documents.types.NoteData.md) | interface NoteData {... |
| Notification | [interfaces/foundry.Notification.md](interfaces/foundry.Notification.md) | interface Notification {... |
| NotificationOptions | [interfaces/foundry.NotificationOptions.md](interfaces/foundry.NotificationOptions.md) | interface NotificationOptions {... |
| NumberFieldOptions | [interfaces/foundry.data.types.NumberFieldOptions.md](interfaces/foundry.data.types.NumberFieldOptions.md) | interface NumberFieldOptions {... |
| NumberInputConfig | [interfaces/foundry.applications.fields.NumberInputConfig.md](interfaces/foundry.applications.fields.NumberInputConfig.md) | interface NumberInputConfig {... |
| OccludableBatchData | [interfaces/foundry.canvas.rendering.shaders.types.OccludableBatchData.md](interfaces/foundry.canvas.rendering.shaders.types.OccludableBatchData.md) | The batch data that is needed by [foundry.canvas.rendering.shaders.OccludableSamplerShader](../classes/foundry.canvas.rendering.shaders.OccludableSamplerShader.md)... |
| OcclusionState | [interfaces/foundry.OcclusionState.md](interfaces/foundry.OcclusionState.md) | interface OcclusionState {... |
| PackFolderData | [interfaces/foundry.packages.types.PackFolderData.md](interfaces/foundry.packages.types.PackFolderData.md) | interface PackFolderData {... |
| PackageAuthorData | [interfaces/foundry.packages.types.PackageAuthorData.md](interfaces/foundry.packages.types.PackageAuthorData.md) | interface PackageAuthorData {... |
| PackageCompatibilityBadge | [interfaces/foundry.packages.types.PackageCompatibilityBadge.md](interfaces/foundry.packages.types.PackageCompatibilityBadge.md) | interface PackageCompatibilityBadge {... |
| PackageCompatibilityData | [interfaces/foundry.packages.types.PackageCompatibilityData.md](interfaces/foundry.packages.types.PackageCompatibilityData.md) | See [foundry.utils.isNewerVersion](../functions/foundry.utils.isNewerVersion.md) for the function used for comparison.... |
| PackageCompatibilityIssue | [interfaces/foundry.PackageCompatibilityIssue.md](interfaces/foundry.PackageCompatibilityIssue.md) | interface PackageCompatibilityIssue {... |
| PackageCompendiumData | [interfaces/foundry.packages.types.PackageCompendiumData.md](interfaces/foundry.packages.types.PackageCompendiumData.md) | interface PackageCompendiumData {... |
| PackageFlagsData | [interfaces/foundry.packages.types.PackageFlagsData.md](interfaces/foundry.packages.types.PackageFlagsData.md) | Flags used by the core software.... |
| PackageLanguageData | [interfaces/foundry.packages.types.PackageLanguageData.md](interfaces/foundry.packages.types.PackageLanguageData.md) | interface PackageLanguageData {... |
| PackageManifestData | [interfaces/foundry.packages.types.PackageManifestData.md](interfaces/foundry.packages.types.PackageManifestData.md) | The data structure of a package manifest. This data structure is extended by BasePackage subclasses to add additional... |
| PackageMediaData | [interfaces/foundry.packages.types.PackageMediaData.md](interfaces/foundry.packages.types.PackageMediaData.md) | interface PackageMediaData {... |
| PackageRelationshipsData | [interfaces/foundry.packages.types.PackageRelationshipsData.md](interfaces/foundry.packages.types.PackageRelationshipsData.md) | interface PackageRelationshipsData {... |
| ParticleGeneratorBehavior | [interfaces/foundry.canvas.animation.types.ParticleGeneratorBehavior.md](interfaces/foundry.canvas.animation.types.ParticleGeneratorBehavior.md) | interface ParticleGeneratorBehavior {... |
| ParticleGeneratorClipOptions | [interfaces/foundry.canvas.animation.types.ParticleGeneratorClipOptions.md](interfaces/foundry.canvas.animation.types.ParticleGeneratorClipOptions.md) | interface ParticleGeneratorClipOptions {... |
| ParticleGeneratorColorCurvePoint | [interfaces/foundry.canvas.animation.types.ParticleGeneratorColorCurvePoint.md](interfaces/foundry.canvas.animation.types.ParticleGeneratorColorCurvePoint.md) | interface ParticleGeneratorColorCurvePoint {... |
| ParticleGeneratorColorValueOptions | [interfaces/foundry.canvas.animation.types.ParticleGeneratorColorValueOptions.md](interfaces/foundry.canvas.animation.types.ParticleGeneratorColorValueOptions.md) | interface ParticleGeneratorColorValueOptions {... |
| ParticleGeneratorConfiguration | [interfaces/foundry.canvas.animation.types.ParticleGeneratorConfiguration.md](interfaces/foundry.canvas.animation.types.ParticleGeneratorConfiguration.md) | interface ParticleGeneratorConfiguration {... |
| ParticleGeneratorCurvePoint | [interfaces/foundry.canvas.animation.types.ParticleGeneratorCurvePoint.md](interfaces/foundry.canvas.animation.types.ParticleGeneratorCurvePoint.md) | interface ParticleGeneratorCurvePoint {... |
| ParticleGeneratorDebugOptions | [interfaces/foundry.canvas.animation.types.ParticleGeneratorDebugOptions.md](interfaces/foundry.canvas.animation.types.ParticleGeneratorDebugOptions.md) | interface ParticleGeneratorDebugOptions {... |
| ParticleGeneratorDebugStats | [interfaces/foundry.canvas.animation.types.ParticleGeneratorDebugStats.md](interfaces/foundry.canvas.animation.types.ParticleGeneratorDebugStats.md) | interface ParticleGeneratorDebugStats {... |
| ParticleGeneratorDebugTintOptions | [interfaces/foundry.canvas.animation.types.ParticleGeneratorDebugTintOptions.md](interfaces/foundry.canvas.animation.types.ParticleGeneratorDebugTintOptions.md) | interface ParticleGeneratorDebugTintOptions {... |
| ParticleGeneratorFadeOptions | [interfaces/foundry.canvas.animation.types.ParticleGeneratorFadeOptions.md](interfaces/foundry.canvas.animation.types.ParticleGeneratorFadeOptions.md) | interface ParticleGeneratorFadeOptions {... |
| ParticleGeneratorFollowOptions | [interfaces/foundry.canvas.animation.types.ParticleGeneratorFollowOptions.md](interfaces/foundry.canvas.animation.types.ParticleGeneratorFollowOptions.md) | interface ParticleGeneratorFollowOptions {... |
| ParticleGeneratorLocalArea | [interfaces/foundry.canvas.animation.types.ParticleGeneratorLocalArea.md](interfaces/foundry.canvas.animation.types.ParticleGeneratorLocalArea.md) | interface ParticleGeneratorLocalArea {... |
| ParticleGeneratorOrbitOptions | [interfaces/foundry.canvas.animation.types.ParticleGeneratorOrbitOptions.md](interfaces/foundry.canvas.animation.types.ParticleGeneratorOrbitOptions.md) | interface ParticleGeneratorOrbitOptions {... |
| ParticleGeneratorPolylineSegment | [interfaces/foundry.canvas.animation.types.ParticleGeneratorPolylineSegment.md](interfaces/foundry.canvas.animation.types.ParticleGeneratorPolylineSegment.md) | interface ParticleGeneratorPolylineSegment {... |
| ParticleGeneratorRotationOptions | [interfaces/foundry.canvas.animation.types.ParticleGeneratorRotationOptions.md](interfaces/foundry.canvas.animation.types.ParticleGeneratorRotationOptions.md) | interface ParticleGeneratorRotationOptions {... |
| ParticleGeneratorShapeDataSource | [interfaces/foundry.canvas.animation.types.ParticleGeneratorShapeDataSource.md](interfaces/foundry.canvas.animation.types.ParticleGeneratorShapeDataSource.md) | interface ParticleGeneratorShapeDataSource {... |
| ParticleGeneratorValueOptions | [interfaces/foundry.canvas.animation.types.ParticleGeneratorValueOptions.md](interfaces/foundry.canvas.animation.types.ParticleGeneratorValueOptions.md) | interface ParticleGeneratorValueOptions {... |
| PingData | [interfaces/foundry.canvas.interaction.types.PingData.md](interfaces/foundry.canvas.interaction.types.PingData.md) | interface PingData {... |
| PingOptions | [interfaces/foundry.canvas.interaction.types.PingOptions.md](interfaces/foundry.canvas.interaction.types.PingOptions.md) | interface PingOptions {... |
| PlaceableTabEntryContext | [interfaces/foundry.PlaceableTabEntryContext.md](interfaces/foundry.PlaceableTabEntryContext.md) | interface PlaceableTabEntryContext {... |
| PlaceablesLayerOptions | [interfaces/foundry.canvas.layers.types.PlaceablesLayerOptions.md](interfaces/foundry.canvas.layers.types.PlaceablesLayerOptions.md) | interface PlaceablesLayerOptions {... |
| PlaylistData | [interfaces/foundry.documents.types.PlaylistData.md](interfaces/foundry.documents.types.PlaylistData.md) | interface PlaylistData {... |
| PlaylistDirectoryControlContext | [interfaces/foundry.PlaylistDirectoryControlContext.md](interfaces/foundry.PlaylistDirectoryControlContext.md) | interface PlaylistDirectoryControlContext {... |
| PlaylistDirectoryTreeContext | [interfaces/foundry.PlaylistDirectoryTreeContext.md](interfaces/foundry.PlaylistDirectoryTreeContext.md) | interface PlaylistDirectoryTreeContext {... |
| PlaylistDirectoryVolumeContext | [interfaces/foundry.PlaylistDirectoryVolumeContext.md](interfaces/foundry.PlaylistDirectoryVolumeContext.md) | interface PlaylistDirectoryVolumeContext {... |
| PlaylistRenderContext | [interfaces/foundry.PlaylistRenderContext.md](interfaces/foundry.PlaylistRenderContext.md) | interface PlaylistRenderContext {... |
| PlaylistSoundData | [interfaces/foundry.documents.types.PlaylistSoundData.md](interfaces/foundry.documents.types.PlaylistSoundData.md) | interface PlaylistSoundData {... |
| PlaylistSoundRenderContext | [interfaces/foundry.PlaylistSoundRenderContext.md](interfaces/foundry.PlaylistSoundRenderContext.md) | interface PlaylistSoundRenderContext {... |
| Point | [interfaces/foundry.types.Point.md](interfaces/foundry.types.Point.md) | A 2D point, expressed as {x, y}.... |
| PointSourcePolygonConfig | [interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md](interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md) | interface PointSourcePolygonConfig {... |
| PolygonVertexOptions | [interfaces/foundry.PolygonVertexOptions.md](interfaces/foundry.PolygonVertexOptions.md) | interface PolygonVertexOptions {... |
| PositionalSoundPlaybackOptions | [interfaces/foundry.PositionalSoundPlaybackOptions.md](interfaces/foundry.PositionalSoundPlaybackOptions.md) | interface PositionalSoundPlaybackOptions {... |
| PrimarySpriteMeshConstructorOptions | [interfaces/foundry.PrimarySpriteMeshConstructorOptions.md](interfaces/foundry.PrimarySpriteMeshConstructorOptions.md) | interface PrimarySpriteMeshConstructorOptions {... |
| ProseMirrorContentLinkOptions | [interfaces/foundry.prosemirror.types.ProseMirrorContentLinkOptions.md](interfaces/foundry.prosemirror.types.ProseMirrorContentLinkOptions.md) | interface ProseMirrorContentLinkOptions {... |
| ProseMirrorDropDownConfig | [interfaces/foundry.prosemirror.types.ProseMirrorDropDownConfig.md](interfaces/foundry.prosemirror.types.ProseMirrorDropDownConfig.md) | interface ProseMirrorDropDownConfig {... |
| ProseMirrorHistory | [interfaces/foundry.ProseMirrorHistory.md](interfaces/foundry.ProseMirrorHistory.md) | interface ProseMirrorHistory {... |
| ProseMirrorInputConfig | [interfaces/foundry.ProseMirrorInputConfig.md](interfaces/foundry.ProseMirrorInputConfig.md) | interface ProseMirrorInputConfig {... |
| ProseMirrorInsert | [interfaces/CONFIG.ProseMirrorInsert.md](interfaces/CONFIG.ProseMirrorInsert.md) | interface ProseMirrorInsert {... |
| ProseMirrorMenuItem | [interfaces/foundry.prosemirror.types.ProseMirrorMenuItem.md](interfaces/foundry.prosemirror.types.ProseMirrorMenuItem.md) | interface ProseMirrorMenuItem {... |
| ProseMirrorMenuOptions | [interfaces/foundry.prosemirror.types.ProseMirrorMenuOptions.md](interfaces/foundry.prosemirror.types.ProseMirrorMenuOptions.md) | interface ProseMirrorMenuOptions {... |
| ProseMirrorMenuResizeState | [interfaces/foundry.prosemirror.types.ProseMirrorMenuResizeState.md](interfaces/foundry.prosemirror.types.ProseMirrorMenuResizeState.md) | interface ProseMirrorMenuResizeState {... |
| QuadtreeObject | [interfaces/foundry.canvas.geometry.types.QuadtreeObject.md](interfaces/foundry.canvas.geometry.types.QuadtreeObject.md) | interface QuadtreeObject {... |
| QuickstartAdventureData | [interfaces/foundry.packages.types.QuickstartAdventureData.md](interfaces/foundry.packages.types.QuickstartAdventureData.md) | interface QuickstartAdventureData {... |
| QuickstartManifestData | [interfaces/foundry.packages.types.QuickstartManifestData.md](interfaces/foundry.packages.types.QuickstartManifestData.md) | interface QuickstartManifestData {... |
| RangePickerInputConfig | [interfaces/foundry.RangePickerInputConfig.md](interfaces/foundry.RangePickerInputConfig.md) | interface RangePickerInputConfig {... |
| RayIntersection | [interfaces/foundry.canvas.geometry.types.RayIntersection.md](interfaces/foundry.canvas.geometry.types.RayIntersection.md) | interface RayIntersection {... |
| Rectangle | [interfaces/foundry.types.Rectangle.md](interfaces/foundry.types.Rectangle.md) | A standard rectangle interface.... |
| RegionAnimationState | [interfaces/foundry.canvas.placeables.types.RegionAnimationState.md](interfaces/foundry.canvas.placeables.types.RegionAnimationState.md) | interface RegionAnimationState {... |
| RegionBehaviorData | [interfaces/foundry.documents.types.RegionBehaviorData.md](interfaces/foundry.documents.types.RegionBehaviorData.md) | interface RegionBehaviorData {... |
| RegionData | [interfaces/foundry.documents.types.RegionData.md](interfaces/foundry.documents.types.RegionData.md) | interface RegionData {... |
| RegionEvent | [interfaces/foundry.documents.types.RegionEvent.md](interfaces/foundry.documents.types.RegionEvent.md) | interface RegionEvent<[Data](#data) = object> {... |
| RegionMovementSegment | [interfaces/foundry.documents.types.RegionMovementSegment.md](interfaces/foundry.documents.types.RegionMovementSegment.md) | interface RegionMovementSegment {... |
| RegionPlacementOptions | [interfaces/foundry.canvas.layers.types.RegionPlacementOptions.md](interfaces/foundry.canvas.layers.types.RegionPlacementOptions.md) | interface RegionPlacementOptions {... |
| RegionSegmentizeMovementPathWaypoint | [interfaces/foundry.documents.types.RegionSegmentizeMovementPathWaypoint.md](interfaces/foundry.documents.types.RegionSegmentizeMovementPathWaypoint.md) | interface RegionSegmentizeMovementPathWaypoint {... |
| RegionSocketEvent | [interfaces/foundry.documents.types.RegionSocketEvent.md](interfaces/foundry.documents.types.RegionSocketEvent.md) | interface RegionSocketEvent {... |
| RegionSurface | [interfaces/foundry.documents.types.RegionSurface.md](interfaces/foundry.documents.types.RegionSurface.md) | interface RegionSurface {... |
| RegionTokenAnimateEventData | [interfaces/foundry.documents.types.RegionTokenAnimateEventData.md](interfaces/foundry.documents.types.RegionTokenAnimateEventData.md) | interface RegionTokenAnimateEventData {... |
| RegionTokenEnterExitEventData | [interfaces/foundry.documents.types.RegionTokenEnterExitEventData.md](interfaces/foundry.documents.types.RegionTokenEnterExitEventData.md) | interface RegionTokenEnterExitEventData {... |
| RegionTokenMoveEventData | [interfaces/foundry.documents.types.RegionTokenMoveEventData.md](interfaces/foundry.documents.types.RegionTokenMoveEventData.md) | interface RegionTokenMoveEventData {... |
| RegionTokenRoundEventData | [interfaces/foundry.documents.types.RegionTokenRoundEventData.md](interfaces/foundry.documents.types.RegionTokenRoundEventData.md) | interface RegionTokenRoundEventData {... |
| RegionTokenTurnEventData | [interfaces/foundry.documents.types.RegionTokenTurnEventData.md](interfaces/foundry.documents.types.RegionTokenTurnEventData.md) | interface RegionTokenTurnEventData {... |
| RelatedPackageData | [interfaces/foundry.packages.types.RelatedPackageData.md](interfaces/foundry.packages.types.RelatedPackageData.md) | interface RelatedPackageData {... |
| RenderChatInputContext | [interfaces/hookEvents.RenderChatInputContext.md](interfaces/hookEvents.RenderChatInputContext.md) | interface RenderChatInputContext {... |
| RenderFlag | [interfaces/foundry.canvas.interaction.types.RenderFlag.md](interfaces/foundry.canvas.interaction.types.RenderFlag.md) | interface RenderFlag {... |
| RenderedEffectLayerConfig | [interfaces/foundry.canvas.sources.types.RenderedEffectLayerConfig.md](interfaces/foundry.canvas.sources.types.RenderedEffectLayerConfig.md) | interface RenderedEffectLayerConfig {... |
| RenderedEffectSourceAnimationConfig | [interfaces/foundry.canvas.sources.types.RenderedEffectSourceAnimationConfig.md](interfaces/foundry.canvas.sources.types.RenderedEffectSourceAnimationConfig.md) | interface RenderedEffectSourceAnimationConfig {... |
| RenderedEffectSourceData | [interfaces/foundry.canvas.sources.types.RenderedEffectSourceData.md](interfaces/foundry.canvas.sources.types.RenderedEffectSourceData.md) | interface RenderedEffectSourceData {... |
| RenderedEffectSourceLayer | [interfaces/foundry.canvas.sources.types.RenderedEffectSourceLayer.md](interfaces/foundry.canvas.sources.types.RenderedEffectSourceLayer.md) | interface RenderedEffectSourceLayer {... |
| ReplaceFormulaDataOptions | [interfaces/foundry.dice.ReplaceFormulaDataOptions.md](interfaces/foundry.dice.ReplaceFormulaDataOptions.md) | interface ReplaceFormulaDataOptions {... |
| ResolvedUUID | [interfaces/foundry.utils.types.ResolvedUUID.md](interfaces/foundry.utils.types.ResolvedUUID.md) | interface ResolvedUUID {... |
| ReticuleOptions | [interfaces/foundry.types.ReticuleOptions.md](interfaces/foundry.types.ReticuleOptions.md) | interface ReticuleOptions {... |
| RingColorBand | [interfaces/foundry.canvas.placeables.types.RingColorBand.md](interfaces/foundry.canvas.placeables.types.RingColorBand.md) | The start and end radii of the token ring color band.... |
| RingData | [interfaces/foundry.canvas.placeables.types.RingData.md](interfaces/foundry.canvas.placeables.types.RingData.md) | Represents the ring- and background-related properties for a given size... |
| RollParseNode | [interfaces/foundry.dice.RollParseNode.md](interfaces/foundry.dice.RollParseNode.md) | interface RollParseNode {... |
| RollParseOffset | [interfaces/foundry.dice.RollParseOffset.md](interfaces/foundry.dice.RollParseOffset.md) | interface RollParseOffset {... |
| RollTableData | [interfaces/foundry.documents.types.RollTableData.md](interfaces/foundry.documents.types.RollTableData.md) | interface RollTableData {... |
| RollTableDraw | [interfaces/foundry.documents.types.RollTableDraw.md](interfaces/foundry.documents.types.RollTableDraw.md) | An object containing the executed Roll and the produced results... |
| RollTermData | [interfaces/foundry.dice.terms.RollTermData.md](interfaces/foundry.dice.terms.RollTermData.md) | interface RollTermData {... |
| RulerWaypoint | [interfaces/foundry.types.RulerWaypoint.md](interfaces/foundry.types.RulerWaypoint.md) | interface RulerWaypoint {... |
| SMAAFilterConfig | [interfaces/foundry.canvas.rendering.filters.types.SMAAFilterConfig.md](interfaces/foundry.canvas.rendering.filters.types.SMAAFilterConfig.md) | interface SMAAFilterConfig {... |
| SceneControl | [interfaces/foundry.SceneControl.md](interfaces/foundry.SceneControl.md) | The data structure for a set of controls in the [SceneControls#controls](../classes/foundry.applications.ui.SceneControls.md#controls) record.... |
| SceneControlTool | [interfaces/foundry.SceneControlTool.md](interfaces/foundry.SceneControlTool.md) | The data structure for a single tool in the [SceneControl#tools](foundry.SceneControl.md#tools) record.... |
| SceneControlsActivationChange | [interfaces/foundry.SceneControlsActivationChange.md](interfaces/foundry.SceneControlsActivationChange.md) | The data structure provided to the [SceneControl#onChange](foundry.SceneControl.md#onchange) callback.... |
| SceneData | [interfaces/foundry.documents.types.SceneData.md](interfaces/foundry.documents.types.SceneData.md) | interface SceneData {... |
| SceneDimensions | [interfaces/foundry.documents.types.SceneDimensions.md](interfaces/foundry.documents.types.SceneDimensions.md) | interface SceneDimensions {... |
| SceneEnvironmentData | [interfaces/foundry.documents.types.SceneEnvironmentData.md](interfaces/foundry.documents.types.SceneEnvironmentData.md) | interface SceneEnvironmentData {... |
| SceneTransitionDefinition | [interfaces/CONFIG.SceneTransitionDefinition.md](interfaces/CONFIG.SceneTransitionDefinition.md) | interface SceneTransitionDefinition {... |
| SceneViewOptions | [interfaces/foundry.documents.types.SceneViewOptions.md](interfaces/foundry.documents.types.SceneViewOptions.md) | interface SceneViewOptions {... |
| SearchFilterConfiguration | [interfaces/foundry.SearchFilterConfiguration.md](interfaces/foundry.SearchFilterConfiguration.md) | Options which customize the behavior of the filter... |
| SelectInputConfig | [interfaces/foundry.applications.fields.SelectInputConfig.md](interfaces/foundry.applications.fields.SelectInputConfig.md) | interface SelectInputConfig {... |
| SelectOptionsHelperOptions | [interfaces/foundry.applications.handlebars.SelectOptionsHelperOptions.md](interfaces/foundry.applications.handlebars.SelectOptionsHelperOptions.md) | interface SelectOptionsHelperOptions {... |
| ServerSanitizationFields | [interfaces/foundry.packages.types.ServerSanitizationFields.md](interfaces/foundry.packages.types.ServerSanitizationFields.md) | Fields that need dedicated server-side handling. Paths are automatically relative to `system`.... |
| SettingConfig | [interfaces/foundry.types.SettingConfig.md](interfaces/foundry.types.SettingConfig.md) | A Client Setting... |
| SettingData | [interfaces/foundry.documents.types.SettingData.md](interfaces/foundry.documents.types.SettingData.md) | interface SettingData {... |
| SettingSubmenuConfig | [interfaces/foundry.types.SettingSubmenuConfig.md](interfaces/foundry.types.SettingSubmenuConfig.md) | A Client Setting Submenu... |
| ShaderTechnique | [interfaces/foundry.ShaderTechnique.md](interfaces/foundry.ShaderTechnique.md) | interface ShaderTechnique {... |
| ShareImageConfig | [interfaces/foundry.ShareImageConfig.md](interfaces/foundry.ShareImageConfig.md) | interface ShareImageConfig {... |
| SheetRegistrationDescriptor | [interfaces/foundry.SheetRegistrationDescriptor.md](interfaces/foundry.SheetRegistrationDescriptor.md) | interface SheetRegistrationDescriptor {... |
| SidebarTabDescriptor | [interfaces/foundry.SidebarTabDescriptor.md](interfaces/foundry.SidebarTabDescriptor.md) | interface SidebarTabDescriptor {... |
| SocketRequest | [interfaces/foundry.types.SocketRequest.md](interfaces/foundry.types.SocketRequest.md) | interface SocketRequest {... |
| SocketResponse | [interfaces/foundry.types.SocketResponse.md](interfaces/foundry.types.SocketResponse.md) | interface SocketResponse {... |
| SoundCreationOptions | [interfaces/foundry.audio.SoundCreationOptions.md](interfaces/foundry.audio.SoundCreationOptions.md) | interface SoundCreationOptions {... |
| SoundPlaybackOptions | [interfaces/foundry.audio.SoundPlaybackOptions.md](interfaces/foundry.audio.SoundPlaybackOptions.md) | interface SoundPlaybackOptions {... |
| SquareGridConfiguration | [interfaces/foundry.grid.types.SquareGridConfiguration.md](interfaces/foundry.grid.types.SquareGridConfiguration.md) | interface SquareGridConfiguration {... |
| StringFieldInputConfig | [interfaces/foundry.data.types.StringFieldInputConfig.md](interfaces/foundry.data.types.StringFieldInputConfig.md) | interface StringFieldInputConfig {... |
| StringFieldOptions | [interfaces/foundry.data.types.StringFieldOptions.md](interfaces/foundry.data.types.StringFieldOptions.md) | interface StringFieldOptions {... |
| StringTagsInputConfig | [interfaces/foundry.StringTagsInputConfig.md](interfaces/foundry.StringTagsInputConfig.md) | interface StringTagsInputConfig {... |
| SupportReportData | [interfaces/foundry.SupportReportData.md](interfaces/foundry.SupportReportData.md) | A bundle of metrics for Support... |
| SystemCompatibility | [interfaces/foundry.packages.types.SystemCompatibility.md](interfaces/foundry.packages.types.SystemCompatibility.md) | interface SystemCompatibility {... |
| SystemManifestData | [interfaces/foundry.packages.types.SystemManifestData.md](interfaces/foundry.packages.types.SystemManifestData.md) | The data structure for system.json.... |
| TableResultData | [interfaces/foundry.documents.types.TableResultData.md](interfaces/foundry.documents.types.TableResultData.md) | interface TableResultData {... |
| TabsConfiguration | [interfaces/foundry.TabsConfiguration.md](interfaces/foundry.TabsConfiguration.md) | interface TabsConfiguration {... |
| TextAreaInputConfig | [interfaces/foundry.applications.fields.TextAreaInputConfig.md](interfaces/foundry.applications.fields.TextAreaInputConfig.md) | interface TextAreaInputConfig {... |
| TextEditorEngineConfig | [interfaces/CONFIG.TextEditorEngineConfig.md](interfaces/CONFIG.TextEditorEngineConfig.md) | interface TextEditorEngineConfig {... |
| TextEditorEnricherConfig | [interfaces/CONFIG.TextEditorEnricherConfig.md](interfaces/CONFIG.TextEditorEnricherConfig.md) | interface TextEditorEnricherConfig {... |
| TextReplacementOptions | [interfaces/foundry.TextReplacementOptions.md](interfaces/foundry.TextReplacementOptions.md) | interface TextReplacementOptions {... |
| TextureAlphaData | [interfaces/foundry.TextureAlphaData.md](interfaces/foundry.TextureAlphaData.md) | interface TextureAlphaData {... |
| TextureBase64ExtractionOptions | [interfaces/foundry.TextureBase64ExtractionOptions.md](interfaces/foundry.TextureBase64ExtractionOptions.md) | interface TextureBase64ExtractionOptions {... |
| TextureCacheEntry | [interfaces/foundry.TextureCacheEntry.md](interfaces/foundry.TextureCacheEntry.md) | interface TextureCacheEntry {... |
| TexturePixelsExtractionOptions | [interfaces/foundry.TexturePixelsExtractionOptions.md](interfaces/foundry.TexturePixelsExtractionOptions.md) | interface TexturePixelsExtractionOptions {... |
| TileData | [interfaces/foundry.documents.types.TileData.md](interfaces/foundry.documents.types.TileData.md) | interface TileData {... |
| TileOcclusionData | [interfaces/foundry.documents.types.TileOcclusionData.md](interfaces/foundry.documents.types.TileOcclusionData.md) | interface TileOcclusionData {... |
| TileRestrictionsData | [interfaces/foundry.documents.types.TileRestrictionsData.md](interfaces/foundry.documents.types.TileRestrictionsData.md) | interface TileRestrictionsData {... |
| TileVideoData | [interfaces/foundry.documents.types.TileVideoData.md](interfaces/foundry.documents.types.TileVideoData.md) | interface TileVideoData {... |
| TimeComponents | [interfaces/foundry.data.types.TimeComponents.md](interfaces/foundry.data.types.TimeComponents.md) | A decomposition of the integer world time in seconds into component parts.... |
| ToCompendiumOptions | [interfaces/foundry.types.ToCompendiumOptions.md](interfaces/foundry.types.ToCompendiumOptions.md) | interface ToCompendiumOptions {... |
| TokenAnimationContext | [interfaces/foundry.types.TokenAnimationContext.md](interfaces/foundry.types.TokenAnimationContext.md) | interface TokenAnimationContext {... |
| TokenAnimationData | [interfaces/foundry.types.TokenAnimationData.md](interfaces/foundry.types.TokenAnimationData.md) | interface TokenAnimationData {... |
| TokenAnimationOptions | [interfaces/foundry.types.TokenAnimationOptions.md](interfaces/foundry.types.TokenAnimationOptions.md) | interface TokenAnimationOptions {... |
| TokenBarData | [interfaces/foundry.documents.types.TokenBarData.md](interfaces/foundry.documents.types.TokenBarData.md) | interface TokenBarData {... |
| TokenConstrainMovementPathOptions | [interfaces/foundry.types.TokenConstrainMovementPathOptions.md](interfaces/foundry.types.TokenConstrainMovementPathOptions.md) | interface TokenConstrainMovementPathOptions {... |
| TokenCreateTerrainMovementPathOptions | [interfaces/foundry.types.TokenCreateTerrainMovementPathOptions.md](interfaces/foundry.types.TokenCreateTerrainMovementPathOptions.md) | interface TokenCreateTerrainMovementPathOptions {... |
| TokenData | [interfaces/foundry.documents.types.TokenData.md](interfaces/foundry.documents.types.TokenData.md) | interface TokenData {... |
| TokenDetectionMode | [interfaces/foundry.documents.types.TokenDetectionMode.md](interfaces/foundry.documents.types.TokenDetectionMode.md) | interface TokenDetectionMode<[Source](#source) extends boolean = false> {... |
| TokenDragContext | [interfaces/foundry.types.TokenDragContext.md](interfaces/foundry.types.TokenDragContext.md) | interface TokenDragContext {... |
| TokenFindMovementPathJob | [interfaces/foundry.types.TokenFindMovementPathJob.md](interfaces/foundry.types.TokenFindMovementPathJob.md) | interface TokenFindMovementPathJob {... |
| TokenFindMovementPathOptions | [interfaces/foundry.types.TokenFindMovementPathOptions.md](interfaces/foundry.types.TokenFindMovementPathOptions.md) | interface TokenFindMovementPathOptions {... |
| TokenHexagonalOffsetsData | [interfaces/foundry.documents.types.TokenHexagonalOffsetsData.md](interfaces/foundry.documents.types.TokenHexagonalOffsetsData.md) | The hexagonal offsets of a Token.... |
| TokenHexagonalShapeData | [interfaces/foundry.documents.types.TokenHexagonalShapeData.md](interfaces/foundry.documents.types.TokenHexagonalShapeData.md) | The hexagonal shape of a Token.... |
| TokenMeasurableMovementWaypointData | [interfaces/foundry.documents.types.TokenMeasurableMovementWaypointData.md](interfaces/foundry.documents.types.TokenMeasurableMovementWaypointData.md) | interface TokenMeasurableMovementWaypointData {... |
| TokenMeasureMovementPathOptions | [interfaces/foundry.types.TokenMeasureMovementPathOptions.md](interfaces/foundry.types.TokenMeasureMovementPathOptions.md) | interface TokenMeasureMovementPathOptions {... |
| TokenMeasuredMovementWaypoint | [interfaces/foundry.documents.types.TokenMeasuredMovementWaypoint.md](interfaces/foundry.documents.types.TokenMeasuredMovementWaypoint.md) | interface TokenMeasuredMovementWaypoint {... |
| TokenMovementActionConfig | [interfaces/foundry.types.TokenMovementActionConfig.md](interfaces/foundry.types.TokenMovementActionConfig.md) | interface TokenMovementActionConfig {... |
| TokenMovementActionConfigDescriptor | [interfaces/foundry.types.TokenMovementActionConfigDescriptor.md](interfaces/foundry.types.TokenMovementActionConfigDescriptor.md) | interface TokenMovementActionConfigDescriptor {... |
| TokenMovementContinuationData | [interfaces/foundry.documents.types.TokenMovementContinuationData.md](interfaces/foundry.documents.types.TokenMovementContinuationData.md) | interface TokenMovementContinuationData {... |
| TokenMovementContinuationHandle | [interfaces/foundry.documents.types.TokenMovementContinuationHandle.md](interfaces/foundry.documents.types.TokenMovementContinuationHandle.md) | interface TokenMovementContinuationHandle {... |
| TokenMovementData | [interfaces/foundry.documents.types.TokenMovementData.md](interfaces/foundry.documents.types.TokenMovementData.md) | The token movement data that describes the current/last movement of the token.... |
| TokenMovementHistoryData | [interfaces/foundry.documents.types.TokenMovementHistoryData.md](interfaces/foundry.documents.types.TokenMovementHistoryData.md) | interface TokenMovementHistoryData {... |
| TokenMovementInstructionDestination | [interfaces/foundry.documents.types.TokenMovementInstructionDestination.md](interfaces/foundry.documents.types.TokenMovementInstructionDestination.md) | interface TokenMovementInstructionDestination {... |
| TokenMovementInstructionOptions | [interfaces/foundry.documents.types.TokenMovementInstructionOptions.md](interfaces/foundry.documents.types.TokenMovementInstructionOptions.md) | interface TokenMovementInstructionOptions {... |
| TokenMovementInstructionWaypoints | [interfaces/foundry.documents.types.TokenMovementInstructionWaypoints.md](interfaces/foundry.documents.types.TokenMovementInstructionWaypoints.md) | interface TokenMovementInstructionWaypoints {... |
| TokenMovementOperation | [interfaces/foundry.documents.types.TokenMovementOperation.md](interfaces/foundry.documents.types.TokenMovementOperation.md) | The (post-)movement operation data of a token movement.... |
| TokenMovementOptions | [interfaces/foundry.documents.types.TokenMovementOptions.md](interfaces/foundry.documents.types.TokenMovementOptions.md) | interface TokenMovementOptions {... |
| TokenMovementSectionData | [interfaces/foundry.documents.types.TokenMovementSectionData.md](interfaces/foundry.documents.types.TokenMovementSectionData.md) | interface TokenMovementSectionData {... |
| TokenMovementSegmentData | [interfaces/foundry.documents.types.TokenMovementSegmentData.md](interfaces/foundry.documents.types.TokenMovementSegmentData.md) | interface TokenMovementSegmentData {... |
| TokenMovementWaypoint | [interfaces/foundry.documents.types.TokenMovementWaypoint.md](interfaces/foundry.documents.types.TokenMovementWaypoint.md) | interface TokenMovementWaypoint {... |
| TokenOcclusionData | [interfaces/foundry.documents.types.TokenOcclusionData.md](interfaces/foundry.documents.types.TokenOcclusionData.md) | interface TokenOcclusionData {... |
| TokenPanningOptions | [interfaces/foundry.types.TokenPanningOptions.md](interfaces/foundry.types.TokenPanningOptions.md) | interface TokenPanningOptions {... |
| TokenPlannedMovement | [interfaces/foundry.types.TokenPlannedMovement.md](interfaces/foundry.types.TokenPlannedMovement.md) | interface TokenPlannedMovement {... |
| TokenPosition | [interfaces/foundry.documents.types.TokenPosition.md](interfaces/foundry.documents.types.TokenPosition.md) | interface TokenPosition {... |
| TokenPreMovementOperation | [interfaces/foundry.documents.types.TokenPreMovementOperation.md](interfaces/foundry.documents.types.TokenPreMovementOperation.md) | The pre-movement operation data of a token movement.... |
| TokenProcessedMovementWaypoint | [interfaces/foundry.documents.types.TokenProcessedMovementWaypoint.md](interfaces/foundry.documents.types.TokenProcessedMovementWaypoint.md) | interface TokenProcessedMovementWaypoint {... |
| TokenRegionMovementSegment | [interfaces/foundry.documents.types.TokenRegionMovementSegment.md](interfaces/foundry.documents.types.TokenRegionMovementSegment.md) | interface TokenRegionMovementSegment {... |
| TokenResizingInstruction | [interfaces/foundry.documents.types.TokenResizingInstruction.md](interfaces/foundry.documents.types.TokenResizingInstruction.md) | Resize the Token such that its center point remains (almost) unchanged. The center point might change... |
| TokenRingData | [interfaces/foundry.documents.types.TokenRingData.md](interfaces/foundry.documents.types.TokenRingData.md) | interface TokenRingData {... |
| TokenRulerData | [interfaces/foundry.types.TokenRulerData.md](interfaces/foundry.types.TokenRulerData.md) | interface TokenRulerData {... |
| TokenSightData | [interfaces/foundry.documents.types.TokenSightData.md](interfaces/foundry.documents.types.TokenSightData.md) | interface TokenSightData {... |
| ToolclipConfiguration | [interfaces/foundry.ToolclipConfiguration.md](interfaces/foundry.ToolclipConfiguration.md) | interface ToolclipConfiguration {... |
| ToolclipConfigurationItem | [interfaces/foundry.ToolclipConfigurationItem.md](interfaces/foundry.ToolclipConfigurationItem.md) | interface ToolclipConfigurationItem {... |
| TourConfig | [interfaces/foundry.TourConfig.md](interfaces/foundry.TourConfig.md) | Tour configuration data... |
| TourStep | [interfaces/foundry.TourStep.md](interfaces/foundry.TourStep.md) | A step in a Tour... |
| TrackedAttributesDescription | [interfaces/foundry.documents.types.TrackedAttributesDescription.md](interfaces/foundry.documents.types.TrackedAttributesDescription.md) | interface TrackedAttributesDescription {... |
| TurnMarkerAnimationConfigData | [interfaces/foundry.TurnMarkerAnimationConfigData.md](interfaces/foundry.TurnMarkerAnimationConfigData.md) | The turn marker config data.... |
| TurnMarkerAnimationData | [interfaces/foundry.TurnMarkerAnimationData.md](interfaces/foundry.TurnMarkerAnimationData.md) | The turn marker animation data.... |
| UsabilityIssue | [interfaces/foundry.UsabilityIssue.md](interfaces/foundry.UsabilityIssue.md) | interface UsabilityIssue {... |
| UserData | [interfaces/foundry.documents.types.UserData.md](interfaces/foundry.documents.types.UserData.md) | interface UserData {... |
| VFXBasePathPoint | [interfaces/foundry.VFXBasePathPoint.md](interfaces/foundry.VFXBasePathPoint.md) | interface VFXBasePathPoint {... |
| VFXComponentAnimation | [interfaces/foundry.VFXComponentAnimation.md](interfaces/foundry.VFXComponentAnimation.md) | interface VFXComponentAnimation {... |
| VFXComponentData | [interfaces/foundry.VFXComponentData.md](interfaces/foundry.VFXComponentData.md) | interface VFXComponentData {... |
| VFXEffectData | [interfaces/foundry.VFXEffectData.md](interfaces/foundry.VFXEffectData.md) | interface VFXEffectData {... |
| VFXParticleGeneratorData | [interfaces/foundry.VFXParticleGeneratorData.md](interfaces/foundry.VFXParticleGeneratorData.md) | interface VFXParticleGeneratorData {... |
| VFXPositionalSoundData | [interfaces/foundry.VFXPositionalSoundData.md](interfaces/foundry.VFXPositionalSoundData.md) | interface VFXPositionalSoundData {... |
| VFXScrollingTextData | [interfaces/foundry.VFXScrollingTextData.md](interfaces/foundry.VFXScrollingTextData.md) | interface VFXScrollingTextData {... |
| VFXShakeData | [interfaces/foundry.VFXShakeData.md](interfaces/foundry.VFXShakeData.md) | interface VFXShakeData {... |
| VFXSingleAttackPathTypeData | [interfaces/foundry.VFXSingleAttackPathTypeData.md](interfaces/foundry.VFXSingleAttackPathTypeData.md) | interface VFXSingleAttackPathTypeData {... |
| VFXSingleAttackStep | [interfaces/foundry.VFXSingleAttackStep.md](interfaces/foundry.VFXSingleAttackStep.md) | interface VFXSingleAttackStep {... |
| VFXSingleImpactData | [interfaces/foundry.VFXSingleImpactData.md](interfaces/foundry.VFXSingleImpactData.md) | interface VFXSingleImpactData {... |
| VFXTimelineSequenceEntry | [interfaces/foundry.VFXTimelineSequenceEntry.md](interfaces/foundry.VFXTimelineSequenceEntry.md) | interface VFXTimelineSequenceEntry {... |
| VisionSourceData | [interfaces/foundry.canvas.sources.types.VisionSourceData.md](interfaces/foundry.canvas.sources.types.VisionSourceData.md) | interface VisionSourceData {... |
| WallData | [interfaces/foundry.documents.types.WallData.md](interfaces/foundry.documents.types.WallData.md) | interface WallData {... |
| WallDoorAnimationConfig | [interfaces/CONFIG.WallDoorAnimationConfig.md](interfaces/CONFIG.WallDoorAnimationConfig.md) | interface WallDoorAnimationConfig {... |
| WallDoorSound | [interfaces/CONFIG.WallDoorSound.md](interfaces/CONFIG.WallDoorSound.md) | interface WallDoorSound {... |
| WallThresholdData | [interfaces/foundry.documents.types.WallThresholdData.md](interfaces/foundry.documents.types.WallThresholdData.md) | interface WallThresholdData {... |
| WeatherAmbienceConfiguration | [interfaces/CONFIG.WeatherAmbienceConfiguration.md](interfaces/CONFIG.WeatherAmbienceConfiguration.md) | Available Weather Effects implementations... |
| WeatherEffectConfiguration | [interfaces/CONFIG.WeatherEffectConfiguration.md](interfaces/CONFIG.WeatherEffectConfiguration.md) | interface WeatherEffectConfiguration {... |
| WeatherOcclusionMaskConfiguration | [interfaces/foundry.WeatherOcclusionMaskConfiguration.md](interfaces/foundry.WeatherOcclusionMaskConfiguration.md) | interface WeatherOcclusionMaskConfiguration {... |
| WeatherTerrainMaskConfiguration | [interfaces/foundry.WeatherTerrainMaskConfiguration.md](interfaces/foundry.WeatherTerrainMaskConfiguration.md) | interface WeatherTerrainMaskConfiguration {... |
| WordTreeEntry | [interfaces/foundry.utils.types.WordTreeEntry.md](interfaces/foundry.utils.types.WordTreeEntry.md) | A leaf entry in the tree.... |
| WorldCompendiumPackConfiguration | [interfaces/foundry.types.WorldCompendiumPackConfiguration.md](interfaces/foundry.types.WorldCompendiumPackConfiguration.md) | interface WorldCompendiumPackConfiguration {... |
| WorldConfigOptions | [interfaces/foundry.WorldConfigOptions.md](interfaces/foundry.WorldConfigOptions.md) | interface WorldConfigOptions {... |
| WorldManifestData | [interfaces/foundry.packages.types.WorldManifestData.md](interfaces/foundry.packages.types.WorldManifestData.md) | The data structure for world.json.... |
| _ApplicationHeaderControlsEntry | [interfaces/foundry.applications.types._ApplicationHeaderControlsEntry.md](interfaces/foundry.applications.types._ApplicationHeaderControlsEntry.md) | interface \_ApplicationHeaderControlsEntry {... |
| _ArrayFieldOptions | [interfaces/foundry.data.types._ArrayFieldOptions.md](interfaces/foundry.data.types._ArrayFieldOptions.md) | interface \_ArrayFieldOptions {... |
| _CameraPopoutConfiguration | [interfaces/foundry._CameraPopoutConfiguration.md](interfaces/foundry._CameraPopoutConfiguration.md) | interface \_CameraPopoutConfiguration {... |
| _CanvasAnimationData | [interfaces/foundry.canvas.animation.types._CanvasAnimationData.md](interfaces/foundry.canvas.animation.types._CanvasAnimationData.md) | interface \_CanvasAnimationData {... |
| _CanvasDimensions | [interfaces/foundry.types._CanvasDimensions.md](interfaces/foundry.types._CanvasDimensions.md) | interface \_CanvasDimensions {... |
| _CanvasVisionContainer | [interfaces/foundry.canvas.layers.types._CanvasVisionContainer.md](interfaces/foundry.canvas.layers.types._CanvasVisionContainer.md) | interface \_CanvasVisionContainer {... |
| _CanvasVisionContainerDarkness | [interfaces/foundry.canvas.layers.types._CanvasVisionContainerDarkness.md](interfaces/foundry.canvas.layers.types._CanvasVisionContainerDarkness.md) | interface \_CanvasVisionContainerDarkness {... |
| _CanvasVisionContainerLight | [interfaces/foundry.canvas.layers.types._CanvasVisionContainerLight.md](interfaces/foundry.canvas.layers.types._CanvasVisionContainerLight.md) | interface \_CanvasVisionContainerLight {... |
| _CanvasVisionContainerSight | [interfaces/foundry.canvas.layers.types._CanvasVisionContainerSight.md](interfaces/foundry.canvas.layers.types._CanvasVisionContainerSight.md) | interface \_CanvasVisionContainerSight {... |
| _ClockwiseSweepPolygonConfig | [interfaces/foundry.canvas.geometry.types._ClockwiseSweepPolygonConfig.md](interfaces/foundry.canvas.geometry.types._ClockwiseSweepPolygonConfig.md) | interface \_ClockwiseSweepPolygonConfig {... |
| _DataModelConstructionOptions | [interfaces/foundry.abstract.types._DataModelConstructionOptions.md](interfaces/foundry.abstract.types._DataModelConstructionOptions.md) | interface \_DataModelConstructionOptions {... |
| _DocumentConstructionContext | [interfaces/foundry.abstract.types._DocumentConstructionContext.md](interfaces/foundry.abstract.types._DocumentConstructionContext.md) | interface \_DocumentConstructionContext {... |
| _DocumentDirectoryConfiguration | [interfaces/foundry._DocumentDirectoryConfiguration.md](interfaces/foundry._DocumentDirectoryConfiguration.md) | interface \_DocumentDirectoryConfiguration {... |
| _DocumentUUIDFieldOptions | [interfaces/foundry.data.types._DocumentUUIDFieldOptions.md](interfaces/foundry.data.types._DocumentUUIDFieldOptions.md) | interface \_DocumentUUIDFieldOptions {... |
| _FilePathFieldOptions | [interfaces/foundry.data.types._FilePathFieldOptions.md](interfaces/foundry.data.types._FilePathFieldOptions.md) | interface \_FilePathFieldOptions {... |
| _FilterMenuOptions | [interfaces/foundry._FilterMenuOptions.md](interfaces/foundry._FilterMenuOptions.md) | interface \_FilterMenuOptions {... |
| _FontDefinition | [interfaces/CONFIG._FontDefinition.md](interfaces/CONFIG._FontDefinition.md) | interface \_FontDefinition {... |
| _GlobalLightData | [interfaces/foundry.documents.types._GlobalLightData.md](interfaces/foundry.documents.types._GlobalLightData.md) | interface \_GlobalLightData {... |
| _JavaScriptFieldOptions | [interfaces/foundry.data.types._JavaScriptFieldOptions.md](interfaces/foundry.data.types._JavaScriptFieldOptions.md) | interface \_JavaScriptFieldOptions {... |
| _ModuleManifestData | [interfaces/foundry.packages.types._ModuleManifestData.md](interfaces/foundry.packages.types._ModuleManifestData.md) | Manifest properties exclusive to modules.... |
| _PlaceablePaletteConfiguration | [interfaces/foundry.applications.types._PlaceablePaletteConfiguration.md](interfaces/foundry.applications.types._PlaceablePaletteConfiguration.md) | interface \_PlaceablePaletteConfiguration {... |
| _PlaceablePaletteRenderOptions | [interfaces/foundry.applications.types._PlaceablePaletteRenderOptions.md](interfaces/foundry.applications.types._PlaceablePaletteRenderOptions.md) | interface \_PlaceablePaletteRenderOptions {... |
| _PlaceableTabConfiguration | [interfaces/foundry._PlaceableTabConfiguration.md](interfaces/foundry._PlaceableTabConfiguration.md) | interface \_PlaceableTabConfiguration {... |
| _PlaylistDirectoryRenderContext | [interfaces/foundry._PlaylistDirectoryRenderContext.md](interfaces/foundry._PlaylistDirectoryRenderContext.md) | interface \_PlaylistDirectoryRenderContext {... |
| _ProseMirrorDropDownEntry | [interfaces/foundry.prosemirror.types._ProseMirrorDropDownEntry.md](interfaces/foundry.prosemirror.types._ProseMirrorDropDownEntry.md) | interface \_ProseMirrorDropDownEntry {... |
| _PulsePingOptions | [interfaces/foundry.canvas.interaction.types._PulsePingOptions.md](interfaces/foundry.canvas.interaction.types._PulsePingOptions.md) | interface \_PulsePingOptions {... |
| _RollTableHTMLEmbedConfig | [interfaces/foundry.types._RollTableHTMLEmbedConfig.md](interfaces/foundry.types._RollTableHTMLEmbedConfig.md) | interface \_RollTableHTMLEmbedConfig {... |
| _SceneControlsRenderOptions | [interfaces/foundry._SceneControlsRenderOptions.md](interfaces/foundry._SceneControlsRenderOptions.md) | interface \_SceneControlsRenderOptions {... |
| _StatusEffectConfig | [interfaces/CONFIG._StatusEffectConfig.md](interfaces/CONFIG._StatusEffectConfig.md) | interface \_StatusEffectConfig {... |
| _SystemManifestData | [interfaces/foundry.packages.types._SystemManifestData.md](interfaces/foundry.packages.types._SystemManifestData.md) | Manifest properties exclusive to systems.... |
| _TokenRulerWaypoint | [interfaces/foundry.types._TokenRulerWaypoint.md](interfaces/foundry.types._TokenRulerWaypoint.md) | interface \_TokenRulerWaypoint {... |
| _TypedObjectFieldOptions | [interfaces/foundry.data.types._TypedObjectFieldOptions.md](interfaces/foundry.data.types._TypedObjectFieldOptions.md) | interface \_TypedObjectFieldOptions {... |
| _VFXPositionalSoundData | [interfaces/foundry._VFXPositionalSoundData.md](interfaces/foundry._VFXPositionalSoundData.md) | interface \_VFXPositionalSoundData {... |
| _VFXSingleAttackData | [interfaces/foundry._VFXSingleAttackData.md](interfaces/foundry._VFXSingleAttackData.md) | interface \_VFXSingleAttackData {... |
| _WorldManifestData | [interfaces/foundry.packages.types._WorldManifestData.md](interfaces/foundry.packages.types._WorldManifestData.md) | Manifest properties exclusive to worlds.... |

## Modules

| Title | File | Description |
|-------|------|-------------|
| Array | [modules/primitives.Array.md](modules/primitives.Array.md) | [deepFlatten](../functions/primitives.Array.deepFlatten.md)... |
| BLEND_MODES | [modules/foundry.canvas.rendering.BLEND_MODES.md](modules/foundry.canvas.rendering.BLEND_MODES.md) | [MAX\_COLOR](../variables/foundry.canvas.rendering.BLEND_MODES.MAX_COLOR.md)... |
| CONFIG | [modules/CONFIG.md](modules/CONFIG.md) | Runtime configuration settings for Foundry VTT which exposes a large number of variables which determine how... |
| CONST | [modules/CONST.md](modules/CONST.md) | Constant definitions used throughout the Foundry Virtual Tabletop framework.... |
| Date | [modules/primitives.Date.md](modules/primitives.Date.md) | [isValid](../functions/primitives.Date.isValid.md)... |
| Dice | [modules/CONFIG.Dice.md](modules/CONFIG.Dice.md) | Configuration for dice rolling behaviors in the Foundry Virtual Tabletop client.... |
| Math | [modules/primitives.Math.md](modules/primitives.Math.md) | [SQRT1\_3](../variables/primitives.Math.SQRT1_3.md)... |
| Number | [modules/primitives.Number.md](modules/primitives.Number.md) | [almostEqual](../functions/primitives.Number.almostEqual.md)... |
| Set | [modules/primitives.Set.md](modules/primitives.Set.md) | [equals](../functions/primitives.Set.equals.md)... |
| String | [modules/primitives.String.md](modules/primitives.String.md) | [capitalize](../functions/primitives.String.capitalize.md)... |
| abstract | [modules/foundry.abstract.md](modules/foundry.abstract.md) | Abstract class definitions for fundamental concepts used throughout the Foundry Virtual Tabletop framework.... |
| abstract | [modules/foundry.documents.abstract.md](modules/foundry.documents.abstract.md) | [DocumentCollection](../classes/foundry.documents.abstract.DocumentCollection.md)... |
| animation | [modules/foundry.canvas.animation.md](modules/foundry.canvas.animation.md) | [types](foundry.canvas.animation.types.md)... |
| api | [modules/foundry.applications.api.md](modules/foundry.applications.api.md) | [ApplicationV2](../classes/foundry.applications.api.ApplicationV2.md)... |
| api | [modules/foundry.appv1.api.md](modules/foundry.appv1.api.md) | [Application](../classes/foundry.appv1.api.Application.md)... |
| applications | [modules/foundry.applications.md](modules/foundry.applications.md) | A library for rendering and managing HTML user interface elements within the Foundry Virtual Tabletop game client.... |
| apps | [modules/foundry.applications.apps.md](modules/foundry.applications.apps.md) | [av](foundry.applications.apps.av.md)... |
| apps | [modules/foundry.applications.sidebar.apps.md](modules/foundry.applications.sidebar.apps.md) | [ChatPopout](../classes/foundry.applications.sidebar.apps.ChatPopout.md)... |
| appv1 | [modules/foundry.appv1.md](modules/foundry.appv1.md) | A library for legacy ApplicationV1 classes and helpers.... |
| audio | [modules/foundry.audio.md](modules/foundry.audio.md) | A library for controlling audio playback within the Foundry Virtual Tabletop game client.... |
| av | [modules/foundry.applications.apps.av.md](modules/foundry.applications.apps.av.md) | [CameraPopout](../classes/foundry.applications.apps.av.CameraPopout.md)... |
| av | [modules/foundry.av.md](modules/foundry.av.md) | Audio/video over WebRTC.... |
| batching | [modules/foundry.canvas.rendering.batching.md](modules/foundry.canvas.rendering.batching.md) | [BatchRenderer](../classes/foundry.canvas.rendering.batching.BatchRenderer.md)... |
| borders | [modules/foundry.canvas.borders.md](modules/foundry.canvas.borders.md) | [drawBorder](../functions/foundry.canvas.borders.drawBorder.md)... |
| canvas | [modules/foundry.canvas.md](modules/foundry.canvas.md) | A submodule defining concepts related to canvas rendering.... |
| clients | [modules/foundry.av.clients.md](modules/foundry.av.clients.md) | [SimplePeerAVClient](../classes/foundry.av.clients.SimplePeerAVClient.md)... |
| collections | [modules/foundry.documents.collections.md](modules/foundry.documents.collections.md) | [Actors](../classes/foundry.documents.collections.Actors.md)... |
| common/prosemirror/chat/_module | [modules/foundry.common_prosemirror_chat__module.md](modules/foundry.common_prosemirror_chat__module.md) | [ChatInputPlugin](../classes/foundry.common_prosemirror_chat__module.ChatInputPlugin.md)... |
| components | [modules/foundry.canvas.vfx.components.md](modules/foundry.canvas.vfx.components.md) | [VFXParticleGeneratorComponent](../classes/foundry.canvas.vfx.components.VFXParticleGeneratorComponent.md)... |
| config | [modules/foundry.config.md](modules/foundry.config.md) | Application configuration options... |
| constants | [modules/foundry.canvas.vfx.constants.md](modules/foundry.canvas.vfx.constants.md) | [SOUND\_ALIGNMENT](../enums/foundry.canvas.vfx.constants.SOUND_ALIGNMENT.md)... |
| containers | [modules/foundry.canvas.containers.md](modules/foundry.canvas.containers.md) | [types](foundry.canvas.containers.types.md)... |
| data | [modules/foundry.data.md](modules/foundry.data.md) | A module which defines data architecture components.... |
| dice | [modules/foundry.applications.dice.md](modules/foundry.applications.dice.md) | [RollResolver](../classes/foundry.applications.dice.RollResolver.md)... |
| dice | [modules/foundry.dice.md](modules/foundry.dice.md) | A module for parsing and executing dice roll syntax.... |
| documents | [modules/foundry.documents.md](modules/foundry.documents.md) | Document definitions used throughout the Foundry Virtual Tabletop framework.... |
| drawings | [modules/foundry.canvas.placeables.drawings.md](modules/foundry.canvas.placeables.drawings.md) | [DrawingShapeControls](../classes/foundry.canvas.placeables.drawings.DrawingShapeControls.md)... |
| edges | [modules/foundry.canvas.geometry.edges.md](modules/foundry.canvas.geometry.edges.md) | [CanvasEdges](../classes/foundry.canvas.geometry.edges.CanvasEdges.md)... |
| elements | [modules/foundry.applications.elements.md](modules/foundry.applications.elements.md) | Custom HTMLElement implementations for use in template rendering.... |
| extensions | [modules/foundry.canvas.extensions.md](modules/foundry.canvas.extensions.md) | [extendPIXICircle](../functions/foundry.canvas.extensions.extendPIXICircle.md)... |
| fields | [modules/foundry.applications.fields.md](modules/foundry.applications.fields.md) | [EditorInputConfig](../interfaces/foundry.applications.fields.EditorInputConfig.md)... |
| fields | [modules/foundry.canvas.vfx.fields.md](modules/foundry.canvas.vfx.fields.md) | [VFXPointField](../classes/foundry.canvas.vfx.fields.VFXPointField.md)... |
| fields | [modules/foundry.data.fields.md](modules/foundry.data.fields.md) | [AlphaField](../classes/foundry.data.fields.AlphaField.md)... |
| filters | [modules/foundry.applications.sidebar.filters.md](modules/foundry.applications.sidebar.filters.md) | [AmbientLightFilter](../classes/foundry.applications.sidebar.filters.AmbientLightFilter.md)... |
| filters | [modules/foundry.canvas.rendering.filters.md](modules/foundry.canvas.rendering.filters.md) | [types](foundry.canvas.rendering.filters.types.md)... |
| foundry | [modules/foundry.md](modules/foundry.md) | The Foundry Virtual Tabletop client-side ESModule API.... |
| geometry | [modules/foundry.canvas.geometry.md](modules/foundry.canvas.geometry.md) | [edges](foundry.canvas.geometry.edges.md)... |
| grid | [modules/foundry.grid.md](modules/foundry.grid.md) | Grid classes.... |
| groups | [modules/foundry.canvas.groups.md](modules/foundry.canvas.groups.md) | [CanvasVisibility](../classes/foundry.canvas.groups.CanvasVisibility.md)... |
| handlebars | [modules/foundry.applications.handlebars.md](modules/foundry.applications.handlebars.md) | Additional information on Handlebars inside of Foundry.... |
| helpers | [modules/foundry.helpers.md](modules/foundry.helpers.md) | A submodule containing core helper classes.... |
| hookEvents | [modules/hookEvents.md](modules/hookEvents.md) | A module which provides documentation for the various hook events which are dispatched throughout the Foundry Virtual... |
| hud | [modules/foundry.applications.hud.md](modules/foundry.applications.hud.md) | [BasePlaceableHUD](../classes/foundry.applications.hud.BasePlaceableHUD.md)... |
| interaction | [modules/foundry.canvas.interaction.md](modules/foundry.canvas.interaction.md) | [types](foundry.canvas.interaction.types.md)... |
| interaction | [modules/foundry.helpers.interaction.md](modules/foundry.helpers.interaction.md) | [ClientKeybindings](../classes/foundry.helpers.interaction.ClientKeybindings.md)... |
| journal | [modules/foundry.applications.sheets.journal.md](modules/foundry.applications.sheets.journal.md) | [JournalEntryCategoryConfig](../classes/foundry.applications.sheets.journal.JournalEntryCategoryConfig.md)... |
| layers | [modules/foundry.canvas.layers.md](modules/foundry.canvas.layers.md) | [types](foundry.canvas.layers.types.md)... |
| lights | [modules/foundry.canvas.placeables.lights.md](modules/foundry.canvas.placeables.lights.md) | [AmbientLightShapeControls](../classes/foundry.canvas.placeables.lights.AmbientLightShapeControls.md)... |
| media | [modules/foundry.helpers.media.md](modules/foundry.helpers.media.md) | [CompendiumArt](../classes/foundry.helpers.media.CompendiumArt.md)... |
| menus | [modules/foundry.applications.settings.menus.md](modules/foundry.applications.settings.menus.md) | [AVConfig](../classes/foundry.applications.settings.menus.AVConfig.md)... |
| mixins | [modules/foundry.canvas.rendering.mixins.md](modules/foundry.canvas.rendering.mixins.md) | [AdaptiveFragmentChannelMixin](../functions/foundry.canvas.rendering.mixins.AdaptiveFragmentChannelMixin.md)... |
| nue | [modules/foundry.nue.md](modules/foundry.nue.md) | A module containing utilities and tools for improving new user experience.... |
| operators | [modules/foundry.data.operators.md](modules/foundry.data.operators.md) | [DataFieldOperator](../classes/foundry.data.operators.DataFieldOperator.md)... |
| packages | [modules/foundry.packages.md](modules/foundry.packages.md) | Package data definitions, validations, and schema.... |
| palette | [modules/foundry.applications.sheets.palette.md](modules/foundry.applications.sheets.palette.md) | [AmbientLightPalette](../classes/foundry.applications.sheets.palette.AmbientLightPalette.md)... |
| perception | [modules/foundry.canvas.perception.md](modules/foundry.canvas.perception.md) | [types](foundry.canvas.perception.types.md)... |
| placeables | [modules/foundry.canvas.placeables.md](modules/foundry.canvas.placeables.md) | [drawings](foundry.canvas.placeables.drawings.md)... |
| primary | [modules/foundry.canvas.primary.md](modules/foundry.canvas.primary.md) | [PrimaryCanvasContainer](../classes/foundry.canvas.primary.PrimaryCanvasContainer.md)... |
| primitives | [modules/primitives.md](modules/primitives.md) | [Array](primitives.Array.md)... |
| prosemirror | [modules/foundry.prosemirror.md](modules/foundry.prosemirror.md) | A library for providing rich text editing using ProseMirror within the Foundry Virtual Tabletop game client.... |
| regionBehaviors | [modules/foundry.data.regionBehaviors.md](modules/foundry.data.regionBehaviors.md) | [AdjustDarknessLevelRegionBehaviorType](../classes/foundry.data.regionBehaviors.AdjustDarknessLevelRegionBehaviorType.md)... |
| regions | [modules/foundry.canvas.placeables.regions.md](modules/foundry.canvas.placeables.regions.md) | [RegionGeometry](../classes/foundry.canvas.placeables.regions.RegionGeometry.md)... |
| rendering | [modules/foundry.canvas.rendering.md](modules/foundry.canvas.rendering.md) | [batching](foundry.canvas.rendering.batching.md)... |
| settings | [modules/foundry.applications.settings.md](modules/foundry.applications.settings.md) | [menus](foundry.applications.settings.menus.md)... |
| shaders | [modules/foundry.canvas.rendering.shaders.md](modules/foundry.canvas.rendering.shaders.md) | [types](foundry.canvas.rendering.shaders.types.md)... |
| sheets | [modules/foundry.applications.sheets.md](modules/foundry.applications.sheets.md) | Additional information on Document Sheets inside of Foundry.... |
| sheets | [modules/foundry.appv1.sheets.md](modules/foundry.appv1.sheets.md) | [ActorSheet](../classes/foundry.appv1.sheets.ActorSheet.md)... |
| sidebar | [modules/foundry.applications.sidebar.md](modules/foundry.applications.sidebar.md) | [apps](foundry.applications.sidebar.apps.md)... |
| sounds | [modules/foundry.canvas.placeables.sounds.md](modules/foundry.canvas.placeables.sounds.md) | [AmbientSoundShapeControls](../classes/foundry.canvas.placeables.sounds.AmbientSoundShapeControls.md)... |
| sources | [modules/foundry.canvas.sources.md](modules/foundry.canvas.sources.md) | [types](foundry.canvas.sources.types.md)... |
| tabs | [modules/foundry.applications.sidebar.tabs.md](modules/foundry.applications.sidebar.tabs.md) | [ActorDirectory](../classes/foundry.applications.sidebar.tabs.ActorDirectory.md)... |
| terms | [modules/foundry.dice.terms.md](modules/foundry.dice.terms.md) | [Coin](../classes/foundry.dice.terms.Coin.md)... |
| tokens | [modules/foundry.canvas.placeables.tokens.md](modules/foundry.canvas.placeables.tokens.md) | [BaseTokenRuler](../classes/foundry.canvas.placeables.tokens.BaseTokenRuler.md)... |
| tours | [modules/foundry.nue.tours.md](modules/foundry.nue.tours.md) | [CanvasTour](../classes/foundry.nue.tours.CanvasTour.md)... |
| types | [modules/foundry.abstract.types.md](modules/foundry.abstract.types.md) | [\_DataModelConstructionOptions](../interfaces/foundry.abstract.types._DataModelConstructionOptions.md)... |
| types | [modules/foundry.applications.types.md](modules/foundry.applications.types.md) | [\_ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types._ApplicationHeaderControlsEntry.md)... |
| types | [modules/foundry.canvas.containers.types.md](modules/foundry.canvas.containers.types.md) | [GridMeshData](../interfaces/foundry.canvas.containers.types.GridMeshData.md)... |
| types | [modules/foundry.canvas.geometry.types.md](modules/foundry.canvas.geometry.types.md) | [\_ClockwiseSweepPolygonConfig](../interfaces/foundry.canvas.geometry.types._ClockwiseSweepPolygonConfig.md)... |
| types | [modules/foundry.canvas.animation.types.md](modules/foundry.canvas.animation.types.md) | [\_CanvasAnimationData](../interfaces/foundry.canvas.animation.types._CanvasAnimationData.md)... |
| types | [modules/foundry.canvas.perception.types.md](modules/foundry.canvas.perception.types.md) | [LightingVisibility](../types/foundry.canvas.perception.types.LightingVisibility.md)... |
| types | [modules/foundry.canvas.layers.types.md](modules/foundry.canvas.layers.types.md) | [\_CanvasVisionContainer](../interfaces/foundry.canvas.layers.types._CanvasVisionContainer.md)... |
| types | [modules/foundry.canvas.interaction.types.md](modules/foundry.canvas.interaction.types.md) | [\_PulsePingOptions](../interfaces/foundry.canvas.interaction.types._PulsePingOptions.md)... |
| types | [modules/foundry.canvas.placeables.types.md](modules/foundry.canvas.placeables.types.md) | [RegionAnimationState](../interfaces/foundry.canvas.placeables.types.RegionAnimationState.md)... |
| types | [modules/foundry.canvas.rendering.filters.types.md](modules/foundry.canvas.rendering.filters.types.md) | [SMAAFilterConfig](../interfaces/foundry.canvas.rendering.filters.types.SMAAFilterConfig.md)... |
| types | [modules/foundry.canvas.rendering.shaders.types.md](modules/foundry.canvas.rendering.shaders.types.md) | [DepthBatchData](../interfaces/foundry.canvas.rendering.shaders.types.DepthBatchData.md)... |
| types | [modules/foundry.canvas.sources.types.md](modules/foundry.canvas.sources.types.md) | [BaseEffectSourceData](../interfaces/foundry.canvas.sources.types.BaseEffectSourceData.md)... |
| types | [modules/foundry.canvas.types.md](modules/foundry.canvas.types.md) | [KTX2Header](../interfaces/foundry.canvas.types.KTX2Header.md)... |
| types | [modules/foundry.data.types.md](modules/foundry.data.types.md) | [\_ArrayFieldOptions](../interfaces/foundry.data.types._ArrayFieldOptions.md)... |
| types | [modules/foundry.helpers.types.md](modules/foundry.helpers.types.md) | [CompendiumArtDescriptor](../interfaces/foundry.helpers.types.CompendiumArtDescriptor.md)... |
| types | [modules/foundry.grid.types.md](modules/foundry.grid.types.md) | [GridConfiguration](../interfaces/foundry.grid.types.GridConfiguration.md)... |
| types | [modules/foundry.documents.types.md](modules/foundry.documents.types.md) | [\_GlobalLightData](../interfaces/foundry.documents.types._GlobalLightData.md)... |
| types | [modules/foundry.prosemirror.types.md](modules/foundry.prosemirror.types.md) | [\_ProseMirrorDropDownEntry](../interfaces/foundry.prosemirror.types._ProseMirrorDropDownEntry.md)... |
| types | [modules/foundry.packages.types.md](modules/foundry.packages.types.md) | [\_ModuleManifestData](../interfaces/foundry.packages.types._ModuleManifestData.md)... |
| types | [modules/foundry.utils.types.md](modules/foundry.utils.types.md) | [IterableWeakMapHeldValue](../interfaces/foundry.utils.types.IterableWeakMapHeldValue.md)... |
| types | [modules/foundry.types.md](modules/foundry.types.md) | Client/shared importable types.... |
| ui | [modules/foundry.applications.ui.md](modules/foundry.applications.ui.md) | [GamePause](../classes/foundry.applications.ui.GamePause.md)... |
| utils | [modules/foundry.canvas.vfx.utils.md](modules/foundry.canvas.vfx.utils.md) | [generateHermiteSegment](../functions/foundry.canvas.vfx.utils.generateHermiteSegment.md)... |
| utils | [modules/foundry.utils.md](modules/foundry.utils.md) | Utility functions providing helpful functionality.... |
| ux | [modules/foundry.applications.ux.md](modules/foundry.applications.ux.md) | [Autocomplete](../classes/foundry.applications.ux.Autocomplete.md)... |
| validation | [modules/foundry.data.validation.md](modules/foundry.data.validation.md) | [DataModelValidationError](../classes/foundry.data.validation.DataModelValidationError.md)... |
| validators | [modules/foundry.data.validators.md](modules/foundry.data.validators.md) | [hasFileExtension](../functions/foundry.data.validators.hasFileExtension.md)... |
| vfx | [modules/foundry.canvas.vfx.md](modules/foundry.canvas.vfx.md) | Custom documentation about the VFX Framework.... |
| workers | [modules/foundry.canvas.workers.md](modules/foundry.canvas.workers.md) | [TextureCompressor](../classes/foundry.canvas.workers.TextureCompressor.md)... |

## Types

| Title | File | Description |
|-------|------|-------------|
| ActiveEffectChangeHandler | [types/foundry.documents.types.ActiveEffectChangeHandler.md](types/foundry.documents.types.ActiveEffectChangeHandler.md) | ActiveEffectChangeHandler: (... |
| ActiveEffectChangeRenderer | [types/foundry.documents.types.ActiveEffectChangeRenderer.md](types/foundry.documents.types.ActiveEffectChangeRenderer.md) | ActiveEffectChangeRenderer: (... |
| ActiveEffectDurationUnit | [types/CONST.ActiveEffectDurationUnit.md](types/CONST.ActiveEffectDurationUnit.md) | ActiveEffectDurationUnit: typeof [ACTIVE\_EFFECT\_DURATION\_UNITS](../variables/CONST.ACTIVE_EFFECT_DURATION_UNITS.md)[number]... |
| AdventurePostImportCallback | [types/foundry.documents.types.AdventurePostImportCallback.md](types/foundry.documents.types.AdventurePostImportCallback.md) | AdventurePostImportCallback: (... |
| AdventurePreImportCallback | [types/foundry.documents.types.AdventurePreImportCallback.md](types/foundry.documents.types.AdventurePreImportCallback.md) | AdventurePreImportCallback: (... |
| ApplicationClickAction | [types/foundry.applications.types.ApplicationClickAction.md](types/foundry.applications.types.ApplicationClickAction.md) | ApplicationClickAction: (... |
| ApplicationFormSubmission | [types/foundry.applications.types.ApplicationFormSubmission.md](types/foundry.applications.types.ApplicationFormSubmission.md) | ApplicationFormSubmission: (... |
| ApplicationHeaderControlsEntry | [types/foundry.applications.types.ApplicationHeaderControlsEntry.md](types/foundry.applications.types.ApplicationHeaderControlsEntry.md) | ApplicationHeaderControlsEntry: [ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.md) & [\_ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types._ApplicationHeaderControlsEn... |
| ApplicationV1HeaderButton | [types/foundry.ApplicationV1HeaderButton.md](types/foundry.ApplicationV1HeaderButton.md) | ApplicationV1HeaderButton: {... |
| ArrayFieldOptions | [types/foundry.data.types.ArrayFieldOptions.md](types/foundry.data.types.ArrayFieldOptions.md) | ArrayFieldOptions: [DataFieldOptions](../interfaces/foundry.data.types.DataFieldOptions.md) & [\_ArrayFieldOptions](../interfaces/foundry.data.types._ArrayFieldOptions.md)... |
| AutocompleteCallback | [types/foundry.AutocompleteCallback.md](types/foundry.AutocompleteCallback.md) | AutocompleteCallback: (... |
| BandName | [types/foundry.audio.BandName.md](types/foundry.audio.BandName.md) | BandName: "bass" \| "mid" \| "treble" \| "all"... |
| Builtin | [types/foundry.types.Builtin.md](types/foundry.types.Builtin.md) | Builtin:... |
| BuiltinType | [types/foundry.types.BuiltinType.md](types/foundry.types.BuiltinType.md) | BuiltinType:... |
| CameraPopoutConfiguration | [types/foundry.CameraPopoutConfiguration.md](types/foundry.CameraPopoutConfiguration.md) | CameraPopoutConfiguration: [ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md) & [\_CameraPopoutConfiguration](../interfaces/foundry._CameraPopoutConfigura... |
| CanvasAnimationData | [types/foundry.canvas.animation.types.CanvasAnimationData.md](types/foundry.canvas.animation.types.CanvasAnimationData.md) | CanvasAnimationData: [\_CanvasAnimationData](../interfaces/foundry.canvas.animation.types._CanvasAnimationData.md) & [CanvasAnimationOptions](../interfaces/foundry.canvas.animation.types.CanvasAnimati... |
| CanvasAnimationEasingFunction | [types/foundry.canvas.animation.types.CanvasAnimationEasingFunction.md](types/foundry.canvas.animation.types.CanvasAnimationEasingFunction.md) | CanvasAnimationEasingFunction:... |
| CanvasDimensions | [types/foundry.types.CanvasDimensions.md](types/foundry.types.CanvasDimensions.md) | CanvasDimensions: [SceneDimensions](../interfaces/foundry.documents.types.SceneDimensions.md) & [\_CanvasDimensions](../interfaces/foundry.types._CanvasDimensions.md)... |
| CanvasPerformanceMode | [types/CONST.CanvasPerformanceMode.md](types/CONST.CanvasPerformanceMode.md) | CanvasPerformanceMode: typeof [CANVAS\_PERFORMANCE\_MODES](../variables/CONST.CANVAS_PERFORMANCE_MODES.md)[keyof typeof [CANVAS\_PERFORMANCE\_MODES](../variables/CONST.CANVAS_PERFORMANCE_MODES.md)]... |
| CanvasVisionContainer | [types/foundry.canvas.layers.types.CanvasVisionContainer.md](types/foundry.canvas.layers.types.CanvasVisionContainer.md) | CanvasVisionContainer: PIXI.Container & [\_CanvasVisionContainer](../interfaces/foundry.canvas.layers.types._CanvasVisionContainer.md)... |
| CanvasVisionContainerDarkness | [types/foundry.canvas.layers.types.CanvasVisionContainerDarkness.md](types/foundry.canvas.layers.types.CanvasVisionContainerDarkness.md) | CanvasVisionContainerDarkness: PIXI.LegacyGraphics & [\_CanvasVisionContainerDarkness](../interfaces/foundry.canvas.layers.types._CanvasVisionContainerDarkness.md)... |
| CanvasVisionContainerLight | [types/foundry.canvas.layers.types.CanvasVisionContainerLight.md](types/foundry.canvas.layers.types.CanvasVisionContainerLight.md) | CanvasVisionContainerLight: PIXI.LegacyGraphics & [\_CanvasVisionContainerLight](../interfaces/foundry.canvas.layers.types._CanvasVisionContainerLight.md)... |
| CanvasVisionContainerSight | [types/foundry.canvas.layers.types.CanvasVisionContainerSight.md](types/foundry.canvas.layers.types.CanvasVisionContainerSight.md) | CanvasVisionContainerSight: PIXI.LegacyGraphics & [\_CanvasVisionContainerSight](../interfaces/foundry.canvas.layers.types._CanvasVisionContainerSight.md)... |
| ChatCommandCallback | [types/foundry.ChatCommandCallback.md](types/foundry.ChatCommandCallback.md) | ChatCommandCallback: (... |
| ChatMessageStyle | [types/CONST.ChatMessageStyle.md](types/CONST.ChatMessageStyle.md) | ChatMessageStyle: typeof [CHAT\_MESSAGE\_STYLES](../variables/CONST.CHAT_MESSAGE_STYLES.md)[keyof typeof [CHAT\_MESSAGE\_STYLES](../variables/CONST.CHAT_MESSAGE_STYLES.md)]... |
| ClockwiseSweepEdgeConfig | [types/foundry.canvas.geometry.types.ClockwiseSweepEdgeConfig.md](types/foundry.canvas.geometry.types.ClockwiseSweepEdgeConfig.md) | ClockwiseSweepEdgeConfig: { mode: 0 \| 1 \| 2; priority: number }... |
| ClockwiseSweepPolygonConfig | [types/foundry.canvas.geometry.types.ClockwiseSweepPolygonConfig.md](types/foundry.canvas.geometry.types.ClockwiseSweepPolygonConfig.md) | ClockwiseSweepPolygonConfig: [PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md) & [\_ClockwiseSweepPolygonConfig](../interfaces/foundry.canvas.geometry... |
| CodeMirrorLanguage | [types/foundry.data.types.CodeMirrorLanguage.md](types/foundry.data.types.CodeMirrorLanguage.md) | CodeMirrorLanguage: "javascript" \| "json" \| "html" \| "markdown" \| "" \| "plain"... |
| ColorSource | [types/foundry.types.ColorSource.md](types/foundry.types.ColorSource.md) | ColorSource:... |
| CombatRoundEventContext | [types/foundry.documents.types.CombatRoundEventContext.md](types/foundry.documents.types.CombatRoundEventContext.md) | CombatRoundEventContext: Omit<[CombatTurnEventContext](../interfaces/foundry.documents.types.CombatTurnEventContext.md), "turn">... |
| CompendiumArtMapping | [types/foundry.helpers.types.CompendiumArtMapping.md](types/foundry.helpers.types.CompendiumArtMapping.md) | CompendiumArtMapping: Record<string, Record<string, [CompendiumArtInfo](../interfaces/foundry.helpers.types.CompendiumArtInfo.md)>>... |
| Constructor | [types/foundry.types.Constructor.md](types/foundry.types.Constructor.md) | Constructor: Object... |
| ContextMenuCallback | [types/foundry.ContextMenuCallback.md](types/foundry.ContextMenuCallback.md) | ContextMenuCallback: (event: PointerEvent, target: HTMLElement) => unknown... |
| ContextMenuCondition | [types/foundry.ContextMenuCondition.md](types/foundry.ContextMenuCondition.md) | ContextMenuCondition: (target: HTMLElement) => boolean... |
| ContextName | [types/foundry.audio.ContextName.md](types/foundry.audio.ContextName.md) | ContextName: "music" \| "environment" \| "interface"... |
| CustomFormGroup | [types/foundry.applications.fields.CustomFormGroup.md](types/foundry.applications.fields.CustomFormGroup.md) | CustomFormGroup: (... |
| CustomFormInput | [types/foundry.applications.fields.CustomFormInput.md](types/foundry.applications.fields.CustomFormInput.md) | CustomFormInput: (... |
| DarknessSourceAnimationConfig | [types/CONFIG.DarknessSourceAnimationConfig.md](types/CONFIG.DarknessSourceAnimationConfig.md) | DarknessSourceAnimationConfig: Record<... |
| DataFieldValidator | [types/foundry.data.types.DataFieldValidator.md](types/foundry.data.types.DataFieldValidator.md) | DataFieldValidator: (... |
| DataModelConstructionContext | [types/foundry.abstract.types.DataModelConstructionContext.md](types/foundry.abstract.types.DataModelConstructionContext.md) | DataModelConstructionContext: [\_DataModelConstructionOptions](../interfaces/foundry.abstract.types._DataModelConstructionOptions.md) & Pick<... |
| DataSchema | [types/foundry.abstract.types.DataSchema.md](types/foundry.abstract.types.DataSchema.md) | DataSchema: Record<string, [DataField](../classes/foundry.data.fields.DataField.md)>... |
| DatabaseAction | [types/foundry.abstract.types.DatabaseAction.md](types/foundry.abstract.types.DatabaseAction.md) | DatabaseAction: "get" \| "create" \| "update" \| "delete"... |
| DatabaseOperation | [types/foundry.abstract.types.DatabaseOperation.md](types/foundry.abstract.types.DatabaseOperation.md) | DatabaseOperation:... |
| DatabaseWriteAction | [types/foundry.abstract.types.DatabaseWriteAction.md](types/foundry.abstract.types.DatabaseWriteAction.md) | DatabaseWriteAction: Exclude<[DatabaseAction](foundry.abstract.types.DatabaseAction.md), "get">... |
| DatabaseWriteOperation | [types/foundry.abstract.types.DatabaseWriteOperation.md](types/foundry.abstract.types.DatabaseWriteOperation.md) | DatabaseWriteOperation: Exclude<[DatabaseOperation](foundry.abstract.types.DatabaseOperation.md), [DatabaseGetOperation](../interfaces/foundry.abstract.types.DatabaseGetOperation.md)>... |
| DeepPartial | [types/foundry.types.DeepPartial.md](types/foundry.types.DeepPartial.md) | DeepPartial: [T](#t) extends [Builtin](foundry.types.Builtin.md)... |
| DeepReadonly | [types/foundry.types.DeepReadonly.md](types/foundry.types.DeepReadonly.md) | DeepReadonly: {... |
| DialogV2ButtonCallback | [types/foundry.DialogV2ButtonCallback.md](types/foundry.DialogV2ButtonCallback.md) | DialogV2ButtonCallback: (... |
| DialogV2CloseCallback | [types/foundry.DialogV2CloseCallback.md](types/foundry.DialogV2CloseCallback.md) | DialogV2CloseCallback: (event: Event, dialog: [DialogV2](../classes/foundry.applications.api.DialogV2.md)) => any... |
| DialogV2RenderCallback | [types/foundry.DialogV2RenderCallback.md](types/foundry.DialogV2RenderCallback.md) | DialogV2RenderCallback: (event: Event, dialog: [DialogV2](../classes/foundry.applications.api.DialogV2.md)) => any... |
| DialogV2SubmitCallback | [types/foundry.DialogV2SubmitCallback.md](types/foundry.DialogV2SubmitCallback.md) | DialogV2SubmitCallback: (result: any, dialog: [DialogV2](../classes/foundry.applications.api.DialogV2.md)) => Promise<void>... |
| DiceFulfillmentHandler | [types/CONFIG.DiceFulfillmentHandler.md](types/CONFIG.DiceFulfillmentHandler.md) | DiceFulfillmentHandler: (... |
| DiceRollParseNode | [types/foundry.dice.DiceRollParseNode.md](types/foundry.dice.DiceRollParseNode.md) | DiceRollParseNode: [ModifiersRollParseNode](foundry.dice.ModifiersRollParseNode.md)... |
| DocumentConstructionContext | [types/foundry.abstract.types.DocumentConstructionContext.md](types/foundry.abstract.types.DocumentConstructionContext.md) | DocumentConstructionContext: [DataModelConstructionContext](foundry.abstract.types.DataModelConstructionContext.md) & [\_DocumentConstructionContext](../interfaces/foundry.abstract.types._DocumentCons... |
| DocumentDirectoryConfiguration | [types/foundry.DocumentDirectoryConfiguration.md](types/foundry.DocumentDirectoryConfiguration.md) | DocumentDirectoryConfiguration: [ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md) & [\_DocumentDirectoryConfiguration](../interfaces/foundry._DocumentDir... |
| DocumentEmbedHandler | [types/CONFIG.DocumentEmbedHandler.md](types/CONFIG.DocumentEmbedHandler.md) | DocumentEmbedHandler: (... |
| DocumentFlags | [types/foundry.data.types.DocumentFlags.md](types/foundry.data.types.DocumentFlags.md) | DocumentFlags: Record<string, Record<string, unknown>>... |
| DocumentOwnershipLevel | [types/CONST.DocumentOwnershipLevel.md](types/CONST.DocumentOwnershipLevel.md) | DocumentOwnershipLevel:... |
| DocumentOwnershipNumber | [types/CONST.DocumentOwnershipNumber.md](types/CONST.DocumentOwnershipNumber.md) | DocumentOwnershipNumber: typeof [DOCUMENT\_OWNERSHIP\_LEVELS](../variables/CONST.DOCUMENT_OWNERSHIP_LEVELS.md)[keyof typeof [DOCUMENT\_OWNERSHIP\_LEVELS](../variables/CONST.DOCUMENT_OWNERSHIP_LEVELS.m... |
| DocumentPermissionTest | [types/foundry.abstract.types.DocumentPermissionTest.md](types/foundry.abstract.types.DocumentPermissionTest.md) | DocumentPermissionTest: (... |
| DocumentTypesConfiguration | [types/foundry.packages.types.DocumentTypesConfiguration.md](types/foundry.packages.types.DocumentTypesConfiguration.md) | DocumentTypesConfiguration: Record<... |
| DocumentUUIDFieldOptions | [types/foundry.data.types.DocumentUUIDFieldOptions.md](types/foundry.data.types.DocumentUUIDFieldOptions.md) | DocumentUUIDFieldOptions: [StringFieldOptions](../interfaces/foundry.data.types.StringFieldOptions.md) & [\_DocumentUUIDFieldOptions](../interfaces/foundry.data.types._DocumentUUIDFieldOptions.md)... |
| DoorStyle | [types/foundry.DoorStyle.md](types/foundry.DoorStyle.md) | DoorStyle: typeof [DOOR\_STYLES](../classes/foundry.canvas.containers.DoorMesh.md#door_styles)[keyof typeof [DOOR\_STYLES](../classes/foundry.canvas.containers.DoorMesh.md#door_styles)]... |
| DynamicRingId | [types/foundry.canvas.placeables.types.DynamicRingId.md](types/foundry.canvas.placeables.types.DynamicRingId.md) | DynamicRingId: string... |
| EdgeDirection | [types/CONST.EdgeDirection.md](types/CONST.EdgeDirection.md) | EdgeDirection: typeof [EDGE\_DIRECTIONS](../variables/CONST.EDGE_DIRECTIONS.md)[keyof typeof [EDGE\_DIRECTIONS](../variables/CONST.EDGE_DIRECTIONS.md)]... |
| EdgeDirectionMode | [types/CONST.EdgeDirectionMode.md](types/CONST.EdgeDirectionMode.md) | EdgeDirectionMode: typeof [EDGE\_DIRECTION\_MODES](../variables/CONST.EDGE_DIRECTION_MODES.md)[keyof typeof [EDGE\_DIRECTION\_MODES](../variables/CONST.EDGE_DIRECTION_MODES.md)]... |
| EdgeRestrictionType | [types/CONST.EdgeRestrictionType.md](types/CONST.EdgeRestrictionType.md) | EdgeRestrictionType: typeof [EDGE\_RESTRICTION\_TYPES](../variables/CONST.EDGE_RESTRICTION_TYPES.md)[number]... |
| EdgeSenseType | [types/CONST.EdgeSenseType.md](types/CONST.EdgeSenseType.md) | EdgeSenseType: typeof [EDGE\_SENSE\_TYPES](../variables/CONST.EDGE_SENSE_TYPES.md)[keyof typeof [EDGE\_SENSE\_TYPES](../variables/CONST.EDGE_SENSE_TYPES.md)]... |
| EdgeSet | [types/foundry.canvas.geometry.types.EdgeSet.md](types/foundry.canvas.geometry.types.EdgeSet.md) | EdgeSet: Set<Edge>... |
| EdgeType | [types/foundry.canvas.geometry.types.EdgeType.md](types/foundry.canvas.geometry.types.EdgeType.md) | EdgeType: "wall" \| "source" \| "innerBounds" \| "outerBounds"... |
| EmittedEventListener | [types/foundry.utils.types.EmittedEventListener.md](types/foundry.utils.types.EmittedEventListener.md) | EmittedEventListener: (event: Event) => any... |
| FilePathFieldOptions | [types/foundry.data.types.FilePathFieldOptions.md](types/foundry.data.types.FilePathFieldOptions.md) | FilePathFieldOptions: [StringFieldOptions](../interfaces/foundry.data.types.StringFieldOptions.md) & [\_FilePathFieldOptions](../interfaces/foundry.data.types._FilePathFieldOptions.md)... |
| FilterMenuOptions | [types/foundry.FilterMenuOptions.md](types/foundry.FilterMenuOptions.md) | FilterMenuOptions: [ContextMenuOptions](../interfaces/foundry.ContextMenuOptions.md) & [\_FilterMenuOptions](../interfaces/foundry._FilterMenuOptions.md)... |
| FlavorRollParseNode | [types/foundry.dice.FlavorRollParseNode.md](types/foundry.dice.FlavorRollParseNode.md) | FlavorRollParseNode: [RollParseNode](../interfaces/foundry.dice.RollParseNode.md)... |
| FontDefinition | [types/CONFIG.FontDefinition.md](types/CONFIG.FontDefinition.md) | FontDefinition: FontFaceDescriptors & [\_FontDefinition](../interfaces/CONFIG._FontDefinition.md)... |
| FunctionRollParseNode | [types/foundry.dice.FunctionRollParseNode.md](types/foundry.dice.FunctionRollParseNode.md) | FunctionRollParseNode: [FlavorRollParseNode](foundry.dice.FlavorRollParseNode.md)... |
| GlobalLightData | [types/foundry.documents.types.GlobalLightData.md](types/foundry.documents.types.GlobalLightData.md) | GlobalLightData: Pick<... |
| GridCoordinates2D | [types/foundry.grid.types.GridCoordinates2D.md](types/foundry.grid.types.GridCoordinates2D.md) | GridCoordinates2D: [GridOffset2D](../interfaces/foundry.grid.types.GridOffset2D.md) \| [Point](../interfaces/foundry.types.Point.md)... |
| GridCoordinates3D | [types/foundry.grid.types.GridCoordinates3D.md](types/foundry.grid.types.GridCoordinates3D.md) | GridCoordinates3D: [GridOffset3D](../interfaces/foundry.grid.types.GridOffset3D.md) \| [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)... |
| GridDiagonalRule | [types/CONST.GridDiagonalRule.md](types/CONST.GridDiagonalRule.md) | GridDiagonalRule: typeof [GRID\_DIAGONALS](../variables/CONST.GRID_DIAGONALS.md)[keyof typeof [GRID\_DIAGONALS](../variables/CONST.GRID_DIAGONALS.md)]... |
| GridMeasurePathCostFunction2D | [types/foundry.grid.types.GridMeasurePathCostFunction2D.md](types/foundry.grid.types.GridMeasurePathCostFunction2D.md) | GridMeasurePathCostFunction2D: (... |
| GridMeasurePathCostFunction3D | [types/foundry.grid.types.GridMeasurePathCostFunction3D.md](types/foundry.grid.types.GridMeasurePathCostFunction3D.md) | GridMeasurePathCostFunction3D: (... |
| GridType | [types/CONST.GridType.md](types/CONST.GridType.md) | GridType: typeof [GRID\_TYPES](../variables/CONST.GRID_TYPES.md)[keyof typeof [GRID\_TYPES](../variables/CONST.GRID_TYPES.md)]... |
| HTMLSecretContentCallback | [types/foundry.HTMLSecretContentCallback.md](types/foundry.HTMLSecretContentCallback.md) | HTMLSecretContentCallback: (secret: HTMLElement) => string... |
| HTMLSecretUpdateCallback | [types/foundry.HTMLSecretUpdateCallback.md](types/foundry.HTMLSecretUpdateCallback.md) | HTMLSecretUpdateCallback: (... |
| HexagonalGridCoordinates2D | [types/foundry.grid.types.HexagonalGridCoordinates2D.md](types/foundry.grid.types.HexagonalGridCoordinates2D.md) | HexagonalGridCoordinates2D: [GridCoordinates2D](foundry.grid.types.GridCoordinates2D.md) \| [HexagonalGridCube2D](../interfaces/foundry.grid.types.HexagonalGridCube2D.md)... |
| HexagonalGridCoordinates3D | [types/foundry.grid.types.HexagonalGridCoordinates3D.md](types/foundry.grid.types.HexagonalGridCoordinates3D.md) | HexagonalGridCoordinates3D: [GridCoordinates3D](foundry.grid.types.GridCoordinates3D.md) \| [HexagonalGridCube3D](../interfaces/foundry.grid.types.HexagonalGridCube3D.md)... |
| JavaScriptFieldOptions | [types/foundry.data.types.JavaScriptFieldOptions.md](types/foundry.data.types.JavaScriptFieldOptions.md) | JavaScriptFieldOptions: [StringFieldOptions](../interfaces/foundry.data.types.StringFieldOptions.md) & [\_JavaScriptFieldOptions](../interfaces/foundry.data.types._JavaScriptFieldOptions.md)... |
| LightSourceAnimationConfig | [types/CONFIG.LightSourceAnimationConfig.md](types/CONFIG.LightSourceAnimationConfig.md) | LightSourceAnimationConfig: Record<... |
| LightingLevel | [types/CONST.LightingLevel.md](types/CONST.LightingLevel.md) | LightingLevel: typeof [LIGHTING\_LEVELS](../variables/CONST.LIGHTING_LEVELS.md)[keyof typeof [LIGHTING\_LEVELS](../variables/CONST.LIGHTING_LEVELS.md)]... |
| LightingVisibility | [types/foundry.canvas.perception.types.LightingVisibility.md](types/foundry.canvas.perception.types.LightingVisibility.md) | LightingVisibility: typeof [LIGHTING\_VISIBILITY](../classes/foundry.canvas.perception.VisionMode.md#lighting_visibility)[keyof typeof [LIGHTING\_VISIBILITY](../classes/foundry.canvas.perception.Visio... |
| ManageCompendiumRequest | [types/foundry.types.ManageCompendiumRequest.md](types/foundry.types.ManageCompendiumRequest.md) | ManageCompendiumRequest: [SocketRequest](../interfaces/foundry.types.SocketRequest.md)... |
| ManageCompendiumResponse | [types/foundry.types.ManageCompendiumResponse.md](types/foundry.types.ManageCompendiumResponse.md) | ManageCompendiumResponse: [SocketResponse](../interfaces/foundry.types.SocketResponse.md)... |
| MenuToggleBlockWrapCommand | [types/foundry.prosemirror.types.MenuToggleBlockWrapCommand.md](types/foundry.prosemirror.types.MenuToggleBlockWrapCommand.md) | MenuToggleBlockWrapCommand: (... |
| ModifiersRollParseNode | [types/foundry.dice.ModifiersRollParseNode.md](types/foundry.dice.ModifiersRollParseNode.md) | ModifiersRollParseNode: [FlavorRollParseNode](foundry.dice.FlavorRollParseNode.md)... |
| ModuleSubTypeCounts | [types/foundry.ModuleSubTypeCounts.md](types/foundry.ModuleSubTypeCounts.md) | ModuleSubTypeCounts: Record<string, Record<string, number>>... |
| NumericRollParseNode | [types/foundry.dice.NumericRollParseNode.md](types/foundry.dice.NumericRollParseNode.md) | NumericRollParseNode: [FlavorRollParseNode](foundry.dice.FlavorRollParseNode.md)... |
| ParentheticalRollParseNode | [types/foundry.dice.ParentheticalRollParseNode.md](types/foundry.dice.ParentheticalRollParseNode.md) | ParentheticalRollParseNode: [FlavorRollParseNode](foundry.dice.FlavorRollParseNode.md)... |
| ParticleGeneratorAnchor | [types/foundry.canvas.animation.types.ParticleGeneratorAnchor.md](types/foundry.canvas.animation.types.ParticleGeneratorAnchor.md) | ParticleGeneratorAnchor: PIXI.IPointData \| (() => [ParticleGeneratorPoint](foundry.canvas.animation.types.ParticleGeneratorPoint.md)) \| null... |
| ParticleGeneratorAnchorPoint | [types/foundry.canvas.animation.types.ParticleGeneratorAnchorPoint.md](types/foundry.canvas.animation.types.ParticleGeneratorAnchorPoint.md) | ParticleGeneratorAnchorPoint:... |
| ParticleGeneratorArea | [types/foundry.canvas.animation.types.ParticleGeneratorArea.md](types/foundry.canvas.animation.types.ParticleGeneratorArea.md) | ParticleGeneratorArea:... |
| ParticleGeneratorAreaSampleMode | [types/foundry.canvas.animation.types.ParticleGeneratorAreaSampleMode.md](types/foundry.canvas.animation.types.ParticleGeneratorAreaSampleMode.md) | ParticleGeneratorAreaSampleMode: "interior" \| "boundary"... |
| ParticleGeneratorBehaviorId | [types/foundry.canvas.animation.types.ParticleGeneratorBehaviorId.md](types/foundry.canvas.animation.types.ParticleGeneratorBehaviorId.md) | ParticleGeneratorBehaviorId: "default" \| "orbit" \| "follow"... |
| ParticleGeneratorColorFunction | [types/foundry.canvas.animation.types.ParticleGeneratorColorFunction.md](types/foundry.canvas.animation.types.ParticleGeneratorColorFunction.md) | ParticleGeneratorColorFunction: (particle: [ParticleMesh](foundry.canvas.animation.types.ParticleMesh.md), dt: number) => number... |
| ParticleGeneratorColorValue | [types/foundry.canvas.animation.types.ParticleGeneratorColorValue.md](types/foundry.canvas.animation.types.ParticleGeneratorColorValue.md) | ParticleGeneratorColorValue: [ColorSource](foundry.types.ColorSource.md) \| [ParticleGeneratorColorValueOptions](../interfaces/foundry.canvas.animation.types.ParticleGeneratorColorValueOptions.md)... |
| ParticleGeneratorConstraintMode | [types/foundry.canvas.animation.types.ParticleGeneratorConstraintMode.md](types/foundry.canvas.animation.types.ParticleGeneratorConstraintMode.md) | ParticleGeneratorConstraintMode: "none" \| "kill" \| "clamp" \| "wrap" \| "bounce"... |
| ParticleGeneratorDeathCallback | [types/foundry.canvas.animation.types.ParticleGeneratorDeathCallback.md](types/foundry.canvas.animation.types.ParticleGeneratorDeathCallback.md) | ParticleGeneratorDeathCallback: (... |
| ParticleGeneratorDebugTintMode | [types/foundry.canvas.animation.types.ParticleGeneratorDebugTintMode.md](types/foundry.canvas.animation.types.ParticleGeneratorDebugTintMode.md) | ParticleGeneratorDebugTintMode: "random" \| "palette" \| "byTexture"... |
| ParticleGeneratorMode | [types/foundry.canvas.animation.types.ParticleGeneratorMode.md](types/foundry.canvas.animation.types.ParticleGeneratorMode.md) | ParticleGeneratorMode: "ambient" \| "effect"... |
| ParticleGeneratorParticleCallback | [types/foundry.canvas.animation.types.ParticleGeneratorParticleCallback.md](types/foundry.canvas.animation.types.ParticleGeneratorParticleCallback.md) | ParticleGeneratorParticleCallback: (... |
| ParticleGeneratorPoint | [types/foundry.canvas.animation.types.ParticleGeneratorPoint.md](types/foundry.canvas.animation.types.ParticleGeneratorPoint.md) | ParticleGeneratorPoint: PIXI.IPointData... |
| ParticleGeneratorPointList | [types/foundry.canvas.animation.types.ParticleGeneratorPointList.md](types/foundry.canvas.animation.types.ParticleGeneratorPointList.md) | ParticleGeneratorPointList: [ParticleGeneratorPoint](foundry.canvas.animation.types.ParticleGeneratorPoint.md)[]... |
| ParticleGeneratorPolylineDefinition | [types/foundry.canvas.animation.types.ParticleGeneratorPolylineDefinition.md](types/foundry.canvas.animation.types.ParticleGeneratorPolylineDefinition.md) | ParticleGeneratorPolylineDefinition:... |
| ParticleGeneratorPositionTest | [types/foundry.canvas.animation.types.ParticleGeneratorPositionTest.md](types/foundry.canvas.animation.types.ParticleGeneratorPositionTest.md) | ParticleGeneratorPositionTest: (... |
| ParticleGeneratorRange | [types/foundry.canvas.animation.types.ParticleGeneratorRange.md](types/foundry.canvas.animation.types.ParticleGeneratorRange.md) | ParticleGeneratorRange: number \| number[] \| { max: number; min: number }... |
| ParticleGeneratorRectangle | [types/foundry.canvas.animation.types.ParticleGeneratorRectangle.md](types/foundry.canvas.animation.types.ParticleGeneratorRectangle.md) | ParticleGeneratorRectangle:... |
| ParticleGeneratorTickCallback | [types/foundry.canvas.animation.types.ParticleGeneratorTickCallback.md](types/foundry.canvas.animation.types.ParticleGeneratorTickCallback.md) | ParticleGeneratorTickCallback: (... |
| ParticleGeneratorValue | [types/foundry.canvas.animation.types.ParticleGeneratorValue.md](types/foundry.canvas.animation.types.ParticleGeneratorValue.md) | ParticleGeneratorValue: number \| number[] \| [ParticleGeneratorValueOptions](../interfaces/foundry.canvas.animation.types.ParticleGeneratorValueOptions.md)... |
| ParticleGeneratorValueFunction | [types/foundry.canvas.animation.types.ParticleGeneratorValueFunction.md](types/foundry.canvas.animation.types.ParticleGeneratorValueFunction.md) | ParticleGeneratorValueFunction: (particle: [ParticleMesh](foundry.canvas.animation.types.ParticleMesh.md), dt: number) => number... |
| ParticleGeneratorVelocityFunction | [types/foundry.canvas.animation.types.ParticleGeneratorVelocityFunction.md](types/foundry.canvas.animation.types.ParticleGeneratorVelocityFunction.md) | ParticleGeneratorVelocityFunction: (... |
| ParticleGeneratorVelocityOptions | [types/foundry.canvas.animation.types.ParticleGeneratorVelocityOptions.md](types/foundry.canvas.animation.types.ParticleGeneratorVelocityOptions.md) | ParticleGeneratorVelocityOptions:... |
| ParticleMesh | [types/foundry.canvas.animation.types.ParticleMesh.md](types/foundry.canvas.animation.types.ParticleMesh.md) | ParticleMesh: [SpriteMesh](../classes/foundry.canvas.containers.SpriteMesh.md) & {... |
| PerceptionManagerFlags | [types/foundry.canvas.perception.types.PerceptionManagerFlags.md](types/foundry.canvas.perception.types.PerceptionManagerFlags.md) | PerceptionManagerFlags: RenderFlags... |
| PlaceablePaletteConfiguration | [types/foundry.applications.types.PlaceablePaletteConfiguration.md](types/foundry.applications.types.PlaceablePaletteConfiguration.md) | PlaceablePaletteConfiguration: [ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md) & [\_PlaceablePaletteConfiguration](../interfaces/foundry.applications.t... |
| PlaceablePaletteRenderOptions | [types/foundry.applications.types.PlaceablePaletteRenderOptions.md](types/foundry.applications.types.PlaceablePaletteRenderOptions.md) | PlaceablePaletteRenderOptions: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md) & [\_PlaceablePaletteRenderOptions](../interfaces/foundry.applications.t... |
| PlaceableTabConfiguration | [types/foundry.PlaceableTabConfiguration.md](types/foundry.PlaceableTabConfiguration.md) | PlaceableTabConfiguration: [ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md) & [\_PlaceableTabConfiguration](../interfaces/foundry._PlaceableTabConfigura... |
| PlaylistDirectoryRenderContext | [types/foundry.PlaylistDirectoryRenderContext.md](types/foundry.PlaylistDirectoryRenderContext.md) | PlaylistDirectoryRenderContext: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md) & [\_PlaylistDirectoryRenderContext](../interfaces/foundry._PlaylistDir... |
| PointArray | [types/foundry.types.PointArray.md](types/foundry.types.PointArray.md) | PointArray: [x: number, y: number]... |
| PointSourcePolygonType | [types/foundry.canvas.geometry.types.PointSourcePolygonType.md](types/foundry.canvas.geometry.types.PointSourcePolygonType.md) | PointSourcePolygonType: [EdgeRestrictionType](CONST.EdgeRestrictionType.md) \| "universal"... |
| PolygonRay | [types/foundry.canvas.geometry.types.PolygonRay.md](types/foundry.canvas.geometry.types.PolygonRay.md) | PolygonRay: Ray... |
| PoolRollParseNode | [types/foundry.dice.PoolRollParseNode.md](types/foundry.dice.PoolRollParseNode.md) | PoolRollParseNode: [ModifiersRollParseNode](foundry.dice.ModifiersRollParseNode.md)... |
| ProseMirrorCommand | [types/foundry.prosemirror.types.ProseMirrorCommand.md](types/foundry.prosemirror.types.ProseMirrorCommand.md) | ProseMirrorCommand: (... |
| ProseMirrorDropDownEntry | [types/foundry.prosemirror.types.ProseMirrorDropDownEntry.md](types/foundry.prosemirror.types.ProseMirrorDropDownEntry.md) | ProseMirrorDropDownEntry: [ProseMirrorMenuItem](../interfaces/foundry.prosemirror.types.ProseMirrorMenuItem.md) & [\_ProseMirrorDropDownEntry](../interfaces/foundry.prosemirror.types._ProseMirrorDropD... |
| ProseMirrorMarkOutput | [types/foundry.prosemirror.types.ProseMirrorMarkOutput.md](types/foundry.prosemirror.types.ProseMirrorMarkOutput.md) | ProseMirrorMarkOutput: (mark: Mark, inline: boolean) => DOMOutputSpec... |
| ProseMirrorNodeOutput | [types/foundry.prosemirror.types.ProseMirrorNodeOutput.md](types/foundry.prosemirror.types.ProseMirrorNodeOutput.md) | ProseMirrorNodeOutput: (node: Node) => DOMOutputSpec... |
| ProseMirrorSliceTransformer | [types/foundry.prosemirror.types.ProseMirrorSliceTransformer.md](types/foundry.prosemirror.types.ProseMirrorSliceTransformer.md) | ProseMirrorSliceTransformer: (node: Node) => Node \| void... |
| PrototypeTokenData | [types/foundry.documents.types.PrototypeTokenData.md](types/foundry.documents.types.PrototypeTokenData.md) | PrototypeTokenData: Omit<... |
| PulsePingOptions | [types/foundry.canvas.interaction.types.PulsePingOptions.md](types/foundry.canvas.interaction.types.PulsePingOptions.md) | PulsePingOptions: [PingOptions](../interfaces/foundry.canvas.interaction.types.PingOptions.md) & [\_PulsePingOptions](../interfaces/foundry.canvas.interaction.types._PulsePingOptions.md)... |
| RecursiveFieldClearCallback | [types/foundry.abstract.types.RecursiveFieldClearCallback.md](types/foundry.abstract.types.RecursiveFieldClearCallback.md) | RecursiveFieldClearCallback: (data: object, fieldName: string) => void... |
| RegionBehaviorActivatedEvent | [types/foundry.documents.types.RegionBehaviorActivatedEvent.md](types/foundry.documents.types.RegionBehaviorActivatedEvent.md) | RegionBehaviorActivatedEvent: [RegionEvent](../interfaces/foundry.documents.types.RegionEvent.md)<{}>... |
| RegionBehaviorDeactivatedEvent | [types/foundry.documents.types.RegionBehaviorDeactivatedEvent.md](types/foundry.documents.types.RegionBehaviorDeactivatedEvent.md) | RegionBehaviorDeactivatedEvent: [RegionEvent](../interfaces/foundry.documents.types.RegionEvent.md)<{}>... |
| RegionBehaviorUnviewedEvent | [types/foundry.documents.types.RegionBehaviorUnviewedEvent.md](types/foundry.documents.types.RegionBehaviorUnviewedEvent.md) | RegionBehaviorUnviewedEvent: [RegionEvent](../interfaces/foundry.documents.types.RegionEvent.md)<{}>... |
| RegionBehaviorViewedEvent | [types/foundry.documents.types.RegionBehaviorViewedEvent.md](types/foundry.documents.types.RegionBehaviorViewedEvent.md) | RegionBehaviorViewedEvent: [RegionEvent](../interfaces/foundry.documents.types.RegionEvent.md)<{}>... |
| RegionEventType | [types/CONST.RegionEventType.md](types/CONST.RegionEventType.md) | RegionEventType: typeof [REGION\_EVENTS](../variables/CONST.REGION_EVENTS.md)[keyof typeof [REGION\_EVENTS](../variables/CONST.REGION_EVENTS.md)]... |
| RegionMovementSegmentType | [types/CONST.RegionMovementSegmentType.md](types/CONST.RegionMovementSegmentType.md) | RegionMovementSegmentType: typeof [REGION\_MOVEMENT\_SEGMENTS](../variables/CONST.REGION_MOVEMENT_SEGMENTS.md)[keyof typeof [REGION\_MOVEMENT\_SEGMENTS](../variables/CONST.REGION_MOVEMENT_SEGMENTS.md)... |
| RegionRegionAnimationEvent | [types/foundry.documents.types.RegionRegionAnimationEvent.md](types/foundry.documents.types.RegionRegionAnimationEvent.md) | RegionRegionAnimationEvent: [RegionEvent](../interfaces/foundry.documents.types.RegionEvent.md)<{}>... |
| RegionRegionBoundaryEvent | [types/foundry.documents.types.RegionRegionBoundaryEvent.md](types/foundry.documents.types.RegionRegionBoundaryEvent.md) | RegionRegionBoundaryEvent: [RegionEvent](../interfaces/foundry.documents.types.RegionEvent.md)<{}>... |
| RegionTokenAnimateEvent | [types/foundry.documents.types.RegionTokenAnimateEvent.md](types/foundry.documents.types.RegionTokenAnimateEvent.md) | RegionTokenAnimateEvent: [RegionEvent](../interfaces/foundry.documents.types.RegionEvent.md)<[RegionTokenAnimateEventData](../interfaces/foundry.documents.types.RegionTokenAnimateEventData.md)>... |
| RegionTokenAnimateInEvent | [types/foundry.documents.types.RegionTokenAnimateInEvent.md](types/foundry.documents.types.RegionTokenAnimateInEvent.md) | RegionTokenAnimateInEvent: [RegionTokenAnimateEvent](foundry.documents.types.RegionTokenAnimateEvent.md)... |
| RegionTokenAnimateOutEvent | [types/foundry.documents.types.RegionTokenAnimateOutEvent.md](types/foundry.documents.types.RegionTokenAnimateOutEvent.md) | RegionTokenAnimateOutEvent: [RegionTokenAnimateEvent](foundry.documents.types.RegionTokenAnimateEvent.md)... |
| RegionTokenEnterEvent | [types/foundry.documents.types.RegionTokenEnterEvent.md](types/foundry.documents.types.RegionTokenEnterEvent.md) | RegionTokenEnterEvent: [RegionTokenEnterExitEvent](foundry.documents.types.RegionTokenEnterExitEvent.md)... |
| RegionTokenEnterExitEvent | [types/foundry.documents.types.RegionTokenEnterExitEvent.md](types/foundry.documents.types.RegionTokenEnterExitEvent.md) | RegionTokenEnterExitEvent: [RegionEvent](../interfaces/foundry.documents.types.RegionEvent.md)<[RegionTokenEnterExitEventData](../interfaces/foundry.documents.types.RegionTokenEnterExitEventData.md)>... |
| RegionTokenExitEvent | [types/foundry.documents.types.RegionTokenExitEvent.md](types/foundry.documents.types.RegionTokenExitEvent.md) | RegionTokenExitEvent: [RegionTokenEnterExitEvent](foundry.documents.types.RegionTokenEnterExitEvent.md)... |
| RegionTokenMoveEvent | [types/foundry.documents.types.RegionTokenMoveEvent.md](types/foundry.documents.types.RegionTokenMoveEvent.md) | RegionTokenMoveEvent: [RegionEvent](../interfaces/foundry.documents.types.RegionEvent.md)<[RegionTokenMoveEventData](../interfaces/foundry.documents.types.RegionTokenMoveEventData.md)>... |
| RegionTokenMoveInEvent | [types/foundry.documents.types.RegionTokenMoveInEvent.md](types/foundry.documents.types.RegionTokenMoveInEvent.md) | RegionTokenMoveInEvent: [RegionTokenMoveEvent](foundry.documents.types.RegionTokenMoveEvent.md)... |
| RegionTokenMoveOutEvent | [types/foundry.documents.types.RegionTokenMoveOutEvent.md](types/foundry.documents.types.RegionTokenMoveOutEvent.md) | RegionTokenMoveOutEvent: [RegionTokenMoveEvent](foundry.documents.types.RegionTokenMoveEvent.md)... |
| RegionTokenMoveWithinEvent | [types/foundry.documents.types.RegionTokenMoveWithinEvent.md](types/foundry.documents.types.RegionTokenMoveWithinEvent.md) | RegionTokenMoveWithinEvent: [RegionTokenMoveEvent](foundry.documents.types.RegionTokenMoveEvent.md)... |
| RegionTokenRoundEndEvent | [types/foundry.documents.types.RegionTokenRoundEndEvent.md](types/foundry.documents.types.RegionTokenRoundEndEvent.md) | RegionTokenRoundEndEvent: [RegionTokenRoundEvent](foundry.documents.types.RegionTokenRoundEvent.md)... |
| RegionTokenRoundEvent | [types/foundry.documents.types.RegionTokenRoundEvent.md](types/foundry.documents.types.RegionTokenRoundEvent.md) | RegionTokenRoundEvent: [RegionEvent](../interfaces/foundry.documents.types.RegionEvent.md)<[RegionTokenRoundEventData](../interfaces/foundry.documents.types.RegionTokenRoundEventData.md)>... |
| RegionTokenRoundStartEvent | [types/foundry.documents.types.RegionTokenRoundStartEvent.md](types/foundry.documents.types.RegionTokenRoundStartEvent.md) | RegionTokenRoundStartEvent: [RegionTokenRoundEvent](foundry.documents.types.RegionTokenRoundEvent.md)... |
| RegionTokenTurnEndEvent | [types/foundry.documents.types.RegionTokenTurnEndEvent.md](types/foundry.documents.types.RegionTokenTurnEndEvent.md) | RegionTokenTurnEndEvent: [RegionTokenTurnEvent](foundry.documents.types.RegionTokenTurnEvent.md)... |
| RegionTokenTurnEvent | [types/foundry.documents.types.RegionTokenTurnEvent.md](types/foundry.documents.types.RegionTokenTurnEvent.md) | RegionTokenTurnEvent: [RegionEvent](../interfaces/foundry.documents.types.RegionEvent.md)<[RegionTokenTurnEventData](../interfaces/foundry.documents.types.RegionTokenTurnEventData.md)>... |
| RegionTokenTurnStartEvent | [types/foundry.documents.types.RegionTokenTurnStartEvent.md](types/foundry.documents.types.RegionTokenTurnStartEvent.md) | RegionTokenTurnStartEvent: [RegionTokenTurnEvent](foundry.documents.types.RegionTokenTurnEvent.md)... |
| RequestData | [types/foundry.types.RequestData.md](types/foundry.types.RequestData.md) | RequestData:... |
| RollFunction | [types/CONFIG.RollFunction.md](types/CONFIG.RollFunction.md) | RollFunction: (...args: any[]) => Promise<number \| string> \| number \| string... |
| RollOptions | [types/foundry.dice.RollOptions.md](types/foundry.dice.RollOptions.md) | RollOptions: { flavor?: string \| null; [key: string]: unknown }... |
| RollParseArg | [types/foundry.dice.RollParseArg.md](types/foundry.dice.RollParseArg.md) | RollParseArg: null \| number \| string \| [RollParseNode](../interfaces/foundry.dice.RollParseNode.md) \| RollParseArg[]... |
| RollParseTreeNode | [types/foundry.dice.RollParseTreeNode.md](types/foundry.dice.RollParseTreeNode.md) | RollParseTreeNode: [RollParseNode](../interfaces/foundry.dice.RollParseNode.md)... |
| RollTableHTMLEmbedConfig | [types/foundry.types.RollTableHTMLEmbedConfig.md](types/foundry.types.RollTableHTMLEmbedConfig.md) | RollTableHTMLEmbedConfig: [DocumentHTMLEmbedConfig](../interfaces/foundry.DocumentHTMLEmbedConfig.md) & [\_RollTableHTMLEmbedConfig](../interfaces/foundry.types._RollTableHTMLEmbedConfig.md)... |
| SceneControlsRenderOptions | [types/foundry.SceneControlsRenderOptions.md](types/foundry.SceneControlsRenderOptions.md) | SceneControlsRenderOptions: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md) & [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.m... |
| SearchFilterCallback | [types/foundry.SearchFilterCallback.md](types/foundry.SearchFilterCallback.md) | SearchFilterCallback: (... |
| SearchableField | [types/foundry.types.SearchableField.md](types/foundry.types.SearchableField.md) | SearchableField: [DataField](../classes/foundry.data.fields.DataField.md) \| { [K in string]: SearchableField }... |
| SerializableBuiltin | [types/foundry.types.SerializableBuiltin.md](types/foundry.types.SerializableBuiltin.md) | SerializableBuiltin: string \| number \| boolean \| object \| null... |
| SetElement | [types/foundry.types.SetElement.md](types/foundry.types.SetElement.md) | SetElement: [T](#t) extends Set<infer U> ? U : never... |
| SheetRegistrationOptions | [types/foundry.SheetRegistrationOptions.md](types/foundry.SheetRegistrationOptions.md) | SheetRegistrationOptions: Omit<... |
| SoundScheduleCallback | [types/foundry.audio.SoundScheduleCallback.md](types/foundry.audio.SoundScheduleCallback.md) | SoundScheduleCallback: (sound: Sound) => any... |
| StatusEffectConfig | [types/CONFIG.StatusEffectConfig.md](types/CONFIG.StatusEffectConfig.md) | StatusEffectConfig: [\_StatusEffectConfig](../interfaces/CONFIG._StatusEffectConfig.md) & Partial<[ActiveEffectData](../interfaces/foundry.documents.types.ActiveEffectData.md)>... |
| StringParseNode | [types/foundry.dice.StringParseNode.md](types/foundry.dice.StringParseNode.md) | StringParseNode: [FlavorRollParseNode](foundry.dice.FlavorRollParseNode.md)... |
| StringTreeEntryFilter | [types/foundry.utils.types.StringTreeEntryFilter.md](types/foundry.utils.types.StringTreeEntryFilter.md) | StringTreeEntryFilter: (entry: any) => boolean... |
| StringTreeNode | [types/foundry.utils.types.StringTreeNode.md](types/foundry.utils.types.StringTreeNode.md) | StringTreeNode: Record<string, { entry: object }>... |
| TextAnchorPoint | [types/CONST.TextAnchorPoint.md](types/CONST.TextAnchorPoint.md) | TextAnchorPoint: typeof [TEXT\_ANCHOR\_POINTS](../variables/CONST.TEXT_ANCHOR_POINTS.md)[keyof typeof [TEXT\_ANCHOR\_POINTS](../variables/CONST.TEXT_ANCHOR_POINTS.md)]... |
| TextContentReplacer | [types/foundry.TextContentReplacer.md](types/foundry.TextContentReplacer.md) | TextContentReplacer: (match: RegExpMatchArray) => Promise<HTMLElement>... |
| TextEditorEngineFactory | [types/CONFIG.TextEditorEngineFactory.md](types/CONFIG.TextEditorEngineFactory.md) | TextEditorEngineFactory: (... |
| TextEditorEngineRenderer | [types/CONFIG.TextEditorEngineRenderer.md](types/CONFIG.TextEditorEngineRenderer.md) | TextEditorEngineRenderer: (... |
| TextEditorEnricher | [types/CONFIG.TextEditorEnricher.md](types/CONFIG.TextEditorEnricher.md) | TextEditorEnricher: (... |
| TextureCacheMap | [types/foundry.TextureCacheMap.md](types/foundry.TextureCacheMap.md) | TextureCacheMap: Map<PIXI.BaseTexture \| PIXI.Spritesheet, [TextureCacheEntry](../interfaces/foundry.TextureCacheEntry.md)>... |
| TextureDataFitMode | [types/CONST.TextureDataFitMode.md](types/CONST.TextureDataFitMode.md) | TextureDataFitMode: typeof [TEXTURE\_DATA\_FIT\_MODES](../variables/CONST.TEXTURE_DATA_FIT_MODES.md)[number]... |
| TimeFormatter | [types/foundry.data.types.TimeFormatter.md](types/foundry.data.types.TimeFormatter.md) | TimeFormatter: (... |
| TokenAnimationTransition | [types/foundry.types.TokenAnimationTransition.md](types/foundry.types.TokenAnimationTransition.md) | TokenAnimationTransition:... |
| TokenCoordinates | [types/foundry.documents.types.TokenCoordinates.md](types/foundry.documents.types.TokenCoordinates.md) | TokenCoordinates: Pick<[TokenPosition](../interfaces/foundry.documents.types.TokenPosition.md), "x" \| "y" \| "elevation" \| "level">... |
| TokenDimensions | [types/foundry.documents.types.TokenDimensions.md](types/foundry.documents.types.TokenDimensions.md) | TokenDimensions: Pick<[TokenPosition](../interfaces/foundry.documents.types.TokenPosition.md), "width" \| "height" \| "depth" \| "shape">... |
| TokenDisplayMode | [types/CONST.TokenDisplayMode.md](types/CONST.TokenDisplayMode.md) | TokenDisplayMode: typeof [TOKEN\_DISPLAY\_MODES](../variables/CONST.TOKEN_DISPLAY_MODES.md)[keyof typeof [TOKEN\_DISPLAY\_MODES](../variables/CONST.TOKEN_DISPLAY_MODES.md)]... |
| TokenMeasurableMovementWaypoint | [types/foundry.documents.types.TokenMeasurableMovementWaypoint.md](types/foundry.documents.types.TokenMeasurableMovementWaypoint.md) | TokenMeasurableMovementWaypoint: Partial<[TokenProcessedMovementWaypoint](../interfaces/foundry.documents.types.TokenProcessedMovementWaypoint.md)> & [TokenMeasurableMovementWaypointData](../interface... |
| TokenMovementActionCostFunction | [types/foundry.types.TokenMovementActionCostFunction.md](types/foundry.types.TokenMovementActionCostFunction.md) | TokenMovementActionCostFunction: (... |
| TokenMovementCostAggregator | [types/foundry.documents.types.TokenMovementCostAggregator.md](types/foundry.documents.types.TokenMovementCostAggregator.md) | TokenMovementCostAggregator: (... |
| TokenMovementCostFunction | [types/foundry.documents.types.TokenMovementCostFunction.md](types/foundry.documents.types.TokenMovementCostFunction.md) | TokenMovementCostFunction: [GridMeasurePathCostFunction3D](foundry.grid.types.GridMeasurePathCostFunction3D.md)<... |
| TokenMovementInstruction | [types/foundry.documents.types.TokenMovementInstruction.md](types/foundry.documents.types.TokenMovementInstruction.md) | TokenMovementInstruction: (... |
| TokenMovementMethod | [types/foundry.documents.types.TokenMovementMethod.md](types/foundry.documents.types.TokenMovementMethod.md) | TokenMovementMethod:... |
| TokenMovementState | [types/foundry.documents.types.TokenMovementState.md](types/foundry.documents.types.TokenMovementState.md) | TokenMovementState: "completed" \| "paused" \| "planned" \| "pending" \| "stopped"... |
| TokenPlannedMovementWaypoint | [types/foundry.types.TokenPlannedMovementWaypoint.md](types/foundry.types.TokenPlannedMovementWaypoint.md) | TokenPlannedMovementWaypoint: Omit<... |
| TokenResumeMovementCallback | [types/foundry.documents.types.TokenResumeMovementCallback.md](types/foundry.documents.types.TokenResumeMovementCallback.md) | TokenResumeMovementCallback: () => Promise<boolean>... |
| TokenRulerWaypoint | [types/foundry.types.TokenRulerWaypoint.md](types/foundry.types.TokenRulerWaypoint.md) | TokenRulerWaypoint: Omit<... |
| TokenShapeType | [types/CONST.TokenShapeType.md](types/CONST.TokenShapeType.md) | TokenShapeType: typeof [TOKEN\_SHAPES](../variables/CONST.TOKEN_SHAPES.md)[keyof typeof [TOKEN\_SHAPES](../variables/CONST.TOKEN_SHAPES.md)]... |
| TourStatus | [types/foundry.TourStatus.md](types/foundry.TourStatus.md) | TourStatus: typeof Tour.STATUS[keyof typeof Tour.STATUS]... |
| TypedObjectFieldOptions | [types/foundry.data.types.TypedObjectFieldOptions.md](types/foundry.data.types.TypedObjectFieldOptions.md) | TypedObjectFieldOptions: [DataFieldOptions](../interfaces/foundry.data.types.DataFieldOptions.md) & [\_TypedObjectFieldOptions](../interfaces/foundry.data.types._TypedObjectFieldOptions.md)... |
| TypedObjectKeyValidator | [types/foundry.data.types.TypedObjectKeyValidator.md](types/foundry.data.types.TypedObjectKeyValidator.md) | TypedObjectKeyValidator: (key: string) => boolean... |
| VFXPathPoint | [types/foundry.VFXPathPoint.md](types/foundry.VFXPathPoint.md) | VFXPathPoint: [VFXBasePathPoint](../interfaces/foundry.VFXBasePathPoint.md) & {... |
| VFXPositionalSoundComponentData | [types/foundry.VFXPositionalSoundComponentData.md](types/foundry.VFXPositionalSoundComponentData.md) | VFXPositionalSoundComponentData: [VFXPositionalSoundData](../interfaces/foundry.VFXPositionalSoundData.md) & [\_VFXPositionalSoundData](../interfaces/foundry._VFXPositionalSoundData.md)... |
| VFXSingleAttackData | [types/foundry.VFXSingleAttackData.md](types/foundry.VFXSingleAttackData.md) | VFXSingleAttackData: [VFXComponentData](../interfaces/foundry.VFXComponentData.md) & [\_VFXSingleAttackData](../interfaces/foundry._VFXSingleAttackData.md)... |
| VFXSingleAttackStepName | [types/foundry.VFXSingleAttackStepName.md](types/foundry.VFXSingleAttackStepName.md) | VFXSingleAttackStepName: "charge" \| "projectile" \| "impact"... |
| VertexMap | [types/foundry.canvas.geometry.types.VertexMap.md](types/foundry.canvas.geometry.types.VertexMap.md) | VertexMap: Map<number, [PolygonVertex](../classes/foundry.canvas.geometry.edges.PolygonVertex.md)>... |
| WallCategory | [types/foundry.documents.types.WallCategory.md](types/foundry.documents.types.WallCategory.md) | WallCategory:... |
| WallDoorAnimationFunction | [types/CONFIG.WallDoorAnimationFunction.md](types/CONFIG.WallDoorAnimationFunction.md) | WallDoorAnimationFunction: (open: boolean) => [CanvasAnimationAttribute](../interfaces/foundry.canvas.animation.types.CanvasAnimationAttribute.md)[]... |
| WallDoorAnimationHook | [types/CONFIG.WallDoorAnimationHook.md](types/CONFIG.WallDoorAnimationHook.md) | WallDoorAnimationHook: (open: boolean) => Promise<void> \| void... |
| WallRestrictionType | [types/CONST.WallRestrictionType.md](types/CONST.WallRestrictionType.md) | WallRestrictionType: typeof [WALL\_RESTRICTION\_TYPES](../variables/CONST.WALL_RESTRICTION_TYPES.md)[number]... |
| WeatherParticleConfiguration | [types/CONFIG.WeatherParticleConfiguration.md](types/CONFIG.WeatherParticleConfiguration.md) | WeatherParticleConfiguration: [ParticleGeneratorConfiguration](../interfaces/foundry.canvas.animation.types.ParticleGeneratorConfiguration.md)... |
| WorkerTask | [types/foundry.WorkerTask.md](types/foundry.WorkerTask.md) | WorkerTask: Record<string, any>... |
| WorldCompendiumConfiguration | [types/foundry.types.WorldCompendiumConfiguration.md](types/foundry.types.WorldCompendiumConfiguration.md) | WorldCompendiumConfiguration: Record<string, [WorldCompendiumPackConfiguration](../interfaces/foundry.types.WorldCompendiumPackConfiguration.md)>... |

## Variables

| Title | File | Description |
|-------|------|-------------|
| ACTIVE_EFFECT_CHANGE_PHASES | [variables/CONST.ACTIVE_EFFECT_CHANGE_PHASES.md](variables/CONST.ACTIVE_EFFECT_CHANGE_PHASES.md) | ACTIVE\_EFFECT\_CHANGE\_PHASES: readonly ["initial", "final"] = ...... |
| ACTIVE_EFFECT_CHANGE_TYPES | [variables/CONST.ACTIVE_EFFECT_CHANGE_TYPES.md](variables/CONST.ACTIVE_EFFECT_CHANGE_TYPES.md) | ACTIVE\_EFFECT\_CHANGE\_TYPES: Readonly<... |
| ACTIVE_EFFECT_DURATION_UNITS | [variables/CONST.ACTIVE_EFFECT_DURATION_UNITS.md](variables/CONST.ACTIVE_EFFECT_DURATION_UNITS.md) | ACTIVE\_EFFECT\_DURATION\_UNITS: readonly [... |
| ACTIVE_EFFECT_EXPIRY_EVENTS | [variables/CONST.ACTIVE_EFFECT_EXPIRY_EVENTS.md](variables/CONST.ACTIVE_EFFECT_EXPIRY_EVENTS.md) | ACTIVE\_EFFECT\_EXPIRY\_EVENTS: readonly [... |
| ACTIVE_EFFECT_SHOW_ICON | [variables/CONST.ACTIVE_EFFECT_SHOW_ICON.md](variables/CONST.ACTIVE_EFFECT_SHOW_ICON.md) | ACTIVE\_EFFECT\_SHOW\_ICON: Readonly<{ ALWAYS: 2; CONDITIONAL: 1; NEVER: 0 }> = ...... |
| ACTIVE_EFFECT_TIME_DURATION_UNITS | [variables/CONST.ACTIVE_EFFECT_TIME_DURATION_UNITS.md](variables/CONST.ACTIVE_EFFECT_TIME_DURATION_UNITS.md) | ACTIVE\_EFFECT\_TIME\_DURATION\_UNITS: readonly [... |
| ALLOWED_HTML_ATTRIBUTES | [variables/CONST.ALLOWED_HTML_ATTRIBUTES.md](variables/CONST.ALLOWED_HTML_ATTRIBUTES.md) | ALLOWED\_HTML\_ATTRIBUTES: Readonly<... |
| ALLOWED_HTML_TAGS | [variables/CONST.ALLOWED_HTML_TAGS.md](variables/CONST.ALLOWED_HTML_TAGS.md) | ALLOWED\_HTML\_TAGS: readonly [... |
| ALLOWED_URL_SCHEMES | [variables/CONST.ALLOWED_URL_SCHEMES.md](variables/CONST.ALLOWED_URL_SCHEMES.md) | ALLOWED\_URL\_SCHEMES: readonly [... |
| ALLOWED_URL_SCHEMES_APPLIED_TO_ATTRIBUTES | [variables/CONST.ALLOWED_URL_SCHEMES_APPLIED_TO_ATTRIBUTES.md](variables/CONST.ALLOWED_URL_SCHEMES_APPLIED_TO_ATTRIBUTES.md) | ALLOWED\_URL\_SCHEMES\_APPLIED\_TO\_ATTRIBUTES: readonly ["href", "src", "cite"] = ...... |
| ALL_DOCUMENT_TYPES | [variables/CONST.ALL_DOCUMENT_TYPES.md](variables/CONST.ALL_DOCUMENT_TYPES.md) | ALL\_DOCUMENT\_TYPES: readonly [... |
| ASCII | [variables/CONST.ASCII.md](variables/CONST.ASCII.md) | ASCII: string = ...... |
| AUDIO_CHANNELS | [variables/CONST.AUDIO_CHANNELS.md](variables/CONST.AUDIO_CHANNELS.md) | AUDIO\_CHANNELS: Readonly<... |
| AUDIO_FILE_EXTENSIONS | [variables/CONST.AUDIO_FILE_EXTENSIONS.md](variables/CONST.AUDIO_FILE_EXTENSIONS.md) | AUDIO\_FILE\_EXTENSIONS: Readonly<... |
| ActiveEffect | [variables/CONFIG.ActiveEffect.md](variables/CONFIG.ActiveEffect.md) | ActiveEffect: {... |
| Actor | [variables/CONFIG.Actor.md](variables/CONFIG.Actor.md) | Actor: {... |
| ActorDelta | [variables/CONFIG.ActorDelta.md](variables/CONFIG.ActorDelta.md) | ActorDelta: { documentClass: typeof [documents](../modules/foundry.documents.md).[ActorDelta](../classes/foundry.documents.ActorDelta.md) } = ...... |
| Adventure | [variables/CONFIG.Adventure.md](variables/CONFIG.Adventure.md) | Adventure: {... |
| AmbientLight | [variables/CONFIG.AmbientLight.md](variables/CONFIG.AmbientLight.md) | AmbientLight: {... |
| AmbientSound | [variables/CONFIG.AmbientSound.md](variables/CONFIG.AmbientSound.md) | AmbientSound: {... |
| AsyncFunction | [variables/foundry.utils.AsyncFunction.md](variables/foundry.utils.AsyncFunction.md) | AsyncFunction: any = ...... |
| BASE_DOCUMENT_TYPE | [variables/CONST.BASE_DOCUMENT_TYPE.md](variables/CONST.BASE_DOCUMENT_TYPE.md) | BASE\_DOCUMENT\_TYPE: "base"... |
| CANVAS_PERFORMANCE_MODES | [variables/CONST.CANVAS_PERFORMANCE_MODES.md](variables/CONST.CANVAS_PERFORMANCE_MODES.md) | CANVAS\_PERFORMANCE\_MODES: Readonly<{ HIGH: 2; LOW: 0; MAX: 3; MED: 1 }> = ...... |
| CARD_DRAW_MODES | [variables/CONST.CARD_DRAW_MODES.md](variables/CONST.CARD_DRAW_MODES.md) | CARD\_DRAW\_MODES: Readonly<{ BOTTOM: 1; FIRST: 0; LAST: 1; RANDOM: 2; TOP: 0 }> = ...... |
| CHAT_MESSAGE_STYLES | [variables/CONST.CHAT_MESSAGE_STYLES.md](variables/CONST.CHAT_MESSAGE_STYLES.md) | CHAT\_MESSAGE\_STYLES: { EMOTE: 3; IC: 2; OOC: 1; OTHER: 0 } = ...... |
| CLIPPER_SCALING_FACTOR | [variables/CONST.CLIPPER_SCALING_FACTOR.md](variables/CONST.CLIPPER_SCALING_FACTOR.md) | CLIPPER\_SCALING\_FACTOR: 100... |
| COMBAT_ANNOUNCEMENTS | [variables/CONST.COMBAT_ANNOUNCEMENTS.md](variables/CONST.COMBAT_ANNOUNCEMENTS.md) | COMBAT\_ANNOUNCEMENTS: readonly ["startEncounter", "nextUp", "yourTurn"] = ...... |
| COMPATIBILITY_MODES | [variables/CONST.COMPATIBILITY_MODES.md](variables/CONST.COMPATIBILITY_MODES.md) | COMPATIBILITY\_MODES: Readonly<{ ERROR: 2; FAILURE: 3; SILENT: 0; WARNING: 1 }> = ...... |
| COMPENDIUM_DOCUMENT_TYPES | [variables/CONST.COMPENDIUM_DOCUMENT_TYPES.md](variables/CONST.COMPENDIUM_DOCUMENT_TYPES.md) | COMPENDIUM\_DOCUMENT\_TYPES: readonly [... |
| CORE_SUPPORTED_LANGUAGES | [variables/CONST.CORE_SUPPORTED_LANGUAGES.md](variables/CONST.CORE_SUPPORTED_LANGUAGES.md) | CORE\_SUPPORTED\_LANGUAGES: readonly ["en"] = ...... |
| CSS_THEMES | [variables/CONST.CSS_THEMES.md](variables/CONST.CSS_THEMES.md) | CSS\_THEMES: Readonly<... |
| CURSOR_STYLES | [variables/CONST.CURSOR_STYLES.md](variables/CONST.CURSOR_STYLES.md) | CURSOR\_STYLES: Readonly<... |
| Canvas | [variables/CONFIG.Canvas.md](variables/CONFIG.Canvas.md) | Canvas: {... |
| Card | [variables/CONFIG.Card.md](variables/CONFIG.Card.md) | Card: {... |
| Cards | [variables/CONFIG.Cards.md](variables/CONFIG.Cards.md) | Cards: {... |
| ChatMessage | [variables/CONFIG.ChatMessage.md](variables/CONFIG.ChatMessage.md) | ChatMessage: {... |
| Combat | [variables/CONFIG.Combat.md](variables/CONFIG.Combat.md) | Combat: {... |
| Combatant | [variables/CONFIG.Combatant.md](variables/CONFIG.Combatant.md) | Combatant: {... |
| CombatantGroup | [variables/CONFIG.CombatantGroup.md](variables/CONFIG.CombatantGroup.md) | CombatantGroup: {... |
| DEFAULT_TOKEN | [variables/CONST.DEFAULT_TOKEN.md](variables/CONST.DEFAULT_TOKEN.md) | DEFAULT\_TOKEN: "icons/svg/mystery-man.svg"... |
| DIRECTORY_SEARCH_MODES | [variables/CONST.DIRECTORY_SEARCH_MODES.md](variables/CONST.DIRECTORY_SEARCH_MODES.md) | DIRECTORY\_SEARCH\_MODES: Readonly<{ FULL: "full"; NAME: "name" }> = ...... |
| DOCUMENT_LINK_TYPES | [variables/CONST.DOCUMENT_LINK_TYPES.md](variables/CONST.DOCUMENT_LINK_TYPES.md) | DOCUMENT\_LINK\_TYPES: readonly [... |
| DOCUMENT_META_OWNERSHIP_LEVELS | [variables/CONST.DOCUMENT_META_OWNERSHIP_LEVELS.md](variables/CONST.DOCUMENT_META_OWNERSHIP_LEVELS.md) | DOCUMENT\_META\_OWNERSHIP\_LEVELS: Readonly<{ DEFAULT: -20; NOCHANGE: -10 }> = ...... |
| DOCUMENT_OWNERSHIP_LEVELS | [variables/CONST.DOCUMENT_OWNERSHIP_LEVELS.md](variables/CONST.DOCUMENT_OWNERSHIP_LEVELS.md) | DOCUMENT\_OWNERSHIP\_LEVELS: Readonly<... |
| DRAWING_FILL_TYPES | [variables/CONST.DRAWING_FILL_TYPES.md](variables/CONST.DRAWING_FILL_TYPES.md) | DRAWING\_FILL\_TYPES: Readonly<{ NONE: 0; PATTERN: 2; SOLID: 1 }> = ...... |
| DatabaseBackend | [variables/CONFIG.DatabaseBackend.md](variables/CONFIG.DatabaseBackend.md) | DatabaseBackend: [ClientDatabaseBackend](../classes/foundry.data.ClientDatabaseBackend.md) = ...... |
| Dice | [variables/CONFIG.Dice.md](variables/CONFIG.Dice.md) | Dice: {... |
| Drawing | [variables/CONFIG.Drawing.md](variables/CONFIG.Drawing.md) | Drawing: {... |
| EDGE_DIRECTIONS | [variables/CONST.EDGE_DIRECTIONS.md](variables/CONST.EDGE_DIRECTIONS.md) | EDGE\_DIRECTIONS: Readonly<{ BOTH: 0; LEFT: 1; RIGHT: 2 }> = ...... |
| EDGE_DIRECTION_MODES | [variables/CONST.EDGE_DIRECTION_MODES.md](variables/CONST.EDGE_DIRECTION_MODES.md) | EDGE\_DIRECTION\_MODES: Readonly<{ BOTH: 2; NORMAL: 0; REVERSED: 1 }> = ...... |
| EDGE_RESTRICTION_TYPES | [variables/CONST.EDGE_RESTRICTION_TYPES.md](variables/CONST.EDGE_RESTRICTION_TYPES.md) | EDGE\_RESTRICTION\_TYPES: readonly ["light", "darkness", "sight", "sound", "move"] = ...... |
| EDGE_SENSE_TYPES | [variables/CONST.EDGE_SENSE_TYPES.md](variables/CONST.EDGE_SENSE_TYPES.md) | EDGE\_SENSE\_TYPES: Readonly<... |
| EMBEDDED_DOCUMENT_TYPES | [variables/CONST.EMBEDDED_DOCUMENT_TYPES.md](variables/CONST.EMBEDDED_DOCUMENT_TYPES.md) | EMBEDDED\_DOCUMENT\_TYPES: readonly [... |
| FILE_CATEGORIES | [variables/CONST.FILE_CATEGORIES.md](variables/CONST.FILE_CATEGORIES.md) | FILE\_CATEGORIES: {... |
| FILE_PICKER_PUBLIC_DIRS | [variables/CONST.FILE_PICKER_PUBLIC_DIRS.md](variables/CONST.FILE_PICKER_PUBLIC_DIRS.md) | FILE\_PICKER\_PUBLIC\_DIRS: readonly [... |
| FOG_EXPLORATION_MODES | [variables/CONST.FOG_EXPLORATION_MODES.md](variables/CONST.FOG_EXPLORATION_MODES.md) | FOG\_EXPLORATION\_MODES: Readonly<{ DISABLED: 0; INDIVIDUAL: 1; SHARED: 2 }> = ...... |
| FOLDER_DOCUMENT_TYPES | [variables/CONST.FOLDER_DOCUMENT_TYPES.md](variables/CONST.FOLDER_DOCUMENT_TYPES.md) | FOLDER\_DOCUMENT\_TYPES: readonly [... |
| FOLDER_MAX_DEPTH | [variables/CONST.FOLDER_MAX_DEPTH.md](variables/CONST.FOLDER_MAX_DEPTH.md) | FOLDER\_MAX\_DEPTH: 4... |
| FONT_FILE_EXTENSIONS | [variables/CONST.FONT_FILE_EXTENSIONS.md](variables/CONST.FONT_FILE_EXTENSIONS.md) | FONT\_FILE\_EXTENSIONS: Readonly<... |
| FONT_WEIGHTS | [variables/CONST.FONT_WEIGHTS.md](variables/CONST.FONT_WEIGHTS.md) | FONT\_WEIGHTS: Readonly<... |
| FogExploration | [variables/CONFIG.FogExploration.md](variables/CONFIG.FogExploration.md) | FogExploration: {... |
| Folder | [variables/CONFIG.Folder.md](variables/CONFIG.Folder.md) | Folder: {... |
| GAME_VIEWS | [variables/CONST.GAME_VIEWS.md](variables/CONST.GAME_VIEWS.md) | GAME\_VIEWS: readonly ["game", "stream"] = ...... |
| GRAPHICS_FILE_EXTENSIONS | [variables/CONST.GRAPHICS_FILE_EXTENSIONS.md](variables/CONST.GRAPHICS_FILE_EXTENSIONS.md) | GRAPHICS\_FILE\_EXTENSIONS: Readonly<... |
| GRID_DIAGONALS | [variables/CONST.GRID_DIAGONALS.md](variables/CONST.GRID_DIAGONALS.md) | GRID\_DIAGONALS: Readonly<... |
| GRID_MIN_SIZE | [variables/CONST.GRID_MIN_SIZE.md](variables/CONST.GRID_MIN_SIZE.md) | GRID\_MIN\_SIZE: 20... |
| GRID_SNAPPING_MODES | [variables/CONST.GRID_SNAPPING_MODES.md](variables/CONST.GRID_SNAPPING_MODES.md) | GRID\_SNAPPING\_MODES: Readonly<... |
| GRID_TYPES | [variables/CONST.GRID_TYPES.md](variables/CONST.GRID_TYPES.md) | GRID\_TYPES: Readonly<... |
| HTML_FILE_EXTENSIONS | [variables/CONST.HTML_FILE_EXTENSIONS.md](variables/CONST.HTML_FILE_EXTENSIONS.md) | HTML\_FILE\_EXTENSIONS: Readonly<... |
| IDLE_THRESHOLD_MS | [variables/CONST.IDLE_THRESHOLD_MS.md](variables/CONST.IDLE_THRESHOLD_MS.md) | IDLE\_THRESHOLD\_MS: number = ...... |
| IMAGE_FILE_EXTENSIONS | [variables/CONST.IMAGE_FILE_EXTENSIONS.md](variables/CONST.IMAGE_FILE_EXTENSIONS.md) | IMAGE\_FILE\_EXTENSIONS: Readonly<... |
| Item | [variables/CONFIG.Item.md](variables/CONFIG.Item.md) | Item: {... |
| JOURNAL_ENTRY_PAGE_FORMATS | [variables/CONST.JOURNAL_ENTRY_PAGE_FORMATS.md](variables/CONST.JOURNAL_ENTRY_PAGE_FORMATS.md) | JOURNAL\_ENTRY\_PAGE\_FORMATS: Readonly<{ HTML: 1; MARKDOWN: 2 }> = ...... |
| JournalEntry | [variables/CONFIG.JournalEntry.md](variables/CONFIG.JournalEntry.md) | JournalEntry: {... |
| JournalEntryCategory | [variables/CONFIG.JournalEntryCategory.md](variables/CONFIG.JournalEntryCategory.md) | JournalEntryCategory: {... |
| JournalEntryPage | [variables/CONFIG.JournalEntryPage.md](variables/CONFIG.JournalEntryPage.md) | JournalEntryPage: {... |
| KEYBINDING_PRECEDENCE | [variables/CONST.KEYBINDING_PRECEDENCE.md](variables/CONST.KEYBINDING_PRECEDENCE.md) | KEYBINDING\_PRECEDENCE: Readonly<{ DEFERRED: 2; NORMAL: 1; PRIORITY: 0 }> = ...... |
| LIGHTING_LEVELS | [variables/CONST.LIGHTING_LEVELS.md](variables/CONST.LIGHTING_LEVELS.md) | LIGHTING\_LEVELS: Readonly<... |
| Level | [variables/CONFIG.Level.md](variables/CONFIG.Level.md) | Level: { documentClass: typeof [documents](../modules/foundry.documents.md).[Level](../classes/foundry.documents.Level.md) } = ...... |
| MACRO_SCOPES | [variables/CONST.MACRO_SCOPES.md](variables/CONST.MACRO_SCOPES.md) | MACRO\_SCOPES: readonly ["global", "actors", "actor"] = ...... |
| MACRO_TYPES | [variables/CONST.MACRO_TYPES.md](variables/CONST.MACRO_TYPES.md) | MACRO\_TYPES: Readonly<{ CHAT: "chat"; SCRIPT: "script" }> = ...... |
| MAX_COLOR | [variables/foundry.canvas.rendering.BLEND_MODES.MAX_COLOR.md](variables/foundry.canvas.rendering.BLEND_MODES.MAX_COLOR.md) | MAX\_COLOR: number[]... |
| MEDIA_FILE_CATEGORIES | [variables/CONST.MEDIA_FILE_CATEGORIES.md](variables/CONST.MEDIA_FILE_CATEGORIES.md) | MEDIA\_FILE\_CATEGORIES: readonly [... |
| MEDIA_MIME_TYPES | [variables/CONST.MEDIA_MIME_TYPES.md](variables/CONST.MEDIA_MIME_TYPES.md) | MEDIA\_MIME\_TYPES: (... |
| MIN_ALL | [variables/foundry.canvas.rendering.BLEND_MODES.MIN_ALL.md](variables/foundry.canvas.rendering.BLEND_MODES.MIN_ALL.md) | MIN\_ALL: number[]... |
| MIN_COLOR | [variables/foundry.canvas.rendering.BLEND_MODES.MIN_COLOR.md](variables/foundry.canvas.rendering.BLEND_MODES.MIN_COLOR.md) | MIN\_COLOR: number[]... |
| MOVEMENT_DIRECTIONS | [variables/CONST.MOVEMENT_DIRECTIONS.md](variables/CONST.MOVEMENT_DIRECTIONS.md) | MOVEMENT\_DIRECTIONS: Readonly<... |
| Macro | [variables/CONFIG.Macro.md](variables/CONFIG.Macro.md) | Macro: {... |
| Note | [variables/CONFIG.Note.md](variables/CONFIG.Note.md) | Note: {... |
| OCCLUSION_MODES | [variables/CONST.OCCLUSION_MODES.md](variables/CONST.OCCLUSION_MODES.md) | OCCLUSION\_MODES: Readonly<... |
| OPERATOR_IDENTIFIER | [variables/foundry.data.operators.OPERATOR_IDENTIFIER.md](variables/foundry.data.operators.OPERATOR_IDENTIFIER.md) | OPERATOR\_IDENTIFIER: string = "\_\_$OPERATOR$\_\_"... |
| OPERATOR_VALUE | [variables/foundry.data.operators.OPERATOR_VALUE.md](variables/foundry.data.operators.OPERATOR_VALUE.md) | OPERATOR\_VALUE: symbol = ...... |
| PACKAGE_AVAILABILITY_CODES | [variables/CONST.PACKAGE_AVAILABILITY_CODES.md](variables/CONST.PACKAGE_AVAILABILITY_CODES.md) | PACKAGE\_AVAILABILITY\_CODES: Readonly<... |
| PACKAGE_TYPES | [variables/CONST.PACKAGE_TYPES.md](variables/CONST.PACKAGE_TYPES.md) | PACKAGE\_TYPES: readonly ["world", "system", "module"] = ...... |
| PACKAGE_TYPES | [variables/foundry.packages.PACKAGE_TYPES.md](variables/foundry.packages.PACKAGE_TYPES.md) | PACKAGE\_TYPES: { module: [Module](../classes/foundry.packages.Module.md); system: [System](../classes/foundry.packages.System.md); world: [World](../classes/foundry.packages.World.md) } = ...... |
| PASSWORD_SAFE_STRING | [variables/CONST.PASSWORD_SAFE_STRING.md](variables/CONST.PASSWORD_SAFE_STRING.md) | PASSWORD\_SAFE\_STRING: "â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢" = ...... |
| PLAYLIST_MODES | [variables/CONST.PLAYLIST_MODES.md](variables/CONST.PLAYLIST_MODES.md) | PLAYLIST\_MODES: Readonly<... |
| PLAYLIST_SORT_MODES | [variables/CONST.PLAYLIST_SORT_MODES.md](variables/CONST.PLAYLIST_SORT_MODES.md) | PLAYLIST\_SORT\_MODES: Readonly<{ ALPHABETICAL: "a"; MANUAL: "m" }> = ...... |
| PRE_IMPACT_MS | [variables/foundry.canvas.vfx.constants.PRE_IMPACT_MS.md](variables/foundry.canvas.vfx.constants.PRE_IMPACT_MS.md) | PRE\_IMPACT\_MS: number = 500... |
| PRIMARY_DOCUMENT_TYPES | [variables/CONST.PRIMARY_DOCUMENT_TYPES.md](variables/CONST.PRIMARY_DOCUMENT_TYPES.md) | PRIMARY\_DOCUMENT\_TYPES: readonly [... |
| Playlist | [variables/CONFIG.Playlist.md](variables/CONFIG.Playlist.md) | Playlist: {... |
| PlaylistSound | [variables/CONFIG.PlaylistSound.md](variables/CONFIG.PlaylistSound.md) | PlaylistSound: {... |
| REGION_EVENTS | [variables/CONST.REGION_EVENTS.md](variables/CONST.REGION_EVENTS.md) | REGION\_EVENTS: {... |
| REGION_MOVEMENT_SEGMENTS | [variables/CONST.REGION_MOVEMENT_SEGMENTS.md](variables/CONST.REGION_MOVEMENT_SEGMENTS.md) | REGION\_MOVEMENT\_SEGMENTS: Readonly<{ ENTER: 1; EXIT: -1; MOVE: 0 }> = ...... |
| REGION_VISIBILITY | [variables/CONST.REGION_VISIBILITY.md](variables/CONST.REGION_VISIBILITY.md) | REGION\_VISIBILITY: Readonly<... |
| Region | [variables/CONFIG.Region.md](variables/CONFIG.Region.md) | Region: {... |
| RegionBehavior | [variables/CONFIG.RegionBehavior.md](variables/CONFIG.RegionBehavior.md) | RegionBehavior: {... |
| RollGrammar | [variables/foundry.dice.RollGrammar.md](variables/foundry.dice.RollGrammar.md) | RollGrammar: { parse(formula: string): [RollParseNode](../interfaces/foundry.dice.RollParseNode.md) \| [RollTermData](../interfaces/foundry.dice.terms.RollTermData.md) } = Parser... |
| RollTable | [variables/CONFIG.RollTable.md](variables/CONFIG.RollTable.md) | RollTable: {... |
| SETTING_SCOPES | [variables/CONST.SETTING_SCOPES.md](variables/CONST.SETTING_SCOPES.md) | SETTING\_SCOPES: Readonly<{ CLIENT: "client"; USER: "user"; WORLD: "world" }> = ...... |
| SETUP_PACKAGE_PROGRESS | [variables/CONST.SETUP_PACKAGE_PROGRESS.md](variables/CONST.SETUP_PACKAGE_PROGRESS.md) | SETUP\_PACKAGE\_PROGRESS: Readonly<... |
| SETUP_VIEWS | [variables/CONST.SETUP_VIEWS.md](variables/CONST.SETUP_VIEWS.md) | SETUP\_VIEWS: readonly [... |
| SHOWDOWN_OPTIONS | [variables/CONST.SHOWDOWN_OPTIONS.md](variables/CONST.SHOWDOWN_OPTIONS.md) | SHOWDOWN\_OPTIONS: Readonly<... |
| SIMPLIFIED_GREGORIAN_CALENDAR_CONFIG | [variables/foundry.data.SIMPLIFIED_GREGORIAN_CALENDAR_CONFIG.md](variables/foundry.data.SIMPLIFIED_GREGORIAN_CALENDAR_CONFIG.md) | SIMPLIFIED\_GREGORIAN\_CALENDAR\_CONFIG: [CalendarConfig](../interfaces/foundry.data.types.CalendarConfig.md) = ...... |
| SOFTWARE_UPDATE_CHANNELS | [variables/CONST.SOFTWARE_UPDATE_CHANNELS.md](variables/CONST.SOFTWARE_UPDATE_CHANNELS.md) | SOFTWARE\_UPDATE\_CHANNELS: Readonly<... |
| SORT_INTEGER_DENSITY | [variables/CONST.SORT_INTEGER_DENSITY.md](variables/CONST.SORT_INTEGER_DENSITY.md) | SORT\_INTEGER\_DENSITY: 100000... |
| SQRT1_3 | [variables/primitives.Math.SQRT1_3.md](variables/primitives.Math.SQRT1_3.md) | SQRT1\_3: number = 0.5773502691896257... |
| SQRT3 | [variables/primitives.Math.SQRT3.md](variables/primitives.Math.SQRT3.md) | SQRT3: number = 1.7320508075688772... |
| SYSTEM_SPECIFIC_COMPENDIUM_TYPES | [variables/CONST.SYSTEM_SPECIFIC_COMPENDIUM_TYPES.md](variables/CONST.SYSTEM_SPECIFIC_COMPENDIUM_TYPES.md) | SYSTEM\_SPECIFIC\_COMPENDIUM\_TYPES: readonly ["ActiveEffect", "Actor", "Item"] = ...... |
| Scene | [variables/CONFIG.Scene.md](variables/CONFIG.Scene.md) | Scene: {... |
| TABLE_RESULT_TYPES | [variables/CONST.TABLE_RESULT_TYPES.md](variables/CONST.TABLE_RESULT_TYPES.md) | TABLE\_RESULT\_TYPES: { DOCUMENT: "document"; TEXT: "text" } = ...... |
| TEXTURE_DATA_FIT_MODES | [variables/CONST.TEXTURE_DATA_FIT_MODES.md](variables/CONST.TEXTURE_DATA_FIT_MODES.md) | TEXTURE\_DATA\_FIT\_MODES: readonly ["fill", "contain", "cover", "width", "height"] = ...... |
| TEXTURE_FILE_EXTENSIONS | [variables/CONST.TEXTURE_FILE_EXTENSIONS.md](variables/CONST.TEXTURE_FILE_EXTENSIONS.md) | TEXTURE\_FILE\_EXTENSIONS: Readonly<... |
| TEXT_ANCHOR_POINTS | [variables/CONST.TEXT_ANCHOR_POINTS.md](variables/CONST.TEXT_ANCHOR_POINTS.md) | TEXT\_ANCHOR\_POINTS: Readonly<... |
| TEXT_ENRICH_EMBED_MAX_DEPTH | [variables/CONST.TEXT_ENRICH_EMBED_MAX_DEPTH.md](variables/CONST.TEXT_ENRICH_EMBED_MAX_DEPTH.md) | TEXT\_ENRICH\_EMBED\_MAX\_DEPTH: 5... |
| TEXT_FILE_EXTENSIONS | [variables/CONST.TEXT_FILE_EXTENSIONS.md](variables/CONST.TEXT_FILE_EXTENSIONS.md) | TEXT\_FILE\_EXTENSIONS: Readonly<... |
| TILE_OCCLUSION_MODES | [variables/CONST.TILE_OCCLUSION_MODES.md](variables/CONST.TILE_OCCLUSION_MODES.md) | TILE\_OCCLUSION\_MODES: Readonly<... |
| TIMEOUTS | [variables/CONST.TIMEOUTS.md](variables/CONST.TIMEOUTS.md) | TIMEOUTS: Readonly<... |
| TOKEN_DISPLAY_MODES | [variables/CONST.TOKEN_DISPLAY_MODES.md](variables/CONST.TOKEN_DISPLAY_MODES.md) | TOKEN\_DISPLAY\_MODES: Readonly<... |
| TOKEN_DISPOSITIONS | [variables/CONST.TOKEN_DISPOSITIONS.md](variables/CONST.TOKEN_DISPOSITIONS.md) | TOKEN\_DISPOSITIONS: Readonly<... |
| TOKEN_OCCLUSION_MODES | [variables/CONST.TOKEN_OCCLUSION_MODES.md](variables/CONST.TOKEN_OCCLUSION_MODES.md) | TOKEN\_OCCLUSION\_MODES: Readonly<... |
| TOKEN_SHAPES | [variables/CONST.TOKEN_SHAPES.md](variables/CONST.TOKEN_SHAPES.md) | TOKEN\_SHAPES: Readonly<... |
| TOKEN_TURN_MARKER_MODES | [variables/CONST.TOKEN_TURN_MARKER_MODES.md](variables/CONST.TOKEN_TURN_MARKER_MODES.md) | TOKEN\_TURN\_MARKER\_MODES: Readonly<{ CUSTOM: 2; DEFAULT: 1; DISABLED: 0 }> = ...... |
| TRUSTED_IFRAME_DOMAINS | [variables/CONST.TRUSTED_IFRAME_DOMAINS.md](variables/CONST.TRUSTED_IFRAME_DOMAINS.md) | TRUSTED\_IFRAME\_DOMAINS: readonly ["google.com", "youtube.com"] = ...... |
| TableResult | [variables/CONFIG.TableResult.md](variables/CONFIG.TableResult.md) | TableResult: {... |
| TextEditor | [variables/CONFIG.TextEditor.md](variables/CONFIG.TextEditor.md) | TextEditor: {... |
| Tile | [variables/CONFIG.Tile.md](variables/CONFIG.Tile.md) | Tile: {... |
| Token | [variables/CONFIG.Token.md](variables/CONFIG.Token.md) | Token: {... |
| UPLOADABLE_FILE_EXTENSIONS | [variables/CONST.UPLOADABLE_FILE_EXTENSIONS.md](variables/CONST.UPLOADABLE_FILE_EXTENSIONS.md) | UPLOADABLE\_FILE\_EXTENSIONS: Readonly<... |
| USER_PERMISSIONS | [variables/CONST.USER_PERMISSIONS.md](variables/CONST.USER_PERMISSIONS.md) | USER\_PERMISSIONS: Readonly<... |
| USER_ROLES | [variables/CONST.USER_ROLES.md](variables/CONST.USER_ROLES.md) | USER\_ROLES: Readonly<... |
| USER_ROLE_NAMES | [variables/CONST.USER_ROLE_NAMES.md](variables/CONST.USER_ROLE_NAMES.md) | USER\_ROLE\_NAMES: {... |
| User | [variables/CONFIG.User.md](variables/CONFIG.User.md) | User: { collection: typeof [Users](../classes/foundry.documents.collections.Users.md); documentClass: typeof [documents](../modules/foundry.documents.md).[User](../classes/foundry.documents.User.md) }... |
| VIDEO_FILE_EXTENSIONS | [variables/CONST.VIDEO_FILE_EXTENSIONS.md](variables/CONST.VIDEO_FILE_EXTENSIONS.md) | VIDEO\_FILE\_EXTENSIONS: Readonly<... |
| VTT | [variables/CONST.VTT-1.md](variables/CONST.VTT-1.md) | VTT: "Foundry Virtual Tabletop"... |
| WALL_DOOR_INTERACTIONS | [variables/CONST.WALL_DOOR_INTERACTIONS.md](variables/CONST.WALL_DOOR_INTERACTIONS.md) | WALL\_DOOR\_INTERACTIONS: readonly ["open", "close", "lock", "unlock", "test"] = ...... |
| WALL_DOOR_STATES | [variables/CONST.WALL_DOOR_STATES.md](variables/CONST.WALL_DOOR_STATES.md) | WALL\_DOOR\_STATES: Readonly<{ CLOSED: 0; LOCKED: 2; OPEN: 1 }> = ...... |
| WALL_DOOR_TYPES | [variables/CONST.WALL_DOOR_TYPES.md](variables/CONST.WALL_DOOR_TYPES.md) | WALL\_DOOR\_TYPES: Readonly<{ DOOR: 1; NONE: 0; SECRET: 2 }> = ...... |
| WALL_MOVEMENT_TYPES | [variables/CONST.WALL_MOVEMENT_TYPES.md](variables/CONST.WALL_MOVEMENT_TYPES.md) | WALL\_MOVEMENT\_TYPES: Readonly<{ NONE: 0; NORMAL: 20 }> = ...... |
| WALL_RESTRICTION_TYPES | [variables/CONST.WALL_RESTRICTION_TYPES.md](variables/CONST.WALL_RESTRICTION_TYPES.md) | WALL\_RESTRICTION\_TYPES: readonly ["light", "sight", "sound", "move"] = ...... |
| WEBSITE_API_URL | [variables/CONST.WEBSITE_API_URL.md](variables/CONST.WEBSITE_API_URL.md) | WEBSITE\_API\_URL: "https://api.foundryvtt.com"... |
| WEBSITE_URL | [variables/CONST.WEBSITE_URL.md](variables/CONST.WEBSITE_URL.md) | WEBSITE\_URL: "https://foundryvtt.com"... |
| WORLD_DOCUMENT_TYPES | [variables/CONST.WORLD_DOCUMENT_TYPES.md](variables/CONST.WORLD_DOCUMENT_TYPES.md) | WORLD\_DOCUMENT\_TYPES: readonly [... |
| WORLD_JOIN_THEMES | [variables/CONST.WORLD_JOIN_THEMES.md](variables/CONST.WORLD_JOIN_THEMES.md) | WORLD\_JOIN\_THEMES: Readonly<... |
| Wall | [variables/CONFIG.Wall.md](variables/CONFIG.Wall.md) | Wall: {... |
| WebRTC | [variables/CONFIG.WebRTC.md](variables/CONFIG.WebRTC.md) | WebRTC: {... |
| canvasTextStyle | [variables/CONFIG.canvasTextStyle.md](variables/CONFIG.canvasTextStyle.md) | canvasTextStyle: any = ...... |
| compatibility | [variables/CONFIG.compatibility.md](variables/CONFIG.compatibility.md) | compatibility: {... |
| controlIcons | [variables/CONFIG.controlIcons.md](variables/CONFIG.controlIcons.md) | controlIcons: {... |
| cursors | [variables/CONFIG.cursors.md](variables/CONFIG.cursors.md) | cursors: {... |
| debouncedReload | [variables/foundry.utils.debouncedReload.md](variables/foundry.utils.debouncedReload.md) | debouncedReload: () => void = ...... |
| debug | [variables/CONFIG.debug.md](variables/CONFIG.debug.md) | debug: {... |
| defaultFontFamily | [variables/CONFIG.defaultFontFamily.md](variables/CONFIG.defaultFontFamily.md) | defaultFontFamily: string = "Signika"... |
| fontDefinitions | [variables/CONFIG.fontDefinitions.md](variables/CONFIG.fontDefinitions.md) | fontDefinitions: Record<string, [FontFamilyDefinition](../interfaces/CONFIG.FontFamilyDefinition.md)> = ...... |
| formulaEditor | [variables/CONFIG.formulaEditor.md](variables/CONFIG.formulaEditor.md) | formulaEditor: [FormulaEditorConfiguration](../interfaces/CONFIG.FormulaEditorConfiguration.md) = ...... |
| i18n | [variables/CONFIG.i18n.md](variables/CONFIG.i18n.md) | i18n: { searchMinimumCharacterLength: number; searchStopWords: Set<string> } = ...... |
| instances | [variables/foundry.applications.instances.md](variables/foundry.applications.instances.md) | instances: Map<... |
| queries | [variables/CONFIG.queries.md](variables/CONFIG.queries.md) | queries: {... |
| soundEffects | [variables/CONFIG.soundEffects.md](variables/CONFIG.soundEffects.md) | soundEffects: Record<... |
| sounds | [variables/CONFIG.sounds.md](variables/CONFIG.sounds.md) | sounds: Record<string, string> = ...... |
| specialStatusEffects | [variables/CONFIG.specialStatusEffects.md](variables/CONFIG.specialStatusEffects.md) | specialStatusEffects: Record<string, string> = ...... |
| statusEffects | [variables/CONFIG.statusEffects.md](variables/CONFIG.statusEffects.md) | statusEffects: { [id: string]: [StatusEffectConfig](../types/CONFIG.StatusEffectConfig.md) } = ...... |
| supportedLanguages | [variables/CONFIG.supportedLanguages.md](variables/CONFIG.supportedLanguages.md) | supportedLanguages: Record<string, string> = ...... |
| time | [variables/CONFIG.time.md](variables/CONFIG.time.md) | time: {... |
| ui | [variables/CONFIG.ui.md](variables/CONFIG.ui.md) | ui: {... |
| ui | [variables/foundry.ui.md](variables/foundry.ui.md) | ui: {... |
| ux | [variables/CONFIG.ux.md](variables/CONFIG.ux.md) | ux: {... |
| vtt | [variables/CONST.vtt.md](variables/CONST.vtt.md) | vtt: "Foundry VTT"... |
| weatherEffects | [variables/CONFIG.weatherEffects.md](variables/CONFIG.weatherEffects.md) | weatherEffects: Record<string, [WeatherAmbienceConfiguration](../interfaces/CONFIG.WeatherAmbienceConfiguration.md)> = ...... |

