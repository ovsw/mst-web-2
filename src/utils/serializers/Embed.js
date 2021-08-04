import React from 'react';
import Helmet from 'react-helmet';
import JotFormEmbed from './jotformEmbed';

export default ({ node }) => {
  let helmetCode = '';
  switch (node.embedType) {
    case 'jotForm':
      helmetCode = (
        <Helmet>
          <script src="https://services.cognitoforms.com/scripts/embed.js" />
        </Helmet>
      );
      break;
    case 'calendly':
      helmetCode = (
        <Helmet>
          <script src="https://assets.calendly.com/assets/external/widget.js" />
        </Helmet>
      );
      break;
    case 'embedsocial':
      helmetCode = (
        <Helmet>
          <script src="https://embedsocial.com/embedscript/ri.js" />
        </Helmet>
      );
      break;
    default:
      helmetCode = '';
  }
  return (
    <>
      {helmetCode}
      {node.embedType !== 'jotForm' && (
        <div dangerouslySetInnerHTML={{ __html: node.code }} />
      )}
      {node.embedType === 'jotForm' && <JotFormEmbed jotFormUrl={node.code} />}
    </>
  );
};
