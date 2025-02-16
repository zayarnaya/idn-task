import { ButtonHTMLAttributes, FC, useLayoutEffect, useState } from 'react';
import classNames from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  'data-id': string | number;
  delay?: number;
}

export const SliderDot: FC<Props> = (props: Props) => {
  const { active = false, 'data-id': id, onClick, delay = 3000 } = props;
  const [isActive, setIsActive] = useState(false);
  const style = {
    transitionProperty: 'opacity',
    transitionDuration: '500ms',
  };

  const styleActive = {
    transitionProperty: 'opacity, transform',
    transitionDuration: `500ms, ${delay}ms`,
    opacity: '1',
    left: '-100%',
    transform: 'translate3d(100%, 0px, 0px)',
  };

  useLayoutEffect(() => {
    setIsActive(active);
  }, [active]);

  return (
    <button
      type="button"
      className={classNames(
        'relative h-2 rounded-full bg-foreground/20 hover:bg-foreground/30 data-[state=active]:bg-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 overflow-hidden animate-in fade-in-0 zoom-in-95',
        active ? 'w-10' : 'w-2',
      )}
      aria-label="slide"
      data-id={`${id}`}
      onClick={onClick}
    >
      <div
        className="opacity-0 absolute w-full top-0 bottom-0 rounded-full bg-foreground ease-linear"
        style={isActive ? styleActive : style}
      ></div>
    </button>
  );
};
