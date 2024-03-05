/// <references types="cypress"/>

describe('Scroll',() => {

    it('scroll', () =>{
        //scrollIntoView
        cy.visit('http://www.automationpractice.pl')
        cy.wait(3000)

        cy.get('#block_contact_infos').scrollIntoView()
        cy.wait(3000)

        //scrollTo coordinates
        cy.scrollTo(0,0)
        cy.wait(3000)

        //scroll 500px down
        cy.scrollTo(0,5000)
        cy.wait(3000)

        //scroll 300px up
        cy.scrollTo(0,-300)
        cy.wait(3000)

    })


        

    
})