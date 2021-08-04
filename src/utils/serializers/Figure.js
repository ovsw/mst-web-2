/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react'; // eslint-disable-line
// import Img from 'gatsby-image'
// import {getFluidGatsbyImage} from 'gatsby-source-sanity'
// import clientConfig from '../../../client-config'

import { buildImageObj } from '../helpers'; // cn
import { imageUrlFor } from '../image-url';

export default function Figure({ node }) {
  // console.log('node:', node)
  const thumbSize = { width: 800, height: 400 };
  const imageUrl = imageUrlFor(buildImageObj(node.image))
    .width(thumbSize.width)
    // .height(Math.floor((9 / 16) * 600))
    // .height(thumbSize.height)2
    .auto('format')
    .url();
  return (
    <figure className={`contentImage ${node.layout}`}>
      <img src={imageUrl} alt={node.alt} sx={{ maxWidth: '100%' }} />
      <figcaption sx={{ color: 'textMuted', fontWeight: 'light' }}>
        {node.caption}
      </figcaption>
    </figure>
  );
}

// export default ({node}) => {
//   // console.log(node.asset.metadata.dimensions.width)
//   let fluidProps = getFluidGatsbyImage(
//     node.asset._id,
//     {maxWidth: 730},
//     clientConfig.sanity
//   )

//   let imageClassName = 'contentImage'

//   if (node.asset.metadata.dimensions.width < 700) {
//     fluidProps = getFluidGatsbyImage(
//       node.asset._id,
//       {maxWidth: 400},
//       clientConfig.sanity
//     )
//     imageClassName = imageClassName + ' small'
//   }

//   if (node.asset.metadata.dimensions.aspectRatio > 1) { imageClassName = imageClassName + ' landscape' } else { imageClassName = imageClassName + ' portrait' }

//   return (
//     <figure className={imageClassName}>
//       <Img fluid={fluidProps} alt={node.alt} />
//       <figcaption>{node.caption}</figcaption>
//     </figure>
//   )
// }
