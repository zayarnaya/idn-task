import { FC } from 'react';

export const EnterLink: FC = () => {
  return (
    <div className="hidden lg:flex gap-2 shrink-0 z-10 justify-self-end text-base items-center">
      <a className="flex gap-1 items-center">
        Вход
        <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 0C6.79086 0 5 1.79086 5 4V12.963H0V15.037H5V24C5 26.2091 6.79086 28 9 28H26C28.2091 28 30 26.2091 30 24V4C30 1.79086 28.2091 0 26 0H9ZM5 15.037L19.0365 15.037L13.6597 20.5481L15.3188 22L23 14L15.3188 6L13.6597 7.45185L19.0365 12.963L5 12.963V15.037Z"
            fill="black"
          />
        </svg>
      </a>
    </div>
  );
};
