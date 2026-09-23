---
title: "HTMLSecretConfiguration | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.HTMLSecretConfiguration.html"
category: "interfaces"
---

# Interface HTMLSecretConfiguration

interface HTMLSecretConfiguration {  
Â Â Â Â [callbacks](#callbacks): {  
Â Â Â Â Â Â Â Â content: [HTMLSecretContentCallback](../types/foundry.HTMLSecretContentCallback.md);  
Â Â Â Â Â Â Â Â update: [HTMLSecretUpdateCallback](../types/foundry.HTMLSecretUpdateCallback.md);  
Â Â Â Â };  
Â Â Â Â [parentSelector](#parentselector): string;  
}

##### Index

### Properties

[callbacks](#callbacks)
[parentSelector](#parentselector)

## Properties

### callbacks

callbacks: {  
Â Â Â Â content: [HTMLSecretContentCallback](../types/foundry.HTMLSecretContentCallback.md);  
Â Â Â Â update: [HTMLSecretUpdateCallback](../types/foundry.HTMLSecretUpdateCallback.md);  
}

An object of callback functions for each operation.

### parentSelector

parentSelector: string

The CSS selector used to target content that contains secret blocks.