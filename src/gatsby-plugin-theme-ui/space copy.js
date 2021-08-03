const space = {
  // space: [
  //   0,
  //   '0.25rem', // 4
  //   '0.5rem', // 8
  //   '1rem', // 16
  //   '2rem', // 32
  //   '4rem', // 64
  //   '8rem', // 128
  //   '16rem', // 256
  //   '32rem', // 512
  //   '1px'
  // ],
  space: {
    0: '0',
    xs: '0.25rem', // 4 - 1
    s: '0.5rem', // 8 - 2
    m: '1rem', // 16 - 3
    l: '2rem', // 32 - 4
    xl: '4rem', // 64 - 5
    '2xl': '8rem', // 128 - 6
    '3xl': '16rem', // 256 - 7
    '4xl': '32rem', // 512 - 8
    1: '1px',
    inset: {
      default: '1rem 1rem 1rem 1rem',
      xs: '0.25rem 0.25rem 0.25rem 0.25rem',
      s: '0.5rem 0.5rem 0.5rem 0.5rem',
      m: '1rem 1rem 1rem 1rem',
      l: '2rem 2rem 2rem 2rem',
      xl: '4rem 4rem 4rem 4rem',
      '2xl': '8rem 8rem 8rem 8rem',
      '3xl': '16rem 16rem 16rem 16rem',
      '4xl': '32rem 32rem 32rem 32rem'
    },
    insetSquish: {
      default: '1rem 1rem 1rem 1rem',
      s: '0.25rem 0.5rem 0.25rem 0.5rem',
      m: '0.5rem 1rem 0.5rem 1rem',
      l: '1rem 2rem 1rem 2rem',
      xl: '2rem 4rem 2rem 4rem',
      '2xl': '4rem 8rem 4rem 8rem',
      '3xl': '8rem 16rem 8rem 16rem',
      '4xl': '16rem 32rem 16rem 32rem'
    },
    inline: {
      default: '0 1rem 0 0',
      xs: '0 0 25rem 0 0',
      s: '0 0.5rem 0 0',
      m: '0 1rem 0 0',
      l: '0 2rem 0 0',
      xl: '0 4rem 0 0',
      '2xl': '0 8rem 0 0',
      '3xl': '0 16rem 0 0',
      '4xl': '0 32rem 0 0'
    },
    stack: {
      default: '0 0 1rem 0',
      xs: '0 0 0.25rem 0',
      s: '0 0 0.5rem 0',
      m: '0 0 1rem 0',
      l: '0 0 2rem 0',
      xl: '0 0 4rem 0',
      '2xl': '0 0 8rem 0',
      '3xl': '0 0 16rem 0',
      '4xl': '0 0 32rem 0'
    }
  }
}

// const space = {
//   space: {
//     0: '0',
//     xs: '0.25rem', // 4
//     s: '0.5rem', // 8
//     m: '1rem', // 16
//     l: '2rem', // 32
//     xl: '4rem', // 64
//     '2xl': '8rem', // 128
//     '3xl': '16rem', // 256
//     '4xl': '32rem', // 512
//     1: '1px'
//   }
// }

export default space
