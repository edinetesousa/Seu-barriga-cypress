///<reference types ='cypress' />
import cadastroPage from "../support/pages/cadastroPage";
import homePage from "../support/pages/homePage";
const { randomName, randomEmail, randomPassword } = require("../support/utils");

describe('Realizar cadastro e validação de mensagens', () => {
  beforeEach(() => {
    homePage.acessarPage();
    homePage.clicarNovoUsuario();
    homePage.validaHomePage();
    cy.title().should('eq', 'Seu Barriga - Novo Usuário')
  });

  context('Cadastro no Site Seu Barriga', () => {
    it('Cadastro com Sucesso', () => {
      cadastroPage.cadastrarUsuario(randomName(), randomEmail(), randomPassword());
      cadastroPage.msgCadastroSucesso().then((mensagem) => {
        expect(mensagem).eq('Usuário inserido com sucesso')
      });
    })
    it('Cadastro com campo nome vazio', () => {
      cadastroPage.cadastrarUsuario(null, randomEmail(), randomPassword())
      cadastroPage.msgCadastroVazio().then((mensagem) => {
        expect(mensagem).eq('Nome é um campo obrigatório')
      });
    });

    it('Cadastro com campo email vazio', () => {
      cadastroPage.cadastrarUsuario(randomName(), null, randomPassword())
      cadastroPage.msgCadastroVazio().then((mensagem) => {
        expect(mensagem).eq('Email é um campo obrigatório')
      });
    });

    it('Cadastro com campo senha vazio', () => {
      cadastroPage.cadastrarUsuario(randomName(), randomEmail(), null)
      cadastroPage.msgCadastroVazio().then((mensagem) => {
        expect(mensagem).eq('Senha é um campo obrigatório')
      });
    });

  });
});