# ABEA System Development Guidelines

This project is a FoundryVTT system module for the ABEA (A Bandeira do Elefante e da Arara) RPG.

## Quick Reference

For specialized topics, see:
- **[Local Docs Guide](./local_docs_guide.md)** - HOW TO USE LOCAL DOCUMENTATION
- [FoundryVTT Architecture](./foundry_architecture.md) - Documents, DataModels, Sheets
- [Best Practices](./best_practices.md) - Clean Code, performance, patterns
- [UI/UX Guidelines](./ui_ux_guidelines.md) - Templates, styles, rendering
- [Sheet Persistence](./sheet_persistence.md) - **CRITICAL** rules for data saving and rendering
- **[Git Policy](./git_policy.md)** - **STRICTLY PROHIBITED** git usage

## Local Documentation

Complete V13 API documentation is available locally:
- **Primary Reference**: `../foundryvtt_v13_docs/foundry_v13_api_reference.md` (19MB consolidated file - search here first!)
- **HTML Docs**: `../foundryvtt_v13_docs/classes/`, `interfaces/`, `functions/`
- **Statistics**: 599 Classes, 393 Interfaces, 260 Functions, 100 Modules
- See [Local Docs Guide](./local_docs_guide.md) for search strategies and navigation tips

## Project Environment

- **FoundryVTT Version**: 13 (build 351)
- **Target Platform**: Node.js / Browser (ES Modules)

## Official Online Documentation (Supplementary)

These online guides provide conceptual understanding (use local docs for API reference):
- [FoundryVTT System Development Guide](https://foundryvtt.com/article/system-development/)
- [FoundryVTT System Data Models Guide](https://foundryvtt.com/article/system-data-models/)
- [FoundryVTT Knowledge Base](https://foundryvtt.com/kb/)
- [API Migration Guides](https://foundryvtt.com/article/migration/)

## Architecture & Development Standards

- **Clean Code & Clean Architecture**: Follow principles of separation of concerns, single responsibility, and descriptive naming.
- **Language Policy**: **ABSOLUTELY EVERYTHING** in the codebase must be in **English**.
  - Variable names, function names, class names, comments, internal documentation, and logic must be exclusively English.
- **Internationalization**: 
  - Primary language is English.
  - Translation files must be provided for English (`lang/en.json`) and Brazilian Portuguese (`lang/pt-br.json`).
- **Testing**: Do not create unit tests for this project.
- **Modularity**: Use ES Modules for organization. Use DataModels for document logic and ApplicationV2 for UI.

## Coding Style

- Use ES6+ features wherever appropriate.
- Use `foundry.applications.api.ApplicationV2` and `foundry.applications.sheets.ActorSheetV2` / `ItemSheetV2`.
- Prefer `foundry.abstract.TypeDataModel` for defining document schemas.
- Keep stylesheets organized and avoid global pollution. Use CSS variables for theming.
