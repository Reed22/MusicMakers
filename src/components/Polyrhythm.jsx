import React, { Component } from "react";
import PolyrhythmCtrl from "./PolyrhythmCtrl";
import PolyrhythmBPMCtrl from "./PolyrhythmBPMCtrl";
import * as Tone from "tone";

class Polyrhythm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rhythmA: 1,
      rhythmB: 1,
      BPM: 60,
    };

    this.handleRhythmAChange = this.handleRhythmAChange.bind(this);
    this.handleRhythmBChange = this.handleRhythmBChange.bind(this);
    this.handleBPMChange = this.handleBPMChange.bind(this);
  }

  handleRhythmAChange(rhythm) {
    this.setState({ rhythmA: rhythm }, () => this.setRhythmLoops());
  }

  handleRhythmBChange(rhythm) {
    this.setState({ rhythmB: rhythm }, () => this.setRhythmLoops());
  }

  handleBPMChange(BPM) {
    this.setState({ BPM: BPM }, () => this.setRhythmLoops());
  }

  setRhythmLoops() {
    const { BPM, rhythmA, rhythmB } = this.state;

    const priorLoops = Object.keys(Tone.Transport._scheduledEvents);

    for (let i = 0; i < priorLoops.length; i++) {
      Tone.Transport.clear(priorLoops[i]);
    }

    // create two monophonic synths
    const synthA = new Tone.FMSynth().toDestination();
    const synthB = new Tone.AMSynth().toDestination();

    // loopA plays over 0.1 seconds at the current BPM (second rhythm)
    new Tone.Loop((time) => {
      synthA.triggerAttackRelease("A4", 0.1, time);
    }, 0.5).start(0);
    // loopB plays over 0.1 seconds (first rhythm)
    new Tone.Loop((time) => {
      synthB.triggerAttackRelease("C4", 0.1, time);
    }, (0.5 * rhythmB) / rhythmA).start(0);

    if (BPM === 0) {
      Tone.Transport.bpm.value = BPM;
      Tone.Transport.pause();
    } else {
      Tone.Transport.bpm.value = BPM;
      Tone.Transport.start();
    }
  }

  render() {
    const { rhythmA, rhythmB, BPM } = this.state;

    // debugging
    /*
    console.log(this.state);
    console.log("unscheduled events");
    console.log(Tone.Transport._scheduledEvents);
    console.log(Tone.Transport.bpm.value);
    */

    return (
      <div className="bg-white polyrhythm">
        <PolyrhythmCtrl
          onRhythmChange={this.handleRhythmAChange}
          rhythm={rhythmA}
        />
        <PolyrhythmBPMCtrl onBPMChange={this.handleBPMChange} BPM={BPM} />
        <PolyrhythmCtrl
          onRhythmChange={this.handleRhythmBChange}
          rhythm={rhythmB}
        />
      </div>
    );
  }
}

export default Polyrhythm;
