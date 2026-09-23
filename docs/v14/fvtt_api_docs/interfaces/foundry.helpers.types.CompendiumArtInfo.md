---
title: "CompendiumArtInfo | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.helpers.types.CompendiumArtInfo.html"
category: "interfaces"
---

# Interface CompendiumArtInfo

interface CompendiumArtInfo {  
Â Â Â Â [credit](#credit)?: string;  
Â Â Â Â [img](#img)?: string;  
Â Â Â Â [token](#token)?: string | object;  
}

##### Index

### Properties

[credit?](#credit)
[img?](#img)
[token?](#token)

## Properties

### `Optional`credit

credit?: string

An optional credit string for use by the game system to apply in an appropriate
place.

### `Optional`img

img?: string

The path to the Document's image.

### `Optional`token

token?: string | object

The path to the token image, or an object to merge into the Actor's prototype
token.