describe("Check Filter/Price", () => {
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

  //Filter/Pris change min price
  it('should change min "Pris"', () => {
    // cy.get("main button span").contains("Filter").first().parent().click()
    // cy.get("div.Hideable--slideleft")
    //   .contains("button span", /^Pris$/)
    //   .click()
    cy.filterPris()
    cy.get('button[data-test="SliderInputValueFrom"]').click()
    cy.get('section[data-test="FilterSection"] input').clear().type(300)
  })

  //Filter/Pris change ang check the produkts price
  it("change and check the products Price", () => {
    cy.filterPris()
    cy.get('button[data-test="SliderInputValueFrom"]').click()
    cy.get('section[data-test="FilterSection"] input').clear().type(300)
    // 1st click to remove focus from input, 2nd click to submit form
    cy.get("section button span")
      .contains("Filtrera")
      .first()
      .parent()
      .parent()
      .click()
      .click()
  })

  //Filter/Pris sortering from min price
  it('should filter from min "Pris"', () => {
    cy.filterPris()
    cy.get('button[data-test="SliderInputValueFrom"]').click()
    cy.get('section[data-test="FilterSection"] input').clear().type(300)
    // 1st click to remove focus from input, 2nd click to submit form
    cy.get("section button span")
      .contains("Filtrera")
      .first()
      .parent()
      .parent()
      .click()
      .click()
    cy.viewAsTable()
    cy.get('a[data-test="InternalLink"]')
      .contains(/^Pris$/)
      .first()
      .parent()
      .click()
    cy.wait(3000)
    cy.get('a[data-test="ProductListItem"] span[data-test="PriceLabel"]')
      .first()
      .then((priceLabel) => {
        expect(Number(priceLabel.text().split(" ")[0])).to.be.at.least(300)
      })
  })

  //Filter/Pris change max price
  it('should change max "Pris"', () => {
    // cy.get("main button span").contains("Filter").first().parent().click()
    // cy.get("div.Hideable--slideleft")
    //   .contains("button span", /^Pris$/)
    //   .click()
    cy.filterPris()
    cy.get('button[data-test="SliderInputValueTo"]').click()
    cy.get('section[data-test="FilterSection"] input').clear().type(1500)
  })

  //Filter/Pris check the produkts entered max price
  it('check the max entered "Pris"', () => {
    cy.filterPris()
    cy.get('button[data-test="SliderInputValueTo"]').click()
    cy.get('section[data-test="FilterSection"] input').clear().type(1500)
    // 1st click to remove focus from input, 2nd click to submit form
    cy.get("section button span")
      .contains("Filtrera")
      .first()
      .parent()
      .parent()
      .click()
      .click()
  })

  //Filter/Pris sorting in descending (from max to min) order
  it("should filter from entered max Price", () => {
    cy.filterPris()
    cy.get('button[data-test="SliderInputValueTo"]').click()
    cy.get('section[data-test="FilterSection"] input').clear().type(1500)
    // 1st click to remove focus from input, 2nd click to submit form
    cy.get("section button span")
      .contains("Filtrera")
      .first()
      .parent()
      .parent()
      .click()
      .click()
    cy.viewAsTable()
    cy.get('a[data-test="InternalLink"]')
      .contains(/^Pris$/)
      .first()
      .parent()
      .click()
    cy.wait(3000)
    cy.get('a[data-test="InternalLink"]')
      .contains(/^Pris$/)
      .first()
      .parent()
      .click()
      .click()
    cy.wait(3000)
    cy.get('a[data-test="ProductListItem"] span[data-test="PriceLabel"]')
      .first()
      .then((priceLabel) => {
        expect(Number(priceLabel.text().split(" ")[0])).to.be.at.most(1500)
      })
  })

  //Change min and max price
  it("should setting min and max price", () => {
    cy.filterPris()
    cy.get('button[data-test="SliderInputValueFrom"]').click()
    cy.get('section[data-test="FilterSection"] input').clear().type(150)
    // 1st click to remove focus from input, 2nd click to submit form
    //cy.get("section button span")
    //.contains("Filtrera")
    //  .first()
    //.parent()
    //.parent()
    //.click()
    //.click()
    //cy.filterPris()
    cy.get('button[data-test="SliderInputValueTo"]').click().click()
    cy.get('section[data-test="FilterSection"] input').clear().type(2050)
    // 1st click to remove focus from input, 2nd click to submit form
    cy.get("section button span")
      .contains("Filtrera")
      .first()
      .parent()
      .parent()
      .click()
      .click()
    cy.viewAsTable()
    cy.get('a[data-test="InternalLink"]')
      .contains(/^Pris$/)
      .first()
      .parent()
      .click()
    cy.wait(3000)
    cy.get('a[data-test="ProductListItem"] span[data-test="PriceLabel"]')
      .first()
      .then((priceLabel) => {
        expect(Number(priceLabel.text().split(" ")[0])).to.be.at.least(150)
      })
    cy.wait(3000)
    cy.get('a[data-test="InternalLink"]')
      .contains(/^Pris$/)
      .first()
      .parent()
      .click()
      .click()
    cy.wait(3000)
    cy.get('a[data-test="ProductListItem"] span[data-test="PriceLabel"]')
      .first()
      .then((priceLabel) => {
        expect(Number(priceLabel.text().split(" ")[0])).to.be.at.most(2050)
      })
  })

  //Here I will input "0" as min price ang I will change the max price. Min price should be autocorrected
  it('wrong min "0" price is autocorrected', () => {
    cy.filterPris()
    cy.get('button[data-test="SliderInputValueFrom"]').click()
    cy.get('section[data-test="FilterSection"] input').clear().type(0)
    cy.get('button[data-test="SliderInputValueTo"]').click().click()
    cy.get('section[data-test="FilterSection"] input').clear().type(2050)
    // 1st click to remove focus from input, 2nd click to submit form
    cy.get("section button span")
      .contains("Filtrera")
      .first()
      .parent()
      .parent()
      .click()
      .click()
    cy.viewAsTable()
    cy.get('a[data-test="InternalLink"]')
      .contains(/^Pris$/)
      .first()
      .parent()
      .click()
    cy.wait(3000)
    cy.get('a[data-test="ProductListItem"] span[data-test="PriceLabel"]')
      .first()
      .then((priceLabel) => {
        expect(Number(priceLabel.text().split(" ")[0])).to.be.at.least(0)
      })
    cy.wait(3000)
    cy.get('a[data-test="InternalLink"]')
      .contains(/^Pris$/)
      .first()
      .parent()
      .click()
      .click()
    cy.wait(3000)
    cy.get('a[data-test="ProductListItem"] span[data-test="PriceLabel"]')
      .first()
      .then((priceLabel) => {
        expect(Number(priceLabel.text().split(" ")[0])).to.be.at.most(2050)
      })
  })

  //clear filter
  it("should clear - rensa filter", () => {
    cy.filterPris()
    cy.get('button[data-test="SliderInputValueTo"]').click()
    cy.get('section[data-test="FilterSection"] input').clear().type(1500)
    cy.rensaFilter()
  })

  //clear (rensa) filter witn using INPUT
  it("should clear - rensa filter works correct - 1", () => {
    cy.filterPris()
    cy.get('button[data-test="SliderInputValueTo"]').click()
    cy.get('section[data-test="FilterSection"] input').clear().type(1500)
    cy.rensaFilter()

    cy.get('button[data-test="SliderInputValueTo"]').click()
    cy.get('section[data-test="FilterSection"] input')
      .first()
      .then((input) => {
        expect(Number(input.val())).to.be.above(1500)
      })
  })

  //rensa filter with using button
  //it.only("should clear - rensa filter works correct - 2", () => {
  //  cy.filterPris()
  //  cy.get('button[data-test="SliderInputValueTo"]').click()
  //  cy.get('section[data-test="FilterSection"] input').clear().type(1500)
  //  cy.rensaFilter()
  //
  //  cy.get('button[data-test="SliderInputValueTo"]').then((button) => {
  //    expect(Number(button.text().split(" ")[0])).to.be.above(1500)
  //  })
  // })
})
