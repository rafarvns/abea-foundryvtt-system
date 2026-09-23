---
title: "Package Management"
url: "https://foundryvtt.com/article/package-management/"
category: "Package Management"
---

Your web browser has JavaScript disabled which is required in order to properly use the foundryvtt.com website. Certain website features will be disabled or will not work as expected unless JavaScript is enabled.

This website collects anonymous data about how users interact with our website. This data provides us with
valuable insights that help us to improve our products. Some of these analytics features are non-essential
and use browser cookies.

What data we collect and information on how it is used is described in our
[Privacy Policy](/article/privacy-policy/ "Privacy Policy").

# Package Management

## 

## Overview

After your submitted package is approved, you'll get access to a Package Management site as part of the approval process. From this location you can find a list of all of your approved packages, and can manage aspects of the how your Packages are displayed on the Official package list. This article focuses on package versions, however.

## Package Versions

This section directly populates the list of released versions in the Foundry System & Modules section of the website and informs the package installation UI within Foundry which version to download. There is no limit to how many package versions you can have, and we can leverage this to allow users to backtrack and install a previous version. This also allows us to "un-release" a version if it turns out there's problems with it, rolling back to a previous version.

Deleting the latest version from this list will prevent new installations from the UI from installing, but will not prevent updates if the manifest url points to a json with a later version.

All packages submitted to the repository start with one empty version initially. You can click **Add another Package Version** to create a new version to fill out.

At the far right of a version row, you can click **Delete** to remove the version on that row. Note: There is confirmation when deleting a version, and no way to undo this. If you delete a version accidentally, you will need to re-add and fill it out again to restore it.

If a package has no Package Versions present, it will not be available on either the official package list or in the Foundry UI.

