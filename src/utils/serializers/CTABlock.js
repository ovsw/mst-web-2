/** @jsx jsx */
import {jsx} from 'theme-ui'
import React from 'react' // eslint-disable-line
import {Link} from 'gatsby'
import {FaChevronRight} from 'react-icons/fa'
import isAbsoluteURL from 'is-absolute-url'

export default ({node}) => {
  return (
    <div sx={{
      bg: 'secondary',
      my: 5,
      width: ['full', null, null, null, '120%'],
      ml: ['auto', null, null, null, '-10%'],
      borderRadius: 'lg',
      padding: 5,
      p: {
        fontSize: [3, 4, 5, 5],
        fontWeight: 'heading',
        lineHeight: 'heading',
        fontFamily: 'heading',
        my: 0,
        mb: 4,
        color: 'white'
      }
    }}
    >
      <p>{node.text}</p>
      <div sx={{textAlign: 'left', mt: 3}}>
        {isAbsoluteURL(node.url)
          ? (<a href={node.url} sx={{variant: 'buttons.simpleWhite'}}>{node.buttonText} <FaChevronRight sx={{position: 'relative', top: '0.25rem'}} /></a>)
          : (<Link to={node.url} sx={{variant: 'buttons.simpleWhite'}}>{node.buttonText} <FaChevronRight sx={{position: 'relative', top: '0.25rem'}} /></Link>)}
      </div>
    </div>
  )
}
