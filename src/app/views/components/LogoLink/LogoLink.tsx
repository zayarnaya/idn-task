import { FC } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../assets/logo.svg';

export const LogoLink: FC = () => {
  return (
    <Link href="/" className="flex items-center ml-4 w-fit">
      <Image
        alt="STEMPS"
        loading="lazy"
        width="28"
        height="28"
        className="mr-2"
        style={{ color: 'transparent' }}
        src={logo}
      />
      <span className="hidden md:block">STEMPS</span>
    </Link>
  );
};
