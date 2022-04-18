import React from 'react';
import data from '../data.json';
import Products from './Products';

class Sizes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: '',
      arr: [],
      index: '',
    };
  }
  handleChange = (elm, index) => {
    this.setState({
      show: index,
      index: index + 1,
      arr: [data.products.filter((f) => f.availableSizes.includes(elm))],
      size: elm,
    });
  };
  render() {
    let size = data.products.reduce((acc, cv) => {
      return (acc = acc.concat(cv.availableSizes));
    }, []);
    let btn = size.filter((f, i, a) => a.indexOf(f) === i);
    let products = this.state.index
      ? this.state.arr.flat()
      : data.products.map((e) => e);
    return (
      <>
        <div className="flex container">
          <aside className="flex-20">
            <div>
              <h1>Sizes :</h1>
              <div className="">
                {btn.map((elm, index) => (
                  <button
                    onClick={() => this.handleChange(elm, index)}
                    className={this.state.size === elm ? 'active' : 'btn'}
                  >
                    {elm}
                  </button>
                ))}
              </div>
            </div>
          </aside>
          <Products info={products} />
        </div>
      </>
    );
  }
}

export default Sizes;
