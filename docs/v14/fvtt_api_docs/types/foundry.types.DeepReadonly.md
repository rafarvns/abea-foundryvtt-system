---
title: "DeepReadonly | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/types/foundry.types.DeepReadonly.html"
category: "types"
---

# Type Alias DeepReadonly<T>

DeepReadonly: {  
Â Â Â Â readonly [K in keyof [T](#t)]: [T](#t)[K] extends | undefined  
Â Â Â Â | null  
Â Â Â Â | boolean  
Â Â Â Â | number  
Â Â Â Â | string  
Â Â Â Â | symbol  
Â Â Â Â | bigint  
Â Â Â Â | Function  
Â Â Â Â Â Â Â Â ? [T](#t)[K]  
Â Â Â Â Â Â Â Â : [T](#t)[K] extends (infer V)[]  
Â Â Â Â Â Â Â Â Â Â Â Â ? ReadonlyArray<DeepReadonly<V>>  
Â Â Â Â Â Â Â Â Â Â Â Â : [T](#t)[K] extends Map<infer K, infer V>  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â ? ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>>  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â : [T](#t)[K] extends Set<infer V>  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â ? ReadonlySet<DeepReadonly<V>>  
Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â Â : DeepReadonly<[T](#t)[K]>  
}

Make all properties in T recursively readonly.

#### Type Parameters

* T