import React from 'react';
import Link from 'next/link';
import NavButton from '../navButton/NavButton';
import Translation from '@/app/translation/Translation';

const Header = async () => {
  return (
    <div className={`bg-navbackground sticky top-0 z-50 shadow-md`}>
      <nav className="flex flex-wrap justify-between p-2">
        <div className="flex items-center justify-center">
          <Link href="/">
            <NavButton>
              <Translation id={'recipies'} namespace={'Navigation'} />
            </NavButton>
          </Link>
          <Link href="/meal">
            <NavButton>
              <Translation id={'meals'} namespace={'Navigation'} />
            </NavButton>
          </Link>
        </div>
        {false && (
          <div>
            <NavButton>
              <Translation id={'logout'} namespace={'Navigation'} />
            </NavButton>
          </div>
        )}
        <div>
          <Link href="/login">
            <NavButton>
              <Translation id={'login'} namespace={'Common'} />
            </NavButton>
          </Link>
          <Link href="/register">
            <NavButton>
              <Translation id={'register'} namespace={'Common'} />
            </NavButton>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
