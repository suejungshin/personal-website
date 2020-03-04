import React from 'react';
import Button from 'react-bootstrap/Button';
import Header from './Header.js';
import Home from './Home.js';
import Projects from './Projects.js';
import Footer from './Footer.js';
import About from './About.js';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      view: 'home'
    }

    this.changeView = this.changeView.bind(this)
  }

  changeView(page) {
    this.setState({
      view: page
    })
  }


  render() {
    return (<div>
      <Header></Header>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Footer></Footer>
      </div>)
  }
}

export default App;