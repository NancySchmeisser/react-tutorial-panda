import React, { Component } from 'react';

class Menu extends Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="Menu">
            <button onClick={this.props.onYesNoClick}>Ja/ Nein</button><br />
            <button onClick={this.props.onDiceClick}>Würfel</button>
            </div>
        );
    }
}

export default Menu;