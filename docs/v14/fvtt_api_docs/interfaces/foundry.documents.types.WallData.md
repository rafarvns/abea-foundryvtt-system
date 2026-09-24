---
title: "WallData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.WallData.html"
category: "interfaces"
---

# Interface WallData

interface WallData {  
Â Â Â Â [\_id](#_id): string | null;  
Â Â Â Â [c](#c): number[];  
Â Â Â Â [dir](#dir)?: number;  
Â Â Â Â [door](#door)?: number;  
Â Â Â Â [doorSound](#doorsound)?: string;  
Â Â Â Â [ds](#ds)?: number;  
Â Â Â Â [flags](#flags): [DocumentFlags](../types/foundry.data.types.DocumentFlags.md);  
Â Â Â Â [light](#light)?: number;  
Â Â Â Â [move](#move)?: number;  
Â Â Â Â [sight](#sight)?: number;  
Â Â Â Â [sound](#sound)?: number;  
Â Â Â Â [threshold](#threshold): [WallThresholdData](foundry.documents.types.WallThresholdData.md);  
}

##### Index

### Properties

[\_id](#_id)
[c](#c)
[dir?](#dir)
[door?](#door)
[doorSound?](#doorsound)
[ds?](#ds)
[flags](#flags)
[light?](#light)
[move?](#move)
[sight?](#sight)
[sound?](#sound)
[threshold](#threshold)

## Properties

### \_id

\_id: string | null

The \_id which uniquely identifies the embedded Wall document

### c

c: number[]

The wall coordinates, a length-4 array of finite numbers [x0,y0,x1,y1]

### `Optional`dir

dir?: number

The direction of effect imposed by this wall

### `Optional`door

door?: number

The type of door which this wall contains, if any

### `Optional`doorSound

doorSound?: string

The type of door sound to play, if any

### `Optional`ds

ds?: number

The state of the door this wall contains, if any

### flags

flags: [DocumentFlags](../types/foundry.data.types.DocumentFlags.md)

An object of optional key/value flags

### `Optional`light

light?: number

The illumination restriction type of this wall

### `Optional`move

move?: number

The movement restriction type of this wall

### `Optional`sight

sight?: number

The visual restriction type of this wall

### `Optional`sound

sound?: number

The auditory restriction type of this wall

### threshold

threshold: [WallThresholdData](foundry.documents.types.WallThresholdData.md)

Configuration of threshold data for this wall