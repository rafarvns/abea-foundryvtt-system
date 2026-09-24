---
title: "quadraticIntersection | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.quadraticIntersection.html"
category: "functions"
---

# Function quadraticIntersection

* quadraticIntersection(  
  Â Â Â Â p0: Point,  
  Â Â Â Â p1: Point,  
  Â Â Â Â center: Point,  
  Â Â Â Â radius: number,  
  Â Â Â Â epsilon?: number,  
  ): [LineIntersection](../interfaces/foundry.utils.types.LineIntersection.md)[]

  Determine the points of intersection between a line segment (p0,p1) and a circle.
  There will be zero, one, or two intersections
  See <https://math.stackexchange.com/a/311956>.

  #### Parameters

  + p0: Point

    The initial point of the line segment
  + p1: Point

    The terminal point of the line segment
  + center: Point

    The center of the circle
  + radius: number

    The radius of the circle
  + `Optional`epsilon: number = 0

    A small tolerance for floating point precision

  #### Returns [LineIntersection](../interfaces/foundry.utils.types.LineIntersection.md)[]