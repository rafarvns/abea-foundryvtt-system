---
title: "lineSegmentIntersection | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.lineSegmentIntersection.html"
category: "functions"
---

# Function lineSegmentIntersection

* lineSegmentIntersection(  
  Â Â Â Â a: Point,  
  Â Â Â Â b: Point,  
  Â Â Â Â c: Point,  
  Â Â Â Â d: Point,  
  Â Â Â Â epsilon?: number,  
  ): [LineIntersection](../interfaces/foundry.utils.types.LineIntersection.md) | null

  An internal helper method for computing the intersection between two finite line segments.
  Adapted from <http://paulbourke.net/geometry/pointlineplane/>

  #### Parameters

  + a: Point

    The first endpoint of segment AB
  + b: Point

    The second endpoint of segment AB
  + c: Point

    The first endpoint of segment CD
  + d: Point

    The second endpoint of segment CD
  + `Optional`epsilon: number = 1e-8

    A small epsilon which defines a tolerance for near-equality

  #### Returns [LineIntersection](../interfaces/foundry.utils.types.LineIntersection.md) | null

  An intersection point, or null if no intersection occurred