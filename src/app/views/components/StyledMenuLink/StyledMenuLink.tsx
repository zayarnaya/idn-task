import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import Link, { LinkProps } from 'next/link';

interface Props extends LinkProps {
  className?: string;
  children?: ReactNode;
}

export const StyledMenuLink: FC<Props> = (props: Props) => {
  const { children, className, href } = props;
  return (
    <Link
      href={href}
      className={classNames(
        'relative transition-all duration-300 hover:opacity-70 cursor-pointer text-nowrap',
        className,
      )}
    >
      {children}
    </Link>
  );
};
