/** @jsx jsx */
import {jsx} from 'theme-ui'
import React from 'react' // eslint-disable-line
import {motion} from 'framer-motion'

import {buildImageObj} from '../../utils/helpers' // cn
import {imageUrlFor} from '../../utils/image-url'

import './heroInnerModule.css'

const HeroInnerModule = ({data}) => {
  const desktopImageUrl = imageUrlFor(buildImageObj(data.image))
    .width(1920)
    // .height(Math.floor((9 / 16) * 1920))
    .height(580)
    // .height(thumbSize.height)
    .auto('format')
    .url()

  const tabletImageUrl = imageUrlFor(buildImageObj(data.image))
    .width(1200)
    // .height(Math.floor((11 / 16) * 1200))
    // .height(thumbSize.height)
    .height(400)
    .auto('format')
    .url()

  const mobileImageUrl = imageUrlFor(buildImageObj(data.image))
    .width(768)
    // .height(Math.floor((11 / 16) * 1200))
    .height(300)
    .auto('format')
    .url()

  return (
    <section className='basic-page__hero' sx={{py: '1px'}}>
      <div className='basic-page__hero-bg-image-source'>
        <picture>
          <source srcSet={mobileImageUrl} media='(max-width: 768px)' />
          <source srcSet={tabletImageUrl} media='(max-width: 1200px)' />
          <img className='basic-page__hero-bg-image' src={desktopImageUrl} alt={data.caption} />
        </picture>
      </div>
      <div
        className='basic-page__hero-content'

      >
        <motion.h1
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.3}}
          className='basic-page__hero-title'
        >{data.title}
        </motion.h1>
      </div>
    </section>
  )
}

export default HeroInnerModule
