/** @jsx jsx */
import { jsx } from 'theme-ui';
import { graphql } from 'gatsby';
import React from 'react'; // eslint-disable-line

import PerformancesListContent from '../../components/performance-list-content';

const PerforamncesList = ({ data }) => {
  return <PerformancesListContent performanceData={data} />;
};

export default PerforamncesList;
export const query = graphql`
  {
    interactive: allSanityPagePerformance(
      filter: {
        content: { performance: { performanceType: { eq: "interactive" } } }
      }
    ) {
      edges {
        node {
          _rawContent(resolveReferences: { maxDepth: 9 })
        }
      }
    }
    game: allSanityPagePerformance(
      filter: { content: { performance: { performanceType: { eq: "game" } } } }
    ) {
      edges {
        node {
          _rawContent(resolveReferences: { maxDepth: 9 })
        }
      }
    }
    judaism: allSanityPagePerformance(
      filter: {
        content: { performance: { performanceType: { eq: "judaism" } } }
      }
    ) {
      edges {
        node {
          _rawContent(resolveReferences: { maxDepth: 9 })
        }
      }
    }
    mystery: allSanityPagePerformance(
      filter: {
        content: { performance: { performanceType: { eq: "mystery" } } }
      }
    ) {
      edges {
        node {
          _rawContent(resolveReferences: { maxDepth: 9 })
        }
      }
    }
    custom: allSanityPagePerformance(
      filter: {
        content: { performance: { performanceType: { eq: "custom" } } }
      }
    ) {
      edges {
        node {
          _rawContent(resolveReferences: { maxDepth: 9 })
        }
      }
    }
  }
`;
