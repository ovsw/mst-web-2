/** @jsx jsx */
import { jsx, Styled, Container } from 'theme-ui';
import React, { useEffect } from 'react'; // eslint-disable-line
import SEO from '../components/seo';
import RenderModules from '../utils/renderModules';
import { imageUrlFor } from '../utils/image-url';
import { buildImageObj } from '../utils/helpers'; // cn

import BlockContent from '@sanity/block-content-to-react';
import serializers from '../utils/serializers';
import { format, parseISO } from 'date-fns';

const Post = ({ pageContext }) => {
  // console.log(path, pageContext)

  const {
    main: { publishedAt, modules, title, slug, author },
    meta,
  } = pageContext;

  const dateFormatted = format(parseISO(publishedAt), 'MMM dd yyy');

  const metaSection = (author) => {
    if (author) {
      return (
        <>
          <div sx={metaStyles}>
            <p className="date">
              <span>posted on</span> {dateFormatted}{' '}
            </p>
            <Styled.h3 as="p" className="authorName">
              <span>by</span> {author.content.main.name},{' '}
              <span>{author.content.main.role}</span>
            </Styled.h3>
          </div>
        </>
      );
    }
  };

  const authorSection = (author) => {
    if (author) {
      const authorImageDesktop = imageUrlFor(
        buildImageObj(author.content.main.image)
      )
        .width(200)
        .height(200)
        .auto('format')
        .url();
      const authorImageMobile = imageUrlFor(
        buildImageObj(author.content.main.image)
      )
        .width(100)
        .height(100)
        .auto('format')
        .url();
      return (
        <>
          <div sx={authorStyles}>
            <div className="column1">
              <picture>
                <source srcSet={authorImageMobile} media="(max-width: 768px)" />
                <img src={authorImageDesktop} alt={author.content.main.name} />
              </picture>
            </div>
            <div className="column2">
              <p className="date">
                <span>posted on</span> {dateFormatted}{' '}
              </p>
              <Styled.h3 as="p" className="authorName">
                <span>by</span> {author.content.main.name}
              </Styled.h3>
              <div className="bio">
                <BlockContent
                  blocks={author.content.main.shortBio}
                  serializers={serializers}
                />
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <SEO metaInfo={meta} pagePath={slug.current} />
      <Container sx={{ mt: 5 }}>
        <Styled.h1>{title}</Styled.h1>
        {metaSection(author)}
      </Container>
      {RenderModules(modules)}
      <Container sx={{ mt: 5 }}>{authorSection(author)}</Container>
    </>
  );
};

export default Post;

const authorStyles = {
  display: ['block', 'flex'],
  pb: [4, 5],
  img: {
    borderRadius: '50%',
  },
  '.date': {
    color: 'textMuted',
  },
  '.bio': {
    variant: 'styles',
    p: {
      fontSize: 1,
      color: '#797474',
    },
  },
  '.authorName span': {
    fontSize: 1,
  },
  '.column1': {
    px: 4,
  },
  '.column2': {
    px: 4,
  },
};

const metaStyles = {
  '.date': {
    color: 'textMuted',
    mb: '0.5rem!important',
  },
  '.authorName span': {
    fontSize: 1,
  },
};
