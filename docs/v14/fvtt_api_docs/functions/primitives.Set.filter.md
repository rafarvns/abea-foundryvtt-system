---
title: "filter | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/primitives.Set.filter.html"
category: "functions"
---

# Function filter

* filter<[T](#filtert)>(  
  Â Â Â Â this: Set<[T](#filtert)>,  
  Â Â Â Â test: (element: [T](#filtert), index: number, set: Set) => boolean,  
  ): Set<[T](#filtert)>

  Filter this set to create a subset of elements which satisfy a certain test criterion.

  #### Type Parameters

  + T

  #### Parameters

  + this: Set<[T](#filtert)>
  + test: (element: [T](#filtert), index: number, set: Set) => boolean

    The test criterion to apply.

  #### Returns Set<[T](#filtert)>

  A new Set containing only elements which satisfy the test criterion.

  #### See

  Array#filter