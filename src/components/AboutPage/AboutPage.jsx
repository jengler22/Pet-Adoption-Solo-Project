import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>Special Thanks:</p>
        <ul>
            Prime Academy. </ul>
            <ul>Instructor: Chris Black.</ul>
            <ul>Code Coach: Marc McCarthy.</ul>
            <ul> Part-time office hours team.</ul>
            <ul></ul>
            <br />
            Techologies Used:
            <ul>React</ul>
            <ul>Node.js</ul>
            <ul>Postgres</ul>
            <ul>Material U/I</ul>
            <br />
            Future Features:
            <ul>Search Bar for better usability </ul>
            <ul>Image upload for lost and found list.</ul>
        
         
      </div>
    </div>
  );
}

export default AboutPage;
