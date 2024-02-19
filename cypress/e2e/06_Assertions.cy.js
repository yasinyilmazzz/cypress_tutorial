/// <references types="cypress"/>

describe('06-Assertions',() => {

    it('Contains Function Test', () =>{
        cy.visit("https://automationexercise.com/")

        //1-have-text 
        cy.get('.left-sidebar > h2').should('have.text','Category')

        //2-include
        cy.url().should('include','automation')

        //3-be.visible
        cy.get(".navbar-nav [href='/view_cart']").should('be.visible')

        //4- get element count
        cy.get('a[href]').should('have.length',73)

        //5- find()
        cy.get('li').find("[href='/login']").should('include.text','Login')
    })

     
})