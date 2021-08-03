/** @jsx jsx */
import {jsx} from 'theme-ui'
import React, {useContext} from 'react' // eslint-disable-line
import BlockContent from '@sanity/block-content-to-react'
// import {Link} from 'gatsby'

const TestimonialSlide = ({content, name, role}) => {
  return (
    <div className='testimonial-slider__content'>
      <div className='testimonial-slider__text'><span>“ </span>
        <BlockContent blocks={content} />
        <span className='endquote'>”</span>
      </div>
      <p className='testimonial-slider__author'>- {name} , <span className='testimonial-slider__company'>{role}</span></p>
    </div>
  )
}

export default TestimonialSlide
