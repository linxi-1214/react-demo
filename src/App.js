import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function SayHello(props) {
  return <p className="App-intro">Hello, {props.firstName} {props.lastName}</p>;
}

class Welcome extends Component {
    render() {
        return <p className="App-intro"> Welcome to React World! </p>;
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SayHello firstName="Wang" lastName="Xiaobing" />
        <Welcome/>
      </div>
    );
  }
}

export default App;
