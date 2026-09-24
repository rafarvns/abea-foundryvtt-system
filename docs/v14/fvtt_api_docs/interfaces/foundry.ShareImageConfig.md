---
title: "ShareImageConfig | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.ShareImageConfig.html"
category: "interfaces"
---

# Interface ShareImageConfig

interface ShareImageConfig {  
Â Â Â Â [image](#image): string;  
Â Â Â Â [showTitle](#showtitle)?: boolean;  
Â Â Â Â [title](#title): string;  
Â Â Â Â [users](#users)?: string[];  
Â Â Â Â [uuid](#uuid)?: string;  
}

##### Index

### Properties

[image](#image)
[showTitle?](#showtitle)
[title](#title)
[users?](#users)
[uuid?](#uuid)

## Properties

### image

image: string

The image URL to share.

### `Optional`showTitle

showTitle?: boolean

If this is provided, the permissions of the related Document will be ignored and
the title will be shown based on this parameter.

### title

title: string

The image title.

### `Optional`users

users?: string[]

A list of user IDs to show the image to.

### `Optional`uuid

uuid?: string

The UUID of a [foundry.abstract.Document](../classes/foundry.abstract.Document.md) related to the image,
used to determine permission to see the image title.