import { ButtonHTMLAttributes, FC } from 'react';
import { SliderButton } from '../SliderButton/SliderButton';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const SliderButtonPrev: FC<Props> = (props: Props) => {
  const { onClick } = props;
  return (
    <SliderButton className={'rotate-180 left-8'} onClick={onClick}>
      Предыдущий слайд
    </SliderButton>
  );
};
