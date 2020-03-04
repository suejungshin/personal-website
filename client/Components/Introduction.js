import React from 'react';

const Introduction = (props) => {

  return (<div className='jumbotron'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
          <img src='photo.png' height='200' width='175'></img>
        </div>
        <div className='col-md-4'>
          <h1>Hi, nice to meet you! I'm Suejung</h1>
          <p>Welcome to my website. I put some stuff that I like here.</p>
        </div>
      </div>
    </div>
  </div>)
}

export default Introduction;