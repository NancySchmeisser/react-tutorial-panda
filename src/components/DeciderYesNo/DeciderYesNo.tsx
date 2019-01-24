import React, { Component } from 'react';

class DeciderYesNo extends Component<any, any> {

    private yesTexts: string[] = ["Ja", "Jawoll", "Sicher", "Klar"];
    private noTexts: string[] = ["Nein", "Niemals", "Neehe"];
    
    constructor (props:any) {
        super(props);

        const yesNo: number=Math.round(Math.random());
        const textlist=yesNo==0 ? this.yesTexts : this.noTexts;
        const textIndex=Math.round(Math.random() * (textlist.length -1) )
        this.state={decision: textlist[textIndex]}
    }
    render() {
        return (
            <div className="DeciderYesNo">
                <span>{this.state.decision}</span>
            </div>
        );
    }
}

export default DeciderYesNo;
