describe("Check Search", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test

    cy.visit("https://www.prisjakt.nu")
    cy.acceptCookies()
  })

  //button search + INPUT
  it("should have button search", () => {
    cy.get('input[name="search"]').last().type("docka")
    cy.get(
      'ul[data-test="SearchSuggestionsBox"] li[data-test="ProductCollectionItem"]'
    )
      .first()
      .click()
  })

  //button search + INPUT + clear search
  it("clear button search", () => {
    cy.get('input[name="search"]').last().type("cykel").clear()
  })

  //Message about "0" Products
  it("search-page should have message about products amount", () => {
    cy.get('input[name="search"]').last().type("KVALIT21")
    cy.get('button[data-test="SearchButton"]').last().click()
    cy.contains("Produkter (0)")
  })

  //Message "the product is not found"
  it("search-page should have message what the product is not found", () => {
    cy.get('input[name="search"]').last().type("VLIT100")
    cy.get('button[data-test="SearchButton"]').last().click()
    cy.contains("Vi hittade inte ")
  })

  //Suggestion about popular products
  it("search-page should show popular search", () => {
    cy.get('input[name="search"]').last().click()
    cy.get('ul[data-test="SearchSuggestionsBox"]')
    cy.contains("Populära sökningar")
  })

  //Suggestion about the last search
  it("search-page should show the latest search", () => {
    cy.get('input[name="search"]').last().type("docka")
    cy.get(
      'ul[data-test="SearchSuggestionsBox"] li[data-test="ProductCollectionItem"]'
    )
      .first()
      .click()
    cy.wait(1000)
    cy.get('input[name="search"]').last().type("KVALIT21")
    cy.get('button[data-test="SearchButton"]').last().click()
    cy.contains("Produkter (0)")
    //I can clear the INPUT search with help of BUTTON like this
    //cy.get('[data-testid="clear-search-button"]').last().click()
    //or I can use function .clear()
    //cy.get('input[name="search"]').last().clear().type("VLIT100")
    cy.get('[data-testid="clear-search-button"]').last().click()
    cy.get('input[name="search"]').last().type("VLIT100")
    cy.get('button[data-test="SearchButton"]').last().click()
    cy.contains("Vi hittade inte ")
    cy.get('input[name="search"]').last().click()
    cy.contains("Dina senaste sökningar")
  })
})
