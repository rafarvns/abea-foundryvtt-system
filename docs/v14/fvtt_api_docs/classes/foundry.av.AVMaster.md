---
title: "AVMaster | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.av.AVMaster.html"
category: "classes"
---

# Class AVMaster

The master Audio/Video controller instance.
This is available as the singleton game.webrtc

##### Index

### Properties

[broadcasting](#broadcasting)
[client](#client)

### Methods

[\_initializeUserVoiceDetection](#_initializeuservoicedetection)
[\_onPTTEnd](#_onpttend)
[\_onPTTStart](#_onpttstart)
[activateVoiceDetection](#activatevoicedetection)
[broadcast](#broadcast)
[canUserBroadcastAudio](#canuserbroadcastaudio)
[canUserBroadcastVideo](#canuserbroadcastvideo)
[canUserShareAudio](#canusershareaudio)
[canUserShareVideo](#canusersharevideo)
[connect](#connect)
[deactivateVoiceDetection](#deactivatevoicedetection)
[disconnect](#disconnect)
[onSettingsChanged](#onsettingschanged)
[reestablish](#reestablish)

## Properties

### broadcasting

broadcasting: boolean

A flag to track whether the current user is actively broadcasting their microphone.

### client

client: AVClient

The Audio/Video client class

## Methods

### \_initializeUserVoiceDetection

* \_initializeUserVoiceDetection(mode: string): void

  `Internal`

  Set up audio level listeners to handle voice activation detection workflow.

  #### Parameters

  + mode: string

    The currently selected voice broadcasting mode

  #### Returns void

### \_onPTTEnd

* \_onPTTEnd(context: [KeyboardEventContext](../interfaces/foundry.types.KeyboardEventContext.md)): boolean

  `Internal`

  Handle deactivation of a push-to-talk key or button.

  #### Parameters

  + context: [KeyboardEventContext](../interfaces/foundry.types.KeyboardEventContext.md)

    The context data of the event

  #### Returns boolean

### \_onPTTStart

* \_onPTTStart(context: [KeyboardEventContext](../interfaces/foundry.types.KeyboardEventContext.md)): boolean

  `Internal`

  Handle activation of a push-to-talk key or button.

  #### Parameters

  + context: [KeyboardEventContext](../interfaces/foundry.types.KeyboardEventContext.md)

    The context data of the event

  #### Returns boolean

### activateVoiceDetection

* activateVoiceDetection(stream: MediaStream, ms?: number): void

  Activate voice detection tracking for a userId on a provided MediaStream.
  Currently only a MediaStream is supported because MediaStreamTrack processing is not yet supported cross-browser.

  #### Parameters

  + stream: MediaStream

    The MediaStream which corresponds to that User
  + `Optional`ms: number

    A number of milliseconds which represents the voice activation volume interval

  #### Returns void

### broadcast

* broadcast(intent: boolean): any

  Trigger a change in the audio broadcasting state when using a push-to-talk workflow.

  #### Parameters

  + intent: boolean

    The user's intent to broadcast. Whether an actual broadcast occurs will depend
    on whether or not the user has muted their audio feed.

  #### Returns any

### canUserBroadcastAudio

* canUserBroadcastAudio(userId: string): boolean

  A user can broadcast audio if the AV mode is compatible and if they are allowed to broadcast.

  #### Parameters

  + userId: string

  #### Returns boolean

### canUserBroadcastVideo

* canUserBroadcastVideo(userId: string): boolean

  A user can broadcast video if the AV mode is compatible and if they are allowed to broadcast.

  #### Parameters

  + userId: string

  #### Returns boolean

### canUserShareAudio

* canUserShareAudio(userId: string): boolean

  A user can share audio if they are allowed to broadcast and if they have not muted themselves or been blocked.

  #### Parameters

  + userId: string

  #### Returns boolean

### canUserShareVideo

* canUserShareVideo(userId: string): boolean

  A user can share video if they are allowed to broadcast and if they have not hidden themselves or been blocked.

  #### Parameters

  + userId: string

  #### Returns boolean

### connect

* connect(): Promise<boolean>

  Connect to the Audio/Video client.

  #### Returns Promise<boolean>

  Was the connection attempt successful?

### deactivateVoiceDetection

* deactivateVoiceDetection(): void

  Actions which the orchestration layer should take when a peer user disconnects from the audio/video service.

  #### Returns void

### disconnect

* disconnect(): Promise<boolean>

  Disconnect from the Audio/Video client.

  #### Returns Promise<boolean>

  Whether an existing connection was terminated?

### onSettingsChanged

* onSettingsChanged(changed: object): Promise<boolean> | undefined

  Respond to changes which occur to AV Settings.
  Changes are handled in descending order of impact.

  #### Parameters

  + changed: object

    The object of changed AV settings

  #### Returns Promise<boolean> | undefined

### reestablish

* reestablish(): Promise<void>

  Callback actions to take when the user becomes disconnected from the server.

  #### Returns Promise<void>