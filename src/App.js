import React, { Component } from 'react'

export default class App extends Component {

  state = {
    count : '0' 
  }

  Handle=(digit)=>{
    const {count}=this.state
    this.setState({
      count:count==='0' ?String(digit):count+digit
    })
  }
  reset=()=>{
    const {count}=this.state
    this.setState({
      count: '0'
    })
  }
    add=()=>{
      const {count}=this.state
      if(count.indexof('.')===-1){
    this.setState({
          count:count+'.'
        
    })
        }
  }

  cal=()=>{
    const {count}=this.state
    this.setState({
      count:eval(count)
    })

  };
  render(){
    return (
      <div>
        <input value={this.state.count}/>
        <button onClick={()=>this.Handle(1)}>1</button>
        <button onClick={()=>this.Handle(2)}>2</button>
        <button onClick={()=>this.Handle(3)}>3</button>
        <button onClick={()=>this.Handle(4)}>4</button>
        <button onClick={()=>this.Handle(5)}>5</button>
        <button onClick={()=>this.Handle(6)}>6</button>
        <button onClick={()=>this.Handle(7)}>7</button>
        <button onClick={()=>this.Handle(8)}>8</button>
        <button onClick={()=>this.Handle(9)}>9</button>
        <button onClick={()=>this.Handle(0)}>0</button>
        <button onClick={()=>this.Handle('+')}>+</button>
        <button onClick={()=>this.Handle('-')}>-</button>
        <button onClick={()=>this.Handle('*')}>*</button>
        <button onClick={()=>this.Handle('/')}>/</button>
        <button onClick={()=>this.reset()}>c</button>
        <button onClick={()=>this.addDot()}>.</button>
        <button onClick={()=>this.cal()}>=</button>
      </div>
    )
  }
}


