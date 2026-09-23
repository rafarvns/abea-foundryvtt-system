---
title: "UsabilityIssue | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.UsabilityIssue.html"
category: "interfaces"
---

# Interface UsabilityIssue

interface UsabilityIssue {  
Â Â Â Â [message](#message): string;  
Â Â Â Â [params](#params)?: object;  
Â Â Â Â [severity](#severity): string;  
}

##### Index

### Properties

[message](#message)
[params?](#params)
[severity](#severity)

## Properties

### message

message: string

The pre-localized message to display in relation to the usability issue.

### `Optional`params

params?: object

Parameters to supply to the localization.

### severity

severity: string

The severity of the issue, either "error", "warning", or "info".