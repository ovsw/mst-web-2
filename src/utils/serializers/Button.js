/** @jsx jsx */
import {jsx} from 'theme-ui'
import React from 'react' // eslint-disable-line
import {Link} from 'gatsby'
import isAbsoluteURL from 'is-absolute-url'
import {FaChevronRight} from 'react-icons/fa'

export default ({node}) => {
  return (
    <div sx={{textAlign: 'left', mt: 3}}>
      {isAbsoluteURL(node.url)
        ? (<a href={node.url} className='contentButton' target='_blank'>{node.buttonText} <FaChevronRight sx={{position: 'relative', top: '0.25rem'}} /></a>)
        : (<Link to={node.url} className='contentButton'>{node.buttonText} <FaChevronRight sx={{position: 'relative', top: '0.25rem'}} /></Link>)}
    </div>
  )
}
