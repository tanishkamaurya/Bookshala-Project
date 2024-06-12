import React, { useState, useEffect } from 'react';
import list from  "../../public/list.json"; 

function Mood() {
    const [mood, setMood] = useState('');
    const [moodBooks, setMoodBooks] = useState([]);

    useEffect(() => {
        const moodResults = list.filter(book =>
            book.mood.toLowerCase() === mood.toLowerCase()
        );
        setMoodBooks(moodResults);
    }, [mood]);

    return (
        <div className="fixed bottom-10 right-10">
            <button 
                onClick={() => document.getElementById('moodSelection').classList.toggle('hidden')} 
                className="px-4 py-2 bg-blue-500 text-white rounded-full">
                May We Suggest?
            </button>
            <div id="moodSelection" className="hidden mt-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">What's your mood?</label>
                <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter your mood"
                    onChange={(event) => setMood(event.target.value)}
                />
                {moodBooks.length > 0 && (
                    <ul className="mt-2 bg-white border rounded-md shadow-lg">
                        {moodBooks.map((book) => (
                            <li key={book.id} className="p-2 border-b last:border-none">
                                <a href={`/course/${book.id}`} className="flex items-center space-x-2">
                                    <img src={book.image} alt={book.name} className="w-8 h-8 rounded-full"/>
                                    <span className="text-green-600">{book.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Mood;
