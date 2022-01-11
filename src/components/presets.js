import React, { Component } from 'react';

//set calls for presets
const chill = 'https://sequematic.com/trigger-custom-webhook/69F02D122B/77256';
const vibing = 'https://sequematic.com/trigger-custom-webhook/69F02D122B/82113';
const angola = 'https://sequematic.com/trigger-custom-webhook/69F02D122B/82115';
const sunset = 'https://sequematic.com/trigger-custom-webhook/69F02D122B/82117';
const allights = 'https://sequematic.com/trigger-custom-webhook/69F02D122B/77241';


//Request headers en stuff
const initDetails = {
    method: 'get',
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    },
    mode: "no-cors"
}

export class presets extends Component {

    constructor(props) {
        super(props);

        //Sets the initial state
        this.state = {
            isClicked: false
        };
    }

    //Determine which action should be taken from the button pressed and return it
    determindedaction = (command) => {
        switch (command) {
            case 'ChillLi':
                if (this.state.isClicked) {
                    return chill;
                }
                else if (!this.state.isClicked) {
                    return allights;
                }
                break;
            case 'VibingLi':
                if (this.state.isClicked) {
                    return vibing;
                }
                else if (!this.state.isClicked) {
                    return allights;
                }
                break;
            case 'AngolaLi':
                if (this.state.isClicked) {
                    return angola;
                }
                else if (!this.state.isClicked) {
                    return allights;
                }
                break;
                case 'SunsetLi':
                    if (this.state.isClicked) {
                        return sunset;
                    }
                    else if (!this.state.isClicked) {
                        return allights;
                    }
                  
                return allights;
            default:
                return;
        }
    }

    //Perform the action
    action = (command) => {

        //set is clicked state to either true or false
        this.setState(prevState => ({
            isClicked: !prevState.isClicked
        }));

        //Get the action that needs be takn based on button press
        let action = this.determindedaction(command)

        //Send the action request to the server. 
        fetch(action, initDetails)
            .then(response => {
                console.log(response);
                return;
            })
    }

    //Return the button
    render() {
        return (
            <div>               
        
          <div className="menu-buttons">
          
          <button className="preset" onClick={() => this.action("ChillLi")}>Chill</button>
       
        
          <button className="preset" onClick={() => this.action("VibingLi")}>Vibing</button>
        
        
        <button className="preset" onClick={() => this.action("AngolaLi")}>Angola</button>
        
       
        <button className="preset" onClick={() => this.action("SunsetLi")}>Sunset</button>
        
      </div>
 
            </div>
            
           
        )
    }
}

export default presets