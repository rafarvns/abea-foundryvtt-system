---
title: "PackageMediaData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.packages.types.PackageMediaData.html"
category: "interfaces"
---

# Interface PackageMediaData

interface PackageMediaData {  
Â Â Â Â [caption](#caption)?: string;  
Â Â Â Â [flags](#flags)?: object;  
Â Â Â Â [loop](#loop)?: boolean;  
Â Â Â Â [thumbnail](#thumbnail)?: string;  
Â Â Â Â [type](#type)?: string;  
Â Â Â Â [url](#url)?: string;  
}

##### Index

### Properties

[caption?](#caption)
[flags?](#flags)
[loop?](#loop)
[thumbnail?](#thumbnail)
[type?](#type)
[url?](#url)

## Properties

### `Optional`caption

caption?: string

A caption for the media element.

### `Optional`flags

flags?: object

An object of optional key/value flags.

### `Optional`loop

loop?: boolean

Should the media play on loop?

### `Optional`thumbnail

thumbnail?: string

A link to the thumbnail for the media element.

### `Optional`type

type?: string

Usage type for the media asset. "setup" means it will be used on the setup screen.

### `Optional`url

url?: string

A web url link to the media element.