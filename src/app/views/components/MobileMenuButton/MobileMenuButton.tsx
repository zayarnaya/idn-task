import { ButtonHTMLAttributes, FC } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen?: boolean;
  controls?: string;
}

export const MobileMenuButton: FC<Props> = (props: Props) => {
  const { isOpen = false, controls, ...rest } = props;
  return (
    <button
      {...rest}
      className="flex-col gap-1 items-center justify-center whitespace-nowrap rounded-md text-base font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:opacity-80 flex lg:hidden h-7 px-2 py-1 self-center place-self-end mr-4"
      aria-haspopup="menu"
      aria-expanded={isOpen ? true : false}
      data-state={isOpen ? 'open' : 'closed'}
      aria-controls={controls}
    >
      Меню
    </button>
  );
};
