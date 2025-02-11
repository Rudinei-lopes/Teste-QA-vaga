describe('Validação do Formulário de Cadastro', () => {
  
  const name = 'Fulano De Tal';
  const data = '10/02/1900';
  const cep = '54280-540';
  const email = 'geza3433@uorak.com';
  const password = 'Senha@forte123!';

  beforeEach(() => {
    cy.visit('https://www.guiademoteis.com.br/usuario/cadastro')
  });


  it('Deve cadastrar um usuário com sucesso', () => {
    cy.get('.btn-accept').click();
    cy.get('#Nome').type(name);
    cy.get('#sexo-Masculino').click();
    cy.get('#DataNascimento').type(data);
    cy.get('#Cep').type(cep);
    cy.get('#Email').type(email);
    cy.get('#ConfEmail').type(email);
    cy.get('#Senha').type(password);
    cy.get('#checkbox-privacy').click();
    cy.get('.btCadastrar').click();
    cy.get('body').then(($body) => {
      if ($body.find('.noty_message').length > 0) {
        cy.get('.noty_message').should('contain', 'Já existe um cadastro com o e-mail informado.');
      } else { 
        cy.get('#cadastro > h2').should('contain', 'Cadastro');
        cy.get('#cadastroOk > :nth-child(1)').should('contain', 'Tudo Ok! Seu cadastro VIP Guia de Motéis foi concluido com sucesso.');
        cy.get('#cadastroOk > :nth-child(2)').should('contain', 'Para continuar navegando, clique aqui.');
        cy.get('.cadastroOkBc').should('be.visible');
      }
    })
  });
  
  it('Deve exibir erro ao deixar campos obrigatórios vazios', () => {
    cy.get('.btCadastrar').click();
    cy.get('.btn-accept').click();
    cy.get('#qtip-1-content > .error').should('contain', 'Campo nome obrigatório!');
    cy.get('#qtip-0-content').should('contain', 'Campo sexo obrigatório!');
    cy.get('#qtip-2-content > .error').should('contain', 'Campo Data Nascimento obrigatório!');
    cy.get('#qtip-3-content > .error').should('contain', 'Campo CEP obrigatório!');
    cy.get('#qtip-4-content > .error').should('contain', 'Campo email obrigatório!');
    cy.get('#qtip-5-content > .error').should('contain', 'Campo Conf. de Senha obrigatório!');
    cy.get('#qtip-6-content').should('contain', 'Campo senha obrigatório!');
    cy.get('#qtip-7-content > .error').should('contain', 'É preciso concordar com os termos de uso e política de privacidade');
  });

  it('Deve exibir erro ao digitar campo de senha com uma senha fraca', () => {
    cy.get('.btn-accept').click();
    cy.get('#Senha').type('123');
    cy.get('.btCadastrar').click();
    cy.get('#qtip-6-content > .error').should('contain', 'Senha deve ter 4 ou mais caracteres.');
  });

  it('Deve exibir erro ao digitar campo de emails diferentes', () => {
    cy.get('.btn-accept').click();
    cy.get('#Email').type(email);
    cy.get('#ConfEmail').type('teste-email@hotmail.com');
    cy.get('.btCadastrar').click();
    cy.get('#qtip-4-content > .error').should('contain', 'O campo confirmação de email deve ser identico ao campo email.');
  });
  
  
});