/// <references types="cypress"/>

describe('Navigation',() => {

    it('Back, forward, refresh', () =>{
        cy.visit("https://www.amazon.com/")
        cy.get('#nav-orders').click()
        cy.wait(3000)

        // go back
        cy.go(-1)
        cy.wait(3000)

        // go forward
        cy.go(1)
        cy.wait(3000)

        // refresh
        cy.reload()
        cy.wait(3000)

    })
        
    it.skip('Forward', () =>{

    })
    
})