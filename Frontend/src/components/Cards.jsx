import React, { useState } from 'react';

function Cards({ item }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handlePdfClick = () => {
    window.open(item.pdf, '_blank', 'noopener noreferrer');
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className='mt-4 my-3 px-3'>
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 transition-transform duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure className="flex justify-center relative">
          <img src={item.image} alt="Book" className="rounded-t-lg" style={{ width: '200px', height: '300px' }} />
          <button
            onClick={toggleBookmark}
            className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-lg dark:bg-gray-700"
            aria-label={isBookmarked ? 'Unbookmark' : 'Bookmark'}
          >
            {isBookmarked ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-yellow-500" viewBox="0 0 16 16">
                <path d="M3.612 15.443C4.204 15.933 4.902 16 5.5 15.672l.5-.31.5.31c.598.328 1.296.261 1.888-.221l3.75-2.668a1 1 0 0 0 .362-.99l-.5-2.9 2.1-2.1a1 1 0 0 0-.606-1.707l-2.9-.42-1.3-2.621a1 1 0 0 0-1.798 0l-1.3 2.62-2.9.42a1 1 0 0 0-.606 1.707l2.1 2.1-.5 2.9a1 1 0 0 0 .362.99l3.75 2.668z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-gray-400" viewBox="0 0 16 16">
                <path d="M8 12.96l3.25 1.74-.62-3.63 2.63-2.56-3.64-.53L8 4.18 6.38 7.98l-3.64.53 2.63 2.56-.62 3.63L8 12.96zM8 1a1 1 0 0 1 .516.144l1.825 1.034L11.897 1.2A1 1 0 0 1 13.2 2.103l-.897 1.61L14 6.26a1 1 0 0 1-.12 1.315l-1.58 1.54.39 2.274a1 1 0 0 1-1.46 1.056l-2.052-1.1-2.051 1.1a1 1 0 0 1-1.46-1.056l.39-2.274-1.58-1.54A1 1 0 0 1 2 6.26l1.7-1.546-.896-1.61A1 1 0 0 1 2.8 1.2l1.556.884L5.176 1.14A1 1 0 0 1 6 1h2z"/>
              </svg>
            )}
          </button>
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary ml-2">{item.category}</div>
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">{item.title}</p>
          <div className="card-actions mt-4 flex justify-between items-center">
            <div className="badge badge-outline">${item.price}</div>
            {item.pdf && (
              <button
                onClick={handlePdfClick}
                className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors duration-200"
              >
                View PDF
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

