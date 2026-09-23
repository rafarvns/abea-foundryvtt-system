---
title: "ACTIVE_EFFECT_CHANGE_PHASES | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/variables/CONST.ACTIVE_EFFECT_CHANGE_PHASES.html"
category: "variables"
---

# Variable ACTIVE\_EFFECT\_CHANGE\_PHASES`Const`

ACTIVE\_EFFECT\_CHANGE\_PHASES: readonly ["initial", "final"] = ...

Define the core ActiveEffect change-application phases.
Additional phases can be registered by systems and modules, with the registering package also responsible for
calling `Actor#applyActiveEffects("myNewPhase")` at the desired time.