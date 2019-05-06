import React, { Component } from 'react';
import './Menu.css';
import image from 'free-panda-clipart-graphics-illustrations-830x954.png';



class Menu extends Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="Menu">
            <h1>Der Entscheider-Panda</h1>
            <img src="https://clipartion.com/wp-content/uploads/2016/03/free-panda-clipart-graphics-illustrations-830x954.png" alt="panda" width="250em"/>
            <button className="JaNein" onClick={this.props.onYesNoClick}>Ja/ Nein</button><br />
            <button className="Dice" onClick={this.props.onDiceClick}>Würfel</button>
            </div>
        );
    }
}

export default Menu;