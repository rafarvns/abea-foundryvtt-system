---
title: "lineCircleIntersection | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.lineCircleIntersection.html"
category: "functions"
---

# Function lineCircleIntersection

* lineCircleIntersection(  
  Â Â Â Â a: Point,  
  Â Â Â Â b: Point,  
  Â Â Â Â center: Point,  
  Â Â Â Â radius: number,  
  Â Â Â Â epsilon?: number,  
  ): [LineCircleIntersection](../interfaces/foundry.utils.types.LineCircleIntersection.md)

  Determine the intersection between a line segment and a circle.

  #### Parameters

  + a: Point

    The first vertex of the segment
  + b: Point

    The second vertex of the segment
  + center: Point

    The center of the circle
  + radius: number

    The radius of the circle
  + epsilon: number = 1e-8

    A small tolerance for floating point precision

  #### Returns [LineCircleIntersection](../interfaces/foundry.utils.types.LineCircleIntersection.md)

  The intersection of the segment AB with the circle