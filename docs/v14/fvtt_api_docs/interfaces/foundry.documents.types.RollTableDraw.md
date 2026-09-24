---
title: "RollTableDraw | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.RollTableDraw.html"
category: "interfaces"
---

# Interface RollTableDraw

An object containing the executed Roll and the produced results

interface RollTableDraw {  
Â Â Â Â [results](#results): [documents](../modules/foundry.documents.md).[TableResult](../classes/foundry.documents.TableResult.md)[];  
Â Â Â Â [roll](#roll): [Roll](../classes/foundry.dice.Roll.md);  
}

##### Index

### Properties

[results](#results)
[roll](#roll)

## Properties

### results

results: [documents](../modules/foundry.documents.md).[TableResult](../classes/foundry.documents.TableResult.md)[]

An array of drawn TableResult documents

### roll

roll: [Roll](../classes/foundry.dice.Roll.md)

The Dice roll which generated the draw