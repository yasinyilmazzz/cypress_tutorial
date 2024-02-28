/// <references types="cypress"/>

describe('Selectors',() => {

    it.skip('CSS Selector', () =>{
        cy.visit('https://www.amazon.com/')

        //Tag Name
        cy.get('input')

        //ID
        cy.get('#twotabsearchtextbox')

        //Class
        cy.get('.nav-search-field ')

        //Attribute
        cy.get("input[type='text']")

        //Attribute more parameters
        cy.get("[type='text'][id='twotabsearchtextbox']")

    })
        
    it('XPath', () =>{
        // Firstly you should run "run npm install -D cypress-xpath" command
        // Then add "require('cypress-xpath')" to your configuration file
        // If its doesn't work properly, change reference to "/// <references types="cypress"/>"

        cy.visit('https://www.amazon.com/')
        cy.xpath("//input[@id='twotabsearchtextbox']").type("Hello World{enter}")

    })
    
})