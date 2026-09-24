---
title: "DeepPartial | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/types/foundry.types.DeepPartial.html"
category: "types"
---

# Type Alias DeepPartial<T>

DeepPartial: [T](#t) extends [Builtin](foundry.types.Builtin.md)  
Â Â Â Â ? [T](#t)  
Â Â Â Â : [T](#t) extends (infer U)[]  
Â Â Â Â Â Â Â Â ? DeepPartial<U>[]  
Â Â Â Â Â Â Â Â : [T](#t) extends ReadonlyArray<infer U>  
Â Â Â Â Â Â Â Â Â Â Â Â ? ReadonlyArray<DeepPartial<U>>  
Â Â Â Â Â Â Â Â Â Â Â Â : [T](#t) extends {} ? { [K in keyof [T](#t)]?: DeepPartial<[T](#t)[K]> } : Partial<[T](#t)>

#### Type Parameters

* T