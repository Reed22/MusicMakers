import React, { useState, useEffect } from 'react';
import Octave from './Octave';
import * as Tone from 'tone';
import SamplerContext from './SamplerContext'
import {sampler, leftOctaveKeys, rightOctaveKeys, scales} from './constants'

function Piano() {
  const [octave, setOctave] = useState(3);
  const [octaveLimitLow, setOctaveLimitLow] = useState(false)
  const [octaveLimitHigh, setOctaveLimitHigh] = useState(false)

  useEffect(() => {
    if(octave - 1 == 1)
      setOctaveLimitLow(true)
    else if(octave + 1 == 5)
      setOctaveLimitHigh(true)
    else {
      setOctaveLimitHigh(false)
      setOctaveLimitLow(false)
    }
  }, [octave])

  function incrementOctave(event){
    setOctave(prevOctave => prevOctave + 1)
  }

  function decrementOctave(event){
    setOctave(prevOctave => prevOctave - 1)
  }
  
  function playCMajor(scale_array){
    const now = Tone.now()
    let delay = 0
    scale_array.forEach(key => {
      sampler.triggerAttackRelease(key.note + (octave + key.octaveChange), "8n", now + delay)
      delay += 0.5
    })
  }

  return (
    <SamplerContext.Provider value={sampler}>
      <button onClick={() => playCMajor(scales.cMajor)}>Play C Major</button>
      <div className="piano">
        <button disabled={octaveLimitLow} type="button" className="btn btn-secondary" id="increment-octave-btn" onClick={decrementOctave}>&lt;</button>
        <Octave scales={scalePlay} keyInput={leftOctaveKeys} octave={octave - 1} />
        <Octave scales={scalePlay} keyInput={rightOctaveKeys} octave={octave} />
        <button disabled={octaveLimitHigh} type="button" className="btn btn-secondary" id="-1" onClick={incrementOctave}>&gt;</button>
      </div>
    </ SamplerContext.Provider>

  );
}

export default Piano;
