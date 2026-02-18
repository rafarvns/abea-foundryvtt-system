---
title: "Ambient Sounds"
url: "https://foundryvtt.com/article/ambient-sound/"
category: "Ambient Sounds"
---

Your web browser has JavaScript disabled which is required in order to properly use the foundryvtt.com website. Certain website features will be disabled or will not work as expected unless JavaScript is enabled.

This website collects anonymous data about how users interact with our website. This data provides us with
valuable insights that help us to improve our products. Some of these analytics features are non-essential
and use browser cookies.

What data we collect and information on how it is used is described in our
[Privacy Policy](/article/privacy-policy/ "Privacy Policy").

# Ambient Sounds

## 

## Overview

Foundry Virtual Tabletop allows for local ambient sound effects which are audible when player-controlled Tokens move into its area of effect. This can be useful for environmental features like a waterfall or a crackling campfire which your players will be able to hear when their Tokens are nearby.

[

](https://r2.foundryvtt.com/website-uploads-public/videos/ambient-sound-creation.webm)

Create an Ambient Sound using a left-mouse drag workflow on the Sounds Layer.

## Sound Controls

![Ambient Sounds Tool Panel](https://r2.foundryvtt.com/website-uploads-public/screen/user_1294/ambient-sounds-tool-panel-2022-08-29.png)

Sound Controls Tool Palette

The Sound Controls panel can be opened by clicking on the music note icon () on the left-hand side of the user interface. This opens the tool palette, and displays all existing sound emitters on the current scene and their areas (if there are any) allowing you to create new sound emitters or manipulate existing wall segments.

Draw Ambient Sound ()
:   This tool allows you to create a new ambient sound emitting by clicking on a point in the current scene then dragging out the desired radius for that sound.

Preview Sound ()
:   This toggle allows you to use your cursor as a simulated player token, listening to any sounds placed in the current scene.

Clear Sounds ()
:   This button clears all existing sound sources on the scene.

## Creating Sounds

Ambient Sounds are created by using the Draw Ambient Sound tool (). With this tool selected left-click where you want the sound source to be, then drag out the radius for the sound. This will open the Sound Configuration window which allows you to configure the sound that will be played. The Sound Configuration shown in the following figure and its configuration options are explained below.

Once configured, the chosen sound will loop endlessly for any controlled tokens in the sound area.

Please note that you must select a sound file to play in order to complete the creation, if you close the configuration window without specifying a sound file, it will cancel creation of the ambient sound.

For information on what file types can be used and how audio assets should be encoded, see the [Media Optimization Guide](/article/media/ "Media Optimization Guide") article.

#### Muting Placed Sounds

Once an Ambient Sound has been created, you can mute/un-mute it by right-clicking on the icon for the emission point when on the Sounds Layer.

#### Previewing Placed Sounds

Once an Ambient Sound has been created, you can toggle the preview audio feature from the Sounds Layer tool bar. While this is toggled your mouse cursor will be treated as an actor on the canvas, allowing you to hear sounds based on where it is in the scene. This is useful for quickly checking how a scene would sound based on current ambient sound placement and settings. Please note that this toggle remains even if you switch to a new layer.

#### Modifying Placed Sounds

After an Ambient Sound has been created, you can edit it later by double clicking on its control icon that is visible when on the Sounds Layer. To move the position of an existing Ambient Sound you can click and drag its icon to move it. You may also use `CTRL+C` and `CTRL+V` commands to copy and paste sounds.

Players can control the volume level of playing Ambient Sounds using the global Ambient slider in the Playlists tab of the Sidebar.

Ambient Sound Configuration

![Ambient Sound Configuration](https://r2.foundryvtt.com/website-uploads-public/screen/user_1294/ambient-sound-configuration-2022-08-29.png)

The ambient sound configuration screen, shown when first creating an ambient sound, or by double-clicking an existing sound.

Audio Source
:   You must choose a path to a valid sound file which plays when Tokens are within the area of effect. Ambient Sounds always repeat on loop, so it is recommended to use a format like .webm, .wav, or .ogg which allows for seamless looping, but other audio file formats are also supported.

X & Y Position
:   The x/y coordinates for the center of the Ambient Sound area of effect give the precise location of the emitter in a scene. All newly created sounds have these fields automatically filled in based on where in the scene the sound was created. Repositioning the sound in the scene also changes these values automatically.

Sound Radius
:   The radius of the area of effect for the Ambient Sound, expressed in distance units. For example, if your Scene is configured where each square represents 5ft.

Volume Easing
:   This option specifies that the volume of the Ambient Sound should automatically reduce as Tokens are further from its origin (but still within the area) and increase in volume when Tokens are closer to the origin of the sound. If this option is disabled, the volume level of the Ambient Sound will be the same everywhere within the affected area.

Constrained by Walls
:   This toggle determines whether the sound's radius should be impacted by walls. When on, sounds will not pass through walls which aren't configured to allow sound through them. For more on creating and configuring walls see the [Walls](/article/walls/ "Walls") article.

Maximum Volume
:   This slider configures the maximum volume level of the Ambient Sound at its point of origin (if easing is applied) or throughout the area (if no easing).

Darkness Activation Range
:   These fields configure the darkness levels in which the Ambient Sound plays. The default setting of between 0 and 1 results in a sound that is always playing.

## API References

To interact with Ambient Sound objects programmatically, you will primarily use the following API concepts:

* The  [The AmbientSound Object](/api/classes/foundry.canvas.placeables.AmbientSound.html " The AmbientSound Object")
* The  [The SoundsLayer Canvas Layer](/api/classes/foundry.canvas.layers.SoundsLayer.html " The SoundsLayer Canvas Layer")
* The  [The AmbientSoundConfig Application](/api/classes/foundry.applications.sheets.AmbientSoundConfig.html " The AmbientSoundConfig Application")

---

### Attributions

"Fossil Caves" map by [FableKit on Patreon](https://www.patreon.com/fablekit "FableKit on Patreon").