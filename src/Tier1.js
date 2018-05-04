import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor() {
    super()
    const colors = this.newColors()
    this.state = {
      color: colors[0],
      childColor: colors[1],
      grandchildColor: colors[2]
    }
  }

  newColors = (number=3) => {
    const colors = [getRandomColor()]
    for (let i = 1; i < number; i++) {
      colors.push(getReducedColor(colors[colors.length - 1]))
    }
    return colors
  }

  handleClick = (e) => {

    const colors = this.newColors()
    this.setState({
      color: colors[0],
      childColor: colors[1],
      grandchildColor: colors[2]
    })
    console.log("handleClick")
  }

  handleChildClick = (e) => {
    e.stopPropagation();
    const colors = this.newColors(2)
    this.setState({
      childColor: colors[0],
      grandchildColor: colors[1]
    })
    console.log("handleClickChild")
  }

  handleGrandChildClick = (e) => {
    e.stopPropagation();
    const colors = this.newColors(1)
    this.setState({
      grandchildColor: colors[0],
    })
    console.log('grand')
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={this.handleClick} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 handleClick={this.handleChildClick} handleChildClick={this.handleGrandChildClick} color={this.state.childColor} childColor={this.state.grandchildColor} />
        <Tier2 handleClick={this.handleChildClick} handleChildClick={this.handleGrandChildClick} color={this.state.childColor} childColor={this.state.grandchildColor} />
      </div>
    )
  }
}
