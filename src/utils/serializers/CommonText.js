/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react'; // eslint-disable-line
import BlockContent from '@sanity/block-content-to-react';

import serializers from './index';

export default function CommonText({ node }) {
  return (
    <div>
      <BlockContent
        blocks={node.commonText.content}
        serializers={serializers}
      />
    </div>
  );
}
