import React from 'react';

const Contact = (props) => {

  return (<div>
    <div className='container'>
      <h1>Contact Info</h1>
      <br></br>
      <p>Thanks for checking out my site! Please say "Hello," I'd love to talk to you!</p>
      <br></br>
      <br></br>
      <h4><img src='email-icon.png' height='25px' width='28px'></img>&nbsp;&nbsp;Email</h4>
      <a href='mailto:suejung.shin@gmail.com'>suejung.shin@gmail.com</a>
      <br></br>
      <br></br>
      <br></br>
      <h4><img src='linkedin-icon.png' height='25px' width='28px'></img>&nbsp;&nbsp;LinkedIn</h4>
      <a href='https://www.linkedin.com/in/suejungshin'>linkedin.com/in/suejungshin</a>
      <br></br>
      <br></br>
      <br></br>
      <h4><img src='github-icon.png' height='25px' width='25px'></img>&nbsp;&nbsp;GitHub</h4>
      <a href='https://www.github.com/suejungshin'>github.com/suejungshin</a>
      <br></br>
    </div>
  </div>)
}

export default Contact;