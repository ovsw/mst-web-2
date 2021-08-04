/** @jsx jsx */
import { jsx, Container, Styled } from 'theme-ui';
import React, { useEffect } from 'react'; // eslint-disable-line
import { graphql, Link } from 'gatsby';
import { mapEdgesToNodes } from '../utils/helpers';
// import SEO from '../components/seo'
// import RenderModules from '../utils/renderModules'
// import {graphql, Link} from 'gatsby'
import BlockContent from '@sanity/block-content-to-react';
import { format, parseISO } from 'date-fns';

const PostListItem = ({ _rawContent }) => {
  const {
    main: { title, slug, excerpt, publishedAt, author },
  } = _rawContent;
  return (
    <>
      <div
        sx={{
          variant: 'styles',
          mb: 5,
          '.meta': { fontSize: 1, color: 'textMuted' },
        }}
      >
        <Styled.h2>
          <Link to={`/blog/${slug.current}`} sx={{ lineHeight: 'tight' }}>
            {title}
          </Link>
        </Styled.h2>
        <p className="meta">
          posted on {format(parseISO(publishedAt), 'MMM dd yyy')}
          {author ? `, by ${author.content.main.name}` : ''}{' '}
        </p>
        <BlockContent blocks={excerpt} />
      </div>
    </>
  );
};

const Page = ({ data }) => {
  // console.log(mapEdgesToNodes(data.allSanityPost))

  return (
    <section sx={{ variant: 'sections.default' }}>
      <Container sx={{ maxWidth: '768px' }}>
        <Styled.h1 sx={{ mb: 5 }}>mainstages Blog</Styled.h1>

        {mapEdgesToNodes(data.allSanityPost).map((post) => {
          return (
            <PostListItem key={post._rawContent.main.slug.current} {...post} />
          );
        })}
      </Container>
    </section>
  );
};

export default Page;

export const query = graphql`
  query HomePageQuery {
    allSanityPost(sort: { fields: content___main___publishedAt, order: DESC }) {
      edges {
        node {
          _rawContent(resolveReferences: { maxDepth: 10 })
        }
      }
    }
  }
`;
