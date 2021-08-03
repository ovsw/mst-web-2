/** @jsx jsx */
import {jsx} from 'theme-ui'
import React, {useEffect} from 'react' // eslint-disable-line

import {motion, useAnimation} from 'framer-motion'

import WizardCard from './wizard-card'

const PerformancesContainer = ({performances, totalNoOfPerformances, userInputContainerClicked}) => {
  const doWeHaveResults = performances.length > 0
  const updateFlash = useAnimation()

  useEffect(() => {
    updateFlash.start({
      backgroundColor: ['rgba(135,204,47,0)', 'rgba(135,204,47,.7)', 'rgba(135,204,47,0.1)'],
      transition: {duration: 0.5}
    })
  }

  )

  return (
    <motion.div animate={updateFlash} sx={performanceListStyles}>
      {(doWeHaveResults === true) && (
        <h2>Currently showing {' '}
          {userInputContainerClicked ? performances.length : totalNoOfPerformances} {' '}
          out of {totalNoOfPerformances} performances:
        </h2>
      )}
      {!doWeHaveResults && (
        <h2>No results match your selection. Please select fewer tags.</h2>
      )}
      <div className='cardContainerWrapper'>
        {/* list all performances */}
        {performances.map(performance => <div className='cardContainer' key={performance.title}><WizardCard {...performance} /></div>)}
      </div>
    </motion.div>

  )
}

export default PerformancesContainer

const performanceListStyles = {
  marginTop: '1rem',
  padding: '1.5rem',
  h2: {
    mt: 0,
    mb: 0
  },
  '.cardContainerWrapper': {
    display: 'flex',
    flexWrap: 'wrap'
  },
  '.cardContainer': {
    p: 3,
    width: ['full', null, '1/2', '1/3', '1/'],
    display: 'flex'
  }
}
