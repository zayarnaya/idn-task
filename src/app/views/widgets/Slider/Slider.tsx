import { FC, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay, { AutoplayOptionsType } from 'embla-carousel-autoplay';
import { EmblaOptionsType } from 'embla-carousel';
import { SliderItemProps } from '@/app/types';
import { SliderItem } from '../../components/SliderItem/SliderItem';
import { SliderButtonNext, SliderButtonPrev, SliderDot } from '../../components';
import { useSliderDot } from '@/app/hooks';

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

  const { selectedIndex, scrollSnaps, onSliderDotClick } = useSliderDot(emblaApi);

  const handleDotClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const { id } = e.currentTarget.dataset;
      if (typeof id !== 'undefined') onSliderDotClick(+id);
    },
    [onSliderDotClick],
  );

  return (
    <div className="my-8 md:my-10 lg:my-14">
      <div className="flex flex-col group">
        <div className="relative h-auto w-full" role="region" aria-roledescription="carousel">
          <div className="flex gap-2 h-2 lg:hidden ml-4 mb-5 -mt-2">
            {sliderItems.map((_, id) => (
              <SliderDot
                data-id={id}
                key={`sliderdot#${id}`}
                active={id == selectedIndex}
                onClick={handleDotClick}
                delay={
                  autoplayOptions.delay
                    ? typeof autoplayOptions.delay === 'number'
                      ? autoplayOptions.delay
                      : emblaApi
                        ? autoplayOptions.delay(scrollSnaps, emblaApi)[id]
                        : 3000
                    : 3000
                }
              />
            ))}
          </div>
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
