/// <reference types="cypress" />

describe('My first Cypress test', () => {
    beforeEach( 'Working before each test', () => {
        cy.visit('/')          
    })

    it('', () =>{
        //case: click settings textlink in footer
        cy.get('.ayzqOc').click()
    })
    
})