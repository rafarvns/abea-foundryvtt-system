# Documentação local do Foundry VTT

Cópia em Markdown da documentação oficial do Foundry VTT, usada como referência no desenvolvimento do sistema.

| Pasta | Uso |
|-------|-----|
| [v14/](v14/) | **Versão alvo.** Referência principal para todo código novo. |
| [v13/](v13/) | Apenas apoio à migração V13 → V14 e histórico. Não usar como base para código novo. |

Cada versão contém:

- `fvtt_api_docs/`: API completa (TypeDoc), com índice em `INDEX.md`. Fonte: `https://foundryvtt.com/api/<versão>/`
- `fvtt_kb_docs/`: artigos da Knowledge Base, com índice em `INDEX.md`. Fonte: `https://foundryvtt.com/kb/`

## Regenerar

Requer Python com `requests`, `beautifulsoup4` e `markdownify`.

```bash
# API (pasta de saída: docs/<versão>/fvtt_api_docs)
python tools/scripts/scrape_fvtt_api.py --version v14

# Knowledge Base (pasta de saída: docs/<DOCS_VERSION>/fvtt_kb_docs)
python tools/scripts/scrape_fvtt_kb.py
```

A KB não tem versão: o site sempre mostra a versão atual do Foundry. Antes de rodar, ajuste `DOCS_VERSION` em [scrape_fvtt_kb.py](../tools/scripts/scrape_fvtt_kb.py).

> A cópia da v13 foi gerada com a versão antiga do scraper e cobre só as ~226 páginas linkadas na página inicial da API. A v14 cobre a API inteira (1963 páginas).
