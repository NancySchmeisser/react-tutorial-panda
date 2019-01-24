import React, { Component } from 'react';
import One from './One.png';
import Two from './Two.png';
import Three from './Three.png';
import Four from './Four.png';
import Five from './Five.png';
import Six from './Six.png';
import Animated from './animated.gif';
import './DeciderDice.css';


class DeciderDice extends Component<any, any> {

    private diceImages: string[]=[One, Two, Three, Four, Five, Six]
   
    constructor (props:any) {
        super(props);

        const result=Math.round(Math.random() * 5 )+1
        this.state={result:result, image:Animated}
        setTimeout(()=>{
            this.setState({image:this.diceImages[this.state.result -1]})
        },1000)
    }
    render() {
        return (
            <div className="DeciderDice">
               <img className="DeciderDice" src={this.state.image}/>
            </div>
        );
    }
}

export default DeciderDice;
