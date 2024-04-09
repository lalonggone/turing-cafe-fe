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
  })

  it('displays correct content on initial visit', () => {
    cy.visit('http://localhost:3000')
  })

  it('reflects form input value', () => {
  })

  it('adds a new reservation', () => {

  })
})