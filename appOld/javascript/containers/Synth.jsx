import _ from 'lodash'
import React from 'react'
import Tone from 'tone'

import * as effects from '../tunes/effects'
import * as synths from '../tunes/synths'

import Slider from '../components/Slider'
import BpmSlider from '../components/BpmSlider'
import ToggleSwitch from '../components/ToggleSwitch'
import PlaySwitch from '../components/PlaySwitch'
import Knob from '../components/Knob'
import Keyboard from '../components/controls/Keyboard'
import ButtonSet from '../components/controls/ButtonSet'

import tune1 from '../tunes/tune1'

import Chorus from '../components/effects/Chorus'
import Reverb from '../components/effects/Reverb'

export default class Synth extends React.Component {
  constructor(props) {
    super(props)

    let autoFilter = new Tone.AutoFilter({
      frequency: 1,
      type: 'sine',
      depth: 1,
      baseFrequency: 200,
      octaves: 2.6,
      filter: {
        type: 'lowpass',
        rolloff: -12,
        Q: 1
      }
    })

    let autoPanner = new Tone.AutoPanner({
      frequency: 1,
      type: 'sine',
      depth: 1
    })

    let autoWah = new Tone.AutoWah({
      baseFrequency: 100,
      octaves: 6,
      sensitivity: 0,
      Q: 2,
      gain: 2,
      follower: {
        attack: 0.3,
        release: 0.5
      }
    })

    let bitCrusher = new Tone.BitCrusher({
      bits: 4
    })

    let chebyshev = new Tone.Chebyshev({
      order: 50,
      oversample: 'none'
    })

    let chorus = new Tone.Chorus({
      frequency: 0,
      delayTime: 3.5,
      depth: 0.7,
      type: 'sine',
      spread: 180
    })

    let convolver = new Tone.Convolver({
      onload: Tone.noOp,
      normalize: true
    })

    let distortion = new Tone.Distortion({
      distortion: 0.4,
      oversample: 'none'
    })

    let effect = new Tone.Effect({
      wet: 1
    })

    var feedbackDelay = new Tone.FeedbackDelay({
      delayTime: '4n',
      maxDelay: 0.8
    })

    var feedbackEffect = new Tone.FeedbackEffect({
      feedback: 0.125
    })

    var freeverb = new Tone.Freeverb({
      roomSize: 0.7,
      dampening: 3000
    })

    var jcReverb = new Tone.JCReverb({
      roomSize: 0.5
    })

    let phaser = new Tone.Phaser({
      frequency: 0.5,
      octaves: 3,
      stages: 10,
      Q: 10,
      baseFrequency: 350
    })

    let pingPongDelay = new Tone.PingPongDelay({
      delayTime: 0.25,
      maxDelayTime: 1
    })

    let pitchShift = new Tone.PitchShift({
      pitch: 0,
      windowSize: 0.1,
      delayTime: 0,
      feedback: 0
    })

    let reverb = new Tone.Reverb({
      decay: 20,
      preDelay: 5
    })

    let stereoWidener = new Tone.StereoWidener({
      width: 0.5
    })

    let tremolo = new Tone.Tremolo({
      frequency: 10,
      type: 'sine',
      depth: 0.5,
      spread: 180
    })

    let vibrato = new Tone.Vibrato({
      maxDelay: 0.005,
      frequency: 5,
      depth: 0.1,
      type: 'sine'
    })

    autoFilter.wet.value = 0
    autoPanner.wet.value = 0
    autoWah.wet.value = 0
    bitCrusher.wet.value = 0
    chebyshev.wet.value = 0
    chorus.wet.value = 0
    convolver.wet.value = 0
    distortion.wet.value = 0
    effect.wet.value = 0
    feedbackDelay.wet.value = 0
    feedbackEffect.wet.value = 0
    freeverb.wet.value = 0
    jcReverb.wet.value = 0
    phaser.wet.value = 0
    pingPongDelay.wet.value = 0
    pitchShift.wet.value = 0
    reverb.wet.value = 0
    stereoWidener.wet.value = 0
    tremolo.wet.value = 0
    vibrato.wet.value = 0

    // SYNTH
    let loopSynth = synths.loopSynthTest

    loopSynth.chain(
      autoFilter,
      autoPanner,
      autoWah,
      bitCrusher,
      chebyshev,
      chorus,
      convolver,
      distortion,
      effect,
      feedbackDelay,
      feedbackEffect,
      freeverb,
      jcReverb,
      phaser,
      pingPongDelay,
      pitchShift,
      reverb,
      stereoWidener,
      tremolo,
      vibrato,
      Tone.Master
    )

    let loop1 = new Tone.Loop(time => {
      loopSynth.triggerAttackRelease('E2', '2n', time)
    }, '4n')

    let loop2 = new Tone.Loop(time => {
      loopSynth.triggerAttackRelease('B2', '4n', time)
    }, '8n')

    let loop3 = new Tone.Loop(time => {
      loopSynth.triggerAttackRelease('G#3', '4n', time)
    }, '16n')

    let loop4 = new Tone.Loop(time => {
      loopSynth.triggerAttackRelease('E3', '2n', time)
    }, '2n')

    //rh SYNTH
    let rhSynth = synths.rhSynthTest

    rhSynth.chain(
      autoFilter,
      autoPanner,
      autoWah,
      bitCrusher,
      chebyshev,
      chorus,
      convolver,
      distortion,
      effect,
      feedbackDelay,
      feedbackEffect,
      freeverb,
      jcReverb,
      phaser,
      pingPongDelay,
      pitchShift,
      reverb,
      stereoWidener,
      tremolo,
      vibrato,
      Tone.Master
    )

    let part = new Tone.Part(
      function(time, event) {
        rhSynth.triggerAttackRelease(event.note, event.dur, time)
      },
      [
        {
          time: '0:0:0',
          note: 'G#4',
          velocity: 1,
          dur: '4n'
        },
        {
          time: '0:1:0',
          note: 'B3',
          velocity: 1,
          dur: '4n'
        },
        {
          time: '0:2:0',
          note: 'E4',
          velocity: 1,
          dur: '4n'
        },
        {
          time: '0:3:0',
          note: 'B3',
          velocity: 0.1,
          dur: '4n'
        },
        {
          time: '1:0:0',
          note: 'G#4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '1:1:0',
          note: 'B3',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '1:2:0',
          note: 'E4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '1:3:0',
          note: 'B3',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '2:0:0',
          note: 'G#4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '2:1:0',
          note: 'B3',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '2:2:0',
          note: 'E4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '2:3:0',
          note: 'B3',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '3:0:0',
          note: 'C4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '3:1:0',
          note: 'D4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '3:2:0',
          note: 'E4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '3:3:0',
          note: 'F#4',
          velocity: 0.3,
          dur: '4n'
        }
      ]
    )

    part.loop = true
    part.loopEnd = '4m'

    let synthKeys = new Tone.Synth({
      oscillator: {
        type: 'triangle'
      },
      envelope: {
        attack: 2,
        decay: 1,
        sustain: 0.4,
        release: 1
      }
    })

    synthKeys.chain(chorus, Tone.Master)

    this.state = {
      autoFilter: {
        effect: autoFilter,
        wet: 0,
        on: false
      },
      autoPanner: {
        effect: autoPanner,
        wet: 0,
        on: false
      },
      autoWah: {
        effect: autoWah,
        wet: 0,
        on: false
      },
      bitCrusher: {
        effect: bitCrusher,
        wet: 0,
        on: false
      },
      chebyshev: {
        effect: chebyshev,
        wet: 0,
        on: false
      },
      chorus: {
        effect: chorus,
        wet: 0,
        on: false,
        frTemp: 0
      },
      convolver: {
        effect: convolver,
        wet: 0,
        on: false
      },
      distortion: {
        effect: distortion,
        wet: 0,
        on: false
      },
      effect: {
        effect: effect,
        wet: 0,
        on: false
      },
      feedbackDelay: {
        effect: feedbackDelay,
        wet: 0,
        on: false
      },
      feedbackEffect: {
        effect: feedbackEffect,
        wet: 0,
        on: false
      },
      freeverb: {
        effect: freeverb,
        wet: 0,
        on: false
      },
      jcReverb: {
        effect: jcReverb,
        wet: 0,
        on: false
      },
      phaser: {
        effect: phaser,
        wet: 0,
        on: false
      },
      pingPongDelay: {
        effect: pingPongDelay,
        wet: 0,
        on: false
      },
      pitchShift: {
        effect: pitchShift,
        wet: 0,
        on: false
      },
      reverb: {
        effect: reverb,
        wet: 0,
        on: false
      },
      stereoWidener: {
        effect: stereoWidener,
        wet: 0,
        on: false
      },
      tremolo: {
        effect: tremolo,
        wet: 0,
        on: false
      },
      vibrato: {
        effect: vibrato,
        wet: 0,
        on: false
      },
      // synth: {
      //   instrument: synth,
      //   on: false
      // },
      loop1: {
        loop: loop1,
        on: false
      },
      loop2: {
        loop: loop2,
        on: false
      },
      loop3: {
        loop: loop3,
        on: false
      },
      loop4: {
        loop: loop4,
        on: false
      },
      rhSynth: {
        instrument: rhSynth,
        on: false
      },
      part,
      tempo: 60,
      synthKeys,
      currentNote: null,
      loopSynth
    }

    _.bindAll(
      this,
      'toggleLoop',
      'toggleRh',
      'changeDecayReverb',
      'changePreDelayReverb',
      'changeEffectWetValue',
      'changeFrequencyChorus',
      'bpmChange',
      'toggleEffect',
      'handleMouseDown',
      'handleMouseUp',
      'changeWaveType',
      'volumeChange'
    )
  }

