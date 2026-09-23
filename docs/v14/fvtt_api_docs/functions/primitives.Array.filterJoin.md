---
title: "filterJoin | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/primitives.Array.filterJoin.html"
category: "functions"
---

# Function filterJoin

* filterJoin(sep: string): string

  Join an Array using a string separator, first filtering out any parts which return a false-y value

  #### Parameters

  + sep: string

    The separator string

  #### Returns string

  The joined string, filtered of any false values