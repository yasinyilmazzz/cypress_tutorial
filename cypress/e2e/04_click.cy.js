/// <reference types="cypress" />

describe('My first Cypress test', () => {
    beforeEach( 'Working before each test', () => {
        cy.visit('/')          
    })

    it.skip('Skipped this test with skip', () =>{

    })

    it('04_Click function', () =>{
        //case: click settings textlink in footer
        cy.get('.ayzqOc').click()
    })
    
})