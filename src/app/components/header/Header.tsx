import React from 'react';
import Link from 'next/link';
import NavButton from '../navButton/NavButton';

const Header = async () => {
  return (
    <div className={`bg-navbackground sticky top-0 z-50 shadow-md`}>
      <nav className="flex flex-wrap justify-between p-2">
        <div className="flex items-center justify-center">
          <Link href="/">
            <NavButton>Recipies</NavButton>
          </Link>
          <Link href="/meal">
            <NavButton>My meals</NavButton>
          </Link>
        </div>
        {false && (
          <div>
            <NavButton>Logout</NavButton>
          </div>
        )}
        <div>
          <Link href="/login">
            <NavButton>Login</NavButton>
          </Link>
          <Link href="/register">
            <NavButton>Register</NavButton>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
