import React from 'react';
import Link from 'next/link';
import Logout from '@/components/logout/Logout';
import { getServerSession } from 'next-auth';
import NavButton from '../navButton/NavButton';
import Translation from '@/translation/Translation';

const Header = async () => {
  const session = await getServerSession();

  return (
    <div className={`sticky top-0 z-50 bg-navbackground shadow-md`}>
      <nav className="flex flex-wrap justify-between p-2">
        <div className="flex items-center justify-center">
          <Link href="/">
            <NavButton>
              <Translation id={'recipies'} namespace={'Navigation'} />
            </NavButton>
          </Link>
          {session && (
            <Link href="/meal">
              <NavButton>
                <Translation id={'meals'} namespace={'Navigation'} />
              </NavButton>
            </Link>
          )}
        </div>
        {session ? (
          <div>
            <Logout />
          </div>
        ) : (
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
        )}
      </nav>
    </div>
  );
};

export default Header;
