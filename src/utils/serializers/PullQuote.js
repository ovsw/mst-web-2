/** @jsx jsx */
import {jsx} from 'theme-ui'
import React from 'react' // eslint-disable-line
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'

export default ({node}) => {
  return (
    <div sx={{
      fontFamily: 'heading',
      color: 'secondary',
      fontSize: [3, 4],
      position: 'relative',
      fontStyle: 'italic',
      pt: [0, null, 4],
      pb: [0, 2],
      px: [2, 0],
      '.center': {
        width: ['full', null, null, '120%'],
        ml: ['auto', null, null, '-10%']
      },
      '.quoteMarkLeft, .quoteMarkRight': {
        fontSize: '6',
        color: 'primary',
        position: 'absolute'
      },
      '.quoteMarkLeft': {
        position: ['static', null, 'absolute'],
        top: ['0', null, null, null, '0rem'],
        left: ['0', null, null, '-10%', '-15%']
      },
      '.quoteMarkRight': {
        position: 'static',
        display: ['block', 'none'],
        bottom: ['0', null, null, null, '0rem'],
        right: ['0', null, null, null, '-15%']
      },
      span: {
        position: 'relative',
        zIndex: '2'
      }
    }}
    >
      <blockquote className={node.align}>
        <div className='quoteMarkLeft'><FaQuoteLeft sx={{position: 'relative', top: '0.25rem'}} /></div>
        <span>{node.text}</span>
        <div className='quoteMarkRight'><FaQuoteRight sx={{position: 'relative', top: '0.25rem'}} /></div>
      </blockquote>
    </div>
  )
}
