---
title: "some | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/primitives.Set.some.html"
category: "functions"
---

# Function some

* some<[T](#somet)>(  
  Â Â Â Â this: Set<[T](#somet)>,  
  Â Â Â Â test: (element: [T](#somet), index: number, set: Set<[T](#somet)>) => boolean,  
  ): boolean

  Test whether any element in this Set satisfies a certain test criterion.

  #### Type Parameters

  + T

  #### Parameters

  + this: Set<[T](#somet)>
  + test: (element: [T](#somet), index: number, set: Set<[T](#somet)>) => boolean

    The test criterion to apply.

  #### Returns boolean

  Does any element in the set satisfy the test criterion?

  #### See

  Array#some