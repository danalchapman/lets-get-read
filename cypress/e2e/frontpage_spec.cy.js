describe('Front Page', () => {

  beforeEach(() => {
    cy.intercept(
      'GET',
      Cypress.env('url'), 
      {
        fixture: 'data.json'
      }
    )
    cy.visit('/')
  })

  it('Should render title and dropdown', () => {
    cy.get('.title')
      .should('exist')
      .should('be.visible')
      .contains('Let\'s Get Read')
    cy.get('.section-dropdown')
      .should('exist')
      .should('be.visible')
      .contains('Home')
  })

  it('Should render a display of top stories', () => {
    cy.get('.story-box')
      .children()
      .should('exist')
      .should('be.visible')
      .should('have.length', 29)
  })

  it('Should be able to click a story and go to the detail page', () => {
    cy.get('[href="/Congressional Budget Office projections released on Wednesday suggested rising interest rates and bipartisan spending bills are adding to deficits, amid a partisan fight on fiscal policy."]').click()
    cy.url().should('eq', 'http://localhost:3000/Congressional%20Budget%20Office%20projections%20released%20on%20Wednesday%20suggested%20rising%20interest%20rates%20and%20bipartisan%20spending%20bills%20are%20adding%20to%20deficits,%20amid%20a%20partisan%20fight%20on%20fiscal%20policy.')
  })
})