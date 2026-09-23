---
title: "Application Configuration"
url: "https://foundryvtt.com/article/configuration/"
category: "Application Configuration"
---

Your web browser has JavaScript disabled which is required in order to properly use the foundryvtt.com website. Certain website features will be disabled or will not work as expected unless JavaScript is enabled.

This website collects anonymous data about how users interact with our website. This data provides us with
valuable insights that help us to improve our products. Some of these analytics features are non-essential
and use browser cookies.

What data we collect and information on how it is used is described in our
[Privacy Policy](/article/privacy-policy/ "Privacy Policy").

# Application Configuration

## 

## Overview

Foundry Virtual Tabletop offers a number of layers of configuration allowing you to customize the application and server to suit your specifications. Whether you are changing these configuration options via the command line when launching FVTT, by editing the options.json configuration file, or by way of the main setup menu. This article will introduce you to the concepts of:

Command Line Flags
:   A very simple way to instruct a program that a configuration option needs to be changed. Best used for temporary changes as they have to be specified every time the program launches. These instructions override the options.json file.

Options.JSON Directives
:   Foundry VTT loads instructions, or directives, from the options.json file every time it launches, allowing you to make more permanent changes to its configuration without having to specify those changes each time you launch.

It is strongly recommended that all users set an Administrator Access Key in order to protect their setup screen from unwanted access.

## The Configuration Menu

