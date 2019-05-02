it('adds two todo items', function () {
  cy.visit('/todo')

  TodoList
    .addTodo('todo A')
    .contains('todo A')
    .addTodo('todo B')
    .contains('todo B')
})

class TodoList {

  static addTodo(todoText) {
    cy.get('#add-todo').type(`${todoText}{enter}`)
    return this
  }

  static contains(todoText) {
    cy.get('#todo-list #todo-item')
    .find('h5')
    .should('contain', todoText)
    return this
  }

  static checkNumberOfTodosIs(length) {
    cy.get('#todo-list #todo-item').should('have.length', length)
    return this
  }
}


