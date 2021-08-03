/** @jsx jsx */
import {jsx, Container} from 'theme-ui'
import React from 'react' // eslint-disable-line

import {buildImageObj} from '../../utils/helpers' // cn
import {imageUrlFor} from '../../utils/image-url'

const ContentImage = ({data}) => {
  const {image, caption} = data
  // const thumbSize = props.largeThumbs ? {width: 700, height: 400} : {width: 370, height: 252}
  const thumbSize = {width: 700, height: 400}
  const imageUrl = imageUrlFor(buildImageObj(image))
    .width(thumbSize.width)
    // .height(Math.floor((9 / 16) * 600))
    // .height(thumbSize.height)
    .auto('format')
    .url()

  return (
    <section sx={{variant: ['styles', 'sections.rteSection'], bg: 'backgrond'}}>
      <Container sx={{textAlign: 'center'}}>
        <figure>
          <picture>
            <source media='(min-width: 650px)' srcSet={imageUrl} />
            <source media='(min-width: 465px)' srcSet={imageUrl} />
            <img src={imageUrl} alt='MISSSING ALT' sx={{maxWidth: '100%'}} />
          </picture>
          <figcaption sx={{color: 'textMuted', fontWeight: 'light'}}>{caption}</figcaption>
        </figure>
      </Container>
    </section>

  )
}
export default ContentImage
