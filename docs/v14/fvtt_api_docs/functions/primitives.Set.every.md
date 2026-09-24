---
title: "every | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/primitives.Set.every.html"
category: "functions"
---

# Function every

* every<[T](#everyt)>(  
  Â Â Â Â this: Set<[T](#everyt)>,  
  Â Â Â Â test: (element: [T](#everyt), index: number, set: Set<[T](#everyt)>) => boolean,  
  ): boolean

  Test whether every element in this Set satisfies a certain test criterion.

  #### Type Parameters

  + T

  #### Parameters

  + this: Set<[T](#everyt)>
  + test: (element: [T](#everyt), index: number, set: Set<[T](#everyt)>) => boolean

    The test criterion to apply.

  #### Returns boolean

  Does every element in the set satisfy the test criterion?