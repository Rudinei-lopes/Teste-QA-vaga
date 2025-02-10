# Teste-QA

Teste de automatização para vaga de QA pleno.

## Pre-requirements

It is required to have Node.js and npm installed to run this project.

> I used versions `v18.11.0` and `8.19.2` of Node.js and npm, respectively. I suggest you use the same or later versions.

## Installation

Run `npm install` (or `npm i` for the short version) to install the dev dependencies.

## Tests

> **Note:** Before running the tests, make a copy of the `cypress.env.example.json` file as `cypress.env.json`, which in the real world, you would update with valid credentials.
>
> The `cypress.env.json` file is included on [`.gitignore`](./.gitignore) and you're safe that confidential info won't be versioned.

Run `npm test` to run the test in headless mode.

Or, run `npm run cy:open` to open Cypress in interactive mode.


Para testar uma nova conta por favor colocar um email novo no campo "const email" no diretorio e2e/formTests.cy.js, mas coloquei uma verificação, para caso o usuário já tenha uma conta ele não quebra o teste;

## Detalhes 
um detalhe que percebi quando estava automatizando os campos, é que o Campo "Confirme o e-mail" quando está vazio contem texto errado na mensagem de ERRO "Campo Conf. de Senha obrigatório!" o correto seria "Campo Conf. de E-mail obrigatório!".
![EX: erro no texto de mensagem de Confirma e-mail](./docs/erro-msg-email.png)


## Aqui você encontrará o relatório com os resultados dos testes
Teste automatizado efetuado seguindo os requisitos iniciais
1- Preencher o formulário corretamente e enviar → Deve exibir mensagem de sucesso.
2- Deixar campos obrigatórios vazios → Deve exibir mensagens de erro.
3- Digitar uma senha fraca (exemplo: "12345") → Deve exibir erro de validação.
4- Digitar e-mails diferentes nos campos de "E-mail" e "Confirmação de E-mail" → Deve exibir erro.

Imagens 
![EX: cypress files structure](./docs/validacao-teste-ui.png)