// cypress/support/loginHelper.js
export function login() {
  cy.visit('/login');
  cy.get("#username").type("admin");
  cy.get("#password").type("admin");
  cy.get("#login-btn").click(); 
  cy.url().should("include", "/dashboard");
}
