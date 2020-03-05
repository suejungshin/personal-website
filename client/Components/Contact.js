import React from 'react';

const Contact = (props) => {

  return (<div>
    <div className='container'>
      <h1>Contact Info</h1>
      <br></br>
      <br></br>
      <h4><img src='email.png' height='25px' width='28px'></img>&nbsp;&nbsp;Email</h4>
      <a href='mailto:suejung.shin@gmail.com'>suejung.shin@gmail.com</a>
      <br></br>
      <br></br>
      <br></br>
      <h4><img src='LI.png' height='25px' width='28px'></img>&nbsp;&nbsp;LinkedIn</h4>
      <a href='https://www.linkedin.com/in/suejungshin'>linkedin.com/in/suejungshin</a>
      <br></br>
      <br></br>
      <br></br>
      <h4><img src='GitHub.png' height='25px' width='25px'></img>&nbsp;&nbsp;GitHub</h4>
      <a href='https://www.github.com/suejungshin'>github.com/suejungshin</a>
    </div>
  </div>)
}

export default Contact;