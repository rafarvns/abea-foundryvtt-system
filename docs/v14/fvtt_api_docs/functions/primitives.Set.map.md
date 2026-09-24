---
title: "map | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/primitives.Set.map.html"
category: "functions"
---

# Function map

* map<[T](#mapt), [U](#mapu)>(  
  Â Â Â Â this: Set<[T](#mapt)>,  
  Â Â Â Â transform: (element: [T](#mapt), index: number, set: Set<[T](#mapt)>) => [U](#mapu),  
  ): Set<[U](#mapu)>

  Create a new Set where every element is modified by a provided transformation function.

  #### Type Parameters

  + T
  + U

  #### Parameters

  + this: Set<[T](#mapt)>

    Set
  + transform: (element: [T](#mapt), index: number, set: Set<[T](#mapt)>) => [U](#mapu)

    The transformation function to apply.

  #### Returns Set<[U](#mapu)>

  A new Set of equal size containing transformed elements.

  #### See

  Array#map