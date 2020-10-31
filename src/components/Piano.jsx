import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';
import Octave from './Octave';

function Piano() {
  const [octave, setOctave] = useState(3);
  const [octaveLimitLow, setOctaveLimitLow] = useState(false)
  const [octaveLimitHigh, setOctaveLimitHigh] = useState(false)

  const leftOctaveKeys = ['Z', 'S', 'X', 'D', 'C', 'V', 'G', 'B', 'H', 'N', 'J', 'M']
  const rightOctaveKeys = ['W', '3', 'E', '4', 'R', 'T', '6', 'Y', '7', 'U', '8', 'I']

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
/*
  const synth = new Tone.Synth();
  synth.oscillator.type = 'sine';
  synth.toMaster();*/

  useEffect(() => {
    if(octave - 1 == 0)
      setOctaveLimitLow(true)
    else if(octave + 1 == 5)
      setOctaveLimitHigh(true)
    else {
      setOctaveLimitHigh(false)
      setOctaveLimitLow(false)
    }
  }, [octave])
/*
  function incrementOctave(event){
    setOctave(prevOctave => {
      if(prevOctave + 1 < 5)
        return prevOctave + 1
      else
        return prevOctave
    })
  }

  function decrementOctave(event){
    setOctave(prevOctave => {
      if(prevOctave - 1 > 0)
        return prevOctave - 1
      else
        return prevOctave
    })
  }*/
  function incrementOctave(event){
    setOctave(prevOctave => prevOctave + 1)
  }

  function decrementOctave(event){
    setOctave(prevOctave => prevOctave - 1)
  }

  return (
    <div>
      <div className="piano">
        <button disabled={octaveLimitLow} type="button" className="btn btn-secondary" id="increment-octave-btn" onClick={decrementOctave}>&lt;</button>
        <Octave keyInput={leftOctaveKeys} octave={octave - 1} sampler={sampler}/>
        <Octave keyInput={rightOctaveKeys} octave={octave} sampler={sampler}/>
        <button disabled={octaveLimitHigh} type="button" className="btn btn-secondary" id="-1" onClick={incrementOctave}>&gt;</button>
      </div>
    </div>

  );
}

export default Piano;
