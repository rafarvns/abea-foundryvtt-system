---
title: "VFXComponentAnimation | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.VFXComponentAnimation.html"
category: "interfaces"
---

# Interface VFXComponentAnimation

interface VFXComponentAnimation {  
Â Â Â Â [animate](#animate): (t: number, state: object, params: object) => void;  
Â Â Â Â [setup](#setup)?: (state: object, params: object) => void;  
Â Â Â Â [tearDown](#teardown)?: (state: object, params: object) => void;  
}

##### Index

### Properties

[animate](#animate)
[setup?](#setup)
[tearDown?](#teardown)

## Properties

### animate

animate: (t: number, state: object, params: object) => void

### `Optional`setup

setup?: (state: object, params: object) => void

### `Optional`tearDown

tearDown?: (state: object, params: object) => void