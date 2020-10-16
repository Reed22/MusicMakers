import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Header from './general/Header';
import Piano from './Piano';

export default function App() {
  return (
    <Router>
      <div>
        <Piano />
        <Switch />
      </div>
    </Router>
  );
}
