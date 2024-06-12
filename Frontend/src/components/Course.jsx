import React from 'react';
import Cards from './Cards';
import list from  "../../public/list.json";
import {Link} from "react-router-dom";

function Course() {
  return (
    <>
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
          Unlock Infinite Stories at {" "}
            <span className="text-pink-500"> Unmatched Prices</span>
          </h1>
          <p className='mt-12'>
          Bookshala is a vibrant website offering an extensive library of online books at unbeatable prices. Dive into a world of fiction, non-fiction, and academic texts, all available at a fraction of the cost. By partnering with top publishers and using innovative digital distribution, Bookshala makes reading affordable and accessible for everyone. Discover your next great read with Bookshala, where variety meets value.
          </p>
        <Link to ="/">
          <button className=' mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Home</button>
        </Link>
     </div>
     <div className='mt-12 grid rid-cols-1 md:grid-cols-4'>
        {
            list.map((item)=>(
                <Cards key={item.id} item={item}/>
            ))
        }
     </div>
    </div>
    </>
  );
}

export default Course;