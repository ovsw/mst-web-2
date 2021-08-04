// import {redirectTo} from '@reach/router'
// import {relative} from 'path'

import breakpoints from './breakpoints';
import typography from './typography';
import colors from './colors';
import sizes from './sizes';
import space from './space';
import shadows from './shadows';
import links from './links';
import buttons, { sharedButtonStyles } from './buttons';
import sections from './sections';
import inputs from './inputs';
import lists from './lists';
import misc from './misc';
import { skewedRight } from './common';

const sharedHeadingStyles = {
  fontWeight: 'heading',
  lineHeight: 'heading',
  fontFamily: 'heading',
  m: 0,
  mb: 3,
  color: 'secondary',
};

export default {
  ...breakpoints,
  ...typography,
  ...colors,
  ...sizes,
  ...space,
  ...shadows,
  ...links,
  ...buttons,
  ...sections,
  ...inputs,
  ...lists,
  ...misc, // borderWidths, radii, zindeces
  layout: {
    container: {
      maxWidth: ['1200px'],
      mx: 'auto',
      px: [2, 3, null, 3, 0],
    },
    TwoCol: {
      width: ['full', null, null, '1/2'],
    },
  },
  utils: {
    pin: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    textCenter: {
      textAlign: 'center',
    },
    skewedright: {
      ...skewedRight,
    },
  },
  styles: {
    root: {
      margin: 0,
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    Header: {
      display: 'block',
      zIndex: '5',
      position: 'relative',
    },
    Layout: {
      color: 'text',
      fontFamily: 'body',
      fontSize: '2',
    },
    a: {
      color: 'primaryDark',
      textDecoration: 'none',
      borderBottom: '2px solid',
      borderColor: 'primaryDark',
      pb: '-0.1em',
      ':hover': {
        color: 'primary',
        borderColor: 'primary',
      },
    },
    '.contentButton': {
      ...sharedButtonStyles,
      color: 'light',
      display: 'inline-block',
      ':hover': {
        bg: 'primary',
        transform: 'translateY(-3px)',
        color: 'secondary',
      },
    },
    '.darkBg .contentButton': {
      color: 'secondary',
      bg: 'white',
      ':hover': {
        bg: 'secondary',
        color: 'white',
      },
    },
    p: {
      fontSize: 2,
      lineHeight: 'body',
      color: 'textBody',
    },
    h1: {
      ...sharedHeadingStyles,
      fontSize: [5, 6, 7, 8],
    },
    h2: {
      ...sharedHeadingStyles,
      fontSize: [4, 5, 6, 6],
      mb: 4,
    },
    '* + h2, * + h1': {
      mt: 5,
    },
    h3: {
      ...sharedHeadingStyles,
      fontSize: [3, 4, 5, 5],
      fontWeight: '300',
      m: 0,
    },
    '* + h3': {
      mt: 4,
    },
    h4: {
      ...sharedHeadingStyles,
      fontSize: [3, 3, 4],
    },
    h5: {
      ...sharedHeadingStyles,
      fontSize: 2,
    },
    h6: {
      ...sharedHeadingStyles,
      fontSize: 1,
    },
    code: {},
    pre: {},
    hr: {
      bg: 'muted',
      border: 0,
      height: '1px',
      m: 3,
    },
    img: {
      mt: 4,
    },
    '.contentImage': {
      m: '0',
      p: '0',
    },
    figure: {
      '&.left': {
        float: ['none', null, null, null, 'left'],
        width: ['none', null, null, null, '70%'],
        marginLeft: ['auto', null, null, null, '-200px'],
        px: 4,
        display: 'block',
        img: {
          width: 'full',
        },
        figcaption: {
          mb: 2,
        },
      },
      '&.right': {
        float: ['none', null, null, null, 'right'],
        width: ['none', null, null, null, '70%'],
        marginRight: ['auto', null, null, null, '-200px'],
        px: 4,
        display: 'block',
        img: {
          width: 'full',
        },
        figcaption: {
          mb: 2,
        },
      },
    },
    figcaption: {
      textAlign: 'center',
      fontSize: 1,
      mt: 0,
      mb: 4,
      fontStyle: 'italic',
    },
    table: {
      width: '100%',
      textAlign: 'left',
      tr: {
        td: {
          borderTop: '2px solid',
          borderColor: 'gray.3',
          padding: 2,
        },
      },
    },
  },
};
