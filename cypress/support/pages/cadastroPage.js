let el = require('../elements/cadastroelements').Cadastro
class Cadastro {

    acessarHome() {
        cy.visit('/cadastro')
    }

    cadastrarUsuario(nome, email, senha) {
        if (nome !== null) {
            cy.get(el.inpuCampoNome).type(nome)
        }
        if (email !== null) {
            cy.get(el.inputCampoEmail).type(email)
        }
        if (senha !== null) {
            cy.get(el.inputCampoSenha).type(senha)
        }
        cy.get('.btn').click()
    }

    clicarNovoUsuario() {
        cy.get('a[href="/cadastro"]').click()
    }

    validaHomePage() {
        cy.title().should('eq', 'Seu Barriga - Novo Usuário')
        return cy.get('a[href="/cadastro"]').invoke('text')

    }
    msgCadastroSucesso() {
        return cy.get('.alert').invoke('text')

    }
    msgCadastroVazio() {
        return cy.get('.alert').invoke('text')

    }
}

export default new Cadastro();