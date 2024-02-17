/// <reference types="cypress" />

describe('My first Cypress test', () => {
    beforeEach( 'Working before each test', () => {
        cy.visit('/')
    })
        

    it('URL Test', () => {
        cy.url().should('include','google')       
    })

    it('Title Test', () => {
        cy.title().should('include','Google')       
    })

    it('Search Test', () => {
        cy.get("[name='q']").type('Timus Networks{enter}')
    })

})