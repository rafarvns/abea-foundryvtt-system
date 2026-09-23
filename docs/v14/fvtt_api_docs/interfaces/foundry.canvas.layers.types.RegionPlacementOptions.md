---
title: "RegionPlacementOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.canvas.layers.types.RegionPlacementOptions.html"
category: "interfaces"
---

# Interface RegionPlacementOptions

interface RegionPlacementOptions {  
Â Â Â Â [allowEmpty](#allowempty)?: boolean;  
Â Â Â Â [allowRotation](#allowrotation)?: boolean;  
Â Â Â Â [attachToToken](#attachtotoken)?: boolean;  
Â Â Â Â [create](#create)?: boolean;  
Â Â Â Â [createOptions](#createoptions)?: Partial<Omit<DatabaseCreateOperation, "parent">>;  
Â Â Â Â [onChange](#onchange)?: (  
Â Â Â Â Â Â Â Â args: {  
Â Â Â Â Â Â Â Â Â Â Â Â document: RegionDocument;  
Â Â Â Â Â Â Â Â Â Â Â Â preview: Region;  
Â Â Â Â Â Â Â Â Â Â Â Â regionCount: number;  
Â Â Â Â Â Â Â Â Â Â Â Â regionIndex: number;  
Â Â Â Â Â Â Â Â Â Â Â Â shape: BaseShapeData;  
Â Â Â Â Â Â Â Â Â Â Â Â shapeCount: number;  
Â Â Â Â Â Â Â Â Â Â Â Â shapeIndex: number;  
Â Â Â Â Â Â Â Â },  
Â Â Â Â ) => void;  
Â Â Â Â [onMove](#onmove)?: (  
Â Â Â Â Â Â Â Â args: {  
Â Â Â Â Â Â Â Â Â Â Â Â document: RegionDocument;  
Â Â Â Â Â Â Â Â Â Â Â Â event: FederatedEvent;  
Â Â Â Â Â Â Â Â Â Â Â Â position: Point;  
Â Â Â Â Â Â Â Â Â Â Â Â preview: Region;  
Â Â Â Â Â Â Â Â Â Â Â Â regionCount: number;  
Â Â Â Â Â Â Â Â Â Â Â Â regionIndex: number;  
Â Â Â Â Â Â Â Â Â Â Â Â shape: BaseShapeData;  
Â Â Â Â Â Â Â Â Â Â Â Â shapeCount: number;  
Â Â Â Â Â Â Â Â Â Â Â Â shapeIndex: number;  
Â Â Â Â Â Â Â Â Â Â Â Â snap: boolean;  
Â Â Â Â Â Â Â Â },  
Â Â Â Â ) => boolean  
Â Â Â Â | void;  
Â Â Â Â [onRotate](#onrotate)?: (  
Â Â Â Â Â Â Â Â args: {  
Â Â Â Â Â Â Â Â Â Â Â Â document: RegionDocument;  
Â Â Â Â Â Â Â Â Â Â Â Â event: WheelEvent;  
Â Â Â Â Â Â Â Â Â Â Â Â precise: boolean;  
Â Â Â Â Â Â Â Â Â Â Â Â preview: Region;  
Â Â Â Â Â Â Â Â Â Â Â Â regionCount: number;  
Â Â Â Â Â Â Â Â Â Â Â Â regionIndex: number;  
Â Â Â Â Â Â Â Â Â Â Â Â shape: BaseShapeData;  
Â Â Â Â Â Â Â Â Â Â Â Â shapeCount: number;  
Â Â Â Â Â Â Â Â Â Â Â Â shapeIndex: number;  
Â Â Â Â Â Â Â Â },  
Â Â Â Â ) => boolean  
Â Â Â Â | void;  
Â Â Â Â [preCommit](#precommit)?: (documents: readonly RegionDocument[]) => void | Promise<any>;  
Â Â Â Â [preConfirm](#preconfirm)?: (  
Â Â Â Â Â Â Â Â args: {  
Â Â Â Â Â Â Â Â Â Â Â Â document: RegionDocument;  
Â Â Â Â Â Â Â Â Â Â Â Â event: FederatedEvent;  
Â Â Â Â Â Â Â Â Â Â Â Â regionCount: number;  
Â Â Â Â Â Â Â Â Â Â Â Â regionIndex: number;  
Â Â Â Â Â Â Â Â Â Â Â Â shape: BaseShapeData;  
Â Â Â Â Â Â Â Â Â Â Â Â shapeCount: number;  
Â Â Â Â Â Â Â Â Â Â Â Â shapeIndex: number;  
Â Â Â Â Â Â Â Â },  
Â Â Â Â ) => boolean  
Â Â Â Â | void;  
Â Â Â Â [preSkip](#preskip)?: (  
Â Â Â Â Â Â Â Â args: {  
Â Â Â Â Â Â Â Â Â Â Â Â document: RegionDocument;  
Â Â Â Â Â Â Â Â Â Â Â Â event: FederatedEvent;  
Â Â Â Â Â Â Â Â Â Â Â Â regionCount: number;  
Â Â Â Â Â Â Â Â Â Â Â Â regionIndex: number;  
Â Â Â Â Â Â Â Â Â Â Â Â shape: BaseShapeData;  
Â Â Â Â Â Â Â Â Â Â Â Â shapeCount: number;  
Â Â Â Â Â Â Â Â Â Â Â Â shapeIndex: number;  
Â Â Â Â Â Â Â Â },  
Â Â Â Â ) => boolean  
Â Â Â Â | void;  
}

##### Index

### Properties

[allowEmpty?](#allowempty)
[allowRotation?](#allowrotation)
[attachToToken?](#attachtotoken)
[create?](#create)
[createOptions?](#createoptions)
[onChange?](#onchange)
[onMove?](#onmove)
[onRotate?](#onrotate)
[preCommit?](#precommit)
[preConfirm?](#preconfirm)
[preSkip?](#preskip)

## Properties

### `Optional`allowEmpty

allowEmpty?: boolean

Create/return an empty Region if all shapes are skipped?
Default: `false`.

### `Optional`allowRotation

allowRotation?: boolean

Allow rotation of the Region? Default: `true`.

### `Optional`attachToToken

attachToToken?: boolean

Attach the Region to Tokens? If true, the initial elevation range
passed in `data` is relative to the attached Token. Default: `false`.

### `Optional`create

create?: boolean

Create the Region? If false, the preview document is returned.
Default: `true`. Non-GMs cannot create Regions while the game is paused.

### `Optional`createOptions

createOptions?: Partial<Omit<DatabaseCreateOperation, "parent">>

Optional creation options.
By default the creation option `controlObject` is true.

### `Optional`onChange

onChange?: (  
Â Â Â Â args: {  
Â Â Â Â Â Â Â Â document: RegionDocument;  
Â Â Â Â Â Â Â Â preview: Region;  
Â Â Â Â Â Â Â Â regionCount: number;  
Â Â Â Â Â Â Â Â regionIndex: number;  
Â Â Â Â Â Â Â Â shape: BaseShapeData;  
Â Â Â Â Â Â Â Â shapeCount: number;  
Â Â Â Â Â Â Â Â shapeIndex: number;  
Â Â Â Â },  
) => void

Called when the Region shape that is placed has changed.

### `Optional`onMove

onMove?: (  
Â Â Â Â args: {  
Â Â Â Â Â Â Â Â document: RegionDocument;  
Â Â Â Â Â Â Â Â event: FederatedEvent;  
Â Â Â Â Â Â Â Â position: Point;  
Â Â Â Â Â Â Â Â preview: Region;  
Â Â Â Â Â Â Â Â regionCount: number;  
Â Â Â Â Â Â Â Â regionIndex: number;  
Â Â Â Â Â Â Â Â shape: BaseShapeData;  
Â Â Â Â Â Â Â Â shapeCount: number;  
Â Â Â Â Â Â Â Â shapeIndex: number;  
Â Â Â Â Â Â Â Â snap: boolean;  
Â Â Â Â },  
) => boolean  
| void

Called when the pointer is moved and after starting the placement of the next shape on confirm and skip. This
callback replaces the default behavior if false is returned. If false is returned, the callback should modify
the passed `shape` and may additionally modify `preview.document` and set the render flags on `preview`
corresponding to the applied changes.

### `Optional`onRotate

onRotate?: (  
Â Â Â Â args: {  
Â Â Â Â Â Â Â Â document: RegionDocument;  
Â Â Â Â Â Â Â Â event: WheelEvent;  
Â Â Â Â Â Â Â Â precise: boolean;  
Â Â Â Â Â Â Â Â preview: Region;  
Â Â Â Â Â Â Â Â regionCount: number;  
Â Â Â Â Â Â Â Â regionIndex: number;  
Â Â Â Â Â Â Â Â shape: BaseShapeData;  
Â Â Â Â Â Â Â Â shapeCount: number;  
Â Â Â Â Â Â Â Â shapeIndex: number;  
Â Â Â Â },  
) => boolean  
| void

Called when the mouse wheel is scrolled. This callback replaces the default behavior if false is returned.
If false is returned, the callback should modify the `shape` and may additionally modify `preview.document`
and set the render flags on `preview` corresponding to the applied changes.

### `Optional`preCommit

preCommit?: (documents: readonly RegionDocument[]) => void | Promise<any>

Called at the end of the workflow before the Region documents are created/returned. This callback may return
a falsely value other than undefined to prevent the Regions from being created/returned.

### `Optional`preConfirm

preConfirm?: (  
Â Â Â Â args: {  
Â Â Â Â Â Â Â Â document: RegionDocument;  
Â Â Â Â Â Â Â Â event: FederatedEvent;  
Â Â Â Â Â Â Â Â regionCount: number;  
Â Â Â Â Â Â Â Â regionIndex: number;  
Â Â Â Â Â Â Â Â shape: BaseShapeData;  
Â Â Â Â Â Â Â Â shapeCount: number;  
Â Â Â Â Â Â Â Â shapeIndex: number;  
Â Â Â Â },  
) => boolean  
| void

Called before the confirmation (left-click) of a shape placement. This callback may return false to prevent
the placement of the Region shape and display a warning.

### `Optional`preSkip

preSkip?: (  
Â Â Â Â args: {  
Â Â Â Â Â Â Â Â document: RegionDocument;  
Â Â Â Â Â Â Â Â event: FederatedEvent;  
Â Â Â Â Â Â Â Â regionCount: number;  
Â Â Â Â Â Â Â Â regionIndex: number;  
Â Â Â Â Â Â Â Â shape: BaseShapeData;  
Â Â Â Â Â Â Â Â shapeCount: number;  
Â Â Â Â Â Â Â Â shapeIndex: number;  
Â Â Â Â },  
) => boolean  
| void

Called before skipping (right-click) of a shape placement. This callback may return false to prevent
skipping of the Region shape and display a warning.