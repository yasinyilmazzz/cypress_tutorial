/// <references types="cypress"/>

describe('Suggested Elements',() => {

    it('', () =>{
        cy.visit('http://www.automationpractice.pl')
        cy.wait(3000)
        cy.get('#search_query_top').type('dress')
        cy.wait(3000)
        cy.get('.ac_results').contains('Blouse').click()

        cy.get('h1').should('be.visible')


    })
        
   
})