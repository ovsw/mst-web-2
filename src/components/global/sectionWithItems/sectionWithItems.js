/** @jsx jsx */
import { jsx, Container, Styled } from 'theme-ui';
import React, { useContext } from 'react'; // eslint-disable-line

import SectionItem from './sectionItem';

const SectionWithItems = ({ data }) => {
  // console.log(data)
  return (
    <section
      sx={{
        variant: ['sections.default', 'sections.white'],
      }}
    >
      <Container sx={{ textAlign: 'center' }}>
        <Styled.h2>{data.title}</Styled.h2>
        <div
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {data.items.map(({ _key, content, title }, i) => {
            return (
              <div
                key={_key}
                sx={{
                  width: ['full', null, null, '1/3'],
                }}
              >
                <SectionItem content={content} title={title} i={i} />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default SectionWithItems;
