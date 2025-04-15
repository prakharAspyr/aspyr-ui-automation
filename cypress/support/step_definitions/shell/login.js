import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("user open the login page", () => {
  cy.visit("login");
});

When("user enter valid credentials", () => {
  cy.get("#username").type("admin");
  cy.get("#password").type("admin");
  cy.get("#login-btn").click(); 
});

Then("user should be redirected to the dashboard", () => {
  cy.url().should("include", "/dashboard");
});
