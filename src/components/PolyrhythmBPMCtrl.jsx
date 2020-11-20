import React, { Component } from "react";

class PolyrhythmBPMCtrl extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;

    let parsedValue = parseInt(value, 10);

    if (value === "") {
      // do not allow blank input
      parsedValue = 0;
    } else if (isNaN(parsedValue)) {
      // do not update state since a valid a number was not inputted
      return;
    } else if (parsedValue > 300) {
      parsedValue = 300;
    }

    this.props.onBPMChange(parsedValue);
  }

  render() {
    const { BPM } = this.props;

    return (
      <div className="polyrhythm-bpm-ctrl">
        <div className="polyrhythm-bpm-text">BPM</div>
        <input
          className="polyrhythm-bpm-input text-center"
          type="text"
          value={BPM}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default PolyrhythmBPMCtrl;
