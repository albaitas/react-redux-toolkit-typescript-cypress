describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('should have a title Todo list', () => {
    cy.get('h1').should('have.text', 'Todo List');
  });
  it('should have a input and button', () => {
    cy.get('input[type="text"]').should('have.value', '');
    cy.get('button').should('have.text', 'Add todo');
  });
  it('should have add text', () => {
    cy.get('input[type="text"]').type('Learn React');
    cy.contains('Add todo').click();
    cy.contains('Learn React');
    cy.get('input[type="text"]').should('have.value', '');

    cy.get('input[type="text"]').type('Learn Redux');
    cy.contains('Add todo').click();
    cy.contains('Learn Redux');
    cy.get('input[type="text"]').should('have.value', '');

    cy.get('input[type="text"]').type('Learn PHP');
    cy.contains('Add todo').click();
    cy.contains('Learn PHP');
    cy.get('input[type="text"]').should('have.value', '');

    cy.get('li').its('length').should('eq', 3);
    cy.get('li:first').contains('Learn React');
    cy.get('li:nth-child(2)').contains('Learn Redux');
    cy.get('li:last').contains('Learn PHP');

    cy.get('li:last-child span:last-child').click();
    cy.get('li').its('length').should('eq', 2);

    cy.get('li:last input[type="checkbox"]').should('not.have.checked');
    cy.get('li:last input[type="checkbox"]').click();
    cy.get('li:last input[type="checkbox"]').should('have.checked');
  });
});