![Available Package Versions List-20250428-2](https://r2.foundryvtt.com/website-uploads-public/screen/user_681/available-package-versions-list-20250428-2-2025-04-28.webp)

An example of how these fields display at the bottom of a module's page.

Version Number
:   This is the version number of the package. This should match the version number of the linked module.json. If this increments but the linked manifest json's `version` field has not incremented, automatic updates will not pick up the change.

Package Manifest URL
:   This is the url to the `module.json` for this particular release. This `module.json` should have a `download` field that points at a `zip` of just this release. This is important as it allows a user to go back and download/install a specific version of the module from the history.

Release Notes URL (optional)
:   A nice-to-have url which points to a release note for this particular release. It could link to a specific heading of a larger release notes file, or to a release-specific page. It's common to include a changelog in the repository's README or to use your source control host's release feature for this.

Required Core Version
:   This informs the Foundry Package Installer UI which version of the module to offer based on the Core version being used. Example: A package has two versions, one with the "Required Core Version" of `0.7.4` and one with `0.6.6`. A Foundry user looking for this package on a `0.6.6` version of foundry will be served the manifest url which satisfies this requirement. Should match the `minimumCoreVersion` field in the linked `module.json`. The minimum required Foundry Core version that this particular release requires to work.

Compatible Core Version
:   Should match the `compatibleCoreVersion` field in the linked `module.json`. The maximum Foundry Core version you are confident to say that this package works in. Note that nothing stops a user from installing the package on a version of Foundry Core that is higher than this.
:   Keep this up to date at all times, especially when breaking changes happen.

## Package Compatibility

Packages can denote compatibility with Foundry VTT core versions using the compatibility field (see [Introduction to Module Development](/article/module-development/ "Introduction to Module Development")).

The `minimum` and `maximum` fields are hard enforced by the core software. A package marked `minimum: 12` and `maximum: 12` can only be installed and enabled on a Version 12 build of Foundry VTT. It's not possible to install it in V11, nor V13. It will not show up in the list of packages available to install for a V13 user, and if already installed, will flag a red error in the UI and refuse to enable inside of a World.

The `verified` field meanwhile is used to provide guidance to the user. For example, `verified: 12` or `verified: 12.330` does not block usage of the package. The first format is generation-wide, the second is build-specific, but in both cases the following occurs:

1. If the user is on a version that meets the verified version (for generation-wide, any V12 build or older, for build-specific, any build 12.330 or less), it gets the green badge of honor indicating it is verified as good to go.
2. If the user is on a version that doesn't meet the verified version, but it's the same generation (such as V12 or V12.331), it gets a neutral no-color badge, neither encouraging nor deterring users away from usage.
3. If it's not even the same generation( such as V11 or V11.311), it gets a yellow warning badge to warn users that behavior has not been verified, and things may break.

In all of these cases, the package still shows up in the install list (so long as it isn't archived), can be installed, and can be enabled in a World.

### Sidegrading

To assist in keeping compatibility up-to-date, we offer a feature called sidegrading. If a remote manifest and/or the website does not offer a new version, but does offer new metadata, the local installed version of that Package gets sidegraded with the new values. Please see the chart below)for easy visual reference of what fields are included, and how they are treated.

We highly recommend package admins keep their compatibility info updated on the website for best user experience, with the following per-field advice:

minimum:
:   We recommend you set this to oldest version that you know the core functionality of your package supports, or at least to the version you first released on.

verified:
:   We recommend setting this using a generation-wide format (such as 13) for most usecases, although if you are more cautious, then use the built-specific format (such as 13.341). Keeping this updated, be it via new releases or sidegrading, helps reduce user confusion and complaint.

maximum:
:   For many packages, you'll want to leave this empty unless you know for certain that your package doesn't work with an upcoming Foundry VTT Version, in which case you can mark it in admin and have that info sidegraded to users. For Systems, you may want to consider setting this to the same version you are releasing on until you verify the next Version to prevent users from migrating their Worlds forward with no way back short of a backup.

## How Foundry installs Packages

Foundry's package installation and update process is robust enough to allow automatic update detection and installation, while also allowing users who wish to to install a specific version of a package. Foundry also allows users the freedom to install packages from any source, not just the official list. So it's important to understand exactly how Foundry's client installs packages and checks for updates.

Setting up a package to make full use of this ability requires a little legwork, but for modules with frequent updates, the rewards are peace of mind.

Installation is fairly straightforward and can be done in one of two ways.

#### From the UI

1. User opens the UI, finds a package to install, clicks "Install."  
   UI is populated from packages submitted and accepted to [https://foundryvtt.com/packages](/packages) with at least one release.
2. Foundry fetches the manifest from the latest release with a matching core version as the client that was submitted to the module's `foundryvtt.com/admin` page and looks for a `download` url within it.
3. Foundry downloads the manifest's `download` url and checks if it is a zip file. If so, it unzips.

#### From a user-input manifest url

1. User opens the UI and inputs a manifest url, clicks "Install."
2. Foundry fetches the manifest json and gets the `download` url from it.
3. Foundry downloads the manifest's `download` url and checks if it is a zip file. If so, it unzips.

## How Foundry checks for Package Updates

1. User initiates the flow by either clicking on "Check Update" an individual module or the "Update All" button.
2. If the Package is listed in the Package Repository:  
   2.a Foundry checks to see if the `manifest` field has changed in the listing and points to a newer version compatible with the installed version of Foundry.  
   2.b If so, Foundry prompts the User to see if they want to use the old local value, or the new Package Repository value (recommended)  
   2.c If the User selects "Yes", the local `manifest` is overwritten with the new value from the Package Repository
3. Foundry fetches the manifest from the url in the currently installed package's manifest json.
4. Foundry compares the `version` strings of the installed module's manifest against the fetched manifest.  
   4.a If the user is doing this on an individual package they have to then click the "Update" button.
5. If Foundry determines that the fetched manifest json has a newer version, it then downloads that manifest's `download` and checks if it is a zip file. If so, it unzips.
6. If Foundry determines that no new version exists, but that new Remote metadata values exist for the version, Foundry will execute an automatic update of that metadata. The Fields that get updated and from what source are according to the following table:

![Package Management - Metadata Table](https://r2.foundryvtt.com/website-uploads-public/screen/user_1294/package-management-metadata-table-2021-04-30.png)

"Table of metadata update sources."

![Package Management - Metadata Example](https://r2.foundryvtt.com/website-uploads-public/screen/user_1294/package-management-metadata-example-2021-04-30.png)

An example of the metadata update process for a game system.

## API References

The following concept is utilized when Foundry checks for updates:

* Foundry uses its `isNewerVersion` helper function to compare manifest version strings. See:  [isNewerVersion](/api/modules/foundry.utils.html#isNewerVersion.html " isNewerVersion")