import { HTMLAttributes } from 'react';

export interface MenuLink {
  title: string;
  url: string;
}

export interface SliderItemProps extends HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  text: string;
}
