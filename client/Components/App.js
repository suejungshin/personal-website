import React from 'react';
import Button from 'react-bootstrap/Button';
import Header from './Header.js';
import Home from './Home.js';
import Projects from './Projects.js';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      view: 'home'
    }
  }

  changeView(page) {
    this.setState({
      view: page
    })
  }

  renderView() {
    const view = this.state.view;

    if (view === 'projects') {
      return <Projects></Projects>
    } else if (view === 'home') {
      return <Home></Home>
    }
  }

  render() {
    return (<div>
      <Header></Header>
      <div>{this.renderView()}</div>
      </div>)
  }
}

export default App;