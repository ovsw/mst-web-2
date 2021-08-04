/** @jsx jsx */
import {jsx, Styled} from 'theme-ui'
import React, {useState, useEffect} from 'react' // eslint-disable-line
import BlockContent from '@sanity/block-content-to-react'
import serializers from '../../utils/serializers'
import {Link} from 'gatsby'

import * as s from './videoHero.module.css'

const VideoHero = ({data}) => {
  const {buttonText, text, title, url, video} = data
  const [courtainClass, setCourtainClass] = useState('')
  useEffect(() => {
    setCourtainClass('open')
  })
  let videoSource = null
  let posterBg = null
  let heroType = 'Performances'
  switch (video) {
    case 'performances1' :
      videoSource = 'https://mstvideo-ac97.kxcdn.com/mainstages-intro-montage.mp4'
      posterBg = '/images/hero-bg-live.jpg'
      heroType = 'Performances'
      break
    case 'live1' :
      videoSource = 'https://lrw-ac97.kxcdn.com/mainstages-families-bg-video.mp4'
      posterBg = '/images/hero-bg-live.jpg'
      heroType = 'Live'
      break
    default :
      videoSource = 'https://mstvideo-ac97.kxcdn.com/mainstages-intro-montage.mp4'
  }

  return (
    <section
      id={`hero--${heroType}`}
      className={`${s.hero} ${s[`hero${heroType}`]}`}
    >
      <video className={s.hero__videoBg} playsInline='' autoPlay muted loop poster={posterBg} id='heroVideo'>
        <source data-src={videoSource} type='video/mp4' src={videoSource} />
      </video>

      <div className={s.hero__content}>
        <Styled.h1 className={s.hero__heading} sx={{color: 'primary'}}>{title}</Styled.h1>
        <div className={s.hero__hookline}><BlockContent blocks={text} serializers={serializers} /></div>
        <Link
          className={s.hero__cta} to={url} sx={{
            variant: 'buttons.simple'
          }}
        >{buttonText}
        </Link>
      </div>
      <img className={`${s.hero__leftCurtain} ${s[courtainClass]}`} src='/images/left-courtain.png' />
      <img className={`${s.hero__rightCurtain} ${s[courtainClass]}`} src='/images/right-courtain.png' />
    </section>
  )
}

export default VideoHero
