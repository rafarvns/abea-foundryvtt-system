---
title: "lineSegmentIntersects | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.lineSegmentIntersects.html"
category: "functions"
---

# Function lineSegmentIntersects

* lineSegmentIntersects(a: Point, b: Point, c: Point, d: Point): boolean

  Quickly test whether the line segment AB intersects with the line segment CD.
  This method does not determine the point of intersection, for that use lineLineIntersection.

  #### Parameters

  + a: Point

    The first endpoint of segment AB
  + b: Point

    The second endpoint of segment AB
  + c: Point

    The first endpoint of segment CD
  + d: Point

    The second endpoint of segment CD

  #### Returns boolean

  Do the line segments intersect?