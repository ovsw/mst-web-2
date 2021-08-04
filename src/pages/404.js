/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react'; // eslint-disable-line
import { motion } from 'framer-motion';
import { graphql } from 'gatsby';
// import {graphql, Link} from 'gatsby'
// import {mapEdgesToNodes, localizeText} from '../lib/helpers'
import BackgroundImage from 'gatsby-background-image';

const FourOhFourPage = ({ data }) => {
  // const productsEdges = data && data.homeProducts
  // const productsNodes = mapEdgesToNodes(productsEdges)

  return (
    <BackgroundImage
      fluid={data.headerBg.childImageSharp.fluid}
      className="basic-page__hero"
      sx={{
        py: '1px',
        minHeight: '80vh',
        mt: '-80px!important',
        backgroundPosition: 'top right',
      }}
    >
      {/* <div className='basic-page__hero-bg-image-source'> */}
      {/*  aaaaaaaa */}
      {/* </div> */}
      <div className="basic-page__hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="basic-page__hero-title"
        >
          404 - Page Not Found :(
        </motion.h1>
        <p sx={{ fontSize: 4 }}>
          The page you&apos;re looking for doesn&apos;t exist. Please use the
          navigation menu to search for a page that does exist.
        </p>
      </div>
    </BackgroundImage>
  );
};

export const query = graphql`
  query {
    headerBg: file(relativePath: { eq: "mainstages-404-image.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
export default FourOhFourPage;
