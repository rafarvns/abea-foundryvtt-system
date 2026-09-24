---
title: "REGION_EVENTS | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/variables/CONST.REGION_EVENTS.html"
category: "variables"
---

# Variable REGION\_EVENTS`Const`

REGION\_EVENTS: {  
Â Â Â Â BEHAVIOR\_ACTIVATED: "behaviorActivated";  
Â Â Â Â BEHAVIOR\_DEACTIVATED: "behaviorDeactivated";  
Â Â Â Â BEHAVIOR\_UNVIEWED: "behaviorUnviewed";  
Â Â Â Â BEHAVIOR\_VIEWED: "behaviorViewed";  
Â Â Â Â REGION\_ANIMATION: "regionAnimation";  
Â Â Â Â REGION\_BOUNDARY: "regionBoundary";  
Â Â Â Â TOKEN\_ANIMATE\_IN: "tokenAnimateIn";  
Â Â Â Â TOKEN\_ANIMATE\_OUT: "tokenAnimateOut";  
Â Â Â Â TOKEN\_ENTER: "tokenEnter";  
Â Â Â Â TOKEN\_EXIT: "tokenExit";  
Â Â Â Â TOKEN\_MOVE\_IN: "tokenMoveIn";  
Â Â Â Â TOKEN\_MOVE\_OUT: "tokenMoveOut";  
Â Â Â Â TOKEN\_MOVE\_WITHIN: "tokenMoveWithin";  
Â Â Â Â TOKEN\_ROUND\_END: "tokenRoundEnd";  
Â Â Â Â TOKEN\_ROUND\_START: "tokenRoundStart";  
Â Â Â Â TOKEN\_TURN\_END: "tokenTurnEnd";  
Â Â Â Â TOKEN\_TURN\_START: "tokenTurnStart";  
} = ...

The Region events that are supported by core.

#### Type Declaration

* ##### `Readonly`BEHAVIOR\_ACTIVATED: "behaviorActivated"

  Triggered when the Region Behavior becomes active, i.e. is enabled or created without being disabled
  while its Region isn't hidden, or its Region becomes unhidden while it's enabled.

  The event is triggered only for this Region Behavior.

  #### See

  [foundry.documents.types.RegionBehaviorActivatedEvent](../types/foundry.documents.types.RegionBehaviorActivatedEvent.md)
* ##### `Readonly`BEHAVIOR\_DEACTIVATED: "behaviorDeactivated"

  Triggered when the Region Behavior becomes inactive, i.e. is disabled or deleted without being disabled
  while its Region isn't hidden, or its Region becomes hidden while it's enabled.

  The event is triggered only for this Region Behavior.

  #### See

  [foundry.documents.types.RegionBehaviorDeactivatedEvent](../types/foundry.documents.types.RegionBehaviorDeactivatedEvent.md)
* ##### `Readonly`BEHAVIOR\_UNVIEWED: "behaviorUnviewed"

  Triggered when the Region Behavior becomes unviewed, i.e. inactive or the Scene of its Region is unviewed.

  The event is triggered only for this Region Behavior.

  #### See

  [foundry.documents.types.RegionBehaviorUnviewedEvent](../types/foundry.documents.types.RegionBehaviorUnviewedEvent.md)
* ##### `Readonly`BEHAVIOR\_VIEWED: "behaviorViewed"

  Triggered when the Region Behavior becomes viewed, i.e. active and the Scene of its Region is viewed.

  The event is triggered only for this Region Behavior.

  #### See

  [foundry.documents.types.RegionBehaviorViewedEvent](../types/foundry.documents.types.RegionBehaviorViewedEvent.md)
* ##### `Readonly`REGION\_ANIMATION: "regionAnimation"

  Triggered when the animation state of the Region is changed.

  #### See

  [foundry.documents.types.RegionRegionAnimationEvent](../types/foundry.documents.types.RegionRegionAnimationEvent.md)
* ##### `Readonly`REGION\_BOUNDARY: "regionBoundary"

  Triggered when the shapes, bottom/top elevation, levels, or restriction of the Region are changed.

  #### See

  [foundry.documents.types.RegionRegionBoundaryEvent](../types/foundry.documents.types.RegionRegionBoundaryEvent.md)
