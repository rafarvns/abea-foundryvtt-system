---
title: "RelatedPackageData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.packages.types.RelatedPackageData.html"
category: "interfaces"
---

# Interface RelatedPackageData

interface RelatedPackageData {  
Â Â Â Â [compatibility](#compatibility)?: [PackageCompatibilityData](foundry.packages.types.PackageCompatibilityData.md);  
Â Â Â Â [id](#id): string;  
Â Â Â Â [manifest](#manifest)?: string;  
Â Â Â Â [reason](#reason)?: string;  
Â Â Â Â [type](#type): string;  
}

##### Index

### Properties

[compatibility?](#compatibility)
[id](#id)
[manifest?](#manifest)
[reason?](#reason)
[type](#type)

## Properties

### `Optional`compatibility

compatibility?: [PackageCompatibilityData](foundry.packages.types.PackageCompatibilityData.md)

The compatibility data with this related Package

### id

id: string

The id of the related package

### `Optional`manifest

manifest?: string

An explicit manifest URL, otherwise learned from the Foundry web
server

### `Optional`reason

reason?: string

The reason for this relationship

### type

type: string

The type of the related package