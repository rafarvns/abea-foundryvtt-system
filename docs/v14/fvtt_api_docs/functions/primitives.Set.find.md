---
title: "find | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/primitives.Set.find.html"
category: "functions"
---

# Function find

* find<[T](#findt)>(  
  Â Â Â Â this: Set<[T](#findt)>,  
  Â Â Â Â test: (element: [T](#findt), index: number, set: Set<[T](#findt)>) => boolean,  
  ): [T](#findt) | undefined

  Find the first element in this set which satisfies a certain test criterion.

  #### Type Parameters

  + T

  #### Parameters

  + this: Set<[T](#findt)>
  + test: (element: [T](#findt), index: number, set: Set<[T](#findt)>) => boolean

    The test criterion to apply.

  #### Returns [T](#findt) | undefined

  The first element in the set which satisfies the test criterion, or undefined.

  #### See

  Array#find