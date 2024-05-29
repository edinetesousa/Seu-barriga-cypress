class Home {

    acessarPage() {
        cy.visit('/')
    }

    clicarNovoUsuario(){
        cy.get('a[href="/cadastro"]').click()
    }

    validaHomePage() {
        return cy.get('a[href="/cadastro"]').invoke('text')
    }

    clicarCadastro() {
        cy.get(el.btLogin).click()
    }
}

export default new Home();


