import React from 'react';

const About = (props) => {

  return (
    <div className='container'>
      <h1>About me</h1>
      <div className='spacer'></div>
      <div className='row'>
        <div className='col-sm'>
          <h2>Suejung Shin</h2>
          <p></p>
          <h5>Full Stack Software Engineer</h5>
          <h6>Javascript, Node.js, React.js, SQL/NoSQL</h6>
        </div>
        <div className='col-sm'><img src='photo.png' height='200' width='175' className='photo'></img></div>
      </div>

      <div className='spacer'></div>
      <p>Hi! I'm Suejung (pronounced soo JUHng) and I am a full-stack developer with background in Javascript, React.js, Node.js / Express, and SQL/NoSQL databases.

      My background before becoming a software engineer was in environmental regulatory compliance/consulting. I worked across many stakeholder groups to develop compliance systems while meeting strict regulatory deadlines.</p>

    </div>)

}

export default About;