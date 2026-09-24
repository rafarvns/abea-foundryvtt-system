---
title: "BrowserTest | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.BrowserTest.html"
category: "interfaces"
---

# Interface BrowserTest

interface BrowserTest {  
Â Â Â Â [match](#match): RegExp;  
Â Â Â Â [message](#message): string;  
Â Â Â Â [minimum](#minimum): string | number;  
}

##### Index

### Properties

[match](#match)
[message](#message)
[minimum](#minimum)

## Properties

### match

match: RegExp

A regular expression to match the browser against the user agent string.

### message

message: string

A message to display if the user's browser version does not meet the minimum.

### minimum

minimum: string | number

The minimum supported version for this browser.