---
title: "Canvas | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/variables/CONFIG.Canvas.html"
category: "variables"
---

# Variable Canvas`Const`

Canvas: {  
Â Â Â Â blurQuality: number;  
Â Â Â Â blurStrength: number;  
Â Â Â Â brightestColor: number;  
Â Â Â Â chatBubblesClass: typeof [ChatBubbles](../classes/foundry.canvas.animation.ChatBubbles.md);  
Â Â Â Â darknessAnimations: [DarknessSourceAnimationConfig](../types/CONFIG.DarknessSourceAnimationConfig.md);  
Â Â Â Â darknessColor: number;  
Â Â Â Â darknessLightPenalty: number;  
Â Â Â Â darknessSourceClass: typeof [PointDarknessSource](../classes/foundry.canvas.sources.PointDarknessSource.md);  
Â Â Â Â darknessSourcePaddingMultiplier: number;  
Â Â Â Â darknessToDaylightAnimationMS: number;  
Â Â Â Â daylightColor: number;  
Â Â Â Â daylightToDarknessAnimationMS: number;  
Â Â Â Â dispositionColors: {  
Â Â Â Â Â Â Â Â CONTROLLED: number;  
Â Â Â Â Â Â Â Â FRIENDLY: number;  
Â Â Â Â Â Â Â Â HOSTILE: number;  
Â Â Â Â Â Â Â Â INACTIVE: number;  
Â Â Â Â Â Â Â Â NEUTRAL: number;  
Â Â Â Â Â Â Â Â PARTY: number;  
Â Â Â Â Â Â Â Â SECRET: number;  
Â Â Â Â };  
Â Â Â Â doorControlClass: typeof [DoorControl](../classes/foundry.canvas.containers.DoorControl.md);  
Â Â Â Â dragSpeedModifier: number;  
Â Â Â Â elevationSnappingPrecision: number;  
Â Â Â Â exploredColor: number;  
Â Â Â Â fogManager: typeof [FogManager](../classes/foundry.canvas.perception.FogManager.md);  
Â Â Â Â globalLightSourceClass: typeof [GlobalLightSource](../classes/foundry.canvas.sources.GlobalLightSource.md);  
Â Â Â Â gridStyles: {  
Â Â Â Â Â Â Â Â dashedLines: {  
Â Â Â Â Â Â Â Â Â Â Â Â label: string;  
Â Â Â Â Â Â Â Â Â Â Â Â shaderClass: typeof [GridShader](../classes/foundry.canvas.rendering.shaders.GridShader.md);  
Â Â Â Â Â Â Â Â Â Â Â Â shaderOptions: { style: number };  
Â Â Â Â Â Â Â Â };  
Â Â Â Â Â Â Â Â diamondPoints: {  
Â Â Â Â Â Â Â Â Â Â Â Â label: string;  
Â Â Â Â Â Â Â Â Â Â Â Â shaderClass: typeof [GridShader](../classes/foundry.canvas.rendering.shaders.GridShader.md);  
Â Â Â Â Â Â Â Â Â Â Â Â shaderOptions: { style: number };  
Â Â Â Â Â Â Â Â };  
Â Â Â Â Â Â Â Â dottedLines: {  
Â Â Â Â Â Â Â Â Â Â Â Â label: string;  
Â Â Â Â Â Â Â Â Â Â Â Â shaderClass: typeof [GridShader](../classes/foundry.canvas.rendering.shaders.GridShader.md);  
Â Â Â Â Â Â Â Â Â Â Â Â shaderOptions: { style: number };  
Â Â Â Â Â Â Â Â };  
Â Â Â Â Â Â Â Â roundPoints: {  
Â Â Â Â Â Â Â Â Â Â Â Â label: string;  
Â Â Â Â Â Â Â Â Â Â Â Â shaderClass: typeof [GridShader](../classes/foundry.canvas.rendering.shaders.GridShader.md);  
Â Â Â Â Â Â Â Â Â Â Â Â shaderOptions: { style: number };  
Â Â Â Â Â Â Â Â };  
Â Â Â Â Â Â Â Â solidLines: {  
Â Â Â Â Â Â Â Â Â Â Â Â label: string;  
Â Â Â Â Â Â Â Â Â Â Â Â shaderClass: typeof [GridShader](../classes/foundry.canvas.rendering.shaders.GridShader.md);  
Â Â Â Â Â Â Â Â Â Â Â Â shaderOptions: { style: number };  
Â Â Â Â Â Â Â Â };  
Â Â Â Â Â Â Â Â squarePoints: {  
Â Â Â Â Â Â Â Â Â Â Â Â label: string;  
Â Â Â Â Â Â Â Â Â Â Â Â shaderClass: typeof [GridShader](../classes/foundry.canvas.rendering.shaders.GridShader.md);  
Â Â Â Â Â Â Â Â Â Â Â Â shaderOptions: { style: number };  
Â Â Â Â Â Â Â Â };  
Â Â Â Â };  
Â Â Â Â groups: {  
Â Â Â Â Â Â Â Â effects: { groupClass: typeof [EffectsCanvasGroup](../classes/foundry.canvas.groups.EffectsCanvasGroup.md); parent: string };  
Â Â Â Â Â Â Â Â environment: { groupClass: typeof [EnvironmentCanvasGroup](../classes/foundry.canvas.groups.EnvironmentCanvasGroup.md); parent: string };  
Â Â Â Â Â Â Â Â hidden: { groupClass: typeof [HiddenCanvasGroup](../classes/foundry.canvas.groups.HiddenCanvasGroup.md); parent: string };  
Â Â Â Â Â Â Â Â interface: {  
Â Â Â Â Â Â Â Â Â Â Â Â groupClass: typeof [InterfaceCanvasGroup](../classes/foundry.canvas.groups.InterfaceCanvasGroup.md);  
Â Â Â Â Â Â Â Â Â Â Â Â parent: string;  
Â Â Â Â Â Â Â Â Â Â Â Â zIndexDrawings: number;  
Â Â Â Â Â Â Â Â Â Â Â Â zIndexScrollingText: number;  
Â Â Â Â Â Â Â Â };  
Â Â Â Â Â Â Â Â overlay: { groupClass: typeof [OverlayCanvasGroup](../classes/foundry.canvas.groups.OverlayCanvasGroup.md); parent: string };  
Â Â Â Â Â Â Â Â primary: { groupClass: typeof [PrimaryCanvasGroup](../classes/foundry.canvas.groups.PrimaryCanvasGroup.md); parent: string };  
Â Â Â Â Â Â Â Â rendered: { groupClass: typeof [RenderedCanvasGroup](../classes/foundry.canvas.groups.RenderedCanvasGroup.md); parent: string };  
Â Â Â Â Â Â Â Â visibility: { groupClass: typeof [CanvasVisibility](../classes/foundry.canvas.groups.CanvasVisibility.md); parent: string };  
Â Â Â Â };  
Â Â Â Â hoverFade: object;  
Â Â Â Â layers: {  
Â Â Â Â Â Â Â Â controls: { group: string; layerClass: typeof [ControlsLayer](../classes/foundry.canvas.layers.ControlsLayer.md) };  
Â Â Â Â Â Â Â Â drawings: { group: string; layerClass: typeof [DrawingsLayer](../classes/foundry.canvas.layers.DrawingsLayer.md) };  
Â Â Â Â Â Â Â Â grid: { group: string; layerClass: typeof [GridLayer](../classes/foundry.canvas.layers.GridLayer.md) };  
Â Â Â Â Â Â Â Â lighting: { group: string; layerClass: typeof [LightingLayer](../classes/foundry.canvas.layers.LightingLayer.md) };  
Â Â Â Â Â Â Â Â notes: { group: string; layerClass: typeof [NotesLayer](../classes/foundry.canvas.layers.NotesLayer.md) };  
Â Â Â Â Â Â Â Â regions: { group: string; layerClass: typeof [RegionLayer](../classes/foundry.canvas.layers.RegionLayer.md) };  
Â Â Â Â Â Â Â Â sounds: { group: string; layerClass: typeof [SoundsLayer](../classes/foundry.canvas.layers.SoundsLayer.md) };  
Â Â Â Â Â Â Â Â tiles: { group: string; layerClass: typeof [TilesLayer](../classes/foundry.canvas.layers.TilesLayer.md) };  
Â Â Â Â Â Â Â Â tokens: { group: string; layerClass: typeof [TokenLayer](../classes/foundry.canvas.layers.TokenLayer.md) };  
Â Â Â Â Â Â Â Â walls: { group: string; layerClass: typeof [WallsLayer](../classes/foundry.canvas.layers.WallsLayer.md) };  
Â Â Â Â Â Â Â Â weather: { group: string; layerClass: typeof [WeatherEffects](../classes/foundry.canvas.layers.WeatherEffects.md) };  
Â Â Â Â };  
Â Â Â Â lightAnimations: [LightSourceAnimationConfig](../types/CONFIG.LightSourceAnimationConfig.md);  
Â Â Â Â lightLevels: {  
Â Â Â Â Â Â Â Â bright: number;  
Â Â Â Â Â Â Â Â dark: number;  
Â Â Â Â Â Â Â Â dim: number;  
Â Â Â Â Â Â Â Â halfdark: number;  
Â Â Â Â };  
Â Â Â Â lightSourceClass: typeof [PointLightSource](../classes/foundry.canvas.sources.PointLightSource.md);  
Â Â Â Â managedScenes: Record<string, typeof [SceneManager](../classes/foundry.canvas.SceneManager.md) | [SceneManager](../classes/foundry.canvas.SceneManager.md)>;  
Â Â Â Â maxZoom: undefined;  
Â Â Â Â minZoom: undefined;  
Â Â Â Â objectBorderThickness: number;  
Â Â Â Â pings: {  
Â Â Â Â Â Â Â Â pullSpeed: number;  
Â Â Â Â Â Â Â Â styles: {  
Â Â Â Â Â Â Â Â Â Â Â Â alert: {  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â class: typeof [AlertPing](../classes/foundry.canvas.interaction.AlertPing.md);  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â color: string;  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â duration: number;  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â size: number;  
Â Â Â Â Â Â Â Â Â Â Â Â };  
Â Â Â Â Â Â Â Â Â Â Â Â arrow: { class: typeof [ArrowPing](../classes/foundry.canvas.interaction.ArrowPing.md); duration: number; size: number };  
Â Â Â Â Â Â Â Â Â Â Â Â chevron: { class: typeof [ChevronPing](../classes/foundry.canvas.interaction.ChevronPing.md); duration: number; size: number };  
Â Â Â Â Â Â Â Â Â Â Â Â pulse: { class: typeof [PulsePing](../classes/foundry.canvas.interaction.PulsePing.md); duration: number; size: number };  
Â Â Â Â Â Â Â Â };  
Â Â Â Â Â Â Â Â types: { ALERT: string; ARROW: string; PULL: string; PULSE: string };  
Â Â Â Â };  
Â Â Â Â polygonBackends: {  
Â Â Â Â Â Â Â Â darkness: typeof [ClockwiseSweepPolygon](../classes/foundry.canvas.geometry.ClockwiseSweepPolygon.md);  
Â Â Â Â Â Â Â Â light: typeof [ClockwiseSweepPolygon](../classes/foundry.canvas.geometry.ClockwiseSweepPolygon.md);  
Â Â Â Â Â Â Â Â move: typeof [ClockwiseSweepPolygon](../classes/foundry.canvas.geometry.ClockwiseSweepPolygon.md);  
Â Â Â Â Â Â Â Â sight: typeof [ClockwiseSweepPolygon](../classes/foundry.canvas.geometry.ClockwiseSweepPolygon.md);  
Â Â Â Â Â Â Â Â sound: typeof [ClockwiseSweepPolygon](../classes/foundry.canvas.geometry.ClockwiseSweepPolygon.md);  
Â Â Â Â };  
Â Â Â Â rulerClass: typeof [Ruler](../classes/foundry.canvas.interaction.Ruler.md);  
Â Â Â Â sceneTransitions: Record<string, [SceneTransitionDefinition](../interfaces/CONFIG.SceneTransitionDefinition.md)>;  
Â Â Â Â soundSourceClass: typeof [PointSoundSource](../classes/foundry.canvas.sources.PointSoundSource.md);  
Â Â Â Â targeting: { size: number };  
Â Â Â Â unexploredColor: number;  
Â Â Â Â vfx: {  
Â Â Â Â Â Â Â Â animations: Record<string, VFXComponentAnimation>;  
Â Â Â Â Â Â Â Â components: Record<string, typeof [VFXComponent](../classes/foundry.canvas.vfx.VFXComponent.md)>;  
Â Â Â Â Â Â Â Â enabled: boolean;  
Â Â Â Â Â Â Â Â paths: Record<string, VFXPathGenerator>;  
Â Â Â Â };  
Â Â Â Â visibilityFilter: typeof [VisibilityFilter](../classes/foundry.canvas.rendering.filters.VisibilityFilter.md);  
Â Â Â Â visionSourceClass: typeof [PointVisionSource](../classes/foundry.canvas.sources.PointVisionSource.md);  
Â Â Â Â visualEffectsMaskingFilter: typeof [VisualEffectsMaskingFilter](../classes/foundry.canvas.rendering.filters.VisualEffectsMaskingFilter.md);  
Â Â Â Â get detectionModes(): Record<string, [DetectionMode](../classes/foundry.canvas.perception.DetectionMode.md)>;  
Â Â Â Â get visionModes(): Record<string, [VisionMode](../classes/foundry.canvas.perception.VisionMode.md)>;  
} = ...

