---
title: "closestPointToPath | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.closestPointToPath.html"
category: "functions"
---

# Function closestPointToPath

* closestPointToPath(c: Point, points: number[] | Point[], close: boolean): Point

  Find a point that is closest to the path (open or closed).

  #### Parameters

  + c: Point

    The reference point C
  + points: number[] | Point[]

    The points of the path P, which must not be empty
  + close: boolean

    If true, the edge from the last to the first point of the path is tested

  #### Returns Point

  The closest point to C on the path P

  #### See

  <https://en.wikipedia.org/wiki/Distance_from_a_point_to_a_line#Line_defined_by_two_points>