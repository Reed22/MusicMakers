import React from 'react';
import Key from './Key';
import {octaveSetup} from './constants'

function Octave(props) {

    const key_components = octaveSetup.map((key, index) => {
        return (
            <Key
                keyChar={props.keyInput[index]}
                octave={props.octave}
                dataNote={key.note}
                type={key.type}
            />
        )
    })

    return (
        <div>
            <div className="octave-identifier d-block p-2 bg-primary text-white">Octave {props.octave}</div>
            <div className="octave">
                {key_components}
            </div>
        </div>
        );
}

export default Octave;