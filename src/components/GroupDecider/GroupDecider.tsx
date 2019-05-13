import React, { Component } from 'react';

interface GroupDeciderProps {
    onBackClick: () => void,
}

interface GroupDeciderState {
    result: number,
    image: string,
}

class GroupDecider extends Component<GroupDeciderProps, GroupDeciderState> {

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

export default GroupDecider;