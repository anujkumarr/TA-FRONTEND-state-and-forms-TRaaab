import React from "react";
import data from "../data";


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       faq: '',
//       show: false,
//     };
//   }
//   arrow = (i) => {
//     this.setState({
//       faq: i,
//       show: !this.state.show,
//     });
//   };
//   render() {
//     return (
//       <>
//         <div className="container">
//           {data.map((elm, i) => (
//             <div className="elm">
//               {elm.Q}
//               <span onClick={() => this.arrow(i)} className="arrow">
//                 {this.state.show && i === this.state.faq ? (
//                   <i class="fas fa-hand-point-up"></i>
//                 ) : (
//                   <i className="fas fa-hand-point-down"></i>
//                 )}
//               </span>
//               <span>
//                 {this.state.show && i === this.state.faq ? elm.A : null}
//               </span>
//             </div>
//           ))}
//         </div>
//       </>
//     );
//   }
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
    };
  }
  arrow = (i) => {
    this.setState({
      activeIndex: this.state.activeIndex === i ? null : i
    });
  };
  render() {
    return (
      <>
        <div className="container">
          {data.map((faq, i) => (
            <div key={i} className="elm">
              <span onClick={() => this.arrow(i)} className="arrow">
                {faq.Q}
                {this.state.activeIndex === i ? (
                  <i className="fas fa-hand-point-up"></i>
                ) : (
                  <i className="fas fa-hand-point-down"></i>
                )}
              </span>
              {i === this.state.activeIndex && <p>{faq.A}</p>}
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default App;
