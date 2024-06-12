import React from 'react';
import RandomQuotes from './RandomQuotes';


function About() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-16">
        <div className="items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            Empowering Minds, Igniting Curiosity: Explore the Boundless World of {" "}
            <span className="text-pink-500"> Learning with BookShala </span>
          </h1>
          <ul className="list-style-type:square mt-6">
            <li>
              Dive into a world of boundless knowledge at BookShala, where readers and writers unite to explore the wonders of literature and learning.
              <br/>
              <br/>
            </li>
            <li>
              For avid readers, BookShala offers a treasure trove of books and courses from top schools, all at minimal costs, making quality education accessible to everyone.
              <br/>
              <br/>
            </li>
            <li>
              Writers, unleash your creativity and publish your masterpieces on BookShala. Receive recognition and compensation directly from your readers, saving you the hassle of traditional publishing and printing costs.
              <br/>
              <br/>
            </li>
            <li>
              "Read together, chat together! With BookShala, enjoy synchronized reading sessions and lively conversations with friends. Dive into books while staying connected and engaged like never before. Join the reading revolution today!"
              <br/>
              <br/>
            </li>
            <li>
              Connect directly with your favorite authors through BookShala's exclusive Meet & Greet feature. Immerse yourself in insightful discussions, gain unique perspectives, and be part of the vibrant literary community. Don't miss the chance to experience the magic of storytelling firsthand!
              <br/>
              <br/>
            </li>
            <li>
              But that's not all! BookShala isn't just for literature lovers. Explore our range of professional courses, designed to help you enhance your skills and advance your career.
              <br/>
              <br/>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10">
        <RandomQuotes />
        <br/>
        <br/>
        <img
  src="../public/img.jpg"
  className="h-50 w-60 mx-auto" 
  style={{ display: 'block' }}
  alt="Description of the image"
/>

      </div>
      <br/>
    </>
  )
}

export default About;
