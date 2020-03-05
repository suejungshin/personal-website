import React from 'react';

const Project = ({ project }) => {

  return (<div className='project'>
    <h3>{project.title}</h3>
    <br></br>
    <img src={project.gif} height='200px'></img>
    <br></br>
    <div className='caption'>{project.techStack}</div>
    <br></br>
    <p>{project.description}</p>
    <a href={project.github}>Github repo</a>
  </div>)
}

export default Project;