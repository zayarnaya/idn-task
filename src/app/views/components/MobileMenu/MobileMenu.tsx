import { FC } from 'react';
import classNames from 'classnames';
import { StyledMenuLink } from '../StyledMenuLink/StyledMenuLink';
import { MenuLink } from '@/app/types';

interface Props {
  elements: MenuLink[];
  isOpen?: boolean;
}

export const MobileMenu: FC<Props> = (props: Props) => {
  const { elements, isOpen = false } = props;
  return (
    <section className="fixed left-0 top-16 bg-background w-screen overflow-hidden border p-4">
      <nav
        className={classNames(
          'flex flex-col gap-2 text-popover-foreground data-[state=open]:animate-openMenu data-[state=closed]:animate-closeMenu',
        )}
        data-state={isOpen ? 'open' : 'closed'}
        role="menu"
      >
        {elements.map(({ title, url }, idx) => (
          <StyledMenuLink className="text-base" key={`mobilenav#${url}${idx}`} href={url}>
            {title}
          </StyledMenuLink>
        ))}
        <div role="separator" aria-orientation="horizontal" className="-mx-1 my-1 h-px bg-muted"></div>
        <StyledMenuLink className="text-base" href="">
          Вход
        </StyledMenuLink>
      </nav>
    </section>
  );
};
