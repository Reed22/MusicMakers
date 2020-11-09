import React, { useState, useEffect } from 'react';
import Key from './Key';
import {octaveSetup} from './constants'

function Octave(props) {
    const key_components = octaveSetup.map((key, index) => {
        if(props.scales){
            const notes_first_octave = props.scales.filter(note_obj => note_obj.note == key.note && note_obj.octaveChange == 0)
            const notes_second_octave = props.scales.filter(note_obj => note_obj.note == key.note && note_obj.octaveChange == 1)
            //const note = props.scales.filter(note_obj => note_obj.note == key.note)
            //If the scale does not include this key, dont send play prop
            if(notes_first_octave.length == 0 && notes_second_octave.length == 0) {
                return (
                    <Key
                        keyChar={props.keyInput[index]}
                        octave={props.octave}
                        play={null}
                        dataNote={key.note}
                        type={key.type}
                    />
                )
            }
            else {
                if(props.octaveSet == '1'){
                    return (
                        <Key
                            keyChar={props.keyInput[index]}
                            octave={props.octave}
                            play={notes_first_octave}
                            dataNote={key.note}
                            type={key.type}
                        />
                    )    
                }
                else {
                    //console.log(notes_second_octave)
                    return (
                        <Key
                            octaveSet={props.octaveSet}
                            keyChar={props.keyInput[index]}
                            octave={props.octave}
                            play={notes_second_octave}
                            dataNote={key.note}
                            type={key.type}
                        />
                    )                        
                }
            }
        }
        
        else {
            return (
                <Key
                    keyChar={props.keyInput[index]}
                    octave={props.octave}
                    play={null}
                    dataNote={key.note}
                    type={key.type}
                />
            )   
        }   
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