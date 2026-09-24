---
title: "lineLineIntersection | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.lineLineIntersection.html"
category: "functions"
---

# Function lineLineIntersection

* lineLineIntersection(  
  Â Â Â Â a: Point,  
  Â Â Â Â b: Point,  
  Â Â Â Â c: Point,  
  Â Â Â Â d: Point,  
  Â Â Â Â options?: { t1?: boolean },  
  ): [LineIntersection](../interfaces/foundry.utils.types.LineIntersection.md) | null

  An internal helper method for computing the intersection between two infinite-length lines.
  Adapted from <http://paulbourke.net/geometry/pointlineplane/>.

  #### Parameters

  + a: Point

    The first endpoint of segment AB
  + b: Point

    The second endpoint of segment AB
  + c: Point

    The first endpoint of segment CD
  + d: Point

    The second endpoint of segment CD
  + `Optional`options: { t1?: boolean } = {}

    Options which affect the intersection test

    - ##### `Optional`t1?: boolean

      Return the optional vector distance from C to D on CD

  #### Returns [LineIntersection](../interfaces/foundry.utils.types.LineIntersection.md) | null

  An intersection point, or null if no intersection occurred