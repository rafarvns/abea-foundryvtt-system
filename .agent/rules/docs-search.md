# Documentation Search Rule

When the user asks you to implement a complex feature, solve a difficult problem, or when you are unsure about how to implement something in Foundry VTT:

1.  **ALWAYS Check Local Documentation First:**
    *   You have a comprehensive local copy of the Foundry VTT API and Knowledge Base documentation in Markdown format.
    *   **Target version: V14.** Use the V14 docs as the source of truth for all new code.
    *   **Locations (V14 — primary):**
        *   API Docs: `docs/v14/fvtt_api_docs/`
        *   Knowledge Base: `docs/v14/fvtt_kb_docs/`
    *   **Locations (V13 — migration support and history only):**
        *   API Docs: `docs/v13/fvtt_api_docs/`
        *   Knowledge Base: `docs/v13/fvtt_kb_docs/`

2.  **Use the Generated Indexes:**
    *   Start by reading the index files to find relevant topics:
        *   `docs/v14/fvtt_api_docs/INDEX.md` (for API classes, methods, and properties)
        *   `docs/v14/fvtt_kb_docs/INDEX.md` (for general concepts, guides, and tutorials)

3.  **Read Specific Files:**
    *   After identifying relevant entries in the INDEX, read the specific Markdown files.
    *   Links inside the API docs point to other local `.md` files, so you can follow them.
    *   Do NOT guess API signatures or optimal implementation patterns if you can look them up.

4.  **Only Use V13 Docs For Migration:**
    *   Consult `docs/v13/` only to understand how existing code behaved under V13, or to compare a V13 signature with its V14 counterpart during migration.
    *   Never introduce new code based solely on the V13 docs. If something exists in V13 but not in V14, treat it as removed or renamed and look up the V14 replacement.
    *   The KB migration guides stop at V12; for V13 → V14 breaking changes, compare the two API doc sets and check the official release notes (https://foundryvtt.com/releases/).

5.  **Confirm Understanding:**
    *   Briefly mention in your response that you checked the documentation (e.g., "According to the local V14 API docs for `ActorSheetV2`...").

**Regenerating the docs:** see `docs/README.md`.

**Trigger Scenarios:**
*   "How do I use X class?"
*   "Implement a new feature Y."
*   "This code isn't working/throwing an error."
*   "What is the best way to handle Z in Foundry V14?"
*   "Migrate X from V13 to V14."

**Goal:** Ensure implementations are accurate, up-to-date with the target API version (V14), and follow official best practices found in the Knowledge Base.
