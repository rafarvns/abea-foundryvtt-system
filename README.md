# A Bandeira do Elefante e da Arara - Sistema para FoundryVTT

Este sistema implementa as regras oficiais do RPG **A Bandeira do Elefante e da Arara** (ABEA) para o Foundry Virtual Tabletop, permitindo que você jogue suas aventuras no Brasil Colonial digitalmente.

## Sobre A Bandeira do Elefante e da Arara

**A Bandeira do Elefante e da Arara** é uma série de fantasia premiada criada por [Christopher Kastensmidt](https://abandeira.org/), ambientada no Brasil do século XVI. As histórias narram as aventuras do explorador holandês Gerard van Oost e do guerreiro iorubá Oludara enquanto desbravam um país repleto de criaturas do folclore brasileiro, como o Saci-Pererê, o Boitatá e o Curupira.

A série é reconhecida internacionalmente, tendo recebido diversas indicações e prêmios, celebrada por sua pesquisa histórica detalhada e integração respeitosa e criativa da mitologia nacional.

Para saber mais sobre o universo, os livros e o autor, visite o **site oficial**:
[https://abandeira.org/](https://abandeira.org/)

## O Módulo FoundryVTT

Este módulo foi desenvolvido para facilitar a gestão de jogos de ABEA no Foundry VTT. Ele automatiza as fichas de personagens, rolagens de dados e outras mecânicas exclusivas do sistema, proporcionando uma experiência fiel ao livro de regras.

Funcionalidades principais (planejadas/implementadas):
- Fichas de Personagem e NPC automatizadas.
- Rolagens de façanhas e combate integradas.
- Gestão de Inventário e Equipamentos.
- Sistema dinâmico de Façanhas (Testes de Atributo/Façanha).

## Visual do Sistema

Abaixo você pode conferir as principais funcionalidades já implementadas no sistema:

### 1. Ficha de Personagem
A ficha de personagem centraliza todas as informações necessárias para o jogador. Ela permite a gestão de atributos, façanhas com níveis (ranks), equipamentos, armas e condições de saúde. Possui um sistema de "Favoritos" para acesso rápido às rolagens mais comuns.

![Ficha de Personagem](assets/prints/ficha-de-personagem.jpg)

### 2. Ficha de NPC
Uma ficha resumida da ficha de personagem, projetada para preenchimento rápido e consulta ágil pelo Mestre. Ideal para gerenciar múltiplos figurantes e antagonistas com facilidade, permitindo acesso a todas as estatísticas sem troca de abas.

![Ficha de NPC](assets/prints/ficha-de-npc.jpg)

### 3. Itens e Façanhas
O sistema possui fichas customizadas para diferentes tipos de itens. As **Façanhas** permitem definir o nível de treinamento, enquanto as **Armas** e **Equipamentos** gerenciam propriedades específicas, peso e bônus.

| Façanha | Item/Equipamento |
| :---: | :---: |
| ![Ficha de Façanha](assets/prints/ficha-habilidade.jpg) | ![Ficha de Item](assets/prints/ficha-item.jpg) |

### 4. Sistema de Façanhas
Uma ferramenta exclusiva para o Mestre solicitar testes (Façanhas) para um ou mais jogadores simultaneamente. 

- **Solicitação**: O Mestre escolhe a façanha, a dificuldade (CD) e quais jogadores devem realizar o teste.
- **Interação**: Jogadores recebem um card no chat e podem realizar a rolagem com um clique.
- **Resultado em Tempo Real**: O card no chat é atualizado dinamicamente conforme os jogadores rolam, permitindo ao Mestre acompanhar quem passou ou falhou instantaneamente.

| Ferramenta do Mestre | Card de Façanha no Chat |
| :---: | :---: |
| ![Solicitar Façanha](assets/prints/solicitar-facanha.jpg) | ![Card de Façanha](assets/prints/solicitar-facanha-feed.jpg) |

### 5. Rolagens e Combate
Todas as rolagens são integradas ao chat do Foundry, exibindo os dados, bônus aplicados e o resultado final de forma clara e temática.

| Rolagem de Ataque | Rolagem de Façanha |
| :---: | :---: |
| ![Rolagem de Ataque](assets/prints/rolagem-ataque-feed.jpg) | ![Rolagem de Façanha](assets/prints/rolagem-facanha-feed.jpg) |

## Instalação

Copie o link do manifesto abaixo e cole na aba de "Sistemas de Jogo" no Foundry VTT para instalar:
`https://github.com/rafarvns/abea-foundryvtt-system/releases/latest/download/system.json`

## Desenvolvimento

Link para o repositório:
[https://github.com/rafarvns/abea-foundryvtt-system](https://github.com/rafarvns/abea-foundryvtt-system)

## Contribuição

Este projeto é de código aberto e construído pela comunidade para a comunidade. Acreditamos que todos podem contribuir para tornar a experiência de jogo ainda melhor!

Se você encontrou um bug, tem uma ideia para uma nova funcionalidade ou quer melhorar a documentação, adoraríamos receber sua ajuda. Não é necessário ser um especialista em programação para participar.

### Como Participar?

- **Reporte Bugs e Sugira Melhorias:** Utilize a aba [Issues](https://github.com/rafarvns/abea-foundryvtt-system/issues) para nos informar sobre problemas ou compartilhar suas ideias.
- **Contribua com Código:** Se você desenvolve, confira as issues abertas ou proponha suas próprias correções.
- **Tradução e Conteúdo:** Ajude a revisar textos e melhorar a qualidade do material.

Todo tipo de colaboração é bem-vinda para manter a bandeira tremulando alto!


## Git Flow

- Crie um branch a partir da `dev`
- Implemente nessa branch sua alteração
- Faça um pull request dessa branch para `dev`, descrevendo a feature ou o bugfix
- Aguarde a avaliação de algum admin do repositorio aprovar, se for aprovado, na proxima release de `dev` para `main`, o recurso estará disponivel para todos automaticamente.
