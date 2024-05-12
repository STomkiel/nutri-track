import React from 'react';

interface PageTitleProps {
  text: string | React.JSX.Element;
}
const PageTitle = ({ text }: PageTitleProps) => {
  return (
    <div className="text-center">
      <p className="m-2 text-3xl font-bold">{text}</p>
    </div>
  );
};

export default PageTitle;
