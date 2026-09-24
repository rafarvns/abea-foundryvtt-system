---
title: "ApplicationClickAction | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/types/foundry.applications.types.ApplicationClickAction.html"
category: "types"
---

# Type Alias ApplicationClickAction

ApplicationClickAction: (  
Â Â Â Â event: PointerEvent,  
Â Â Â Â target: HTMLElement,  
) => void | Promise<void>

An on-click action supported by the Application. Run in the context of
a [foundry.applications.api.HandlebarsApplicationMixin](../functions/foundry.applications.api.HandlebarsApplicationMixin.md).

#### Type Declaration

* + (event: PointerEvent, target: HTMLElement): void | Promise<void>
  + #### Parameters

    - event: PointerEvent

      The originating click event
    - target: HTMLElement

      The capturing HTML element which defines the [data-action]

    #### Returns void | Promise<void>