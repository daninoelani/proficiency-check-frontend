import React, { Component } from 'react';
import Profile from './components/Profile';
import './App.css';

class App extends Component {
  state = {
    people: []
  }

  componentDidMount() {
    fetch(`http://localhost:4000`)
    .then(res => res.json())
    .then((data) => {
      this.setState({ people: data })
    })
    .catch(console.log)
  }


  render () {
    return (
      <div className="body text-center">
      <Profile people={this.state.people} />
      </div>
    );
  }
}

export default App;