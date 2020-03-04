import React from 'react';

const About = (props) => {

  return (
    <div className='container'>
      <h1>About me</h1>
      <div className='spacer'></div>
      <div className='row'>
        <div className='col-sm'><img src='photo.png' height='200' width='175'></img></div>
        <div className='col-sm'>
          <div className='row'><h2>Nice to meet you!</h2></div>
          <div className='row'><p>Welcome to my website. I put some stuff that I like here.</p></div>
        </div>
      </div>

      <div className='container'>
        <p>
          My name is Suejung (pronounced soo JUHng) and I am a full-stack developer with background in Javascript, React.js, Node.js / Express, and SQL/NoSQL databases.

          My background before becoming a software engineer was in environmental regulatory compliance/consulting. I worked across many stakeholder groups to develop compliance systems while meeting strict regulatory deadlines.
    </p>
        <img src='refinery.jpg' height='200px' width='300px'></img>
      </div>

    </div>)

}

export default About;