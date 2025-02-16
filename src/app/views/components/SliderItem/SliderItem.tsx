import { FC } from 'react';

import Image from 'next/image';
import { SliderItemProps } from '@/app/types';

interface Props extends SliderItemProps {
  'data-id': string;
}

export const SliderItem: FC<Props> = (props: Props) => {
  const { image, title, text, 'data-id': id } = props;

  return (
    <div
      role="group"
      aria-roledescription="slide"
      className="min-w-0 shrink-0 grow-0 basis-full flex md:max-w-[calc(50vw-1rem)] lg:max-w-[calc(25vw-1rem)] pr-0 pl-4 select-none"
      data-id={id}
      id={`slide#${id}`}
    >
      <div className="p-4 md:p-6 min-h-52 md:min-h-64 w-full rounded-lg bg-card cursor-default lg:hover:bg-primary/50 group/card transition-colors duration-300 overflow-hidden">
        <div className="flex flex-col justify-between h-full fade-in-0 zoom-in-95 duration-300">
          <div className="flex items-center gap-4 mb-6">
            <Image
              alt=""
              loading="lazy"
              width="80"
              height="80"
              className="max-w-16 md:max-w-20 max-h-16 md:max-h-20 aspect-square object-center object-contain"
              src={image}
              style={{ color: 'transparent' }}
            />

            <p className="lg:hidden text-2lg xl:text-2xl max-xl::text-4xl">{title}</p>
          </div>
          <div>
            <p className="hidden lg:block text-2lg xl:text-2xl max-xl::text-4xl bg-red">{title}</p>
            <p className="lg:hidden md:text-lg xl:text-xl mt-3">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
