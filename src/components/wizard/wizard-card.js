/** @jsx jsx */
import {jsx} from 'theme-ui'
import React from 'react' // eslint-disable-line
import {Link} from 'gatsby'

import {motion} from 'framer-motion'

import {buildImageObj} from '../../utils/helpers' // cn
import {imageUrlFor} from '../../utils/image-url'

import {BsPersonFill, BsFolderFill} from 'react-icons/bs'

const WizardCard = ({id, title, slug, noOfParticipants, performanceType, image}) => {
  const desktopImageUrl = imageUrlFor(buildImageObj(image))
    .width(368).height(200).auto('format').url()
  const tabletImageUrl = imageUrlFor(buildImageObj(image))
    .width(468).height(300).auto('format').url()

  return (
    <motion.div
      positionTransition={{ease: 'easeOut', duration: 0.5}}
      sx={cardStyles}
      whileHover={{
        scale: 1.1,
        transition: {duration: 0.2}
      }}
    >
      <Link className='card' to={`/performances/${slug}/`}>
        <picture>
          <source srcSet={desktopImageUrl} media='(max-width: 768px)' />
          <source srcSet={tabletImageUrl} media='(max-width: 1200px)' />
          <img src={desktopImageUrl} alt={title} />
        </picture>
        <div className='cardText'>
          <h3>{title}</h3>
          <div className='cardStatRow'><BsFolderFill /> {getPerformanceType(performanceType)}</div>
          <div className='cardStatRow'><BsPersonFill /> {getParticipantsRange(noOfParticipants)}</div>
        </div>
      </Link>
    </motion.div>
  )
}

export default WizardCard

const getParticipantsRange = (inputArray) => {
  const min = inputArray[0].substring(1, 4)
  const formattedMin = parseInt(min, 10)
  const max = inputArray.slice(-1)[0].substring(4, 7)
  const adjustedMax = max === '500' ? '250+' : max
  const formattedMax = parseInt(adjustedMax, 10)
  return `from ${formattedMin} to ${formattedMax}`
}
const getPerformanceType = (inputArray) => {
  const resultArray = inputArray.map(string => {
    switch (string) {
      case 'interactive' :
        return 'Interactive Performances'
      case 'game' :
        return 'Game Shows'
      case 'mystery' :
        return 'Mystery Shows'
      case 'custom' :
        return 'Custom Experiences'
      case 'judaism' :
        return 'Perform Judaism'
      default :
        return 'unknown'
    }
  })
  return resultArray.join(', ')
}

const cardStyles = {

  '.card': {
    borderTop: '3px solid',
    borderColor: 'primary',
    width: 'full',
    display: 'inline-block',
    textDecoration: 'none',
    color: 'text',
    bg: 'white',
    boxShadow: 'xl',
    borderRadius: '0 0 8px 8px'
  },
  '.cardText': {
    p: 3,
    pt: 2
  },
  h3: {
    mt: 0,
    fontSize: 1
  },
  img: {
    maxWidth: 'full',
    m: 0,
    p: 0
  },
  '.cardStatRow svg': {
    fontSize: '1.25rem',
    position: 'relative',
    top: '4px'
  }
}
