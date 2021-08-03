/** @jsx jsx */
import {jsx, Container, Styled} from 'theme-ui'
import React from 'react' // eslint-disable-line
import {mapEdgesToNodes} from '../utils/helpers'

import PerformancesGrid from './performance-list-content-grid'

const PerformancesList = ({performanceData}) => {
  // console.log(performanceData)
  return (
    <section sx={{variant: 'sections.default'}}>
      <div sx={{variant: 'styles'}}>
        <Container sx={{maxWidth: '760px'}}>
          <a id='interactive-experiences' />
          <Styled.h1>Performance Directory</Styled.h1>
          <h2>Interactive Performances</h2>
          <p>These character-driven adventures mix puppetry and storytelling with high-participation games and activities. Interactive performances are steeped in educational values and take the audience from spectator to participant with hilarious and high energy results.</p>
        </Container>

        <PerformancesGrid performances={mapEdgesToNodes(performanceData.interactive)} />

        <Container sx={{maxWidth: '760px'}}>
          <a id='game-shows' />
          <h2>Game Shows</h2>
          <p>The perfect mix of lightning fast trivia, physical challenges, digital media, and hit music, our game shows guarantee a high-impact event for audiences of all ages and sizes.</p>
          <p>Implementing a fully interactive display with lights, buzzers, score keeping, and sound effects, our game show hosts ensure that contestants rotate rapidly through our exclusive game show set, ensuring maximum participation.</p>
          <p>With over 100 different interactive categories and challenges, no two game shows are ever the same!</p>
        </Container>
        <PerformancesGrid performances={mapEdgesToNodes(performanceData.game)} />

        <Container sx={{maxWidth: '760px'}}>
          <a id='perform-judaism' />
          <h2>Perform Judaism</h2>
          <p>We engage and entertain participants while exploring relevant themes in Jewish education including social action, Israel, tradition, biblical text, and Jewish identity.  Perform Judaism includes interactive performances, customized game shows, and PJ Library Storybook Theater integration. </p>
          <p>Perform Judaism is an effective way of delivering positive Jewish values while offering educational entertainment that appeals to various demographics.</p>
        </Container>
        <PerformancesGrid performances={mapEdgesToNodes(performanceData.judaism)} />

        <Container sx={{maxWidth: '760px'}}>
          <a id='mystery-shows' />
          <h2>Mystery Shows</h2>
          <p>Just like the board game “Clue,” your audience becomes part of an interactive mystery that unravels in real time.  </p>
          <p>Participants interrogate suspects and have the opportunity to correctly solve who committed the crime, with what weapon, and in what location. Interactive Mystery shows include both “murder mysteries” and family friendly theft-related crimes.</p>
          <p>Format is flexible and can be implemented in rotations or as part of crowd events to accommodate both large and small audiences.</p>
        </Container>
        <PerformancesGrid performances={mapEdgesToNodes(performanceData.mystery)} />

        <Container sx={{maxWidth: '760px'}}>
          <a id='custom-experiences' />
          <h2>Custom Experiences</h2>
          <p>Our custom experiences are the ideal option to specifically suit a performance to a targeted event, theme, or value. Tell us your objective and we will oversee the performance design from start to finish, including original scripts, outlines, program plans, and on-site rehearsals.</p>
          <p>Our custom experiences are the ideal option to specifically suit a performance to a targeted event, theme, or value. Tell us your objective and we will oversee the performance design from start to finish, including original scripts, outlines, program plans, and on-site rehearsals.</p>
        </Container>
        <PerformancesGrid performances={mapEdgesToNodes(performanceData.custom)} />

      </div>
    </section>
  )
}

export default PerformancesList
