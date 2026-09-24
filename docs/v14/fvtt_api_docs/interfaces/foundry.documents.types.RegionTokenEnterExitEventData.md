---
title: "RegionTokenEnterExitEventData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.RegionTokenEnterExitEventData.html"
category: "interfaces"
---

# Interface RegionTokenEnterExitEventData

interface RegionTokenEnterExitEventData {  
Â Â Â Â [movement](#movement): [TokenMovementOperation](foundry.documents.types.TokenMovementOperation.md) | null;  
Â Â Â Â [token](#token): [TokenDocument](../classes/foundry.documents.TokenDocument.md);  
}

##### Index

### Properties

[movement](#movement)
[token](#token)

## Properties

### movement

movement: [TokenMovementOperation](foundry.documents.types.TokenMovementOperation.md) | null

The movement if the Token entered/exited by moving out of the Region

### token

token: [TokenDocument](../classes/foundry.documents.TokenDocument.md)

The Token that entered/exited the Region