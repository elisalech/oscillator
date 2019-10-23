import _ from 'lodash'
import React from 'react'
import Tone from 'tone'

// import * as effects from '../../tunes/effects'
// import * as synths from '../../tunes/synths'

import Keyboard from '../controls/Keyboard'
import Pedalboard from '../effects/Pedalboard'
import Envelope from '../controls/Envelope'
import Knob from '../controls/Knob'
import ToggleView from '../controls/ToggleView'
import Slider from '../controls/Slider'

export default class KeySynth extends React.Component {
  constructor(props) {
    super(props)

    let keySynth = new Tone.Synth({
      oscillator: {
        type: 'sine'
      },
      envelope: {
        attack: 2,
        decay: 1,
        sustain: 0.4,
        release: 1
      }
    })

    let keyChorus = new Tone.Chorus(),
      keyFeedbackDelay = new Tone.FeedbackDelay(),
      keyJcReverb = new Tone.JCReverb(),
      keyDistortion = new Tone.Distortion(),
      keyVibrato = new Tone.Vibrato()

    let gain = new Tone.Gain(0.5)

    let channel = new Tone.Channel()

    let defaultWetValue = 0

    keySynth.chain(
      keyChorus,
      keyFeedbackDelay,
      keyJcReverb,
      keyDistortion,
      keyVibrato,
      gain,
      Tone.Master
    )

    this.state = {
      chorus: {
        name: 'chorus',
        effect: keyChorus,
        wet: defaultWetValue,
        on: false,
        frTemp: 0
      },
      feedbackDelay: {
        name: 'feedbackDelay',
        effect: keyFeedbackDelay,
        wet: defaultWetValue,
        on: false,
        frTemp: 0
      },
      jcReverb: {
        name: 'jcReverb',
        effect: keyJcReverb,
        wet: defaultWetValue,
        on: false,
        frTemp: 0
      },
      vibrato: {
        name: 'vibrato',
        effect: keyVibrato,
        wet: defaultWetValue,
        on: false,
        frTemp: 0
      },
      distortion: {
        name: 'distortion',
        effect: keyDistortion,
        wet: defaultWetValue,
        on: false,
        frTemp: 0
      },
      keySynth,
      channel,
      gain,
      currentNote: undefined
    }

    _.bindAll(
      this,
      'handleMouseDown',
      'handleMouseUp',
      'changeWaveType',
      'volumeChange',
      'toggleEffect',
      'handleValueChange',
      'handleSubValueChange',
      'handleEnvelope',
      'handleVolume'
    )
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
    let { keySynth } = this.state
    keySynth.oscillator.type = value

    this.setState({
      keySynth
    })
  }

  // ??? проверить
  volumeChange(value) {
    let { keySynth } = this.state
    keySynth.volume.value = value - 12
    console.log(keySynth.volume.value)

    this.setState({
      keySynth
    })
  }

  toggleEffect(effectName) {
    console.log(effectName)
    let { effect, wet, on, name } = this.state[effectName]

    effect.wet.value = on ? 0 : wet
    on = !on

    this.setState({
      [`${effectName}`]: { effect, wet, on, name }
    })
  }

  handleVolume(a, b, value) {
    let { gain } = this.state
    let volume = value
    console.log('old', gain.gain.value)
    console.log('comming vol', volume)
    gain.gain.value = volume
    console.log('new', gain.gain.value)
    this.setState({
      gain
    })
  }

  handleValueChange(effectName, param, value) {
    let { effect, wet, on, name } = this.state[effectName]

    if (effect[param] == 'wet') {
      effect[param].value = on == true ? value : 0
      wet = value
    } else {
      if (typeof effect[`${param}`] == 'object') {
        effect[`${param}`].value = value
      } else {
        effect[`${param}`] = value
      }
    }

    this.setState({
      [`${effectName}`]: {
        name,
        effect,
        wet,
        on
      }
    })
  }

  handleSubValueChange(effectName, param, inner, value) {
    let { effect, wet, on, name } = this.state[effectName]

    if (typeof effect[`${param}`][`${inner}`] == 'object') {
      effect[`${param}`][`${inner}`].value = value
    } else {
      effect[`${param}`][`${inner}`] = value
    }

    this.setState({
      [`${effectName}`]: {
        name,
        effect,
        wet,
        on
      }
    })
  }

  handleEnvelope(name, param, value) {
    let synth = this.state[`${name}`]
    let env = synth.envelope
    env[param] = value

    this.forceUpdate()
  }

  render() {
    let { keySynth, currentNote } = this.state
    return (
      <div className="KeySynth">
        <Keyboard
          valueVol={keySynth.volume.value}
          handleValueChange={this.volumeChange}
          currentNote={currentNote}
          typeValue={keySynth.oscillator.type}
          name="keySynth"
          changeWaveType={this.changeWaveType}
          handleMouseDown={this.handleMouseDown}
          handleMouseUp={this.handleMouseUp}
        />
        <ToggleView
          name="keySynth"
          handleViewChange={this.props.handleViewChange}
          viewSet={this.props.viewSet}
        />
        <h1>Volume</h1>
        <Slider
          name="vol"
          min="0"
          max="1"
          value={this.state.gain.gain.value}
          handleValueChange={this.handleVolume}
        />

        <Envelope
          handleEnvelope={this.handleEnvelope}
          env={this.state.keySynth.envelope}
          name="keySynth"
        />
      </div>
    )
  }
}
