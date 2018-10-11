import React, { Component } from 'react';
import Pad from '../components/Pad';

import './DrumPads.css'

class DrumPads extends Component {
    constructor(props){
        super(props)
        this.state = {
            instruments: [
                {
                    name: "Boom - Z",
                    sound:"http://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/kicks/152[kb]808bd3.aif.mp3",
                    key: "z"
                },
                {
                    name:"Boom 2 - X",
                    sound: "http://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/kicks/152[kb]enormous-808-kick.wav.mp3",
                    key: "x"
                },
                {
                    name: "Kick 2 - C",
                    sound: "http://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/808%20Kicks%20n%20Snares/148[kb]808bd14.aif.mp3",
                    key: "c"
                },
                {
                    name: "Clap - A",
                    sound: "http://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/808%20Kicks%20n%20Snares/77[kb]808clap1.aif.mp3",
                    key: "a"
                },
                {
                    name: "Snare - S",
                    sound: "http://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Choosy%20House%20Kit/41[kb]choosy-house-Snare05.wav.mp3",
                    key: "s"
                },
                {
                    name: "Snare 2 - D",
                    sound: "http://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/snares/18[kb]hard-909-snare.aif.mp3",
                    key: "d"
                },
                {
                    name:"HiHat - Q",
                    sound: "http://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Choosy%20House%20Kit/42[kb]choosy-house-Hihat10.wav.mp3",
                    key: "q"
                },
                {
                    name:"HiHat 2 - W",
                    sound: "http://sampleswap.org/samples-ghost/%20MAY%202014%20LATEST%20ADDITIONS/DRUMS%20(FULL%20KITS)/Choosy%20House%20Kit/45[kb]choosy-house-OpenHihat08.wav.mp3",
                    key: "w"
                },
                {
                    name: "Stab - E",
                    sound: "http://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/punches%20hits%20discoblasts%20bombs/62[kb]minor-synth-stab-hit.wav.mp3",
                    key: "e"
                }
            ].reverse()
        }
    }
    
    playSound(sound){
        let mp3 = new Audio(sound)
        mp3.play();
        mp3.currentTime = 0;  
    }

    render() {
        let pads = this.state.instruments.map((ins, i)=> (
            <Pad 
                key={i}
                keyPress={ins.key}
                instrument={ins.name}
                handleSound={this.playSound.bind(this, ins.sound)}
            />
        ))
        
        return (
            <div className="drum-pads" onKeyPress={this.handleKeyPress}>
                {pads}
            </div>
        )    
    }
}

export default DrumPads;