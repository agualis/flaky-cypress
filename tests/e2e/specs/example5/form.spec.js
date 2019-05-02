it('creates a user', () => {
  cy.visit('/form')
  fillUser()
  cy.get('#save').click()
  assertUserCreated()
})

function fillUser() {
  cy.get('#first-name').type('Laura')
  cy.get('#last-name').type('Palmer')
  cy.get('#country').click().get('.selected.item').first().click({ force: true })
}

function assertUserCreated() {
  cy.contains('Argentina')
  cy.contains('Laura')
  cy.contains('Palmer')
}

function fillUser2() {
  cy.get('#first-name').type('Laura')
  cy.get('#last-name').type('Palmer')
  cy.get('#user-form').within(() => {
    cy.get('#country').click().get('.selected.item').first().click()
  })
}

function fillUser3() {
  cy.get('#first-name').type('Laura')
  cy.get('#last-name').type('Palmer')
  cy.get('#country').click().find('.selected.item').first().click({ force: true })
}

export const log = message => cy.task('log', message)

