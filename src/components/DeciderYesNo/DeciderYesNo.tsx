import React, { Component } from 'react';
import './DeciderYesNo.css';


interface DeciderYesNoProps {
    onBackClick: () => void,
}
interface DeciderYesNoState {
    decision: string,
}

class DeciderYesNo extends Component<DeciderYesNoProps, DeciderYesNoState> {

    private yesTexts: string[] = ["Ja", "Jawoll", "Sicher", "Klar"];
    private noTexts: string[] = ["Nein", "Niemals", "Neehe"];
    
    constructor (props:DeciderYesNoProps) {
        super(props);

        const yesNo: number=Math.round(Math.random());
        const textlist=yesNo==0 ? this.yesTexts : this.noTexts;
        const textIndex=Math.round(Math.random() * (textlist.length -1) )
        this.state={decision: textlist[textIndex]}
    }
    render() {
        return (
            <div className="DeciderYesNo">
                <div className="Decision">{this.state.decision}</div>
                <button onClick={ this.props.onBackClick}>Zurück</button>
            </div>
        );
    }
}

export default DeciderYesNo;
