/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react'; // eslint-disable-line

// import {buildImageObj} from '../../utils/helpers' // cn
// import {imageUrlFor} from '../../utils/image-url'

// import FloatedImageWText from './floatedImageWText'
// import BlockImageWText from './blockImageWText'

const ImageWTextOverModule = ({ data }) => {
  const { theme } = data;
  return (
    <>
      {/* {theme === 'overlapping' && <FloatedImageWText {...data} />}
      {theme === 'sideBySide' && <BlockImageWText {...data} />} */}
      {theme === 'overlapping' && <p>Text Overlapping w Image</p>}
      {theme === 'sideBySide' && <p>Text Side by side w Image</p>}
    </>
  );
};

export default ImageWTextOverModule;

// const desktopImageUrl = imageUrlFor(buildImageObj(image))
//   .width(1920)
// // .height(Math.floor((9 / 16) * 600))
// // .height(thumbSize.height)
//   .auto('format')
//   .url()

// const tabletImageUrl = imageUrlFor(buildImageObj(image))
//   .width(1200)
// // .height(Math.floor((11 / 16) * 1200))
// // .height(thumbSize.height)
//   .auto('format')
//   .url()

// const mobileImageUrl = imageUrlFor(buildImageObj(image))
//   .width(768)
// // .height(Math.floor((11 / 16) * 1200))
// // .height(thumbSize.height)
//   .auto('format')
//   .url()

// {/* <picture>
//         <source srcSet={mobileImageUrl} media='(max-width: 768px)' />
//         <source srcSet={tabletImageUrl} media='(max-width: 1200px)' />
//         <img src={desktopImageUrl} alt={data.caption} />
//       </picture> */}
