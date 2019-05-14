import React, { Component } from 'react';
import ReactDOM from 'react-dom';

interface GroupDeciderProps {
    onBackClick: () => void;
}

interface Circle {
    posX: number,
    posY: number,
    color: string
}

interface GroupDeciderState {
    listOfCircles : Array<Circle>
}

class GroupDecider extends Component <GroupDeciderProps, GroupDeciderState> {

    constructor(props: GroupDeciderProps) {
        super(props)
        this.state={ listOfCircles: [] }
    }

    handleClick = (ev:React.MouseEvent<HTMLCanvasElement, MouseEvent> ) =>{
        let color = this.getColor()
        let listOFCircles = this.state.listOfCircles;
        listOFCircles.push( {posX: ev.clientX, posY: ev.clientY, color: color})
        this.setState( {
            listOfCircles: listOFCircles.slice()
        })
        this.drawCircle(ev.clientX, ev. clientY, color)
    }

    getColor = () => {
        let colors = ["#FFAA00", "#3300AA", "red", "blue","green","yellow","black",]
        let winner = Math.round(Math.random()*colors.length)
        if(winner==colors.length) {
            winner--
        }
        return colors[winner]
    }

    handleDecisionClick = (ev:React.MouseEvent<HTMLDivElement, MouseEvent> ) =>{
        if(this.state.listOfCircles.length<2) return;
        let winner = Math.round(Math.random()*this.state.listOfCircles.length)
        if(winner==this.state.listOfCircles.length) {
            winner--
        }
        this.state.listOfCircles.forEach( (nextCircle: Circle,  index: number) => {
            this.drawCircle(nextCircle.posX, nextCircle.posY, nextCircle.color, index==winner)
        } )
    }

    drawCircle = (x: number, y: number, color: string, filled: boolean=false) => {
        let canvas = ReactDOM.findDOMNode(this.refs.canvas) as any;
        let context = canvas.getContext("2d");

        context.fillStyle = color;
        context.beginPath();
        context.arc(x , y, 50, 0, 2 * Math.PI);
        context.fill();

        if(!filled) {
            context.fillStyle = "#FFFFFF";
            context.beginPath();
            context.arc(x , y, 40, 0, 2 * Math.PI);
            context.fill();
        }
    }

    render() {
        return (
            <div>
                <canvas ref="canvas" height="800" width="1000" style={{ border:"green 1px solid"}} onClick={this.handleClick}></canvas>
                <div style={{ position:"absolute", left: 480, top: 380, width: 40, height: 40, backgroundColor:"red"}} onClick={this.handleDecisionClick} ></div>
                <br/>
                <button onClick={this.props.onBackClick}>Zurück</button>
            </div>
        );
        

    }
}

export default GroupDecider;