describe("Check navigation to the category dolls", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("https://www.prisjakt.nu/")
    cy.acceptCookies()
  })

  it("should have logo", () => {
    cy.get('body #root header a[href="/"] img').should("have.length", 1)
  })

  it("should have menu", () => {
    cy.get('button[aria-label="Meny"]').should("have.length", 1).first().click()
    cy.get('button[aria-label="Stäng"]')
      .should("have.length", 1)
      .first()
      .click()
    cy.get('button[aria-label="Meny"]').should("have.length", 1)
    cy.get('button[aria-label="Stäng"]').should("have.length", 0)
  })

  it('should have category "Barn & Familj"', () => {
    cy.get('button[aria-label="Meny"]').should("have.length", 1).first().click()
    cy.get('div[data-test="MenuCategories"]')
      .first()
      .contains("Barn & Familj")
      .parent()
      .click()
  })

  it('should have undercategory "Leksaker"', () => {
    cy.get('button[aria-label="Meny"]').should("have.length", 1).first().click()
    cy.get('div[data-test="MenuCategories"]')
      .first()
      .contains("Barn & Familj")
      .parent()
      .click()
    cy.get('div[data-test="MenuCategories"]')
      .first()
      .contains("Leksaker")
      .click()
  })

  it('should have undercategory "Dockor & Tillbehör"', () => {
    cy.get('button[aria-label="Meny"]').should("have.length", 1).first().click()
    cy.get('div[data-test="MenuCategories"]')
      .first()
      .contains("Barn & Familj")
      .parent()
      .click()
    cy.get('div[data-test="MenuCategories"]')
      .first()
      .contains("Leksaker")
      .click()
    cy.get('div[data-test="MenuCategories"]')
      .first()
      .contains("Dockor & Tillbehör")
      .click()
  })

  it('should have undercategory "Dockor"', () => {
    cy.get('button[aria-label="Meny"]').should("have.length", 1).first().click()
    cy.get('div[data-test="MenuCategories"]')
      .first()
      .contains("Barn & Familj")
      .parent()
      .click()
    cy.get('div[data-test="MenuCategories"]')
      .first()
      .contains("Leksaker")
      .click()
    cy.get('div[data-test="MenuCategories"]')
      .first()
      .contains("Dockor & Tillbehör")
      .click()
    cy.get('div[data-test="MenuCategories"]').first().contains("Dockor").click()
  })
})
