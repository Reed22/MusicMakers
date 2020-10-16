import React from 'react';

function Key(props) {
  function playSound() {
    props.audio.triggerAttackRelease(props.dataNote + props.octave, '8n');
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      // eslint-disable-next-line react/destructuring-assignment
      dataNote={props.dataNote}
      // eslint-disable-next-line react/destructuring-assignment
      className={props.type}
      onClick={playSound}
      onKeyDown={playSound}
    />
  );
}

export default Key;
