import { ButtonHTMLAttributes, FC } from 'react';
import { SliderButton } from '../SliderButton/SliderButton';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const SliderButtonNext: FC<Props> = (props: Props) => {
  const { onClick } = props;
  return (
    <SliderButton className={'right-8'} onClick={onClick}>
      Следующий слайд
    </SliderButton>
  );
};
