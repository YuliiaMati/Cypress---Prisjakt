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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("acceptCookies", () => {
  cy.get('button[data-test="CookieBannerAcceptButton"]').click()
})

Cypress.Commands.add("filterPris", () => {
  cy.get("main button span").contains("Filter").first().parent().click()
  cy.get("div.Hideable--slideleft")
    .contains("button span", /^Pris$/)
    .click()
})

Cypress.Commands.add("rensaFilter", () => {
  cy.get('section[data-test="FilterSection"] button[title="Rensa"]').first().click().click()
})

Cypress.Commands.add("viewAsGrid", () => {
  //cy.get('button[aria-label="Meny"]').should("have.length", 1).first().click()
  //cy.get('div[data-test="MenuCategories"]')
  //  .first()
  //  .contains("Barn & Familj")
  //  .parent()
  //  .click()
  // cy.get('div[data-test="MenuCategories"]')
  //  .first()
  //  .contains("Leksaker")
  //  .click()
  // cy.get('div[data-test="MenuCategories"]')
  //  .first()
  //  .contains("Dockor & Tillbehör")
  //  .click()
  // cy.get('div[data-test="MenuCategories"]').first().contains("Dockor").click()
  cy.get('button[aria-label="Visa som rutnät"]')
    .should("have.length", 1)
    .first()
    .click()
})

Cypress.Commands.add("viewAsList", () => {
    // cy.get('button[aria-label="Meny"]').should("have.length", 1).first().click()
    // cy.get('div[data-test="MenuCategories"]')
    //   .first()
    //   .contains("Barn & Familj")
    //   .parent()
    //   .click()
    // cy.get('div[data-test="MenuCategories"]')
    //   .first()
    //   .contains("Leksaker")
    //   .click()
    // cy.get('div[data-test="MenuCategories"]')
    //   .first()
    //   .contains("Dockor & Tillbehör")
    //   .click()
    // cy.get('div[data-test="MenuCategories"]').first().contains("Dockor").click()
  cy.get('button[data-test="layout-button-list"]')
    .should("have.length", 1)
    .first()
    .click()
})

Cypress.Commands.add("viewAsTable", () => {
  cy.get('button[data-test="layout-button-table"]')
    .should("have.length", 1)
    .first()
    .click()
})
