import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class  App extends Component {
  state = {
    ninjas: [
      {name: 'Ryu', age: 30, belt: 'black', id: 1},
      {name: 'Yoshi', age: 20, belt: 'greeen', id: 2},
      {name: 'Crystal', age: 25, belt: 'pink', id: 3},

    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })

  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })
    this.setState({
      ninjas: ninjas
    })

  }
  componentDidMount() {
    // fires when the component first mounts to the DOM
    console.log('component mounted');
  }
  componentDidUpdate(prevProps, prevState) {
    // fires when we get a change of state or props
    console.log('component updated');
    console.log(prevProps, prevState);


  }
  render() {
      return (
        <div className="App">
          <h1>My First React App</h1>
          <p>Welcome!! :)</p>
          <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
          <AddNinja addNinja={this.addNinja} />
        </div>
  );
  }

}

export default App;
