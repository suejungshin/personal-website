import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from './Navbar.js';
import Home from './Home.js';
import Projects from './Projects.js';
import Footer from './Footer.js';
import About from './About.js';
import Contact from './Contact.js'

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

  renderView() {
    const view = this.state.view;
    if (view === 'home') {
      return <Home></Home>
    } else if (view === 'about') {
      return <About></About>
    } else if (view === 'projects') {
      return <Projects></Projects>
    } else if (view === 'contact') {
      return <Contact></Contact>
    }
  }

  render() {
    return (<div>
      <Navbar changeView={this.changeView}></Navbar>
      {this.renderView()}
      <Footer></Footer>
    </div>)
  }
}

export default App;