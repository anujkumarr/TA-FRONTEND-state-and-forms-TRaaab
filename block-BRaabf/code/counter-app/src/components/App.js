import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      step: 1,
    };
  }
  handleStep = (num) => {
    this.setState({
      step: num,
    });
  };

  handleInc = () => {
    this.setState({
      counter: this.state.counter + this.state.step,
    });
  };

  handleDec = () => {
    this.setState({
      counter: this.state.counter - this.state.step,
    });
  };
  handleRe = () => {
    this.setState({
      counter: 0,
    });
  };

  render() {
    return (
      <section>
        <h1>{this.state.counter}</h1>
        <h2>Steps</h2>
        <div>
          <button
            onClick={() => {
              this.handleStep(5);
            }}
          >
            5
          </button>
          <button
            onClick={() => {
              this.handleStep(10);
            }}
          >
            10
          </button>
          <button
            onClick={() => {
              this.handleStep(15);
            }}
          >
            15
          </button>
        </div>

        <div>
          <button onClick={this.handleInc}>Increment</button>
          <button onClick={this.handleDec}>Decrement</button>
          <button onClick={this.handleRe}>Reset</button>
        </div>
      </section>
    );
  }
}

export default App;