* ##### `Readonly`TOKEN\_ANIMATE\_IN: "tokenAnimateIn"

  Triggered when a Token animates into a Region.

  This event is only triggered only if the Scene the Token is in is viewed.

  #### See

  [foundry.documents.types.RegionTokenAnimateInEvent](../types/foundry.documents.types.RegionTokenAnimateInEvent.md)
* ##### `Readonly`TOKEN\_ANIMATE\_OUT: "tokenAnimateOut"

  Triggered when a Token animates out of a Region.

  This event is triggered only if the Scene the Token is in is viewed.

  #### See

  [foundry.documents.types.RegionTokenAnimateOutEvent](../types/foundry.documents.types.RegionTokenAnimateOutEvent.md)
* ##### `Readonly`TOKEN\_ENTER: "tokenEnter"

  Triggered when a Token enters a Region.

  A Token enters a Region whenever ...

  + it is created within the Region,
  + the boundary of the Region has changed such that the Token is now inside the Region,
  + the Token moves into the Region (the Token's x, y, elevation, width, height, depth, shape, or level
    has changed such that it is now inside the Region), or
  + a Region Behavior becomes active (i.e., is enabled or created while enabled), in which case
    the event it triggered only for this Region Behavior.

  #### See

  [foundry.documents.types.RegionTokenEnterEvent](../types/foundry.documents.types.RegionTokenEnterEvent.md)
* ##### `Readonly`TOKEN\_EXIT: "tokenExit"

  Triggered when a Token exits a Region.

  A Token exits a Region whenever ...

  + it is deleted while inside the Region,
  + the boundary of the Region has changed such that the Token is no longer inside the Region,
  + the Token moves out of the Region (the Token's x, y, elevation, width, height, depth, shape, or level
    has changed such that it is no longer inside the Region), or
  + a Region Behavior becomes inactive (i.e., is disabled or deleted while enabled), in which case
    the event it triggered only for this Region Behavior.

  #### See

  [foundry.documents.types.RegionTokenExitEvent](../types/foundry.documents.types.RegionTokenExitEvent.md)
* ##### `Readonly`TOKEN\_MOVE\_IN: "tokenMoveIn"

  Triggered when a Token moves into a Region.

  A Token moves whenever its x, y, elevation, width, height, depth, shape, or level is changed.

  #### See

  [foundry.documents.types.RegionTokenMoveInEvent](../types/foundry.documents.types.RegionTokenMoveInEvent.md)
* ##### `Readonly`TOKEN\_MOVE\_OUT: "tokenMoveOut"

  Triggered when a Token moves out of a Region.

  A Token moves whenever its x, y, elevation, width, height, depth, shape, or level is changed.

  #### See

  [foundry.documents.types.RegionTokenMoveOutEvent](../types/foundry.documents.types.RegionTokenMoveOutEvent.md)
* ##### `Readonly`TOKEN\_MOVE\_WITHIN: "tokenMoveWithin"

  Triggered when a Token moves within a Region.

  A token moves whenever its x, y, elevation, width, height, depth, shape, or level is changed.

  #### See

  [foundry.documents.types.RegionTokenMoveWithinEvent](../types/foundry.documents.types.RegionTokenMoveWithinEvent.md)
* ##### `Readonly`TOKEN\_ROUND\_END: "tokenRoundEnd"

  Triggered when a Token ends the Combat round in a Region.

  #### See

  [foundry.documents.types.RegionTokenRoundEndEvent](../types/foundry.documents.types.RegionTokenRoundEndEvent.md)
* ##### `Readonly`TOKEN\_ROUND\_START: "tokenRoundStart"

  Triggered when a Token starts the Combat round in a Region.

  #### See

  [foundry.documents.types.RegionTokenRoundStartEvent](../types/foundry.documents.types.RegionTokenRoundStartEvent.md)
* ##### `Readonly`TOKEN\_TURN\_END: "tokenTurnEnd"

  Triggered when a Token ends its Combat turn in a Region.

  #### See

  [foundry.documents.types.RegionTokenTurnEndEvent](../types/foundry.documents.types.RegionTokenTurnEndEvent.md)
* ##### `Readonly`TOKEN\_TURN\_START: "tokenTurnStart"

  Triggered when a Token starts its Combat turn in a Region.

  #### See

  [foundry.documents.types.RegionTokenTurnStartEvent](../types/foundry.documents.types.RegionTokenTurnStartEvent.md)