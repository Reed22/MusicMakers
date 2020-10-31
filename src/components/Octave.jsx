import React, { useState } from 'react';
import Key from './Key';

function Octave(props) {

  return (
    <div>
        <div className="octave-identifier d-block p-2 bg-primary text-white">Octave {props.octave}</div>
        <div className="octave">
            <Key
                keyChar={props.keyInput[0]}
                octave={props.octave}
                audio={props.sampler}
                dataNote="C"
                type="key white"
            />
            <Key
                keyChar={props.keyInput[1]}
                octave={props.octave}
                audio={props.sampler}
                dataNote="Db"
                type="key black"
            />
            <Key
                keyChar={props.keyInput[2]}
                octave={props.octave}
                audio={props.sampler}
                dataNote="D"
                type="key white"
            />
            <Key
                keyChar={props.keyInput[3]}
                octave={props.octave}
                audio={props.sampler}
                dataNote="Eb"
                type="key black"
            />
            <Key
                keyChar={props.keyInput[4]}
                octave={props.octave}
                audio={props.sampler}
                dataNote="E"
                type="key white"
            />
            <Key
                keyChar={props.keyInput[5]}
                octave={props.octave}
                audio={props.sampler}
                dataNote="F"
                type="key white"
            />
            <Key
                keyChar={props.keyInput[6]}
                octave={props.octave}
                audio={props.sampler}
                dataNote="Gb"
                type="key black"
            />
            <Key
                keyChar={props.keyInput[7]}
                octave={props.octave}
                audio={props.sampler}
                dataNote="G"
                type="key white"
            />
            <Key
                keyChar={props.keyInput[8]}
                octave={props.octave}
                audio={props.sampler}
                dataNote="Ab"
                type="key black"
            />
            <Key
                keyChar={props.keyInput[9]}
                octave={props.octave}
                audio={props.sampler}
                dataNote="A"
                type="key white"
            />
            <Key
                keyChar={props.keyInput[10]}
                octave={props.octave}
                audio={props.sampler}
                dataNote="Bb"
                type="key black"
            />
            <Key
                keyChar={props.keyInput[11]}
                octave={props.octave}
                audio={props.sampler}
                dataNote="B"
                type="key white"
            />
        </div>
    </div>
  );
}

export default Octave;