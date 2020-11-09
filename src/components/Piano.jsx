import React, { useState, useEffect } from 'react';
import Octave from './Octave';
import * as Tone from 'tone';
import SamplerContext from './SamplerContext'
import {sampler, leftOctaveKeys, rightOctaveKeys, scales} from './constants'

function Piano() {
  const [octave, setOctave] = useState(3);
  const [octaveLimitLow, setOctaveLimitLow] = useState(false)
  const [octaveLimitHigh, setOctaveLimitHigh] = useState(false)
  const [scale, setScale] = useState(null)

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
  
  function playScale(scale_array){
    setScale(scale_array)
  }

  return (
    <SamplerContext.Provider value={sampler}>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button class="btn btn-secondary" onClick={() => playScale(scales.cMajor)}>C Major</button>
        <button class="btn btn-secondary" onClick={() => playScale(scales.dMajor)}>D Major</button>
        <button class="btn btn-secondary" onClick={() => playScale(scales.eMajor)}>E Major</button>
        <button class="btn btn-secondary" onClick={() => playScale(scales.fMajor)}>F Major</button>
        <button class="btn btn-secondary" onClick={() => playScale(scales.gMajor)}>G Major</button>
        <button class="btn btn-secondary" onClick={() => playScale(scales.aMajor)}>A Major</button>
        <button class="btn btn-secondary" onClick={() => playScale(scales.bMajor)}>B Major</button>
        <button class="btn btn-secondary" onClick={() => playScale(scales.abMajor)}>Ab Major</button>
        <button class="btn btn-secondary" onClick={() => playScale(scales.bbMajor)}>Bb Major</button>
        <button class="btn btn-secondary" onClick={() => playScale(scales.ebMajor)}>Eb Major</button>
        <button class="btn btn-secondary" onClick={() => playScale(scales.dbMajor)}>Db Major</button>

      </div>
      <div className="piano">
        <button disabled={octaveLimitLow} type="button" className="btn btn-secondary" id="increment-octave-btn" onClick={decrementOctave}>&lt;</button>
        <Octave octaveSet='1' scales={scale} keyInput={leftOctaveKeys} octave={octave - 1} />
        <Octave octaveSet='2' scales={scale} keyInput={rightOctaveKeys} octave={octave} />
        <button disabled={octaveLimitHigh} type="button" className="btn btn-secondary" id="-1" onClick={incrementOctave}>&gt;</button>
      </div>
    </ SamplerContext.Provider>

  );
}

export default Piano;
