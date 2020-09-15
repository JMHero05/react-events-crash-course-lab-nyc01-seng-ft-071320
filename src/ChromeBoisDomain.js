import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (e) => {
    let x = e.clientX
    let y = e.clientY
    drawChromeBoiAtCoords(x, y)
  }
  
  clickHandler = (e) => {
    toggleCycling()
  }

  keyPressHandler = (e) => {
    if (e.key === 'a'){
      resize('+')
    }
    if (e.key === 's'){
      resize('-')
    }
  }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={this.clickHandler}
        onKeyPress={this.keyPressHandler}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
