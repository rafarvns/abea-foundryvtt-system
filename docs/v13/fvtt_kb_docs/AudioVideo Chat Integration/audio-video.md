---
title: "Audio/Video Chat Integration"
url: "https://foundryvtt.com/article/audio-video/"
category: "Audio/Video Chat Integration"
---

Your web browser has JavaScript disabled which is required in order to properly use the foundryvtt.com website. Certain website features will be disabled or will not work as expected unless JavaScript is enabled.

This website collects anonymous data about how users interact with our website. This data provides us with
valuable insights that help us to improve our products. Some of these analytics features are non-essential
and use browser cookies.

What data we collect and information on how it is used is described in our
[Privacy Policy](/article/privacy-policy/ "Privacy Policy").

# Audio/Video Chat Integration

## 

## Overview

Foundry Virtual Tabletop includes built-in technology to allow for audio/video (A/V) conferencing between all of the players in your game. The WebRTC framework used is called *simple-peer*, and relies on direct peer-to-peer connections to establish audio and video conferencing, and leverages the inherent infrastructure in Foundry VTT to do so.

This article will cover the steps necessary to set up A/V integration using a self-signed certification, the A/V Configuration menu and its various options and a technical explanation of A/V integration for users interested in a more detailed understanding of the system.

Video conferencing can consume a significant amount of bandwidth. If your upload speed is relatively low, you may wish to consider alternate services for video conferencing while running your games. This can be understandably inconvenient if the purpose of getting Foundry VTT was to contain your video and audio chat and have it display as an overlay- use of third party relay servers can help mitigate some of the network usage, but the best option if you have insufficient upload speed to support video conferencing is to host Foundry VTT through a third party service.

Configuring SSL is an advanced feature of Foundry VTT and requires technical configuration.

## Enabling A/V Chat Integration

In order to set up A/V Chat Integration, you will need to first configure SSL for your hosted server. There are a variety of ways to do so which we outline here: [SSL and HTTPS](/article/ssl/ "SSL and HTTPS") article. SSL certification is a requirement for A/V Chat Integration due to limitations imposed by browsers in order to protect the security and privacy of their users.

When using a self-signed certificate, most browsers will warn users that they are entering an unsecured site when they visit it for the first time and periodically after that. Users may need to used advanced configuration to allow their browsers to accept self-signed certificates, and will need to click on the "Advanced" button and then "Proceed" after reloading the site to accept the certificate.

Once you have configured your SSL certificates and are connected via HTTPS, Foundry VTT will allow you to enable and configure A/V Chat Integration.

## Configuring Audio/Video Chat Integration

The **AV Configuration** application is accessible from the **Configure Settings** button on the Game Settings Sidebar tab (). This window allows you to customize the A/V broadcast mode (including enabling or disabling A/V integration), designate your preferred webcam and microphone hardware, and even configure a custom relay server. If no microphone or webcam appear in this list, the most likely cause is that the devices are already in use by another program or your browser has not been granted permission to access them.

Audio/Video Configuration

