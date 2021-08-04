/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import React from 'react'; // eslint-disable-line

import WizardCard from './wizard/wizard-card';

const PerformancesList = ({ performances }) => {
  return (
    <Container>
      <div sx={performanceGridStyles}>
        <div className="cardContainerWrapper">
          {performances.map(
            ({
              _rawContent: {
                main: { title, slug },
                performance: {
                  image,
                  performanceType,
                  noOfParticipants,
                  // ageRange,
                },
              },
            }) => {
              return (
                <div key={slug.current} className="cardContainer">
                  <WizardCard
                    title={title}
                    slug={slug.current}
                    noOfParticipants={noOfParticipants}
                    performanceType={performanceType}
                    image={image}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </Container>
  );
};

export default PerformancesList;

const performanceGridStyles = {
  pb: [4, 4, 5],
  '.cardContainerWrapper': {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  '.cardContainer': {
    p: 3,
    width: ['full', null, '1/2', '1/3', '1/'],
    display: 'flex',
  },
  img: {
    mt: 0,
  },
};
