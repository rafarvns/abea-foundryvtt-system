---
title: "circleCircleIntersects | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.circleCircleIntersects.html"
category: "functions"
---

# Function circleCircleIntersects

* circleCircleIntersects(  
  Â Â Â Â x0: number,  
  Â Â Â Â y0: number,  
  Â Â Â Â r0: number,  
  Â Â Â Â x1: number,  
  Â Â Â Â y1: number,  
  Â Â Â Â r1: number,  
  ): boolean

  Test whether two circles (with position and radius) intersect.

  #### Parameters

  + x0: number

    x center coordinate of circle A.
  + y0: number

    y center coordinate of circle A.
  + r0: number

    radius of circle A.
  + x1: number

    x center coordinate of circle B.
  + y1: number

    y center coordinate of circle B.
  + r1: number

    radius of circle B.

  #### Returns boolean

  True if the two circles intersect, false otherwise.