import React from 'react';
import Project from './Project.js';

const Projects = (props) => {

  return (<div className='container'>
      {props.map((project) => {
        return (<Project></Project>)
      })}
  </div>)

}

export default Projects;