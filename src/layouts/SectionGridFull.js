/** @jsx jsx */
import React from 'react'; // eslint-disable-line
import { jsx } from 'theme-ui';
import BackgroundImage from 'gatsby-background-image';

const SectionGridFull = ({
  fluidBgImg,
  content = <p>no content</p>,
  reverse = false,
  imgValign = 'center',
  bgColor = 'primaryDark',
}) => {
  const r = reverse ? '-' : '';
  return (
    <section
      sx={{
        display: 'grid',
        gridTemplateColumns: '100px 1fr 1fr 1fr 100px',
        gridTemplateRows: ['400px 1fr 1fr 200px', null, '100px 1fr 1fr 100px'],
        bg: bgColor,
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
            p: [0, 3],
            maxWidth: ['100%', null, 'md', 'xl', null, '2xl'],
            bg: 'white',
            marginLeft: reverse ? 'auto' : '0',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <div
            sx={{
              variant: 'borders.drawn',
              p: [2, null, null, 4],
            }}
          >
            {content}
          </div>
        </div>
      </div>

      <BackgroundImage
        as="div"
        fluid={fluidBgImg}
        sx={{
          backgroundPosition: `${imgValign} center`,
          gridColumnStart: [`${r}1`, null, null, `${r}3`],
          gridColumnEnd: `${r}6`,
          gridRowStart: '1',
          gridRowEnd: ['2', null, '5'],
        }}
      />
    </section>
  );
};

export default SectionGridFull;
