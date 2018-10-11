import React, { Component } from 'react';
import './Pad.css'

class Pad extends Component {
   constructor(props){
       super(props)
   }

    componentDidMount() {
        document.addEventListener('keydown',(e) => {
            if(e.key.toLowerCase() === this.props.keyPress){
                this.props.handleSound();
            }
        })
    }
    
    render() {
        let {instrument, sound, handleSound} = this.props
        return (
        <div className="pad" onClick={handleSound}>
            <p>{instrument}</p>
        </div>           
        )
    }
}

export default Pad;