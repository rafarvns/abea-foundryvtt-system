---
title: "ParticleGeneratorArea | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/types/foundry.canvas.animation.types.ParticleGeneratorArea.html"
category: "types"
---

# Type Alias ParticleGeneratorArea

ParticleGeneratorArea:  
Â Â Â Â | PIXI.Rectangle  
Â Â Â Â | [PolygonTree](../classes/foundry.data.PolygonTree.md)  
Â Â Â Â | [BaseShapeData](../classes/foundry.data.BaseShapeData.md)  
Â Â Â Â | [ParticleGeneratorShapeDataSource](../interfaces/foundry.canvas.animation.types.ParticleGeneratorShapeDataSource.md)  
Â Â Â Â | [ParticleGeneratorPoint](foundry.canvas.animation.types.ParticleGeneratorPoint.md)  
Â Â Â Â | { height: number; width: number; x: number; y: number }  
Â Â Â Â | { radius: number | number[]; x: number; y: number }  
Â Â Â Â | { innerRadius: number; outerRadius: number; x: number; y: number }  
Â Â Â Â | { from: [ParticleGeneratorPoint](foundry.canvas.animation.types.ParticleGeneratorPoint.md); to: [ParticleGeneratorPoint](foundry.canvas.animation.types.ParticleGeneratorPoint.md) }  
Â Â Â Â | { points: [ParticleGeneratorPointList](foundry.canvas.animation.types.ParticleGeneratorPointList.md); shape?: "points" }  
Â Â Â Â | {  
Â Â Â Â Â Â Â Â path: [ParticleGeneratorPolylineDefinition](foundry.canvas.animation.types.ParticleGeneratorPolylineDefinition.md);  
Â Â Â Â Â Â Â Â shape?: "path" | "polyline";  
Â Â Â Â }  
Â Â Â Â | { points: [ParticleGeneratorPolylineDefinition](foundry.canvas.animation.types.ParticleGeneratorPolylineDefinition.md); shape: "polyline" }  
Â Â Â Â | {  
Â Â Â Â Â Â Â Â affectRotation?: boolean;  
Â Â Â Â Â Â Â Â holeScale?: number;  
Â Â Â Â Â Â Â Â maxAngle?: number;  
Â Â Â Â Â Â Â Â minAngle?: number;  
Â Â Â Â Â Â Â Â radiusX: number;  
Â Â Â Â Â Â Â Â radiusY: number;  
Â Â Â Â Â Â Â Â rotation?: number;  
Â Â Â Â Â Â Â Â shape?: "ellipse";  
Â Â Â Â Â Â Â Â shapeRotation?: number;  
Â Â Â Â Â Â Â Â x: number;  
Â Â Â Â Â Â Â Â y: number;  
Â Â Â Â }