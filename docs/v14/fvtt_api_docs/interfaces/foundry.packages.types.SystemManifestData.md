---
title: "SystemManifestData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.packages.types.SystemManifestData.html"
category: "interfaces"
---

# Interface SystemManifestData

The data structure for system.json.

interface SystemManifestData {  
Â Â Â Â [authors](#authors)?: [PackageAuthorData](foundry.packages.types.PackageAuthorData.md)[];  
Â Â Â Â [background](#background)?: string;  
Â Â Â Â [bugs](#bugs)?: string;  
Â Â Â Â [changelog](#changelog)?: string;  
Â Â Â Â [compatibility](#compatibility)?: [PackageCompatibilityData](foundry.packages.types.PackageCompatibilityData.md);  
Â Â Â Â [description](#description)?: string;  
Â Â Â Â [documentTypes](#documenttypes)?: [DocumentTypesConfiguration](../types/foundry.packages.types.DocumentTypesConfiguration.md);  
Â Â Â Â [download](#download)?: string;  
Â Â Â Â [esmodules](#esmodules)?: string[];  
Â Â Â Â [exclusive](#exclusive)?: boolean;  
Â Â Â Â [flags](#flags)?: [PackageFlagsData](foundry.packages.types.PackageFlagsData.md);  
Â Â Â Â [grid](#grid)?: {  
Â Â Â Â Â Â Â Â diagonals?: [GridDiagonalRule](../types/CONST.GridDiagonalRule.md);  
Â Â Â Â Â Â Â Â distance?: number;  
Â Â Â Â Â Â Â Â type?: [GridType](../types/CONST.GridType.md);  
Â Â Â Â Â Â Â Â units?: string;  
Â Â Â Â };  
Â Â Â Â [id](#id): string;  
Â Â Â Â [initiative](#initiative)?: string;  
Â Â Â Â [languages](#languages)?: [PackageLanguageData](foundry.packages.types.PackageLanguageData.md)[];  
Â Â Â Â [license](#license)?: string;  
Â Â Â Â [manifest](#manifest)?: string;  
Â Â Â Â [media](#media): [PackageMediaData](foundry.packages.types.PackageMediaData.md)[];  
Â Â Â Â [packFolders](#packfolders)?: [PackFolderData](foundry.packages.types.PackFolderData.md)[];  
Â Â Â Â [packs](#packs)?: [PackageCompendiumData](foundry.packages.types.PackageCompendiumData.md)[];  
Â Â Â Â [persistentStorage](#persistentstorage)?: boolean;  
Â Â Â Â [primaryTokenAttribute](#primarytokenattribute)?: string;  
Â Â Â Â [protected](#protected)?: boolean;  
Â Â Â Â [readme](#readme)?: string;  
Â Â Â Â [relationships](#relationships)?: [PackageRelationshipsData](foundry.packages.types.PackageRelationshipsData.md);  
Â Â Â Â [scripts](#scripts)?: string[];  
Â Â Â Â [secondaryTokenAttribute](#secondarytokenattribute)?: string;  
Â Â Â Â [socket](#socket)?: boolean;  
Â Â Â Â [styles](#styles)?: string[];  
Â Â Â Â [title](#title): string;  
Â Â Â Â [type](#type): "system";  
Â Â Â Â [url](#url)?: string;  
Â Â Â Â [version](#version): string;  
}

##### Index

### Properties

[authors?](#authors)
[background?](#background)
[bugs?](#bugs)
[changelog?](#changelog)
[compatibility?](#compatibility)
[description?](#description)
[documentTypes?](#documenttypes)
[download?](#download)
[esmodules?](#esmodules)
[exclusive?](#exclusive)
[flags?](#flags)
[grid?](#grid)
[id](#id)
[initiative?](#initiative)
[languages?](#languages)
[license?](#license)
[manifest?](#manifest)
[media](#media)
[packFolders?](#packfolders)
[packs?](#packs)
[persistentStorage?](#persistentstorage)
[primaryTokenAttribute?](#primarytokenattribute)
[protected?](#protected)
[readme?](#readme)
[relationships?](#relationships)
[scripts?](#scripts)
[secondaryTokenAttribute?](#secondarytokenattribute)
[socket?](#socket)
[styles?](#styles)
[title](#title)
[type](#type)
[url?](#url)
[version](#version)

## Properties

### `Optional`authors

authors?: [PackageAuthorData](foundry.packages.types.PackageAuthorData.md)[]

An array of author objects who are co-authors of this package.

### `Optional`background

background?: string

A web URL or local file path which provides a default background banner for
worlds which are created using this system

### `Optional`bugs

bugs?: string

A web url where bug reports may be submitted and tracked

### `Optional`changelog

changelog?: string

A web url where notes detailing package updates are available

### `Optional`compatibility

compatibility?: [PackageCompatibilityData](foundry.packages.types.PackageCompatibilityData.md)

The compatibility of this version with the core Foundry
software. See <https://foundryvtt.com/article/versioning/> for more info on how the
core software structures its releases.

### `Optional`description

description?: string

An optional package description, may contain HTML. Visible on the Setup screen
in "gallery" view as well as in the "Module Management" application.

### `Optional`documentTypes

documentTypes?: [DocumentTypesConfiguration](../types/foundry.packages.types.DocumentTypesConfiguration.md)

Additional document subtypes provided by this system.

### `Optional`download

download?: string

A publicly accessible web URL where the source files for this package may be
downloaded. Required in order to support package installation.

### `Optional`esmodules

esmodules?: string[]

An array of urls or relative file paths for ESModule files to include

### `Optional`exclusive

exclusive?: boolean

Whether this package is a free Exclusive pack.

### `Optional`flags

flags?: [PackageFlagsData](foundry.packages.types.PackageFlagsData.md)

An object of optional key/value flags. Packages can use this namespace for their
own purposes, preferably within a namespace matching their package ID.

### `Optional`grid

grid?: {  
Â Â Â Â diagonals?: [GridDiagonalRule](../types/CONST.GridDiagonalRule.md);  
Â Â Â Â distance?: number;  
Â Â Â Â type?: [GridType](../types/CONST.GridType.md);  
Â Â Â Â units?: string;  
}

The default grid settings to use for Scenes in this system.

#### Type Declaration

* ##### `Optional`diagonals?: [GridDiagonalRule](../types/CONST.GridDiagonalRule.md)

  The default rule used by this system for diagonal measurement on
  square and hexagonal grids.
* ##### `Optional`distance?: number

  A default distance measurement to use for Scenes in this system.
* ##### `Optional`type?: [GridType](../types/CONST.GridType.md)

  A default grid type to use for Scenes in this system.
* ##### `Optional`units?: string

  A default unit of measure to use for distance measurement in this system.

### id

id: string

The machine-readable unique package id, should be lower-case with no spaces or
special characters

### `Optional`initiative

initiative?: string

A default initiative formula used for this system.

### `Optional`languages

languages?: [PackageLanguageData](foundry.packages.types.PackageLanguageData.md)[]

An array of language data objects which are included by this package

### `Optional`license

license?: string

A web url or relative file path where license details may be found

### `Optional`manifest

manifest?: string

A publicly accessible web URL which provides the latest available package manifest
file. Required in order to support package updates.

### media

media: [PackageMediaData](foundry.packages.types.PackageMediaData.md)[]

An array of objects containing media info about the package.

### `Optional`packFolders

packFolders?: [PackFolderData](foundry.packages.types.PackFolderData.md)[]

An array of pack folders that will be initialized once per world.

### `Optional`packs

packs?: [PackageCompendiumData](foundry.packages.types.PackageCompendiumData.md)[]

An array of compendium packs which are included by this package

### `Optional`persistentStorage

persistentStorage?: boolean

Whether updates should leave the contents of the package's /storage folder.

### `Optional`primaryTokenAttribute

primaryTokenAttribute?: string

An Actor data attribute path to use for Token primary resource bars

### `Optional`protected

protected?: boolean

Whether this package uses the protected content access system.

### `Optional`readme

readme?: string

A web url or relative file path where readme instructions may be found

### `Optional`relationships

relationships?: [PackageRelationshipsData](foundry.packages.types.PackageRelationshipsData.md)

An organized object of relationships to other Packages

### `Optional`scripts

scripts?: string[]

An array of urls or relative file paths for JavaScript files to include

### `Optional`secondaryTokenAttribute

secondaryTokenAttribute?: string

An Actor data attribute path to use for Token secondary resource bars

### `Optional`socket

socket?: boolean

Whether to require a package-specific socket namespace for this package

### `Optional`styles

styles?: string[]

An array of urls or relative file paths for CSS stylesheet files to include

### title

title: string

The human-readable package title, containing spaces and special characters

### type

type: "system"

The package type among world, system, and module

### `Optional`url

url?: string

A web url where more details about the package may be found

### version

version: string

The current package version. It is recommended to stick to dot-separated numbers
like "5.0.3" and to not include a leading "v" to avoid string comparison.
See [foundry.utils.isNewerVersion](../functions/foundry.utils.isNewerVersion.md).