import React from 'react';

const NavButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={`bg-primary hover:bg-secondary mx-1 rounded border px-4 py-2 font-semibold text-white hover:border-transparent hover:text-white`}
    />
  );
};

export default NavButton;
