import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { getUniqueName,createUniqueName } from "../../nameStore";

Given("user open the calc page", () => {
  cy.get('a[data-testid="compute-link"]').click();
  //   cy.get("compute-link");
  cy.url().should("include", "/compute");
});

When("user creates a parent with name {string}", (name) => {
  cy.get("#createNew-btn").click();
  cy.wait(1000); // Wait for the modal to appear
  cy.get('#create-category-btn').click({ force: true });
  cy.wait(1000); // Wait for the modal to appear
  cy.get('input[placeholder="New Parent"]').type(`${createUniqueName(name)}{enter}`);
});

When("user creates a category with name {string} under {string}",(name, parent) => {
  cy.wait(1000); // Wait for the modal to appear
  cy.contains(getUniqueName(parent)).click({force:true}); 
  cy.wait(1000); // Wait for the modal to appear
  cy.get("#createNewSubCategory-btn").click();
  cy.wait(1000); // Wait for the modal to appear
  cy.get('input[placeholder="New Category"]').type(`${createUniqueName(name)}{enter}`);
});


When("user creates a new calc with name {string} description {string} type {string} and category {string}", (name,description,type,category) => {
  cy.get("#createNew-btn").click();
  cy.wait(1000); // Wait for the modal to appear
  cy.get('#create-calc-btn').click({ force: true });
  cy.get("#name").type(createUniqueName(name));
  cy.get("#description").type(description);
  cy.get('#type')
  .should('exist')
  .select(type); 
  const uniqueSubcategory = getUniqueName(category);

  cy.get('#subcategory')
    .should('exist')
    .find('option')
    .then((options) => {
      const match = [...options].find((opt) => opt.textContent.includes(uniqueSubcategory));
      if (match) {
        cy.get('#subcategory').select(match.value);
      } else {
        throw new Error(`No option found for ${uniqueSubcategory}`);
      }
    });
  
});

When('user clicks on {string}', (action) => {
  cy.wait(2000);
  cy.get(`#${action}-calc-btn`).click();
});


When('user uploads the calc file {string}', (fileName) => {
  cy.get('#upload-calc').attachFile(fileName, { force: true });
  cy.wait(5000);
});

