/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react'; // eslint-disable-line
import { graphql } from 'gatsby';

import Seo from '../components/seo';
import RenderModules from '../utils/renderModules';
// import {graphql, Link} from 'gatsby'

const Page = (props) => {
  const { data } = props;
  const page = data.page != null ? data.page.content : data.pageHidden.content;
  // const page = data && data.page && data.page.content;
  console.log('page:', page);

  return (
    <>
      <Seo metaInfo={page._rawMeta} pagePath={page.main.slug.current} />
      {RenderModules(page.main._rawModules)}
      {/* <p>{JSON.stringify(page._rawMeta)}</p> */}
    </>
  );
};

export default Page;

export const query = graphql`
  query GenericPageTemplateQuery($id: String!) {
    page: sanityPage(id: { eq: $id }) {
      content {
        main {
          slug {
            current
          }
          _rawModules(resolveReferences: { maxDepth: 9 })
          title
        }
        _rawMeta(resolveReferences: { maxDepth: 9 })
      }
    }
    pageHidden: sanityPageHidden(id: { eq: $id }) {
      content {
        main {
          slug {
            current
          }
          _rawModules(resolveReferences: { maxDepth: 9 })
          title
        }
        _rawMeta(resolveReferences: { maxDepth: 9 })
      }
    }
  }
`;
