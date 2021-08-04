import React from 'react';
import Helmet from 'react-helmet';
import { imageUrlFor } from '../utils/image-url';
import { buildImageObj } from '../utils/helpers';

import { useSiteGlobalSettings } from '../hooks/use-site-global-settings';

const siteRoute = 'https://www.mainstages.com';

const getOgImage = (image) => {
  return imageUrlFor(buildImageObj(image))
    .width(1200)
    .height(630)
    .auto('format')
    .url();
};
const getTwitterImage = (image) => {
  return imageUrlFor(buildImageObj(image))
    .width(800)
    .height(418)
    .auto('format')
    .url();
};

const SEO = ({ pagePath, metaInfo }) => {
  const { metaInformation: globalMetaInfo } = useSiteGlobalSettings();
  // console.log('globalmeta', globalMetaInfo)

  const title = metaInfo
    ? metaInfo.metaTitle
      ? `${metaInfo.metaTitle} | mainstages`
      : globalMetaInfo.metaTitle
    : globalMetaInfo.metaTitle;
  const metaDescription = metaInfo
    ? metaInfo.metaDescription
      ? metaInfo.metaDescription
      : globalMetaInfo.metaDescription
    : globalMetaInfo.metaDescription;

  const ogImage = metaInfo
    ? metaInfo.openImage
      ? metaInfo.openImage
      : globalMetaInfo.openImage
    : globalMetaInfo.openImage;
  const ogImageSrc = getOgImage(ogImage);
  const twitterImage = metaInfo
    ? metaInfo.twitterImageUrl
      ? metaInfo.twitterImageUrl
      : ogImage
    : ogImage;
  const twitterImageSrc = getTwitterImage(twitterImage);

  const openTitle = metaInfo
    ? metaInfo.openTitle
      ? metaInfo.openTitle
      : title
    : title;
  const openGraphDescription = metaInfo
    ? metaInfo.openGraphDescription
      ? metaInfo.openGraphDescription
      : metaDescription
    : metaDescription;
  const twitterTitle = metaInfo
    ? metaInfo.twitterTitle
      ? metaInfo.twitterTitle
      : title
    : title;
  const twitterDescription = metaInfo
    ? metaInfo.twitterDescription
      ? metaInfo.twitterDescription
      : metaDescription
    : metaDescription;

  return (
    <Helmet title={title}>
      <html lang="en" />
      <meta httpEquiv="Accept-CH" content="DPR, Width, Viewport-Width" />
      <meta property="og:locale" content="en_US" />
      <meta name="description" content={metaDescription} />
      <meta property="og:url" content={`${siteRoute}/${pagePath || ''}`} />
      <meta property="og:image" content={ogImageSrc} />
      <meta property="og:title" content={`${openTitle}`} />
      <meta property="og:site_name" content="mainstages" />
      <meta property="og:description" content={openGraphDescription} />
      {/* <meta name='twitter:site' content='@Midway' /> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${twitterTitle}`} />
      <meta name="twitter:image:src" content={twitterImageSrc} />
      <meta name="twitter:description" content={twitterDescription} />
      <meta name="twitter:url" content={`${siteRoute}/${pagePath || ''}`} />
    </Helmet>
  );
};

export default SEO;
