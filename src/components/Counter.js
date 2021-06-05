import React, { Component } from "react";

export class counter extends Component {
    constructor(props) {
        super(props)
    console.log("constructor()")
        this.state = {
            count: 0,
            memoryId:null,
        }
    }
    
//   state = {
//     count: 0,
 
  componentDidMount () 
  {
           console.log( "componentDidMount()")
       
            this.setState({memoryId:setInterval(() => {
                this.increment()
               }, 1000)})
  }
  componentDidUpdate = () => {
      console.log("componentDidUpdate()")
  }


  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
    else 
        alert(`be careful`)   
  };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  componentWillMount =() => {
      console.log("componentWillMount()")
      clearInterval(this.state.memoryId)
  }

  render() 
  {
      console.log("render()")
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  } 
} 

export default counter;
