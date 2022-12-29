describe("Check the presentation buttons", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("https://www.prisjakt.nu/c/dockor")
    cy.acceptCookies()
  })

  it('should have button "Visa som rutnät"', () => {
    cy.viewAsGrid()
  })

  it('cardview "Visa som rutnät" works correct', () => {
    cy.viewAsGrid()
    cy.get('article[data-test="ProductGridCard"]').should(
      "have.length.greaterThan",
      0
    )
  })

  it('card view "Visa som lista" - list', () => {
    cy.viewAsList()
  })

  it('card view "Visa som lista" - list works correct', () => {
    cy.viewAsList()
    cy.get('a[data-test="InternalLink"]').should("have.length.greaterThan", 0)
  })

  it('card view "Visa som lista" - table', () => {
    cy.viewAsTable()
  })

  it('card view "Visa som lista" - table works correct', () => {
    cy.viewAsTable()
    cy.get('a[data-test="ProductListItem"]').should(
      "have.length.greaterThan",
      0
    )
  })
})
