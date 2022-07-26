describe('Test App Navigation Authentication Route', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.get('div').get('nav').get('a#auth').contains('Account').click().visit('/auth/login').login({email: 'admin', password: 'admin'})
  });
});
