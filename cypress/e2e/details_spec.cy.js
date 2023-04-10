describe('Detail View', () => {

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

  it('Should show various details from a single news article', () => {
    cy.get('[href="/Congressional Budget Office projections released on Wednesday suggested rising interest rates and bipartisan spending bills are adding to deficits, amid a partisan fight on fiscal policy."]').click()
    cy.url().should('eq', 'http://localhost:3000/Congressional%20Budget%20Office%20projections%20released%20on%20Wednesday%20suggested%20rising%20interest%20rates%20and%20bipartisan%20spending%20bills%20are%20adding%20to%20deficits,%20amid%20a%20partisan%20fight%20on%20fiscal%20policy.')

    cy.get('.detail-view')
      .should('contain', 'U.S. on Track to Add $19 Trillion in New Debt Over 10 Years')
      .and('contain', 'By Jim Tankersley and Alan Rappeport')
      .and('contain', 'business')
      .and('contain', 'Published: 2023-02-15 @14:00:15-05:00')
      .and('contain', 'Congressional Budget Office projections released on Wednesday suggested rising interest rates and bipartisan spending bills are adding to deficits, amid a partisan fight on fiscal policy.')
      .and('contain', 'Full Story on NYT')
      .and('contain', 'Return to the Front Page')
  })
})