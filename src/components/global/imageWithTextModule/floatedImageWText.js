/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react'; // eslint-disable-line
// import BackgroundImage from 'gatsby-background-image';

import { getGatsbyImageData } from 'gatsby-source-sanity';
import clientConfig from '../../../../client-config';
import { GatsbyImage } from 'gatsby-plugin-image';

import BlockContent from '@sanity/block-content-to-react';
import serializers from '../../../utils/serializers';

const FloatedImageWText = ({ image, text, layout }) => {
  const r = layout === 'right' ? '-' : '';
  const sectionImage = getGatsbyImageData(
    image.asset.id,
    { maxWidth: 1200, height: 800 },
    clientConfig.sanity
  );
  return (
    <section
      sx={{
        variant: ['sections.default', 'sections.primary'],
        py: [0, null, null, 4, 5],
        display: 'grid',
        gridTemplateColumns: '100px 1fr 1fr 1fr 100px',
        gridTemplateRows: ['400px 1fr 1fr 200px', null, '100px 1fr 1fr 100px'],
      }}
    >
      <div
        sx={{
          gridColumnStart: [`${r}1`, null, null, `${r}2`],
          gridColumnEnd: [`${r}6`, null, `${r}4`],
          gridRowStart: '2',
          gridRowEnd: ['5', null, '4'],
          position: 'relative',
          zIndex: '100',
        }}
      >
        <div
          sx={{
            p: 3,
            maxWidth: ['100%', null, 'md', 'xl', null, '2xl'],
            bg: 'white',
            marginLeft: layout === 'right' ? 'auto' : '0',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '2xl',
          }}
        >
          <div
            sx={{
              variant: 'styles',
              px: [2, null, null, 5],
              py: [3, null, null, 5],
            }}
          >
            <BlockContent blocks={text} serializers={serializers} />
          </div>
        </div>
      </div>
      <GatsbyImage
        image={sectionImage}
        alt="placeholder"
        sx={{
          backgroundPosition: 'center center',
          gridColumnStart: [`${r}1`, null, null, `${r}3`],
          gridColumnEnd: [`${r}6`, null, null, `${r}5`],
          gridRowStart: '1',
          gridRowEnd: ['2', null, '5'],
        }}
      />
      {/* <BackgroundImage
        fluid={fluidProps}
        sx={{
          backgroundPosition: 'center center',
          gridColumnStart: [`${r}1`, null, null, `${r}3`],
          gridColumnEnd: [`${r}6`, null, null, `${r}5`],
          gridRowStart: '1',
          gridRowEnd: ['2', null, '5'],
        }}
      /> */}
    </section>
  );
};

export default FloatedImageWText;
