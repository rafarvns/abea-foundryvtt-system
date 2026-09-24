---
title: "isSubset | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/primitives.Set.isSubset.html"
category: "functions"
---

# Function isSubset

* isSubset<[T](#issubsett)>(this: Set<[T](#issubsett)>, other: Set<unknown>): boolean

  Test whether this set is a subset of some other set.
  A set is a subset if all its members are also present in the other set.

  #### Type Parameters

  + T

  #### Parameters

  + this: Set<[T](#issubsett)>
  + other: Set<unknown>

    Some other set that may be a subset of this one

  #### Returns boolean

  Is the other set a subset of this one?

  #### Deprecated

  since v13