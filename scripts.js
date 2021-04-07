screen.lockOrientation("landscape-primary");

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

var currentKey = ''
let octave = 4

window.addEventListener('keydown', (event) => {
  if (event.key !== undefined) {
    currentKey = event.key
  }
})

function playNote() {
  const synth = new Tone.Synth().toDestination();
  const now = Tone.now()

  synth.triggerAttack(`${keys[currentKey]}${octave}`, now);
  synth.triggerRelease(now + 1)
}

function upOctave() {
  octave += 1
}

function downOctave() {
  octave -= 1
}