  bpmTest() {
    console.log(Tone.Transport.bpm.value)
  }

  bpmChange(value) {
    let { tempo } = this.state
    tempo = Math.round(value)
    Tone.Transport.bpm.value = tempo
    console.log('new bpm', Tone.Transport.bpm.value)

    this.setState({
      tempo
    })
  }
  // def SYNTH
  toggleLoop(loopName) {
    let { tempo } = this.state
    let { loop, on } = this.state[loopName]

    on ? loop.stop() : loop.start()

    // console.log(this.state.loopSynth.oscillator.type);

    this.setState({
      [`${loopName}`]: {
        loop: loop,
        on: !on
      }
    })

    Tone.Transport.bpm.value = tempo
    Tone.Transport.start()
    console.log('start bpm', Tone.Transport.bpm.value)
  }

  // rh Synth
  toggleRh() {
    let { rhSynth, part, tempo } = this.state
    let { on } = rhSynth

    on ? part.stop() : part.start()

    this.setState({
      rhSynth: {
        on: !on
      }
    })

    Tone.Transport.bpm.value = tempo
    Tone.Transport.start()
    console.log('start bpm', Tone.Transport.bpm.value)
  }

  changeEffectWetValue(effectName, value) {
    let { effect, wet, on } = this.state[effectName]
    effect.wet.value = on ? value : 0

    wet = value

    this.setState({
      [`${effectName}`]: { effect, wet, on }
    })
  }

