# Documentation Search Rule

When the user asks you to implement a complex feature, solve a difficult problem, or when you are unsure about how to implement something in Foundry VTT:

1.  **ALWAYS Check Local Documentation First:**
    *   You have a comprehensive local copy of the Foundry VTT API and Knowledge Base documentation in Markdown format.
    *   **Locations:**
        *   API Docs: `tools/scripts/fvtt_api_docs/`
        *   Knowledge Base: `tools/scripts/fvtt_kb_docs/`

2.  **Use the Generated Indexes:**
    *   Start by reading the index files to find relevant topics:
        *   `tools/scripts/fvtt_api_docs/INDEX.md` (for API classes, methods, and properties)
        *   `tools/scripts/fvtt_kb_docs/INDEX.md` (for general concepts, guides, and tutorials)

3.  **Read Specific Files:**
    *   After identifying relevant entries in the INDEX, use `view_file` to read the specific Markdown files.
    *   Do NOT guess API signatures or optimal implementation patterns if you can look them up.

4.  **Confirm Understanding:**
    *   Briefly mention in your response that you checked the documentation (e.g., "According to the local API docs for `ActorSheetV2`...").

**Trigger Scenarios:**
*   "How do I use X class?"
*   "Implement a new feature Y."
*   "This code isn't working/throwing an error."
*   "What is the best way to handle Z in Foundry V5/V6/V13?"

**Goal:** Ensure implementations are accurate, up-to-date with the latest API version (v13+), and follow official best practices found in the Knowledge Base.
