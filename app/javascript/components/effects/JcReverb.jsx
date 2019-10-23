import React from 'react'
import _ from 'lodash'
import ToggleSwitch from '../controls/ToggleSwitch'
import Knob from '../controls/Knob'

export default class JSCReverb extends React.Component {
  constructor(props) {
    super(props)

    _.bindAll(this, 'handlerFilter', 'handlePicker', 'handlerFilterKnob')
  }

  handlePicker(value) {
    this.props.handler('jscreverb', 'oversample', value)
  }

  handlerFilter(value) {
    this.props.subHandler('jscreverb', 'filter', 'type', value)
  }
  handlerFilterKnob(name, param, value) {
    this.props.subHandler(name, 'filter', param, value)
  }

  render() {
    let value = this.props.value
    return (
      <div className="filter jcReverb">
        <div className="row">
          <ToggleSwitch
            current={this.props.on}
            handleClick={this.props.toggleEffect}
            value="jcReverb"
          />
        </div>
        <div className="row">
          <Knob
            name="jcReverb"
            paramName="wet"
            min={1}
            max={100}
            increment={100}
            initialDeg={-45}
            overDeg={270}
            value={value.wet.value}
            handleValueChange={this.props.handler}
          />
        </div>
        <div className="row">
          <Knob
            name="jcReverb"
            paramName="roomSize"
            min={0}
            max={100}
            increment={100}
            initialDeg={-45}
            overDeg={270}
            value={value.roomSize.value}
            handleValueChange={this.props.handler}
          />
        </div>
        <div className="row"></div>
        <div className="left"></div>
        <div className="top"></div>
        <div className="right"></div>
        <div className="bottom"></div>
      </div>
    )
  }
}
