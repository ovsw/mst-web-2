/** @jsx jsx */
import React from 'react'; // eslint-disable-line
import { jsx } from 'theme-ui';
import { FaFileAlt } from 'react-icons/fa';

export default ({ node }) => {
  return (
    <a
      href={node.file.asset.url}
      rel="noopener noreferrer"
      className="contentButton"
      target="_blank"
    >
      <FaFileAlt sx={{ position: 'relative', top: '2px' }} /> {node.description}
    </a>
  );
};
