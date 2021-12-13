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
const alldev = 'https://sequematic.com/trigger-custom-webhook/69F02D122B/82101';
const nodev = 'https://sequematic.com/trigger-custom-webhook/69F02D122B/82106';

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
                case 'AllDevices':
                    if (this.state.isClicked) {
                        return alldev;
                    }
                    else if (!this.state.isClicked) {
                        return nodev;
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
               <h1>Studio 154</h1>
               <h3>Guest Access</h3>
               <div class="container">
                <button class="button" onClick={() => this.action("KiOn")}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightbulb-fill" viewBox="0 0 16 16">
  <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"/>
</svg><h4>Kitchen Light</h4>Kitchen
                
                </button>
                
                <button class="button" onClick={() => this.action("MiOn")}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightbulb-fill" viewBox="0 0 16 16">
  <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"/>
</svg><h4>Main Light</h4>Bedroom</button>
                <button class="button" onClick={() => this.action("FanOn")}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fan" viewBox="0 0 16 16">
  <path d="M10 3c0 1.313-.304 2.508-.8 3.4a1.991 1.991 0 0 0-1.484-.38c-.28-.982-.91-2.04-1.838-2.969a8.368 8.368 0 0 0-.491-.454A5.976 5.976 0 0 1 8 2c.691 0 1.355.117 1.973.332.018.219.027.442.027.668Zm0 5c0 .073-.004.146-.012.217 1.018-.019 2.2-.353 3.331-1.006a8.39 8.39 0 0 0 .57-.361 6.004 6.004 0 0 0-2.53-3.823 9.02 9.02 0 0 1-.145.64c-.34 1.269-.944 2.346-1.656 3.079.277.343.442.78.442 1.254Zm-.137.728a2.007 2.007 0 0 1-1.07 1.109c.525.87 1.405 1.725 2.535 2.377.2.116.402.222.605.317a5.986 5.986 0 0 0 2.053-4.111c-.208.073-.421.14-.641.199-1.264.339-2.493.356-3.482.11ZM8 10c-.45 0-.866-.149-1.2-.4-.494.89-.796 2.082-.796 3.391 0 .23.01.457.027.678A5.99 5.99 0 0 0 8 14c.94 0 1.83-.216 2.623-.602a8.359 8.359 0 0 1-.497-.458c-.925-.926-1.555-1.981-1.836-2.96-.094.013-.191.02-.29.02ZM6 8c0-.08.005-.16.014-.239-1.02.017-2.205.351-3.34 1.007a8.366 8.366 0 0 0-.568.359 6.003 6.003 0 0 0 2.525 3.839 8.37 8.37 0 0 1 .148-.653c.34-1.267.94-2.342 1.65-3.075A1.988 1.988 0 0 1 6 8Zm-3.347-.632c1.267-.34 2.498-.355 3.488-.107.196-.494.583-.89 1.07-1.1-.524-.874-1.406-1.733-2.541-2.388a8.363 8.363 0 0 0-.594-.312 5.987 5.987 0 0 0-2.06 4.106c.206-.074.418-.14.637-.199ZM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16Z"/>
</svg><h4>Fan</h4>Bedroom</button>
                
                
                <button class="button" onClick={() => this.action("NiOn")}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightbulb-fill" viewBox="0 0 16 16">
  <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"/>
</svg><h4>Night Stand</h4>Bedroom</button>
                <button class="button" onClick={() => this.action("AllLights")}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightbulb-fill" viewBox="0 0 16 16">
  <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"/>
</svg><h4>All lights</h4>Studio</button>
                <button class="button" onClick={() => this.action("AllDevices")}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plug-fill" viewBox="0 0 16 16">
  <path d="M6 0a.5.5 0 0 1 .5.5V3h3V.5a.5.5 0 0 1 1 0V3h1a.5.5 0 0 1 .5.5v3A3.5 3.5 0 0 1 8.5 10c-.002.434-.01.845-.04 1.22-.041.514-.126 1.003-.317 1.424a2.083 2.083 0 0 1-.97 1.028C6.725 13.9 6.169 14 5.5 14c-.998 0-1.61.33-1.974.718A1.922 1.922 0 0 0 3 16H2c0-.616.232-1.367.797-1.968C3.374 13.42 4.261 13 5.5 13c.581 0 .962-.088 1.218-.219.241-.123.4-.3.514-.55.121-.266.193-.621.23-1.09.027-.34.035-.718.037-1.141A3.5 3.5 0 0 1 4 6.5v-3a.5.5 0 0 1 .5-.5h1V.5A.5.5 0 0 1 6 0z"/>
</svg><h4>All Devices</h4>Studio</button>
                </div>     
                
 
            </div>
            
           
        )
    }
}

export default buttons