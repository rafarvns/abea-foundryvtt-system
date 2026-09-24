---
title: "PackageRelationshipsData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.packages.types.PackageRelationshipsData.html"
category: "interfaces"
---

# Interface PackageRelationshipsData

interface PackageRelationshipsData {  
Â Â Â Â [recommends](#recommends): RelatedPackage[];  
Â Â Â Â [requires](#requires): RelatedPackage[];  
Â Â Â Â [systems](#systems): RelatedPackage[];  
}

##### Index

### Properties

[recommends](#recommends)
[requires](#requires)
[systems](#systems)

## Properties

### recommends

recommends: RelatedPackage[]

Packages that are recommended for optimal functionality

### requires

requires: RelatedPackage[]

Packages that are required for base functionality

### systems

systems: RelatedPackage[]

Systems that this Package supports