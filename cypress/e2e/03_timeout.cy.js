/// <reference types="cypress" />

describe('My first Cypress test', () => {
    beforeEach( 'Working before each test', () => {
        cy.visit('/')          
    })

    it('', () =>{
        cy.get('[name="q"]',{timeout:3000}).type('Cypress.io{enter}')
    })
})