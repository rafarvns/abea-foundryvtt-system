---
title: "polygonCentroid | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.polygonCentroid.html"
category: "functions"
---

# Function polygonCentroid

* polygonCentroid(points: number[] | Point[]): Point

  Calculate the centroid non-self-intersecting closed polygon.
  If the polygon's area is zero, the first point of the polygon is returned, if it has at least on point,
  otherwise the point `{x: 0, y: 0}` is returned.

  #### Parameters

  + points: number[] | Point[]

    The points of the polygon

  #### Returns Point

  The centroid of the polygon

  #### See

  <https://en.wikipedia.org/wiki/Centroid#Of_a_polygon>