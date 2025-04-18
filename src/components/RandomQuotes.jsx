import React, { useState, useEffect } from 'react';
import randomQuotes from 'random-quotes';

const RandomQuotes = () => {
  const [quote, setQuote] = useState({ body: '', author: '' });

  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(randomQuotes());
    }, 5000); // Change quote every 5 seconds (adjust as needed)

    // Clean up the interval to prevent memory leaks
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run only once on component mount

  return (
    <div className=' h-30 w-30 flex flex-col justify-center items-center'>
      <div className='bg-gray-900 rounded-lg p-8 shadow max-w-lg w-full'>
        <h1 className='text-4xl font-bold text-yellow-600 mb-6 '> Quote Of The Day</h1>
        <p className='text-xl font-medium text-yellow-400 mb-4'>{quote.body}</p>
        <p className='text-lg text-white-400 mb-4'>{quote.author}</p>
      </div>
    </div>
  );
}

export default RandomQuotes;
