import React from 'react';
import Project from './Project.js';
import ProjectRawData from './ProjectRawData.js';

const Projects = (props) => {

  return (<div className='container'>
    <h1>Projects</h1>
    <p>Here's some stuff I've made! Feel free to ask about them, I had a lot of fun with it!</p>
    <br></br>
    <div className='proj-container'>
      {ProjectRawData.map((project) => {
        return (<Project project={project} key={project.id}></Project>)
      })}
    </div>
    <br></br>
    <br></br>
    <h5>...plus so much more on <a href='https://github.com/suejungshin'>Github!</a></h5>
  </div>)

}

export default Projects;