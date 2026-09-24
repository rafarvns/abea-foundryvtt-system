---
title: "queries | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/variables/CONFIG.queries.html"
category: "variables"
---

# Variable queries`Const`

queries: {  
Â Â Â Â confirmTeleportToken: (  
Â Â Â Â Â Â Â Â queryData: { behaviorUuid: string; tokenUuid: string },  
Â Â Â Â ) => Promise<boolean>;  
Â Â Â Â dialog: (  
Â Â Â Â Â Â Â Â \_\_namedParameters: {  
Â Â Â Â Â Â Â Â Â Â Â Â config: object;  
Â Â Â Â Â Â Â Â Â Â Â Â type: "input" | "prompt" | "confirm" | "wait";  
Â Â Â Â Â Â Â Â },  
Â Â Â Â ) => Promise<any>;  
} = ...

System and modules must prefix the names of the queries they register (e.g. "my-module.aCustomQuery").
Non-prefixed query names are reserved by core.

#### Type Declaration

* ##### confirmTeleportToken: (queryData: { behaviorUuid: string; tokenUuid: string }) => Promise<boolean>
* ##### dialog: ( Â Â Â Â \_\_namedParameters: { Â Â Â Â Â Â Â Â config: object; Â Â Â Â Â Â Â Â type: "input" | "prompt" | "confirm" | "wait"; Â Â Â Â }, ) => Promise<any>