import React from 'react';

const About = (props) => {

  return (
    <div className='container'>
      <h1>About me</h1>
      <div className='spacer'></div>
      <div className='row'>
        <div className='col-sm'>
          <h2>Suejung Shin</h2>
          <br></br>
          <h5>Full Stack Software Engineer</h5>
          <br></br>
          <h6>Javascript ES6+  |  Node.js  |  React.js  |  MongoDB  |  PostgreSQL  |  AWS EC2</h6>
        </div>
        <div className='col-sm'><img src='photo.png' height='200' width='175' className='photo'></img></div>
      </div>

      <div className='spacer'></div>
      <p>Hi! I'm Suejung (pronounced soo-JUHng) and I am a full-stack developer with background in Javascript, React.js, Node.js / Express, and SQL/NoSQL databases.</p>
      <p>I like to build things that let us be our best selves. I am really excited by how engineering can uplift the human spirit and enable efficient solutions that transform how we live our lives. </p>
      <p>In a former life (my past career as an environmental engineer), I worked across many stakeholder groups to develop compliance systems while meeting strict regulatory deadlines. I delivered results accurately, efficiently, but most importantly, while maintaining good relationships amongst the team and with interacting departments.</p>
      <p>Now, as a software engineer, I bring the perspective of the outside industry to managing projects to completion as well as the dogged spirit that drove me to take the career switch plunge with a thirst for learning more, creating more, and lifting those around me!</p>
      <p>When I'm not coding, I love escape rooms, board games, indoor rock climbing, swing dancing, ramen, and exploring San Francisco! Oh also, I love dogs and hope you're enjoying my website theme inspired as such!</p>

    </div>)

}

export default About;