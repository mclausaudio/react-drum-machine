import React, { Component } from 'react';
import DrumPads from './DrumPads';

import './DrumMachine.css'

const DrumMachine = () => (
    <div className="drum-machine">
        <DrumPads />
        <div className="text">
            <h2>Mike's React Drum Machine</h2>
            <h3>How to use:</h3>
            <p>Trigger sounds by clicking on the individual pads, or by pressing the corresponding keyboard keys.</p>
            <h4>Created by: <a href="http://www.michaelclaus.io" target="_blank">Michael Claus</a>.</h4>
        </div>
    </div>
)

export default DrumMachine;
