---
title: "Package Release API"
url: "https://foundryvtt.com/article/package-release-api/"
category: "Package Release API"
---

Your web browser has JavaScript disabled which is required in order to properly use the foundryvtt.com website. Certain website features will be disabled or will not work as expected unless JavaScript is enabled.

This website collects anonymous data about how users interact with our website. This data provides us with
valuable insights that help us to improve our products. Some of these analytics features are non-essential
and use browser cookies.

What data we collect and information on how it is used is described in our
[Privacy Policy](/article/privacy-policy/ "Privacy Policy").

# Package Release API

## 

## Overview

Due to overwhelming popular demand, we have implemented a Package Release API for package developer use! This API is similar in functionality to the amazing third-party community solutions such as [FVTT Autopublish](https://github.com/Varriount/fvtt-autopublish) and [Foundry Publish](https://github.com/ghost-fvtt/foundry-publish).

The Package Release API offers a programmatic alternative to using the [New front-end package management tools](/article/front-end-package-management/ "New front-end package management tools"). Instead of manually filling out this form, developers can now send the necessary information about a new release directly to the Foundry API endpoint. The API then uses this information to automatically create a new version, including updating your package's last updated date and time, and sending a package release note to the Foundry Discord.

## How to Use the Package Release API

To use the Package Release API, you send a properly formatted request to the `https://foundryvtt.com/_api/packages/release_version/` endpoint, including an authorization token that is unique to each package. Explaining how to make such a request to an API endpoint is outside the scope of this article, but this is typically done through something like a [GitHub Action](https://github.com/features/actions).

To obtain your token for a package, go to your package's page on the Foundry website. The "Package Release Token" field, located just above the "Save Package" button, contains the pre-generated authentication token that you need. You can easily copy this token by clicking the field, but make sure to store it in a safe place.

Remember: This secret API token can be used to edit your package programmatically. **Do not** share or publish your API key, or we will refresh or revoke the key. If you worry your key has gotten into the wild, we have provided an automated "Refresh" button which will revoke your current token and generate a new one in its place.

### The Request

Now that you have your token, let's use it in a real-world example. The following JavaScript code block shows how to include your release API token as an authorization header, as well as all the components of the response body.

```
response = await fetch("https://foundryvtt.com/_api/packages/release_version/", {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'fvttp_...'
  },
  method: "POST",
  body: JSON.stringify({
    "id": "example-module",
    "dry-run": true,
    "release": {
      "version": "1.0.0",
      "manifest": "https://github.com/example/example-module/issues/releases/download/release-1.0.0/system.json",
      "notes": "https://github.com/example/example-module/releases/tag/release-1.0.0",
      "compatibility": {
        "minimum": "10.312",
        "verified": "11",
        "maximum": ""
      }
    }
  })
});
response_data = await response.json()
```

The Authorization header is self-explanatory for those familiar with APIs. Insert your token (including the `fvttp_`) as an API token by including `"Authorization": "{release_token}"` in your HTTP headers.

The JSON body of the request is made up of a few required and optional fields.

`id`
:   The **required** ID of your package, as listed in your package manifest.

`dry-run`
:   An optional parameter. If you include it with the boolean "true", the API will validate and process your request, but not save any changes. This is a good way to, before releasing a version, make sure that your version, compatibility, and URL information is correct.

`release`
:   A **required** JSON dictionary of your release data, the same format you would use in a manifest file.`release` has several components (see below).  
      
    Components of the `release` element:

`version`
:   The **required** string representing the package version number. A semantic version number is preferred, such as "1.0.0".

`manifest`
:   The **required** string for the URL of your package manifest. **Please Note:** This is not the package manifest URL in your package manifest, which should be pointed to a `latest` branch. Instead, it should point to a **specific** release to allow users to download this specific version of your package.

`notes`
:   The **optional** string for the URL of your release notes for this version of your package. As with your manifest URL, we prefer this to be a discrete list of changes for this release for ease of accessing the most up-to-date, correct information.

`compatibility`
:   The **required** dictionary representing the compatibility for this release. This matches the form of your
    manifest, as explained below.
      
      
    Components of the `compatibility` element:

`minimum`
:   The **required** string for the Foundry version before which this module cannot function. This prevents
    installation for users on these incompatible versions.

`verified`
:   The **required** string for the most recent Foundry version during which this module has been verified to
    work correctly. This is a suggestion to users to run either exactly or at most this version of Foundry when
    installing the module, but will not prevent installation.

`maximum`
:   The **optional** string for the Foundry version which this module has been verified to no longer function.
    We recommend not setting this value unless you have tested or received reports about your module no longer
    working in a recent version of Foundry, as it will prevent installation for any user at or after that version.
    As with `minimum`, this prevents installation for users on these incompatible versions.

Whether you use GitHub Actions, an API platform application, JavaScript, your favorite programming language, or a
combination, this JSON body format and HTTP Authorization header will grant you access to the API.

### Responses

#### Success Responses

On a successful request, you will receive a `200 OK` HTTP status response with the JSON:

```
{
  "status": "success",
  "page": "https://foundryvtt.com/packages/{package_id}/edit/"
}
```

If you included the `dry-run` parameter in the request, you will instead receive the JSON response:

```
{
  "status": "success",
  "page": "https://foundryvtt.com/packages/{package_id}/edit/",
  "message": "Dry run completed successfully. To save, submit the request again without dry-run"
}
```

#### Failure Responses

When an error is thrown, either when processing the request itself or when validating its data, the API responds with the appropriate HTTP Status Code and headers or text to guide you in the right direction.

For example, if you try to submit too many package releases for the same package within 60 seconds of one another, you will receive a `429 Too Many Requests` response with the HTTP Header `Retry-After` telling you how many seconds to wait before sending another response.

Any data validation error will return HTTP Status `400 Bad Request` with a JSON description of the error. Some example errors are provided below:

A required field is missing:

```
{
  "status": "error",
  "errors": {
    "manifest": [
      {
        "message": "This field is required.",
        "code": "required"
      }
    ]
  }
}
```

Invalid data was provided for a field:

```
{
  "status": "error",
  "errors": {
    "manifest": [
      {
        "message": "Enter a valid URL.",
        "code": "invalid"
      }
    ]
  }
}
```

Sometimes, there is an over-arching error with the entire form. For example, a common data validation error is to attempt to name two package releases with the same version number. This would result in the following error response:

```
{
  "status": "error",
  "errors": {
    "__all__": [
      {
        "message": "Package Version with this Package and Version Number already exists.",
        "code": "unique_together"
      }
    ]
  }
}
```

The `"__all__"` error code here is taking the place of a field name. Because the error is spread over two fields (your package's ID and the release version's number), `"__all__"` covers this case.

## How to Get Help with the Package API

If you need further assistance with this feature, help is available.

Discord
:   Drop by our [Discord](https://discord.gg/FoundryVTT) (try the `#dev-support` or `#module-development` channels)

Email
:   [Contact Us](/contact-us) directly