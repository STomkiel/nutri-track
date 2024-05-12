import React from 'react';

const NavButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={`mx-1 rounded border bg-primary px-4 py-2 font-semibold text-white hover:border-transparent hover:bg-secondary hover:text-white`}
    />
  );
};

export default NavButton;
