/// <references types="cypress"/>

describe('Checkboxes',() => {

    it.skip('Single Checkbox', () =>{
        cy.visit('https://the-internet.herokuapp.com/checkboxes')
        cy.wait(2000)
        cy.get('#checkboxes > :nth-child(1)').check()
        cy.wait(2000)
        cy.get('#checkboxes > :nth-child(1)').should('be.checked')
        cy.wait(2000)
        cy.get('#checkboxes > :nth-child(3)').uncheck()
        cy.get('#checkboxes > :nth-child(3)').should('not.be.checked')
        
        //2. Way "eq" functionality
        cy.get("input[type='checkbox']").eq(0).check()

    })

    it('All checkboxes', () => {
        cy.visit('https://the-internet.herokuapp.com/checkboxes')
        cy.wait(2000)
        cy.get("input[type='checkbox']").check()
        cy.wait(2000)
        cy.get("input[type='checkbox']").uncheck()
    
    })

        

    
})