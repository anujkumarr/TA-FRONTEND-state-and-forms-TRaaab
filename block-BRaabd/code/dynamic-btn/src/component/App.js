import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: '',
    };
  }

  handleChange = (elm) => {
    this.setState({
      img: elm,
    });
  };

  render() {
    let arr = ["basketball", "cricket", "laptop", "phone", "pubg", "tiger"];
    return (
      <>
        <img
          src={`./assets/${this.state.img}.jpg`}
          height="220px"
          alt={this.state.img}
        />
        {arr.map((elm) => {
          return (
            <center>
              <button
                className={this.state.img === elm ? 'active' : ''}
                onClick={() => this.handleChange(elm)}
              >
                {elm}
              </button>
            </center>
          );
        })}
      </>
    )
  }
};

export default App;

