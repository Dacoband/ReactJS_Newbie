import React, { Component } from 'react';
import './MyComponent.css';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    const Up = () => {
      this.setState({ count: this.state.count + 10 });
    };
    const Down = () => {
      this.setState({ count: this.state.count - 10 });
    };
    return (
      <div class='Ti'>
        <h2>Số lượng: {this.state.count}</h2> <br/>
        <div class='button'>
        <button onClick={Up} class="buttonUp">Tăng</button>
        <button onClick={Down} class='buttonDown'>Decrement</button>
        </div>
      </div>
      
    );
  }
}

export default MyComponent;