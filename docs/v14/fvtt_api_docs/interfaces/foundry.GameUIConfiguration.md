---
title: "GameUIConfiguration | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.GameUIConfiguration.html"
category: "interfaces"
---

# Interface GameUIConfiguration

interface GameUIConfiguration {  
Â Â Â Â [chatNotifications](#chatnotifications): "cards" | "pip";  
Â Â Â Â [colorScheme](#colorscheme): {  
Â Â Â Â Â Â Â Â applications: "" | "dark" | "light";  
Â Â Â Â Â Â Â Â interface: "" | "dark" | "light";  
Â Â Â Â };  
Â Â Â Â [fade](#fade): { opacity: number; speed: number };  
Â Â Â Â [fontScale](#fontscale): number;  
Â Â Â Â [uiScale](#uiscale): number;  
}

##### Index

### Properties

[chatNotifications](#chatnotifications)
[colorScheme](#colorscheme)
[fade](#fade)
[fontScale](#fontscale)
[uiScale](#uiscale)

## Properties

### chatNotifications

chatNotifications: "cards" | "pip"

### colorScheme

colorScheme: {  
Â Â Â Â applications: "" | "dark" | "light";  
Â Â Â Â interface: "" | "dark" | "light";  
}

### fade

fade: { opacity: number; speed: number }

### fontScale

fontScale: number

### uiScale

uiScale: number