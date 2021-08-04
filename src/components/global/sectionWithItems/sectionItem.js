/** @jsx jsx */
import { jsx } from 'theme-ui';

import BlockContent from '@sanity/block-content-to-react';
import serializers from '../../../utils/serializers';

const SectionItem = ({ title, content, i }) => {
  return (
    <div sx={sectionItemStyles}>
      <div className="number">{i + 1}</div>
      <h3>{title}</h3>
      <BlockContent blocks={content} serializers={serializers} />
    </div>
  );
};

export default SectionItem;

const sectionItemStyles = {
  variant: 'styles',
  padding: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '.number': {
    fontSize: 5,
    borderRadius: '50%',
    border: '2px solid',
    borderColor: 'primary',
    color: 'secondary',
    width: '100px',
    lineHeight: '100px',
    textAlign: 'center',
    p: '0',
  },
  p: {
    fontSize: 1,
  },
};
