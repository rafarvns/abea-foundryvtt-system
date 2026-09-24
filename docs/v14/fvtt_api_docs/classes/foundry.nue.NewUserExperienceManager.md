---
title: "NewUserExperienceManager | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.nue.NewUserExperienceManager.html"
category: "classes"
---

# Class NewUserExperienceManager

Responsible for managing the New User Experience workflows.

#### See

[foundry.Game#nue](foundry.Game.md#nue)

##### Index

### Methods

[createDefaultScene](#createdefaultscene)
[initialize](#initialize)

## Methods

### createDefaultScene

* createDefaultScene(sceneData?: SceneData): Promise<[documents](../modules/foundry.documents.md).[Scene](foundry.documents.Scene.md)>

  Create a default scene for the new world.

  #### Parameters

  + sceneData: SceneData = {}

    Additional data to merge with the default scene

  #### Returns Promise<[documents](../modules/foundry.documents.md).[Scene](foundry.documents.Scene.md)>

  The created default scene

### initialize

* initialize(): void

  Initialize the new user experience.
  Currently, this generates some chat messages with hints for getting started if we detect this is a new world.

  #### Returns void