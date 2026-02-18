# ABEA System Best Practices Rules for Antigravity

Este documento estabelece as diretrizes e padrões de desenvolvimento para o sistema ABEA (A Bandeira do Elefante e da Arara) no Foundry VTT, baseando-se na implementação atual.

## 1. Arquitetura do Sistema (V12+)

*   **Data Models**: Utilize sempre `foundry.abstract.TypeDataModel` (em `scripts/models/`) para definir a estrutura de dados de Actors e Items. Isso garante validação e tipos consistentes.
*   **Document Classes**: Mantenha a lógica de processamento e métodos globais nas classes base (`AbeaActor`, `AbeaItem`).
*   **Encapsulamento**: Use `prepareDerivedData` para cálculos automáticos que dependem de outros dados (ex: cálculo de Réis, Resistência Máxima).
*   **Imports Modulares**: Mantenha as definições de configuração em `config.mjs` e registre-as no Hook `init`.

## 2. Padrões de Código (JavaScript/MJS)

*   **Shadowing de Contexto**: Use `const system = this.system;` no início de métodos em documentos para facilitar o acesso aos dados.
*   **JSDoc**: Documente todas as classes e métodos principais, especificando tipos de parâmetros e retornos.
*   **Logging**: Use o prefixo `ABEA |` em todos os `console.log` para facilitar a depuração no console do Foundry.
*   **Tratamento de Strings**: Ao realizar buscas ou filtros por nomes de habilidades/itens, utilize `.trim().toLowerCase()` para garantir robustez.

## 3. Lógica de Jogo (Regras de ABEA)

*   **Mecânica 3d6**: O sistema é baseado em `3d6`. Todas as rolagens devem seguir este padrão, aplicando bônus como `Rank * 3`.
*   **Dificuldade (Easy/12)**: A dificuldade padrão para sucessos em façanhas/ataques é 12. Utilize o helper `game.abea.checkFacanha(total, "easy")` quando possível.
*   **Regras de Dano**:
    *   **NPCs**: Dano direto à Resistência. Se `Resistência >= Resistência Máxima`, aplicar status `dead`.
    *   **Personagens**: Se `Resistência >= Resistência Máxima`, o excesso torna-se pontos de `Crítico`. 5 pontos de Crítico resultam em morte (`dead`). Alcançar o máximo de Resistência causa inconsciência (`unconscious`).
*   **Pontos Críticos**: O valor máximo de pontos críticos é 5.

## 4. UI e UX (Templates & Chat)

*   **Chat HTML Rico**: Use templates ou strings HTML formatadas para mensagens de chat. Inclua ícones dos itens/habilidades e use cores consistentes para Sucessos (verde) e Falhas (vermelho).
*   **Handlebars Helpers**: Centralize lógica de UI repetitiva em helpers (ex: `formatNumber` para moeda `pt-BR`).
*   **Templates Parciais**: Divida fichas complexas em "parts" (ex: `actor-skills.hbs`, `actor-weapons.hbs`) para facilitar a manutenção.
*   **Tabs**: Utilize o sistema de abas padrão do Foundry (`_tabs`) para organizar a ficha (Geral, Façanhas, Equipamento, Biografia).

## 5. Automação e Sockets

*   **Propriedade de Token**: Sempre verifique `actor.isOwner` antes de aplicar modificações automáticas.
*   **Socket Communication**: Para ações que afetam atores não controlados pelo usuário (ex: um jogador atacando um NPC), envie um evento via `game.socket` para que o Mestre (GM) processe a alteração.
*   **Status Effects**: Utilize `toggleStatusEffect` com flags de `overlay` apropriadas para condições críticas como Morte.

## 6. Localização (i18n)

*   **Labels Localizados**: Nunca use strings brutas na UI. Use `game.i18n.localize("ABEA.Key")`.
*   **Formatação Cultural**: Utilize localidade `pt-BR` para exibição de números e moedas.

---
*Estes padrões devem ser seguidos rigorosamente para manter a integridade mecânica e visual do sistema ABEA.*
