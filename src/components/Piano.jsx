import React, { useState } from 'react';
import * as Tone from 'tone';
import Key from './Key';
import OctaveCtrl from './OctaveCtrl';

function Piano() {
  // Start at third octave
  const [octave, setOctave] = useState(3);

  // Sound samples for piano. May need to set as a buffer with Tone buffer
  const sampler = new Tone.Sampler({
    urls: {
      A0: 'A0.mp3',
      C1: 'C1.mp3',
      'D#1': 'Ds1.mp3',
      'F#1': 'Fs1.mp3',
      A1: 'A1.mp3',
      C2: 'C2.mp3',
      'D#2': 'Ds2.mp3',
      'F#2': 'Fs2.mp3',
      A2: 'A2.mp3',
      C3: 'C3.mp3',
      'D#3': 'Ds3.mp3',
      'F#3': 'Fs3.mp3',
      A3: 'A3.mp3',
      C4: 'C4.mp3',
      'D#4': 'Ds4.mp3',
      'F#4': 'Fs4.mp3',
      A4: 'A4.mp3',
      C5: 'C5.mp3',
      'D#5': 'Ds5.mp3',
      'F#5': 'Fs5.mp3',
      A5: 'A5.mp3',
      C6: 'C6.mp3',
      'D#6': 'Ds6.mp3',
      'F#6': 'Fs6.mp3',
      A6: 'A6.mp3',
      C7: 'C7.mp3',
      'D#7': 'Ds7.mp3',
      'F#7': 'Fs7.mp3',
      A7: 'A7.mp3',
      C8: 'C8.mp3',
    },
    release: 1,
    baseUrl: 'https://tonejs.github.io/audio/salamander/',
  }).toDestination();

  const synth = new Tone.Synth();
  synth.oscillator.type = 'sine';
  synth.toMaster();

  function changeOctave(event){
    setOctave(prevState => {
      // If button pressed was specific octave
      if(event.target.id != '+1' && event.target.id != '-1')
        return event.target.id
      
      // If button was a decrease or increase from current value. Valid Octave (1 - 4)
      else if(prevState + parseInt(event.target.id) >= 1 && prevState + parseInt(event.target.id) <= 4)
          return prevState + parseInt(event.target.id)
      
      else return prevState
      //if(prevState + parseInt(event.target.id) < 1)
    })
  }

  return (
    <div>
      <OctaveCtrl handleChangeOctave={changeOctave} octave={octave} />

      <div className="piano">
        <Key
          keyChar="S"
          keyCode="83"
          octave={octave}
          audio={sampler}
          dataNote="C"
          type="key white"
        />
        <Key
          keyChar="E"
          keyCode="69"
          octave={octave}
          audio={sampler}
          dataNote="Db"
          type="key black"
        />
        <Key
          keyChar="D"
          keyCode="68"
          octave={octave}
          audio={sampler}
          dataNote="D"
          type="key white"
        />
        <Key
          keyChar="R"
          keyCode="82"
          octave={octave}
          audio={sampler}
          dataNote="E"
          type="key black"
        />
        <Key
          keyChar="F"
          keyCode="70"
          octave={octave}
          audio={sampler}
          dataNote="Eb"
          type="key white"
        />
        <Key
          keyChar="G"
          keyCode="71"
          octave={octave}
          audio={sampler}
          dataNote="F"
          type="key white"
        />
        <Key
          keyChar="Y"
          keyCode="89"
          octave={octave}
          audio={sampler}
          dataNote="Gb"
          type="key black"
        />
        <Key
          keyChar="H"
          keyCode="72"
          octave={octave}
          audio={sampler}
          dataNote="G"
          type="key white"
        />
        <Key
          keyChar="U"
          keyCode="85"
          octave={octave}
          audio={sampler}
          dataNote="Ab"
          type="key black"
        />
        <Key
          keyChar="J"
          keyCode="74"
          octave={octave}
          audio={sampler}
          dataNote="A"
          type="key white"
        />
        <Key
          keyChar="I"
          keyCode="73"
          octave={octave}
          audio={sampler}
          dataNote="Bb"
          type="key black"
        />
        <Key
          keyChar="K"
          keyCode="75"
          octave={octave}
          audio={sampler}
          dataNote="B"
          type="key white"
        />
      </div>
    </div>
  );
}

export default Piano;
