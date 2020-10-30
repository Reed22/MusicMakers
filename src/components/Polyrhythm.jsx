import React from "react";
import PolyrhythmCtrl from "./PolyrhythmCtrl";
import PolyrhythmBPMCtrl from "./PolyrhythmBPMCtrl";

function Polyrhythm() {
  return (
    <div className="bg-white polyrhythm">
      <PolyrhythmCtrl />
      <PolyrhythmBPMCtrl />
      <PolyrhythmCtrl />
    </div>
  );
}

export default Polyrhythm;
