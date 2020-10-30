import React, { useState, useEffect } from 'react';
import keydown from 'react-keydown';

function Key(props) {
  const keyColor = props.type === 'key white' ? 'white' : 'black';
  const playedColor = keyColor === 'black' ? '#333' : '#CCC';

  const [played, setPlayed] = useState(false);
  const [color, setColor] = useState(keyColor);

  function changeColor() {
    if (played) {
      setColor(playedColor);
    } else {
      setColor(keyColor);
    }
  }

  function changePlay() {
    setPlayed((prevPlay) => !prevPlay);
    changeColor();
  }

  function playSound() {
    changePlay();
    props.audio.triggerAttackRelease(props.dataNote + props.octave, '8n');
    setTimeout(changePlay, 250); // Probably not the best way to do this
  }

  useEffect(changeColor, [played]);

  const handleKeyDown = (event) => {
    if (event.keyCode == props.keyCode) playSound();
  };

  useEffect(() => {
    //alert(props.keyChar)
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  },[played]); // May need to add octave state..

  return (
    <div
      style={{ backgroundColor: color}}
      dataNote={props.dataNote}
      className={props.type}
      onClick={playSound}
      onKeyDown={handleKeyDown}
    > 
    <p>{props.keyChar}</p>
    </div>
  );
}

export default Key;
