---
title: "Token | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.placeables.Token.html"
category: "classes"
---

# Class Token

A Token is an implementation of PlaceableObject which represents an [foundry.documents.Actor](foundry.documents.Actor.md) within a viewed
Scene on the game canvas.

#### See

* [foundry.documents.TokenDocument](foundry.documents.TokenDocument.md)
* [foundry.canvas.layers.TokenLayer](foundry.canvas.layers.TokenLayer.md)

#### Hierarchy ([View Summary](../hierarchy.md#foundry.canvas.placeables.Token))

* [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)
  + Token

##### Index

### Constructors

[constructor](#constructor)

### Properties

[\_preventKeyboardMovement](#_preventkeyboardmovement)
[\_previewType](#_previewtype)
[\_visionSourceVersion](#_visionsourceversion)
[bars](#bars)
[border](#border)
[controlIcon](#controlicon)
[detectionFilter](#detectionfilter)
[detectionFilterMesh](#detectionfiltermesh)
[document](#document)
[effects](#effects)
[levelIndicator](#levelindicator)
[light](#light)
[mesh](#mesh)
[mouseInteractionManager](#mouseinteractionmanager)
[nameplate](#nameplate)
[renderFlags](#renderflags)
[ruler](#ruler)
[scene](#scene)
[shape](#shape)
[targetArrows](#targetarrows)
[targeted](#targeted)
[targetPips](#targetpips)
[texture](#texture)
[tooltip](#tooltip)
[turnMarker](#turnmarker)
[vision](#vision)
[voidMesh](#voidmesh)
[\_plannedMovement](#_plannedmovement)
[embeddedName](#embeddedname)
[RENDER\_FLAG\_PRIORITY](#render_flag_priority)
[RENDER\_FLAGS](#render_flags)

### Accessors

[\_original](#_original)
[actor](#actor)
[animationContexts](#animationcontexts)
[animationName](#animationname)
[bounds](#bounds)
[brightRadius](#brightradius)
[center](#center)
[combatant](#combatant)
[controlled](#controlled)
[detectionModes](#detectionmodes)
[dimRadius](#dimradius)
[emitsDarkness](#emitsdarkness)
[emitsLight](#emitslight)
[externalRadius](#externalradius)
[h](#h)
[hasActiveHUD](#hasactivehud)
[hasDynamicRing](#hasdynamicring)
[hasLimitedSourceAngle](#haslimitedsourceangle)
[hasPreview](#haspreview)
[hasSight](#hassight)
[hover](#hover)
[id](#id)
[inCombat](#incombat)
[interactionState](#interactionstate)
[isDragged](#isdragged)
[isFilteredOut](#isfilteredout)
[isInteractable](#isinteractable)
[isOwner](#isowner)
[isPreview](#ispreview)
[isTargeted](#istargeted)
[isVideo](#isvideo)
[isVisible](#isvisible)
[layer](#layer)
[lightPerceptionRange](#lightperceptionrange)
[movementAnimationName](#movementanimationname)
[movementAnimationPromise](#movementanimationpromise)
[name](#name)
[objectId](#objectid)
[observer](#observer)
[optimalSightRange](#optimalsightrange)
[previewType](#previewtype)
[radius](#radius)
[ring](#ring)
[sheet](#sheet)
[showRuler](#showruler)
[sightRange](#sightrange)
[sourceElement](#sourceelement)
[sourceId](#sourceid)
[w](#w)
[implementation](#implementation)

### Methods

[\_applyRenderFlags](#_applyrenderflags)
[\_canConfigure](#_canconfigure)
[\_canControl](#_cancontrol)
[\_canDrag](#_candrag)
[\_canHover](#_canhover)
[\_canHUD](#_canhud)
[\_canView](#_canview)
[\_clear](#_clear)
[\_configureFilterEffect](#_configurefiltereffect)
[\_createSharedFogVisionSource](#_createsharedfogvisionsource)
[\_destroy](#_destroy)
[\_draw](#_draw)
[\_finalizeDragLeft](#_finalizedragleft)
[\_getConfigMovementPosition](#_getconfigmovementposition)
[\_getDragOrigin](#_getdragorigin)
[\_getDragWaypointPosition](#_getdragwaypointposition)
[\_getHUDMovementPosition](#_gethudmovementposition)
[\_getShiftedPosition](#_getshiftedposition)
[\_initializeDragLeft](#_initializedragleft)
[\_onClickLeft](#_onclickleft)
[\_onClickLeft2](#_onclickleft2)
[\_onClickRight2](#_onclickright2)
[\_onCreate](#_oncreate)
[\_onDelete](#_ondelete)
[\_onDragEnd](#_ondragend)
[\_onDragLeftCancel](#_ondragleftcancel)
[\_onDragLeftDrop](#_ondragleftdrop)
[\_onDragLeftMove](#_ondragleftmove)
[\_onHoverIn](#_onhoverin)
[\_onHoverOut](#_onhoverout)
[\_onRelease](#_onrelease)
[\_onUpdate](#_onupdate)
[\_overlapsSelection](#_overlapsselection)
[\_partialDraw](#_partialdraw)
[\_pasteObject](#_pasteobject)
[\_prepareDragLeftDropUpdates](#_preparedragleftdropupdates)
[\_propagateLeftClick](#_propagateleftclick)
[\_refreshState](#_refreshstate)
[\_refreshVisibility](#_refreshvisibility)
[\_removeAllFilterEffects](#_removeallfiltereffects)
[\_updateQuadtree](#_updatequadtree)
[\_updateRotation](#_updaterotation)
[\_updateSpecialStatusFilterEffects](#_updatespecialstatusfiltereffects)
[\_updateTarget](#_updatetarget)
[activateListeners](#activatelisteners)
[animate](#animate)
[applyRenderFlags](#applyrenderflags)
[can](#can)
[checkCollision](#checkcollision)
[clone](#clone)
[constrainMovementPath](#constrainmovementpath)
[control](#control)
[createTerrainMovementPath](#createterrainmovementpath)
[destroy](#destroy)
[draw](#draw)
[drawBars](#drawbars)
[drawEffects](#draweffects)
[findMovementPath](#findmovementpath)
[getCenterPoint](#getcenterpoint)
[getDispositionColor](#getdispositioncolor)
[getLightRadius](#getlightradius)
[getRingColors](#getringcolors)
[getRingEffects](#getringeffects)
[getShape](#getshape)
[getSnappedPosition](#getsnappedposition)
[initializeLightSource](#initializelightsource)
[initializeSources](#initializesources)
[initializeVisionSource](#initializevisionsource)
[measureMovementPath](#measuremovementpath)
[panCanvas](#pancanvas)
[planMovement](#planmovement)
[recalculatePlannedMovementPath](#recalculateplannedmovementpath)
[refresh](#refresh)
[release](#release)
[rotate](#rotate)
[setTarget](#settarget)
[stopAnimation](#stopanimation)
[\_addDragWaypoint](#_adddragwaypoint)
[\_canCreate](#_cancreate)
[\_canDelete](#_candelete)
[\_canDragLeftStart](#_candragleftstart)
[\_canUpdate](#_canupdate)
[\_canViewMode](#_canviewmode)
[\_changeDragElevation](#_changedragelevation)
[\_createInteractionManager](#_createinteractionmanager)
[\_drawBar](#_drawbar)
[\_drawEffect](#_draweffect)
[\_drawEffects](#_draweffects)
[\_drawOverlay](#_drawoverlay)
[\_drawTargetArrows](#_drawtargetarrows)
[\_drawTargetPips](#_drawtargetpips)
[\_finalizeDragRight](#_finalizedragright)
[\_getAnimationData](#_getanimationdata)
[\_getAnimationDuration](#_getanimationduration)
[\_getAnimationMovementSpeed](#_getanimationmovementspeed)
[\_getAnimationRotationSpeed](#_getanimationrotationspeed)
[\_getAnimationTransition](#_getanimationtransition)
[\_getBarColors](#_getbarcolors)
[\_getBorderColor](#_getbordercolor)
[\_getDragConstrainOptions](#_getdragconstrainoptions)
[\_getDragLeftDropUpdateOptions](#_getdragleftdropupdateoptions)
[\_getDragMeasureOptions](#_getdragmeasureoptions)
[\_getDragMovementAction](#_getdragmovementaction)
[\_getDragPathfindingOptions](#_getdragpathfindingoptions)
[\_getDragTerrainOptions](#_getdragterrainoptions)
[\_getHUDMovementAction](#_gethudmovementaction)
[\_getKeyboardMovementAction](#_getkeyboardmovementaction)
[\_getLightSourceData](#_getlightsourcedata)
[\_getMovementCollisionTestConfiguration](#_getmovementcollisiontestconfiguration)
[\_getMovementCostFunction](#_getmovementcostfunction)
[\_getTargetAlpha](#_gettargetalpha)
[\_getTextStyle](#_gettextstyle)
[\_getTooltipText](#_gettooltiptext)
[\_getVisionBlindedStates](#_getvisionblindedstates)
[\_getVisionSourceData](#_getvisionsourcedata)
[\_initializeDragRight](#_initializedragright)
[\_initializeRuler](#_initializeruler)
[\_isFogExplorationSource](#_isfogexplorationsource)
[\_isLightSource](#_islightsource)
[\_isVisionSource](#_isvisionsource)
[\_modifyAnimationMovementSpeed](#_modifyanimationmovementspeed)
[\_onAnimationUpdate](#_onanimationupdate)
[\_onApplyStatusEffect](#_onapplystatuseffect)
[\_onClickRight](#_onclickright)
[\_onControl](#_oncontrol)
[\_onDragClickLeft](#_ondragclickleft)
[\_onDragClickLeft2](#_ondragclickleft2)
[\_onDragClickRight](#_ondragclickright)
[\_onDragClickRight2](#_ondragclickright2)
[\_onDragLeftStart](#_ondragleftstart)
[\_onDragMouseWheel](#_ondragmousewheel)
[\_onDragRightCancel](#_ondragrightcancel)
[\_onDragRightDrop](#_ondragrightdrop)
[\_onDragRightMove](#_ondragrightmove)
[\_onDragRightStart](#_ondragrightstart)
[\_onDragStart](#_ondragstart)
[\_onLongPress](#_onlongpress)
[\_onUnclickLeft](#_onunclickleft)
[\_onUnclickRight](#_onunclickright)
[\_prepareAnimation](#_prepareanimation)
[\_propagateRightClick](#_propagaterightclick)
[\_refreshBorder](#_refreshborder)
[\_refreshEffects](#_refresheffects)
[\_refreshElevation](#_refreshelevation)
[\_refreshMesh](#_refreshmesh)
[\_refreshMeshSizeAndScale](#_refreshmeshsizeandscale)
[\_refreshNameplate](#_refreshnameplate)
[\_refreshPosition](#_refreshposition)
[\_refreshRingVisuals](#_refreshringvisuals)
[\_refreshRotation](#_refreshrotation)
[\_refreshRuler](#_refreshruler)
[\_refreshShader](#_refreshshader)
[\_refreshShape](#_refreshshape)
[\_refreshSize](#_refreshsize)
[\_refreshTarget](#_refreshtarget)
[\_refreshTooltip](#_refreshtooltip)
[\_refreshTurnMarker](#_refreshturnmarker)
[\_removeDragWaypoint](#_removedragwaypoint)
[\_renderDetectionFilter](#_renderdetectionfilter)
[\_requiresRotationAnimation](#_requiresrotationanimation)
[\_shouldPreventDragLeftDrop](#_shouldpreventdragleftdrop)
[\_testCulled](#_testculled)
[\_triggerDragLeftCancel](#_triggerdragleftcancel)
[\_triggerDragLeftDrop](#_triggerdragleftdrop)
[\_updateDragDestination](#_updatedragdestination)
[#onDragRightStart](#ondragrightstart)
[\_configureAnimationMovementSpeed](#_configureanimationmovementspeed)
[\_getCopiedObjectsOrigin](#_getcopiedobjectsorigin)
[\_getDropActorPosition](#_getdropactorposition)
[\_getShiftedPosition](#_getshiftedposition-2)

## Constructors

### constructor

* new Token(document: [TokenDocument](foundry.documents.TokenDocument.md)): [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).Token

  #### Parameters

  + document: [TokenDocument](foundry.documents.TokenDocument.md)

    The TokenDocument that this Token represents

  #### Returns [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).Token

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[constructor](foundry.canvas.placeables.PlaceableObject.md#constructor)

## Properties

### `Internal`\_preventKeyboardMovement

\_preventKeyboardMovement: boolean = false

Prevent keyboard movement of this Token?

### `Internal`\_previewType

\_previewType:  
Â Â Â Â | "controls"  
Â Â Â Â | "creation"  
Â Â Â Â | "dragging"  
Â Â Â Â | "wheel"  
Â Â Â Â | "config"  
Â Â Â Â | "api"  
Â Â Â Â | null

The preview type, if any.

Inherited from [AmbientLight](foundry.canvas.placeables.AmbientLight.md).[\_previewType](foundry.canvas.placeables.AmbientLight.md#_previewtype)

### `Internal`\_visionSourceVersion

\_visionSourceVersion: number = 0

Vision version incremented each time vision (and light) are updated.

### bars

bars: Container<DisplayObject>

The attribute bars of this Token.

### border

border: Graphics

A Graphics instance which renders the border frame for this Token inside the GridLayer.

### controlIcon

controlIcon: [ControlIcon](foundry.canvas.containers.ControlIcon.md) | null

A control icon for interacting with the object

Inherited from [AmbientLight](foundry.canvas.placeables.AmbientLight.md).[controlIcon](foundry.canvas.placeables.AmbientLight.md#controlicon)

### detectionFilter

detectionFilter: Filter | null = null

Defines the filter to use for detection.

### detectionFilterMesh

detectionFilterMesh: Container<DisplayObject>

Renders the mesh of with the detection filter.

### document

document: CanvasDocument

A reference to the Scene embedded Document instance which this object represents

Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[document](foundry.canvas.placeables.PlaceableObject.md#document)

### effects

effects: Container<DisplayObject>

The effects icons of temporary ActiveEffects that are applied to the Actor of this Token.

### levelIndicator

levelIndicator: Sprite

The indicator for "this token is not in the viewed level".

### light

light: [PointLightSource](foundry.canvas.sources.PointLightSource.md)

A reference to the LightSource object which defines this light source area of effect.
This is undefined if the Token does not provide an active source of light.

### mesh

mesh: [PrimarySpriteMesh](foundry.canvas.primary.PrimarySpriteMesh.md)

A reference to the SpriteMesh which displays this Token in the PrimaryCanvasGroup.

### mouseInteractionManager

mouseInteractionManager: [MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.md) | null

A mouse interaction manager instance which handles mouse workflows related to this object.

Inherited from [AmbientLight](foundry.canvas.placeables.AmbientLight.md).[mouseInteractionManager](foundry.canvas.placeables.AmbientLight.md#mouseinteractionmanager)

### nameplate

nameplate: [PreciseText](foundry.canvas.containers.PreciseText.md)

The nameplate of this Token, which displays its name.

### renderFlags

renderFlags: [RenderFlags](foundry.canvas.interaction.RenderFlags.md)

Status flags which are applied at render-time to update the PlaceableObject.
If an object defines RenderFlags, it should at least include flags for "redraw" and "refresh".

Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[renderFlags](foundry.canvas.placeables.PlaceableObject.md#renderflags)

### ruler

ruler: [BaseTokenRuler](foundry.canvas.placeables.tokens.BaseTokenRuler.md) | null

The ruler of this Token.

### scene

scene: [documents](../modules/foundry.documents.md).[Scene](foundry.documents.Scene.md)

Retain a reference to the Scene within which this Placeable Object resides

Inherited from [AmbientLight](foundry.canvas.placeables.AmbientLight.md).[scene](foundry.canvas.placeables.AmbientLight.md#scene)

### shape

shape: Rectangle | Polygon | Circle | Ellipse

The shape of this token.

### targetArrows

targetArrows: Graphics

The target arrows marker, which indicates that this Token is targeted by this User.

### targeted

targeted: Set<[documents](../modules/foundry.documents.md).[User](foundry.documents.User.md)> = ...

Track the set of User documents which are currently targeting this Token

### targetPips

targetPips: Graphics

The target pips marker, which indicates that this Token is targeted by other User(s).

### texture

texture: Texture<Resource>

The texture of this Token, which is used by its mesh.

### tooltip

tooltip: [PreciseText](foundry.canvas.containers.PreciseText.md)

The tooltip text of this Token, which contains its elevation.

### turnMarker

turnMarker: [TokenTurnMarker](foundry.canvas.placeables.tokens.TokenTurnMarker.md) | null = null

The Turn Marker of this Token.
Only a subset of Token objects have a turn marker at any given time.

### vision

vision: [PointVisionSource](foundry.canvas.sources.PointVisionSource.md)

A reference to the VisionSource object which defines this vision source area of effect.
This is undefined if the Token does not provide an active source of vision.

### voidMesh

voidMesh: Container<DisplayObject>

Renders the mesh of this Token with ERASE blending in the Token.

### `Protected`\_plannedMovement

\_plannedMovement: { [userId: string]: [TokenPlannedMovement](../interfaces/foundry.types.TokenPlannedMovement.md) } = {}

The ruler data.

### `Static`embeddedName

embeddedName: string = "Token"

Identify the official Document name for this PlaceableObject class

Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[embeddedName](foundry.canvas.placeables.PlaceableObject.md#embeddedname)

### `Static`RENDER\_FLAG\_PRIORITY

RENDER\_FLAG\_PRIORITY: string = "OBJECTS"

The ticker priority when RenderFlags of this class are handled.
Valid values are OBJECTS or PERCEPTION.

Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[RENDER\_FLAG\_PRIORITY](foundry.canvas.placeables.PlaceableObject.md#render_flag_priority)

### `Static`RENDER\_FLAGS

RENDER\_FLAGS: {  
Â Â Â Â redraw: { propagate: string[] };  
Â Â Â Â redrawEffects: {};  
Â Â Â Â refresh: { alias: boolean; propagate: string[] };  
Â Â Â Â refreshBars: {};  
Â Â Â Â refreshBorder: {};  
Â Â Â Â refreshEffects: {};  
Â Â Â Â refreshElevation: { propagate: string[] };  
Â Â Â Â refreshMesh: { propagate: string[] };  
Â Â Â Â refreshNameplate: {};  
Â Â Â Â refreshPosition: {};  
Â Â Â Â refreshRingVisuals: {};  
Â Â Â Â refreshRotation: {};  
Â Â Â Â refreshRuler: {};  
Â Â Â Â refreshShader: {};  
Â Â Â Â refreshShape: { propagate: string[] };  
Â Â Â Â refreshSize: { propagate: string[] };  
Â Â Â Â refreshState: { propagate: string[] };  
Â Â Â Â refreshTarget: {};  
Â Â Â Â refreshTooltip: {};  
Â Â Â Â refreshTransform: { alias: boolean; propagate: string[] };  
Â Â Â Â refreshTurnMarker: {};  
Â Â Â Â refreshVisibility: {};  
} = ...

Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[RENDER\_FLAGS](foundry.canvas.placeables.PlaceableObject.md#render_flags)

## Accessors

### \_original

* get \_original(): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md) | undefined

  The object that this object is a preview of if this object is a preview.

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md) | undefined

  Inherited from [AmbientSound](foundry.canvas.placeables.AmbientSound.md).[\_original](foundry.canvas.placeables.AmbientSound.md#_original)

### actor

* get actor(): [documents](../modules/foundry.documents.md).[Actor](foundry.documents.Actor.md) | null

  A convenient reference to the Actor object associated with the Token embedded document.

  #### Returns [documents](../modules/foundry.documents.md).[Actor](foundry.documents.Actor.md) | null

### animationContexts

* get animationContexts(): Map<string, [TokenAnimationContext](../interfaces/foundry.types.TokenAnimationContext.md)>

  The current animations of this Token.

  #### Returns Map<string, [TokenAnimationContext](../interfaces/foundry.types.TokenAnimationContext.md)>

### animationName

* get animationName(): string

  The general animation name used for this Token.

  #### Returns string

### bounds

* get bounds(): any

  #### Returns any

  Overrides PlaceableObject.bounds

### brightRadius

* get brightRadius(): number

  Translate the token's bright light distance in units into a radius in pixels.

  #### Returns number

### center

* get center(): any

  #### Returns any

  Overrides PlaceableObject.center

### combatant

* get combatant(): [documents](../modules/foundry.documents.md).[Combatant](foundry.documents.Combatant.md) | null

  Return a reference to a Combatant that represents this Token, if one is present in the current encounter.

  #### Returns [documents](../modules/foundry.documents.md).[Combatant](foundry.documents.Combatant.md) | null

### controlled

* get controlled(): boolean

  An indicator for whether the object is currently controlled

  #### Returns boolean

  Inherited from [AmbientSound](foundry.canvas.placeables.AmbientSound.md).[controlled](foundry.canvas.placeables.AmbientSound.md#controlled)

### detectionModes

* get detectionModes(): { [id: string]: [TokenDetectionMode](../interfaces/foundry.documents.types.TokenDetectionMode.md) }

  Return a reference to the detection modes array.

  #### Returns { [id: string]: [TokenDetectionMode](../interfaces/foundry.documents.types.TokenDetectionMode.md) }

### dimRadius

* get dimRadius(): number

  Translate the token's dim light distance in units into a radius in pixels.

  #### Returns number

### emitsDarkness

* get emitsDarkness(): boolean

  Does this token actively emit darkness given its properties and the current darkness level of the Scene?

  #### Returns boolean

### emitsLight

* get emitsLight(): boolean

  Does this token actively emit light given its properties and the current darkness level of the Scene?

  #### Returns boolean

### externalRadius

* get externalRadius(): number

  The external radius of the token in pixels.

  #### Returns number

### h

* get h(): number

  Translate the token's grid height into a pixel height based on the canvas size

  #### Returns number

### hasActiveHUD

* get hasActiveHUD(): boolean

  Is the HUD display active for this Placeable?

  #### Returns boolean

  Inherited from PlaceableObject.hasActiveHUD

### hasDynamicRing

* get hasDynamicRing(): boolean

  A convenience boolean to test whether the Token is using a dynamic ring.

  #### Returns boolean

### hasLimitedSourceAngle

* get hasLimitedSourceAngle(): boolean

  Test whether the Token uses a limited angle of vision or light emission.

  #### Returns boolean

### hasPreview

* get hasPreview(): boolean

  Does there exist a temporary preview of this placeable object?

  #### Returns boolean

  Inherited from [AmbientSound](foundry.canvas.placeables.AmbientSound.md).[hasPreview](foundry.canvas.placeables.AmbientSound.md#haspreview)

### hasSight

* get hasSight(): boolean

  Test whether the Token has sight (or blindness) at any radius

  #### Returns boolean

### hover

* get hover(): boolean

  An indicator for whether the object is currently a hover target

  #### Returns boolean

  Inherited from [AmbientSound](foundry.canvas.placeables.AmbientSound.md).[hover](foundry.canvas.placeables.AmbientSound.md#hover)

### id

* get id(): string

  The id of the corresponding Document which this PlaceableObject represents.

  #### Returns string

  Inherited from PlaceableObject.id

### inCombat

* get inCombat(): boolean

  An indicator for whether or not this token is currently involved in the active combat encounter.

  #### Returns boolean

### interactionState

* get interactionState(): | {  
  Â Â Â Â CLICKED: number;  
  Â Â Â Â DRAG: number;  
  Â Â Â Â DROP: number;  
  Â Â Â Â GRABBED: number;  
  Â Â Â Â HOVER: number;  
  Â Â Â Â NONE: number;  
  }  
  | undefined

  The mouse interaction state of this placeable.

  #### Returns Â Â Â Â | { Â Â Â Â Â Â Â Â CLICKED: number; Â Â Â Â Â Â Â Â DRAG: number; Â Â Â Â Â Â Â Â DROP: number; Â Â Â Â Â Â Â Â GRABBED: number; Â Â Â Â Â Â Â Â HOVER: number; Â Â Â Â Â Â Â Â NONE: number; Â Â Â Â } Â Â Â Â | undefined

  Inherited from PlaceableObject.interactionState

### isDragged

* get isDragged(): boolean

  Is this Token currently being dragged?

  #### Returns boolean

### isFilteredOut

* get isFilteredOut(): boolean

  Is this object is excluded by the current filter in the placeable tab.

  #### Returns boolean

  Inherited from [AmbientSound](foundry.canvas.placeables.AmbientSound.md).[isFilteredOut](foundry.canvas.placeables.AmbientSound.md#isfilteredout)

### isInteractable

* get isInteractable(): any

  #### Returns any

  Overrides [Wall](foundry.canvas.placeables.Wall.md).[isInteractable](foundry.canvas.placeables.Wall.md#isinteractable)

### isOwner

* get isOwner(): boolean

  A convenient reference for whether the current User has full control over the document.

  #### Returns boolean

  Inherited from [AmbientSound](foundry.canvas.placeables.AmbientSound.md).[isOwner](foundry.canvas.placeables.AmbientSound.md#isowner)

### isPreview

* get isPreview(): boolean

  Is this placeable object a temporary preview?

  #### Returns boolean

  Inherited from [AmbientSound](foundry.canvas.placeables.AmbientSound.md).[isPreview](foundry.canvas.placeables.AmbientSound.md#ispreview)

### isTargeted

* get isTargeted(): boolean

  An indicator for whether the Token is currently targeted by the active game User

  #### Returns boolean

### isVideo

* get isVideo(): boolean

  Does this Tile depict an animated video texture?

  #### Returns boolean

### isVisible

* get isVisible(): boolean

  Determine whether the Token is visible to the calling user's perspective.
  Hidden Tokens are only displayed to GM Users.
  Non-hidden Tokens are always visible if Token Vision is not required.
  Controlled tokens are always visible.
  All Tokens are visible to a GM user if no Token is controlled.

  #### Returns boolean

  Overrides [AmbientSound](foundry.canvas.placeables.AmbientSound.md).[isVisible](foundry.canvas.placeables.AmbientSound.md#isvisible)

### layer

* get layer(): [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md)

  Provide a reference to the CanvasLayer which contains this PlaceableObject.

  #### Returns [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.md)

  Inherited from [AmbientSound](foundry.canvas.placeables.AmbientSound.md).[layer](foundry.canvas.placeables.AmbientSound.md#layer)

### lightPerceptionRange

* get lightPerceptionRange(): number

  The range of this token's light perception in pixels.

  #### Returns number

### movementAnimationName

* get movementAnimationName(): string

  The animation name used to animate this Token's movement.

  #### Returns string

### movementAnimationPromise

* get movementAnimationPromise(): Promise<void> | null

  The promise of the current movement animation chain of this Token
  or null if there isn't a movement animation in progress.

  #### Returns Promise<void> | null

### name

* get name(): string

  Convenience access to the token's nameplate string

  #### Returns string

### objectId

* get objectId(): string

  A unique identifier which is used to uniquely identify elements on the canvas related to this object.

  #### Returns string

  Inherited from [AmbientSound](foundry.canvas.placeables.AmbientSound.md).[objectId](foundry.canvas.placeables.AmbientSound.md#objectid)

### observer

* get observer(): boolean

  A boolean flag for whether the current game User has observer permission for the Token

  #### Returns boolean

### optimalSightRange

* get optimalSightRange(): number

  Translate the token's maximum vision range that takes into account lights.

  #### Returns number

### previewType

* get previewType(): "dragging" | "controls|"

  The preview type, if any.

  #### Returns "dragging" | "controls|"

  Inherited from [AmbientSound](foundry.canvas.placeables.AmbientSound.md).[previewType](foundry.canvas.placeables.AmbientSound.md#previewtype)

### radius

* get radius(): number

  The maximum radius in pixels of the light field

  #### Returns number

### ring

* get ring(): [TokenRing](foundry.canvas.placeables.tokens.TokenRing.md) | null

  A TokenRing instance which is used if this Token applies a dynamic ring.
  This property is null if the Token does not use a dynamic ring.

  #### Returns [TokenRing](foundry.canvas.placeables.tokens.TokenRing.md) | null

### sheet

* get sheet(): [DocumentSheetV2](foundry.applications.api.DocumentSheetV2.md)

  A document sheet used to configure the properties of this Placeable Object or the Document it represents.

  #### Returns [DocumentSheetV2](foundry.applications.api.DocumentSheetV2.md)

  Inherited from [AmbientSound](foundry.canvas.placeables.AmbientSound.md).[sheet](foundry.canvas.placeables.AmbientSound.md#sheet)

### showRuler

* get showRuler(): boolean

  Should the ruler of this Token be visible?

  #### Returns boolean

### sightRange

* get sightRange(): number

  Translate the token's vision range in units into a radius in pixels.

  #### Returns number

### sourceElement

* get sourceElement(): ImageSource | null

  The HTML source element for the primary Tile texture

  #### Returns ImageSource | null

### sourceId

* get sourceId(): string

  #### Returns string

  Overrides [AmbientSound](foundry.canvas.placeables.AmbientSound.md).[sourceId](foundry.canvas.placeables.AmbientSound.md#sourceid)

### w

* get w(): number

  Translate the token's grid width into a pixel width based on the canvas size

  #### Returns number

### `Static`implementation

* get implementation(): typeof [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)

  Return a reference to the configured subclass of this base PlaceableObject type.

  #### Returns typeof [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)

  Inherited from PlaceableObject.implementation

## Methods

### \_applyRenderFlags

* \_applyRenderFlags(flags: any): void

  Apply render flags before a render occurs.

  #### Parameters

  + flags: any

    The render flags which must be applied

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_applyRenderFlags](foundry.canvas.placeables.PlaceableObject.md#_applyrenderflags)

### \_canConfigure

* \_canConfigure(user: any, event: any): boolean

  #### Parameters

  + user: any
  + event: any

  #### Returns boolean

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_canConfigure](foundry.canvas.placeables.PlaceableObject.md#_canconfigure)

### \_canControl

* \_canControl(user: any, event: any): boolean

  Does the User have permission to control the Placeable Object?

  #### Parameters

  + user: any

    The User performing the action. Always equal to `game.user`.
  + event: any

    The pointer event if this function was called by
    [foundry.canvas.interaction.MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.md).

  #### Returns boolean

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_canControl](foundry.canvas.placeables.PlaceableObject.md#_cancontrol)

### \_canDrag

* \_canDrag(user: any, event: any): boolean

  #### Parameters

  + user: any
  + event: any

  #### Returns boolean

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_canDrag](foundry.canvas.placeables.PlaceableObject.md#_candrag)

### \_canHover

* \_canHover(user: any, event: any): boolean

  #### Parameters

  + user: any
  + event: any

  #### Returns boolean

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_canHover](foundry.canvas.placeables.PlaceableObject.md#_canhover)

### \_canHUD

* \_canHUD(user: any, event: any): any

  #### Parameters

  + user: any
  + event: any

  #### Returns any

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_canHUD](foundry.canvas.placeables.PlaceableObject.md#_canhud)

### \_canView

* \_canView(user: any, event: any): boolean | undefined

  #### Parameters

  + user: any
  + event: any

  #### Returns boolean | undefined

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_canView](foundry.canvas.placeables.PlaceableObject.md#_canview)

### \_clear

* \_clear(): void

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_clear](foundry.canvas.placeables.PlaceableObject.md#_clear)

### \_configureFilterEffect

* \_configureFilterEffect(statusId: string, active: boolean): void

  `Internal`

  Add/Modify a filter effect on this token.

  #### Parameters

  + statusId: string

    The status effect ID being applied, from [CONFIG.specialStatusEffects](../variables/CONFIG.specialStatusEffects.md)
  + active: boolean

    Is the special status effect now active?

  #### Returns void

### \_createSharedFogVisionSource

* \_createSharedFogVisionSource(): [PointVisionSource](foundry.canvas.sources.PointVisionSource.md)

  `Internal`

  Create an unattached VisionSource instance used for shared fog exploration.

  #### Returns [PointVisionSource](foundry.canvas.sources.PointVisionSource.md)

### \_destroy

* \_destroy(options: any): void

  The inner \_destroy method which may optionally be defined by each PlaceableObject subclass.

  #### Parameters

  + options: any

    Options passed to the initial destroy call

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_destroy](foundry.canvas.placeables.PlaceableObject.md#_destroy)

### \_draw

* \_draw(options: any): Promise<void>

  #### Parameters

  + options: any

  #### Returns Promise<void>

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_draw](foundry.canvas.placeables.PlaceableObject.md#_draw)

### \_finalizeDragLeft

* \_finalizeDragLeft(event: any): void

  Finalize the left-drag operation.

  #### Parameters

  + event: any

    The triggering mouse click event

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_finalizeDragLeft](foundry.canvas.placeables.PlaceableObject.md#_finalizedragleft)

### \_getConfigMovementPosition

* \_getConfigMovementPosition(  
  Â Â Â Â changes: Partial<[TokenPosition](../interfaces/foundry.documents.types.TokenPosition.md)>,  
  ): Partial<[TokenPosition](../interfaces/foundry.documents.types.TokenPosition.md)>

  `Internal`

  Get the position for movement via the Token Config.

  #### Parameters

  + changes: Partial<[TokenPosition](../interfaces/foundry.documents.types.TokenPosition.md)>

  #### Returns Partial<[TokenPosition](../interfaces/foundry.documents.types.TokenPosition.md)>

  #### See

  [foundry.applications.sheets.TokenConfig#\_processSubmitData](foundry.applications.sheets.TokenConfig.md#_processsubmitdata)

### \_getDragOrigin

* \_getDragOrigin(): [Point](../interfaces/foundry.types.Point.md)

  `Internal`

  Get the origin of the drag operation.

  #### Returns [Point](../interfaces/foundry.types.Point.md)

### \_getDragWaypointPosition

* \_getDragWaypointPosition(  
  Â Â Â Â current: [DeepReadonly](../types/foundry.types.DeepReadonly.md)<Omit<[TokenCoordinates](../types/foundry.documents.types.TokenCoordinates.md), "level">>,  
  Â Â Â Â changes: [DeepReadonly](../types/foundry.types.DeepReadonly.md)<Partial<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)>>,  
  Â Â Â Â options?: { snap?: boolean },  
  ): Omit<[TokenCoordinates](../types/foundry.documents.types.TokenCoordinates.md), "level"> & Partial<[TokenDimensions](../types/foundry.documents.types.TokenDimensions.md)>

  `Internal`

  Get the drag waypoint position.

  #### Parameters

  + current: [DeepReadonly](../types/foundry.types.DeepReadonly.md)<Omit<[TokenCoordinates](../types/foundry.documents.types.TokenCoordinates.md), "level">>
  + changes: [DeepReadonly](../types/foundry.types.DeepReadonly.md)<Partial<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)>>
  + `Optional`options: { snap?: boolean } = {}

  #### Returns Omit<[TokenCoordinates](../types/foundry.documents.types.TokenCoordinates.md), "level"> & Partial<[TokenDimensions](../types/foundry.documents.types.TokenDimensions.md)>

### \_getHUDMovementPosition

* \_getHUDMovementPosition(elevation: number): Partial<[TokenPosition](../interfaces/foundry.documents.types.TokenPosition.md)>

  `Internal`

  Get the position for movement via the Token HUD.

  #### Parameters

  + elevation: number

  #### Returns Partial<[TokenPosition](../interfaces/foundry.documents.types.TokenPosition.md)>

  #### See

  [foundry.applications.hud.TokenHUD#\_onSubmit](foundry.applications.hud.TokenHUD.md#_onsubmit)

### \_getShiftedPosition

* \_getShiftedPosition(  
  Â Â Â Â dx: -1 | 0 | 1,  
  Â Â Â Â dy: -1 | 0 | 1,  
  Â Â Â Â dz: -1 | 0 | 1,  
  ): Partial<[TokenPosition](../interfaces/foundry.documents.types.TokenPosition.md)>

  `Internal`

  Obtain a shifted waypoint for the Token. The returned waypoint must move the Token to a snapped position.

  #### Parameters

  + dx: -1 | 0 | 1

    The number of grid units to shift along the X-axis
  + dy: -1 | 0 | 1

    The number of grid units to shift along the Y-axis
  + dz: -1 | 0 | 1

    The number of grid units to shift along the Z-axis

  #### Returns Partial<[TokenPosition](../interfaces/foundry.documents.types.TokenPosition.md)>

  The shifted target waypoint (snapped if square/hexagonal grid)

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_getShiftedPosition](foundry.canvas.placeables.PlaceableObject.md#_getshiftedposition)

### \_initializeDragLeft

* \_initializeDragLeft(event: any): void

  Initialize the left-drag operation.

  #### Parameters

  + event: any

    The triggering canvas interaction event

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_initializeDragLeft](foundry.canvas.placeables.PlaceableObject.md#_initializedragleft)

### \_onClickLeft

* \_onClickLeft(event: any): void

  Callback actions which occur on a single left-click event to assume control of the object

  #### Parameters

  + event: any

    The triggering canvas interaction event

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onClickLeft](foundry.canvas.placeables.PlaceableObject.md#_onclickleft)

### \_onClickLeft2

* \_onClickLeft2(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onClickLeft2](foundry.canvas.placeables.PlaceableObject.md#_onclickleft2)

### \_onClickRight2

* \_onClickRight2(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onClickRight2](foundry.canvas.placeables.PlaceableObject.md#_onclickright2)

### \_onCreate

* \_onCreate(data: any, options: any, userId: any): void

  Register pending canvas operations which should occur after a new PlaceableObject of this type is created

  #### Parameters

  + data: any
  + options: any
  + userId: any

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onCreate](foundry.canvas.placeables.PlaceableObject.md#_oncreate)

### \_onDelete

* \_onDelete(options: any, userId: any): void

  Define additional steps taken when an existing placeable object of this type is deleted

  #### Parameters

  + options: any
  + userId: any

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onDelete](foundry.canvas.placeables.PlaceableObject.md#_ondelete)

### \_onDragEnd

* \_onDragEnd(): void

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onDragEnd](foundry.canvas.placeables.PlaceableObject.md#_ondragend)

### \_onDragLeftCancel

* \_onDragLeftCancel(event: any): boolean | void

  Callback actions which occur on a mouse-move operation.

  #### Parameters

  + event: any

    The triggering mouse click event

  #### Returns boolean | void

  If false, the cancellation is prevented

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onDragLeftCancel](foundry.canvas.placeables.PlaceableObject.md#_ondragleftcancel)

### \_onDragLeftDrop

* \_onDragLeftDrop(event: any): false | undefined

  Callback actions which occur on a mouse-move operation.

  #### Parameters

  + event: any

    The triggering canvas interaction event

  #### Returns false | undefined

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onDragLeftDrop](foundry.canvas.placeables.PlaceableObject.md#_ondragleftdrop)

### \_onDragLeftMove

* \_onDragLeftMove(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onDragLeftMove](foundry.canvas.placeables.PlaceableObject.md#_ondragleftmove)

### \_onHoverIn

* \_onHoverIn(event: any, options: any): boolean | void

  Actions that should be taken for this Placeable Object when a mouseover event occurs.
  Hover events on PlaceableObject instances allow event propagation by default.

  #### Parameters

  + event: any

    The triggering canvas or DOM interaction event
  + options: any

    Options which customize event handling

  #### Returns boolean | void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onHoverIn](foundry.canvas.placeables.PlaceableObject.md#_onhoverin)

### \_onHoverOut

* \_onHoverOut(event: any, options: any): void

  Actions that should be taken for this Placeable Object when a mouseout event occurs

  #### Parameters

  + event: any

    The triggering canvas or DOM interaction event
  + options: any

    Options which customize event handling

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onHoverOut](foundry.canvas.placeables.PlaceableObject.md#_onhoverout)

### \_onRelease

* \_onRelease(options: any): void

  Additional events which trigger once control of the object is released

  #### Parameters

  + options: any

    Options which modify the releasing workflow

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onRelease](foundry.canvas.placeables.PlaceableObject.md#_onrelease)

### \_onUpdate

* \_onUpdate(changed: any, options: any, userId: any): void

  Define additional steps taken when an existing placeable object of this type is updated with new data

  #### Parameters

  + changed: any
  + options: any
  + userId: any

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onUpdate](foundry.canvas.placeables.PlaceableObject.md#_onupdate)

### \_overlapsSelection

* \_overlapsSelection(rectangle: any): any

  #### Parameters

  + rectangle: any

  #### Returns any

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_overlapsSelection](foundry.canvas.placeables.PlaceableObject.md#_overlapsselection)

### \_partialDraw

* \_partialDraw(fn: () => Promise<void>): Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)>

  `Internal`

  Execute a partial draw.

  #### Parameters

  + fn: () => Promise<void>

    The draw function

  #### Returns Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)>

  The drawn object

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_partialDraw](foundry.canvas.placeables.PlaceableObject.md#_partialdraw)

### \_pasteObject

* \_pasteObject(  
  Â Â Â Â offset: any,  
  Â Â Â Â \_\_namedParameters?: { hidden?: boolean; snap?: boolean },  
  ): {  
  Â Â Â Â elevation: any;  
  Â Â Â Â hidden: any;  
  Â Â Â Â level: string | null;  
  Â Â Â Â x: number;  
  Â Â Â Â y: number;  
  }

  #### Parameters

  + offset: any
  + \_\_namedParameters: { hidden?: boolean; snap?: boolean } = {}

  #### Returns { elevation: any; hidden: any; level: string | null; x: number; y: number }

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_pasteObject](foundry.canvas.placeables.PlaceableObject.md#_pasteobject)

### \_prepareDragLeftDropUpdates

* \_prepareDragLeftDropUpdates(  
  Â Â Â Â event: any,  
  ): (  
  Â Â Â Â | { \_id: string }[]  
  Â Â Â Â | {  
  Â Â Â Â Â Â Â Â \_result?: (string | object)[];  
  Â Â Â Â Â Â Â Â \_updateData?: Record<string, object>;  
  Â Â Â Â Â Â Â Â action?: "update";  
  Â Â Â Â Â Â Â Â animate?: boolean;  
  Â Â Â Â Â Â Â Â animation?: {  
  Â Â Â Â Â Â Â Â Â Â Â Â duration?: number;  
  Â Â Â Â Â Â Â Â Â Â Â Â easing?: [CanvasAnimationEasingFunction](../types/foundry.canvas.animation.types.CanvasAnimationEasingFunction.md);  
  Â Â Â Â Â Â Â Â Â Â Â Â linkToMovement?: boolean;  
  Â Â Â Â Â Â Â Â Â Â Â Â movementSpeed?: number;  
  Â Â Â Â Â Â Â Â };  
  Â Â Â Â Â Â Â Â autoRotate?: boolean;  
  Â Â Â Â Â Â Â Â broadcast?: boolean;  
  Â Â Â Â Â Â Â Â constrainOptions?: Omit<  
  Â Â Â Â Â Â Â Â Â Â Â Â [TokenConstrainMovementPathOptions](../interfaces/foundry.types.TokenConstrainMovementPathOptions.md),  
  Â Â Â Â Â Â Â Â Â Â Â Â "preview"  
  Â Â Â Â Â Â Â Â Â Â Â Â | "history"  
  Â Â Â Â Â Â Â Â Â Â Â Â | "measureOptions",  
  Â Â Â Â Â Â Â Â >;  
  Â Â Â Â Â Â Â Â diff?: boolean;  
  Â Â Â Â Â Â Â Â documentName?: string;  
  Â Â Â Â Â Â Â Â dryRun?: boolean;  
  Â Â Â Â Â Â Â Â extractedImages?: Record<string, string>;  
  Â Â Â Â Â Â Â Â measureOptions?: Omit<[TokenMeasureMovementPathOptions](../interfaces/foundry.types.TokenMeasureMovementPathOptions.md), "preview">;  
  Â Â Â Â Â Â Â Â method: string;  
  Â Â Â Â Â Â Â Â modifiedTime?: number;  
  Â Â Â Â Â Â Â Â movement: {};  
  Â Â Â Â Â Â Â Â noHook?: boolean;  
  Â Â Â Â Â Â Â Â pack?: string | null;  
  Â Â Â Â Â Â Â Â pan?: boolean | [TokenPanningOptions](../interfaces/foundry.types.TokenPanningOptions.md);  
  Â Â Â Â Â Â Â Â parent?: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | null;  
  Â Â Â Â Â Â Â Â parentUuid?: string | null;  
  Â Â Â Â Â Â Â Â planned?: boolean;  
  Â Â Â Â Â Â Â Â recursive?: boolean;  
  Â Â Â Â Â Â Â Â render?: boolean;  
  Â Â Â Â Â Â Â Â showRuler?: boolean;  
  Â Â Â Â Â Â Â Â split?: boolean;  
  Â Â Â Â Â Â Â Â terrainOptions?: Omit<[TokenCreateTerrainMovementPathOptions](../interfaces/foundry.types.TokenCreateTerrainMovementPathOptions.md), "preview">;  
  Â Â Â Â }  
  )[]

  #### Parameters

  + event: any

  #### Returns ( Â Â Â Â | { \_id: string }[] Â Â Â Â | { Â Â Â Â Â Â Â Â \_result?: (string | object)[]; Â Â Â Â Â Â Â Â \_updateData?: Record<string, object>; Â Â Â Â Â Â Â Â action?: "update"; Â Â Â Â Â Â Â Â animate?: boolean; Â Â Â Â Â Â Â Â animation?: { Â Â Â Â Â Â Â Â Â Â Â Â duration?: number; Â Â Â Â Â Â Â Â Â Â Â Â easing?: [CanvasAnimationEasingFunction](../types/foundry.canvas.animation.types.CanvasAnimationEasingFunction.md); Â Â Â Â Â Â Â Â Â Â Â Â linkToMovement?: boolean; Â Â Â Â Â Â Â Â Â Â Â Â movementSpeed?: number; Â Â Â Â Â Â Â Â }; Â Â Â Â Â Â Â Â autoRotate?: boolean; Â Â Â Â Â Â Â Â broadcast?: boolean; Â Â Â Â Â Â Â Â constrainOptions?: Omit< Â Â Â Â Â Â Â Â Â Â Â Â [TokenConstrainMovementPathOptions](../interfaces/foundry.types.TokenConstrainMovementPathOptions.md), Â Â Â Â Â Â Â Â Â Â Â Â "preview" Â Â Â Â Â Â Â Â Â Â Â Â | "history" Â Â Â Â Â Â Â Â Â Â Â Â | "measureOptions", Â Â Â Â Â Â Â Â >; Â Â Â Â Â Â Â Â diff?: boolean; Â Â Â Â Â Â Â Â documentName?: string; Â Â Â Â Â Â Â Â dryRun?: boolean; Â Â Â Â Â Â Â Â extractedImages?: Record<string, string>; Â Â Â Â Â Â Â Â measureOptions?: Omit<[TokenMeasureMovementPathOptions](../interfaces/foundry.types.TokenMeasureMovementPathOptions.md), "preview">; Â Â Â Â Â Â Â Â method: string; Â Â Â Â Â Â Â Â modifiedTime?: number; Â Â Â Â Â Â Â Â movement: {}; Â Â Â Â Â Â Â Â noHook?: boolean; Â Â Â Â Â Â Â Â pack?: string | null; Â Â Â Â Â Â Â Â pan?: boolean | [TokenPanningOptions](../interfaces/foundry.types.TokenPanningOptions.md); Â Â Â Â Â Â Â Â parent?: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | null; Â Â Â Â Â Â Â Â parentUuid?: string | null; Â Â Â Â Â Â Â Â planned?: boolean; Â Â Â Â Â Â Â Â recursive?: boolean; Â Â Â Â Â Â Â Â render?: boolean; Â Â Â Â Â Â Â Â showRuler?: boolean; Â Â Â Â Â Â Â Â split?: boolean; Â Â Â Â Â Â Â Â terrainOptions?: Omit<[TokenCreateTerrainMovementPathOptions](../interfaces/foundry.types.TokenCreateTerrainMovementPathOptions.md), "preview">; Â Â Â Â } )[]

  + { \_id: string }[]
  + {  
    Â Â Â Â \_result?: (string | object)[];  
    Â Â Â Â \_updateData?: Record<string, object>;  
    Â Â Â Â action?: "update";  
    Â Â Â Â animate?: boolean;  
    Â Â Â Â animation?: {  
    Â Â Â Â Â Â Â Â duration?: number;  
    Â Â Â Â Â Â Â Â easing?: [CanvasAnimationEasingFunction](../types/foundry.canvas.animation.types.CanvasAnimationEasingFunction.md);  
    Â Â Â Â Â Â Â Â linkToMovement?: boolean;  
    Â Â Â Â Â Â Â Â movementSpeed?: number;  
    Â Â Â Â };  
    Â Â Â Â autoRotate?: boolean;  
    Â Â Â Â broadcast?: boolean;  
    Â Â Â Â constrainOptions?: Omit<  
    Â Â Â Â Â Â Â Â [TokenConstrainMovementPathOptions](../interfaces/foundry.types.TokenConstrainMovementPathOptions.md),  
    Â Â Â Â Â Â Â Â "preview"  
    Â Â Â Â Â Â Â Â | "history"  
    Â Â Â Â Â Â Â Â | "measureOptions",  
    Â Â Â Â >;  
    Â Â Â Â diff?: boolean;  
    Â Â Â Â documentName?: string;  
    Â Â Â Â dryRun?: boolean;  
    Â Â Â Â extractedImages?: Record<string, string>;  
    Â Â Â Â measureOptions?: Omit<[TokenMeasureMovementPathOptions](../interfaces/foundry.types.TokenMeasureMovementPathOptions.md), "preview">;  
    Â Â Â Â method: string;  
    Â Â Â Â modifiedTime?: number;  
    Â Â Â Â movement: {};  
    Â Â Â Â noHook?: boolean;  
    Â Â Â Â pack?: string | null;  
    Â Â Â Â pan?: boolean | [TokenPanningOptions](../interfaces/foundry.types.TokenPanningOptions.md);  
    Â Â Â Â parent?: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | null;  
    Â Â Â Â parentUuid?: string | null;  
    Â Â Â Â planned?: boolean;  
    Â Â Â Â recursive?: boolean;  
    Â Â Â Â render?: boolean;  
    Â Â Â Â showRuler?: boolean;  
    Â Â Â Â split?: boolean;  
    Â Â Â Â terrainOptions?: Omit<[TokenCreateTerrainMovementPathOptions](../interfaces/foundry.types.TokenCreateTerrainMovementPathOptions.md), "preview">;  
    }
    - ##### `Optional`\_result?: (string | object)[]

      Used internally by the server-side backend
    - ##### `Optional`\_updateData?: Record<string, object>

      Used internally by the server-side backend
    - ##### `Optional`action?: "update"

      The action of this database operation
    - ##### `Optional`animate?: boolean

      Animate movement. Default: `true`.
    - ##### `Optional`animation?: { Â Â Â Â duration?: number; Â Â Â Â easing?: [CanvasAnimationEasingFunction](../types/foundry.canvas.animation.types.CanvasAnimationEasingFunction.md); Â Â Â Â linkToMovement?: boolean; Â Â Â Â movementSpeed?: number; }

      The animation options.

      * ##### `Optional`duration?: number

        The duration of the animation in milliseconds (nonnegative).
      * ##### `Optional`easing?: [CanvasAnimationEasingFunction](../types/foundry.canvas.animation.types.CanvasAnimationEasingFunction.md)

        The easing function of the animation of non-movement
        properties. Default: `undefined` (linear).
      * ##### `Optional`linkToMovement?: boolean

        Set the duration of non-movement properties to the animation.
      * ##### `Optional`movementSpeed?: number

        The base movement speed in grid size per second (positive).
    - ##### `Optional`autoRotate?: boolean

      Automatically rotate the token in the direction of movement? Default:
      `game.settings.get("core", "tokenAutoRotate")` if `method` is `"dragging"` or `"keyboard"` otherwise `false`.
    - ##### `Optional`broadcast?: boolean

      Whether the database operation is broadcast to other connected clients
    - ##### `Optional`constrainOptions?: Omit< Â Â Â Â [TokenConstrainMovementPathOptions](../interfaces/foundry.types.TokenConstrainMovementPathOptions.md), Â Â Â Â "preview" Â Â Â Â | "history" Â Â Â Â | "measureOptions", >

      The options to constrain movement.
    - ##### `Optional`diff?: boolean

      Difference each update object against current Document data and only use
      differential data for the update operation
    - ##### `Optional`documentName?: string

      The Document name
    - ##### `Optional`dryRun?: boolean

      Is the operation a dry run? If so, an empty result array is returned
      before the Documents are updated.
    - ##### `Optional`extractedImages?: Record<string, string>

      Base64 images extracted during server-side processing
    - ##### `Optional`measureOptions?: Omit<[TokenMeasureMovementPathOptions](../interfaces/foundry.types.TokenMeasureMovementPathOptions.md), "preview">

      The options to measure movement.
    - ##### method: string
    - ##### `Optional`modifiedTime?: number

      The timestamp when the operation was performed
    - ##### movement: {}
    - ##### `Optional`noHook?: boolean

      Skip dispatch of preUpdate hooks for this operation
    - ##### `Optional`pack?: string | null

      A compendium collection ID which contains the Documents
    - ##### `Optional`pan?: boolean | [TokenPanningOptions](../interfaces/foundry.types.TokenPanningOptions.md)

      Pan the canvas (with transition animation) to the destination
      if the token is controlled? Default: `true`.
    - ##### `Optional`parent?: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | null

      A parent Document within which Documents are embedded
    - ##### `Optional`parentUuid?: string | null

      A parent Document UUID provided when the parent instance is unavailable
    - ##### `Optional`planned?: boolean

      Don't start the movement yet? Default: `false`.
    - ##### `Optional`recursive?: boolean

      Merge objects recursively. If false, inner objects will be replaced
      explicitly. Use with caution!
    - ##### `Optional`render?: boolean

      Re-render Applications whose display depends on the created Documents
    - ##### `Optional`showRuler?: boolean

      Show the ruler during the movement animation of the token? Default: `true` if
      `method` is `"dragging"` otherwise `false`.
      duration of movement. Default: `false`.
    - ##### `Optional`split?: boolean

      Start a new subpath? Default: `false` if it's movement
      without history or keyboard movement that follows keyboard
      movement, otherwise `true`.
    - ##### `Optional`terrainOptions?: Omit<[TokenCreateTerrainMovementPathOptions](../interfaces/foundry.types.TokenCreateTerrainMovementPathOptions.md), "preview">

      The terrain movement options.

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_prepareDragLeftDropUpdates](foundry.canvas.placeables.PlaceableObject.md#_preparedragleftdropupdates)

### \_propagateLeftClick

* \_propagateLeftClick(event: any): boolean

  #### Parameters

  + event: any

  #### Returns boolean

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_propagateLeftClick](foundry.canvas.placeables.PlaceableObject.md#_propagateleftclick)

### \_refreshState

* \_refreshState(): void

  Refresh the displayed state of the placeable.
  Used to update aspects of the placeable which change based on the user interaction state.

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_refreshState](foundry.canvas.placeables.PlaceableObject.md#_refreshstate)

### \_refreshVisibility

* \_refreshVisibility(): void

  Refresh the visibility of the placeable.

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_refreshVisibility](foundry.canvas.placeables.PlaceableObject.md#_refreshvisibility)

### \_removeAllFilterEffects

* \_removeAllFilterEffects(): void

  `Internal`

  Remove all filter effects on this placeable.

  #### Returns void

### \_updateQuadtree

* \_updateQuadtree(): void

  `Internal`

  Update the quadtree.

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_updateQuadtree](foundry.canvas.placeables.PlaceableObject.md#_updatequadtree)

### \_updateRotation

* \_updateRotation(\_\_namedParameters?: { delta?: number; snap?: number }): number

  #### Parameters

  + \_\_namedParameters: { delta?: number; snap?: number } = {}

  #### Returns number

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_updateRotation](foundry.canvas.placeables.PlaceableObject.md#_updaterotation)

### \_updateSpecialStatusFilterEffects

* \_updateSpecialStatusFilterEffects(): void

  `Internal`

  Update the filter effects depending on special status effects
  TODO: replace this method by something more convenient.

  #### Returns void

### \_updateTarget

* \_updateTarget(targeted: boolean, user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md)): void

  `Internal`

  Handle updating the targeting state of this Token for a particular User.

  #### Parameters

  + targeted: boolean

    Is the token now targeted?
  + user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md)

    The user whose targeting state has changed

  #### Returns void

### activateListeners

* activateListeners(): void

  Activate interactivity for the Placeable Object

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[activateListeners](foundry.canvas.placeables.PlaceableObject.md#activatelisteners)

### animate

* animate(  
  Â Â Â Â to: Partial<[TokenAnimationData](../interfaces/foundry.types.TokenAnimationData.md)>,  
  Â Â Â Â options?: [TokenAnimationOptions](../interfaces/foundry.types.TokenAnimationOptions.md),  
  ): Promise<void>

  Animate from the old to the new state of this Token.

  #### Parameters

  + to: Partial<[TokenAnimationData](../interfaces/foundry.types.TokenAnimationData.md)>

    The animation data to animate to
  + `Optional`options: [TokenAnimationOptions](../interfaces/foundry.types.TokenAnimationOptions.md) = {}

    The options that configure the animation behavior

  #### Returns Promise<void>

  A promise which resolves once the animation has finished or stopped

### applyRenderFlags

* applyRenderFlags(): void

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[applyRenderFlags](foundry.canvas.placeables.PlaceableObject.md#applyrenderflags)

### can

* can(  
  Â Â Â Â user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md),  
  Â Â Â Â action:  
  Â Â Â Â Â Â Â Â | "view"  
  Â Â Â Â Â Â Â Â | "create"  
  Â Â Â Â Â Â Â Â | "update"  
  Â Â Â Â Â Â Â Â | "delete"  
  Â Â Â Â Â Â Â Â | "control"  
  Â Â Â Â Â Â Â Â | "hover"  
  Â Â Â Â Â Â Â Â | "drag"  
  Â Â Â Â Â Â Â Â | "configure"  
  Â Â Â Â Â Â Â Â | "HUD",  
  ): boolean

  Test whether a user can perform a certain interaction regarding a Placeable Object

  #### Parameters

  + user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md)

    The User performing the action. Must be equal to `game.user`.
  + action:   
    Â Â Â Â | "view"  
    Â Â Â Â | "create"  
    Â Â Â Â | "update"  
    Â Â Â Â | "delete"  
    Â Â Â Â | "control"  
    Â Â Â Â | "hover"  
    Â Â Â Â | "drag"  
    Â Â Â Â | "configure"  
    Â Â Â Â | "HUD"

    The named action being attempted

  #### Returns boolean

  Does the User have rights to perform the action?

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[can](foundry.canvas.placeables.PlaceableObject.md#can)

### checkCollision

* checkCollision(  
  Â Â Â Â destination: [Point](../interfaces/foundry.types.Point.md) | [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md),  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â mode?: "any" | "closest" | "all";  
  Â Â Â Â Â Â Â Â origin?: [Point](../interfaces/foundry.types.Point.md) | [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md);  
  Â Â Â Â Â Â Â Â type?: [PointSourcePolygonType](../types/foundry.canvas.geometry.types.PointSourcePolygonType.md);  
  Â Â Â Â },  
  ): boolean  
  | [PolygonVertex](foundry.canvas.geometry.edges.PolygonVertex.md)  
  | [PolygonVertex](foundry.canvas.geometry.edges.PolygonVertex.md)[]  
  | null

  Check for collision when attempting a move to a new position.

  The result of this function must not be affected by the animation of this Token.

  #### Parameters

  + destination: [Point](../interfaces/foundry.types.Point.md) | [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

    The central destination point of the attempted movement.
    The elevation defaults to the elevation of the origin.
  + `Optional`options: {  
    Â Â Â Â mode?: "any" | "closest" | "all";  
    Â Â Â Â origin?: [Point](../interfaces/foundry.types.Point.md) | [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md);  
    Â Â Â Â type?: [PointSourcePolygonType](../types/foundry.canvas.geometry.types.PointSourcePolygonType.md);  
    } = {}

    Additional options forwarded to PointSourcePolygon.testCollision

    - ##### `Optional`mode?: "any" | "closest" | "all"

      The collision mode to test: "any", "all", or "closest"
    - ##### `Optional`origin?: [Point](../interfaces/foundry.types.Point.md) | [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.md)

      The origin to be used instead of the current origin. The elevation
      defaults to the current elevation.
    - ##### `Optional`type?: [PointSourcePolygonType](../types/foundry.canvas.geometry.types.PointSourcePolygonType.md)

      The collision type

  #### Returns boolean | [PolygonVertex](foundry.canvas.geometry.edges.PolygonVertex.md) | [PolygonVertex](foundry.canvas.geometry.edges.PolygonVertex.md)[] | null

  The collision result depends on the mode of the test:
  \* any: returns a boolean for whether any collision occurred
  \* all: returns a sorted array of PolygonVertex instances
  \* closest: returns a PolygonVertex instance or null

### clone

* clone(): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)

  Clone the placeable object, returning a new object with identical attributes.
  The returned object is non-interactive, and has no assigned ID.
  If you plan to use it permanently you should call the create method.

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)

  A new object with identical data

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[clone](foundry.canvas.placeables.PlaceableObject.md#clone)

### constrainMovementPath

* constrainMovementPath(  
  Â Â Â Â waypoints: Partial<[TokenProcessedMovementWaypoint](../interfaces/foundry.documents.types.TokenProcessedMovementWaypoint.md)>[],  
  Â Â Â Â options?: [TokenConstrainMovementPathOptions](../interfaces/foundry.types.TokenConstrainMovementPathOptions.md),  
  ): [  
  Â Â Â Â constrainedPath: [TokenProcessedMovementWaypoint](../interfaces/foundry.documents.types.TokenProcessedMovementWaypoint.md)[],  
  Â Â Â Â wasConstrained: boolean,  
  ]

  Constrain the given movement path.

  The result of this function must not be affected by the animation of this Token.

  #### Parameters

  + waypoints: Partial<[TokenProcessedMovementWaypoint](../interfaces/foundry.documents.types.TokenProcessedMovementWaypoint.md)>[]

    The waypoints of movement
  + `Optional`options: [TokenConstrainMovementPathOptions](../interfaces/foundry.types.TokenConstrainMovementPathOptions.md) = {}

    Additional options

  #### Returns [constrainedPath: [TokenProcessedMovementWaypoint](../interfaces/foundry.documents.types.TokenProcessedMovementWaypoint.md)[], wasConstrained: boolean]

  The (constrained) path of movement and a boolean that is true if and only if the path was constrained.
  If it wasn't constrained, then a copy of the path of all given waypoints with all default values filled in
  is returned.

### control

* control(  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â chain?: boolean;  
  Â Â Â Â Â Â Â Â force?: boolean;  
  Â Â Â Â Â Â Â Â isNew?: boolean;  
  Â Â Â Â Â Â Â Â pan?: boolean | [TokenPanningOptions](../interfaces/foundry.types.TokenPanningOptions.md);  
  Â Â Â Â Â Â Â Â releaseOthers?: boolean;  
  Â Â Â Â Â Â Â Â renderSidebar?: boolean;  
  Â Â Â Â },  
  ): boolean

  Assume control over a PlaceableObject, flagging it as controlled and enabling downstream behaviors

  #### Parameters

  + `Optional`options: {  
    Â Â Â Â chain?: boolean;  
    Â Â Â Â force?: boolean;  
    Â Â Â Â isNew?: boolean;  
    Â Â Â Â pan?: boolean | [TokenPanningOptions](../interfaces/foundry.types.TokenPanningOptions.md);  
    Â Â Â Â releaseOthers?: boolean;  
    Â Â Â Â renderSidebar?: boolean;  
    } = {}

    Additional options which modify the control request.

    - ##### `Optional`chain?: boolean

      Control all Walls that are linked with this Wall. Only applies to Wall. Default: `false`.
    - ##### `Optional`force?: boolean

      Control the object even if it is not interactable? Default: `false`.
    - ##### `Optional`isNew?: boolean

      Was this object just created? Default: `false`.
    - ##### `Optional`pan?: boolean | [TokenPanningOptions](../interfaces/foundry.types.TokenPanningOptions.md)

      Pan to this Token? Only applies to Token. Default: `false`.
    - ##### `Optional`releaseOthers?: boolean

      Release any other controlled objects first. Default: `true`.
    - ##### `Optional`renderSidebar?: boolean

      Re-render the sidebar. Default: `true`.

  #### Returns boolean

  A flag denoting whether control was successful.

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[control](foundry.canvas.placeables.PlaceableObject.md#control)

### createTerrainMovementPath

* createTerrainMovementPath(  
  Â Â Â Â waypoints: Partial<Omit<[TokenProcessedMovementWaypoint](../interfaces/foundry.documents.types.TokenProcessedMovementWaypoint.md), "terrain">>[],  
  Â Â Â Â options?: [TokenCreateTerrainMovementPathOptions](../interfaces/foundry.types.TokenCreateTerrainMovementPathOptions.md),  
  ): [TokenProcessedMovementWaypoint](../interfaces/foundry.documents.types.TokenProcessedMovementWaypoint.md)[]

  This function adds intermediate waypoints pre/post enter and exit for a [Region](foundry.canvas.placeables.Region.md) if the Region
  has at least one Behavior that could affect the movement, which is determined by
  [foundry.data.regionBehaviors.RegionBehaviorType#\_getTerrainEffects](foundry.data.regionBehaviors.RegionBehaviorType.md#_getterraineffects).
  For each segment of the movement path the terrain data is created from all behaviors that
  could affect the movement of this Token with [CONFIG.Token.movement.TerrainData.resolveTerrainEffects](foundry.data.BaseTerrainData.md#resolveterraineffects).
  This terrain data is included in the returned regionalized movement path.
  This terrain data may then be used in [Token#\_getMovementCostFunction](#_getmovementcostfunction) and
  [Token#constrainMovementPath](#constrainmovementpath).

  #### Parameters

  + waypoints: Partial<Omit<[TokenProcessedMovementWaypoint](../interfaces/foundry.documents.types.TokenProcessedMovementWaypoint.md), "terrain">>[]

    The waypoints of movement
  + `Optional`options: [TokenCreateTerrainMovementPathOptions](../interfaces/foundry.types.TokenCreateTerrainMovementPathOptions.md) = {}

    Additional options

  #### Returns [TokenProcessedMovementWaypoint](../interfaces/foundry.documents.types.TokenProcessedMovementWaypoint.md)[]

  The movement path with terrain data

### destroy

* destroy(options: any): any

  #### Parameters

  + options: any

  #### Returns any

  #### Inherit Doc

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[destroy](foundry.canvas.placeables.PlaceableObject.md#destroy)

### draw

* draw(options?: object): Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)>

  Draw the placeable object into its parent container

  #### Parameters

  + `Optional`options: object = {}

    Options which may modify the draw and refresh workflow

  #### Returns Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)>

  The drawn object

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[draw](foundry.canvas.placeables.PlaceableObject.md#draw)

### drawBars

* drawBars(): void

  Refresh the display of Token attribute bars, rendering its latest resource data.
  If the bar attribute is valid (has a value and max), draw the bar. Otherwise hide it.

  #### Returns void

### drawEffects

* drawEffects(): Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)>

  Draw the effect icons for ActiveEffect documents which apply to the Token's Actor.

  #### Returns Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)>

### findMovementPath

* findMovementPath(  
  Â Â Â Â waypoints: Partial<[TokenMovementWaypoint](../interfaces/foundry.documents.types.TokenMovementWaypoint.md)>[],  
  Â Â Â Â options?: [TokenFindMovementPathOptions](../interfaces/foundry.types.TokenFindMovementPathOptions.md),  
  ): [TokenFindMovementPathJob](../interfaces/foundry.types.TokenFindMovementPathJob.md)

  Find a movement path through the waypoints.
  The path may not necessarily be one with the least cost.
  The path returned may be partial, i.e. it doesn't go through all waypoints, but must always start with the first
  waypoints unless the waypoints are empty, in which case an empty path is returned.

  The result of this function must not be affected by the animation of this Token.

  #### Parameters

  + waypoints: Partial<[TokenMovementWaypoint](../interfaces/foundry.documents.types.TokenMovementWaypoint.md)>[]

    The waypoints of movement
  + `Optional`options: [TokenFindMovementPathOptions](../interfaces/foundry.types.TokenFindMovementPathOptions.md) = {}

    Additional options

  #### Returns [TokenFindMovementPathJob](../interfaces/foundry.types.TokenFindMovementPathJob.md)

  The job of the movement pathfinder

### getCenterPoint

* getCenterPoint(position?: [Point](../interfaces/foundry.types.Point.md)): [Point](../interfaces/foundry.types.Point.md)

  Get the center point of the Token.

  #### Parameters

  + `Optional`position: [Point](../interfaces/foundry.types.Point.md)

    The position in pixels

  #### Returns [Point](../interfaces/foundry.types.Point.md)

  The center point

### getDispositionColor

* getDispositionColor(): number

  Get the Color used to represent the disposition of this Token.

  #### Returns number

### getLightRadius

* getLightRadius(units: number): number

  A generic transformation to turn a certain number of grid units into a radius in canvas pixels.
  This function adds additional padding to the light radius equal to the external radius of the token.
  This causes light to be measured from the outer token edge, rather than from the center-point.

  #### Parameters

  + units: number

    The radius in grid units

  #### Returns number

  The radius in pixels

### getRingColors

* getRingColors(): {}

  Override ring colors for this particular Token instance.

  #### Returns {}

### getRingEffects

* getRingEffects(): number[]

  Apply additional ring effects for this particular Token instance.
  Effects are returned as an array of integers in [foundry.canvas.placeables.tokens.TokenRing.effects](foundry.canvas.placeables.tokens.TokenRing.md#effects-1).

  #### Returns number[]

### getShape

* getShape(): Rectangle | Polygon | Circle | Ellipse

  Get the shape of this Token.

  #### Returns Rectangle | Polygon | Circle | Ellipse

### getSnappedPosition

* getSnappedPosition(position: any): { x: any; y: any }

  #### Parameters

  + position: any

  #### Returns { x: any; y: any }

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[getSnappedPosition](foundry.canvas.placeables.PlaceableObject.md#getsnappedposition)

### initializeLightSource

* initializeLightSource(options?: { deleted?: boolean }): void

  Update an emitted light source associated with this Token.

  #### Parameters

  + `Optional`options: { deleted?: boolean } = {}
    - ##### `Optional`deleted?: boolean

      Indicate that this light source has been deleted.

  #### Returns void

### initializeSources

* initializeSources(options?: { deleted?: boolean }): void

  Update the light and vision source objects associated with this Token.

  #### Parameters

  + `Optional`options: { deleted?: boolean } = {}

    Options which configure how perception sources are updated

    - ##### `Optional`deleted?: boolean

      Indicate that this light and vision source has been deleted

  #### Returns void

### initializeVisionSource

* initializeVisionSource(options?: { deleted?: boolean }): void

  Update the VisionSource instance associated with this Token.

  #### Parameters

  + `Optional`options: { deleted?: boolean } = {}

    Options which affect how the vision source is updated

    - ##### `Optional`deleted?: boolean

      Indicate that this vision source has been deleted.

  #### Returns void

### measureMovementPath

* measureMovementPath(  
  Â Â Â Â waypoints: [TokenMeasurableMovementWaypoint](../types/foundry.documents.types.TokenMeasurableMovementWaypoint.md)[],  
  Â Â Â Â options?: [TokenMeasureMovementPathOptions](../interfaces/foundry.types.TokenMeasureMovementPathOptions.md),  
  ): [GridMeasurePathResult](../interfaces/foundry.grid.types.GridMeasurePathResult.md)

  Measure the movement path for this Token.

  #### Parameters

  + waypoints: [TokenMeasurableMovementWaypoint](../types/foundry.documents.types.TokenMeasurableMovementWaypoint.md)[]

    The waypoints of movement
  + `Optional`options: [TokenMeasureMovementPathOptions](../interfaces/foundry.types.TokenMeasureMovementPathOptions.md)

    Additional options that affect cost calculations
    (passed to [Token#\_getMovementCostFunction](#_getmovementcostfunction))

  #### Returns [GridMeasurePathResult](../interfaces/foundry.grid.types.GridMeasurePathResult.md)

### panCanvas

* panCanvas(options?: [TokenPanningOptions](../interfaces/foundry.types.TokenPanningOptions.md)): Promise<void>

  Automatically pan the canvas to this Token.

  #### Parameters

  + `Optional`options: [TokenPanningOptions](../interfaces/foundry.types.TokenPanningOptions.md) = {}

    Additional options

  #### Returns Promise<void>

  Resolves once the panning/transition animation is complete.

### planMovement

* planMovement(  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â allowedActions?: Iterable<string, any, any> | null;  
  Â Â Â Â Â Â Â Â constrainOptions?: Omit<  
  Â Â Â Â Â Â Â Â Â Â Â Â [TokenConstrainMovementPathOptions](../interfaces/foundry.types.TokenConstrainMovementPathOptions.md),  
  Â Â Â Â Â Â Â Â Â Â Â Â "preview"  
  Â Â Â Â Â Â Â Â Â Â Â Â | "history"  
  Â Â Â Â Â Â Â Â Â Â Â Â | "measureOptions",  
  Â Â Â Â Â Â Â Â >;  
  Â Â Â Â Â Â Â Â direct?: boolean;  
  Â Â Â Â Â Â Â Â maxCost?: number;  
  Â Â Â Â Â Â Â Â maxDistance?: number;  
  Â Â Â Â Â Â Â Â measureOptions?: Omit<[TokenMeasureMovementPathOptions](../interfaces/foundry.types.TokenMeasureMovementPathOptions.md), "preview">;  
  Â Â Â Â Â Â Â Â minCost?: number;  
  Â Â Â Â Â Â Â Â minDistance?: number;  
  Â Â Â Â Â Â Â Â moveOptions?: Omit<  
  Â Â Â Â Â Â Â Â Â Â Â Â [TokenMovementOptions](../interfaces/foundry.documents.types.TokenMovementOptions.md),  
  Â Â Â Â Â Â Â Â Â Â Â Â | "id"  
  Â Â Â Â Â Â Â Â Â Â Â Â | "method"  
  Â Â Â Â Â Â Â Â Â Â Â Â | "measureOptions"  
  Â Â Â Â Â Â Â Â Â Â Â Â | "terrainOptions"  
  Â Â Â Â Â Â Â Â Â Â Â Â | "constrainOptions"  
  Â Â Â Â Â Â Â Â Â Â Â Â | "planned",  
  Â Â Â Â Â Â Â Â >;  
  Â Â Â Â Â Â Â Â pathfindingOptions?: Omit<  
  Â Â Â Â Â Â Â Â Â Â Â Â [TokenFindMovementPathOptions](../interfaces/foundry.types.TokenFindMovementPathOptions.md),  
  Â Â Â Â Â Â Â Â Â Â Â Â "preview"  
  Â Â Â Â Â Â Â Â Â Â Â Â | "measureOptions"  
  Â Â Â Â Â Â Â Â Â Â Â Â | "terrainOptions"  
  Â Â Â Â Â Â Â Â Â Â Â Â | "constrainOptions",  
  Â Â Â Â Â Â Â Â >;  
  Â Â Â Â Â Â Â Â preventDrop?: number;  
  Â Â Â Â Â Â Â Â terrainOptions?: Omit<[TokenCreateTerrainMovementPathOptions](../interfaces/foundry.types.TokenCreateTerrainMovementPathOptions.md), "preview">;  
  Â Â Â Â },  
  ): Promise<  
  Â Â Â Â | {  
  Â Â Â Â Â Â Â Â destination: [TokenPosition](../interfaces/foundry.documents.types.TokenPosition.md);  
  Â Â Â Â Â Â Â Â id: string;  
  Â Â Â Â Â Â Â Â origin: [TokenPosition](../interfaces/foundry.documents.types.TokenPosition.md);  
  Â Â Â Â Â Â Â Â waypoints: [TokenMovementWaypoint](../interfaces/foundry.documents.types.TokenMovementWaypoint.md)[];  
  Â Â Â Â }  
  Â Â Â Â | null,  
  >

  Plan a movement for this Token.

  #### Parameters

  + `Optional`options: {  
    Â Â Â Â allowedActions?: Iterable<string, any, any> | null;  
    Â Â Â Â constrainOptions?: Omit<  
    Â Â Â Â Â Â Â Â [TokenConstrainMovementPathOptions](../interfaces/foundry.types.TokenConstrainMovementPathOptions.md),  
    Â Â Â Â Â Â Â Â "preview"  
    Â Â Â Â Â Â Â Â | "history"  
    Â Â Â Â Â Â Â Â | "measureOptions",  
    Â Â Â Â >;  
    Â Â Â Â direct?: boolean;  
    Â Â Â Â maxCost?: number;  
    Â Â Â Â maxDistance?: number;  
    Â Â Â Â measureOptions?: Omit<[TokenMeasureMovementPathOptions](../interfaces/foundry.types.TokenMeasureMovementPathOptions.md), "preview">;  
    Â Â Â Â minCost?: number;  
    Â Â Â Â minDistance?: number;  
    Â Â Â Â moveOptions?: Omit<  
    Â Â Â Â Â Â Â Â [TokenMovementOptions](../interfaces/foundry.documents.types.TokenMovementOptions.md),  
    Â Â Â Â Â Â Â Â | "id"  
    Â Â Â Â Â Â Â Â | "method"  
    Â Â Â Â Â Â Â Â | "measureOptions"  
    Â Â Â Â Â Â Â Â | "terrainOptions"  
    Â Â Â Â Â Â Â Â | "constrainOptions"  
    Â Â Â Â Â Â Â Â | "planned",  
    Â Â Â Â >;  
    Â Â Â Â pathfindingOptions?: Omit<  
    Â Â Â Â Â Â Â Â [TokenFindMovementPathOptions](../interfaces/foundry.types.TokenFindMovementPathOptions.md),  
    Â Â Â Â Â Â Â Â "preview"  
    Â Â Â Â Â Â Â Â | "measureOptions"  
    Â Â Â Â Â Â Â Â | "terrainOptions"  
    Â Â Â Â Â Â Â Â | "constrainOptions",  
    Â Â Â Â >;  
    Â Â Â Â preventDrop?: number;  
    Â Â Â Â terrainOptions?: Omit<[TokenCreateTerrainMovementPathOptions](../interfaces/foundry.types.TokenCreateTerrainMovementPathOptions.md), "preview">;  
    } = {}

    Additional options.

    - ##### `Optional`allowedActions?: Iterable<string, any, any> | null

      The possible movement actions that can be used to this planned movement.
      Default: `null` (all selectable movement actions).
    - ##### `Optional`constrainOptions?: Omit< Â Â Â Â [TokenConstrainMovementPathOptions](../interfaces/foundry.types.TokenConstrainMovementPathOptions.md), Â Â Â Â "preview" Â Â Â Â | "history" Â Â Â Â | "measureOptions", >

      The options to constrain movement.
    - ##### `Optional`direct?: boolean

      Only allow direct movement between the origin and destination?
      Default: `false`.
    - ##### `Optional`maxCost?: number

      The maximum cost of this planned movement at the time of the planning.
      The actual cost of the movement when it is executed might be greater than
      the maximum cost. Default: `Infinity`.
    - ##### `Optional`maxDistance?: number

      The maximum distance of this planned movement at the time of the planning.
      The actual cost of the movement when it is executed might be greater than
      the maximum cost. Default: `Infinity`.
    - ##### `Optional`measureOptions?: Omit<[TokenMeasureMovementPathOptions](../interfaces/foundry.types.TokenMeasureMovementPathOptions.md), "preview">

      The options to measure movement.
    - ##### `Optional`minCost?: number

      The minimum cost of this planned movement at the time of the planning.
      The actual cost of the movement when it is executed might be less than
      the minimum cost. Default: `0`.
    - ##### `Optional`minDistance?: number

      The minimum distance of this planned movement at the time of the planning.
      The actual cost of the movement when it is executed might be less than
      the minimum cost. Default: `0`.
    - ##### `Optional`moveOptions?: Omit< Â Â Â Â [TokenMovementOptions](../interfaces/foundry.documents.types.TokenMovementOptions.md), Â Â Â Â | "id" Â Â Â Â | "method" Â Â Â Â | "measureOptions" Â Â Â Â | "terrainOptions" Â Â Â Â | "constrainOptions" Â Â Â Â | "planned", >

      The movement options.
    - ##### `Optional`pathfindingOptions?: Omit< Â Â Â Â [TokenFindMovementPathOptions](../interfaces/foundry.types.TokenFindMovementPathOptions.md), Â Â Â Â "preview" Â Â Â Â | "measureOptions" Â Â Â Â | "terrainOptions" Â Â Â Â | "constrainOptions", >

      The pathfinding options.
    - ##### `Optional`preventDrop?: number

      Prevent drop if any of the cost or distance limits are violated.
      Default: `false`.
    - ##### `Optional`terrainOptions?: Omit<[TokenCreateTerrainMovementPathOptions](../interfaces/foundry.types.TokenCreateTerrainMovementPathOptions.md), "preview">

      The terrain movement options.

  #### Returns Promise< Â Â Â Â | { Â Â Â Â Â Â Â Â destination: [TokenPosition](../interfaces/foundry.documents.types.TokenPosition.md); Â Â Â Â Â Â Â Â id: string; Â Â Â Â Â Â Â Â origin: [TokenPosition](../interfaces/foundry.documents.types.TokenPosition.md); Â Â Â Â Â Â Â Â waypoints: [TokenMovementWaypoint](../interfaces/foundry.documents.types.TokenMovementWaypoint.md)[]; Â Â Â Â } Â Â Â Â | null, >

  The planned movement ID, origin, destination, and waypoints, or null if the dismiss key was pressed,
  the Token was released, the game was paused and the user is not a GM, or the Token is locked.

  #### See

  [foundry.documents.TokenDocument#startMovement](foundry.documents.TokenDocument.md#startmovement)

  #### Example

  ```
  const plan = await token.planMovement({  
    allowedActions: ["blink"],  
    direct: true,  
    maxDistance: 30,  
    preventDrop: true  
  });  
  if ( !plan ) return;  
  await token.document.startMovement(plan.id
  Copy
  ```

### recalculatePlannedMovementPath

* recalculatePlannedMovementPath(): void

  Recalculate the planned movement path of this Token for the current User.

  #### Returns void

### refresh

* refresh(options?: object): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)

  Refresh all incremental render flags for the PlaceableObject.
  This method is no longer used by the core software but provided for backwards compatibility.

  #### Parameters

  + `Optional`options: object = {}

    Options which may modify the refresh workflow

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)

  The refreshed object

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[refresh](foundry.canvas.placeables.PlaceableObject.md#refresh)

### release

* release(options?: { renderSidebar?: boolean }): boolean

  Release control over a PlaceableObject, removing it from the controlled set

  #### Parameters

  + options: { renderSidebar?: boolean } = {}

    Options which modify the releasing workflow

    - ##### `Optional`renderSidebar?: boolean

      Re-render the sidebar.

  #### Returns boolean

  A Boolean flag confirming the object was released.

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[release](foundry.canvas.placeables.PlaceableObject.md#release)

### rotate

* rotate(angle: number, snap: number): Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)>

  Rotate the PlaceableObject to a certain angle of facing

  #### Parameters

  + angle: number

    The desired angle of rotation
  + snap: number

    Snap the angle of rotation to a certain target degree increment

  #### Returns Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)>

  The rotated object

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[rotate](foundry.canvas.placeables.PlaceableObject.md#rotate)

### setTarget

* setTarget(targeted?: boolean, options?: { releaseOthers?: boolean }): void

  Set this Token as an active target for the current game User.

  #### Parameters

  + targeted: boolean = true

    Is the Token now targeted?
  + `Optional`options: { releaseOthers?: boolean } = {}

    Additional option which modify how targets are acquired

    - ##### `Optional`releaseOthers?: boolean

      Release other active targets?

  #### Returns void

### stopAnimation

* stopAnimation(options?: { reset?: boolean }): void

  Terminate the animations of this particular Token, if exists.

  #### Parameters

  + `Optional`options: { reset?: boolean } = {}

    Additional options.

    - ##### `Optional`reset?: boolean

      Reset the TokenDocument?

  #### Returns void

### `Protected`\_addDragWaypoint

* \_addDragWaypoint(point: [Point](../interfaces/foundry.types.Point.md), options?: { snap?: boolean }): void

  `Protected`

  Add ruler waypoints and update ruler paths.

  #### Parameters

  + point: [Point](../interfaces/foundry.types.Point.md)

    The (unsnapped) center point of the waypoint
  + `Optional`options: { snap?: boolean } = {}

    Additional options

    - ##### `Optional`snap?: boolean

      Snap the added waypoint?

  #### Returns void

### `Protected`\_canCreate

* \_canCreate(  
  Â Â Â Â user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md),  
  Â Â Â Â event?: FederatedEvent<UIEvent | PixiTouch>,  
  ): boolean

  `Protected`

  Does the User have permission to create the underlying Document?

  #### Parameters

  + user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md)

    The User performing the action. Always equal to `game.user`.
  + `Optional`event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event if this function was called by
    [foundry.canvas.interaction.MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.md).

  #### Returns boolean

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_canCreate](foundry.canvas.placeables.PlaceableObject.md#_cancreate)

### `Protected`\_canDelete

* \_canDelete(  
  Â Â Â Â user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md),  
  Â Â Â Â event?: FederatedEvent<UIEvent | PixiTouch>,  
  ): boolean

  `Protected`

  Does the User have permission to delete the underlying Document?

  #### Parameters

  + user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md)

    The User performing the action. Always equal to `game.user`.
  + `Optional`event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event if this function was called by
    [foundry.canvas.interaction.MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.md).

  #### Returns boolean

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_canDelete](foundry.canvas.placeables.PlaceableObject.md#_candelete)

### `Protected`\_canDragLeftStart

* \_canDragLeftStart(  
  Â Â Â Â user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md),  
  Â Â Â Â event: FederatedEvent<UIEvent | PixiTouch>,  
  Â Â Â Â options?: { notify: boolean },  
  ): boolean

  `Protected`

  Does the User have permission to left-click drag this Placeable Object?

  #### Parameters

  + user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md)

    The User performing the action. Always equal to `game.user`.
  + event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event
  + `Optional`options: { notify: boolean } = {}

    Options, used internally

  #### Returns boolean

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_canDragLeftStart](foundry.canvas.placeables.PlaceableObject.md#_candragleftstart)

### `Protected`\_canUpdate

* \_canUpdate(  
  Â Â Â Â user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md),  
  Â Â Â Â event?: FederatedEvent<UIEvent | PixiTouch>,  
  ): boolean

  `Protected`

  Does the User have permission to update the underlying Document?

  #### Parameters

  + user: [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md)

    The User performing the action. Always equal to `game.user`.
  + `Optional`event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event if this function was called by
    [foundry.canvas.interaction.MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.md).

  #### Returns boolean

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_canUpdate](foundry.canvas.placeables.PlaceableObject.md#_canupdate)

### `Protected`\_canViewMode

* \_canViewMode(mode: [TokenDisplayMode](../types/CONST.TokenDisplayMode.md)): boolean

  `Protected`

  Helper method to determine whether a token attribute is viewable under a certain mode

  #### Parameters

  + mode: [TokenDisplayMode](../types/CONST.TokenDisplayMode.md)

    The mode from [CONST.TOKEN\_DISPLAY\_MODES](../variables/CONST.TOKEN_DISPLAY_MODES.md)

  #### Returns boolean

  Is the attribute viewable?

### `Protected`\_changeDragElevation

* \_changeDragElevation(delta: number, options?: { precise?: boolean }): void

  `Protected`

  Change the elevation of the dragged Tokens.

  #### Parameters

  + delta: number

    The number vertical steps
  + `Optional`options: { precise?: boolean } = {}

    Additional options

    - ##### `Optional`precise?: boolean

      Round elevations to multiples of the grid distance divided by
      `CONFIG.Canvas.elevationSnappingPrecision`?
      If false, rounds to multiples of the grid distance.

  #### Returns void

### `Protected`\_createInteractionManager

* \_createInteractionManager(): [MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.md) | null

  `Protected`

  Create a standard MouseInteractionManager for the PlaceableObject

  #### Returns [MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.md) | null

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_createInteractionManager](foundry.canvas.placeables.PlaceableObject.md#_createinteractionmanager)

### `Protected`\_drawBar

* \_drawBar(index: number, bar: Graphics, data: object): void

  `Protected`

  Draw a single resource bar, given provided data

  #### Parameters

  + index: number

    The Bar index
  + bar: Graphics

    The Bar container
  + data: object

    Resource data for this bar

  #### Returns void

### `Protected`\_drawEffect

* \_drawEffect(src: string, tint: ColorSource | null): Promise<Sprite | undefined>

  `Protected`

  Draw a status effect icon

  #### Parameters

  + src: string
  + tint: ColorSource | null

  #### Returns Promise<Sprite | undefined>

### `Protected`\_drawEffects

* \_drawEffects(): Promise<void>

  `Protected`

  Draw the effect icons for ActiveEffect documents which apply to the Token's Actor.
  Called by [Token#drawEffects](#draweffects).

  #### Returns Promise<void>

### `Protected`\_drawOverlay

* \_drawOverlay(src: string, tint: number | null): Promise<Sprite>

  `Protected`

  Draw the overlay effect icon

  #### Parameters

  + src: string
  + tint: number | null

  #### Returns Promise<Sprite>

### `Protected`\_drawTargetArrows

* \_drawTargetArrows(reticule?: [ReticuleOptions](../interfaces/foundry.types.ReticuleOptions.md)): void

  `Protected`

  Draw the targeting arrows around this token.

  #### Parameters

  + `Optional`reticule: [ReticuleOptions](../interfaces/foundry.types.ReticuleOptions.md) = {}

    Additional parameters to configure how the targeting reticule is drawn.

  #### Returns void

### `Protected`\_drawTargetPips

* \_drawTargetPips(): void

  `Protected`

  Draw the targeting pips around this token.

  #### Returns void

### `Protected`\_finalizeDragRight

* \_finalizeDragRight(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Finalize the right-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering mouse click event

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_finalizeDragRight](foundry.canvas.placeables.PlaceableObject.md#_finalizedragright)

### `Protected`\_getAnimationData

* \_getAnimationData(): [TokenAnimationData](../interfaces/foundry.types.TokenAnimationData.md)

  `Protected`

  Get the animation data for the current state of the document.

  #### Returns [TokenAnimationData](../interfaces/foundry.types.TokenAnimationData.md)

  The target animation data object

### `Protected`\_getAnimationDuration

* \_getAnimationDuration(  
  Â Â Â Â from: [DeepReadonly](../types/foundry.types.DeepReadonly.md)<[TokenAnimationData](../interfaces/foundry.types.TokenAnimationData.md)>,  
  Â Â Â Â to: [DeepReadonly](../types/foundry.types.DeepReadonly.md)<Partial<[TokenAnimationData](../interfaces/foundry.types.TokenAnimationData.md)>>,  
  Â Â Â Â options: [TokenAnimationOptions](../interfaces/foundry.types.TokenAnimationOptions.md),  
  ): number

  `Protected`

  Get the duration of the animation.

  #### Parameters

  + from: [DeepReadonly](../types/foundry.types.DeepReadonly.md)<[TokenAnimationData](../interfaces/foundry.types.TokenAnimationData.md)>

    The animation data to animate from
  + to: [DeepReadonly](../types/foundry.types.DeepReadonly.md)<Partial<[TokenAnimationData](../interfaces/foundry.types.TokenAnimationData.md)>>

    The animation data to animate to
  + options: [TokenAnimationOptions](../interfaces/foundry.types.TokenAnimationOptions.md)

    The options that configure the animation behavior

  #### Returns number

  The duration of the animation in milliseconds

### `Protected`\_getAnimationMovementSpeed

* \_getAnimationMovementSpeed(options: [TokenAnimationOptions](../interfaces/foundry.types.TokenAnimationOptions.md)): number

  `Protected`

  Get the base movement speed for the animation in grid size per second.
  The default implementation returns `CONFIG.Token.movement.defaultSpeed`.

  #### Parameters

  + options: [TokenAnimationOptions](../interfaces/foundry.types.TokenAnimationOptions.md)

    The options that configure the animation behavior

  #### Returns number

  The base movement speed in grid size per second

### `Protected`\_getAnimationRotationSpeed

* \_getAnimationRotationSpeed(options: [TokenAnimationOptions](../interfaces/foundry.types.TokenAnimationOptions.md)): number

  `Protected`

  Get the rotation speed for the animation in 60 degrees per second.
  Returns the movement speed by default.

  #### Parameters

  + options: [TokenAnimationOptions](../interfaces/foundry.types.TokenAnimationOptions.md)

    The options that configure the animation behavior

  #### Returns number

  The rotation speed in 60 degrees per second

### `Protected`\_getAnimationTransition

* \_getAnimationTransition(  
  Â Â Â Â options: [TokenAnimationOptions](../interfaces/foundry.types.TokenAnimationOptions.md),  
  ): [TokenAnimationTransition](../types/foundry.types.TokenAnimationTransition.md)

  `Protected`

  Get the texture transition type.
  Returns `"fade"` by default.

  #### Parameters

  + options: [TokenAnimationOptions](../interfaces/foundry.types.TokenAnimationOptions.md)

    The options that configure the animation behavior

  #### Returns [TokenAnimationTransition](../types/foundry.types.TokenAnimationTransition.md)

  The transition type

### `Protected`\_getBarColors

* \_getBarColors(index: number, data: object): { empty: [Color](foundry.utils.Color.md); full: [Color](foundry.utils.Color.md) }

  `Protected`

  Configure bespoke bar colors for a given bar. If this method is not implemented, the default colors from
  CONFIG.Token.barConfig will be used.

  #### Parameters

  + index: number

    The bar index.
  + data: object

    Resource data for the base.

  #### Returns { empty: [Color](foundry.utils.Color.md); full: [Color](foundry.utils.Color.md) }

### `Protected`\_getBorderColor

* \_getBorderColor(): number

  `Protected`

  Get the hex color that should be used to render the Token border

  #### Returns number

  The hex color used to depict the border color

### `Protected`\_getDragConstrainOptions

* \_getDragConstrainOptions(): Omit<  
  Â Â Â Â [TokenConstrainMovementPathOptions](../interfaces/foundry.types.TokenConstrainMovementPathOptions.md),  
  Â Â Â Â "preview"  
  Â Â Â Â | "history"  
  Â Â Â Â | "measureOptions",  
  >

  `Protected`

  Get the constrain options used during the drag operation.

  #### Returns Omit< Â Â Â Â [TokenConstrainMovementPathOptions](../interfaces/foundry.types.TokenConstrainMovementPathOptions.md), Â Â Â Â "preview" Â Â Â Â | "history" Â Â Â Â | "measureOptions", >

  The constrain options

### `Protected`\_getDragLeftDropUpdateOptions

* \_getDragLeftDropUpdateOptions(): Partial<  
  Â Â Â Â Omit<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md), "updates"> & Omit<  
  Â Â Â Â Â Â Â Â [TokenMovementOptions](../interfaces/foundry.documents.types.TokenMovementOptions.md),  
  Â Â Â Â Â Â Â Â "id"  
  Â Â Â Â Â Â Â Â | "method",  
  Â Â Â Â >,  
  >

  `Protected`

  Get the update operation options that should be used for a drag-left-drop operation.

  #### Returns Partial< Â Â Â Â Omit<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md), "updates"> & Omit< Â Â Â Â Â Â Â Â [TokenMovementOptions](../interfaces/foundry.documents.types.TokenMovementOptions.md), Â Â Â Â Â Â Â Â "id" Â Â Â Â Â Â Â Â | "method", Â Â Â Â >, >

### `Protected`\_getDragMeasureOptions

* \_getDragMeasureOptions(): Omit<[TokenMeasureMovementPathOptions](../interfaces/foundry.types.TokenMeasureMovementPathOptions.md), "preview">

  `Protected`

  Get the measure options used during the drag operation.

  #### Returns Omit<[TokenMeasureMovementPathOptions](../interfaces/foundry.types.TokenMeasureMovementPathOptions.md), "preview">

  The measure options

### `Protected`\_getDragMovementAction

* \_getDragMovementAction(): string

  `Protected`

  Get the movement action for the waypoints placed during a drag operation.

  #### Returns string

  The movement action

### `Protected`\_getDragPathfindingOptions

* \_getDragPathfindingOptions(): Omit<  
  Â Â Â Â [TokenFindMovementPathOptions](../interfaces/foundry.types.TokenFindMovementPathOptions.md),  
  Â Â Â Â "preview"  
  Â Â Â Â | "measureOptions"  
  Â Â Â Â | "terrainOptions"  
  Â Â Â Â | "constrainOptions",  
  >

  `Protected`

  Get the pathfinding options used during the drag operation to find the path of movement through the waypoints.

  #### Returns Omit< Â Â Â Â [TokenFindMovementPathOptions](../interfaces/foundry.types.TokenFindMovementPathOptions.md), Â Â Â Â "preview" Â Â Â Â | "measureOptions" Â Â Â Â | "terrainOptions" Â Â Â Â | "constrainOptions", >

  The pathfinding options

### `Protected`\_getDragTerrainOptions

* \_getDragTerrainOptions(): Omit<[TokenCreateTerrainMovementPathOptions](../interfaces/foundry.types.TokenCreateTerrainMovementPathOptions.md), "preview">

  `Protected`

  Get the terrain options used during the drag operation.

  #### Returns Omit<[TokenCreateTerrainMovementPathOptions](../interfaces/foundry.types.TokenCreateTerrainMovementPathOptions.md), "preview">

  The terrain options

### `Protected`\_getHUDMovementAction

* \_getHUDMovementAction(): string

  `Protected`

  Get the movement action in [CONFIG.Token.movement.actions](../variables/CONFIG.Token.md#movement) to be used for movement
  via the Token HUD.
  The default implementation returns `this.document.movementAction`.

  #### Returns string

  #### See

  [foundry.applications.hud.TokenHUD#\_onSubmit](foundry.applications.hud.TokenHUD.md#_onsubmit)

### `Protected`\_getKeyboardMovementAction

* \_getKeyboardMovementAction(): string

  `Protected`

  Get the movement action in [CONFIG.Token.movement.actions](../variables/CONFIG.Token.md#movement) to be used for keyboard
  movement.
  The default implementation returns `this.document.movementAction`.

  #### Returns string

### `Protected`\_getLightSourceData

* \_getLightSourceData(): [LightSourceData](../interfaces/foundry.LightSourceData.md)

  `Protected`

  Get the light source data.

  #### Returns [LightSourceData](../interfaces/foundry.LightSourceData.md)

### `Protected`\_getMovementCollisionTestConfiguration

* \_getMovementCollisionTestConfiguration(  
  Â Â Â Â segment: Omit<[TokenMovementSegmentData](../interfaces/foundry.documents.types.TokenMovementSegmentData.md), "measure" | "teleport">,  
  Â Â Â Â options: [TokenConstrainMovementPathOptions](../interfaces/foundry.types.TokenConstrainMovementPathOptions.md),  
  ): [PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)

  `Protected`

  Get movement wall collision configuration that are passed to
  foundry.canvas.geometry.shapes.PointSourcePolygon.testCollision
  as part of [Token#constrainMovementPath](#constrainmovementpath).

  #### Parameters

  + segment: Omit<[TokenMovementSegmentData](../interfaces/foundry.documents.types.TokenMovementSegmentData.md), "measure" | "teleport">

    The movement segment
  + options: [TokenConstrainMovementPathOptions](../interfaces/foundry.types.TokenConstrainMovementPathOptions.md)

    The constrain options. The `preview` option is always defined
    and true for GMs and when Token Vision is disabled.

  #### Returns [PointSourcePolygonConfig](../interfaces/foundry.canvas.geometry.types.PointSourcePolygonConfig.md)

### `Protected`\_getMovementCostFunction

* \_getMovementCostFunction(  
  Â Â Â Â options?: [TokenMeasureMovementPathOptions](../interfaces/foundry.types.TokenMeasureMovementPathOptions.md),  
  ): void | [TokenMovementCostFunction](../types/foundry.documents.types.TokenMovementCostFunction.md)

  `Protected`

  Create the movement cost function for this Token.
  In square and hexagonal grids it calculates the cost for single grid space move between two grid space offsets.
  For tokens that occupy more than one grid space the cost of movement is calculated as the median of all individual
  grid space moves unless the cost of any of these is infinite, in which case total cost is always infinite.
  In gridless grids the `from` and `to` parameters of the cost function are top-left offsets.
  If the movement cost function is undefined, the cost equals the distance moved.

  #### Parameters

  + `Optional`options: [TokenMeasureMovementPathOptions](../interfaces/foundry.types.TokenMeasureMovementPathOptions.md)

    Additional options that affect cost calculations

  #### Returns void | [TokenMovementCostFunction](../types/foundry.documents.types.TokenMovementCostFunction.md)

### `Protected`\_getTargetAlpha

* \_getTargetAlpha(): number

  `Protected`

  Get the target opacity that should be used for a Placeable Object depending on its preview state.

  #### Returns number

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_getTargetAlpha](foundry.canvas.placeables.PlaceableObject.md#_gettargetalpha)

### `Protected`\_getTextStyle

* \_getTextStyle(): TextStyle

  `Protected`

  Get the text style that should be used for this Token's tooltip.

  #### Returns TextStyle

### `Protected`\_getTooltipText

* \_getTooltipText(): string

  `Protected`

  Return the text which should be displayed in a token's tooltip field.

  #### Returns string

### `Protected`\_getVisionBlindedStates

* \_getVisionBlindedStates(): Record<string, boolean>

  `Protected`

  Returns a record of blinding state.

  #### Returns Record<string, boolean>

### `Protected`\_getVisionSourceData

* \_getVisionSourceData(): VisionSourceData

  `Protected`

  Get the vision source data.

  #### Returns VisionSourceData

### `Protected`\_initializeDragRight

* \_initializeDragRight(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Initialize the right-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_initializeDragRight](foundry.canvas.placeables.PlaceableObject.md#_initializedragright)

### `Protected`\_initializeRuler

* \_initializeRuler(): [BaseTokenRuler](foundry.canvas.placeables.tokens.BaseTokenRuler.md) | null

  `Protected`

  Create the BaseTokenRuler instance for this Token, if any.
  This function is called when the Token is drawn for the first time.

  #### Returns [BaseTokenRuler](foundry.canvas.placeables.tokens.BaseTokenRuler.md) | null

### `Protected`\_isFogExplorationSource

* \_isFogExplorationSource(): boolean

  `Protected`

  Test whether this Token should contribute to shared Fog of War exploration.

  #### Returns boolean

### `Protected`\_isLightSource

* \_isLightSource(): boolean

  `Protected`

  Does this Token actively emit light given its properties and the current darkness level of the Scene?

  #### Returns boolean

### `Protected`\_isVisionSource

* \_isVisionSource(): boolean

  `Protected`

  Test whether this Token is a viable vision source for the current User.

  #### Returns boolean

### `Protected`\_modifyAnimationMovementSpeed

* \_modifyAnimationMovementSpeed(  
  Â Â Â Â speed: number,  
  Â Â Â Â options: [TokenAnimationOptions](../interfaces/foundry.types.TokenAnimationOptions.md),  
  ): number

  `Protected`

  Modify the base movement speed of the animation.
  Divides by the terrain difficulty, if present, by default.

  #### Parameters

  + speed: number

    The base movement speed in grid size per second
  + options: [TokenAnimationOptions](../interfaces/foundry.types.TokenAnimationOptions.md)

    The options that configure the animation behavior

  #### Returns number

  The modified movement speed in grid size per second

### `Protected`\_onAnimationUpdate

* \_onAnimationUpdate(  
  Â Â Â Â changed: Partial<[TokenAnimationData](../interfaces/foundry.types.TokenAnimationData.md)>,  
  Â Â Â Â context: [TokenAnimationContext](../interfaces/foundry.types.TokenAnimationContext.md),  
  ): void

  `Protected`

  Called each animation frame.

  #### Parameters

  + changed: Partial<[TokenAnimationData](../interfaces/foundry.types.TokenAnimationData.md)>

    The animation data that changed
  + context: [TokenAnimationContext](../interfaces/foundry.types.TokenAnimationContext.md)

    The animation context

  #### Returns void

### `Protected`\_onApplyStatusEffect

* \_onApplyStatusEffect(statusId: string, active: boolean): void

  `Protected`

  Handle changes to Token behavior when a significant status effect is applied

  #### Parameters

  + statusId: string

    The status effect ID being applied, from [CONFIG.specialStatusEffects](../variables/CONFIG.specialStatusEffects.md)
  + active: boolean

    Is the special status effect now active?

  #### Returns void

### `Protected`\_onClickRight

* \_onClickRight(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Callback actions which occur on a single right-click event to configure properties of the object

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onClickRight](foundry.canvas.placeables.PlaceableObject.md#_onclickright)

### `Protected`\_onControl

* \_onControl(  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â pan?: boolean | [TokenPanningOptions](../interfaces/foundry.types.TokenPanningOptions.md);  
  Â Â Â Â Â Â Â Â releaseOthers?: boolean;  
  Â Â Â Â },  
  ): void

  `Protected`

  Additional events that trigger once control of the object is established

  #### Parameters

  + options: { pan?: boolean | [TokenPanningOptions](../interfaces/foundry.types.TokenPanningOptions.md); releaseOthers?: boolean } = {}

    Optional parameters which apply for specific implementations

    - ##### `Optional`pan?: boolean | [TokenPanningOptions](../interfaces/foundry.types.TokenPanningOptions.md)

      Pan to the controlled Token
    - ##### `Optional`releaseOthers?: boolean

      Release control of all other Tokens

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onControl](foundry.canvas.placeables.PlaceableObject.md#_oncontrol)

### `Protected`\_onDragClickLeft

* \_onDragClickLeft(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Called by [foundry.canvas.layers.TokenLayer#\_onClickLeft](foundry.canvas.layers.TokenLayer.md#_onclickleft) while this Token is in a drag workflow.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The pointerdown event

  #### Returns void

### `Protected`\_onDragClickLeft2

* \_onDragClickLeft2(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Called by [foundry.canvas.layers.TokenLayer#\_onClickLeft2](foundry.canvas.layers.TokenLayer.md#_onclickleft2) while this Token is in a drag workflow.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The pointerdown event

  #### Returns void

### `Protected`\_onDragClickRight

* \_onDragClickRight(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Called by [foundry.canvas.layers.TokenLayer#\_onClickRight](foundry.canvas.layers.TokenLayer.md#_onclickright) while this Token is in a drag workflow.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The pointerdown event

  #### Returns void

### `Protected`\_onDragClickRight2

* \_onDragClickRight2(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Called by [foundry.canvas.layers.TokenLayer#\_onClickRight2](foundry.canvas.layers.TokenLayer.md#_onclickright2) while this Token is in a drag workflow.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The pointerdown event

  #### Returns void

### `Protected`\_onDragLeftStart

* \_onDragLeftStart(event: FederatedEvent<UIEvent | PixiTouch>): boolean | void

  `Protected`

  Callback actions which occur when a mouse-drag action is first begun.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns boolean | void

  If false, the start if prevented

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onDragLeftStart](foundry.canvas.placeables.PlaceableObject.md#_ondragleftstart)

### `Protected`\_onDragMouseWheel

* \_onDragMouseWheel(event: WheelEvent): void

  `Protected`

  Change the elevation of Token during dragging.

  #### Parameters

  + event: WheelEvent

    The mousewheel event

  #### Returns void

### `Protected`\_onDragRightCancel

* \_onDragRightCancel(event: FederatedEvent<UIEvent | PixiTouch>): boolean | void

  `Protected`

  Callback actions which occur on a right mouse-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering mouse click event

  #### Returns boolean | void

  If false, the cancellation is prevented

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onDragRightCancel](foundry.canvas.placeables.PlaceableObject.md#_ondragrightcancel)

### `Protected`\_onDragRightDrop

* \_onDragRightDrop(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Callback actions which occur on a right mouse-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onDragRightDrop](foundry.canvas.placeables.PlaceableObject.md#_ondragrightdrop)

### `Protected`\_onDragRightMove

* \_onDragRightMove(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Callback actions which occur on a right mouse-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onDragRightMove](foundry.canvas.placeables.PlaceableObject.md#_ondragrightmove)

### `Protected`\_onDragRightStart

* \_onDragRightStart(event: FederatedEvent<UIEvent | PixiTouch>): false | void

  `Protected`

  Callback actions which occur on a right mouse-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering mouse click event

  #### Returns false | void

  If false, the start if prevented

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onDragRightStart](foundry.canvas.placeables.PlaceableObject.md#_ondragrightstart)

### `Protected`\_onDragStart

* \_onDragStart(): void

  `Protected`

  Begin a drag operation from the perspective of the preview clone.
  Modify the appearance of both the clone (this) and the original (\_original) object.

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onDragStart](foundry.canvas.placeables.PlaceableObject.md#_ondragstart)

### `Protected`\_onLongPress

* \_onLongPress(event: FederatedEvent<UIEvent | PixiTouch>, origin: Point): any

  `Protected`

  Callback action which occurs on a long press.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event
  + origin: Point

    The local canvas coordinates of the mousepress.

  #### Returns any

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onLongPress](foundry.canvas.placeables.PlaceableObject.md#_onlongpress)

### `Protected`\_onUnclickLeft

* \_onUnclickLeft(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Callback actions which occur on a single left-unclick event to assume control of the object

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onUnclickLeft](foundry.canvas.placeables.PlaceableObject.md#_onunclickleft)

### `Protected`\_onUnclickRight

* \_onUnclickRight(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Callback actions which occur on a single right-unclick event

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_onUnclickRight](foundry.canvas.placeables.PlaceableObject.md#_onunclickright)

### `Protected`\_prepareAnimation

* \_prepareAnimation(  
  Â Â Â Â from: [DeepReadonly](../types/foundry.types.DeepReadonly.md)<[TokenAnimationData](../interfaces/foundry.types.TokenAnimationData.md)>,  
  Â Â Â Â changes: Partial<[TokenAnimationData](../interfaces/foundry.types.TokenAnimationData.md)>,  
  Â Â Â Â context: Omit<[TokenAnimationContext](../interfaces/foundry.types.TokenAnimationContext.md), "promise">,  
  Â Â Â Â options: [TokenAnimationOptions](../interfaces/foundry.types.TokenAnimationOptions.md),  
  ): [CanvasAnimationAttribute](../interfaces/foundry.canvas.animation.types.CanvasAnimationAttribute.md)[]

  `Protected`

  Prepare the animation data changes: performs special handling required for animating rotation.

  #### Parameters

  + from: [DeepReadonly](../types/foundry.types.DeepReadonly.md)<[TokenAnimationData](../interfaces/foundry.types.TokenAnimationData.md)>

    The animation data to animate from
  + changes: Partial<[TokenAnimationData](../interfaces/foundry.types.TokenAnimationData.md)>

    The animation data changes
  + context: Omit<[TokenAnimationContext](../interfaces/foundry.types.TokenAnimationContext.md), "promise">

    The animation context
  + options: [TokenAnimationOptions](../interfaces/foundry.types.TokenAnimationOptions.md)

    The options that configure the animation behavior

  #### Returns [CanvasAnimationAttribute](../interfaces/foundry.canvas.animation.types.CanvasAnimationAttribute.md)[]

  The animation attributes

### `Protected`\_propagateRightClick

* \_propagateRightClick(event: FederatedEvent<UIEvent | PixiTouch>): boolean

  `Protected`

  Should the placeable propagate right click downstream?

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

  #### Returns boolean

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_propagateRightClick](foundry.canvas.placeables.PlaceableObject.md#_propagaterightclick)

### `Protected`\_refreshBorder

* \_refreshBorder(): void

  `Protected`

  Refresh the border.

  #### Returns void

### `Protected`\_refreshEffects

* \_refreshEffects(): void

  `Protected`

  Refresh the display of status effects, adjusting their position for the token width and height.

  #### Returns void

### `Protected`\_refreshElevation

* \_refreshElevation(): void

  `Protected`

  Refresh the elevation

  #### Returns void

### `Protected`\_refreshMesh

* \_refreshMesh(): void

  `Protected`

  Refresh the token mesh.

  #### Returns void

### `Protected`\_refreshMeshSizeAndScale

* \_refreshMeshSizeAndScale(): void

  `Protected`

  Resize mesh and handle scale adjustment.

  #### Returns void

### `Protected`\_refreshNameplate

* \_refreshNameplate(): void

  `Protected`

  Refresh the text content, position, and visibility of the Token nameplate.

  #### Returns void

### `Protected`\_refreshPosition

* \_refreshPosition(): void

  `Protected`

  Refresh the position.

  #### Returns void

### `Protected`\_refreshRingVisuals

* \_refreshRingVisuals(): void

  `Protected`

  Refresh the token ring visuals if necessary.

  #### Returns void

### `Protected`\_refreshRotation

* \_refreshRotation(): void

  `Protected`

  Refresh the rotation.

  #### Returns void

### `Protected`\_refreshRuler

* \_refreshRuler(): void

  `Protected`

  Refresh the display of the ruler.

  #### Returns void

### `Protected`\_refreshShader

* \_refreshShader(): void

  `Protected`

  Refresh the token mesh shader.

  #### Returns void

### `Protected`\_refreshShape

* \_refreshShape(): void

  `Protected`

  Refresh the shape.

  #### Returns void

### `Protected`\_refreshSize

* \_refreshSize(): void

  `Protected`

  Refresh the size.

  #### Returns void

### `Protected`\_refreshTarget

* \_refreshTarget(): void

  `Protected`

  Refresh the target indicators for the Token.
  Draw both target arrows for the primary User and indicator pips for other Users targeting the same Token.

  #### Returns void

### `Protected`\_refreshTooltip

* \_refreshTooltip(): void

  `Protected`

  Refresh the tooltip.

  #### Returns void

### `Protected`\_refreshTurnMarker

* \_refreshTurnMarker(): void

  `Protected`

  Refresh presentation of the Token's combat turn marker, if any.

  #### Returns void

### `Protected`\_removeDragWaypoint

* \_removeDragWaypoint(): void

  `Protected`

  Remove last ruler waypoints and update ruler paths.

  #### Returns void

### `Protected`\_renderDetectionFilter

* \_renderDetectionFilter(renderer: Renderer): void

  `Protected`

  Render the bound mesh detection filter.
  Note: this method does not verify that the detection filter exists.

  #### Parameters

  + renderer: Renderer

  #### Returns void

### `Protected`\_requiresRotationAnimation

* \_requiresRotationAnimation(): boolean

  `Protected`

  Does this Token require rotation changes to be animated?
  If false is returned, the rotation speed is set to infinity.

  #### Returns boolean

### `Protected`\_shouldPreventDragLeftDrop

* \_shouldPreventDragLeftDrop(event: FederatedEvent<UIEvent | PixiTouch>): boolean

  `Protected`

  Prevent the drop event?
  Called by [Token#\_onDragLeftDrop](#_ondragleftdrop).

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The pointerup event

  #### Returns boolean

### `Protected`\_testCulled

* \_testCulled(): boolean

  `Protected`

  Test if this Token should be culled.

  #### Returns boolean

### `Protected`\_triggerDragLeftCancel

* \_triggerDragLeftCancel(): void

  `Protected`

  Cancel the drag workflow. This cancellation cannot be prevented by [Token#\_onDragLeftCancel](#_ondragleftcancel).

  #### Returns void

### `Protected`\_triggerDragLeftDrop

* \_triggerDragLeftDrop(): void

  `Protected`

  Trigger drop event. This drop cannot be prevented by [Token#\_shouldPreventDragLeftDrop](#_shouldpreventdragleftdrop).

  #### Returns void

### `Protected`\_updateDragDestination

* \_updateDragDestination(point: [Point](../interfaces/foundry.types.Point.md), options?: { snap?: boolean }): void

  `Protected`

  Update the destinations of the drag previews and rulers

  #### Parameters

  + point: [Point](../interfaces/foundry.types.Point.md)

    The (unsnapped) center point of the waypoint
  + `Optional`options: { snap?: boolean } = {}

    Additional options

    - ##### `Optional`snap?: boolean

      Snap the destination?

  #### Returns void

### `Protected`#onDragRightStart

* "#onDragRightStart"(event: FederatedEvent<UIEvent | PixiTouch>): false | void

  `Protected`

  Callback actions which occur on a right mouse-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering mouse click event

  #### Returns false | void

  If false, the start if prevented

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[#onDragRightStart](foundry.canvas.placeables.PlaceableObject.md#ondragrightstart)

### `Static`\_configureAnimationMovementSpeed

* \_configureAnimationMovementSpeed(  
  Â Â Â Â operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md),  
  Â Â Â Â origin: [TokenPosition](../interfaces/foundry.documents.types.TokenPosition.md),  
  Â Â Â Â waypoints: [TokenMovementWaypoint](../interfaces/foundry.documents.types.TokenMovementWaypoint.md)[],  
  Â Â Â Â document: [TokenDocument](foundry.documents.TokenDocument.md),  
  ): void

  `Internal`

  Configure the animation movement speed based on the given animation duration.

  #### Parameters

  + operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md)

    The update operation
  + origin: [TokenPosition](../interfaces/foundry.documents.types.TokenPosition.md)

    The origin
  + waypoints: [TokenMovementWaypoint](../interfaces/foundry.documents.types.TokenMovementWaypoint.md)[]

    The candidante waypoints
  + document: [TokenDocument](foundry.documents.TokenDocument.md)

    The token document

  #### Returns void

### `Static`\_getCopiedObjectsOrigin

* \_getCopiedObjectsOrigin(copies: [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]): Point

  `Internal`

  Get the origin used for pasting the copied objects.

  #### Parameters

  + copies: [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md)[]

    The objects that are copied

  #### Returns Point

  The offset

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_getCopiedObjectsOrigin](foundry.canvas.placeables.PlaceableObject.md#_getcopiedobjectsorigin)

### `Static`\_getDropActorPosition

* \_getDropActorPosition(  
  Â Â Â Â token: [TokenDocument](foundry.documents.TokenDocument.md),  
  Â Â Â Â point: { elevation?: number; x: number; y: number },  
  Â Â Â Â options?: { snap?: boolean },  
  ): [TokenPosition](../interfaces/foundry.documents.types.TokenPosition.md)

  `Internal`

  Get the drop position for the given token.

  #### Parameters

  + token: [TokenDocument](foundry.documents.TokenDocument.md)
  + point: { elevation?: number; x: number; y: number }
  + `Optional`options: { snap?: boolean } = {}

  #### Returns [TokenPosition](../interfaces/foundry.documents.types.TokenPosition.md)

  #### See

  [foundry.canvas.layers.TokenLayer#\_onDropActorData](foundry.canvas.layers.TokenLayer.md#_ondropactordata)

### `Static`\_getShiftedPosition

* \_getShiftedPosition(  
  Â Â Â Â dx: -1 | 0 | 1,  
  Â Â Â Â dy: -1 | 0 | 1,  
  Â Â Â Â dz: -1 | 0 | 1,  
  Â Â Â Â position: ElevatedPoint,  
  Â Â Â Â snapped: ElevatedPoint,  
  Â Â Â Â grid: [BaseGrid](foundry.grid.BaseGrid.md)<[GridCoordinates2D](../types/foundry.grid.types.GridCoordinates2D.md), [GridCoordinates3D](../types/foundry.grid.types.GridCoordinates3D.md)>,  
  ): ElevatedPoint

  `Internal`

  Obtain the shifted position.

  #### Parameters

  + dx: -1 | 0 | 1

    The number of grid units to shift along the X-axis
  + dy: -1 | 0 | 1

    The number of grid units to shift along the Y-axis
  + dz: -1 | 0 | 1

    The number of grid units to shift along the Z-axis
  + position: ElevatedPoint

    The unsnapped position
  + snapped: ElevatedPoint

    The snapped position
  + grid: [BaseGrid](foundry.grid.BaseGrid.md)<[GridCoordinates2D](../types/foundry.grid.types.GridCoordinates2D.md), [GridCoordinates3D](../types/foundry.grid.types.GridCoordinates3D.md)>

    The grid

  #### Returns ElevatedPoint

  The shifted target coordinates

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.md).[\_getShiftedPosition](foundry.canvas.placeables.PlaceableObject.md#_getshiftedposition-2)