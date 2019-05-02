it('filters millenials', function () {
  openEmployeesBoard()
  filterMillenials()
  assertNumberOfEmployeesIs(2)
})

function openEmployeesBoard() {
  cy.visit('/employees')
}

function filterMillenials() {
  cy.get('#millennial-filter').check()
}

function assertNumberOfEmployeesIs(number) {
  cy.get('.employee').should('have.length', number)
}

