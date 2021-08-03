// import {skewedRight} from './common'

export const sharedButtonStyles = {
  padding: '.5rem .9rem',
  border: 'none',
  textAlign: 'center',
  fontFamily: 'body',
  fontWeight: '400',
  textDecoration: 'none',
  display: 'inline-block',
  cursor: 'pointer',
  lineHeight: 'inherit',
  backgroundColor: 'primaryDark',
  my: 3,
  borderRadius: 'default',
  boxShadow: '0 -3px 0 0 rgba(24,24,24,.15) inset, 0 3px 10px rgba(0,0,0,0.3)',
  py: '0.7rem',
  px: '1.4rem',
  fontSize: 2,
  transition: 'all 300ms ease',
  ':hover': {
    transform: 'translateY(-3px)'
  }
}

const buttons = {
  buttons: {
    simple: {
      ...sharedButtonStyles,
      color: 'light'
    },
    simpleAccent: {
      ...sharedButtonStyles,
      backgroundColor: 'primary',
      color: 'light!important'
    },
    simpleAccentDark: {
      ...sharedButtonStyles,
      backgroundColor: 'secondary',
      color: 'white!important'
    },
    simpleWhite: {
      ...sharedButtonStyles,
      backgroundColor: 'white',
      color: 'black',
      border: 'none'
    },
    outline: {
      ...sharedButtonStyles,
      backgroundColor: 'transparent',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'primary',
      color: 'primary',
      fontWeight: 'semibold',
      borderRadius: 'default',
      '&:hover': {
        backgroundColor: 'primary',
        color: 'light',
        borderColor: 'transparent'
      }
    },
    bordered: {
      ...sharedButtonStyles,
      backgroundColor: 'primary',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'primaryHover',
      color: 'white',
      fontWeight: 'bold',
      borderRadius: 'default',
      '&:hover': {
        backgroundColor: 'primaryHover'
      }
    },
    disabled: {
      ...sharedButtonStyles,
      cursor: 'not-allowed',
      backgroundColor: 'primary',
      border: 'none',
      opacity: 0.5,
      color: 'white',
      fontWeight: 'bold',
      borderRadius: 'default'
    },
    '3D': {
      ...sharedButtonStyles,
      backgroundColor: 'primary',
      border: 'none',
      borderBottomWidth: '4px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'primaryHover',
      color: 'white',
      fontWeight: 'bold',
      borderRadius: 'default',
      transition: 'transform 0.3s ease-in-out',
      '&:hover': {
        transform: 'translateY(-1px)'
      }
    },
    '3DAccent': {
      ...sharedButtonStyles,
      backgroundColor: 'accent',
      border: 'none',
      borderBottomWidth: '4px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'accentDark',
      color: 'white',
      fontWeight: 'bold',
      borderRadius: 'default',
      transition: 'transform 0.3s ease-in-out',
      '&:hover': {
        transform: 'translateY(-1px)'
      }
    },
    elevated: {
      ...sharedButtonStyles,
      fontSize: '100%',
      lineHeight: 'inherit',
      backgroundColor: 'white',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'gray.4',
      color: 'text',
      fontWeight: 'bold',
      borderRadius: 'default',
      boxShadow: 'default',
      '&:hover': {
        backgroundColor: 'gray.1'
      }
    },
    navToggle: {
      display: ['inline', 'inline', 'none'],
      color: 'white',
      bg: 'transparent',
      outline: 'none',
      padding: 'calc(14 / 17 / 2 * 1rem)',
      appearance: 'none',
      border: 'none',
      m: 0,
      fontSize: '3.2rem',
      '& svg': {
        bg: 'primary',
        display: 'block',
        fill: 'inherit',
        p: '2',
        border: 'none',
        borderBottomWidth: '4px',
        borderBottomStyle: 'solid',
        borderBottomColor: 'primaryHover'
      }
    },
    mobileMenuExpand: {
      pt: 2,
      pb: 1,
      width: '3rem',
      cursor: 'pointer',
      lineHeight: 'inherit',
      fontSize: '100%',
      textDecoration: 'none',
      backgroundColor: 'primary',
      borderWidth: '0',
      borderLeftWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'primaryLight',
      color: 'white',
      fontWeight: 'bold',
      '&:hover': {
        backgroundColor: 'primaryHover'
      }
    }
  }
}

export default buttons
