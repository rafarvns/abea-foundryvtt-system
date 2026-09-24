---
title: "RegionSocketEvent | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.RegionSocketEvent.html"
category: "interfaces"
---

# Interface RegionSocketEvent

interface RegionSocketEvent {  
Â Â Â Â [eventData](#eventdata): object;  
Â Â Â Â [eventDataUuids](#eventdatauuids): string[];  
Â Â Â Â [eventName](#eventname): [RegionEventType](../types/CONST.RegionEventType.md);  
Â Â Â Â [regionUuid](#regionuuid): string;  
Â Â Â Â [userId](#userid): string;  
}

##### Index

### Properties

[eventData](#eventdata)
[eventDataUuids](#eventdatauuids)
[eventName](#eventname)
[regionUuid](#regionuuid)
[userId](#userid)

## Properties

### eventData

eventData: object

The data of the event

### eventDataUuids

eventDataUuids: string[]

The keys of the event data that are Documents

### eventName

eventName: [RegionEventType](../types/CONST.RegionEventType.md)

The name of the event (see [CONST.REGION\_EVENTS](../variables/CONST.REGION_EVENTS.md))

### regionUuid

regionUuid: string

The UUID of the Region the event was triggered on

### userId

userId: string

The ID of the User that triggered the event