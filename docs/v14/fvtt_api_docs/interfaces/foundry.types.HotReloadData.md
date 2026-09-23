---
title: "HotReloadData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.types.HotReloadData.html"
category: "interfaces"
---

# Interface HotReloadData

interface HotReloadData {  
Â Â Â Â [content](#content): string;  
Â Â Â Â [extension](#extension): string;  
Â Â Â Â [packageId](#packageid): string;  
Â Â Â Â [packageType](#packagetype): string;  
Â Â Â Â [path](#path): string;  
}

##### Index

### Properties

[content](#content)
[extension](#extension)
[packageId](#packageid)
[packageType](#packagetype)
[path](#path)

## Properties

### content

content: string

The updated stringified file content

### extension

extension: string

The file extension which was modified, e.g. "js", "css", "html"

### packageId

packageId: string

The id of the package which was modified

### packageType

packageType: string

The type of package which was modified

### path

path: string

The relative file path which was modified