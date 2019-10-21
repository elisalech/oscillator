import React from 'react'
import Tone from 'tone'

import * as effects from '..../tunes/effects'
import * as synths from '..../tunes/synths'

import Keyboard from '../controls/Keyboard'

export default class KeySynth extends React.Component {
  constructor(props) {
    super(props)

    let keyChorus = effects.chorus(),
      keyFeedbackDelay = effects.feedbackDelay(),
      keyJcReverb = effects.jcReverb(),
      keyTremolo = effects.tremolo()

    let defaultWetValue = 0

    let keySynth = synths.keySynth
    keySynth.chain(
      keyChorus,
      keyFeedbackDelay,
      keyJcReverb,
      keyTremolo,
      Tone.Master
    )

    this.state = {
      chorus: {
        effect: keyChorus,
        wet: defaultWetValue,
        on: false,
        frTemp: 0
      },
      feedbackDelay: {
        effect: keyFeedbackDelay,
        wet: defaultWetValue,
        on: false,
        frTemp: 0
      },
      jcReverb: {
        effect: keyJcReverb,
        wet: defaultWetValue,
        on: false,
        frTemp: 0
      },
      tremolo: {
        effect: keyTremolo,
        wet: defaultWetValue,
        on: false,
        frTemp: 0
      },
      keySynth,
      currentNote: undefined
    }
  }

  handleMouseDown(note, octave) {
    let { keySynth, currentNote } = this.state

    keySynth.triggerAttack(`${note}${octave}`)
    currentNote = note

    console.log('Down')
    this.setState({
      keySynth,
      currentNote
    })
  }

  handleMouseUp() {
    let { keySynth, currentNote } = this.state

    keySynth.triggerRelease()
    currentNote = undefined

    console.log('Up')

    this.setState({
      keySynth,
      currentNote
    })
  }

  changeWaveType(value) {
    this.state.keySynth.oscillator.type = value
  }

  volumeChange(synthName, value) {
    synthName = this.state[synthName]
    console.log(value)
    synthName.volume.value = value - 50
    console.log(synthName.volume.value)

    this.setState({
      synthName
    })
  }

  render() {
    let { keyChorus } = this.state
    return (
      <div>
        <Keyboard
          min="-36"
          max="+24"
          valueVol={synthKeys.volume.value}
          handleValueChange={this.volumeChange}
          currentNote={currentNote}
          typeValue={synthKeys.oscillator.type}
          name="synthKeys"
          changeWaveType={this.changeWaveType}
          handleMouseDown={this.handleMouseDown}
          handleMouseUp={this.handleMouseUp}
        />
      </div>
    )
  }
}
