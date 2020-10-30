import React from "react";
import TriadQuiz from "./TriadQuiz";
import InteralQuiz from "./IntervalQuiz";

export default function Quiz() {
  return (
    <h1 className="text-center p-5">
      <TriadQuiz />
      <div className="p-5" />
      <InteralQuiz />
    </h1>
  );
}
