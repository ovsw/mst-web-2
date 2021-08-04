import React from 'react';

import StandardText from './global/standardText';
// import ContentImage from '../global/contentImage'
import VideoHero from './global/videoHero';
import HeroInnerModule from './global/heroInnerModule';
import Casettes from './global/casettes';
import Testimonials from './global/testimonialsSlideshow';
import ImageWTextModule from './global/imageWithTextModule';
import SectionWithItems from './global/sectionWithItems';
import PricingTable from './global/pricingTable';

const Modules = ({ module }) => {
  // console.log(module);
  switch (module._type) {
    case 'standardText':
      return <StandardText data={module} />;
    // case 'imageModule':
    //   return <ContentImage data={module} />
    case 'videoHero':
      return <VideoHero data={module} />;
    case 'casettes':
      return <Casettes data={module} />;
    case 'testimonials':
      return <Testimonials module={module} />;
    case 'heroInnerModule':
      return <HeroInnerModule data={module} />;
    case 'imageWTextOverModule':
      return <ImageWTextModule data={module} />;
    case 'sectionWithItems':
      return <SectionWithItems data={module} />;
    case 'pricingTableRef':
      return <PricingTable data={module} />;
    default:
      return (
        <span>module of type: {module._type} not found in front-end.</span>
      );
  }
};

export default Modules;