Configuration settings for the Canvas and its contained layers and objects

#### Type Declaration

* ##### blurQuality: number
* ##### blurStrength: number
* ##### brightestColor: number
* ##### chatBubblesClass: typeof [ChatBubbles](../classes/foundry.canvas.animation.ChatBubbles.md)
* ##### darknessAnimations: [DarknessSourceAnimationConfig](../types/CONFIG.DarknessSourceAnimationConfig.md)
* ##### darknessColor: number
* ##### darknessLightPenalty: number
* ##### darknessSourceClass: typeof [PointDarknessSource](../classes/foundry.canvas.sources.PointDarknessSource.md)
* ##### darknessSourcePaddingMultiplier: number
* ##### darknessToDaylightAnimationMS: number
* ##### daylightColor: number
* ##### daylightToDarknessAnimationMS: number
* ##### dispositionColors: { Â Â Â Â CONTROLLED: number; Â Â Â Â FRIENDLY: number; Â Â Â Â HOSTILE: number; Â Â Â Â INACTIVE: number; Â Â Â Â NEUTRAL: number; Â Â Â Â PARTY: number; Â Â Â Â SECRET: number; }
* ##### doorControlClass: typeof [DoorControl](../classes/foundry.canvas.containers.DoorControl.md)

  The class used to render door control icons.
