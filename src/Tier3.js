import React from 'react'

// import React, { Component } from 'react'
// import { getRandomColor, getReducedColor } from './randomColorGenerator.js'

const Tier3 = (props) => (
  <div className="tier3" onClick={props.handleClick} style={{backgroundColor: props.color, color: props.color}}></div>
)

export default Tier3
//
// export default class Tier3 extends Component {
//   // this component does not need to change (but feel free to change however you like!)
//   constructor(props) {
//     super(props)
//     this.state = {
//     }
//   }
//
//   newColors = (number=3) => {
//     const colors = [getRandomColor()]
//     for (let i = 1; i < number; i++) {
//       colors.push(getReducedColor(colors[colors.length - 1]))
//     }
//     return colors
//   }
//
//   handleChildClick2 = () => {
//     const colors = this.newColors(2)
//     this.setState({
//       childColor: colors[0],
//       grandchildColor: colors[1]
//     })
//   }
//   handleGrandChildClick2 = () => {
//     const colors = this.newColors(1)
//     this.setState({
//       grandchildColor: colors[0],
//     })
//   }
//   render() {
//     // hard coded color values have been added below, though they won't be
//     // present in our solution. What should they be replaced with?
//     return (
//       <div><Tier3 className="tier3" color={this.state.grandchildColor} />
//       </div>
//     )
//   }
// }
