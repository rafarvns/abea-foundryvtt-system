---
title: "pathCircleIntersects | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.pathCircleIntersects.html"
category: "functions"
---

# Function pathCircleIntersects

* pathCircleIntersects(  
  Â Â Â Â points: number[] | Point[],  
  Â Â Â Â close: boolean,  
  Â Â Â Â center: Point,  
  Â Â Â Â radius: number,  
  ): boolean

  Test whether the circle given by the center and radius intersects the path (open or closed).

  #### Parameters

  + points: number[] | Point[]

    The points of the path
  + close: boolean

    If true, the edge from the last to the first point of the path is tested
  + center: Point

    The center of the circle
  + radius: number

    The radius of the circle

  #### Returns boolean

  Does the circle intersect the path?