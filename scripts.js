const keys = {
  'a': 'C',
  'w': 'C#',
  's': 'D',
  'e': 'D#',
  'd': 'E',
  'f': 'F',
  't': 'F#',
  'g': 'G',
  'y': 'G#',
  'h': 'A',
  'u': 'A#',
  'j': 'B',
  'k': 'C'
}

var synth
var now

var currentKey = ''
let octave = 4
let clicked = false

let k = document.getElementsByClassName('key')

let instruments = ['Synth', 'FMSynth', 'AMSynth', 'MetalSynth']
let currentSynth = 'Synth'


function setUp() {
  synth = new Tone.Synth().toDestination();
  now = Tone.now()
}

window.addEventListener('keydown', (event) => {
  if (event.repeat) { return }
  if (event.key !== undefined) {
    if (event.key === 'z') {
      downOctave()
    }

    if (event.key === 'x') {
      upOctave()
    }

    if (event.key in keys) {
      currentKey = event.key
    } else {
      return
    }
  }

  playNote()
})

window.addEventListener('keyup', (event) => {
  if (event.repeat) { return }
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  stopNote()
})

function playNote() {
  synth.triggerAttack(`${keys[currentKey]}${octave}`);
}

function stopNote() {
  synth.triggerRelease()
}

function nextSynth() {
  currentSynth = instruments[instruments.indexOf(currentSynth) + 1]

  if (currentSynth === 'Synth') {
    synth = new Tone.Synth().toDestination();
    document.getElementsByClassName('synth-name')[0].innerHTML = 'Synth'
  }

  if (currentSynth === 'FMSynth') {
    synth = new Tone.FMSynth().toDestination();
    document.getElementsByClassName('synth-name')[0].innerHTML = 'FMSynth'
  }

  if (currentSynth === 'AMSynth') {
    synth = new Tone.AMSynth().toDestination();
    document.getElementsByClassName('synth-name')[0].innerHTML = 'AMSynth'
  }

  if (currentSynth === 'MetalSynth') {
    synth = new Tone.MetalSynth().toDestination();
    document.getElementsByClassName('synth-name')[0].innerHTML = 'MetalSynth'
  }
}

function previousSynth() {
  currentSynth = instruments[instruments.indexOf(currentSynth) - 1]

  if (currentSynth === 'Synth') {
    synth = new Tone.Synth().toDestination();
    document.getElementsByClassName('synth-name')[0].innerHTML = 'Synth'
  }

  if (currentSynth === 'FMSynth') {
    synth = new Tone.FMSynth().toDestination();
    document.getElementsByClassName('synth-name')[0].innerHTML = 'FMSynth'
  }

  if (currentSynth === 'AMSynth') {
    synth = new Tone.AMSynth().toDestination();
    document.getElementsByClassName('synth-name')[0].innerHTML = 'AMSynth'
  }

  if (currentSynth === 'MetalSynth') {
    synth = new Tone.MetalSynth().toDestination();
    document.getElementsByClassName('synth-name')[0].innerHTML = 'MetalSynth'
  }
}

function addDelay() {
  if (clicked) {
    clicked = false
    console.log(synth)
  } else if (!clicked) {
    var feedbackDelay = new Tone.FeedbackDelay(0.125, 0.5).toDestination();
    synth.connect(feedbackDelay)
    clicked = true
    console.log(feedbackDelay)
  }

}

function upOctave() {
  octave += 1
  document.getElementsByClassName('oct-num')[0].innerHTML = octave
  console.log(octave)
}

function downOctave() {
  octave -= 1
  document.getElementsByClassName('oct-num')[0].innerHTML = octave
  console.log(octave)
}
