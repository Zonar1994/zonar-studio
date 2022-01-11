import React, { Component } from 'react'


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
                <button className={ki} onClick={() => this.action("KiOn")}>
<svg xmlns="http://www.w3.org/2000/svg" width="27.9" height="40.583" viewBox="0 0 27.9 40.583">
  <path id="Icon_awesome-lightbulb" data-name="Icon awesome-lightbulb" d="M7.614,36.013a2.537,2.537,0,0,0,.425,1.4l1.355,2.036A2.536,2.536,0,0,0,11.5,40.583H16.4a2.536,2.536,0,0,0,2.112-1.132l1.355-2.036a2.536,2.536,0,0,0,.425-1.4l0-3.04H7.61l0,3.04ZM0,13.95a13.872,13.872,0,0,0,3.453,9.177,22.778,22.778,0,0,1,4.138,7.249c0,.021.006.041.009.062H20.3c0-.021.006-.04.009-.062a22.778,22.778,0,0,1,4.138-7.249A13.947,13.947,0,1,0,0,13.95ZM13.95,7.609A6.348,6.348,0,0,0,7.609,13.95a1.268,1.268,0,0,1-2.536,0A8.887,8.887,0,0,1,13.95,5.073a1.268,1.268,0,0,1,0,2.536Z" transform="translate(0 0)" fill="#ffffff"/>
</svg>
 <p><span>Kitchen Light</span>Kitchen</p> 
</button>

<button className={mi} onClick={() => this.action("MiOn")}>
<svg xmlns="http://www.w3.org/2000/svg" width="27.9" height="40.583" viewBox="0 0 27.9 40.583">
  <path id="Icon_awesome-lightbulb" data-name="Icon awesome-lightbulb" d="M7.614,36.013a2.537,2.537,0,0,0,.425,1.4l1.355,2.036A2.536,2.536,0,0,0,11.5,40.583H16.4a2.536,2.536,0,0,0,2.112-1.132l1.355-2.036a2.536,2.536,0,0,0,.425-1.4l0-3.04H7.61l0,3.04ZM0,13.95a13.872,13.872,0,0,0,3.453,9.177,22.778,22.778,0,0,1,4.138,7.249c0,.021.006.041.009.062H20.3c0-.021.006-.04.009-.062a22.778,22.778,0,0,1,4.138-7.249A13.947,13.947,0,1,0,0,13.95ZM13.95,7.609A6.348,6.348,0,0,0,7.609,13.95a1.268,1.268,0,0,1-2.536,0A8.887,8.887,0,0,1,13.95,5.073a1.268,1.268,0,0,1,0,2.536Z" transform="translate(0 0)" fill="#ffffff"/>
</svg>
 <p><span>Main Light</span>Bedroom</p> 
</button>

<button className={ni} onClick={() => this.action("NiOn")}>
<svg xmlns="http://www.w3.org/2000/svg" width="27.9" height="40.583" viewBox="0 0 27.9 40.583">
  <path id="Icon_awesome-lightbulb" data-name="Icon awesome-lightbulb" d="M7.614,36.013a2.537,2.537,0,0,0,.425,1.4l1.355,2.036A2.536,2.536,0,0,0,11.5,40.583H16.4a2.536,2.536,0,0,0,2.112-1.132l1.355-2.036a2.536,2.536,0,0,0,.425-1.4l0-3.04H7.61l0,3.04ZM0,13.95a13.872,13.872,0,0,0,3.453,9.177,22.778,22.778,0,0,1,4.138,7.249c0,.021.006.041.009.062H20.3c0-.021.006-.04.009-.062a22.778,22.778,0,0,1,4.138-7.249A13.947,13.947,0,1,0,0,13.95ZM13.95,7.609A6.348,6.348,0,0,0,7.609,13.95a1.268,1.268,0,0,1-2.536,0A8.887,8.887,0,0,1,13.95,5.073a1.268,1.268,0,0,1,0,2.536Z" transform="translate(0 0)" fill="#ffffff"/>
</svg>
 <p><span>Nightstand</span>Bedroom</p> 
</button>

<button className={allL} onClick={() => this.action("AllLights")}>
<svg xmlns="http://www.w3.org/2000/svg" width="27.9" height="40.583" viewBox="0 0 27.9 40.583">
  <path id="Icon_awesome-lightbulb" data-name="Icon awesome-lightbulb" d="M7.614,36.013a2.537,2.537,0,0,0,.425,1.4l1.355,2.036A2.536,2.536,0,0,0,11.5,40.583H16.4a2.536,2.536,0,0,0,2.112-1.132l1.355-2.036a2.536,2.536,0,0,0,.425-1.4l0-3.04H7.61l0,3.04ZM0,13.95a13.872,13.872,0,0,0,3.453,9.177,22.778,22.778,0,0,1,4.138,7.249c0,.021.006.041.009.062H20.3c0-.021.006-.04.009-.062a22.778,22.778,0,0,1,4.138-7.249A13.947,13.947,0,1,0,0,13.95ZM13.95,7.609A6.348,6.348,0,0,0,7.609,13.95a1.268,1.268,0,0,1-2.536,0A8.887,8.887,0,0,1,13.95,5.073a1.268,1.268,0,0,1,0,2.536Z" transform="translate(0 0)" fill="#ffffff"/>
</svg>
 <p><span>All Lights</span>Studio</p> 
</button>
<button className={fan} onClick={() => this.action("FanOn")}><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 62.769 62.769">
  <path id="Icon_awesome-fan" data-name="Icon awesome-fan" d="M30.564,11.1a19.571,19.571,0,0,0-6.68,1.115L24.959,1.539A1.418,1.418,0,0,0,23.348.011,13.961,13.961,0,0,0,11.1,13.821a19.571,19.571,0,0,0,1.115,6.68L1.539,19.425A1.418,1.418,0,0,0,.011,21.037,13.961,13.961,0,0,0,13.821,33.288a19.571,19.571,0,0,0,6.68-1.115L19.425,42.845a1.42,1.42,0,0,0,1.612,1.527A13.961,13.961,0,0,0,33.288,30.564a19.571,19.571,0,0,0-1.115-6.68l10.672,1.076a1.419,1.419,0,0,0,1.527-1.612A13.961,13.961,0,0,0,30.564,11.1Zm-8.371,13.87a2.774,2.774,0,1,1,2.774-2.774A2.774,2.774,0,0,1,22.192,24.966Z" transform="translate(31.385 62.769) rotate(-135)" fill="#ffffff"/>
</svg><p><span>Fan</span>Bedroom</p> 
</button>
<button className={allD} onClick={() => this.action("AllDevices")}><svg xmlns="http://www.w3.org/2000/svg" width="37.948" height="37.948" viewBox="0 0 37.948 37.948">
  <path id="Icon_metro-power-cord" data-name="Icon metro-power-cord" d="M42.484,13.11,38.9,9.528,31.827,16.6,27.81,12.585,34.885,5.51,31.3,1.928,24.228,9,19.686,4.461,16.257,7.89,36.523,28.155l3.429-3.429-4.542-4.542ZM33.382,28.6,15.816,11.03c-3.793,4.548-8.1,11.575-5.122,17.622L5.46,33.887a3.176,3.176,0,0,0,0,4.478l.588.588a3.176,3.176,0,0,0,4.478,0l5.234-5.234c6.046,2.974,13.074-1.329,17.622-5.121Z" transform="translate(-4.536 -1.928)" fill="#ffffff"/>
</svg><p><span>All Devices</span>Studio</p> 
</button>
               
                </div>     
                
 
            </div>
            
           
        )
    }
}

export default buttons