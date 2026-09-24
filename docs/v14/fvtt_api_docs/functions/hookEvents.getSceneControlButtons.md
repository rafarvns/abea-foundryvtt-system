---
title: "getSceneControlButtons | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.getSceneControlButtons.html"
category: "functions"
---

# Function getSceneControlButtons

* getSceneControlButtons(controls: Record<string, [SceneControl](../interfaces/foundry.SceneControl.md)>): void

  A hook event that fires when the Scene controls are initialized.

  #### Parameters

  + controls: Record<string, [SceneControl](../interfaces/foundry.SceneControl.md)>

    The SceneControl configurations

  #### Returns void

  #### Example

  ```
  Add a button tool at the bottom of the Token SceneControl that opens or closes an Application.  
  Hooks.on("getSceneControlButtons", controls => {  
    controls.tokens.tools.myTool = {  
      name: "myTool",  
      title: "MyTool.Title",  
      icon: "fa-solid fa-wrench",  
      order: Object.keys(controls.tokens.tools).length,  
      button: true,  
      visible: game.user.isGM,  
      onChange: () => {  
        const existing = foundry.applications.instances.get("my-tool");  
        if ( existing ) existing.close();  
        else new MyTool().render({force: true});  
      }  
    };  
  });
  Copy
  ```