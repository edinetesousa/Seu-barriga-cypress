
import cadastroPage from "../support/pages/cadastroPage";
import homePage from "../support/pages/homePage";
const { randomName, randomEmail, randomPassword } = require("../support/utils");

describe('Realizar cadastro e validação de mensagens', () => {
  beforeEach(() => {
    homePage.acessarPage();
    homePage.clicarNovoUsuario();
    homePage.validaHomePage();
    cy.title().should('eq','Seu Barriga - Novo Usuário' )
  });

  context('Cadastro no Site Seu Barriga', () => {
  it('Cadastro com Sucesso', () => {
    cadastroPage.cadastrarUsuario(randomName(), randomEmail(), randomPassword());
    cy.contains('Usuário inserido com sucesso').should('exist');
  });

  it('Cadastro com campo nome vazio', () => {
    cadastroPage.cadastrarUsuario(null, randomEmail(), randomPassword())
    cy.contains('Nome é um campo obrigatório').should('exist');
  });

  it('Cadastro com campo email vazio', () => {
    cadastroPage.cadastrarUsuario(randomName(), null, randomPassword())
    cy.contains('Email é um campo obrigatório').should('exist');
  });

  it('Cadastro com campo senha vazio', () => {
    cadastroPage.cadastrarUsuario(randomName(), randomEmail(), null)
    cy.contains('Senha é um campo obrigatório').should('exist');
  });

  });
});