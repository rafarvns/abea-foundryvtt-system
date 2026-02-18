---
title: "Combat Encounters"
url: "https://foundryvtt.com/article/combat/"
category: "Combat Encounters"
---

Your web browser has JavaScript disabled which is required in order to properly use the foundryvtt.com website. Certain website features will be disabled or will not work as expected unless JavaScript is enabled.

This website collects anonymous data about how users interact with our website. This data provides us with
valuable insights that help us to improve our products. Some of these analytics features are non-essential
and use browser cookies.

What data we collect and information on how it is used is described in our
[Privacy Policy](/article/privacy-policy/ "Privacy Policy").

# Combat Encounters

## 

## Overview

A fight scene, race, or any particular set of people taking turns performing actions in-game can be considered an "Encounter." An encounter is tied to a specific Scene, which is the one currently being viewed when it is created. Players will only see the encounter in the Combat Tracker if they are currently viewing that scene. When first creating a world in Foundry, there will be no encounters created. An encounter can be easily created with the Create Encounter button found at the top left of the Combat Tracker.

Most game systems make use of situations that rely on characters taking turns, such as time-sensitive combat scenes in roleplaying games. Foundry Virtual Tabletop supports managing turn-based combat scenarios through its Combat Tracker sidebar. This article uses the word "initiative" in a general sense to represent the concept of a numeric ranking of turn order.

## Creating Encounters

The Combat Tracker is accessed from the second icon in the sidebar, marked as a fist. Here, encounters and their listed combatants can be viewed and managed. Like all sidebars, the Combat Tracker can be popped out into its own draggable, resizable window by right-clicking its icon at the top of the sidebar.

