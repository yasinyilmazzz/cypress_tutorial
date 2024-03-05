/// <references types="cypress"/>

describe('Suggested elements',() => {

    it('', () =>{
        cy.visit('www.google.com')
        cy.get("[name='q']").type('iphone')

        cy.get('li span b').contains('14 pro max').click()

    })
        
    
    
})