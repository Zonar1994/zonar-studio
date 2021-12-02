import React, { Component } from 'react'

//set calls for lights
const lightsoff = 'https://sequematic.com/trigger-custom-webhook/69F02D122B/77239';
const lightson = 'https://sequematic.com/trigger-custom-webhook/69F02D122B/77241';
const KiLight = 'https://sequematic.com/trigger-custom-webhook/69F02D122B/78387';
const MiLight = 'https://sequematic.com/trigger-custom-webhook/69F02D122B/78390';
const NiLight = 'https://sequematic.com/trigger-custom-webhook/69F02D122B/78393';
const Fan = 'https://sequematic.com/trigger-custom-webhook/69F02D122B/78396';
const KiLightOff = 'https://sequematic.com/trigger-custom-webhook/69F02D122B/78402';
const MiLightOff = 'https://sequematic.com/trigger-custom-webhook/69F02D122B/78404';
const NiLightOff = 'https://sequematic.com/trigger-custom-webhook/69F02D122B/78406';
const FanOff = 'https://sequematic.com/trigger-custom-webhook/69F02D122B/78408';
const ChillLight = 'https://sequematic.com/trigger-custom-webhook/69F02D122B/77256';

//Request headers en stuff
const initDetails = {
    method: 'get',
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    },
    mode: "no-cors"
}

export class buttons extends Component {

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
            case 'KiOn':
                if (this.state.isClicked) {
                    return KiLight;
                }
                else if (!this.state.isClicked) {
                    return KiLightOff;
                }
                break;
            case 'MiOn':
                if (this.state.isClicked) {
                    return MiLight;
                }
                else if (!this.state.isClicked) {
                    return MiLightOff;
                }
                break;
            case 'NiOn':
                if (this.state.isClicked) {
                    return NiLight;
                }
                else if (!this.state.isClicked) {
                    return NiLightOff;
                }
                break;
                case 'FanOn':
                    if (this.state.isClicked) {
                        return Fan;
                    }
                    else if (!this.state.isClicked) {
                        return FanOff;
                    }
                    break;
                case 'AllLights':
                    if (this.state.isClicked) {
                        return lightson;
                    }
                    else if (!this.state.isClicked) {
                        return lightsoff;
                    }
                    break;
                case 'ChillLights':
                    if (this.state.isClicked) {
                        return ChillLight;
                    }
                    else if (!this.state.isClicked) {
                        return lightsoff;
                    }
                return MiLight;
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
                <button class="glow-on-hover" onClick={() => this.action("KiOn")}>Kitchen Light</button>
                
               
                
                <div>
                <button class="glow-on-hover" onClick={() => this.action("MiOn")}>Main Light</button>
                <button class="glow-on-hover" onClick={() => this.action("AllLights")}>All Lights</button>
                
                <div>
                <button class="glow-on-hover" onClick={() => this.action("NiOn")}>Night Light</button>
                <button class="glow-on-hover" onClick={() => this.action("ChillLights")}>Chill Light</button>
                <button class="glow-on-hover" onClick={() => this.action("FanOn")}>Fan</button>
            
                </div>
                
            </div>
            </div>
           
        )
    }
}

export default buttons