import React from 'react';
// components
import Hero from '../../Hero/Hero';
import Pricing from '../../Pricing/Pricing';

import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

export default function Home() {
  return (
    <>
      <Hero {...homeObjOne} />
      <Hero {...homeObjThree} />
      <Hero {...homeObjTwo} />
      <Pricing />
      <Hero {...homeObjFour} />
    </>
  );
}