![Configuration Window for V9](https://r2.foundryvtt.com/website-uploads-public/screen/user_70/configuration-window-for-v9-2021-12-17.webp)

An overview of the Foundry VTT Setup menu - Configuration Tab.

The simplest way to adjust configuration options for Foundry VTT is through the configuration tab found on the Setup menu. Changing values on this tab alters them in the `options.json` file without having to edit the file directly.

This menu contains the most common options you may wish to change and is most commonly used for adjusting the port number used for hosting or the User Data path.

Any change made to the Foundry VTT's directives through the Setup menu requires a restart of the program before it will take effect, choosing Save Changes will write the data to `options.json` and cause Foundry VTT to shut down.

Configuration Options Detailed

Administrator Password
:   This is the password used to access the Setup menu, whether at first launch or when clicking Return to Setup from the login screen of a world. This password is encrypted and stored within the `admin.txt` Config folder in your User Data directory.

Port
:   Designates the TCP port for Foundry VTT to listen on

Enable UPnP
:   Universal Plug & Play (UPnP) allows Foundry VTT to attempt to automatically configure your network to allow inbound connections. If this is checked, any firewall or router on your network which allows UPnP configuration will be automatically updated with a port-forwarding rule, removing the necesessity to manually port forward. For more information, see [Port Forwarding](/article/port-forwarding/ "Port Forwarding").

User Data Path
:   This directive instructs Foundry VTT to store its data in a different location than default. Please note that the folder you point this to must already exist when you direct to it.

    Note that custom paths for Windows need to either use forward slashes, ex: `D:/path/to/appdata` or escaped backwards slashes, ex: `D:\\path\\to\\appdata`.

Default World
:   Setting this option will cause your Foundry VTT to automatically launch your Game World when the program is started.

Default Language
:   As may be expected, this setting configures the localization of the program and can be leveraged by localization modules to ensure that the interface is translated to the language of your choosing wherever possible.

Compress Static Files
:   When checked Foundry will attempt to minify and compact all files (over 10 KB) sent to clients when they connect, resulting in less network bandwidth consumption for most users.

SSL Certificate
:   Primarily used when configuring your Foundry VTT to use [Audio/Video Chat Integration](/article/audio-video/ "Audio/Video Chat Integration"), this directive points Foundry VTT to the certificate file used for SSL in order to enable HTTPS transfers.

SSL Private Key
:   Primarily used when configuring your Foundry VTT to use [Audio/Video Chat Integration](/article/audio-video/ "Audio/Video Chat Integration"), this directive points Foundry VTT to the private key file used for SSL in order to enable HTTPS transfers.

AWS Configuration Path
:   This directive points Foundry VTT toward the `aws-s3.json` file used when configuring [S3 File Storage Integration](/article/aws-s3/ "S3 File Storage Integration").

## Using Options.json

Foundry's behavior can also be customized via editing the `options.json` file stored in the Config directory within the User Data directory. The directives take one of three data types:

String
:   Alphanumeric characters enclosed in double-quotes. Example: `"examplestring"`

Integer
:   Numbers without decimal points or other punctuation. Example: `12345`

Boolean
:   The values `true` or `false`, all lower-case, without punctuation. `true` enables a given option, `false` disables it.

All options can also be set to `null`, which disables that option. Do not set a value to null unless you're certain it can be disabled.

**Note: JSON is syntax-sensitive, and a malformed options.json file may cause Foundry to not start.**

It is strongly advised that you back up options.json before editing it manually.

Details for options found in options.json

port
:   Integer -- defines the default port used by the application unless one is explicitly provided using the --port flag.

fullscreen
:   Boolean -- determines whether to run the Electron application in fullscreen mode.

dataPath
:   String -- you may specify an explicit path to the user data directory which should be used as the source for packages and other content. This option is only used of the command line flag with the same name is not also passed.

hostname
:   String -- a custom hostname to use in place of the host machine's public IP address when displaying the address of the game session. This allows for reverse proxies or DNS servers to modify the public address.

routePrefix
:   String -- a path which is appended to the base hostname to serve Foundry VTT content from a specific namespace. For example setting this to `demo` will result in data being served from `http://x.x.x.x:30000/demo/`.

sslKey
:   String -- an absolute or relative path that points towards a SSL key file which is used jointly with the `sslCert` option to enable SSL and https connections. If both options are provided, the server will start using HTTPS automatically.

sslCert
:   String -- an absolute or relative path that points towards a SSL certificate file which is used jointly with the `sslKey` option to enable SSL and https connections. If both options are provided, the server will start using HTTPS automatically.

awsConfig
:   String -- an absolute or relative path which points to an optional AWS configuration file in JSON format containing accessKeyId, secretAccessKey, and region properties. This file is used to configure integrated AWS connectivity for S3 assets and backup. For more information, see [S3 File Storage Integration](/article/aws-s3/ "S3 File Storage Integration")

upnp
:   Boolean -- allow Universal Plug and Play to automatically request port forwarding for the Foundry VTT port to your local network address. Default is true.

proxySSL
:   Boolean -- indicates whether the software is running behind a reverse proxy that uses SSL. This allows invitation links and A/V functionality to work as if the Foundry Server had SSL configured directly.

proxyPort
:   Integer -- informs Foundry that the software is running behind a reverse proxy on some other port. This allows the invitation links created to the game to include the correct external port.

## Where Is My Data Stored?

In order to protect your data, and to comply with operating system expectations, Foundry VTT secures the data for your Game Worlds, Systems, and Add-on Modules in a separate, user-specific folder stored in
referred to by Foundry VTT as the User Data folder.

When Foundry VTT is launched it checks for any directive that might change where to find its User Data folder in the following order:

1. **Command Line Flag**. See the Command Line Options below.
2. **Environment Variable**. Set `FOUNDRY_VTT_DATA_PATH`.
3. **Config Data Override**. See the Configuration Menu section above.
4. **Default OS Application Data**.

If multiple options are set, the first valid option will be used. The default application data location for each operating system is the following:

**Windows**

```
%localappdata%/FoundryVTT
```

**macOS**

```
~/Library/Application Support/FoundryVTT
```

**Linux (in order of availability)**

```
/home/$USER/.local/share/FoundryVTT
/home/$USER/FoundryVTT
/local/FoundryVTT
```

### Managing Your User Data

Users frequently ask for best practices for managing their existing User Data folders to ensure that they're maintaining good backups of their worlds or in some cases to move their user data to a new location.

### Backing Up Your User Data

The easiest way to backup your User Data folder is to simply copy or create a zip file of your User Data folder in entirety. Our partners over at Encounter Library have produced a short video on this which details the process perfectly: [Encounter Library - Backing up your User Data Folder](https://www.youtube.com/watch?v=OmbxMmqNNXU)

#### About Sync Services

Incorrect configuration of automated backup services can result in permanent data loss.

The use of data syncing services such as Dropbox, OneDrive, Google Drive, iCloud, and others is attractive as a method to be certain your data is backed up as expected. However, failure to correctly set up these services can prevent Foundry VTT from accessing necessary files in your UserData folder at best, and result in data loss at worst.

If you are going to set up a data syncing service for your UserData folder, please follow these recommendations:

* Make sure that your sync service is set to **only upload**. Do not set the sync software to download from the service to your UserData folder.
* Backup the Data subfolder of your UserData only.
* Ideally, set the syncing service to only perform the synchronization during a time when you will not be actively using the Foundry VTT software.

Moving Your User Data

### Moving Your User Data

The steps for migrating the User Data folder vary slightly depending on which OS you are using, but can be reduced to the following steps (please note that these steps are over-cautious in the interest of protecting your data):

1. Close FVTT if it is open. Open your current User Data path in a file browser.
2. Open a second file browser and create a new folder wherever you plan to store your data. This location can be anywhere, but must not be within the Foundry VTT Application folder.
3. COPY the Config, Data, and Logs folders from your current User Data folder to your new location.
4. Open Foundry VTT and on the configuration tab of the main menu, set your User Data path to the new location and click Save Changes .
5. Foundry VTT will shut down. Relaunch it.
6. Check to see that your Worlds still appear and that the User Data Path still shows correctly on the Configuration Tab.
7. Temporarily move the Data folder from your previous (or default) User Data folder to a new location.
8. Close and Relaunch Foundry VTT.
9. If your worlds still appear in this list, you have successfully moved your User Data to a new location and you may delete the copy of the Data folder you moved in step 7.

User Data File Structure

The user data folder contains the following basic directory and file structure.

* `Config/` - The configuration directory
  + `options.json` - Application configuration options
* `Data/` - User data directory
  + `systems/` - Installed game systems
  + `modules/` - Installed add-on modules
  + `worlds/` - Installed game worlds
* `Logs/` - Server log files

When referencing data from within the virtual tabletop application, any content stored inside the Data directory is publicly available to be served directly. This is where you should put your content that you intend to use inside the application. You are free to create any folder or directory structure that you want inside this data directory. For example, if you have the following file in your file system:

```
<User Data Path>/Data/worlds/my-world/maps/dungeons/deadly-dungeon-01.jpg
```

When using that map image inside Foundry VTT, you can reference it as a web-accessible URL using the path relative to the Data folder

```
worlds/my-world/maps/dungeons/deadly-dungeon-01.jpg
```

#### Regarding File Naming Conventions

Since Foundry VTT works as a web server, you should be sure to use directory and file names which conform to web file and URL encoding conventions. You should generally avoid using spaces or special characters as these are likely to cause issues when serving your content to other players. See the [Google URL Guidelines](https://developers.google.com/maps/documentation/urls/url-encoding) for more detail.

## Using Command Line Flags

Foundry has four command-line flags that can be passed when the application is run at the command line. These work with both the packaged Electron executable as well when starting Foundry via Node.js.

Example usage of the command line syntax to launch the application for various environments are:

#### Node.js

```
node main.js --port=30000 --world=my-world --dataPath=/local/data/foundryvtt
```

#### Electron (Windows)

```
FoundryVTT.exe --port=30000 --world=my-world --dataPath=D:\FoundryVTT
```

#### Electron (Linux)

```
foundryvtt --port=30000 --world=my-world --dataPath=/local/data/foundryvtt
```

Command Line Flag Listing

`--demo`
:   Launching Foundry in demo mode allows you to configure a world which will be automatically launched and reset at a frequency of your choosing. When the world is reset, it is deactivated. The source data for the world is restored to its original state using a provided .zip file, and the next reset is automatically scheduled. Should provide a path that points to a JSON file (can be anywhere) with the following structure:
:   `{"sourceZip": "",
    "worldName": "",
    "resetSeconds":` 
    }

`--port`
:   This specifies the port Foundry will listen on for incoming connections. If not specified, Foundry will use the port defined in options.json, or `30000`. This is the port you should use for [Port Forwarding](/article/port-forwarding/ "Port Forwarding").

`--world`
:   This flag allows for a specific world to be opened immediately as Foundry launches. Note that this option will not work if some setup steps are not completed, such as EULA acceptance.
      
      
    The expected value is the Foundry-generated ID of the world, not the user-facing name of the world. For example, if your campaign was named `My PF2E Campaign`, Foundry assigns an ID for that world by setting all characters to lowercase and replacing spaces with hyphens, resulting in `my-pf2e-campaign`.
      
      
    Because the ID for a world is also used as its datapath, so you can easily look up the ID for a world using the Setup screen. Just locate your world, right-click it, and select the "Edit World" option. The world's ID is listed in the "Data Path" field.

`--dataPath`
:   This lets you specify the user data directory that Foundry will load up to source systems, modules, and world data.

`--noupnp`
:   This disables universal plug and play. If this flag is set, port forwarding will need to be set up, or the server Foundry is running on will need to have a public IP in order for Foundry to be externally accessible by your players.

`--noupdate`
:   This disables the package updating system for the core software, preventing Foundry VTT from checking if there are new core software updates available.

`--adminPassword`
:   Set a default administrator access key for the application which will be required if an admin access key has not been defined. If an admin key has already been set, this option will be ignored.

`--logsize`
:   The maximum size a log can reach before being rotated. The units should be included, e.g. 1024k, 64m, 1g.

`--maxlogs`
:   The maximum number of logs to retain before older ones are deleted.

`--hotReload`
:   Starts the server with hot-reloading enabled. Modules and Systems can specify certain paths to watch for changes. When files under those paths are modified, the changes are injected into the running World and re-rendered without having to refresh the page.
:   The following file-types are supported: `.js`, `.mjs`, `.css`, `.html`, `.hbs`, `.json`. Hot-reload paths are specified in the package manifest flags:
:   `{
    "flags": {
    "hotReload": {
    "paths": []
    }
    }
    }`

`--noipdiscovery`
:   Disables the attempt to learn what the server's external IP address is. Normally this involves making an outbound request to an IP discovery service. Disabling this skips the outbound request and only displays local IP addresses in invitation dialog.

Configuring demo mode

You can configure the demo directive of the `options.json` file used to configure the server in the following way:

```
	{
	...,
	"demo": {
	  "worldName": "demo-world",
	  "sourceZip": "demo-world.zip",
	  "resetSeconds": 3600
	},
	...
  }
```

Alternatively, you can use `--demo=demoConfig.json` which provides an absolute or relative path to a separate `.json` file containing the data structure of the above example. This usage is helpful if you sometimes want to run a demo and sometimes want to run a non-demo on the same server. In this case the `demoConfig.json` would look as follows:

```
	{
	"worldName": "pathfinder-demo",
	"sourceZip": "pathfinder-demo.zip",
	"resetSeconds": 3600,
  }
```