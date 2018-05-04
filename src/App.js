import React, { Component } from 'react'
import './App.css'
import Tier1 from './Tier1.js'

// shouldComponentUpdate(nextProps, nextState) {
//   return (this.props.color !== nextProps.color)
// }

// componentDidUpdate(prevProps, prevState) {
//  if (prevProps.color !== this.props.color) {
//    someChartLibrary.updateHeight(this.props.color);
//  }
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tier1 />
        <Tier1 />
      </div>
    )
  }
}

export default App
