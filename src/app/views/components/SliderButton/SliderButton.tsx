import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import classNames from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
}

export const SliderButton: FC<Props> = (props: Props) => {
  const { children, className, ...rest } = props;
  const label = typeof children === 'string' ? children : '';
  return (
    <button
      {...rest}
      aria-label={label}
      className={classNames(
        'items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:opacity-80 absolute top-1/2 -translate-y-1/2 hidden lg:flex fill-primary rounded-lg w-8 h-8 xl:w-12 xl:h-12 xl:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300',
        className,
      )}
    >
      <svg viewBox="0 0 20 20" className="w-4 h-4 xl:w-5 xl:h-5" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.947754 19.271L19.4893 10.0001L0.947754 0.729298L0.947754 19.271Z" fill="#A59DFF"></path>
      </svg>
      <span className="sr-only">{children}</span>
    </button>
  );
};
