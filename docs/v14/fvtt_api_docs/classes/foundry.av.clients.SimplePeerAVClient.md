---
title: "SimplePeerAVClient | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.av.clients.SimplePeerAVClient.html"
category: "classes"
---

# Class SimplePeerAVClient

An implementation of the AVClient which uses the simple-peer library and the Foundry socket server for signaling.
Credit to bekit#4213 for identifying simple-peer as a viable technology and providing a POC implementation.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.av.clients.SimplePeerAVClient))

* [AVClient](foundry.av.AVClient.md)
  + SimplePeerAVClient

##### Index

### Properties

[audioBroadcastEnabled](#audiobroadcastenabled)
[levelsStream](#levelsstream)
[localStream](#localstream)
[master](#master)
[peers](#peers)
[remoteStreams](#remotestreams)
[settings](#settings)

### Accessors

[isMuted](#ismuted)
[isVoiceActivated](#isvoiceactivated)
[isVoiceAlways](#isvoicealways)
[isVoicePTT](#isvoiceptt)

### Methods

[activateSocketListeners](#activatesocketlisteners)
[connect](#connect)
[connectPeer](#connectpeer)
[disconnect](#disconnect)
[disconnectAll](#disconnectall)
[disconnectPeer](#disconnectpeer)
[getAudioSinks](#getaudiosinks)
[getAudioSources](#getaudiosources)
[getConnectedUsers](#getconnectedusers)
[getLevelsStreamForUser](#getlevelsstreamforuser)
[getMediaStreamForUser](#getmediastreamforuser)
[getVideoSources](#getvideosources)
[initialize](#initialize)
[initializeLocalStream](#initializelocalstream)
[initializePeerStream](#initializepeerstream)
[isAudioEnabled](#isaudioenabled)
[isVideoEnabled](#isvideoenabled)
[onSettingsChanged](#onsettingschanged)
[receiveSignal](#receivesignal)
[setUserVideo](#setuservideo)
[toggleAudio](#toggleaudio)
[toggleBroadcast](#togglebroadcast)
[toggleVideo](#togglevideo)
[updateLocalStream](#updatelocalstream)

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

Inherited from [AVClient](foundry.av.AVClient.md).[master](foundry.av.AVClient.md#master)

### peers

peers: Map<any, any> = ...

A mapping of connected peers

### remoteStreams

remoteStreams: Map<any, any> = ...

A mapping of connected remote streams

### settings

settings: AVSettings

The active audio/video settings being used

Inherited from [AVClient](foundry.av.AVClient.md).[settings](foundry.av.AVClient.md#settings)

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

  Overrides [AVClient](foundry.av.AVClient.md).[connect](foundry.av.AVClient.md#connect)

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

  Overrides [AVClient](foundry.av.AVClient.md).[disconnect](foundry.av.AVClient.md#disconnect)

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

* getAudioSinks(): Promise<object>

  Provide an Object of available audio sources which can be used by this implementation.
  Each object key should be a device id and the key should be a human-readable label.

  #### Returns Promise<object>

  Inherited from [AVClient](foundry.av.AVClient.md).[getAudioSinks](foundry.av.AVClient.md#getaudiosinks)

### getAudioSources

* getAudioSources(): Promise<object>

  Provide an Object of available audio sources which can be used by this implementation.
  Each object key should be a device id and the key should be a human-readable label.

  #### Returns Promise<object>

  Inherited from [AVClient](foundry.av.AVClient.md).[getAudioSources](foundry.av.AVClient.md#getaudiosources)

### getConnectedUsers

* getConnectedUsers(): any[]

  #### Returns any[]

  Overrides [AVClient](foundry.av.AVClient.md).[getConnectedUsers](foundry.av.AVClient.md#getconnectedusers)

### getLevelsStreamForUser

* getLevelsStreamForUser(userId: any): any

  #### Parameters

  + userId: any

  #### Returns any

  Overrides [AVClient](foundry.av.AVClient.md).[getLevelsStreamForUser](foundry.av.AVClient.md#getlevelsstreamforuser)

### getMediaStreamForUser

* getMediaStreamForUser(userId: any): any

  #### Parameters

  + userId: any

  #### Returns any

  Overrides [AVClient](foundry.av.AVClient.md).[getMediaStreamForUser](foundry.av.AVClient.md#getmediastreamforuser)

### getVideoSources

* getVideoSources(): Promise<object>

  Provide an Object of available video sources which can be used by this implementation.
  Each object key should be a device id and the key should be a human-readable label.

  #### Returns Promise<object>

  Inherited from [AVClient](foundry.av.AVClient.md).[getVideoSources](foundry.av.AVClient.md#getvideosources)

### initialize

* initialize(): Promise<void>

  #### Returns Promise<void>

  Overrides [AVClient](foundry.av.AVClient.md).[initialize](foundry.av.AVClient.md#initialize)

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

  Overrides [AVClient](foundry.av.AVClient.md).[isAudioEnabled](foundry.av.AVClient.md#isaudioenabled)

### isVideoEnabled

* isVideoEnabled(): boolean

  #### Returns boolean

  Overrides [AVClient](foundry.av.AVClient.md).[isVideoEnabled](foundry.av.AVClient.md#isvideoenabled)

### onSettingsChanged

* onSettingsChanged(changed: any): Promise<void>

  #### Parameters

  + changed: any

  #### Returns Promise<void>

  Overrides [AVClient](foundry.av.AVClient.md).[onSettingsChanged](foundry.av.AVClient.md#onsettingschanged)

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

  Overrides [AVClient](foundry.av.AVClient.md).[setUserVideo](foundry.av.AVClient.md#setuservideo)

### toggleAudio

* toggleAudio(enabled: any): void

  #### Parameters

  + enabled: any

  #### Returns void

  Overrides [AVClient](foundry.av.AVClient.md).[toggleAudio](foundry.av.AVClient.md#toggleaudio)

### toggleBroadcast

* toggleBroadcast(enabled: any): void

  #### Parameters

  + enabled: any

  #### Returns void

  Overrides [AVClient](foundry.av.AVClient.md).[toggleBroadcast](foundry.av.AVClient.md#togglebroadcast)

### toggleVideo

* toggleVideo(enabled: any): void

  #### Parameters

  + enabled: any

  #### Returns void

  Overrides [AVClient](foundry.av.AVClient.md).[toggleVideo](foundry.av.AVClient.md#togglevideo)

### updateLocalStream

* updateLocalStream(): Promise<void>

  Replace the local stream for each connected peer with a re-generated MediaStream.

  #### Returns Promise<void>

  Overrides [AVClient](foundry.av.AVClient.md).[updateLocalStream](foundry.av.AVClient.md#updatelocalstream)