---
title: "ParticleGeneratorDebugStats | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.canvas.animation.types.ParticleGeneratorDebugStats.html"
category: "interfaces"
---

# Interface ParticleGeneratorDebugStats

interface ParticleGeneratorDebugStats {  
Â Â Â Â [active](#active): number;  
Â Â Â Â [newlyVisibleAreaCount](#newlyvisibleareacount): number;  
Â Â Â Â [pool](#pool): number;  
Â Â Â Â [recycledConstraint](#recycledconstraint): number;  
Â Â Â Â [recycledLifetime](#recycledlifetime): number;  
Â Â Â Â [recycledStop](#recycledstop): number;  
Â Â Â Â [spawnAttempts](#spawnattempts): number;  
Â Â Â Â [spawned](#spawned): number;  
Â Â Â Â [spawnMS](#spawnms): number;  
Â Â Â Â [spawnRejectedNoArea](#spawnrejectednoarea): number;  
Â Â Â Â [spawnRejectedPositionTest](#spawnrejectedpositiontest): number;  
Â Â Â Â [spawnRejectedProbability](#spawnrejectedprobability): number;  
Â Â Â Â [target](#target): number;  
Â Â Â Â [tickMS](#tickms): number;  
Â Â Â Â [updateMS](#updatems): number;  
}

##### Index

### Properties

[active](#active)
[newlyVisibleAreaCount](#newlyvisibleareacount)
[pool](#pool)
[recycledConstraint](#recycledconstraint)
[recycledLifetime](#recycledlifetime)
[recycledStop](#recycledstop)
[spawnAttempts](#spawnattempts)
[spawned](#spawned)
[spawnMS](#spawnms)
[spawnRejectedNoArea](#spawnrejectednoarea)
[spawnRejectedPositionTest](#spawnrejectedpositiontest)
[spawnRejectedProbability](#spawnrejectedprobability)
[target](#target)
[tickMS](#tickms)
[updateMS](#updatems)

## Properties

### active

active: number

Current number of active particles.

### newlyVisibleAreaCount

newlyVisibleAreaCount: number

Number of newly-visible rectangles this frame (ambient mode).

### pool

pool: number

Current number of pooled particles.

### recycledConstraint

recycledConstraint: number

Particles recycled due to constraint handling.

### recycledLifetime

recycledLifetime: number

Particles recycled due to lifetime expiration.

### recycledStop

recycledStop: number

Particles recycled/cleared due to a hard stop.

### spawnAttempts

spawnAttempts: number

Number of spawn attempts.

### spawned

spawned: number

Number of successfully spawned particles.

### spawnMS

spawnMS: number

Time spent auto-spawning particles during the most recent tick (milliseconds).

### spawnRejectedNoArea

spawnRejectedNoArea: number

Spawn attempts rejected because no valid spawn area was available.

### spawnRejectedPositionTest

spawnRejectedPositionTest: number

Spawn attempts rejected by
[ParticleGeneratorConfiguration#positionTest](foundry.canvas.animation.types.ParticleGeneratorConfiguration.md#positiontest).

### spawnRejectedProbability

spawnRejectedProbability: number

Spawn attempts rejected by probability (auto-spawn only).

### target

target: number

Current adjusted target particle count.

### tickMS

tickMS: number

Total tick time for the most recent tick (milliseconds).

### updateMS

updateMS: number

Time spent updating particles during the most recent tick (milliseconds).