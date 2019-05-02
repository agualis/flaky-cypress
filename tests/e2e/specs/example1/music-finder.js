it('shows music recommendation', () => {
    cy.visit('/music-finder')
    cy.get('#dance-select').click().get('.vs__dropdown-option').first().click()
    cy.get('#sing-select').click().get('.vs__dropdown-option').first().click()
    cy.get('#cry-select').click().get('.vs__dropdown-option').first().click()
    cy.get('#recommendation')
})

it('shows music recommendation (implemented with Page Object)', () => {
  const musicFinder = new MusicFinder()
  musicFinder
    .selectFirstMusicToDance()
    .selectFirstMusicToSing()
    .selectFirstMusicToCry()

  assertRecommendationShown()
})

class Page {

  selectFirstOption(selector) {
    cy.get(selector).click().get('.vs__dropdown-option').first().click()
  }
}

class MusicFinder extends Page {

  constructor() {
    super()
    cy.visit('/music-finder')
  }

  selectFirstMusicToDance() {
    this.selectFirstOption('#dance-select')
    return this
  }

  selectFirstMusicToSing() {
    this.selectFirstOption('#sing-select')
    return this
  }

  selectFirstMusicToCry() {
    this.selectFirstOption('#cry-select')
    return this
  }

}

function assertRecommendationShown() {
  cy.get('#recommendation')
}
