---
title: "findSplice | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/primitives.Array.findSplice.html"
category: "functions"
---

# Function findSplice

* findSplice<[T](#findsplicet)>(find: (element: [T](#findsplicet)) => boolean, replace?: [T](#findsplicet)): [T](#findsplicet) | null

  Find an element within the Array and remove it from the array

  #### Type Parameters

  + T

  #### Parameters

  + find: (element: [T](#findsplicet)) => boolean

    A function to use as input to findIndex
  + `Optional`replace: [T](#findsplicet)

    A replacement for the spliced element

  #### Returns [T](#findsplicet) | null

  The replacement element, the removed element, or null if no element was found.

  #### See

  Array#splice