* ##### dragSpeedModifier: number
* ##### elevationSnappingPrecision: number
* ##### exploredColor: number
* ##### fogManager: typeof [FogManager](../classes/foundry.canvas.perception.FogManager.md)
* ##### globalLightSourceClass: typeof [GlobalLightSource](../classes/foundry.canvas.sources.GlobalLightSource.md)
* ##### gridStyles: { Â Â Â Â dashedLines: { Â Â Â Â Â Â Â Â label: string; Â Â Â Â Â Â Â Â shaderClass: typeof [GridShader](../classes/foundry.canvas.rendering.shaders.GridShader.md); Â Â Â Â Â Â Â Â shaderOptions: { style: number }; Â Â Â Â }; Â Â Â Â diamondPoints: { Â Â Â Â Â Â Â Â label: string; Â Â Â Â Â Â Â Â shaderClass: typeof [GridShader](../classes/foundry.canvas.rendering.shaders.GridShader.md); Â Â Â Â Â Â Â Â shaderOptions: { style: number }; Â Â Â Â }; Â Â Â Â dottedLines: { Â Â Â Â Â Â Â Â label: string; Â Â Â Â Â Â Â Â shaderClass: typeof [GridShader](../classes/foundry.canvas.rendering.shaders.GridShader.md); Â Â Â Â Â Â Â Â shaderOptions: { style: number }; Â Â Â Â }; Â Â Â Â roundPoints: { Â Â Â Â Â Â Â Â label: string; Â Â Â Â Â Â Â Â shaderClass: typeof [GridShader](../classes/foundry.canvas.rendering.shaders.GridShader.md); Â Â Â Â Â Â Â Â shaderOptions: { style: number }; Â Â Â Â }; Â Â Â Â solidLines: { Â Â Â Â Â Â Â Â label: string; Â Â Â Â Â Â Â Â shaderClass: typeof [GridShader](../classes/foundry.canvas.rendering.shaders.GridShader.md); Â Â Â Â Â Â Â Â shaderOptions: { style: number }; Â Â Â Â }; Â Â Â Â squarePoints: { Â Â Â Â Â Â Â Â label: string; Â Â Â Â Â Â Â Â shaderClass: typeof [GridShader](../classes/foundry.canvas.rendering.shaders.GridShader.md); Â Â Â Â Â Â Â Â shaderOptions: { style: number }; Â Â Â Â }; }
* ##### groups: { Â Â Â Â effects: { groupClass: typeof [EffectsCanvasGroup](../classes/foundry.canvas.groups.EffectsCanvasGroup.md); parent: string }; Â Â Â Â environment: { groupClass: typeof [EnvironmentCanvasGroup](../classes/foundry.canvas.groups.EnvironmentCanvasGroup.md); parent: string }; Â Â Â Â hidden: { groupClass: typeof [HiddenCanvasGroup](../classes/foundry.canvas.groups.HiddenCanvasGroup.md); parent: string }; Â Â Â Â interface: { Â Â Â Â Â Â Â Â groupClass: typeof [InterfaceCanvasGroup](../classes/foundry.canvas.groups.InterfaceCanvasGroup.md); Â Â Â Â Â Â Â Â parent: string; Â Â Â Â Â Â Â Â zIndexDrawings: number; Â Â Â Â Â Â Â Â zIndexScrollingText: number; Â Â Â Â }; Â Â Â Â overlay: { groupClass: typeof [OverlayCanvasGroup](../classes/foundry.canvas.groups.OverlayCanvasGroup.md); parent: string }; Â Â Â Â primary: { groupClass: typeof [PrimaryCanvasGroup](../classes/foundry.canvas.groups.PrimaryCanvasGroup.md); parent: string }; Â Â Â Â rendered: { groupClass: typeof [RenderedCanvasGroup](../classes/foundry.canvas.groups.RenderedCanvasGroup.md); parent: string }; Â Â Â Â visibility: { groupClass: typeof [CanvasVisibility](../classes/foundry.canvas.groups.CanvasVisibility.md); parent: string }; }
* ##### hoverFade: object

  The hover-fading configuration.
