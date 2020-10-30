import React, { useState } from 'react';

function OctaveCtrl(props) {

  return (
    <div id="octave-wrapper">
        <button className="octave-buttons" id="-1" onClick={props.handleChangeOctave}>&lt;</button>
        <button className="octave-buttons" id="1" onClick={props.handleChangeOctave}>1</button>
        <button className="octave-buttons" id="2" onClick={props.handleChangeOctave}>2</button>
        <button className="octave-buttons" id="3" onClick={props.handleChangeOctave}>3</button>
        <button className="octave-buttons" id="4" onClick={props.handleChangeOctave}>4</button>
        <button className="octave_buttons" id="+1" onClick={props.handleChangeOctave}>&gt;</button>
    </div>
  );

}

export default OctaveCtrl;