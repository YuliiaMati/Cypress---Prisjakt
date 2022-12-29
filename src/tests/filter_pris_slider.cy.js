describe("Check Filter/Price - slider", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("https://www.prisjakt.nu/c/dockor")
    cy.acceptCookies()
  })

  //Filter
  it('should have "Filter"', () => {
    cy.get("main button span").contains("Filter").first().parent().click()
  })

  //Filter pris
  it('should have "Filter Pris"', () => {
    cy.filterPris()
  })

  //Filter/Pris change min start price
  it("should move start min prise slider", () => {
    cy.filterPris()
    cy.wait(1000)
    cy.get(
      'section[data-test="FilterSection"] .handleContainer div[role="slider"]'
    )
      .first()
      .realMouseDown()
      .realMouseMove(300, 0)
      .realMouseUp()
    //If you want to check more, do it
    //cy.get("section button span")
    //  .contains("Filtrera")
    //  .first()
    //  .parent()
    ///  .parent()
    //  .click()
    //cy.viewAsTable()
    // cy.get('a[data-test="InternalLink"]')
    //  .contains(/^Pris$/)
    //  .first()
    //  .parent()
    //   .click()
    //cy.wait(3000)
  })

  //The slider with the changed start min price works correct
  it("slider with min price works correct", () => {
    cy.filterPris()
    cy.wait(1000)
    cy.get('button[data-test="SliderInputValueFrom"]').then((button) => {
      const startPrice = Number(button.text().split(" ")[0])
      cy.get(
        'section[data-test="FilterSection"] .handleContainer div[role="slider"]'
      )
        .first()
        .realMouseDown()
        .realMouseMove(300, 0)
        .realMouseUp()

      cy.get('button[data-test="SliderInputValueFrom"]').then((button) => {
        expect(Number(button.text().split(" ")[0])).to.be.above(startPrice)
      })
    })
  })

  //Filter/Pris change max start price
  it("should move max prise slider", () => {
    cy.filterPris()
    cy.wait(1000)
    cy.get(
      'section[data-test="FilterSection"] .handleContainer div[role="slider"]'
    )
      .last()
      .realMouseDown()
      .realMouseMove(-200, 0)
      .realMouseUp()
  })

  //The slider with the changed MAX price works correct
  it("slider with changed max price works correct", () => {
    cy.filterPris()
    cy.wait(1000)
    cy.get('button[data-test="SliderInputValueTo"]').then((button) => {
      const maxPrice = Number(button.text().split(" ")[0])
      cy.get(
        'section[data-test="FilterSection"] .handleContainer div[role="slider"]'
      )
        .last()
        .realMouseDown()
        .realMouseMove(-200, 0)
        .realMouseUp()

      cy.get('button[data-test="SliderInputValueTo"]').then((button) => {
        expect(Number(button.text().split(" ")[0])).to.be.below(maxPrice)
      })
    })
  })
})
