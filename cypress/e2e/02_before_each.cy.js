/// <reference types="cypress" />

describe('My first Cypress test', () => {
    beforeEach( 'Working before each test', () => {
        cy.visit('/')
        // You can define your base url with '/' syntax
        // to navigate use visit()
    })
        

    it('URL Test', () => {
        cy.url().should('include','google')   
        cy.url().should('equal','https://www.google.com/') 
        // to get title use url()   
    })

    it('Title Test', () => {
        cy.title().should('include','Google')       
    })

    it('Search Test', () => {
        cy.get("[name='q']",{timeout:3000}).type('Timus Networks{enter}')
        // get() -> locate the element
        // type() -> type the text
        // enter() -> press the enter key
    })

})