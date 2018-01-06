import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Konami from './components/Konami';

class App extends Component {
  constructor() {
    super(); //always need
    this.state = { //sets the initial state
      activated: false,
      name: "User"
    };
    // this.toggleActivation = this.toggleActivation.bind(this);
  }

  toggleActivation = () => {
    if (this.state.activated === true) {
      this.setState({activated: false}); //sets the state
    } else {
      this.setState({activated: true});
    }
  }

  getName = () => {
    let name = document.getElementById("inputVal").value 
    this.setState({name});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
         {/* the onClick fn is how you call toggleActivation use */}
        <button onClick={this.toggleActivation}>Toggle Koname Code!</button>
        {this.state.activated ? <Konami name={this.state.name} /> : <div>Konami Code: Deactivated</div>}
        <div>
          <input type="text" id="inputVal" placeholder="Type your name..."/>
          <button onClick={this.getName}>submit</button>
        </div>
      </div>
    );
  }
}

export default App;
