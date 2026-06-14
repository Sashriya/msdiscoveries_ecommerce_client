import React from 'react';

const Loader = ({ fullScreen = true, size = 'md', text = 'Loading...' }) => {
  const sizes = { sm: 'h-8 w-8', md: 'h-12 w-12', lg: 'h-16 w-16', xl: 'h-24 w-24' };
  const spinner = <div className="flex flex-col items-center justify-center"><></>{text && <p className="mt-4 text-gray-600 font-light">{text}</p>}</div>;
  if (fullScreen) return <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">{spinner}</div>;
  return spinner;
};

export default Loader;
