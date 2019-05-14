import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import DeciderYesNo from '../DeciderYesNo/DeciderYesNo';
import DeciderDice from '../DeciderDice/DeciderDice';
import GroupDecider from '../GroupDecider/GroupDecider';

class Navigation extends Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            currentComponent: <Menu onYesNoClick={this.handleYesNoClick} onDiceClick={this.handleDiceClick} onGroupClick={this.handleGroupClick}/>
        }
    }

    handleYesNoClick = () => {
        this.setState({
            currentComponent: <DeciderYesNo onBackClick={this.handleBackClick} />
        })
    }
    handleDiceClick = () => {
        this.setState({
            currentComponent: <DeciderDice onBackClick={this.handleBackClick} />
        })
    }

    handleGroupClick = () => {
        this.setState({
            currentComponent: <GroupDecider onBackClick={this.handleBackClick}/>
        })
    }
    handleBackClick = () => {
        this.setState({
            currentComponent: <Menu onYesNoClick={this.handleYesNoClick} onDiceClick={this.handleDiceClick} onGroupClick={this.handleGroupClick}/>
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