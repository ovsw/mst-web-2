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

const Modules = ({ reactModule, type }) => {
  switch (type) {
    case 'standardText':
      return <StandardText data={reactModule} />;
    // case 'imageModule':
    //   return <ContentImage data={reactModule} />
    case 'videoHero':
      return <VideoHero data={reactModule} />;
    case 'casettes':
      return <Casettes data={reactModule} />;
    case 'testimonials':
      return <Testimonials data={reactModule} />;
    case 'heroInnerModule':
      return <HeroInnerModule data={reactModule} />;
    case 'imageWTextOverModule':
      return <ImageWTextModule data={reactModule} />;
    case 'sectionWithItems':
      return <SectionWithItems data={reactModule} />;
    case 'pricingTableRef':
      return <PricingTable data={reactModule} />;
    default:
      return <span>{type}</span>;
  }
};

export default Modules;
