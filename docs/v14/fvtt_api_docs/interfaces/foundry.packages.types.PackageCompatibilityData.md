---
title: "PackageCompatibilityData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.packages.types.PackageCompatibilityData.html"
category: "interfaces"
---

# Interface PackageCompatibilityData

See [foundry.utils.isNewerVersion](../functions/foundry.utils.isNewerVersion.md) for the function used for comparison.

interface PackageCompatibilityData {  
Â Â Â Â [maximum](#maximum): string;  
Â Â Â Â [minimum](#minimum): string;  
Â Â Â Â [verified](#verified): string;  
}

##### Index

### Properties

[maximum](#maximum)
[minimum](#minimum)
[verified](#verified)

## Properties

### maximum

maximum: string

The Package will not function after this version

### minimum

minimum: string

The Package will not function before this version

### verified

verified: string

Verified compatible up to this version