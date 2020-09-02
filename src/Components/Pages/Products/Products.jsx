import React from 'react';
// components
import Hero from '../../Hero/Hero';
import Pricing from '../../Pricing/Pricing';
import { homeObjOne, homeObjThree } from './Data';

export default function Data() {
  return (
    <>
      <Pricing />
      <Hero {...homeObjOne} />
      <Hero {...homeObjThree} />
    </>
  );
}
