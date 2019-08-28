import React, { Component } from 'react'
import List from './components/list'




class App extends Component {

  constructor(props){
    super();
    this.state = {
      elements: ["Clean the house", "Learn react"]
    }
  }

  
  render() {
    return (
      <div>
        <List elements = {this.state.elements}></List>       
      </div>
    )
  }
}

export default App;
