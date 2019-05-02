// This flaky behaviour should be solved in the following PR:
// https://github.com/cypress-io/cypress/pull/2982

export const click = selector => {
  cy.get(selector).click()
}

export const clickConfirmInPopup = () => {
  click('.swal2-confirm')
}

describe('Flaky Popup', () => {

  it('follows two steps with confirmation', () => {
    cy.visit('/popup')
    click('#first-step')
    clickConfirmInPopup()
    click('#second-step')
    clickConfirmInPopup()
    cy.contains('FIRST STEP')
  })
})
