/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import React, { useState } from 'react'; // eslint-disable-line
import BlockContent from '@sanity/block-content-to-react';

import Wizard from '../components/wizard';

import { usePerformancesMetaData } from '../hooks/use-performances-metadata';

const WizardPage = ({ pageContext }) => {
  const performanceData = usePerformancesMetaData();

  return (
    <section sx={{ variant: 'sections.default' }}>
      <Container sx={{ variant: 'styles' }}>
        <h1>Find your performance</h1>
      </Container>
      <div sx={{ variant: 'styles' }}>
        <Container>
          <BlockContent blocks={pageContext.main.content} />
        </Container>
      </div>
      <Wizard performances={performanceData} />
    </section>
  );
};

export default WizardPage;
