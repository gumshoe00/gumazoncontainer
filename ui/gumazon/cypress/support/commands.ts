// ***********************************************
// This example namespace declaration will help
// with Intellisense and code completion in your
// IDE or Text Editor.
// ***********************************************
// declare namespace Cypress {
//   interface Chainable<Subject = any> {
//     customCommand(param: any): typeof customCommand;
//   }
// }
//
// function customCommand(param: any): void {
//   console.warn(param);
// }
//
// NOTE: You can use it like so:
// Cypress.Commands.add('customCommand', customCommand);
//
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


declare namespace Cypress {
  interface Chainable<Subject = any> {
    login(param: any): typeof login;
    logout(param: any): typeof logout;
  }
}


function login(user: any): void {
  // cy.route("/auth/login");
  cy.get('input[id=email]').type(user.email)
  cy.get('input[id=password]').type(user.password)
  cy.window().setCookie('token', 'mytoken')
  // Ensure login is successful:
  cy.window().getCookie('token').location("pathname").should("include", "/auth/profile")
  // Successfully route to `/profile` path
  // cy.route("/auth/profile");
}

Cypress.Commands.add('login', (user) => login(user));

function logout() {
  // Clear Token Cookie
  cy.window().clearCookie('token')
  // Route to `/login` path
  cy.location("pathname").should("include", "/auth/login");
}

Cypress.Commands.add('logout', (user) => logout());
