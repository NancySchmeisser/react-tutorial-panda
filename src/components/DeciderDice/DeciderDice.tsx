import React, { Component } from 'react';
import One from './One.png';
import Two from './Two.png';
import Three from './Three.png';
import Four from './Four.png';
import Five from './Five.png';
import Six from './Six.png';
import Animated from './animated.gif';
import './DeciderDice.css';

interface DeciderDiceProps {
    onBackClick: () => void,
}

interface DeciderDiceState {
    result: number,
    image: string,
}

class DeciderDice extends Component<DeciderDiceProps, DeciderDiceState> {

    private diceImages: string[] = [One, Two, Three, Four, Five, Six]

    constructor(props: any) {
        super(props);

        const result = Math.round(Math.random() * 5) + 1
        this.state = { result: result, image: Animated }
        setTimeout(() => {
            this.setState({ image: this.diceImages[this.state.result - 1] })
        }, 1000)
    }
    render() {
        return (
            <div className="DeciderDice">
                <img className="ImageDice" src={this.state.image} />
                <button className="Back" onClick={this.props.onBackClick}>Zurück</button>
            </div>
        );
    }
}

export default DeciderDice;
