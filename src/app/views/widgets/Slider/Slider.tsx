import { FC, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay, { AutoplayOptionsType } from 'embla-carousel-autoplay';
import { EmblaOptionsType } from 'embla-carousel';
import { SliderItemProps } from '@/app/types';
import { SliderItem } from '../../components/SliderItem/SliderItem';
import { SliderButtonNext, SliderButtonPrev } from '../../components';

interface Props {
  sliderItems: SliderItemProps[];
  options?: EmblaOptionsType;
  autoplayOptions?: AutoplayOptionsType;
}

export const Slider: FC<Props> = (props: Props) => {
  const { sliderItems, options = {}, autoplayOptions = {} } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay(autoplayOptions)]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="my-8 md:my-10 lg:my-14">
      <div className="flex flex-col group">
        <div className="relative h-auto w-full" role="region" aria-roledescription="carousel">
          <div ref={emblaRef} className="overflow-hidden h-full">
            <div className="flex ml-0 mr-4 relative">
              {sliderItems.map(({ image, title, text }, id) => (
                <SliderItem image={image} title={title} text={text} key={`slide#${id}`} data-id={`${id}`} />
              ))}
            </div>
          </div>
          <SliderButtonPrev onClick={scrollPrev} />
          <SliderButtonNext onClick={scrollNext} />
        </div>
      </div>
    </div>
  );
};
