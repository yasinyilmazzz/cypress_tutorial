/// <references types="cypress"/>

describe('Before And After',() => {
    before(() => {
        cy.log('before works before all case')
    })
    after(() => {
        cy.log('after works after all case')
    })
//________________________________________________________________
    beforeEach(() => {
        cy.log('beforeEach works before each case')
    });

    afterEach(() => {
        cy.log('afterEach works after each case')
    });
//________________________________________________________________
    it('Test Case 1', () =>{
        cy.log('Test Case 1')
    })
        
    it('Test Case 2', () =>{
        cy.log('Test Case 2')
    })
    
})