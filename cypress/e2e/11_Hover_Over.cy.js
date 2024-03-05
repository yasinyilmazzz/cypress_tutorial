/// <references types="cypress"/>

describe('Hover Over',() => {

    it('Hover Over Test', () =>{
        cy.visit("https://www.amazon.com/")
        cy.get('#icp-nav-flyout').trigger('mouseover');

        cy.waitFor(3000)

        cy.contains('Change country/region.').click();

        cy.get('#icp-dropdown').select("Turkey (Türkiye)",{force: true});

    })
        
  
    
})