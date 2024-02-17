/// <reference types="cypress" />

describe('My first Cypress test', () => {

    it('URL Test', () => {

      cy.visit('https://manage-st01-us-01.timusnetworks.com/');

      cy.url().should('include', 'Manage');
    });
  
    it('Title Test', () => {

        cy.visit('https://www.google.com');

        cy.title().should('include', 'Google');


    });
  });