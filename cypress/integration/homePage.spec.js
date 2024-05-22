describe('Home Page', () => {
    it('should load the home page and display cards', () => {
      cy.visit('/');
      cy.get('.CardContainer').should('have.length.greaterThan', 0);
    });
  
    it('should filter cards by name', () => {
      cy.visit('/');
      cy.get('.SearchInput').type('Pikachu');
      cy.get('.CardContainer').each(($el) => {
        cy.wrap($el).contains('Pikachu');
      });
    });
  
    it('should navigate to card details page when a card is clicked', () => {
      cy.visit('/');
      cy.get('.CardContainer').first().click();
      cy.url().should('include', '/card/');
      cy.get('.CardDetailsContainer').should('exist');
    });
  });
  
  describe('Card Details Page', () => {
    it('should display card details', () => {
      cy.visit('/card/some-card-id');
      cy.get('.CardDetailsContainer').should('exist');
      cy.get('.CardName').should('exist');
      cy.get('.CardImage').should('exist');
    });
  
    it('should show attack details in a dialog when an attack is clicked', () => {
      cy.visit('/card/some-card-id');
      cy.get('.AttackItem').first().click();
      cy.get('.MuiDialog-container').should('be.visible');
      cy.get('.MuiDialogTitle-root').contains('Attack Details');
    });
  });
  