/// <references types="cypress"/>

describe('05-Contain',() => {

    it('Contains Function Test', () =>{
        cy.visit("https://automationexercise.com/")

        //1. Way - You can use contains() function for locate element with contain any text
        cy.contains('Signup').click();

        cy.get("[name='name']").type('Cypress_test');
        cy.get("[data-qa='signup-email']").type('cytest@cypresstest.com');
        cy.get('[data-qa="signup-button"]').click()

        //2. Way
        cy.contains("[data-qa='create-account']","Create").click();

        //3. Way - you can use contains function without case sensivity
        cy.contains("Create",{matchCase: false}).click();
    })

     
})