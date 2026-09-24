---
title: "Token | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.canvas.placeables.Token.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [canvas](../modules/foundry.canvas.html)
* [placeables](../modules/foundry.canvas.placeables.html)
* [Token](foundry.canvas.placeables.Token.html)

# Class Token

A Token is an implementation of PlaceableObject which represents an [foundry.documents.Actor](foundry.documents.Actor.html) within a viewed
Scene on the game canvas.

#### See

* [foundry.documents.TokenDocument](foundry.documents.TokenDocument.html)
* [foundry.canvas.layers.TokenLayer](foundry.canvas.layers.TokenLayer.html)

#### Hierarchy ([View Summary](../hierarchy.html#foundry.canvas.placeables.Token))

* [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)
  + Token

##### Index

### Constructors

[constructor](foundry.canvas.placeables.Token.html#constructor)

### Properties

[\_preventKeyboardMovement](foundry.canvas.placeables.Token.html#_preventkeyboardmovement)
[bars](foundry.canvas.placeables.Token.html#bars)
[border](foundry.canvas.placeables.Token.html#border)
[controlIcon](foundry.canvas.placeables.Token.html#controlicon)
[detectionFilter](foundry.canvas.placeables.Token.html#detectionfilter)
[detectionFilterMesh](foundry.canvas.placeables.Token.html#detectionfiltermesh)
[document](foundry.canvas.placeables.Token.html#document)
[effects](foundry.canvas.placeables.Token.html#effects)
[light](foundry.canvas.placeables.Token.html#light)
[mesh](foundry.canvas.placeables.Token.html#mesh)
[mouseInteractionManager](foundry.canvas.placeables.Token.html#mouseinteractionmanager)
[nameplate](foundry.canvas.placeables.Token.html#nameplate)
[renderFlags](foundry.canvas.placeables.Token.html#renderflags)
[ruler](foundry.canvas.placeables.Token.html#ruler)
[scene](foundry.canvas.placeables.Token.html#scene)
[shape](foundry.canvas.placeables.Token.html#shape)
[targetArrows](foundry.canvas.placeables.Token.html#targetarrows)
[targeted](foundry.canvas.placeables.Token.html#targeted)
[targetPips](foundry.canvas.placeables.Token.html#targetpips)
[texture](foundry.canvas.placeables.Token.html#texture)
[tooltip](foundry.canvas.placeables.Token.html#tooltip)
[turnMarker](foundry.canvas.placeables.Token.html#turnmarker)
[vision](foundry.canvas.placeables.Token.html#vision)
[voidMesh](foundry.canvas.placeables.Token.html#voidmesh)
[\_plannedMovement](foundry.canvas.placeables.Token.html#_plannedmovement)
[embeddedName](foundry.canvas.placeables.Token.html#embeddedname)
[RENDER\_FLAG\_PRIORITY](foundry.canvas.placeables.Token.html#render_flag_priority)
[RENDER\_FLAGS](foundry.canvas.placeables.Token.html#render_flags)

### Accessors

[\_original](foundry.canvas.placeables.Token.html#_original)
[actor](foundry.canvas.placeables.Token.html#actor)
[animationContexts](foundry.canvas.placeables.Token.html#animationcontexts)
[animationName](foundry.canvas.placeables.Token.html#animationname)
[bounds](foundry.canvas.placeables.Token.html#bounds)
[brightRadius](foundry.canvas.placeables.Token.html#brightradius)
[center](foundry.canvas.placeables.Token.html#center)
[combatant](foundry.canvas.placeables.Token.html#combatant)
[controlled](foundry.canvas.placeables.Token.html#controlled)
[detectionModes](foundry.canvas.placeables.Token.html#detectionmodes)
[dimRadius](foundry.canvas.placeables.Token.html#dimradius)
[emitsDarkness](foundry.canvas.placeables.Token.html#emitsdarkness)
[emitsLight](foundry.canvas.placeables.Token.html#emitslight)
[externalRadius](foundry.canvas.placeables.Token.html#externalradius)
[h](foundry.canvas.placeables.Token.html#h)
[hasActiveHUD](foundry.canvas.placeables.Token.html#hasactivehud)
[hasDynamicRing](foundry.canvas.placeables.Token.html#hasdynamicring)
[hasLimitedSourceAngle](foundry.canvas.placeables.Token.html#haslimitedsourceangle)
[hasPreview](foundry.canvas.placeables.Token.html#haspreview)
[hasSight](foundry.canvas.placeables.Token.html#hassight)
[hover](foundry.canvas.placeables.Token.html#hover)
[id](foundry.canvas.placeables.Token.html#id)
[inCombat](foundry.canvas.placeables.Token.html#incombat)
[interactionState](foundry.canvas.placeables.Token.html#interactionstate)
[isDragged](foundry.canvas.placeables.Token.html#isdragged)
[isOwner](foundry.canvas.placeables.Token.html#isowner)
[isPreview](foundry.canvas.placeables.Token.html#ispreview)
[isTargeted](foundry.canvas.placeables.Token.html#istargeted)
[isVideo](foundry.canvas.placeables.Token.html#isvideo)
[isVisible](foundry.canvas.placeables.Token.html#isvisible)
[layer](foundry.canvas.placeables.Token.html#layer)
[lightPerceptionRange](foundry.canvas.placeables.Token.html#lightperceptionrange)
[movementAnimationName](foundry.canvas.placeables.Token.html#movementanimationname)
[movementAnimationPromise](foundry.canvas.placeables.Token.html#movementanimationpromise)
[name](foundry.canvas.placeables.Token.html#name)
[objectId](foundry.canvas.placeables.Token.html#objectid)
[observer](foundry.canvas.placeables.Token.html#observer)
[optimalSightRange](foundry.canvas.placeables.Token.html#optimalsightrange)
[radius](foundry.canvas.placeables.Token.html#radius)
[ring](foundry.canvas.placeables.Token.html#ring)
[sheet](foundry.canvas.placeables.Token.html#sheet)
[showRuler](foundry.canvas.placeables.Token.html#showruler)
[sightRange](foundry.canvas.placeables.Token.html#sightrange)
[sourceElement](foundry.canvas.placeables.Token.html#sourceelement)
[sourceId](foundry.canvas.placeables.Token.html#sourceid)
[w](foundry.canvas.placeables.Token.html#w)
[implementation](foundry.canvas.placeables.Token.html#implementation)

### Methods

[\_applyRenderFlags](foundry.canvas.placeables.Token.html#_applyrenderflags)
[\_canConfigure](foundry.canvas.placeables.Token.html#_canconfigure)
[\_canControl](foundry.canvas.placeables.Token.html#_cancontrol)
[\_canDrag](foundry.canvas.placeables.Token.html#_candrag)
[\_canHover](foundry.canvas.placeables.Token.html#_canhover)
[\_canHUD](foundry.canvas.placeables.Token.html#_canhud)
[\_canView](foundry.canvas.placeables.Token.html#_canview)
[\_configureFilterEffect](foundry.canvas.placeables.Token.html#_configurefiltereffect)
[\_destroy](foundry.canvas.placeables.Token.html#_destroy)
[\_draw](foundry.canvas.placeables.Token.html#_draw)
[\_finalizeDragLeft](foundry.canvas.placeables.Token.html#_finalizedragleft)
[\_getConfigMovementPosition](foundry.canvas.placeables.Token.html#_getconfigmovementposition)
[\_getDragOrigin](foundry.canvas.placeables.Token.html#_getdragorigin)
[\_getDragWaypointPosition](foundry.canvas.placeables.Token.html#_getdragwaypointposition)
[\_getHUDMovementPosition](foundry.canvas.placeables.Token.html#_gethudmovementposition)
[\_getShiftedPosition](foundry.canvas.placeables.Token.html#_getshiftedposition)
[\_initializeDragLeft](foundry.canvas.placeables.Token.html#_initializedragleft)
[\_onClickLeft](foundry.canvas.placeables.Token.html#_onclickleft)
[\_onClickLeft2](foundry.canvas.placeables.Token.html#_onclickleft2)
[\_onClickRight2](foundry.canvas.placeables.Token.html#_onclickright2)
[\_onCreate](foundry.canvas.placeables.Token.html#_oncreate)
[\_onDelete](foundry.canvas.placeables.Token.html#_ondelete)
[\_onDragEnd](foundry.canvas.placeables.Token.html#_ondragend)
[\_onDragLeftCancel](foundry.canvas.placeables.Token.html#_ondragleftcancel)
[\_onDragLeftDrop](foundry.canvas.placeables.Token.html#_ondragleftdrop)
[\_onDragLeftMove](foundry.canvas.placeables.Token.html#_ondragleftmove)
[\_onHoverIn](foundry.canvas.placeables.Token.html#_onhoverin)
[\_onHoverOut](foundry.canvas.placeables.Token.html#_onhoverout)
[\_onRelease](foundry.canvas.placeables.Token.html#_onrelease)
[\_onUpdate](foundry.canvas.placeables.Token.html#_onupdate)
[\_overlapsSelection](foundry.canvas.placeables.Token.html#_overlapsselection)
[\_partialDraw](foundry.canvas.placeables.Token.html#_partialdraw)
[\_pasteObject](foundry.canvas.placeables.Token.html#_pasteobject)
[\_prepareDragLeftDropUpdates](foundry.canvas.placeables.Token.html#_preparedragleftdropupdates)
[\_propagateLeftClick](foundry.canvas.placeables.Token.html#_propagateleftclick)
[\_removeAllFilterEffects](foundry.canvas.placeables.Token.html#_removeallfiltereffects)
[\_updateQuadtree](foundry.canvas.placeables.Token.html#_updatequadtree)
[\_updateRotation](foundry.canvas.placeables.Token.html#_updaterotation)
[\_updateSpecialStatusFilterEffects](foundry.canvas.placeables.Token.html#_updatespecialstatusfiltereffects)
[\_updateTarget](foundry.canvas.placeables.Token.html#_updatetarget)
[activateListeners](foundry.canvas.placeables.Token.html#activatelisteners)
[animate](foundry.canvas.placeables.Token.html#animate)
[applyRenderFlags](foundry.canvas.placeables.Token.html#applyrenderflags)
[can](foundry.canvas.placeables.Token.html#can)
[checkCollision](foundry.canvas.placeables.Token.html#checkcollision)
[clear](foundry.canvas.placeables.Token.html#clear)
[clone](foundry.canvas.placeables.Token.html#clone)
[constrainMovementPath](foundry.canvas.placeables.Token.html#constrainmovementpath)
[control](foundry.canvas.placeables.Token.html#control)
[createTerrainMovementPath](foundry.canvas.placeables.Token.html#createterrainmovementpath)
[destroy](foundry.canvas.placeables.Token.html#destroy)
[draw](foundry.canvas.placeables.Token.html#draw)
[drawBars](foundry.canvas.placeables.Token.html#drawbars)
[drawEffects](foundry.canvas.placeables.Token.html#draweffects)
[findMovementPath](foundry.canvas.placeables.Token.html#findmovementpath)
[getCenterPoint](foundry.canvas.placeables.Token.html#getcenterpoint)
[getDispositionColor](foundry.canvas.placeables.Token.html#getdispositioncolor)
[getLightRadius](foundry.canvas.placeables.Token.html#getlightradius)
[getMovementAdjustedPoint](foundry.canvas.placeables.Token.html#getmovementadjustedpoint)
[getRingColors](foundry.canvas.placeables.Token.html#getringcolors)
[getRingEffects](foundry.canvas.placeables.Token.html#getringeffects)
[getShape](foundry.canvas.placeables.Token.html#getshape)
[getSnappedPosition](foundry.canvas.placeables.Token.html#getsnappedposition)
[initializeLightSource](foundry.canvas.placeables.Token.html#initializelightsource)
[initializeSources](foundry.canvas.placeables.Token.html#initializesources)
[initializeVisionSource](foundry.canvas.placeables.Token.html#initializevisionsource)
[measureMovementPath](foundry.canvas.placeables.Token.html#measuremovementpath)
[recalculatePlannedMovementPath](foundry.canvas.placeables.Token.html#recalculateplannedmovementpath)
[refresh](foundry.canvas.placeables.Token.html#refresh)
[release](foundry.canvas.placeables.Token.html#release)
[rotate](foundry.canvas.placeables.Token.html#rotate)
[setTarget](foundry.canvas.placeables.Token.html#settarget)
[stopAnimation](foundry.canvas.placeables.Token.html#stopanimation)
[\_addDragWaypoint](foundry.canvas.placeables.Token.html#_adddragwaypoint)
[\_canCreate](foundry.canvas.placeables.Token.html#_cancreate)
[\_canDelete](foundry.canvas.placeables.Token.html#_candelete)
[\_canDragLeftStart](foundry.canvas.placeables.Token.html#_candragleftstart)
[\_canUpdate](foundry.canvas.placeables.Token.html#_canupdate)
[\_canViewMode](foundry.canvas.placeables.Token.html#_canviewmode)
[\_changeDragElevation](foundry.canvas.placeables.Token.html#_changedragelevation)
[\_createInteractionManager](foundry.canvas.placeables.Token.html#_createinteractionmanager)
[\_drawBar](foundry.canvas.placeables.Token.html#_drawbar)
[\_drawEffect](foundry.canvas.placeables.Token.html#_draweffect)
[\_drawEffects](foundry.canvas.placeables.Token.html#_draweffects)
[\_drawOverlay](foundry.canvas.placeables.Token.html#_drawoverlay)
[\_drawTargetArrows](foundry.canvas.placeables.Token.html#_drawtargetarrows)
[\_drawTargetPips](foundry.canvas.placeables.Token.html#_drawtargetpips)
[\_finalizeDragRight](foundry.canvas.placeables.Token.html#_finalizedragright)
[\_getAnimationData](foundry.canvas.placeables.Token.html#_getanimationdata)
[\_getAnimationDuration](foundry.canvas.placeables.Token.html#_getanimationduration)
[\_getAnimationMovementSpeed](foundry.canvas.placeables.Token.html#_getanimationmovementspeed)
[\_getAnimationRotationSpeed](foundry.canvas.placeables.Token.html#_getanimationrotationspeed)
[\_getAnimationTransition](foundry.canvas.placeables.Token.html#_getanimationtransition)
[\_getBorderColor](foundry.canvas.placeables.Token.html#_getbordercolor)
[\_getDragConstrainOptions](foundry.canvas.placeables.Token.html#_getdragconstrainoptions)
[\_getDragMovementAction](foundry.canvas.placeables.Token.html#_getdragmovementaction)
[\_getDragPathfindingOptions](foundry.canvas.placeables.Token.html#_getdragpathfindingoptions)
[\_getHUDMovementAction](foundry.canvas.placeables.Token.html#_gethudmovementaction)
[\_getKeyboardMovementAction](foundry.canvas.placeables.Token.html#_getkeyboardmovementaction)
[\_getLightSourceData](foundry.canvas.placeables.Token.html#_getlightsourcedata)
[\_getMovementCostFunction](foundry.canvas.placeables.Token.html#_getmovementcostfunction)
[\_getTargetAlpha](foundry.canvas.placeables.Token.html#_gettargetalpha)
[\_getTextStyle](foundry.canvas.placeables.Token.html#_gettextstyle)
[\_getTooltipText](foundry.canvas.placeables.Token.html#_gettooltiptext)
[\_getVisionBlindedStates](foundry.canvas.placeables.Token.html#_getvisionblindedstates)
[\_getVisionSourceData](foundry.canvas.placeables.Token.html#_getvisionsourcedata)
[\_initializeDragRight](foundry.canvas.placeables.Token.html#_initializedragright)
[\_initializeRuler](foundry.canvas.placeables.Token.html#_initializeruler)
[\_isLightSource](foundry.canvas.placeables.Token.html#_islightsource)
[\_isVisionSource](foundry.canvas.placeables.Token.html#_isvisionsource)
[\_modifyAnimationMovementSpeed](foundry.canvas.placeables.Token.html#_modifyanimationmovementspeed)
[\_onAnimationUpdate](foundry.canvas.placeables.Token.html#_onanimationupdate)
[\_onApplyStatusEffect](foundry.canvas.placeables.Token.html#_onapplystatuseffect)
[\_onClickRight](foundry.canvas.placeables.Token.html#_onclickright)
[\_onControl](foundry.canvas.placeables.Token.html#_oncontrol)
[\_onDragClickLeft](foundry.canvas.placeables.Token.html#_ondragclickleft)
[\_onDragClickLeft2](foundry.canvas.placeables.Token.html#_ondragclickleft2)
[\_onDragClickRight](foundry.canvas.placeables.Token.html#_ondragclickright)
[\_onDragClickRight2](foundry.canvas.placeables.Token.html#_ondragclickright2)
[\_onDragLeftStart](foundry.canvas.placeables.Token.html#_ondragleftstart)
[\_onDragMouseWheel](foundry.canvas.placeables.Token.html#_ondragmousewheel)
[\_onDragRightCancel](foundry.canvas.placeables.Token.html#_ondragrightcancel)
[\_onDragRightDrop](foundry.canvas.placeables.Token.html#_ondragrightdrop)
[\_onDragRightMove](foundry.canvas.placeables.Token.html#_ondragrightmove)
[\_onDragRightStart](foundry.canvas.placeables.Token.html#_ondragrightstart)
[\_onDragStart](foundry.canvas.placeables.Token.html#_ondragstart)
[\_onLongPress](foundry.canvas.placeables.Token.html#_onlongpress)
[\_onUnclickLeft](foundry.canvas.placeables.Token.html#_onunclickleft)
[\_onUnclickRight](foundry.canvas.placeables.Token.html#_onunclickright)
[\_prepareAnimation](foundry.canvas.placeables.Token.html#_prepareanimation)
[\_propagateRightClick](foundry.canvas.placeables.Token.html#_propagaterightclick)
[\_refreshBorder](foundry.canvas.placeables.Token.html#_refreshborder)
[\_refreshEffects](foundry.canvas.placeables.Token.html#_refresheffects)
[\_refreshElevation](foundry.canvas.placeables.Token.html#_refreshelevation)
[\_refreshMesh](foundry.canvas.placeables.Token.html#_refreshmesh)
[\_refreshMeshSizeAndScale](foundry.canvas.placeables.Token.html#_refreshmeshsizeandscale)
[\_refreshNameplate](foundry.canvas.placeables.Token.html#_refreshnameplate)
[\_refreshPosition](foundry.canvas.placeables.Token.html#_refreshposition)
[\_refreshRingVisuals](foundry.canvas.placeables.Token.html#_refreshringvisuals)
[\_refreshRotation](foundry.canvas.placeables.Token.html#_refreshrotation)
[\_refreshRuler](foundry.canvas.placeables.Token.html#_refreshruler)
[\_refreshShader](foundry.canvas.placeables.Token.html#_refreshshader)
[\_refreshShape](foundry.canvas.placeables.Token.html#_refreshshape)
[\_refreshSize](foundry.canvas.placeables.Token.html#_refreshsize)
[\_refreshState](foundry.canvas.placeables.Token.html#_refreshstate)
[\_refreshTarget](foundry.canvas.placeables.Token.html#_refreshtarget)
[\_refreshTooltip](foundry.canvas.placeables.Token.html#_refreshtooltip)
[\_refreshTurnMarker](foundry.canvas.placeables.Token.html#_refreshturnmarker)
[\_refreshVisibility](foundry.canvas.placeables.Token.html#_refreshvisibility)
[\_removeDragWaypoint](foundry.canvas.placeables.Token.html#_removedragwaypoint)
[\_renderDetectionFilter](foundry.canvas.placeables.Token.html#_renderdetectionfilter)
[\_requiresRotationAnimation](foundry.canvas.placeables.Token.html#_requiresrotationanimation)
[\_shouldPreventDragLeftDrop](foundry.canvas.placeables.Token.html#_shouldpreventdragleftdrop)
[\_triggerDragLeftCancel](foundry.canvas.placeables.Token.html#_triggerdragleftcancel)
[\_triggerDragLeftDrop](foundry.canvas.placeables.Token.html#_triggerdragleftdrop)
[\_updateDragDestination](foundry.canvas.placeables.Token.html#_updatedragdestination)
[#onDragRightStart](foundry.canvas.placeables.Token.html#ondragrightstart)
[\_configureAnimationMovementSpeed](foundry.canvas.placeables.Token.html#_configureanimationmovementspeed)
[\_getCopiedObjectsOrigin](foundry.canvas.placeables.Token.html#_getcopiedobjectsorigin)
[\_getDropActorPosition](foundry.canvas.placeables.Token.html#_getdropactorposition)
[\_getShiftedPosition](foundry.canvas.placeables.Token.html#_getshiftedposition-2)

## Constructors

### constructor

* new Token(document: [TokenDocument](foundry.documents.TokenDocument.html)): [canvas](../modules/foundry.canvas.html).[placeables](../modules/foundry.canvas.placeables.html).[Token](foundry.canvas.placeables.Token.html)

  #### Parameters

  + document: [TokenDocument](foundry.documents.TokenDocument.html)

    The TokenDocument that this Token represents

  #### Returns [canvas](../modules/foundry.canvas.html).[placeables](../modules/foundry.canvas.placeables.html).[Token](foundry.canvas.placeables.Token.html)

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[constructor](foundry.canvas.placeables.PlaceableObject.html#constructor)

## Properties

### `Internal`\_preventKeyboardMovement

\_preventKeyboardMovement: boolean = false

Prevent keyboard movement of this Token?

### bars

bars: Container<DisplayObject>

The attribute bars of this Token.

### border

border: Graphics

A Graphics instance which renders the border frame for this Token inside the GridLayer.

### controlIcon

controlIcon: null | [ControlIcon](foundry.canvas.containers.ControlIcon.html)

A control icon for interacting with the object

Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[controlIcon](foundry.canvas.placeables.PlaceableObject.html#controlicon)

### detectionFilter

detectionFilter: null | Filter = null

Defines the filter to use for detection.

### detectionFilterMesh

detectionFilterMesh: Container<DisplayObject>

Renders the mesh of with the detection filter.

### document

document: CanvasDocument

A reference to the Scene embedded Document instance which this object represents

Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[document](foundry.canvas.placeables.PlaceableObject.html#document)

### effects

effects: Container<DisplayObject>

The effects icons of temporary ActiveEffects that are applied to the Actor of this Token.

### light

light: [PointLightSource](foundry.canvas.sources.PointLightSource.html)

A reference to the LightSource object which defines this light source area of effect.
This is undefined if the Token does not provide an active source of light.

### mesh

mesh: [PrimarySpriteMesh](foundry.canvas.primary.PrimarySpriteMesh.html)

A reference to the SpriteMesh which displays this Token in the PrimaryCanvasGroup.

### mouseInteractionManager

mouseInteractionManager: [MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.html)

A mouse interaction manager instance which handles mouse workflows related to this object.

Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[mouseInteractionManager](foundry.canvas.placeables.PlaceableObject.html#mouseinteractionmanager)

### nameplate

nameplate: [PreciseText](foundry.canvas.containers.PreciseText.html)

The nameplate of this Token, which displays its name.

### renderFlags

renderFlags: [RenderFlags](foundry.canvas.interaction.RenderFlags.html)

Status flags which are applied at render-time to update the PlaceableObject.
If an object defines RenderFlags, it should at least include flags for "redraw" and "refresh".

Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[renderFlags](foundry.canvas.placeables.PlaceableObject.html#renderflags)

### ruler

ruler: null | [BaseTokenRuler](foundry.canvas.placeables.tokens.BaseTokenRuler.html)

The ruler of this Token.

### scene

scene: [documents](../modules/foundry.documents.html).[Scene](foundry.documents.Scene.html)

Retain a reference to the Scene within which this Placeable Object resides

Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[scene](foundry.canvas.placeables.PlaceableObject.html#scene)

### shape

shape: Rectangle | Polygon | Circle | Ellipse

The shape of this token.

### targetArrows

targetArrows: Graphics

The target arrows marker, which indicates that this Token is targeted by this User.

### targeted

targeted: Set<[documents](../modules/foundry.documents.html).[User](foundry.documents.User.html)> = ...

Track the set of User documents which are currently targeting this Token

### targetPips

targetPips: Graphics

The target pips marker, which indicates that this Token is targeted by other User(s).

### texture

texture: Texture<Resource>

The texture of this Token, which is used by its mesh.

### tooltip

tooltip: [PreciseText](foundry.canvas.containers.PreciseText.html)

The tooltip text of this Token, which contains its elevation.

### turnMarker

turnMarker: null | [TokenTurnMarker](foundry.canvas.placeables.tokens.TokenTurnMarker.html) = null

The Turn Marker of this Token.
Only a subset of Token objects have a turn marker at any given time.

### vision

vision: [PointVisionSource](foundry.canvas.sources.PointVisionSource.html)

A reference to the VisionSource object which defines this vision source area of effect.
This is undefined if the Token does not provide an active source of vision.

### voidMesh

voidMesh: Container<DisplayObject>

Renders the mesh of this Token with ERASE blending in the Token.

### `Protected`\_plannedMovement

\_plannedMovement: { [userId: string]: [TokenPlannedMovement](../interfaces/foundry.types.TokenPlannedMovement.html) } = {}

The ruler data.

### `Static`embeddedName

embeddedName: string = "Token"

Identify the official Document name for this PlaceableObject class

Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[embeddedName](foundry.canvas.placeables.PlaceableObject.html#embeddedname)

### `Static`RENDER\_FLAG\_PRIORITY

RENDER\_FLAG\_PRIORITY: string = "OBJECTS"

The ticker priority when RenderFlags of this class are handled.
Valid values are OBJECTS or PERCEPTION.

Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[RENDER\_FLAG\_PRIORITY](foundry.canvas.placeables.PlaceableObject.html#render_flag_priority)

### `Static`RENDER\_FLAGS

RENDER\_FLAGS: {  
Â Â Â Â recoverFromPreview: { deprecated: { since: number; until: number } };  
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

#### Type declaration

* ##### recoverFromPreview: { deprecated: { since: number; until: number } }

  #### Deprecated

  since v12 Stable 4
* ##### redraw: { propagate: string[] }
* ##### redrawEffects: {}
* ##### refresh: { alias: boolean; propagate: string[] }
* ##### refreshBars: {}
* ##### refreshBorder: {}
* ##### refreshEffects: {}
* ##### refreshElevation: { propagate: string[] }
* ##### refreshMesh: { propagate: string[] }
* ##### refreshNameplate: {}
* ##### refreshPosition: {}
* ##### refreshRingVisuals: {}
* ##### refreshRotation: {}
* ##### refreshRuler: {}
* ##### refreshShader: {}
* ##### refreshShape: { propagate: string[] }
* ##### refreshSize: { propagate: string[] }
* ##### refreshState: { propagate: string[] }
* ##### refreshTarget: {}
* ##### refreshTooltip: {}
* ##### refreshTransform: { alias: boolean; propagate: string[] }
* ##### refreshTurnMarker: {}
* ##### refreshVisibility: {}

Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[RENDER\_FLAGS](foundry.canvas.placeables.PlaceableObject.html#render_flags)

## Accessors

### \_original

* get \_original(): undefined | [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  The object that this object is a preview of if this object is a preview.

  #### Returns undefined | [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  Inherited from PlaceableObject.\_original

### actor

* get actor(): null | [documents](../modules/foundry.documents.html).[Actor](foundry.documents.Actor.html)

  A convenient reference to the Actor object associated with the Token embedded document.

  #### Returns null | [documents](../modules/foundry.documents.html).[Actor](foundry.documents.Actor.html)

### animationContexts

* get animationContexts(): Map<string, [TokenAnimationContext](../interfaces/foundry.types.TokenAnimationContext.html)>

  The current animations of this Token.

  #### Returns Map<string, [TokenAnimationContext](../interfaces/foundry.types.TokenAnimationContext.html)>

### animationName

* get animationName(): string

  The general animation name used for this Token.

  #### Returns string

### bounds

* get bounds(): Rectangle

  #### Returns Rectangle

  Overrides PlaceableObject.bounds

### brightRadius

* get brightRadius(): number

  Translate the token's bright light distance in units into a radius in pixels.

  #### Returns number

### center

* get center(): Point

  #### Returns Point

  Overrides PlaceableObject.center

### combatant

* get combatant(): null | [documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html)

  Return a reference to a Combatant that represents this Token, if one is present in the current encounter.

  #### Returns null | [documents](../modules/foundry.documents.html).[Combatant](foundry.documents.Combatant.html)

### controlled

* get controlled(): boolean

  An indicator for whether the object is currently controlled

  #### Returns boolean

  Inherited from PlaceableObject.controlled

### detectionModes

* get detectionModes(): [TokenDetectionMode](../interfaces/foundry.documents.types.TokenDetectionMode.html)[]

  Return a reference to the detection modes array.

  #### Returns [TokenDetectionMode](../interfaces/foundry.documents.types.TokenDetectionMode.html)[]

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

  Inherited from PlaceableObject.hasPreview

### hasSight

* get hasSight(): boolean

  Test whether the Token has sight (or blindness) at any radius

  #### Returns boolean

### hover

* get hover(): boolean

  An indicator for whether the object is currently a hover target

  #### Returns boolean

  Inherited from PlaceableObject.hover

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

* get interactionState(): | undefined  
  | {  
  Â Â Â Â CLICKED: number;  
  Â Â Â Â DRAG: number;  
  Â Â Â Â DROP: number;  
  Â Â Â Â GRABBED: number;  
  Â Â Â Â HOVER: number;  
  Â Â Â Â NONE: number;  
  }

  The mouse interaction state of this placeable.

  #### Returns Â Â Â Â | undefined Â Â Â Â | { Â Â Â Â Â Â Â Â CLICKED: number; Â Â Â Â Â Â Â Â DRAG: number; Â Â Â Â Â Â Â Â DROP: number; Â Â Â Â Â Â Â Â GRABBED: number; Â Â Â Â Â Â Â Â HOVER: number; Â Â Â Â Â Â Â Â NONE: number; Â Â Â Â }

  Inherited from PlaceableObject.interactionState

### isDragged

* get isDragged(): boolean

  Is this Token currently being dragged?

  #### Returns boolean

### isOwner

* get isOwner(): boolean

  A convenient reference for whether the current User has full control over the document.

  #### Returns boolean

  Inherited from PlaceableObject.isOwner

### isPreview

* get isPreview(): boolean

  Is this placeable object a temporary preview?

  #### Returns boolean

  Inherited from PlaceableObject.isPreview

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

  #### See

### layer

* get layer(): [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html)

  Provide a reference to the CanvasLayer which contains this PlaceableObject.

  #### Returns [PlaceablesLayer](foundry.canvas.layers.PlaceablesLayer.html)

  Inherited from PlaceableObject.layer

### lightPerceptionRange

* get lightPerceptionRange(): number

  The range of this token's light perception in pixels.

  #### Returns number

### movementAnimationName

* get movementAnimationName(): string

  The animation name used to animate this Token's movement.

  #### Returns string

### movementAnimationPromise

* get movementAnimationPromise(): null | Promise<void>

  The promise of the current movement animation chain of this Token
  or null if there isn't a movement animation in progress.

  #### Returns null | Promise<void>

### name

* get name(): string

  Convenience access to the token's nameplate string

  #### Returns string

### objectId

* get objectId(): string

  A unique identifier which is used to uniquely identify elements on the canvas related to this object.

  #### Returns string

  Inherited from PlaceableObject.objectId

### observer

* get observer(): boolean

  A boolean flag for whether the current game User has observer permission for the Token

  #### Returns boolean

### optimalSightRange

* get optimalSightRange(): number

  Translate the token's maximum vision range that takes into account lights.

  #### Returns number

### radius

* get radius(): number

  The maximum radius in pixels of the light field

  #### Returns number

### ring

* get ring(): null | [TokenRing](foundry.canvas.placeables.tokens.TokenRing.html)

  A TokenRing instance which is used if this Token applies a dynamic ring.
  This property is null if the Token does not use a dynamic ring.

  #### Returns null | [TokenRing](foundry.canvas.placeables.tokens.TokenRing.html)

### sheet

* get sheet(): [DocumentSheetV2](foundry.applications.api.DocumentSheetV2.html)

  A document sheet used to configure the properties of this Placeable Object or the Document it represents.

  #### Returns [DocumentSheetV2](foundry.applications.api.DocumentSheetV2.html)

  Inherited from PlaceableObject.sheet

### showRuler

* get showRuler(): boolean

  Should the ruler of this Token be visible?

  #### Returns boolean

### sightRange

* get sightRange(): number

  Translate the token's vision range in units into a radius in pixels.

  #### Returns number

### sourceElement

* get sourceElement(): null | ImageSource

  The HTML source element for the primary Tile texture

  #### Returns null | ImageSource

### sourceId

* get sourceId(): string

  #### Returns string

  Overrides PlaceableObject.sourceId

### w

* get w(): number

  Translate the token's grid width into a pixel width based on the canvas size

  #### Returns number

### `Static`implementation

* get implementation(): typeof [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  Return a reference to the configured subclass of this base PlaceableObject type.

  #### Returns typeof [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  Inherited from PlaceableObject.implementation

## Methods

### \_applyRenderFlags

* \_applyRenderFlags(flags: any): void

  #### Parameters

  + flags: any

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_applyRenderFlags](foundry.canvas.placeables.PlaceableObject.html#_applyrenderflags)

### \_canConfigure

* \_canConfigure(user: any, event: any): boolean

  #### Parameters

  + user: any
  + event: any

  #### Returns boolean

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_canConfigure](foundry.canvas.placeables.PlaceableObject.html#_canconfigure)

### \_canControl

* \_canControl(user: any, event: any): boolean

  #### Parameters

  + user: any
  + event: any

  #### Returns boolean

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_canControl](foundry.canvas.placeables.PlaceableObject.html#_cancontrol)

### \_canDrag

* \_canDrag(user: any, event: any): boolean

  #### Parameters

  + user: any
  + event: any

  #### Returns boolean

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_canDrag](foundry.canvas.placeables.PlaceableObject.html#_candrag)

### \_canHover

* \_canHover(user: any, event: any): boolean

  #### Parameters

  + user: any
  + event: any

  #### Returns boolean

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_canHover](foundry.canvas.placeables.PlaceableObject.html#_canhover)

### \_canHUD

* \_canHUD(user: any, event: any): any

  #### Parameters

  + user: any
  + event: any

  #### Returns any

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_canHUD](foundry.canvas.placeables.PlaceableObject.html#_canhud)

### \_canView

* \_canView(user: any, event: any): undefined | boolean

  #### Parameters

  + user: any
  + event: any

  #### Returns undefined | boolean

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_canView](foundry.canvas.placeables.PlaceableObject.html#_canview)

### \_configureFilterEffect

* \_configureFilterEffect(statusId: string, active: boolean): void

  `Internal`

  Add/Modify a filter effect on this token.

  #### Parameters

  + statusId: string

    The status effect ID being applied, from [CONFIG.specialStatusEffects](../variables/CONFIG.specialStatusEffects.html)
  + active: boolean

    Is the special status effect now active?

  #### Returns void

### \_destroy

* \_destroy(options: any): void

  The inner \_destroy method which may optionally be defined by each PlaceableObject subclass.

  #### Parameters

  + options: any

    Options passed to the initial destroy call

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_destroy](foundry.canvas.placeables.PlaceableObject.html#_destroy)

### \_draw

* \_draw(options: any): Promise<void>

  #### Parameters

  + options: any

  #### Returns Promise<void>

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_draw](foundry.canvas.placeables.PlaceableObject.html#_draw)

### \_finalizeDragLeft

* \_finalizeDragLeft(event: any): void

  Finalize the left-drag operation.

  #### Parameters

  + event: any

    The triggering mouse click event

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_finalizeDragLeft](foundry.canvas.placeables.PlaceableObject.html#_finalizedragleft)

### \_getConfigMovementPosition

* \_getConfigMovementPosition(  
  Â Â Â Â changes: Partial<[TokenPosition](../interfaces/foundry.documents.types.TokenPosition.html)>,  
  ): Partial<[TokenPosition](../interfaces/foundry.documents.types.TokenPosition.html)>

  `Internal`

  Get the position for movement via the Token Config.

  #### Parameters

  + changes: Partial<[TokenPosition](../interfaces/foundry.documents.types.TokenPosition.html)>

  #### Returns Partial<[TokenPosition](../interfaces/foundry.documents.types.TokenPosition.html)>

  #### See

  [foundry.applications.sheets.TokenConfig#\_processSubmitData](foundry.applications.sheets.TokenConfig.html#_processsubmitdata)

### \_getDragOrigin

* \_getDragOrigin(): [Point](../interfaces/foundry.types.Point.html)

  `Internal`

  Get the origin of the drag operation.

  #### Returns [Point](../interfaces/foundry.types.Point.html)

### \_getDragWaypointPosition

* \_getDragWaypointPosition(  
  Â Â Â Â current: [DeepReadonly](../types/foundry.types.DeepReadonly.html)<Pick<[TokenPosition](../interfaces/foundry.documents.types.TokenPosition.html), "x" | "y" | "elevation">>,  
  Â Â Â Â changes: [DeepReadonly](../types/foundry.types.DeepReadonly.html)<Partial<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.html)>>,  
  Â Â Â Â options?: { snap?: boolean },  
  ): Pick<[TokenPosition](../interfaces/foundry.documents.types.TokenPosition.html), "x" | "y" | "elevation"> & Partial<[TokenDimensions](../types/foundry.documents.types.TokenDimensions.html)>

  `Internal`

  Get the drag waypoint position.

  #### Parameters

  + current: [DeepReadonly](../types/foundry.types.DeepReadonly.html)<Pick<[TokenPosition](../interfaces/foundry.documents.types.TokenPosition.html), "x" | "y" | "elevation">>
  + changes: [DeepReadonly](../types/foundry.types.DeepReadonly.html)<Partial<[ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.html)>>
  + `Optional`options: { snap?: boolean } = {}

  #### Returns Pick<[TokenPosition](../interfaces/foundry.documents.types.TokenPosition.html), "x" | "y" | "elevation"> & Partial<[TokenDimensions](../types/foundry.documents.types.TokenDimensions.html)>

### \_getHUDMovementPosition

* \_getHUDMovementPosition(elevation: number): Partial<[TokenPosition](../interfaces/foundry.documents.types.TokenPosition.html)>

  `Internal`

  Get the position for movement via the Token HUD.

  #### Parameters

  + elevation: number

  #### Returns Partial<[TokenPosition](../interfaces/foundry.documents.types.TokenPosition.html)>

  #### See

  [foundry.applications.hud.TokenHUD#\_onSubmit](foundry.applications.hud.TokenHUD.html#_onsubmit)

### \_getShiftedPosition

* \_getShiftedPosition(  
  Â Â Â Â dx: -1 | 0 | 1,  
  Â Â Â Â dy: -1 | 0 | 1,  
  Â Â Â Â dz: -1 | 0 | 1,  
  ): Partial<[TokenPosition](../interfaces/foundry.documents.types.TokenPosition.html)>

  `Internal`

  Obtain a shifted waypoint for the Token. The returned waypoint must move the Token to a snapped position.

  #### Parameters

  + dx: -1 | 0 | 1

    The number of grid units to shift along the X-axis
  + dy: -1 | 0 | 1

    The number of grid units to shift along the Y-axis
  + dz: -1 | 0 | 1

    The number of grid units to shift along the Z-axis

  #### Returns Partial<[TokenPosition](../interfaces/foundry.documents.types.TokenPosition.html)>

  The shifted target waypoint (snapped if square/hexagonal grid)

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_getShiftedPosition](foundry.canvas.placeables.PlaceableObject.html#_getshiftedposition)

### \_initializeDragLeft

* \_initializeDragLeft(event: any): void

  Initialize the left-drag operation.

  #### Parameters

  + event: any

    The triggering canvas interaction event

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_initializeDragLeft](foundry.canvas.placeables.PlaceableObject.html#_initializedragleft)

### \_onClickLeft

* \_onClickLeft(event: any): void

  Callback actions which occur on a single left-click event to assume control of the object

  #### Parameters

  + event: any

    The triggering canvas interaction event

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onClickLeft](foundry.canvas.placeables.PlaceableObject.html#_onclickleft)

### \_onClickLeft2

* \_onClickLeft2(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onClickLeft2](foundry.canvas.placeables.PlaceableObject.html#_onclickleft2)

### \_onClickRight2

* \_onClickRight2(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onClickRight2](foundry.canvas.placeables.PlaceableObject.html#_onclickright2)

### \_onCreate

* \_onCreate(data: any, options: any, userId: any): void

  Register pending canvas operations which should occur after a new PlaceableObject of this type is created

  #### Parameters

  + data: any
  + options: any
  + userId: any

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onCreate](foundry.canvas.placeables.PlaceableObject.html#_oncreate)

### \_onDelete

* \_onDelete(options: any, userId: any): void

  Define additional steps taken when an existing placeable object of this type is deleted

  #### Parameters

  + options: any
  + userId: any

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onDelete](foundry.canvas.placeables.PlaceableObject.html#_ondelete)

### \_onDragEnd

* \_onDragEnd(): void

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onDragEnd](foundry.canvas.placeables.PlaceableObject.html#_ondragend)

### \_onDragLeftCancel

* \_onDragLeftCancel(event: any): boolean | void

  Callback actions which occur on a mouse-move operation.

  #### Parameters

  + event: any

    The triggering mouse click event

  #### Returns boolean | void

  If false, the cancellation is prevented

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onDragLeftCancel](foundry.canvas.placeables.PlaceableObject.html#_ondragleftcancel)

### \_onDragLeftDrop

* \_onDragLeftDrop(event: any): undefined | false

  Callback actions which occur on a mouse-move operation.

  #### Parameters

  + event: any

    The triggering canvas interaction event

  #### Returns undefined | false

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onDragLeftDrop](foundry.canvas.placeables.PlaceableObject.html#_ondragleftdrop)

### \_onDragLeftMove

* \_onDragLeftMove(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onDragLeftMove](foundry.canvas.placeables.PlaceableObject.html#_ondragleftmove)

### \_onHoverIn

* \_onHoverIn(event: any, options: any): boolean | void

  Actions that should be taken for this Placeable Object when a mouseover event occurs.
  Hover events on PlaceableObject instances allow event propagation by default.

  #### Parameters

  + event: any

    The triggering canvas interaction event
  + options: any

    Options which customize event handling

  #### Returns boolean | void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onHoverIn](foundry.canvas.placeables.PlaceableObject.html#_onhoverin)

### \_onHoverOut

* \_onHoverOut(event: any): void

  Actions that should be taken for this Placeable Object when a mouseout event occurs

  #### Parameters

  + event: any

    The triggering canvas interaction event

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onHoverOut](foundry.canvas.placeables.PlaceableObject.html#_onhoverout)

### \_onRelease

* \_onRelease(options: any): void

  Additional events which trigger once control of the object is released

  #### Parameters

  + options: any

    Options which modify the releasing workflow

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onRelease](foundry.canvas.placeables.PlaceableObject.html#_onrelease)

### \_onUpdate

* \_onUpdate(changed: any, options: any, userId: any): void

  Define additional steps taken when an existing placeable object of this type is updated with new data

  #### Parameters

  + changed: any
  + options: any
  + userId: any

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onUpdate](foundry.canvas.placeables.PlaceableObject.html#_onupdate)

### \_overlapsSelection

* \_overlapsSelection(rectangle: any): boolean

  #### Parameters

  + rectangle: any

  #### Returns boolean

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_overlapsSelection](foundry.canvas.placeables.PlaceableObject.html#_overlapsselection)

### \_partialDraw

* \_partialDraw(fn: () => Promise<void>): Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)>

  `Internal`

  Execute a partial draw.

  #### Parameters

  + fn: () => Promise<void>

    The draw function

  #### Returns Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)>

  The drawn object

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_partialDraw](foundry.canvas.placeables.PlaceableObject.html#_partialdraw)

### \_pasteObject

* \_pasteObject(  
  Â Â Â Â offset: any,  
  Â Â Â Â \_\_namedParameters?: { hidden?: boolean; snap?: boolean },  
  ): any

  #### Parameters

  + offset: any
  + \_\_namedParameters: { hidden?: boolean; snap?: boolean } = {}

  #### Returns any

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_pasteObject](foundry.canvas.placeables.PlaceableObject.html#_pasteobject)

### \_prepareDragLeftDropUpdates

* \_prepareDragLeftDropUpdates(  
  Â Â Â Â event: any,  
  ): ({ \_id: string }[] | { movement: {} })[]

  #### Parameters

  + event: any

  #### Returns ({ \_id: string }[] | { movement: {} })[]

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_prepareDragLeftDropUpdates](foundry.canvas.placeables.PlaceableObject.html#_preparedragleftdropupdates)

### \_propagateLeftClick

* \_propagateLeftClick(event: any): boolean

  #### Parameters

  + event: any

  #### Returns boolean

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_propagateLeftClick](foundry.canvas.placeables.PlaceableObject.html#_propagateleftclick)

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

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_updateQuadtree](foundry.canvas.placeables.PlaceableObject.html#_updatequadtree)

### \_updateRotation

* \_updateRotation(\_\_namedParameters?: { delta?: number; snap?: number }): number

  #### Parameters

  + \_\_namedParameters: { delta?: number; snap?: number } = {}

  #### Returns number

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_updateRotation](foundry.canvas.placeables.PlaceableObject.html#_updaterotation)

### \_updateSpecialStatusFilterEffects

* \_updateSpecialStatusFilterEffects(): void

  `Internal`

  Update the filter effects depending on special status effects
  TODO: replace this method by something more convenient.

  #### Returns void

### \_updateTarget

* \_updateTarget(targeted: boolean, user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html)): void

  `Internal`

  Handle updating the targeting state of this Token for a particular User.

  #### Parameters

  + targeted: boolean

    Is the token now targeted?
  + user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html)

    The user whose targeting state has changed

  #### Returns void

### activateListeners

* activateListeners(): void

  Activate interactivity for the Placeable Object

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[activateListeners](foundry.canvas.placeables.PlaceableObject.html#activatelisteners)

### animate

* animate(  
  Â Â Â Â to: Partial<[TokenAnimationData](../interfaces/foundry.types.TokenAnimationData.html)>,  
  Â Â Â Â options?: [TokenAnimationOptions](../interfaces/foundry.types.TokenAnimationOptions.html),  
  ): Promise<void>

  Animate from the old to the new state of this Token.

  #### Parameters

  + to: Partial<[TokenAnimationData](../interfaces/foundry.types.TokenAnimationData.html)>

    The animation data to animate to
  + `Optional`options: [TokenAnimationOptions](../interfaces/foundry.types.TokenAnimationOptions.html) = {}

    The options that configure the animation behavior

  #### Returns Promise<void>

  A promise which resolves once the animation has finished or stopped

### applyRenderFlags

* applyRenderFlags(): void

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[applyRenderFlags](foundry.canvas.placeables.PlaceableObject.html#applyrenderflags)

### can

* can(  
  Â Â Â Â user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html),  
  Â Â Â Â action:  
  Â Â Â Â Â Â Â Â | "update"  
  Â Â Â Â Â Â Â Â | "delete"  
  Â Â Â Â Â Â Â Â | "view"  
  Â Â Â Â Â Â Â Â | "create"  
  Â Â Â Â Â Â Â Â | "control"  
  Â Â Â Â Â Â Â Â | "configure"  
  Â Â Â Â Â Â Â Â | "hover"  
  Â Â Â Â Â Â Â Â | "drag"  
  Â Â Â Â Â Â Â Â | "HUD",  
  ): boolean

  Test whether a user can perform a certain interaction regarding a Placeable Object

  #### Parameters

  + user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html)

    The User performing the action. Must be equal to `game.user`.
  + action:   
    Â Â Â Â | "update"  
    Â Â Â Â | "delete"  
    Â Â Â Â | "view"  
    Â Â Â Â | "create"  
    Â Â Â Â | "control"  
    Â Â Â Â | "configure"  
    Â Â Â Â | "hover"  
    Â Â Â Â | "drag"  
    Â Â Â Â | "HUD"

    The named action being attempted

  #### Returns boolean

  Does the User have rights to perform the action?

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[can](foundry.canvas.placeables.PlaceableObject.html#can)

### checkCollision

* checkCollision(  
  Â Â Â Â destination: [Point](../interfaces/foundry.types.Point.html) | [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.html),  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â mode?: "any" | "closest" | "all";  
  Â Â Â Â Â Â Â Â origin?: [Point](../interfaces/foundry.types.Point.html) | [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.html);  
  Â Â Â Â Â Â Â Â type?: [PointSourcePolygonType](../types/foundry.canvas.geometry.types.PointSourcePolygonType.html);  
  Â Â Â Â },  
  ): null  
  | boolean  
  | [PolygonVertex](foundry.canvas.geometry.edges.PolygonVertex.html)  
  | [PolygonVertex](foundry.canvas.geometry.edges.PolygonVertex.html)[]

  Check for collision when attempting a move to a new position.

  The result of this function must not be affected by the animation of this Token.

  #### Parameters

  + destination: [Point](../interfaces/foundry.types.Point.html) | [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.html)

    The central destination point of the attempted movement.
    The elevation defaults to the elevation of the origin.
  + `Optional`options: {  
    Â Â Â Â mode?: "any" | "closest" | "all";  
    Â Â Â Â origin?: [Point](../interfaces/foundry.types.Point.html) | [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.html);  
    Â Â Â Â type?: [PointSourcePolygonType](../types/foundry.canvas.geometry.types.PointSourcePolygonType.html);  
    } = {}

    Additional options forwarded to PointSourcePolygon.testCollision

    - ##### `Optional`mode?: "any" | "closest" | "all"

      The collision mode to test: "any", "all", or "closest"
    - ##### `Optional`origin?: [Point](../interfaces/foundry.types.Point.html) | [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.html)

      The origin to be used instead of the current origin. The elevation
      defaults to the current elevation.
    - ##### `Optional`type?: [PointSourcePolygonType](../types/foundry.canvas.geometry.types.PointSourcePolygonType.html)

      The collision type

  #### Returns null | boolean | [PolygonVertex](foundry.canvas.geometry.edges.PolygonVertex.html) | [PolygonVertex](foundry.canvas.geometry.edges.PolygonVertex.html)[]

  The collision result depends on the mode of the test:
  \* any: returns a boolean for whether any collision occurred
  \* all: returns a sorted array of PolygonVertex instances
  \* closest: returns a PolygonVertex instance or null

### clear

* clear(): [canvas](../modules/foundry.canvas.html).[placeables](../modules/foundry.canvas.placeables.html).[Token](foundry.canvas.placeables.Token.html)

  #### Returns [canvas](../modules/foundry.canvas.html).[placeables](../modules/foundry.canvas.placeables.html).[Token](foundry.canvas.placeables.Token.html)

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[clear](foundry.canvas.placeables.PlaceableObject.html#clear)

### clone

* clone(): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  Clone the placeable object, returning a new object with identical attributes.
  The returned object is non-interactive, and has no assigned ID.
  If you plan to use it permanently you should call the create method.

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  A new object with identical data

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[clone](foundry.canvas.placeables.PlaceableObject.html#clone)

### constrainMovementPath

* constrainMovementPath(  
  Â Â Â Â waypoints: [TokenConstrainMovementPathWaypoint](../interfaces/foundry.types.TokenConstrainMovementPathWaypoint.html)[],  
  Â Â Â Â options?: [TokenConstrainMovementPathOptions](../interfaces/foundry.types.TokenConstrainMovementPathOptions.html),  
  ): [  
  Â Â Â Â constrainedPath: [TokenConstrainedMovementWaypoint](../types/foundry.types.TokenConstrainedMovementWaypoint.html)[],  
  Â Â Â Â wasConstrained: boolean,  
  ]

  Constrain the given movement path.

  The result of this function must not be affected by the animation of this Token.

  #### Parameters

  + waypoints: [TokenConstrainMovementPathWaypoint](../interfaces/foundry.types.TokenConstrainMovementPathWaypoint.html)[]

    The waypoints of movement
  + `Optional`options: [TokenConstrainMovementPathOptions](../interfaces/foundry.types.TokenConstrainMovementPathOptions.html) = {}

    Additional options

  #### Returns [constrainedPath: [TokenConstrainedMovementWaypoint](../types/foundry.types.TokenConstrainedMovementWaypoint.html)[], wasConstrained: boolean]

  The (constrained) path of movement and a boolean that is true if and only if the path was constrained.
  If it wasn't constrained, then a copy of the path of all given waypoints with all default values filled in
  is returned.

### control

* control(options?: { releaseOthers?: boolean }): boolean

  Assume control over a PlaceableObject, flagging it as controlled and enabling downstream behaviors

  #### Parameters

  + `Optional`options: { releaseOthers?: boolean } = {}

    Additional options which modify the control request

    - ##### `Optional`releaseOthers?: boolean

      Release any other controlled objects first

  #### Returns boolean

  A flag denoting whether control was successful

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[control](foundry.canvas.placeables.PlaceableObject.html#control)

### createTerrainMovementPath

* createTerrainMovementPath(  
  Â Â Â Â waypoints: [TokenGetTerrainMovementPathWaypoint](../types/foundry.types.TokenGetTerrainMovementPathWaypoint.html)[],  
  Â Â Â Â options?: { preview?: boolean },  
  ): [TokenTerrainMovementWaypoint](../types/foundry.types.TokenTerrainMovementWaypoint.html)[]

  This function adds intermediate waypoints pre/post enter and exit for a [Region](foundry.canvas.placeables.Region.html) if the Region
  has at least one Behavior that could affect the movement, which is determined by
  [foundry.data.regionBehaviors.RegionBehaviorType#\_getTerrainEffects](foundry.data.regionBehaviors.RegionBehaviorType.html#_getterraineffects).
  For each segment of the movement path the terrain data is created from all behaviors that
  could affect the movement of this Token with [CONFIG.Token.movement.TerrainData.resolveTerrainEffects](foundry.data.BaseTerrainData.html#resolveterraineffects).
  This terrain data is included in the returned regionalized movement path.
  This terrain data may then be used in [Token#\_getMovementCostFunction](foundry.canvas.placeables.Token.html#_getmovementcostfunction) and
  [Token#constrainMovementPath](foundry.canvas.placeables.Token.html#constrainmovementpath).

  #### Parameters

  + waypoints: [TokenGetTerrainMovementPathWaypoint](../types/foundry.types.TokenGetTerrainMovementPathWaypoint.html)[]

    The waypoints of movement
  + `Optional`options: { preview?: boolean } = {}

    Additional options

    - ##### `Optional`preview?: boolean

      Is preview?

  #### Returns [TokenTerrainMovementWaypoint](../types/foundry.types.TokenTerrainMovementWaypoint.html)[]

  The movement path with terrain data

### destroy

* destroy(options: any): any

  #### Parameters

  + options: any

  #### Returns any

  #### Inherit Doc

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[destroy](foundry.canvas.placeables.PlaceableObject.html#destroy)

### draw

* draw(options?: object): Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)>

  Draw the placeable object into its parent container

  #### Parameters

  + `Optional`options: object = {}

    Options which may modify the draw and refresh workflow

  #### Returns Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)>

  The drawn object

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[draw](foundry.canvas.placeables.PlaceableObject.html#draw)

### drawBars

* drawBars(): void

  Refresh the display of Token attribute bars, rendering its latest resource data.
  If the bar attribute is valid (has a value and max), draw the bar. Otherwise hide it.

  #### Returns void

### drawEffects

* drawEffects(): Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)>

  Draw the effect icons for ActiveEffect documents which apply to the Token's Actor.

  #### Returns Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)>

### findMovementPath

* findMovementPath(  
  Â Â Â Â waypoints: [TokenFindMovementPathWaypoint](../interfaces/foundry.types.TokenFindMovementPathWaypoint.html)[],  
  Â Â Â Â options?: [TokenFindMovementPathOptions](../interfaces/foundry.types.TokenFindMovementPathOptions.html),  
  ): [TokenFindMovementPathJob](../interfaces/foundry.types.TokenFindMovementPathJob.html)

  Find a movement path through the waypoints.
  The path may not necessarily be one with the least cost.
  The path returned may be partial, i.e. it doesn't go through all waypoints, but must always start with the first
  waypoints unless the waypoints are empty, in which case an empty path is returned.

  The result of this function must not be affected by the animation of this Token.

  #### Parameters

  + waypoints: [TokenFindMovementPathWaypoint](../interfaces/foundry.types.TokenFindMovementPathWaypoint.html)[]

    The waypoints of movement
  + `Optional`options: [TokenFindMovementPathOptions](../interfaces/foundry.types.TokenFindMovementPathOptions.html)

    Additional options

  #### Returns [TokenFindMovementPathJob](../interfaces/foundry.types.TokenFindMovementPathJob.html)

  The job of the movement pathfinder

### getCenterPoint

* getCenterPoint(position?: [Point](../interfaces/foundry.types.Point.html)): [Point](../interfaces/foundry.types.Point.html)

  Get the center point of the Token.

  #### Parameters

  + `Optional`position: [Point](../interfaces/foundry.types.Point.html)

    The position in pixels

  #### Returns [Point](../interfaces/foundry.types.Point.html)

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

### getMovementAdjustedPoint

* getMovementAdjustedPoint(  
  Â Â Â Â point: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.html),  
  Â Â Â Â options?: { offsetX?: number; offsetY?: number },  
  ): [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.html)

  The Token's central position, adjusted in each direction by one or zero pixels to offset it relative to walls.

  #### Parameters

  + point: [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.html)

    The center point with elevation.
  + `Optional`options: { offsetX?: number; offsetY?: number }
    - ##### `Optional`offsetX?: number

      The x-offset.
    - ##### `Optional`offsetY?: number

      The y-offset.

  #### Returns [ElevatedPoint](../interfaces/foundry.types.ElevatedPoint.html)

  The adjusted center point.
* getMovementAdjustedPoint(  
  Â Â Â Â point: [Point](../interfaces/foundry.types.Point.html),  
  Â Â Â Â options?: { offsetX?: number; offsetY?: number },  
  ): [Point](../interfaces/foundry.types.Point.html)

  #### Parameters

  + point: [Point](../interfaces/foundry.types.Point.html)

    The center point.
  + `Optional`options: { offsetX?: number; offsetY?: number }
    - ##### `Optional`offsetX?: number

      The x-offset.
    - ##### `Optional`offsetY?: number

      The y-offset.

  #### Returns [Point](../interfaces/foundry.types.Point.html)

  The adjusted center point.

### getRingColors

* getRingColors(): {}

  Override ring colors for this particular Token instance.

  #### Returns {}

### getRingEffects

* getRingEffects(): number[]

  Apply additional ring effects for this particular Token instance.
  Effects are returned as an array of integers in [foundry.canvas.placeables.tokens.TokenRing.effects](foundry.canvas.placeables.tokens.TokenRing.html#effects-1).

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

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[getSnappedPosition](foundry.canvas.placeables.PlaceableObject.html#getsnappedposition)

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
  Â Â Â Â waypoints: [TokenMeasureMovementPathWaypoint](../interfaces/foundry.documents.types.TokenMeasureMovementPathWaypoint.html)[],  
  Â Â Â Â options?: [TokenMeasureMovementPathOptions](../interfaces/foundry.documents.types.TokenMeasureMovementPathOptions.html),  
  ): [GridMeasurePathResult](../interfaces/foundry.grid.types.GridMeasurePathResult.html)

  Measure the movement path for this Token.

  #### Parameters

  + waypoints: [TokenMeasureMovementPathWaypoint](../interfaces/foundry.documents.types.TokenMeasureMovementPathWaypoint.html)[]

    The waypoints of movement
  + `Optional`options: [TokenMeasureMovementPathOptions](../interfaces/foundry.documents.types.TokenMeasureMovementPathOptions.html)

    Additional options that affect cost calculations
    (passed to [Token#\_getMovementCostFunction](foundry.canvas.placeables.Token.html#_getmovementcostfunction))

  #### Returns [GridMeasurePathResult](../interfaces/foundry.grid.types.GridMeasurePathResult.html)

### recalculatePlannedMovementPath

* recalculatePlannedMovementPath(): void

  Recalculate the planned movement path of this Token for the current User.

  #### Returns void

### refresh

* refresh(options?: object): [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  Refresh all incremental render flags for the PlaceableObject.
  This method is no longer used by the core software but provided for backwards compatibility.

  #### Parameters

  + `Optional`options: object = {}

    Options which may modify the refresh workflow

  #### Returns [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)

  The refreshed object

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[refresh](foundry.canvas.placeables.PlaceableObject.html#refresh)

### release

* release(options?: object): boolean

  Release control over a PlaceableObject, removing it from the controlled set

  #### Parameters

  + options: object = {}

    Options which modify the releasing workflow

  #### Returns boolean

  A Boolean flag confirming the object was released.

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[release](foundry.canvas.placeables.PlaceableObject.html#release)

### rotate

* rotate(angle: number, snap: number): Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)>

  Rotate the PlaceableObject to a certain angle of facing

  #### Parameters

  + angle: number

    The desired angle of rotation
  + snap: number

    Snap the angle of rotation to a certain target degree increment

  #### Returns Promise<[PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)>

  The rotated object

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[rotate](foundry.canvas.placeables.PlaceableObject.html#rotate)

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

* \_addDragWaypoint(point: [Point](../interfaces/foundry.types.Point.html), options?: { snap?: boolean }): void

  `Protected`

  Add ruler waypoints and update ruler paths.

  #### Parameters

  + point: [Point](../interfaces/foundry.types.Point.html)

    The (unsnapped) center point of the waypoint
  + `Optional`options: { snap?: boolean } = {}

    Additional options

    - ##### `Optional`snap?: boolean

      Snap the added waypoint?

  #### Returns void

### `Protected`\_canCreate

* \_canCreate(  
  Â Â Â Â user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html),  
  Â Â Â Â event?: FederatedEvent<UIEvent | PixiTouch>,  
  ): boolean

  `Protected`

  Does the User have permission to create the underlying Document?

  #### Parameters

  + user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html)

    The User performing the action. Always equal to `game.user`.
  + `Optional`event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event if this function was called by
    [foundry.canvas.interaction.MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.html).

  #### Returns boolean

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_canCreate](foundry.canvas.placeables.PlaceableObject.html#_cancreate)

### `Protected`\_canDelete

* \_canDelete(  
  Â Â Â Â user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html),  
  Â Â Â Â event?: FederatedEvent<UIEvent | PixiTouch>,  
  ): boolean

  `Protected`

  Does the User have permission to delete the underlying Document?

  #### Parameters

  + user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html)

    The User performing the action. Always equal to `game.user`.
  + `Optional`event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event if this function was called by
    [foundry.canvas.interaction.MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.html).

  #### Returns boolean

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_canDelete](foundry.canvas.placeables.PlaceableObject.html#_candelete)

### `Protected`\_canDragLeftStart

* \_canDragLeftStart(  
  Â Â Â Â user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html),  
  Â Â Â Â event: FederatedEvent<UIEvent | PixiTouch>,  
  Â Â Â Â options?: { notify: boolean },  
  ): boolean

  `Protected`

  Does the User have permission to left-click drag this Placeable Object?

  #### Parameters

  + user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html)

    The User performing the action. Always equal to `game.user`.
  + event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event
  + `Optional`options: { notify: boolean } = {}

    Options, used internally

  #### Returns boolean

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_canDragLeftStart](foundry.canvas.placeables.PlaceableObject.html#_candragleftstart)

### `Protected`\_canUpdate

* \_canUpdate(  
  Â Â Â Â user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html),  
  Â Â Â Â event?: FederatedEvent<UIEvent | PixiTouch>,  
  ): boolean

  `Protected`

  Does the User have permission to update the underlying Document?

  #### Parameters

  + user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html)

    The User performing the action. Always equal to `game.user`.
  + `Optional`event: FederatedEvent<UIEvent | PixiTouch>

    The pointer event if this function was called by
    [foundry.canvas.interaction.MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.html).

  #### Returns boolean

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_canUpdate](foundry.canvas.placeables.PlaceableObject.html#_canupdate)

### `Protected`\_canViewMode

* \_canViewMode(mode: [TokenDisplayMode](../types/CONST.TokenDisplayMode.html)): boolean

  `Protected`

  Helper method to determine whether a token attribute is viewable under a certain mode

  #### Parameters

  + mode: [TokenDisplayMode](../types/CONST.TokenDisplayMode.html)

    The mode from [CONST.TOKEN\_DISPLAY\_MODES](../variables/CONST.TOKEN_DISPLAY_MODES.html)

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

* \_createInteractionManager(): [MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.html)

  `Protected`

  Create a standard MouseInteractionManager for the PlaceableObject

  #### Returns [MouseInteractionManager](foundry.canvas.interaction.MouseInteractionManager.html)

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_createInteractionManager](foundry.canvas.placeables.PlaceableObject.html#_createinteractionmanager)

### `Protected`\_drawBar

* \_drawBar(number: number, bar: Graphics, data: Object): boolean

  `Protected`

  Draw a single resource bar, given provided data

  #### Parameters

  + number: number

    The Bar number
  + bar: Graphics

    The Bar container
  + data: Object

    Resource data for this bar

  #### Returns boolean

### `Protected`\_drawEffect

* \_drawEffect(src: string, tint: null | ColorSource): Promise<undefined | Sprite>

  `Protected`

  Draw a status effect icon

  #### Parameters

  + src: string
  + tint: null | ColorSource

  #### Returns Promise<undefined | Sprite>

### `Protected`\_drawEffects

* \_drawEffects(): Promise<void>

  `Protected`

  Draw the effect icons for ActiveEffect documents which apply to the Token's Actor.
  Called by [Token#drawEffects](foundry.canvas.placeables.Token.html#draweffects).

  #### Returns Promise<void>

### `Protected`\_drawOverlay

* \_drawOverlay(src: string, tint: null | number): Promise<Sprite>

  `Protected`

  Draw the overlay effect icon

  #### Parameters

  + src: string
  + tint: null | number

  #### Returns Promise<Sprite>

### `Protected`\_drawTargetArrows

* \_drawTargetArrows(reticule?: [ReticuleOptions](../interfaces/foundry.types.ReticuleOptions.html)): void

  `Protected`

  Draw the targeting arrows around this token.

  #### Parameters

  + `Optional`reticule: [ReticuleOptions](../interfaces/foundry.types.ReticuleOptions.html) = {}

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

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_finalizeDragRight](foundry.canvas.placeables.PlaceableObject.html#_finalizedragright)

### `Protected`\_getAnimationData

* \_getAnimationData(): [TokenAnimationData](../interfaces/foundry.types.TokenAnimationData.html)

  `Protected`

  Get the animation data for the current state of the document.

  #### Returns [TokenAnimationData](../interfaces/foundry.types.TokenAnimationData.html)

  The target animation data object

### `Protected`\_getAnimationDuration

* \_getAnimationDuration(  
  Â Â Â Â from: [DeepReadonly](../types/foundry.types.DeepReadonly.html)<[TokenAnimationData](../interfaces/foundry.types.TokenAnimationData.html)>,  
  Â Â Â Â to: [DeepReadonly](../types/foundry.types.DeepReadonly.html)<Partial<[TokenAnimationData](../interfaces/foundry.types.TokenAnimationData.html)>>,  
  Â Â Â Â options: [TokenAnimationOptions](../interfaces/foundry.types.TokenAnimationOptions.html),  
  ): number

  `Protected`

  Get the duration of the animation.

  #### Parameters

  + from: [DeepReadonly](../types/foundry.types.DeepReadonly.html)<[TokenAnimationData](../interfaces/foundry.types.TokenAnimationData.html)>

    The animation data to animate from
  + to: [DeepReadonly](../types/foundry.types.DeepReadonly.html)<Partial<[TokenAnimationData](../interfaces/foundry.types.TokenAnimationData.html)>>

    The animation data to animate to
  + options: [TokenAnimationOptions](../interfaces/foundry.types.TokenAnimationOptions.html)

    The options that configure the animation behavior

  #### Returns number

  The duration of the animation in milliseconds

### `Protected`\_getAnimationMovementSpeed

* \_getAnimationMovementSpeed(options: [TokenAnimationOptions](../interfaces/foundry.types.TokenAnimationOptions.html)): number

  `Protected`

  Get the base movement speed for the animation in grid size per second.
  The default implementation returns `CONFIG.Token.movement.defaultSpeed`.

  #### Parameters

  + options: [TokenAnimationOptions](../interfaces/foundry.types.TokenAnimationOptions.html)

    The options that configure the animation behavior

  #### Returns number

  The base movement speed in grid size per second

### `Protected`\_getAnimationRotationSpeed

* \_getAnimationRotationSpeed(options: [TokenAnimationOptions](../interfaces/foundry.types.TokenAnimationOptions.html)): number

  `Protected`

  Get the rotation speed for the animation in 60 degrees per second.
  Returns the movement speed by default.

  #### Parameters

  + options: [TokenAnimationOptions](../interfaces/foundry.types.TokenAnimationOptions.html)

    The options that configure the animation behavior

  #### Returns number

  The rotation speed in 60 degrees per second

### `Protected`\_getAnimationTransition

* \_getAnimationTransition(  
  Â Â Â Â options: [TokenAnimationOptions](../interfaces/foundry.types.TokenAnimationOptions.html),  
  ): [TokenAnimationTransition](../types/foundry.types.TokenAnimationTransition.html)

  `Protected`

  Get the texture transition type.
  Returns `"fade"` by default.

  #### Parameters

  + options: [TokenAnimationOptions](../interfaces/foundry.types.TokenAnimationOptions.html)

    The options that configure the animation behavior

  #### Returns [TokenAnimationTransition](../types/foundry.types.TokenAnimationTransition.html)

  The transition type

### `Protected`\_getBorderColor

* \_getBorderColor(): number

  `Protected`

  Get the hex color that should be used to render the Token border

  #### Returns number

  The hex color used to depict the border color

### `Protected`\_getDragConstrainOptions

* \_getDragConstrainOptions(): Omit<  
  Â Â Â Â [TokenConstrainMovementPathOptions](../interfaces/foundry.types.TokenConstrainMovementPathOptions.html),  
  Â Â Â Â "preview"  
  Â Â Â Â | "history",  
  >

  `Protected`

  Get the constrain options used during the drag operation.

  #### Returns Omit<[TokenConstrainMovementPathOptions](../interfaces/foundry.types.TokenConstrainMovementPathOptions.html), "preview" | "history">

  The constrain options

### `Protected`\_getDragMovementAction

* \_getDragMovementAction(): string

  `Protected`

  Get the movement action for the waypoints placed during a drag operation.

  #### Returns string

  The movement action

### `Protected`\_getDragPathfindingOptions

* \_getDragPathfindingOptions(): [TokenFindMovementPathOptions](../interfaces/foundry.types.TokenFindMovementPathOptions.html)

  `Protected`

  Get the search options used during the drag operation to find the path of movement through the waypoints.

  #### Returns [TokenFindMovementPathOptions](../interfaces/foundry.types.TokenFindMovementPathOptions.html)

  The search options

### `Protected`\_getHUDMovementAction

* \_getHUDMovementAction(): string

  `Protected`

  Get the movement action in [CONFIG.Token.movement.actions](../variables/CONFIG.Token.html#__typemovement) to be used for movement
  via the Token HUD.
  The default implementation returns `this.document.movementAction`.

  #### Returns string

  #### See

  [foundry.applications.hud.TokenHUD#\_onSubmit](foundry.applications.hud.TokenHUD.html#_onsubmit)

### `Protected`\_getKeyboardMovementAction

* \_getKeyboardMovementAction(): string

  `Protected`

  Get the movement action in [CONFIG.Token.movement.actions](../variables/CONFIG.Token.html#__typemovement) to be used for keyboard
  movement.
  The default implementation returns `this.document.movementAction`.

  #### Returns string

### `Protected`\_getLightSourceData

* \_getLightSourceData(): [LightSourceData](../interfaces/foundry.LightSourceData.html)

  `Protected`

  Get the light source data.

  #### Returns [LightSourceData](../interfaces/foundry.LightSourceData.html)

### `Protected`\_getMovementCostFunction

* \_getMovementCostFunction(  
  Â Â Â Â options?: [TokenMeasureMovementPathOptions](../interfaces/foundry.documents.types.TokenMeasureMovementPathOptions.html),  
  ): void | [TokenMovementCostFunction](../types/foundry.documents.types.TokenMovementCostFunction.html)

  `Protected`

  Create the movement cost function for this Token.
  In square and hexagonal grids it calculates the cost for single grid space move between two grid space offsets.
  For tokens that occupy more than one grid space the cost of movement is calculated as the median of all individual
  grid space moves unless the cost of any of these is infinite, in which case total cost is always infinite.
  In gridless grids the `from` and `to` parameters of the cost function are top-left offsets.
  If the movement cost function is undefined, the cost equals the distance moved.

  #### Parameters

  + `Optional`options: [TokenMeasureMovementPathOptions](../interfaces/foundry.documents.types.TokenMeasureMovementPathOptions.html)

    Additional options that affect cost calculations

  #### Returns void | [TokenMovementCostFunction](../types/foundry.documents.types.TokenMovementCostFunction.html)

### `Protected`\_getTargetAlpha

* \_getTargetAlpha(): number

  `Protected`

  Get the target opacity that should be used for a Placeable Object depending on its preview state.

  #### Returns number

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_getTargetAlpha](foundry.canvas.placeables.PlaceableObject.html#_gettargetalpha)

### `Protected`\_getTextStyle

* \_getTextStyle(): TextStyle

  `Protected`

  Get the text style that should be used for this Token's tooltip.

  #### Returns TextStyle

### `Protected`\_getTooltipText

* \_getTooltipText(): string

  `Protected`

  Return the text which should be displayed in a token's tooltip field

  #### Returns string

### `Protected`\_getVisionBlindedStates

* \_getVisionBlindedStates(): Record<string, boolean>

  `Protected`

  Returns a record of blinding state.

  #### Returns Record<string, boolean>

### `Protected`\_getVisionSourceData

* \_getVisionSourceData(): [VisionSourceData](../interfaces/foundry.VisionSourceData.html)

  `Protected`

  Get the vision source data.

  #### Returns [VisionSourceData](../interfaces/foundry.VisionSourceData.html)

### `Protected`\_initializeDragRight

* \_initializeDragRight(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Initialize the right-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_initializeDragRight](foundry.canvas.placeables.PlaceableObject.html#_initializedragright)

### `Protected`\_initializeRuler

* \_initializeRuler(): null | [BaseTokenRuler](foundry.canvas.placeables.tokens.BaseTokenRuler.html)

  `Protected`

  Create the BaseTokenRuler instance for this Token, if any.
  This function is called when the Token is drawn for the first time.

  #### Returns null | [BaseTokenRuler](foundry.canvas.placeables.tokens.BaseTokenRuler.html)

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
  Â Â Â Â options: [TokenAnimationOptions](../interfaces/foundry.types.TokenAnimationOptions.html),  
  ): number

  `Protected`

  Modify the base movement speed of the animation.
  Divides by the terrain difficulty, if present, by default.

  #### Parameters

  + speed: number

    The base movement speed in grid size per second
  + options: [TokenAnimationOptions](../interfaces/foundry.types.TokenAnimationOptions.html)

    The options that configure the animation behavior

  #### Returns number

  The modified movement speed in grid size per second

### `Protected`\_onAnimationUpdate

* \_onAnimationUpdate(  
  Â Â Â Â changed: Partial<[TokenAnimationData](../interfaces/foundry.types.TokenAnimationData.html)>,  
  Â Â Â Â context: [TokenAnimationContext](../interfaces/foundry.types.TokenAnimationContext.html),  
  ): void

  `Protected`

  Called each animation frame.

  #### Parameters

  + changed: Partial<[TokenAnimationData](../interfaces/foundry.types.TokenAnimationData.html)>

    The animation data that changed
  + context: [TokenAnimationContext](../interfaces/foundry.types.TokenAnimationContext.html)

    The animation context

  #### Returns void

### `Protected`\_onApplyStatusEffect

* \_onApplyStatusEffect(statusId: string, active: boolean): void

  `Protected`

  Handle changes to Token behavior when a significant status effect is applied

  #### Parameters

  + statusId: string

    The status effect ID being applied, from [CONFIG.specialStatusEffects](../variables/CONFIG.specialStatusEffects.html)
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

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onClickRight](foundry.canvas.placeables.PlaceableObject.html#_onclickright)

### `Protected`\_onControl

* \_onControl(options?: { pan?: any; releaseOthers?: boolean }): void

  `Protected`

  Additional events that trigger once control of the Token is established

  #### Parameters

  + options: { pan?: any; releaseOthers?: boolean } = {}

    Optional parameters which apply for specific implementations

    - ##### `Optional`pan?: any

      Pan to the controlled Token
    - ##### `Optional`releaseOthers?: boolean

      Release control of all other Tokens

  #### Returns void

  Overrides [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onControl](foundry.canvas.placeables.PlaceableObject.html#_oncontrol)

### `Protected`\_onDragClickLeft

* \_onDragClickLeft(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Called by [foundry.canvas.layers.TokenLayer#\_onClickLeft](foundry.canvas.layers.TokenLayer.html#_onclickleft) while this Token is in a drag workflow.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The pointerdown event

  #### Returns void

### `Protected`\_onDragClickLeft2

* \_onDragClickLeft2(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Called by [foundry.canvas.layers.TokenLayer#\_onClickLeft2](foundry.canvas.layers.TokenLayer.html#_onclickleft2) while this Token is in a drag workflow.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The pointerdown event

  #### Returns void

### `Protected`\_onDragClickRight

* \_onDragClickRight(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Called by [foundry.canvas.layers.TokenLayer#\_onClickRight](foundry.canvas.layers.TokenLayer.html#_onclickright) while this Token is in a drag workflow.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The pointerdown event

  #### Returns void

### `Protected`\_onDragClickRight2

* \_onDragClickRight2(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Called by [foundry.canvas.layers.TokenLayer#\_onClickRight2](foundry.canvas.layers.TokenLayer.html#_onclickright2) while this Token is in a drag workflow.

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

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onDragLeftStart](foundry.canvas.placeables.PlaceableObject.html#_ondragleftstart)

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

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onDragRightCancel](foundry.canvas.placeables.PlaceableObject.html#_ondragrightcancel)

### `Protected`\_onDragRightDrop

* \_onDragRightDrop(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Callback actions which occur on a right mouse-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onDragRightDrop](foundry.canvas.placeables.PlaceableObject.html#_ondragrightdrop)

### `Protected`\_onDragRightMove

* \_onDragRightMove(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Callback actions which occur on a right mouse-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onDragRightMove](foundry.canvas.placeables.PlaceableObject.html#_ondragrightmove)

### `Protected`\_onDragRightStart

* \_onDragRightStart(event: FederatedEvent<UIEvent | PixiTouch>): false | void

  `Protected`

  Callback actions which occur on a right mouse-drag operation.

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering mouse click event

  #### Returns false | void

  If false, the start if prevented

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onDragRightStart](foundry.canvas.placeables.PlaceableObject.html#_ondragrightstart)

### `Protected`\_onDragStart

* \_onDragStart(): void

  `Protected`

  Begin a drag operation from the perspective of the preview clone.
  Modify the appearance of both the clone (this) and the original (\_original) object.

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onDragStart](foundry.canvas.placeables.PlaceableObject.html#_ondragstart)

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

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onLongPress](foundry.canvas.placeables.PlaceableObject.html#_onlongpress)

### `Protected`\_onUnclickLeft

* \_onUnclickLeft(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Callback actions which occur on a single left-unclick event to assume control of the object

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onUnclickLeft](foundry.canvas.placeables.PlaceableObject.html#_onunclickleft)

### `Protected`\_onUnclickRight

* \_onUnclickRight(event: FederatedEvent<UIEvent | PixiTouch>): void

  `Protected`

  Callback actions which occur on a single right-unclick event

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The triggering canvas interaction event

  #### Returns void

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_onUnclickRight](foundry.canvas.placeables.PlaceableObject.html#_onunclickright)

### `Protected`\_prepareAnimation

* \_prepareAnimation(  
  Â Â Â Â from: [DeepReadonly](../types/foundry.types.DeepReadonly.html)<[TokenAnimationData](../interfaces/foundry.types.TokenAnimationData.html)>,  
  Â Â Â Â changes: Partial<[TokenAnimationData](../interfaces/foundry.types.TokenAnimationData.html)>,  
  Â Â Â Â context: Omit<[TokenAnimationContext](../interfaces/foundry.types.TokenAnimationContext.html), "promise">,  
  Â Â Â Â options: [TokenAnimationOptions](../interfaces/foundry.types.TokenAnimationOptions.html),  
  ): [CanvasAnimationAttribute](../interfaces/foundry.canvas.animation.types.CanvasAnimationAttribute.html)[]

  `Protected`

  Prepare the animation data changes: performs special handling required for animating rotation.

  #### Parameters

  + from: [DeepReadonly](../types/foundry.types.DeepReadonly.html)<[TokenAnimationData](../interfaces/foundry.types.TokenAnimationData.html)>

    The animation data to animate from
  + changes: Partial<[TokenAnimationData](../interfaces/foundry.types.TokenAnimationData.html)>

    The animation data changes
  + context: Omit<[TokenAnimationContext](../interfaces/foundry.types.TokenAnimationContext.html), "promise">

    The animation context
  + options: [TokenAnimationOptions](../interfaces/foundry.types.TokenAnimationOptions.html)

    The options that configure the animation behavior

  #### Returns [CanvasAnimationAttribute](../interfaces/foundry.canvas.animation.types.CanvasAnimationAttribute.html)[]

  The animation attributes

### `Protected`\_propagateRightClick

* \_propagateRightClick(event: FederatedEvent<UIEvent | PixiTouch>): boolean

  `Protected`

  Should the placeable propagate right click downstream?

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

  #### Returns boolean

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_propagateRightClick](foundry.canvas.placeables.PlaceableObject.html#_propagaterightclick)

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

### `Protected`\_refreshState

* \_refreshState(): void

  `Protected`

  Refresh aspects of the user interaction state.
  For example the border, nameplate, or bars may be shown on Hover or on Control.

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

### `Protected`\_refreshVisibility

* \_refreshVisibility(): void

  `Protected`

  Refresh the visibility.

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
  Called by [Token#\_onDragLeftDrop](foundry.canvas.placeables.Token.html#_ondragleftdrop).

  #### Parameters

  + event: FederatedEvent<UIEvent | PixiTouch>

    The pointerup event

  #### Returns boolean

### `Protected`\_triggerDragLeftCancel

* \_triggerDragLeftCancel(): void

  `Protected`

  Cancel the drag workflow. This cancellation cannot be prevented by [Token#\_onDragLeftCancel](foundry.canvas.placeables.Token.html#_ondragleftcancel).

  #### Returns void

### `Protected`\_triggerDragLeftDrop

* \_triggerDragLeftDrop(): void

  `Protected`

  Trigger drop event. This drop cannot be prevented by [Token#\_shouldPreventDragLeftDrop](foundry.canvas.placeables.Token.html#_shouldpreventdragleftdrop).

  #### Returns void

### `Protected`\_updateDragDestination

* \_updateDragDestination(point: [Point](../interfaces/foundry.types.Point.html), options?: { snap?: boolean }): void

  `Protected`

  Update the destinations of the drag previews and rulers

  #### Parameters

  + point: [Point](../interfaces/foundry.types.Point.html)

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

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[#onDragRightStart](foundry.canvas.placeables.PlaceableObject.html#ondragrightstart)

### `Static`\_configureAnimationMovementSpeed

* \_configureAnimationMovementSpeed(  
  Â Â Â Â operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html),  
  Â Â Â Â origin: [TokenPosition](../interfaces/foundry.documents.types.TokenPosition.html),  
  Â Â Â Â waypoints: [TokenMovementWaypoint](../types/foundry.documents.types.TokenMovementWaypoint.html)[],  
  Â Â Â Â document: [TokenDocument](foundry.documents.TokenDocument.html),  
  ): void

  `Internal`

  Configure the animation movement speed based on the given animation duration.

  #### Parameters

  + operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html)

    The update operation
  + origin: [TokenPosition](../interfaces/foundry.documents.types.TokenPosition.html)

    The origin
  + waypoints: [TokenMovementWaypoint](../types/foundry.documents.types.TokenMovementWaypoint.html)[]

    The candidante waypoints
  + document: [TokenDocument](foundry.documents.TokenDocument.html)

    The token document

  #### Returns void

### `Static`\_getCopiedObjectsOrigin

* \_getCopiedObjectsOrigin(copies: [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)[]): Point

  `Internal`

  Get the origin used for pasting the copied objects.

  #### Parameters

  + copies: [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html)[]

    The objects that are copied

  #### Returns Point

  The offset

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_getCopiedObjectsOrigin](foundry.canvas.placeables.PlaceableObject.html#_getcopiedobjectsorigin)

### `Static`\_getDropActorPosition

* \_getDropActorPosition(  
  Â Â Â Â token: [TokenDocument](foundry.documents.TokenDocument.html),  
  Â Â Â Â point: { elevation?: number; x: number; y: number },  
  Â Â Â Â options?: { snap?: boolean },  
  ): [TokenPosition](../interfaces/foundry.documents.types.TokenPosition.html)

  `Internal`

  Get the drop position for the given token.

  #### Parameters

  + token: [TokenDocument](foundry.documents.TokenDocument.html)
  + point: { elevation?: number; x: number; y: number }
  + `Optional`options: { snap?: boolean } = {}

  #### Returns [TokenPosition](../interfaces/foundry.documents.types.TokenPosition.html)

  #### See

  [foundry.canvas.layers.TokenLayer#\_onDropActorData](foundry.canvas.layers.TokenLayer.html#_ondropactordata)

### `Static`\_getShiftedPosition

* \_getShiftedPosition(  
  Â Â Â Â dx: -1 | 0 | 1,  
  Â Â Â Â dy: -1 | 0 | 1,  
  Â Â Â Â dz: -1 | 0 | 1,  
  Â Â Â Â position: ElevatedPoint,  
  Â Â Â Â snapped: ElevatedPoint,  
  Â Â Â Â grid: [BaseGrid](foundry.grid.BaseGrid.html)<[GridCoordinates2D](../types/foundry.grid.types.GridCoordinates2D.html), [GridCoordinates3D](../types/foundry.grid.types.GridCoordinates3D.html)>,  
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
  + grid: [BaseGrid](foundry.grid.BaseGrid.html)<[GridCoordinates2D](../types/foundry.grid.types.GridCoordinates2D.html), [GridCoordinates3D](../types/foundry.grid.types.GridCoordinates3D.html)>

    The grid

  #### Returns ElevatedPoint

  The shifted target coordinates

  Inherited from [PlaceableObject](foundry.canvas.placeables.PlaceableObject.html).[\_getShiftedPosition](foundry.canvas.placeables.PlaceableObject.html#_getshiftedposition-2)