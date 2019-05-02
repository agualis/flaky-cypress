it('creates a user', () => {
  cy.visit('/form')
  cy.get('#first-name').type('Juana')
  cy.get('#last-name').type('Molina')
  selectFirstCountry()

  cy.get('#save').click()

  cy.contains('Argentina')
  cy.contains('Juana')
  cy.contains('Molina')
})

//cy.get('#person-info').contains('Argentina')
//selectCountry('Argentina')

function selectFirstCountry() {
  // Dangerous usage of get command chaining
  cy.get('#country').click().get('.selected.item').first().click({ force: true })
}

function selectFirstCountry2() {
  // Proper chaining find command instead to search in the scope of the first get result
  cy.get('#country').click().find('.selected.item').click()
}

function selectFirstCountry3() {
  // Using within to limit search to the stope of a concrete form
   cy.get('#user-form').within(() => {
    cy.get('#country').click().get('.selected.item').click()
  })
}

function selectCountry(countryText) {
  selectByText('#country', countryText)
}

function selectByText(selector, text) {
  cy.get(selector).click().find('input').type(text).type("{downarrow}{enter}")
}

export const log = message => cy.task('log', message)

