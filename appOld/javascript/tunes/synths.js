import Tone from 'tone'

let keySynth = new Tone.Synth({
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

let loopSynthTest = new Tone.PolySynth(4, Tone.Synth, {
  oscillator: {
    type: 'sine'
  },
  envelope: {
    attack: 0.005,
    decay: 0.1,
    sustain: 0.3,
    release: 1
  }
})

let rhSynthTest = new Tone.PolySynth(1, Tone.Synth, {
  oscillator: {
    type: 'sine',
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

export { keySynth, loopSynthTest, rhSynthTest }