![Audio Visual Configuration](https://r2.foundryvtt.com/website-uploads-public/screen/user_671/audio-visual-configuration-2021-01-21.jpg)

The Audio/Video Configuration application.

Audio/Video Conferencing Mode
:   Used to select whether you wish to disable A/V, transmit audio only, video only, or use both audio and video conferencing.

Voice Broadcasting Mode
:   The method by which your microphone activates to transmit audio. If always enabled, the microphone will continually broadcast. Voice activation will activate the microphone only when it crosses a threshold of volume. Push to talk uses the assigned push-to-talk hotkey to trigger microphone activation while it is held down. The push to talk key can be changed using [Keybinds](/article/keybinds/ "Keybinds").

Nameplates
:   When enabled, the names of all players in the scene will be displayed below their avatars. This option can be configured to display the player name only, character name only, or to alternate between both.

Use Player Border Colors
:   When enabled, the border color will use the a user's designated color as a gradient for their nameplate, making it more clear which user is which.

Video Capture Device
:   A list of available devices which can be used as a video source for video conferencing, choose your camera or video source here. If this list is empty or reads "Unknown Device", you may need to grant permission to use the camera for your browser, or to verify that no other programs are currently using the capture device.

Audio Capture Device
:   A list of available devices which can be used as an audio source, choose your microphone or audio source here. If this list is empty or reads "Unknown Device", you may need to grant permission to use the camera for your browser, or to verify that no other programs are currently using the capture device.

Audio Output Device
:   A list of available devices which FVTT should send audio-video to. By default, this is 'Default Device' which uses whichever device your OS uses as a primary sound output, but you can choose a specific output if you wish to output to headphones but not speakers, for example. (Please note that Firefox users will not see this option unless they have set `media.setsinkid.enabled` to true in their `about:config`).

For details on the configuration of the **Server** tab of A/V Configuration, please see discussion of relay servers below.

### The A/V Chat Dock

The Audio Video Chat Integration dock appears on the left-hand side when A/V Chat Integration is enabled. This sidebar contains a simple transparent background and contains individual frames for each player's camera or avatar, and each frame will light up when each player speaks. The Dock can be easily collapsed, reducing the width and minimizing the frames to a smaller, circular view.

The A/V Chat Dock contains a number of controls which can be used to change particular features of how Audio or Video chat will operate on a per-user basis.

Pop out
:   Hovering over a player frame will display a button which when clicked will pop the frame out into the general canvas area, allowing you to reposition chat windows as necessary.

Minimize Dock
:   Toggles the width of the A/V Chat Dock, so that it occupies less horizontal space, it also reduces the chat frames to a smaller, circular view.

Hide Players List
:   Hides or displays the list of players in the A/V Chat Dock, providing more vertical space for chat frames.

Mute/Unmute Your Audio
:   Controls whether your microphone is muted, preventing you from transmitting audio to other users.

Enable/Disable Your Video
:   Enable or disable your camera, preventing you from transmitting video to other users.

Mute/Unmute Others' Audio
:   Controls whether or not you can hear other users, when muted this will you from hearing their audio as if their microphones have been muted.

Enable/Disable Receiving Video
:   Clicking this button will hide the display of other , preventing you from hearing their audio as if they have all muted their microphones.

Configure Settings
:   This shortcut will bring you directly to the Audio/Video chat settings window.

![Audio Video Chat Integration Sidebar](https://r2.foundryvtt.com/website-uploads-public/screen/user_671/audio-video-chat-integration-sidebar-2022-08-26.webp)

The Audio/Video Chat Dock showing the layout for four players.

## How A/V Integration Works

![Peer to Peer AV](https://r2.foundryvtt.com/website-uploads-public/screen/user_671/peer-to-peer-av-2021-08-19.jpg)

Audio/Video connections when peer-to-peer is functioning correctly.

Audio-Video communication through Foundry VTT primarily uses peer-to-peer connections, which requires that all users need to have UDP ports allowed through software firewalls and routers in order to properly connect.

The first diagram on the right shows an example of a peer-to-peer conference, all users are connected to one another. When one user speaks, they transmit audio and video directly to all other users in the game, and all other users receive that information directly. If the connections are not configured correctly, participants in the A/V conference may be unable to connect to each other and audio and video streams between those users will fail to appear.

#### More about Simple-Peer

Simple-Peer is a free, open-source, concise API for WebRTC which facilitates the creation of peer-to-peer data, video, and audio calls in node.js.

You can read more about Simple-Peer here: <https://github.com/feross/simple-peer>

#### More about WebRTC

WebRTC (Web Real-Time Communication) is an open-source project geared toward enabling high-quality real-time conferencing applications for browsers and mobile platforms. It was initially released in 2011, and allows audio and video communication to work inside web pages through direct peer-to-peer communication, eliminating the need to install plugins or download additional software.

You can read more about WebRTC here: <https://webrtc.org/>

## Using a Jitsi Server

Jitsi is a free, open-source voice conferencing platform which can be used to provide an alternative to peer-to-peer WebRTC communications. By using Jitsi, all users connect to the Jitsi server instead of connecting directly to each other. This often removes the necessity for port forwarding (if the Jitsi server is not hosted on your computer.) Through use of third party modules it is possible to WebRTC in Foundry Virtual Tabletop to use a Jitsi server for better performance and stability. Please see the following resources for more information about using Jitsi:

1. The [Jitsi WebRTC](https://github.com/luvolondon/fvtt-module-jitsiwebrtc "Jitsi RTC Module (DEPRECATED)") module (DEPRECATED).
2. The excellent [Jitsi Server Setup Instructions](https://www.vtta.io/articles/installing-a-self-hosted-jitsi-server "Jitsi Server Setup Instructions") created by community member Solfolango.

## Using a LiveKit Server

LiveKit is a free, open-source audio-video server software designed to allow you to easily build live audio or video experiences. Thanks to community developer Bekit, a [LiveKit](https://foundryvtt.com/packages/avclient-livekit) Add-on Module is available which replaces the base functionality of Foundry VTT's A/V Chat Integration with an alternate relay server which can be used in cases where the server host may not have sufficient bandwidth to support A/V Chat. This is a newer alternative to Jitsi, but like Jitsi requires a third-party server to function. Please see the following resources for more information about using Livekit:

1. The [LiveKit AVClient](https://foundryvtt.com/packages/avclient-livekit "LiveKit AVClient Module") module.
2. The excellent [Resources for Setting up Your Own LiveKit Server](https://foundryvtt.com/packages/avclient-livekit/#user-content-running-your-own-livekit-server "LiveKit Server Setup Instructions") provided by Bekit.

## API References

To interact with AV programmatically, consider using the following API concepts:

* The  [Master Audio/Video controller instance](/api/classes/foundry.av.AVMaster.html " Master Audio/Video controller instance")
* The  [Audio/Video Conferencing Configuration Sheet](/api/classes/foundry.applications.settings.menus.AVConfig.html " Audio/Video Conferencing Configuration Sheet")
* The  [Camera UI View](/api/classes/foundry.applications.apps.av.CameraViews.html " Camera UI View")