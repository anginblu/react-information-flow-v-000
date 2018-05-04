import React from 'react'

// import React, { Component } from 'react'
// import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'

const Tier2 = (props) => (
  <div className="tier2" onClick={props.handleClick} style={{backgroundColor: props.color, color: props.color}}>
    <Tier3 handleClick={props.handleChildClick} color={props.childColor} />
    <Tier3 handleClick={props.handleChildClick} color={props.childColor} />
  </div>
)

export default Tier2

//
// export default class Tier2 extends Component {
//
//   constructor(props) {
//     super(props)
//     this.state = {
//       childColor: getReducedColor(this.props.color),
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
//       <div className="tier2" onClick={this.handleChildClick2} style={{backgroundColor: this.state.childColor, color: this.state.childColor}}>
//         <Tier3 className="tier3" color={this.state.grandchildColor} />
//         <Tier3 className="tier3" color={this.state.grandchildColor} />
//       </div>
//     )
//   }
// }
