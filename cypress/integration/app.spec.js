describe('Pokemon TCG App', () => {
    it('loads the homepage', () => {
      cy.visit('/');
      cy.get('input[placeholder="Search Pokemon"]').should('exist');
      cy.get('.card-grid .card').should('have.length.greaterThan', 0);
    });
  
    it('searches for a specific Pokemon', () => {
      cy.visit('/');
      cy.get('input[placeholder="Search Pokemon"]').type('Pikachu');
      cy.get('.card-grid .card').should('have.length', 1);
      cy.contains('Pikachu').should('exist');
    });
  
    it('navigates to card details page', () => {
      cy.visit('/');
      cy.contains('Pikachu').click();
      cy.url().should('include', '/card/');
      cy.get('.card-details').should('exist');
      cy.contains('Pikachu').should('exist');
    });
  });