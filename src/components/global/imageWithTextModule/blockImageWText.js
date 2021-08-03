/** @jsx jsx */
import {jsx, Container} from 'theme-ui'
import React from 'react' // eslint-disable-line
import BackgroundImage from 'gatsby-background-image'

import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import clientConfig from '../../../../client-config'

import BlockContent from '@sanity/block-content-to-react'
import serializers from '../../../utils/serializers'

const BlockImageWText = ({image, text, layout}) => {
  const fluidProps = getFluidGatsbyImage(image.asset.id, {maxWidth: 1200}, clientConfig.sanity)

  return (
    <section sx={{
      variant: 'sections.default',
      // bg: 'primary',
      py: [0, null, 0, 0]
    }}
    >
      <div sx={{maxWidth: ['none', null, null, null, null, '1660px'], mx: [0, null, null, null, null, 'auto']}}>
        <div sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: layout === 'right' ? 'row-reverse' : 'row'
        }}
        >
          <div
            sx={{
              variant: 'styles',
              width: ['full', null, null, null, '50%'],
              p: 5,
              py: 6
            }}
          >
            <BlockContent blocks={text} serializers={serializers} className='darkBg' />
          </div>

          <BackgroundImage
            fluid={fluidProps} sx={{
              backgroundPosition: 'center center',
              width: ['full', null, null, null, '50%'],
              minHeight: ['400px']
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default BlockImageWText
