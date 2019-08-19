import React, { Component } from 'react';
import Profile from './components/Profile';
import './App.css';

class App extends Component {

  componentDidMount() {
    fetch(`https://tranquil-tundra-90977.herokuapp.com/`)
    .then(res => res.json())
    .then((data) => {
      this.setState({ people: data })
    })
    .catch(console.log)
  }


  render () {
    return (
      <div className="body text-center">
      <Profile />
      </div>
    );
  }
}

export default App;