[

](https://r2.foundryvtt.com/website-uploads-public/videos/combat-tracker.webm)

An example of adding multiple Tokens to a new Combat Encounter, rolling Initiative, and advancing the turn order.

### Creating Combat Encounters

As the Gamemaster, you can follow these steps to quickly create and manage an encounter in FVTT.

1. Navigate to the scene where the encounter takes place.
2. Select all tokens that are to be included in the encounter, through dragging a rectangle over the combatants or selecting each token with Shift + Left click. With all combatants selected, Right click one of the tokens, and click "Toggle Combat State" (the swords and shield icon) to add the selected tokens to an encounter. Additionally, players can add their own characters to the encounter by clicking this button on their tokens.
3. Roll initiative for all combatants at once using the Roll All button, or roll for just NPCs using the Roll NPCs button, allowing your players to roll initiative for their own characters.
4. With initiative rolled for all combatants, click the Begin Combat button at the bottom of the Combat Tracker to start the encounter.
5. Carry out character's turns. Players can end their own characters' turns, but NPCs must have their turn ended by a user with the Gamemaster or Assistant role. This can be done by clicking the "Next Turn" button at the bottom of the Combat Tracker.
6. When combat has concluded, end the encounter by clicking the "End Combat" button at the bottom of the Combat Tracker. This will delete the encounter and toggle the combat state of all combatants.

## Encounter Tracker UI

![Combat Tracker UI](https://r2.foundryvtt.com/website-uploads-public/screen/user_1294/combat-tracker-ui-2021-12-17.png)

The Combat Tracker has a number of controls to set up and navigate the turn order.

The combat tracker or encounter tracker allows for users to see the current turn order of an encounter, who is currently allowed to act, and who will be able to act next. When an encounter is first created and filled with combatants, players are able to roll their own characters' initiative if desired, using the Roll Initiative button.

More than one encounter can be tracked, and scenes can have multiple encounters being tracked at once, allowing the Gamemaster to manage multiple fights or encounters happening together with their own separate turn orders. The combat tracker UI changes depending on the status of the encounter currently active in the tracker.

Additionally, the combat tracker can be popped out from the sidebar by right-clicking the fist icon () in the sidebar row. This allows users to reposition the combat tracker elsewhere on the screen and also access other sidebar tabs without losing sight of the current encounter and turn order.

Encounter Controls

Create Encounter ()
:   This creates a blank encounter and sets it as the active one. By default all encounters are tied to the scene that's active when it's created. This can be changed by unlinking the combat, switching to a new scene, and linking it using the link combat button explained below.

Delete Encounter ()
:   This removes the currently active encounter.

Previous Encounter ()
:   This activates the previous encounter in the tracker. This button is only available if there are multiple encounters to track.

Next Encounter ()
:   This activates the next available encounter in the tracker. This button is only available if there are multiple encounters to track.

Link Combat ()
:   By default, all newly created encounters are automatically linked to the currently active scene. This toggle allows for the encounter to be tracked across all scenes. The icon will change to a broken chain () to indicate that the encounter has been unlinked and has no associated scene. Toggling this back on will link the encounter to the currently active scene.

Configure Tracker ()
:   This will open the tracker configuration panel, allows the gamemaster to select an actor resource to be tracked (such as current hit points), and if defeated combatants should automatically be skipped.

Combatant Controls

Roll Initiative ()
:   This button only appears on combatants that have been added to an encounter but have not rolled their initiative. By clicking this button initiative will be rolled based on the formula that the game system uses, and the icon will be replaced with the value rolled.

Roll All Combatants ()
:   This button automatically rolls initiative for all combatants currently in the combat tracker which don't already have an initiative score. If there are no combatants added to the encounter this icon will not appear.

Roll All NPCs ()
:   This button automatically rolls initiative for all combatants currently in the combat tracker which don't already have an initiative score and aren't owned by a User. If there are no combatants added to the encounter this icon will not appear.

Reset Initiative ()
:   This button will clear all initiative values for all combatants in the tracker that already have an initiative score, allowing for them to be rerolled.

Set Hidden ()
:   This button hides the combatant in the combat tracker's initiative list. The game master will still be able to see them, and their turn will still be tracked as normal, however.

Mark Defeated ()
:   This button marks the combatant as being defeated. If the Skip Defeated option is toggle on in the tracker options they will be automatically skipped in the turn order.

Round & Turn Controls

Previous Round ()
:   This button shifts the current round count back by one. This also sets the turn to the last combatant in the turn order.

Next Round ()
:   This button shifts the current round count back by one. This also sets the turn to the first combatant in the turn order.

Previous Turn ()
:   This button moves up the turn order to the last combatant to have a turn.

Next Turn ()
:   This button moves down the turn order to the next combatant to have a turn.

Begin Combat
:   This button turns an encounter into an active combat, and begins tracking round number and turns.

End Combat
:   This button automatically end round tracking, clears the combat order, and deletes the encounter. A warning will pop up asking for confirmation before the action completes as it cannot be undone.

End Turn
:   This button is available only to players controlling a token in the combat and who are presently taking their turn. Pressing this button ends their turn and automatically advances the turn tracker to the next combatant.

## Combatants

Encounters are made up by their participants. These participants, known in Foundry as "Combatants", are the actors that take turns with each other in the encounter. You can add a combatant to an encounter by right-clicking a token and clicking the "Toggle Combat State" button, marked by two swords and a shield. If an encounter doesn't exist on the scene, an encounter will be created for the combatant. At this point, a player who controls the combatant can roll for initiative by clicking the Roll Initiative die icon by the combatant in the Combat Tracker.

Editing Combatants

![Combat Tracker Context Menu](https://r2.foundryvtt.com/website-uploads-public/screen/user_1294/combat-tracker-context-menu-2021-12-17.png)

The Combatant Context Menu

Right-clicking a combatant in the combat tracker opens a context menu with various quick actions, detailed below.

Update Combatant
:   Open the combatant configuration panel, which is discussed below.

Clear Initiative
:   Clear that combatant's initiative score and mark them as eligible to roll for initiative.

Re-Roll Initiative
:   Re-roll the combatant's initiative in the current encounter, replacing the current value with the new roll. If the combatant did not have an initiative value set, this will simply roll initiative for them as normal.

Remove Combatant
:   Remove the combatant from the encounter entirely.

Combatant Configuration

![Combatant Configuration Menu](https://r2.foundryvtt.com/website-uploads-public/screen/user_1294/combatant-configuration-menu-2021-12-17.png)

The Combatant Configuration Menu

Foundry VTT allows the GM to edit combatants that have been entered into a combat tracker, to change the name which is displayed, their initiative position, and even whether their entries are visible to players in the tracker.

* **Represented Actor & Token:** This shows the actor and token which are represented by this combatant. These fields are automatically filled out and cannot be manipulated.
* **Displayed Name:** The name that players will see for this combatant.
* **Thumbnail Image:** The image used for the combatant in the combat tracker. This defaults to the actor's scene token, but can be changed using this field and the file picker. This change is only represented in the combat tracker itself.
* **Initiative Value**: A numerical value to denote when this combatant will take its turn. This is automatically filled when initiative is rolled for the combatant. It can be directly modified to adjust the combatant's place in the turn tracker.
* **Status Toggles:** These toggles allow the game master to directly set toggles that function identically to the toggles in the main combat tracker. Hidden hides the entry for this combatant in the tracker from players completely, while defeated shows players the combatant as faded out.

## API References

To interact with Items programmatically, consider using the following API concepts:

* The  [Combat Document](/api/classes/foundry.documents.Combat.html " Combat Document")
* The  [CombatEncounters Collection](/api/classes/foundry.documents.collections.CombatEncounters.html " CombatEncounters Collection")
* The  [Combat Tracker Sidebar Tab](/api/classes/foundry.applications.sidebar.tabs.CombatTracker.html " Combat Tracker Sidebar Tab")
* The  [Combatant Document](/api/classes/foundry.documents.Combatant.html " Combatant Document")
* The  [Combatant Configuration Sheet](/api/classes/foundry.applications.sheets.CombatantConfig.html " Combatant Configuration Sheet")

---

"Haunted Library" map and Tokens by [ForgottenAdventures on Patreon](https://www.patreon.com/forgottenadventures "ForgottenAdventures on Patreon").