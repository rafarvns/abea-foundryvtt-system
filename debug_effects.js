
// Paste this into your Foundry VTT Console (F12) to debug the ActiveEffect issue

(async () => {
    console.log("ABEA | DEBUG START: Testing ActiveEffect Creation");

    // 1. Check if Status Effects are registered
    console.log("ABEA | CONFIG.statusEffects:", CONFIG.statusEffects);

    // 2. Find a target actor (first one available)
    const actor = game.actors.contents[0];
    if (!actor) {
        console.error("ABEA | No actor found for testing.");
        return;
    }
    console.log("ABEA | Testing on Actor:", actor.name, actor.id);

    // 3. Test retrieving effect data
    const effectId = "dead";
    const effectConfig = CONFIG.statusEffects.find(e => e.id === effectId);
    console.log("ABEA | Effect Config for 'dead':", effectConfig);

    if (!effectConfig) {
        console.error("ABEA | 'dead' status effect not found in CONFIG.statusEffects!");
        return;
    }

    // 4. Test Manual Creation
    const effectData = {
        name: game.i18n.localize(effectConfig.label),
        img: effectConfig.icon, // V13 uses 'img' or 'icon'?
        origin: actor.uuid,
        "flags.core.statusId": effectId
    };
    console.log("ABEA | Attempting to create effect with data:", effectData);

    try {
        const effect = await ActiveEffect.create(effectData, { parent: actor });
        console.log("ABEA | Success! Effect created:", effect);
        // Clean up
        await effect.delete();
        console.log("ABEA | Effect deleted.");
    } catch (err) {
        console.error("ABEA | Creation Failed:", err);
    }

    // 5. Test toggleStatusEffect (Current Implementation)
    console.log("ABEA | Testing toggleStatusEffect...");
    try {
        // Force toggle on
        await actor.toggleStatusEffect(effectId, { active: true, overlay: true });
        console.log("ABEA | toggleStatusEffect passed (check actor sheet)");

        // Wait a bit then toggle off
        setTimeout(async () => {
            console.log("ABEA | Toggling off...");
            await actor.toggleStatusEffect(effectId, { active: false });
        }, 2000);

    } catch (err) {
        console.error("ABEA | toggleStatusEffect Failed:", err);
    }

})();