* ##### layers: { Â Â Â Â controls: { group: string; layerClass: typeof [ControlsLayer](../classes/foundry.canvas.layers.ControlsLayer.md) }; Â Â Â Â drawings: { group: string; layerClass: typeof [DrawingsLayer](../classes/foundry.canvas.layers.DrawingsLayer.md) }; Â Â Â Â grid: { group: string; layerClass: typeof [GridLayer](../classes/foundry.canvas.layers.GridLayer.md) }; Â Â Â Â lighting: { group: string; layerClass: typeof [LightingLayer](../classes/foundry.canvas.layers.LightingLayer.md) }; Â Â Â Â notes: { group: string; layerClass: typeof [NotesLayer](../classes/foundry.canvas.layers.NotesLayer.md) }; Â Â Â Â regions: { group: string; layerClass: typeof [RegionLayer](../classes/foundry.canvas.layers.RegionLayer.md) }; Â Â Â Â sounds: { group: string; layerClass: typeof [SoundsLayer](../classes/foundry.canvas.layers.SoundsLayer.md) }; Â Â Â Â tiles: { group: string; layerClass: typeof [TilesLayer](../classes/foundry.canvas.layers.TilesLayer.md) }; Â Â Â Â tokens: { group: string; layerClass: typeof [TokenLayer](../classes/foundry.canvas.layers.TokenLayer.md) }; Â Â Â Â walls: { group: string; layerClass: typeof [WallsLayer](../classes/foundry.canvas.layers.WallsLayer.md) }; Â Â Â Â weather: { group: string; layerClass: typeof [WeatherEffects](../classes/foundry.canvas.layers.WeatherEffects.md) }; }
* ##### lightAnimations: [LightSourceAnimationConfig](../types/CONFIG.LightSourceAnimationConfig.md)
* ##### lightLevels: { bright: number; dark: number; dim: number; halfdark: number }
* ##### lightSourceClass: typeof [PointLightSource](../classes/foundry.canvas.sources.PointLightSource.md)
* ##### managedScenes: Record<string, typeof [SceneManager](../classes/foundry.canvas.SceneManager.md) | [SceneManager](../classes/foundry.canvas.SceneManager.md)>

  A registry of Scenes which are managed by a specific SceneManager class or instance.
