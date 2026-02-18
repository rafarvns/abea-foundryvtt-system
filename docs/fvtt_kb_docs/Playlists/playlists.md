---
title: "Playlists"
url: "https://foundryvtt.com/article/playlists/"
category: "Playlists"
---

Your web browser has JavaScript disabled which is required in order to properly use the foundryvtt.com website. Certain website features will be disabled or will not work as expected unless JavaScript is enabled.

This website collects anonymous data about how users interact with our website. This data provides us with
valuable insights that help us to improve our products. Some of these analytics features are non-essential
and use browser cookies.

What data we collect and information on how it is used is described in our
[Privacy Policy](/article/privacy-policy/ "Privacy Policy").

# Playlists

## 

## Overview

Foundry Virtual Tabletop supports the use of audio to accentuate player actions or enrich the atmosphere during gaming sessions.

This page details the use of Playlists, the sounds contained within them, and the playlist's various settings.

#### Folders

This directory can contain folders to organize your world's playlists. For details on how to create and use them please see the [Folders](/article/folders/ "Folders") article.

## The Audio Playlists Tab

![The Playlist Directory Controls](https://r2.foundryvtt.com/website-uploads-public/screen/user_1294/the-playlist-directory-controls-2021-05-24.jpg)

The Gamemaster's view of the Playlist Directory sidebar.

The Audio Playlist tab allows Gamemasters and Assistants to create new Playlists and modify existing ones. All players can access this sidebar, to view the currently playing playlists and adjust their client-side volume controls.

Playlists in Foundry can be viewed, created, and managed in this sidebar. Like the Scenes, Actors, and Journal Entries directories, this directory can contain folders to organize your world's audio. Like folders in other directories, the "plus folder" icon will create a new subfolder, and the "circled plus" icon on an item folder will create a new playlist in that folder.

### Global Volume Controls

Global volume controls are client-sided sliders that modify all sounds of certain categories, allowing players to fine-tune volume levels on their end. This panel can be expanded and collapsed with a left-click of the mouse, showing or hiding the following volume sliders:

The **Playlists** volume slider determines the master volume of playlists played by the Gamemaster.

The **Ambient** volume slider adjusts the master volume of Ambient Sounds heard in a Scene.

The **Interface** volume slider adjusts the master volume of sounds triggered through interface actions (such as chat messages and dice rolls).

### Currently Playing Track

If a track is playing, it will be indicated here along with how much of the track has played, and the track's current volume, which you can adjust on the fly. The currently playing area also allows you to quickly toggle if the track should repeat, as well as provides controls to pause and stop the track directly. Pausing a track will not remove it from the currently playing bar, but stopping the track will.

If no track is being played this part of the interface will be hidden.

Changing the volume of a track that is currently playing will change the volume for all users. If you want to adjust the volume for this and all other audio tracks just for you, use the global volume controls.

### Creating Playlists

In order to play audio tracks on demand, or as a sequence, they must be first added to a playlist. A playlist can contain multiple sounds, and the same sound can be in multiple playlists.

Click the "Create Playlist" button at the top of the Playlist Directory sidebar to create a playlist. From there, a prompt will appear, allowing you to enter the name of the playlist. Once you have named your playlist the configuration window will appear, allowing you to set additional details about the playlist. This step is optional, but the following settings can be configured:

Playlist Configuration Details

Playlist Name
:   This is the name of the playlist, and how it will appear on the sound sidebar.

Playback Mode
:   This dropdown list allows you to set a specific playback mode for the playlist. Playback Mode determines the behavior of the playlist when the "Play Playlist" button is pressed.  
    - **Sequential Playback:** Plays each sound in the playlist, one at a time, in order.  
    - **Shuffle Tracks:** Plays each sound in the playlist, one at a time, in a random order.  
    - **Simultaneous Playback:** Plays each sound in the playlist at the same time.  
    - **Soundboard Only:**  Does not allow the playlist to be played as a whole.

Fade Duration (ms)
:   Determines the amount of time that Foundry takes to fade in or out a sound in this playlist as it begins playback or stops playback. The time is in milliseconds. Note that fade time for a playlist is combined with fade time for individual tracks.

Playlist Description
:   This is a text box for writing notes about the playlist, such as artist information, thematic notes, or specific usage situations for the playlist and its sounds.

Bulk Import
:   This button allows you to select a folder, importing all of the sounds contained within it. This creates a new sound for every valid audio file that Foundry detects in the folder, and gives it a basic name with can be edited after the fact.

### Managing Playlists

Playlists on their own have two buttons which are used to add new sounds and cycle the playback mode used.

Create Sound
:   Adds a Sound to the playlist. See the "Adding Sounds" section in this article.

Playback Mode
:   Cycles through the various playback modes as described above.

Playlist Context Menu Options

By right-clicking a playlist you can bring up a context menu with additional options for managing playlists. This context menu has the following options:

Edit Playlist ()
:   Allows you to open the playlist configuration window to change any of the playlist details discussed above.

Clear Folder ()
:   Removes the playlist from all folders, placing it at the top level of the Playlists directory.

Delete ()
:   Deletes the playlist and all contained tracks, after accepting a confirmation prompt.

Duplicate ()
:   Creates a copy of the playlist in the directory.

Export Data ()
:   Exports the playlist's data as a JSON file on your computer.

Import Data ()
:   Imports data into the right-clicked playlist from a JSON file on your computer.

Normally, only Gamemasters and Assistant users can view and manage playlists, but all players can see the names of playlists when they are played. Take care to keep your playlist and track names spoiler-free!

### Adding Tracks

![The Playlist Sound Configuration Sheet](https://r2.foundryvtt.com/website-uploads-public/screen/user_1294/the-playlist-sound-configuration-sheet-2021-05-24.jpg)

The New Track configuration window.

Once a playlist has been created, individual sounds can be added to it by clicking the "Add Sound" button next to the playlist (notated by a plus sign icon). This will bring up the configuration window allowing you to add the sound to the chosen playlist. Once a sound has been created in a playlist, the playlist can be expanded to manage the individual sound, such as editing the name or sound source, toggling the track to loop when played, or deleting the sound from the playlist.

Track Configuration Details

Track Name
:   The name of the sound, as seen in the Playlists Directory. This is the name all players see in the Playlists Directory sidebar while the sound is playing.

Audio Source
:   The source file for the sound. This can either be a file stored in Foundry directories, or a direct URL link to a sound file online. FVTT supports .flac, .mp3, .wav, .ogg, .webm and .opus audio files. See the audio section of the [Media Optimization Guide](/article/media/ "Media Optimization Guide") for more details.

Volume
:   The volume of the individual sound. The sound's volume is also affected by the Master Playlists volume slider.

Repeat
:   Determines whether the sound repeats when played. Note that currently, sounds do not loop seamlessly - there will be a short gap between loops, regardless of the sound file chosen.

Fade Duration (ms)
:   Determines the amount of time that Foundry takes to fade in or out a sound as it begins playback or stops playback. The time is in milliseconds. Note that fade time for tracks is combined with fade time for playlists.

Sound Description
:   This is a text box for writing notes about the sound, such as artist information, thematic notes, or specific usage situations.

Track Context Menu Options

By right-clicking a track you can bring up a context menu with additional options for managing tracks. This context menu has the following options:

Edit Sound ()
:   Allows you to open the track configuration window to change any of the track details discussed above.

Preload Sound ()
:   Order Foundry to begin loading a sound in preparation of playback. This can reduce delays between a GM playing a track and users hearing it start to play, which is especially useful for very large sound files.

Delete Sound ()
:   Deletes the audio track, after accepting a confirmation prompt.

## API References

To interact with Playlists programmatically, consider using the following API concepts:

* The  [The Playlist Document](/api/classes/foundry.documents.Playlist.html " The Playlist Document") Playlist Document
* The  [The Playlists Collection](/api/classes/foundry.documents.collections.Playlists.html " The Playlists Collection") Playlists Collection
* The  [The PlaylistDirectory Sidebar Directory](/api/classes/foundry.applications.sidebar.tabs.PlaylistDirectory.html " The PlaylistDirectory Sidebar Directory") The PlaylistDirectory Sidebar Directory
* The  [The PlaylistConfig Application](/api/classes/foundry.applications.sheets.PlaylistConfig.html " The PlaylistConfig Application") The PlaylistConfig Application
* The  [The PlaylistSoundConfig Application](/api/classes/foundry.applications.sheets.PlaylistSoundConfig.html " The PlaylistSoundConfig Application") The PlaylistSoundConfig Application