  changeFrequencyChorus(value) {
    let { effect, frTemp, on } = this.state.chorus
    // effect.frequency.value = on ? value : 0;
    effect.frequency.value = value
    // frTemp = value;
    console.log(effect.frequency.value)

    this.setState({
      chorus: { effect, on }
    })
  }

  changeDecayReverb(value) {
    let { effect } = this.state.reverb
    effect.decay = value
    console.log(effect.decay)

    this.setState({
      reverb: { effect }
    })
  }

  changePreDelayReverb(value) {
    let { effect } = this.state.reverb
    effect.preDelay = value

    this.setState({
      reverb: { effect }
    })
  }

  toggleEffect(effectName) {
    let { effect, wet, on } = this.state[effectName]

    effect.wet.value = on ? 0 : wet
    on = !on

    this.setState({
      [`${effectName}`]: { effect, wet, on }
    })
  }

  handleMouseDown(note, octave) {
    let { synthKeys, currentNote } = this.state

    synthKeys.triggerAttack(`${note}${octave}`)
    currentNote = note

    console.log('Down')
    this.setState({
      synthKeys,
      currentNote
    })
  }

  handleMouseUp() {
    let { synthKeys, currentNote } = this.state

    synthKeys.triggerRelease()
    currentNote = null

    console.log('Up')

    this.setState({
      synthKeys,
      currentNote
    })
  }

  changeWaveType(synthName, value) {
    this.state[synthName].oscillator.type = value
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
    let synthSet = ['sine', 'triangle', 'square', 'sawtooth']
    let {
      tempo,
      chorus,
      rhSynth,
      loop1,
      loop2,
      loop3,
      loop4,
      synthKeys,
      currentNote
    } = this.state
    let { toggleEffect } = this
    return (
      <div>
        <div className="Loops">
          play RH
          <PlaySwitch
            name="play"
            value={rhSynth.on}
            handleToggleClick={this.toggleRh}
          />
          Toggle Loop 1
          <PlaySwitch
            name="play"
            value={loop1.on}
            handleToggleClick={() => this.toggleLoop('loop1')}
          />
          Toggle Loop 2
          <PlaySwitch
            name="play"
            value={loop2.on}
            handleToggleClick={() => this.toggleLoop('loop2')}
          />
          Toggle Loop 3
          <PlaySwitch
            name="play"
            value={loop3.on}
            handleToggleClick={() => this.toggleLoop('loop3')}
          />
          Toggle Loop 4
          <PlaySwitch
            name="play"
            value={loop4.on}
            handleToggleClick={() => this.toggleLoop('loop4')}
          />
        </div>
        <BpmSlider
          min="0"
          max="220"
          value={tempo}
          handleValueChange={this.bpmChange}
        />
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
        <Chorus
          {...this.state.chorus}
          changeEffectWetValue={this.changeEffectWetValue}
          changeFrequencyChorus={this.changeFrequencyChorus}
          toggleEffect={() => toggleEffect('chorus')}
        />
      </div>
    )
  }
}
