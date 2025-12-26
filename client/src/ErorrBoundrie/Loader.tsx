import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-row gap-2">
      <div className="flex flex-col items-center gap-3">
        <img src="/Welcome.svg" alt="Loading" className='w-50 md:w-100' />
        <h1>نلتقي لنرتقي</h1>
      </div>
      <div className="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:.7s]" />
      <div className="w-4 h-4 rounded-full bg-secondary animate-bounce [animation-delay:.3s]" />
      <div className="w-4 h-4 rounded-full bg-third animate-bounce [animation-delay:.7s]" />
    </div>
  );
}

export default Loader;
