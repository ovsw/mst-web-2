/** @jsx jsx */
import {jsx, Container, Styled} from 'theme-ui'
import React, {useContext} from 'react' // eslint-disable-line

import Casette from './casette'

// import './casettes.css'

const Casettes = ({data}) => {
  const {title, items} = data
  return (
    <section className='slidecards' sx={{variant: 'sections.default'}}>
      <Container>
        {title && (
          <div className='slidecards__heading-wrapper'>
            <Styled.h2>{title}</Styled.h2>
          </div>
        )}
        <div
          className='slidecards__cards-wrapper1' sx={{
            display: 'flex',
            flexWrap: 'wrap'
          }}
        >
          {items.map((casette, i) => (
            <div
              key={casette.buttonUrl} sx={{
                px: '1rem',
                pb: '2rem',
                width: ['full', null, '1/3'],
                display: 'flex'
              }}
            >
              <Casette {...casette} i={i} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Casettes

// const casettesTempContent = [
//   {
//     title: 'Weekly Classes for Kids',
//     subtitle: 'Interactive, Fun, Personalized',
//     description: 'These virtual classes combine our arts education expertise with wacky fun!',
//     url: '/'
//   },
//   {
//     title: 'Weekly Classes for Kids',
//     subtitle: 'Interactive, Fun, Personalized',
//     description: 'These virtual classes combine our arts education expertise with wacky fun!',
//     url: '/'
//   },
//   {
//     title: 'Weekly Classes for Kids',
//     subtitle: 'Interactive, Fun, Personalized',
//     description: 'These virtual classes combine our arts education expertise with wacky fun!',
//     url: '/'
//   },
//   {
//     title: 'Weekly Classes for Kids',
//     subtitle: 'Interactive, Fun, Personalized',
//     description: 'These virtual classes combine our arts education expertise with wacky fun!',
//     url: '/'
//   }
// ]
