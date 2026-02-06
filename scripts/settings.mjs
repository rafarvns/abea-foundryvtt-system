export const registerSettings = function () {
    // Register System Language Setting
    game.settings.register("abea", "systemLanguage", {
        name: "ABEA.Settings.Language.Name",
        hint: "ABEA.Settings.Language.Hint",
        scope: "world",
        config: true, // Show in standard menu
        type: String,
        choices: CONFIG.supportedLanguages,
        default: "pt-BR",
        onChange: () => SettingsConfig.reloadConfirm({ world: true })
    });
};
