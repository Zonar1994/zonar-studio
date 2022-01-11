import React, { Component } from 'react'
import styles from '../App.css'

//set calls for lights
const secret = '69F02D122B/'
const URL = 'https://sequematic.com/trigger-custom-webhook/' + secret;
const lightsoff = '77239';
const lightson = '77241';
const KiLight = '78387';
const MiLight = '78390';
const NiLight = '78393';
const Fan = '78396';
const KiLightOff = '78402';
const MiLightOff = '78404';
const NiLightOff = '78406';
const FanOff = '78408';
const alldev = '82101';
const nodev = '82106';
let ki = 'button';
let mi = 'button';
let fan = 'button';
let ni = 'button';
let allL = 'button';
let allD = 'button';



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
        //call the state

        //Sets the initial state
            this.state = {
            isClicked: false
        };
    }

    //Determine which action should be taken from the button pressed and return it
    determindedaction = (command) => {
        console.log(command);
        switch (command) {
            case 'KiOn':
                if (this.state.isClicked) { 
                         ki += ' button activelight';
                    
                    
                    
                    console.log(this)
                    return URL + KiLight;
                }
                else if (!this.state.isClicked) {
                   ki -= ' activelight';
                   ki += ' button';
                    console.log(this)
                    return URL + KiLightOff;    
                }
                break;
            case 'MiOn':
                if (this.state.isClicked) {
                    mi += ' button activelight';
                    return URL + MiLight;
                }
                else if (!this.state.isClicked) {
                     mi -= ' activelight';
                   mi += ' button';

                  
                    return URL + MiLightOff;
                }
                break;
            case 'NiOn':
                if (this.state.isClicked) {
                    ni += ' button activelight';
                    return URL + NiLight;
                }
                else if (!this.state.isClicked) {
                     ni -= ' activelight';
                   ni += ' button';
                    return URL + NiLightOff;
                }
                break;
                case 'FanOn':
                    if (this.state.isClicked) {
                        fan += ' button activefan';
                        allD += ' button activedevice';
                        return URL + Fan;
                    }
                    else if (!this.state.isClicked) {
                         fan -= ' activefan';
                   fan += ' button';
                   
                        return URL + FanOff;
                    }
                    break;
                case 'AllLights':
                    if (this.state.isClicked) {
                        allL += ' button activelight';
                          ki += ' button activelight';
                        mi += ' button activelight';
                        ni += ' button activelight';
                        return URL + lightson;
                    }
                    else if (!this.state.isClicked) {
                         allL -= ' activelight';
                         ki -= ' activelight';
                        mi -= ' activelight';
                        ni -= ' activelight';
                   allL += ' button';
                   ki += ' button ';
                        mi += ' button ';
                        ni += ' button ';
                        return URL + lightsoff;
                    }
                    break;
                case 'AllDevices':
                    if (this.state.isClicked) {
                        ki += ' button activelight';
                        mi += ' button activelight';
                        ni += ' button activelight';
                        allL += ' button activelight';
                        fan += ' button activefan';
                        allD += ' button activedevice';
                        return URL + alldev;
                    }
                    else if (!this.state.isClicked) {
                        ki -= ' activelight';
                        mi -= ' activelight';
                        ni -= ' activelight';
                        allL -= ' activelight';
                        fan -= ' activefan';
                         allD -= ' activedevice';
                   allD += ' button';
                   ki += ' button ';
                        mi += ' button ';
                        ni += ' button ';
                        allL += ' button ';
                        fan += ' button ';
                        return URL + nodev;
                    }
                return URL + MiLight;
            default:
                return;
        }
    }

    //Perform the action
    action = (command) => {
        console.log(command);
           
        //set is clicked state to either true or false
        this.setState(prevState => ({
            isClicked: !prevState.isClicked
        }));

        //Get the action that needs be taken based on button press
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
               <h1>Studio 154</h1>
               <h3>Guest Access</h3>
               <div class="container">
                <button className={ki} onClick={() => this.action("KiOn")}><h4>Kitchen Light</h4>Kitchen</button>
                <button className={mi} onClick={() => this.action("MiOn")}><h4>Main Light</h4>Bedroom</button>          
                <button className={ni} onClick={() => this.action("NiOn")}><h4>Night Stand</h4>Bedroom</button>
                <button className={allL} onClick={() => this.action("AllLights")}><h4>All lights</h4>Studio</button>
                <button className={fan} onClick={() => this.action("FanOn")}><h4>Fan</h4>Bedroom</button> 
                <button className={allD} onClick={() => this.action("AllDevices")}><h4>All Devices</h4>Studio</button>
                </div>     
                
 
            </div>
            
           
        )
    }
}

export default buttons