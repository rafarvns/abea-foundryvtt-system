---
title: "PlaceablesLayerOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.canvas.layers.types.PlaceablesLayerOptions.html"
category: "interfaces"
---

# Interface PlaceablesLayerOptions

interface PlaceablesLayerOptions {  
Â Â Â Â [confirmBeforeCreation](#confirmbeforecreation): boolean | string[] | (() => boolean);  
Â Â Â Â [confirmDeleteKey](#confirmdeletekey): boolean;  
Â Â Â Â [controllableObjects](#controllableobjects): boolean;  
Â Â Â Â [controlObjectAfterCreation](#controlobjectaftercreation): boolean | string[] | (() => boolean);  
Â Â Â Â [keyboardMovableObjects](#keyboardmovableobjects): boolean;  
Â Â Â Â [objectClass](#objectclass): [PlaceableObject](../classes/foundry.canvas.placeables.PlaceableObject.md);  
Â Â Â Â [quadtree](#quadtree): boolean;  
Â Â Â Â [rotatableObjects](#rotatableobjects): boolean;  
}

##### Index

### Properties

[confirmBeforeCreation](#confirmbeforecreation)
[confirmDeleteKey](#confirmdeletekey)
[controllableObjects](#controllableobjects)
[controlObjectAfterCreation](#controlobjectaftercreation)
[keyboardMovableObjects](#keyboardmovableobjects)
[objectClass](#objectclass)
[quadtree](#quadtree)
[rotatableObjects](#rotatableobjects)

## Properties

### confirmBeforeCreation

confirmBeforeCreation: boolean | string[] | (() => boolean)

Confirm before creating the drawn object (for the given tools)?

### confirmDeleteKey

confirmDeleteKey: boolean

Confirm placeable object deletion with a dialog?

### controllableObjects

controllableObjects: boolean

Can placeable objects in this layer be controlled?

### controlObjectAfterCreation

controlObjectAfterCreation: boolean | string[] | (() => boolean)

Control the drawn object that has been created (for the given tools)?

### keyboardMovableObjects

keyboardMovableObjects: boolean

Can placeable objects in this layer be moved via keyboard?

### objectClass

objectClass: [PlaceableObject](../classes/foundry.canvas.placeables.PlaceableObject.md)

The class used to represent an object on this layer.

### quadtree

quadtree: boolean

Does this layer use a quadtree to track object positions?

### rotatableObjects

rotatableObjects: boolean

Can placeable objects in this layer be rotated?