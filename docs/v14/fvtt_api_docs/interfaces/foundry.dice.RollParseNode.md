---
title: "RollParseNode | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.dice.RollParseNode.html"
category: "interfaces"
---

# Interface RollParseNode

interface RollParseNode {  
Â Â Â Â [class](#class): string;  
Â Â Â Â [formula](#formula): string;  
Â Â Â Â [offset](#offset): [RollParseOffset](foundry.dice.RollParseOffset.md);  
}

##### Index

### Properties

[class](#class)
[formula](#formula)
[offset](#offset)

## Properties

### class

class: string

The class name for this node.

### formula

formula: string

The original matched text for this node.

### offset

offset: [RollParseOffset](foundry.dice.RollParseOffset.md)

The position of the matched term in the formula string.