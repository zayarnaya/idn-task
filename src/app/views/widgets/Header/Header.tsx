import { menuLinks } from '@/app/consts';
import { FC, useCallback, useState } from 'react';
import { LogoLink, MobileMenu, MobileMenuButton, StyledMenuLink } from '../../components';

export const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = menuLinks;
  const handleMenuToggle = useCallback(() => setIsMenuOpen(!isMenuOpen), [isMenuOpen]);

  //TODO проставить aria-controls
  return (
    <header>
      <nav className="h-16 text-base lg:text-lg grid grid-cols-4 items-center bg-background border-t border-b sticky top-0 bottom-0 overflow-hidden z-[50]">
        <LogoLink />
        <div className="col-span-3 flex gap-4 items-center">
          <ul className="hidden lg:flex gap-6 shrink min-w-0">
            {menuLinks.map(({ title, url }, idx) => (
              <li key={`nav#${url}${idx}`}>
                <StyledMenuLink href={url}>{title}</StyledMenuLink>
              </li>
            ))}
          </ul>
          <span className="mx-auto"></span>
          <MobileMenuButton isOpen={isMenuOpen} onClick={handleMenuToggle} controls={''} />
          {isMenuOpen && <MobileMenu elements={menuItems} isOpen={isMenuOpen} />}
        </div>
      </nav>
    </header>
  );
};
