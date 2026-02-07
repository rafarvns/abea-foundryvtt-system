# Foundry V13 SceneControl Tools Structure

**Contexto:** Desenvolvimento de módulos/sistemas para Foundry VTT V13+ (ou ambientes específicos).
**Data:** 07/02/2026

## Problema
Ao tentar adicionar ferramentas (`tools`) a um grupo de controle de cena (`SceneControl`) usando `Array.push()`, ocorreram erros como `push is not a function` ou a ferramenta não foi renderizada.

## Causa
Em versões mais recentes do Foundry VTT (V13+), a propriedade `tools` dentro de um objeto `SceneControl` pode ser estruturada como um **Objeto (Map/Dictionary)** e não como um Array. Isso difere da documentação tradicional ou de versões anteriores.

## Solução
Ao definir ou manipular `tools`, deve-se suportar a estrutura de Objeto.

### Exemplo de Definição Correta:
```javascript
const myControl = {
    name: "my-control",
    title: "My Control",
    layer: "token",
    tools: {
        "my-tool": {
            name: "my-tool",
            title: "My Tool Icon",
            icon: "fas fa-dice",
            button: true,
            onClick: () => { ... }
        }
    }
};
```

### Exemplo de Injeção Segura:
```javascript
// Verifique se é Array ou Objeto antes de inserir
if (Array.isArray(controls.tools)) {
    controls.tools.push(myTool);
} else {
    controls.tools["my-tool"] = myTool;
}
```

## Outros Detalhes
- Camadas (`layer`): Grupos de controle personalizados devem estar associados a uma camada válida (ex: `token`, `notes`) ou uma camada personalizada registrada, caso contrário, eventos de clique podem não ser capturados corretamente.
- Eventos: Para botões (`button: true`), use `onClick`. O uso de `onChange` é tipicamente para ferramentas de alternância (toggles).
