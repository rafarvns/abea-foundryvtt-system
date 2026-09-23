---
title: "VideoHelper | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.helpers.media.VideoHelper.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [helpers](../modules/foundry.helpers.html)
* [media](../modules/foundry.helpers.media.html)
* [VideoHelper](foundry.helpers.media.VideoHelper.html)

# Class VideoHelper

A helper class to provide common functionality for working with HTML5 video objects
A singleton instance of this class is available as `game.video`

##### Index

### Properties

[locked](foundry.helpers.media.VideoHelper.html#locked)
[pending](foundry.helpers.media.VideoHelper.html#pending)
[thumbs](foundry.helpers.media.VideoHelper.html#thumbs)

### Methods

[awaitFirstGesture](foundry.helpers.media.VideoHelper.html#awaitfirstgesture)
[cloneTexture](foundry.helpers.media.VideoHelper.html#clonetexture)
[createThumbnail](foundry.helpers.media.VideoHelper.html#createthumbnail)
[getSourceElement](foundry.helpers.media.VideoHelper.html#getsourceelement)
[getVideoSource](foundry.helpers.media.VideoHelper.html#getvideosource)
[getYouTubeEmbedURL](foundry.helpers.media.VideoHelper.html#getyoutubeembedurl)
[getYouTubeId](foundry.helpers.media.VideoHelper.html#getyoutubeid)
[getYouTubePlayer](foundry.helpers.media.VideoHelper.html#getyoutubeplayer)
[isYouTubeURL](foundry.helpers.media.VideoHelper.html#isyoutubeurl)
[play](foundry.helpers.media.VideoHelper.html#play)
[stop](foundry.helpers.media.VideoHelper.html#stop)
[hasVideoExtension](foundry.helpers.media.VideoHelper.html#hasvideoextension)

## Properties

### locked

locked: boolean

A flag for whether video playback is currently locked by awaiting a user gesture

### pending

pending: Set<any>

A user gesture must be registered before video playback can begin.
This Set records the video elements which await such a gesture.

### thumbs

thumbs: Record<string, string>

A mapping of base64 video thumbnail images

## Methods

### awaitFirstGesture

* awaitFirstGesture(): void

  Register an event listener to await the first mousemove gesture and begin playback once observed
  A user interaction must involve a mouse click or keypress.
  Listen for any of these events, and handle the first observed gesture.

  #### Returns void

### cloneTexture

* cloneTexture(source: HTMLVideoElement): Promise<Texture<Resource>>

  Clone a video texture so that it can be played independently of the original base texture.

  #### Parameters

  + source: HTMLVideoElement

    The video element source

  #### Returns Promise<Texture<Resource>>

  An unlinked PIXI.Texture which can be played independently

### createThumbnail

* createThumbnail(src: string, options: object): Promise<string>

  Create and cache a static thumbnail to use for the video.
  The thumbnail is cached using the video file path or URL.

  #### Parameters

  + src: string

    The source video URL
  + options: object

    Thumbnail creation options, including width and height

  #### Returns Promise<string>

  The created and cached base64 thumbnail image, or a placeholder image if the canvas is
  disabled and no thumbnail can be generated.

### getSourceElement

* getSourceElement(mesh: any): null | HTMLImageElement | HTMLVideoElement

  Return the HTML element which provides the source for a loaded texture.

  #### Parameters

  + mesh: any

    The rendered mesh

  #### Returns null | HTMLImageElement | HTMLVideoElement

  The source HTML element

### getVideoSource

* getVideoSource(object: any): null | HTMLVideoElement

  Get the video element source corresponding to a Sprite or SpriteMesh.

  #### Parameters

  + object: any

    The PIXI source

  #### Returns null | HTMLVideoElement

  The source video element or null

### getYouTubeEmbedURL

* getYouTubeEmbedURL(url: string, vars?: object): string

  Take a URL to a YouTube video and convert it into a URL suitable for embedding in a YouTube iframe.

  #### Parameters

  + url: string

    The URL to convert.
  + vars: object = {}

    YouTube player parameters.

  #### Returns string

  The YouTube embed URL.

### getYouTubeId

* getYouTubeId(url: string): string

  Retrieve a YouTube video ID from a URL.

  #### Parameters

  + url: string

    The URL.

  #### Returns string

### getYouTubePlayer

* getYouTubePlayer(id: string, config?: object): Promise<Player>

  Lazily-load the YouTube API and retrieve a Player instance for a given iframe.

  #### Parameters

  + id: string

    The iframe ID.
  + config: object = {}

    A player config object. See <https://developers.google.com/youtube/iframe_api_reference> for reference.

  #### Returns Promise<Player>

### isYouTubeURL

* isYouTubeURL(url?: string): boolean

  Test a URL to see if it points to a YouTube video.

  #### Parameters

  + url: string = ""

    The URL to test.

  #### Returns boolean

### play

* play(  
  Â Â Â Â video: HTMLElement,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â loop?: boolean;  
  Â Â Â Â Â Â Â Â offset?: number;  
  Â Â Â Â Â Â Â Â playing?: boolean;  
  Â Â Â Â Â Â Â Â volume?: number;  
  Â Â Â Â },  
  ): Promise<any>

  Play a single video source
  If playback is not yet enabled, add the video to the pending queue

  #### Parameters

  + video: HTMLElement

    The VIDEO element to play
  + `Optional`options: { loop?: boolean; offset?: number; playing?: boolean; volume?: number } = {}

    Additional options for modifying video playback

    - ##### `Optional`loop?: boolean

      Should the video loop?
    - ##### `Optional`offset?: number

      A specific timestamp between 0 and the video duration to begin playback
    - ##### `Optional`playing?: boolean

      Should the video be playing? Otherwise, it will be paused
    - ##### `Optional`volume?: number

      Desired volume level of the video's audio channel (if any)

  #### Returns Promise<any>

### stop

* stop(video: HTMLElement): void

  Stop a single video source

  #### Parameters

  + video: HTMLElement

    The VIDEO element to stop

  #### Returns void

### `Static`hasVideoExtension

* hasVideoExtension(src: string): boolean

  Check if a source has a video extension.

  #### Parameters

  + src: string

    The source.

  #### Returns boolean

  If the source has a video extension or not.