import React, { Component } from "react";

class Class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };

    this.handleIncrease = this.handleIncrease.bind(this);
  }
  handleIncrease() {
    this.setState({
      number: this.state.number + 1,
    });
  }

  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1,
    });
  };
  render() {
    return (
      <div>
        <hr />
        <h1>Counter</h1>
        <h2>{this.state.number}</h2>
        <button onClick={this.handleIncrease}>increase</button>
        <button onClick={this.handleDecrease}>decrease</button>
      </div>
    );
  }
}

export default Class;
