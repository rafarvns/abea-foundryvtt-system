---
title: "AnalysisDataValue | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.audio.AnalysisDataValue.html"
category: "interfaces"
---

# Interface AnalysisDataValue

interface AnalysisDataValue {  
Â Â Â Â [active](#active): boolean;  
Â Â Â Â [bands](#bands): { all: number; bass: number; mid: number; treble: number };  
Â Â Â Â [dataArray](#dataarray): Float32Array | null;  
Â Â Â Â [db](#db): { all: number; bass: number; mid: number; treble: number };  
Â Â Â Â [keepAlive](#keepalive): boolean;  
Â Â Â Â [lastUsed](#lastused): number;  
Â Â Â Â [node](#node): AnalyserNode | null;  
}

##### Index

### Properties

[active](#active)
[bands](#bands)
[dataArray](#dataarray)
[db](#db)
[keepAlive](#keepalive)
[lastUsed](#lastused)
[node](#node)

## Properties

### active

active: boolean

Whether the analyzer is currently active.

### bands

bands: { all: number; bass: number; mid: number; treble: number }

Normalized [0,1] values for the same bands.

#### Type Declaration

* ##### all: number

  Normalized amplitude for the entire audible range.
* ##### bass: number

  Normalized amplitude for low frequencies.
* ##### mid: number

  Normalized amplitude for midrange frequencies.
* ##### treble: number

  Normalized amplitude for high frequencies.

### dataArray

dataArray: Float32Array | null

The FFT frequency data buffer used by the AnalyserNode.

### db

db: { all: number; bass: number; mid: number; treble: number }

Raw average decibel values for each frequency band.

#### Type Declaration

* ##### all: number

  Average dB in ~20-20000 Hz.
* ##### bass: number

  Average dB in ~20-200 Hz.
* ##### mid: number

  Average dB in ~200-2000 Hz.
* ##### treble: number

  Average dB in ~2000-8000 Hz.

### keepAlive

keepAlive: boolean

If true, the analyzer remains active and will not be disabled after inactivity.

### lastUsed

lastUsed: number

The timestamp when data was last requested.

### node

node: AnalyserNode | null

The AnalyserNode for this context, or null if inactive.