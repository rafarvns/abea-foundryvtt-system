---
title: "TokenPanningOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.types.TokenPanningOptions.html"
category: "interfaces"
---

# Interface TokenPanningOptions

interface TokenPanningOptions {  
Â Â Â Â [duration](#duration)?: number;  
Â Â Â Â [easing](#easing)?: string | Function;  
Â Â Â Â [force](#force)?: boolean;  
Â Â Â Â [speed](#speed)?: number;  
Â Â Â Â [transitionType](#transitiontype)?: string;  
}

##### Index

### Properties

[duration?](#duration)
[easing?](#easing)
[force?](#force)
[speed?](#speed)
[transitionType?](#transitiontype)

## Properties

### `Optional`duration

duration?: number

The duration of the pan or transition animation.
Default: `250` for panning or the default duration
of the given transition type.

### `Optional`easing

easing?: string | Function

The easing function used for the panning animation.
Default: `"easeInOutCosine"`.

### `Optional`force

force?: boolean

If false, the canvas is not panned to the token if
the token is already onscreen. Otherwise the canvas
is panned such that the token is in the center of
the screen. Default: `false`.

### `Optional`speed

speed?: number

The speed of the panning animation in pixels per second;
overrides `duration` if set.

### `Optional`transitionType

transitionType?: string

The type of the transition animation.
Default: `null` (no transition animation).