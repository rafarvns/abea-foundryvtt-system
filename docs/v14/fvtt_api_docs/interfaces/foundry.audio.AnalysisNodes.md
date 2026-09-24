---
title: "AnalysisNodes | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.audio.AnalysisNodes.html"
category: "interfaces"
---

# Interface AnalysisNodes

interface AnalysisNodes {  
Â Â Â Â [environment](#environment): AnalyserNode | null;  
Â Â Â Â [interface](#interface): AnalyserNode | null;  
Â Â Â Â [music](#music): AnalyserNode | null;  
}

##### Index

### Properties

[environment](#environment)
[interface](#interface)
[music](#music)

## Properties

### environment

environment: AnalyserNode | null

The AnalyserNode for ambient, or null if not active.

### interface

interface: AnalyserNode | null

The AnalyserNode for interface, or null if not active.

### music

music: AnalyserNode | null

The AnalyserNode for music, or null if not active.