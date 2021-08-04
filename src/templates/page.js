/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useEffect } from 'react'; // eslint-disable-line
import SEO from '../components/seo';
import RenderModules from '../utils/renderModules';
// import {graphql, Link} from 'gatsby'

const Page = ({ pageContext }) => {
  // console.log(path, pageContext)

  const {
    main: { modules, slug },
    meta,
  } = pageContext;

  return (
    <>
      <SEO metaInfo={meta} pagePath={slug.current} />
      {RenderModules(modules)}
    </>
  );
};

export default Page;
