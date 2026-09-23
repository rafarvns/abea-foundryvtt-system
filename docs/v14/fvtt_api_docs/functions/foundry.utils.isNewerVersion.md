---
title: "isNewerVersion | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.isNewerVersion.html"
category: "functions"
---

# Function isNewerVersion

* isNewerVersion(  
  Â Â Â Â v1: string | number | null | undefined,  
  Â Â Â Â v0: string | number | null | undefined,  
  Â Â Â Â options?: { majorOnly?: boolean },  
  ): boolean

  Return whether a target version (v1) is more advanced than some other reference version (v0).
  Supports either numeric or string version comparison with version parts separated by periods.

  #### Parameters

  + v1: string | number | null | undefined

    The target version
  + v0: string | number | null | undefined

    The reference version
  + `Optional`options: { majorOnly?: boolean } = {}

    Additional options which affect the comparison.

    - ##### `Optional`majorOnly?: boolean

      Compare only the major version numbers.

  #### Returns boolean

  Is v1 a more advanced version than v0?