import React, { Component } from 'react';
import Mousetrap from 'mousetrap';

class Konami extends Component {
  constructor() { // adding this since it is a child component
    super();
  }

  componentDidMount() {
    Mousetrap.bind([`1 2 3 4`, `up up down down left right left right b a`], this.popUp); //when user types this something will happen
  }

  componentWillUnmount() {
    Mousetrap.unbind([`1 2 3 4`, `up up down down left right left right b a`], this.popUp); // if i dont add this the function will cont. run 
  }

  popUp() {
    alert(`The Konami code happend!`);
  }

  render() {
    return (
      <div>Hello, {this.props.name}, this is Konami!</div>
    );
  }
}

export default Konami;
