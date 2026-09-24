---
title: "AnalysisData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.audio.AnalysisData.html"
category: "interfaces"
---

# Interface AnalysisData

interface AnalysisData {  
Â Â Â Â [analysisLoopActive](#analysisloopactive): boolean;  
Â Â Â Â [environment](#environment): [AnalysisDataValue](foundry.audio.AnalysisDataValue.md);  
Â Â Â Â [interface](#interface): [AnalysisDataValue](foundry.audio.AnalysisDataValue.md);  
Â Â Â Â [music](#music): [AnalysisDataValue](foundry.audio.AnalysisDataValue.md);  
}

##### Index

### Properties

[analysisLoopActive](#analysisloopactive)
[environment](#environment)
[interface](#interface)
[music](#music)

## Properties

### analysisLoopActive

analysisLoopActive: boolean

Whether the internal RAQ loop is currently running.

### environment

environment: [AnalysisDataValue](foundry.audio.AnalysisDataValue.md)

Analysis data for the ambient/environment context.

### interface

interface: [AnalysisDataValue](foundry.audio.AnalysisDataValue.md)

Analysis data for the interface context.

### music

music: [AnalysisDataValue](foundry.audio.AnalysisDataValue.md)

Analysis data for the music context.