import Image from 'next/image';
import React from "react";
import ImageCarousel from '../hero-img-carousel';

const images = [
]


const Hero = () => {
  return (
    <div className="px-2 bg-white">
      <ImageCarousel />
    </div>
  );
};

export default Hero;