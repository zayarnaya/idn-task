'use client';
import { sliderItems } from './consts/sliderItems';
import { Header, Slider } from './views';
import { EmblaOptionsType } from 'embla-carousel';
import { AutoplayOptionsType } from 'embla-carousel-autoplay';

export default function Home() {
  const carouselOptions: EmblaOptionsType = {
    align: 'start',
    dragFree: true,
    loop: true,
  };
  const autoplayOptions: AutoplayOptionsType = {
    delay: 3000,
  };
  return (
    <>
      <Header />
      <Slider sliderItems={sliderItems} options={carouselOptions} autoplayOptions={autoplayOptions} />
    </>
  );
}
