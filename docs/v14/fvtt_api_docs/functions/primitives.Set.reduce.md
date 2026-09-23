---
title: "reduce | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/primitives.Set.reduce.html"
category: "functions"
---

# Function reduce

* reduce<[T](#reducet), [U](#reduceu)>(  
  Â Â Â Â this: Set<[T](#reducet)>,  
  Â Â Â Â reducer: (accum: [U](#reduceu), element: [T](#reducet), index: number, set: Set<[T](#reducet)>) => [U](#reduceu),  
  Â Â Â Â initial?: [U](#reduceu),  
  ): [U](#reduceu)

  Create a new value with elements that are filtered and transformed by a provided reducer function.

  #### Type Parameters

  + T
  + U

  #### Parameters

  + this: Set<[T](#reducet)>
  + reducer: (accum: [U](#reduceu), element: [T](#reducet), index: number, set: Set<[T](#reducet)>) => [U](#reduceu)

    A reducer function applied to each value.
  + `Optional`initial: [U](#reduceu)

    The initial value of the returned accumulator.

  #### Returns [U](#reduceu)

  The final value of the accumulator.

  #### See

  Array#reduce