* ##### maxZoom: undefined
* ##### minZoom: undefined
* ##### objectBorderThickness: number
* ##### pings: { Â Â Â Â pullSpeed: number; Â Â Â Â styles: { Â Â Â Â Â Â Â Â alert: { Â Â Â Â Â Â Â Â Â Â Â Â class: typeof [AlertPing](../classes/foundry.canvas.interaction.AlertPing.md); Â Â Â Â Â Â Â Â Â Â Â Â color: string; Â Â Â Â Â Â Â Â Â Â Â Â duration: number; Â Â Â Â Â Â Â Â Â Â Â Â size: number; Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â arrow: { class: typeof [ArrowPing](../classes/foundry.canvas.interaction.ArrowPing.md); duration: number; size: number }; Â Â Â Â Â Â Â Â chevron: { class: typeof [ChevronPing](../classes/foundry.canvas.interaction.ChevronPing.md); duration: number; size: number }; Â Â Â Â Â Â Â Â pulse: { class: typeof [PulsePing](../classes/foundry.canvas.interaction.PulsePing.md); duration: number; size: number }; Â Â Â Â }; Â Â Â Â types: { ALERT: string; ARROW: string; PULL: string; PULSE: string }; }
* ##### polygonBackends: { Â Â Â Â darkness: typeof [ClockwiseSweepPolygon](../classes/foundry.canvas.geometry.ClockwiseSweepPolygon.md); Â Â Â Â light: typeof [ClockwiseSweepPolygon](../classes/foundry.canvas.geometry.ClockwiseSweepPolygon.md); Â Â Â Â move: typeof [ClockwiseSweepPolygon](../classes/foundry.canvas.geometry.ClockwiseSweepPolygon.md); Â Â Â Â sight: typeof [ClockwiseSweepPolygon](../classes/foundry.canvas.geometry.ClockwiseSweepPolygon.md); Â Â Â Â sound: typeof [ClockwiseSweepPolygon](../classes/foundry.canvas.geometry.ClockwiseSweepPolygon.md); }
* ##### rulerClass: typeof [Ruler](../classes/foundry.canvas.interaction.Ruler.md)
* ##### sceneTransitions: Record<string, [SceneTransitionDefinition](../interfaces/CONFIG.SceneTransitionDefinition.md)>
* ##### soundSourceClass: typeof [PointSoundSource](../classes/foundry.canvas.sources.PointSoundSource.md)
* ##### targeting: { size: number }
* ##### unexploredColor: number
* ##### vfx: { Â Â Â Â animations: Record<string, VFXComponentAnimation>; Â Â Â Â components: Record<string, typeof [VFXComponent](../classes/foundry.canvas.vfx.VFXComponent.md)>; Â Â Â Â enabled: boolean; Â Â Â Â paths: Record<string, VFXPathGenerator>; }

  Configuration for the foundry.canvas.vfx module.
  This configuration is used to register named components, animations, and presets which can be invoked within
  VFXEffect instances.

  + ##### animations: Record<string, VFXComponentAnimation>

    Named animations that may be called as part of a component.
  + ##### components: Record<string, typeof [VFXComponent](../classes/foundry.canvas.vfx.VFXComponent.md)>

    Named VFXComponent subclasses which can be used to orchestrate different types of visual effects.
  + ##### enabled: boolean

    The Foundry VTT version 14 VFX framework is EXPERIMENTAL. Its classes, functions, and configuration are likely
    to change over coming releases. The entire VFX module should be treated as non-stable regardless of the
    stability designation of the release build that contains it.
    You may use this experimental framework by enabling it via `CONFIG.Canvas.vfx.enabled`.
  + ##### paths: Record<string, VFXPathGenerator>

    Named path generator functions that may be called as part of a component.
* ##### visibilityFilter: typeof [VisibilityFilter](../classes/foundry.canvas.rendering.filters.VisibilityFilter.md)
* ##### visionSourceClass: typeof [PointVisionSource](../classes/foundry.canvas.sources.PointVisionSource.md)
* ##### visualEffectsMaskingFilter: typeof [VisualEffectsMaskingFilter](../classes/foundry.canvas.rendering.filters.VisualEffectsMaskingFilter.md)
* ##### get detectionModes(): Record<string, [DetectionMode](../classes/foundry.canvas.perception.DetectionMode.md)>

  The set of DetectionMode definitions which are available to be used for visibility detection.
* ##### get visionModes(): Record<string, [VisionMode](../classes/foundry.canvas.perception.VisionMode.md)>

  The set of VisionMode definitions which are available to be used for Token vision.