---
title: "JournalEntryPageVideoData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.JournalEntryPageVideoData.html"
category: "interfaces"
---

# Interface JournalEntryPageVideoData

interface JournalEntryPageVideoData {  
Â Â Â Â [autoplay](#autoplay): boolean;  
Â Â Â Â [controls](#controls): boolean;  
Â Â Â Â [height](#height): number;  
Â Â Â Â [loop](#loop): boolean;  
Â Â Â Â [timestamp](#timestamp): number;  
Â Â Â Â [volume](#volume): number;  
Â Â Â Â [width](#width): number;  
}

##### Index

### Properties

[autoplay](#autoplay)
[controls](#controls)
[height](#height)
[loop](#loop)
[timestamp](#timestamp)
[volume](#volume)
[width](#width)

## Properties

### autoplay

autoplay: boolean

Should the video play automatically?

### controls

controls: boolean

Show player controls for this video?

### height

height: number

The height of the video, otherwise it will use the aspect ratio of the source
video, or 16:9 if that aspect ratio is not available.

### loop

loop: boolean

Automatically loop the video?

### timestamp

timestamp: number

The starting point of the video, in seconds.

### volume

volume: number

The volume level of any audio that the video file contains.

### width

width: number

The width of the video, otherwise it will fill the available container width.