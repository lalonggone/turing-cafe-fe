describe('reservation tests', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      statusCode: 200,
      body: [
        {
          id: 1,
          name: 'Ryan',
          date: '12/29',
          time: '7:00',
          number: 12
        },
        {
          id: 2,
          name: 'Shannon',
          date: '4/5',
          time: '7:00',
          number: 2
        }
      ]
    })
    cy.visit('http://localhost:3000')
  })
  
  it('displays correct content on initial visit', () => {
    cy.get('.app-title').contains('Turing Cafe Reservations')
    cy.get('.name-input').should('be.visible')
    cy.get('.date-input').should('be.visible')
    cy.get('.time-input').should('be.visible')
    cy.get('.guests-input').should('be.visible')
    cy.get('.card').should('have.length', 2)
  })

  it('reflects form input value', () => {
    cy.get('.name-input').type('Ryan').should('have.value', 'Ryan')
    cy.get('.date-input').type('12/29').should('have.value', '12/29')
    cy.get('.time-input').type('7:00').should('have.value', '7:00')
    cy.get('.guests-input').type('12').should('have.value', '12')
  })

  it('can add and delete a reservation', () => {
    cy.get('.name-input').type('Laura')
    cy.get('.date-input').type('4/20')
    cy.get('.time-input').type('22:00')
    cy.get('.guests-input').type('4')
    cy.get('form > button').click()
    cy.get('.card').should('have.length', 3)
    cy.get('.card').eq(2).contains('Laura')
    cy.get('.card').eq(2).contains('4/20')
    cy.get('.card').eq(2).contains('22:00')
    cy.get('.card').eq(2).contains('Number of guests: 4')
    cy.get('.card').eq(1).contains('Cancel').click()
    cy.get('.card').should('have.length', 2)
  })
})