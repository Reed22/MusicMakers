import React from "react";
import TriadQuiz from "./TriadQuiz";
import InteralQuiz from "./IntervalQuiz";

export default function Quiz() {
  return (
    <h1 className="text-center">
      <TriadQuiz />
      <InteralQuiz />
    </h1>
  );
}
