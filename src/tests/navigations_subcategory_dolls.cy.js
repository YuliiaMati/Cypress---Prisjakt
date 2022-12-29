describe("Check navigation subcategory dolls", () => {
  beforeEach(() => {
    cy.visit("https://www.prisjakt.nu/c/dockor")
    cy.acceptCookies()
  })

  //Dockor - underkategory "Modedocka"
  it("should have subcategory Modedocka", () => {
    cy.get('a[data-test="InternalLink"]').contains("Modedocka").first().click()
  })

  //subcategory "Modedocka" page view buttons (presentationsknappar)
  it("view subcategory Modedocka as grid", () => {
    cy.get('a[data-test="InternalLink"]').contains("Modedocka").first().click()
    cy.viewAsGrid()
    cy.get('article[data-test="ProductGridCard"]').should(
      "have.length.greaterThan",
      0
    )
  })

  it("view subcategory Modedocka as list", () => {
    cy.get('a[data-test="InternalLink"]').contains("Modedocka").first().click()
    cy.viewAsList()
    cy.get('a[data-test="InternalLink"]').should("have.length.greaterThan", 0)
  })

  it("view subcategory Modedocka as table", () => {
    cy.get('a[data-test="InternalLink"]').contains("Modedocka").first().click()
    cy.viewAsTable()
    cy.get('a[data-test="ProductListItem"]').should(
      "have.length.greaterThan",
      0
    )
  })

  //Dockor - underkategory "Babydocka"
  it("should have subcategory Babydocka", () => {
    cy.get('a[data-test="InternalLink"]').contains("Babydocka").first().click()
  })

  // it("view subcategory Babydocka as grid", () => {
  //   cy.get('a[data-test="InternalLink"]').contains("Babydocka").first().click()
  //   cy.viewAsGrid()
  // })

  // it("view subcategory Babydocka as list", () => {
  //   cy.get('a[data-test="InternalLink"]').contains("Babydocka").first().click()
  //   cy.viewAsList()
  //   cy.get('a[data-test="InternalLink"]').should("have.length.greaterThan", 0)
  //})

  // it("view subcategory Babydocka as table", () => {
  //   cy.get('a[data-test="InternalLink"]').contains("Babydocka").first().click()
  //   cy.viewAsTable()
    // cy.get('a[data-test="ProductListItem"]').should(
    //   "have.length.greaterThan",
    //   0
  //)
  // })

  //Dockor - underkategory "Mjuk docka"
  it("should have subcategory Mjuk docka", () => {
    cy.get('a[data-test="InternalLink"]').contains("Mjuk docka").first().click()
  })

  // it("view subcategory Mjuk docka as grid", () => {
  //   cy.get('a[data-test="InternalLink"]').contains("Mjuk docka").first().click()
  //   cy.viewAsGrid()
  //   cy.get('article[data-test="ProductGridCard"]').should(
  //     "have.length.greaterThan",
  //     0
  //   )
  // })

  // it("view subcategory Mjuk docka as list", () => {
  //   cy.get('a[data-test="InternalLink"]').contains("Mjuk docka").first().click()
  //   cy.viewAsList()
  //   cy.get('a[data-test="InternalLink"]').should("have.length.greaterThan", 0)
  // })

  // it("view subcategory Mjuk docka as table", () => {
  //   cy.get('a[data-test="InternalLink"]').contains("Mjuk docka").first().click()
  //   cy.viewAsTable()
  //   cy.get('a[data-test="ProductListItem"]').should(
  //     "have.length.greaterThan",
  //     0
  //   )
  // })

  //Dockor - underkategory "Smink & Styling Docka"
  it('should have subcategory "Smink & Styling Docka"', () => {
    cy.get('a[data-test="InternalLink"]')
      .contains("Smink & Styling Docka")
      .first()
      .click()
  })

  //subcategory "Smink & Styling Docka" + presentationsknappar
  // it('view subcategory "Smink & Styling Docka" as grid', () => {
  //   cy.get('a[data-test="InternalLink"]')
  //     .contains("Smink & Styling Docka")
  //     .first()
  //     .click()
  //   cy.viewAsGrid()
  //   cy.get('article[data-test="ProductGridCard"]').should(
  //     "have.length.greaterThan",
  //     0
  //   )
  // })

  // it('view subcategory "Smink & Styling Docka" as list', () => {
  //   cy.get('a[data-test="InternalLink"]')
  //     .contains("Smink & Styling Docka")
  //     .first()
  //     .click()
  //   cy.viewAsList()
  //   cy.get('a[data-test="InternalLink"]').should("have.length.greaterThan", 0)
  // })

  // it('view subcategory "Smink & Styling Docka" as table', () => {
  //   cy.get('a[data-test="InternalLink"]')
  //     .contains("Smink & Styling Docka")
  //     .first()
  //     .click()
  //   cy.viewAsTable()
  //   cy.get('a[data-test="ProductListItem"]').should(
  //     "have.length.greaterThan",
  //     0
  //   )
  // })

  //Dockor - underkategory "Dockhusdocka"
  it('should have subcategory "Dockhusdocka"', () => {
    cy.get('a[data-test="InternalLink"]')
      .contains("Dockhusdocka")
      .first()
      .click()
  })

  //subcategory "Dockhusdocka" + presentationsknappar
  // it('view subcategory "Dockhusdocka" as grid', () => {
  //   cy.get('a[data-test="InternalLink"]')
  //     .contains("Dockhusdocka")
  //     .first()
  //     .click()
  //   cy.viewAsGrid()
  //   cy.get('article[data-test="ProductGridCard"]').should(
  //     "have.length.greaterThan",
  //     0
  //   )
  // })

  // it('view subcategory "Dockhusdocka" as list', () => {
  //   cy.get('a[data-test="InternalLink"]')
  //     .contains("Dockhusdocka")
  //     .first()
  //     .click()
  //   cy.viewAsList()
  //   cy.get('a[data-test="InternalLink"]').should("have.length.greaterThan", 0)
  // })

  // it('view subcategory "Dockhusdocka" as table', () => {
  //   cy.get('a[data-test="InternalLink"]')
  //     .contains("Dockhusdocka")
  //     .first()
  //     .click()
  //   cy.viewAsTable()
  //   cy.get('a[data-test="ProductListItem"]').should(
  //     "have.length.greaterThan",
  //     0
  //   )
  // })

  //subcategory "Trädocka"
  it('should have subcategory "Trädocka"', () => {
    cy.get('a[data-test="InternalLink"]').contains("Trädocka").first().click()
  })

  //subcategory "Trädocka" + presentationsknappar
  // it('view subcategory "Trädocka" as grid', () => {
  //   cy.get('a[data-test="InternalLink"]').contains("Trädocka").first().click()
  //   cy.viewAsGrid()
  //   cy.get('article[data-test="ProductGridCard"]').should(
  //     "have.length.greaterThan",
  //     0
  //   )
  // })

  // it('view subcategory "Trädocka" as list', () => {
  //   cy.get('a[data-test="InternalLink"]').contains("Trädocka").first().click()
  //   cy.viewAsList()
  //   cy.get('a[data-test="InternalLink"]').should("have.length.greaterThan", 0)
  // })

  // it('view subcategory "Trädocka" as table', () => {
  //   cy.get('a[data-test="InternalLink"]').contains("Trädocka").first().click()
  //   cy.viewAsTable()
  //   cy.get('a[data-test="ProductListItem"]').should(
  //     "have.length.greaterThan",
  //     0
  //   )
  // })
})
