---
title: "ImagePopoutConfiguration | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.ImagePopoutConfiguration.html"
category: "interfaces"
---

# Interface ImagePopoutConfiguration

interface ImagePopoutConfiguration {  
Â Â Â Â [caption](#caption)?: string;  
Â Â Â Â [showTitle](#showtitle)?: boolean;  
Â Â Â Â [src](#src): string;  
Â Â Â Â [uuid](#uuid)?: string | null;  
}

##### Index

### Properties

[caption?](#caption)
[showTitle?](#showtitle)
[src](#src)
[uuid?](#uuid)

## Properties

### `Optional`caption

caption?: string

Caption text to display below the image.

### `Optional`showTitle

showTitle?: boolean

Force showing or hiding the title.

### src

src: string

The URL to the image or video file

### `Optional`uuid

uuid?: string | null

The UUID of some related [foundry.abstract.Document](../classes/foundry.abstract.Document.md).