import React from 'react'
import Tone from 'tone'

import BpmSlider from '../components/controls/BpmSlider'
// import RadioheadLooper from '../components/synthesizers/RadioheadLooper'
// import AmbientSynth from '../components/synthesizers/AmbientSynth'
import KeySynth from '../components/synthesizers/KeySynth'

export default class Synth extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bpm: 120,
      viewSet: 'keySynth'
    }

    this.bpmChange = this.bpmChange.bind(this)
    this.handleViewChange = this.handleViewChange.bind(this)
  }

  bpmChange(value) {
    let { bpm } = this.state
    bpm = Math.round(value)
    Tone.Transport.bpm.value = bpm
    console.log('new bpm', Tone.Transport.bpm.value)

    this.setState({
      bpm
    })
  }

  handleViewChange(value) {
    this.state.viewSet = value
  }

  render() {
    let { bpm, viewSet } = this.state
    return (
      <div className="main-synth">
        <BpmSlider
          min="0"
          max="220"
          value={bpm}
          handleValueChange={this.bpmChange}
        />
        <KeySynth handleViewChange={this.handleViewChange} viewSet={viewSet} />
      </div>
    )
  }
}
