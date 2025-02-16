import image1 from '@/app/assets/sliderImages/1.svg';
import image2 from '@/app/assets/sliderImages/2.svg';
import image3 from '@/app/assets/sliderImages/3.svg';
import image4 from '@/app/assets/sliderImages/4.svg';
import image5 from '@/app/assets/sliderImages/5.svg';
import image6 from '@/app/assets/sliderImages/6.svg';

import { SliderItemProps } from '../types';

export const sliderItems: SliderItemProps[] = [
  {
    image: image1,
    title: 'Анализ текущего состояния карьеры',
    text: 'Проведем оценку вашего кейса и\u00A0создадим стратегию для\u00A0дальнейшего карьерного развития.',
  },
  {
    image: image2,
    title: 'Сопроводительные письма и\u00A0резюме ',
    text: 'Поможем сформировать профессиональный портфель, которые выделит вас среди других кандидатов.',
  },
  {
    image: image3,
    title: 'Поиск работы',
    text: 'Определим вашу карьерную цель и\u00A0разработаем стратегию для\u00A0трудоустройства. ',
  },
  {
    image: image4,
    title: 'Тренинг по\u00A0презентации личного бренда',
    text: 'Подсветим сильные стороны и\u00A0грамотно выстроим самопрезентацию.',
  },
  {
    image: image5,
    title: 'Подготовка к\u00A0собеседованию',
    text: 'Научим говорить о\u00A0себе кратко, ярко\u00A0и\u00A0профессионально.',
  },
  {
    image: image6,
    title: 'Рекомендация по базе STEMPS Career',
    text: 'Поможем встретиться соискателю и\u00A0работодателю.',
  },
];
