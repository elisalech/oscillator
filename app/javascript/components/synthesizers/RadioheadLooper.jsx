import _ from 'lodash'
import React from 'react'
import Tone from 'tone'

import * as effects from '../../tunes/effects'
import * as synths from '../../tunes/synths'

import Pedalboard from '../effects/Pedalboard'
import EnvelopeAmb from '../controls/EnvelopeAmb'
import Knob from '../controls/Knob'
import Slider from '../controls/Slider'
import PlaySwitch from '../controls/PlaySwitch'

export default class RadioheadLooper extends React.Component {
  constructor(props) {
    super(props)

    let rhSynth = new Tone.PolySynth(1, Tone.Synth, {
      oscillator: {
        type: 'triangle8',
        count: 3,
        spread: 30,
        phase: 10,
        fadeIn: 4
      },
      envelope: {
        attack: 0.3,
        decay: 1,
        sustain: 1,
        release: 5,
        attackCurve: 'exponential'
      }
    })

    let part1 = new Tone.Part(
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

    part1.loop = true
    part1.loopEnd = '4m'

    let part2 = new Tone.Part(
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

    part2.loop = true
    part2.loopEnd = '4m'

    let part3 = new Tone.Part(
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

    part3.loop = true
    part3.loopEnd = '4m'

    let part4 = new Tone.Part(
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

    part4.loop = true
    part4.loopEnd = '4m'

    let part5 = new Tone.Part(
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

    part5.loop = true
    part5.loopEnd = '4m'

    let gain = new Tone.Gain(0.5)

    rhSynth.chain(gain, Tone.Master)

    this.state = {
      rhSynth,
      // rhSynth2,
      // rhSynth3,
      // rhSynth4,
      // rhSynth5,
      // rhSynth6,
      // rhSynth7,
      gain,
      part1: {
        part: part1,
        on: false
      },
      part2: {
        part: part2,
        on: false
      },
      part3: {
        part: part3,
        on: false
      },
      part4: {
        part: part4,
        on: false
      },
      part5: {
        part: part5,
        on: false
      }
    }

    _.bindAll(
      this,
      'handleVolume',
      'toggleRh1',
      'toggleRh2',
      'toggleRh3',
      'toggleRh4',
      'toggleRh5'
    )
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

  // LOOP

  toggleRh1() {
    let { part1 } = this.state
    let { on } = part1

    on ? part1.part.stop() : part1.part.start()

    this.setState({
      part1: {
        on: !on
      }
    })
    Tone.Transport.start()
  }

  toggleRh2() {
    let { part2 } = this.state
    let { on } = part2

    on ? part2.part.stop() : part2.part.start()

    this.setState({
      part2: {
        on: !on
      }
    })
    Tone.Transport.start()
  }

  toggleRh3() {
    let { part3 } = this.state
    let { on } = part3

    on ? part3.part.stop() : part3.part.start()

    this.setState({
      part3: {
        on: !on
      }
    })
    Tone.Transport.start()
  }

  toggleRh4() {
    let { part4 } = this.state
    let { on } = part4

    on ? part4.part.stop() : part4.part.start()

    this.setState({
      part4: {
        on: !on
      }
    })
    Tone.Transport.start()
  }

  toggleRh5() {
    let { part5 } = this.state
    let { on } = part5

    on ? part5.part.stop() : part5.part.start()

    this.setState({
      part5: {
        on: !on
      }
    })
    Tone.Transport.start()
  }

  render() {
    let { part1, part2, part3, part4, part5 } = this.state
    return (
      <div className="AmbientSynth">
        <div className="Rhs">
          Toggle Part 1
          <PlaySwitch
            name="play"
            value={part1.on}
            handleToggleClick={this.toggleRh1}
          />
          Toggle Part 2
          <PlaySwitch
            name="play"
            value={part2.on}
            handleToggleClick={this.toggleRh2}
          />
          Toggle Part 3
          <PlaySwitch
            name="play"
            value={part3.on}
            handleToggleClick={this.toggleRh3}
          />
          Toggle Part 4
          <PlaySwitch
            name="play"
            value={part4.on}
            handleToggleClick={this.toggleRh4}
          />
          Toggle Part 5
          <PlaySwitch
            name="play"
            value={part5.on}
            handleToggleClick={this.toggleRh5}
          />
        </div>
        <Slider
          name="vol"
          min="0"
          max="1"
          value={this.state.gain.gain.value}
          handleValueChange={this.handleVolume}
        />
      </div>
    )
  }
}
