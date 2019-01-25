import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import DeciderYesNo from '../DeciderYesNo/DeciderYesNo';
import DeciderDice from '../DeciderDice/DeciderDice';

class Navigation extends Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            currentComponent: <Menu onYesNoClick={this.handleYesNoClick} onDiceClick={this.handleDiceClick}/>
        }
    }

    handleYesNoClick = () => {
        this.setState({
            currentComponent: <DeciderYesNo onBackClick={this.handleBackClick}/>
        })
    }
    handleDiceClick = () => {
        this.setState({
            currentComponent: <DeciderDice onBackClick={this.handleBackClick}/>
        })
    }
    handleBackClick = () => {
        this.setState({
            currentComponent: <Menu onYesNoClick={this.handleYesNoClick} onDiceClick={this.handleDiceClick}/>
        })
    }

    render() {
        return (
            <div className="Navigation">
                {this.state.currentComponent}
            </div>
        );
    }
}

export default Navigation;