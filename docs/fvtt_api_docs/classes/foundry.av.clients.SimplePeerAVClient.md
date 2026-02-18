---
title: "SimplePeerAVClient | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.av.clients.SimplePeerAVClient.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [av](../modules/foundry.av.html)
* [clients](../modules/foundry.av.clients.html)
* [SimplePeerAVClient](foundry.av.clients.SimplePeerAVClient.html)

# Class SimplePeerAVClient

An implementation of the AVClient which uses the simple-peer library and the Foundry socket server for signaling.
Credit to bekit#4213 for identifying simple-peer as a viable technology and providing a POC implementation.

#### Hierarchy ([View Summary](../hierarchy.html#foundry.av.clients.SimplePeerAVClient))

* [AVClient](foundry.av.AVClient.html)
  + SimplePeerAVClient

##### Index

### Properties

[audioBroadcastEnabled](foundry.av.clients.SimplePeerAVClient.html#audiobroadcastenabled)
[levelsStream](foundry.av.clients.SimplePeerAVClient.html#levelsstream)
[localStream](foundry.av.clients.SimplePeerAVClient.html#localstream)
[master](foundry.av.clients.SimplePeerAVClient.html#master)
[peers](foundry.av.clients.SimplePeerAVClient.html#peers)
[remoteStreams](foundry.av.clients.SimplePeerAVClient.html#remotestreams)
[settings](foundry.av.clients.SimplePeerAVClient.html#settings)

### Accessors

[isMuted](foundry.av.clients.SimplePeerAVClient.html#ismuted)
[isVoiceActivated](foundry.av.clients.SimplePeerAVClient.html#isvoiceactivated)
[isVoiceAlways](foundry.av.clients.SimplePeerAVClient.html#isvoicealways)
[isVoicePTT](foundry.av.clients.SimplePeerAVClient.html#isvoiceptt)

### Methods

[activateSocketListeners](foundry.av.clients.SimplePeerAVClient.html#activatesocketlisteners)
[connect](foundry.av.clients.SimplePeerAVClient.html#connect)
[connectPeer](foundry.av.clients.SimplePeerAVClient.html#connectpeer)
[disconnect](foundry.av.clients.SimplePeerAVClient.html#disconnect)
[disconnectAll](foundry.av.clients.SimplePeerAVClient.html#disconnectall)
[disconnectPeer](foundry.av.clients.SimplePeerAVClient.html#disconnectpeer)
[getAudioSinks](foundry.av.clients.SimplePeerAVClient.html#getaudiosinks)
[getAudioSources](foundry.av.clients.SimplePeerAVClient.html#getaudiosources)
[getConnectedUsers](foundry.av.clients.SimplePeerAVClient.html#getconnectedusers)
[getLevelsStreamForUser](foundry.av.clients.SimplePeerAVClient.html#getlevelsstreamforuser)
[getMediaStreamForUser](foundry.av.clients.SimplePeerAVClient.html#getmediastreamforuser)
[getVideoSources](foundry.av.clients.SimplePeerAVClient.html#getvideosources)
[initialize](foundry.av.clients.SimplePeerAVClient.html#initialize)
[initializeLocalStream](foundry.av.clients.SimplePeerAVClient.html#initializelocalstream)
[initializePeerStream](foundry.av.clients.SimplePeerAVClient.html#initializepeerstream)
[isAudioEnabled](foundry.av.clients.SimplePeerAVClient.html#isaudioenabled)
[isVideoEnabled](foundry.av.clients.SimplePeerAVClient.html#isvideoenabled)
[onSettingsChanged](foundry.av.clients.SimplePeerAVClient.html#onsettingschanged)
[receiveSignal](foundry.av.clients.SimplePeerAVClient.html#receivesignal)
[setUserVideo](foundry.av.clients.SimplePeerAVClient.html#setuservideo)
[toggleAudio](foundry.av.clients.SimplePeerAVClient.html#toggleaudio)
[toggleBroadcast](foundry.av.clients.SimplePeerAVClient.html#togglebroadcast)
[toggleVideo](foundry.av.clients.SimplePeerAVClient.html#togglevideo)
[updateLocalStream](foundry.av.clients.SimplePeerAVClient.html#updatelocalstream)

## Properties

### audioBroadcastEnabled

audioBroadcastEnabled: boolean = false

Is outbound broadcast of local audio enabled?

### levelsStream

levelsStream: MediaStream = null

The dedicated audio stream used to measure volume levels for voice activity detection.

### localStream

localStream: MediaStream = null

The local Stream which captures input video and audio

### master

master: AVMaster

The master orchestration instance

Inherited from [AVClient](foundry.av.AVClient.html).[master](foundry.av.AVClient.html#master)

### peers

peers: Map<any, any> = ...

A mapping of connected peers

### remoteStreams

remoteStreams: Map<any, any> = ...

A mapping of connected remote streams

### settings

settings: AVSettings

The active audio/video settings being used

Inherited from [AVClient](foundry.av.AVClient.html).[settings](foundry.av.AVClient.html#settings)

## Accessors

### isMuted

* get isMuted(): boolean

  Is the current user muted?

  #### Returns boolean

  Inherited from AVClient.isMuted

### isVoiceActivated

* get isVoiceActivated(): boolean

  Is audio broadcasting voice-activation enabled?

  #### Returns boolean

  Inherited from AVClient.isVoiceActivated

### isVoiceAlways

* get isVoiceAlways(): boolean

  Is audio broadcasting always enabled?

  #### Returns boolean

  Inherited from AVClient.isVoiceAlways

### isVoicePTT

* get isVoicePTT(): boolean

  Is audio broadcasting push-to-talk enabled?

  #### Returns boolean

  Inherited from AVClient.isVoicePTT

## Methods

### activateSocketListeners

* activateSocketListeners(): void

  Listen for Audio/Video updates on the av socket to broker connections between peers

  #### Returns void

### connect

* connect(): Promise<boolean>

  #### Returns Promise<boolean>

  Overrides [AVClient](foundry.av.AVClient.html).[connect](foundry.av.AVClient.html#connect)

### connectPeer

* connectPeer(userId: string, isInitiator?: boolean): SimplePeer

  Connect to a peer directly, either as the initiator or as the receiver

  #### Parameters

  + userId: string

    The Foundry user ID with whom we are connecting
  + isInitiator: boolean = false

    Is the current user initiating the connection, or responding to it?

  #### Returns SimplePeer

  The constructed and configured SimplePeer instance

### disconnect

* disconnect(): Promise<boolean>

  #### Returns Promise<boolean>

  Overrides [AVClient](foundry.av.AVClient.html).[disconnect](foundry.av.AVClient.html#disconnect)

### disconnectAll

* disconnectAll(): Promise<any[]>

  Disconnect from all current peer streams

  #### Returns Promise<any[]>

  A Promise which resolves once all peers have been disconnected

### disconnectPeer

* disconnectPeer(userId: string): Promise<void>

  Disconnect from a peer by stopping current stream tracks and destroying the SimplePeer instance

  #### Parameters

  + userId: string

    The Foundry user ID from whom we are disconnecting

  #### Returns Promise<void>

  A Promise which resolves once the disconnection is complete

### getAudioSinks

* getAudioSinks(): Promise<{ object: any }>

  Provide an Object of available audio sources which can be used by this implementation.
  Each object key should be a device id and the key should be a human-readable label.

  #### Returns Promise<{ object: any }>

  Inherited from [AVClient](foundry.av.AVClient.html).[getAudioSinks](foundry.av.AVClient.html#getaudiosinks)

### getAudioSources

* getAudioSources(): Promise<{ object: any }>

  Provide an Object of available audio sources which can be used by this implementation.
  Each object key should be a device id and the key should be a human-readable label.

  #### Returns Promise<{ object: any }>

  Inherited from [AVClient](foundry.av.AVClient.html).[getAudioSources](foundry.av.AVClient.html#getaudiosources)

### getConnectedUsers

* getConnectedUsers(): any[]

  #### Returns any[]

  Overrides [AVClient](foundry.av.AVClient.html).[getConnectedUsers](foundry.av.AVClient.html#getconnectedusers)

### getLevelsStreamForUser

* getLevelsStreamForUser(userId: any): any

  #### Parameters

  + userId: any

  #### Returns any

  Overrides [AVClient](foundry.av.AVClient.html).[getLevelsStreamForUser](foundry.av.AVClient.html#getlevelsstreamforuser)

### getMediaStreamForUser

* getMediaStreamForUser(userId: any): any

  #### Parameters

  + userId: any

  #### Returns any

  Overrides [AVClient](foundry.av.AVClient.html).[getMediaStreamForUser](foundry.av.AVClient.html#getmediastreamforuser)

### getVideoSources

* getVideoSources(): Promise<{ object: any }>

  Provide an Object of available video sources which can be used by this implementation.
  Each object key should be a device id and the key should be a human-readable label.

  #### Returns Promise<{ object: any }>

  Inherited from [AVClient](foundry.av.AVClient.html).[getVideoSources](foundry.av.AVClient.html#getvideosources)

### initialize

* initialize(): Promise<void>

  #### Returns Promise<void>

  Overrides [AVClient](foundry.av.AVClient.html).[initialize](foundry.av.AVClient.html#initialize)

### initializeLocalStream

* initializeLocalStream(): Promise<MediaStream>

  Initialize a local media stream for the current user

  #### Returns Promise<MediaStream>

### initializePeerStream

* initializePeerStream(userId: string): Promise<SimplePeer>

  Initialize a stream connection with a new peer

  #### Parameters

  + userId: string

    The Foundry user ID for which the peer stream should be established

  #### Returns Promise<SimplePeer>

  A Promise which resolves once the peer stream is initialized

### isAudioEnabled

* isAudioEnabled(): boolean

  #### Returns boolean

  Overrides [AVClient](foundry.av.AVClient.html).[isAudioEnabled](foundry.av.AVClient.html#isaudioenabled)

### isVideoEnabled

* isVideoEnabled(): boolean

  #### Returns boolean

  Overrides [AVClient](foundry.av.AVClient.html).[isVideoEnabled](foundry.av.AVClient.html#isvideoenabled)

### onSettingsChanged

* onSettingsChanged(changed: any): Promise<void>

  #### Parameters

  + changed: any

  #### Returns Promise<void>

  Overrides [AVClient](foundry.av.AVClient.html).[onSettingsChanged](foundry.av.AVClient.html#onsettingschanged)

### receiveSignal

* receiveSignal(userId: string, data: object): void

  Receive a request to establish a peer signal with some other User id

  #### Parameters

  + userId: string

    The Foundry user ID who is requesting to establish a connection
  + data: object

    The connection details provided by SimplePeer

  #### Returns void

### setUserVideo

* setUserVideo(userId: any, videoElement: any): Promise<void>

  #### Parameters

  + userId: any
  + videoElement: any

  #### Returns Promise<void>

  Overrides [AVClient](foundry.av.AVClient.html).[setUserVideo](foundry.av.AVClient.html#setuservideo)

### toggleAudio

* toggleAudio(enabled: any): void

  #### Parameters

  + enabled: any

  #### Returns void

  Overrides [AVClient](foundry.av.AVClient.html).[toggleAudio](foundry.av.AVClient.html#toggleaudio)

### toggleBroadcast

* toggleBroadcast(enabled: any): void

  #### Parameters

  + enabled: any

  #### Returns void

  Overrides [AVClient](foundry.av.AVClient.html).[toggleBroadcast](foundry.av.AVClient.html#togglebroadcast)

### toggleVideo

* toggleVideo(enabled: any): void

  #### Parameters

  + enabled: any

  #### Returns void

  Overrides [AVClient](foundry.av.AVClient.html).[toggleVideo](foundry.av.AVClient.html#togglevideo)

### updateLocalStream

* updateLocalStream(): Promise<void>

  Replace the local stream for each connected peer with a re-generated MediaStream.

  #### Returns Promise<void>

  Overrides [AVClient](foundry.av.AVClient.html).[updateLocalStream](foundry.av.AVClient.html#updatelocalstream)