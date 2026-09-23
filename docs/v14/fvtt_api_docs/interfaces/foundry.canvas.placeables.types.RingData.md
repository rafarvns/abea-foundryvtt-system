---
title: "RingData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.canvas.placeables.types.RingData.html"
category: "interfaces"
---

# Interface RingData

Represents the ring- and background-related properties for a given size

interface RingData {  
Â Â Â Â [bkgName](#bkgname): string | undefined;  
Â Â Â Â [colorBand](#colorband): [RingColorBand](foundry.canvas.placeables.types.RingColorBand.md) | undefined;  
Â Â Â Â [defaultBackgroundColorLittleEndian](#defaultbackgroundcolorlittleendian): number | null;  
Â Â Â Â [defaultRingColorLittleEndian](#defaultringcolorlittleendian): number | null;  
Â Â Â Â [maskName](#maskname): string | undefined;  
Â Â Â Â [ringName](#ringname): string | undefined;  
Â Â Â Â [subjectScaleAdjustment](#subjectscaleadjustment): number | null;  
}

##### Index

### Properties

[bkgName](#bkgname)
[colorBand](#colorband)
[defaultBackgroundColorLittleEndian](#defaultbackgroundcolorlittleendian)
[defaultRingColorLittleEndian](#defaultringcolorlittleendian)
[maskName](#maskname)
[ringName](#ringname)
[subjectScaleAdjustment](#subjectscaleadjustment)

## Properties

### bkgName

bkgName: string | undefined

The filename of the background asset, if available

### colorBand

colorBand: [RingColorBand](foundry.canvas.placeables.types.RingColorBand.md) | undefined

Defines color stops for the ring gradient, if applicable

### defaultBackgroundColorLittleEndian

defaultBackgroundColorLittleEndian: number | null

Default color for the background in little-endian BBGGRR format, or null if not set

### defaultRingColorLittleEndian

defaultRingColorLittleEndian: number | null

Default color for the ring in little-endian BBGGRR format, or null if not set

### maskName

maskName: string | undefined

The filename of the mask asset, if available

### ringName

ringName: string | undefined

The filename of the ring asset, if available

### subjectScaleAdjustment

subjectScaleAdjustment: number | null

Scaling factor to adjust how the subject texture fits within the ring, or null if unavailable