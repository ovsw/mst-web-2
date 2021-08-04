/** @jsx jsx */
import { jsx, Container, Styled } from 'theme-ui';
import React from 'react'; // eslint-disable-line

import PricingTableRow from './pricingTableRow';

const PricingTable = ({ data }) => {
  // console.log(data)
  const { pricingTable } = data;
  return (
    <section
      sx={{
        variant: 'sections.default',
      }}
    >
      <Container>
        <Styled.h2>{data.title}</Styled.h2>
        <table sx={tableStyles}>
          <thead>
            <tr>
              <th className="featureName">{pricingTable.col0}</th>
              <th>{pricingTable.col1}</th>
              <th>{pricingTable.col2}</th>
              <th>{pricingTable.col3}</th>
            </tr>
          </thead>
          <tbody>
            {pricingTable.items.map((row) => (
              <PricingTableRow key={row._key} {...row} />
            ))}
          </tbody>
        </table>
      </Container>
    </section>
  );
};

export default PricingTable;

const tableStyles = {
  width: 'full',
  th: {
    bg: 'primary',
    color: 'secondary',
    p: 2,
    py: 3,
    fontWeight: 'bold',
    width: ['1/3', null, null, 'auto'],
    borderRight: ['2px solid white', null, null, 'none'],
    '&:first-of-type': {
      display: ['none', null, null, 'table-cell'],
    },
  },
  tr: {
    display: ['flex', null, null, 'table-row'],
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
  },
  td: {
    width: ['1/3', null, null, 'auto'],
    p: 2,
    textAlign: 'center',
    borderBottom: '1px solid',
    borderRight: ['1px solid', null, null, 'none'],
    borderColor: 'gray.3',
    color: 'primary',
    ':first-of-type': {
      borderLeft: ['1px solid', null, null, 'none'],
      borderColor: 'gray.3',
      width: ['full', null, null, 'auto'],
      textAlign: 'center',
      color: 'text',
    },
  },
  '.firstFeature': {
    borderLeft: ['1px solid', null, null, 'none'],
    borderColor: 'gray.3',
  },
};
