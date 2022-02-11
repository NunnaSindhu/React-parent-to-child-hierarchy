import "./App.css";
import Child from "./Child";
import React, { Component } from "react";
// state and setstate examples

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       value: "test",
//       color:'pink',
//       id: 1,
//     };
//   }
//   changrHandler = (event) => {
//     this.setState({ value: event.target.value, key: event.target.id, color:event.target.value.length >6 ?"green":"yellow"},()=>{
//       console.log(this.state.value);
//     });

//   };
//   render() {
//     return (

//       <form style={{border: '3px solid red', padding: '20px'}}>
//         <input value={this.state.value} key={this.state.id} style={{backgroundColor:this.state.color,fontSize: "20px"}} onChange={this.changrHandler} />
//         </form>

//     );
//   }
// }

// passing props form parent to grand child /Getting data from grand child to parent
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      count: 0,
    };
  }
  getCount = (value) => {
    this.setState({ count: value });
  };
  render() {
    return (
      <div
        className="mt-4"
        style={{ border: "3px solid red", padding: "20px" }}
      >
        <h3>App Count:{this.state.count}</h3>
        <Child getCount={this.getCount} name={this.state.name} />
      </div>
    );
  }
}

export default App;
