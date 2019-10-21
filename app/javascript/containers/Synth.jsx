import React from 'react'
import Tone from 'tone'

import BpmSlider from '../components/controls/BpmSlider'
// import RadioheadLooper from '../components/synthesizers/RadioheadLooper'
// import AmbientSynth from '../components/synthesizers/AmbientSynth'
import KeySynth from '../components/synthesizers/KeySynth'

export default class Synth extends React.Component {
  constructor(props) {
    super(props)

    let bpmValue = 60

    this.state = {
      bpmValue
    }
  }

  render() {
    let { bpmValue } = this.state
    return (
      <div className="main-synth">
        <BpmSlider bpmValue={bpmValue} />
        // <RadioheadLooper bpmValue={bpmValue} />
        // <AmbientSynth bpmValue={bpmValue} />
        <KeySynth bpmValue={bpmValue} />
      </div>
    )
  }
}
