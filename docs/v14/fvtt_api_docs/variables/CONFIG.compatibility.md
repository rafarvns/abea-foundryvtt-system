---
title: "compatibility | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/variables/CONFIG.compatibility.html"
category: "variables"
---

# Variable compatibility`Const`

compatibility: {  
Â Â Â Â excludePatterns: RegExp[];  
Â Â Â Â includePatterns: RegExp[];  
Â Â Â Â mode: number;  
} = ...

Configure the verbosity of compatibility warnings generated throughout the software.
The compatibility mode defines the logging level of any displayed warnings.
The includePatterns and excludePatterns arrays provide a set of regular expressions which can either only
include or specifically exclude certain file paths or warning messages.
Exclusion rules take precedence over inclusion rules.

#### Type Declaration

* ##### excludePatterns: RegExp[]
* ##### includePatterns: RegExp[]
* ##### mode: number

#### See

[CONST.COMPATIBILITY\_MODES](CONST.COMPATIBILITY_MODES.md)

#### Example: Include Specific Errors

```
const includeRgx = new RegExp("/systems/dnd5e/module/documents/active-effect.mjs");  
CONFIG.compatibility.includePatterns.push(includeRgx);
Copy
```

#### Example: Exclude Specific Errors

```
const excludeRgx = new RegExp("/systems/dnd5e/");  
CONFIG.compatibility.excludePatterns.push(excludeRgx);
Copy
```

#### Example: Both Include and Exclude

```
const includeRgx = new RegExp("/systems/dnd5e/module/actor/");  
const excludeRgx = new RegExp("/systems/dnd5e/module/actor/sheets/base.js");  
CONFIG.compatibility.includePatterns.push(includeRgx);  
CONFIG.compatibility.excludePatterns.push(excludeRgx);
Copy
```

#### Example: Targeting more than filenames

```
const includeRgx = new RegExp("applyActiveEffects");  
CONFIG.compatibility.includePatterns.push(includeRgx);
Copy
```