/// <references types="cypress"/>

describe('Super Domain',() => {

    it.skip('', () =>{
        cy.visit('www.amazon.com')
        cy.wait(3000)
    })

    it.skip('', () =>{
        cy.visit('www.google.com')
        cy.wait(3000)
    })

    // cypress trows exception when trying to visit one more domain in same function
    it.skip('', () =>{
        cy.visit('www.amazon.com')
        cy.wait(3000)
        cy.visit('www.google.com')
    })
        
    it('', () =>{
        cy.visit('www.amazon.com')
        cy.wait(3000)
        cy.visit('www.amazon.com/customer-preferences/')
    })

    
})