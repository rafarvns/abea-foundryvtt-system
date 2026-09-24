---
title: "LineCircleIntersection | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.utils.types.LineCircleIntersection.html"
category: "interfaces"
---

# Interface LineCircleIntersection

interface LineCircleIntersection {  
Â Â Â Â [aInside](#ainside): boolean;  
Â Â Â Â [bInside](#binside): boolean;  
Â Â Â Â [contained](#contained): boolean;  
Â Â Â Â [intersections](#intersections): [Point](foundry.types.Point.md)[];  
Â Â Â Â [outside](#outside): boolean;  
Â Â Â Â [tangent](#tangent): boolean;  
}

##### Index

### Properties

[aInside](#ainside)
[bInside](#binside)
[contained](#contained)
[intersections](#intersections)
[outside](#outside)
[tangent](#tangent)

## Properties

### aInside

aInside: boolean

Is point A inside the circle?

### bInside

bInside: boolean

Is point B inside the circle?

### contained

contained: boolean

Is the segment AB contained within the circle?

### intersections

intersections: [Point](foundry.types.Point.md)[]

Intersection points: zero, one, or two

### outside

outside: boolean

Is the segment AB fully outside the circle?

### tangent

tangent: boolean

Is the segment AB tangent to the circle?