/* eslint-disable no-irregular-whitespace */
import * as WebXPanel from "@crestron/ch5-webxpanel/dist/umd/index";

console.log(`WebXPanel version: ${WebXPanel.getVersion()}`);
console.log(`WebXPanel build date: ${WebXPanel.getBuildDate()}`);

const configuration = { 
    host: '192.168.1.240', // defaults to window.location.host 
    ipId: '0x04', // string representing a hex value. Might contain "0x" or not. Defaults to "0x03" 
    roomId: '', // defaults to empty string 
}; 

if (WebXPanel.isActive) {
    console.log('initializing webxpanel');
    WebXPanel.default.initialize(configuration); 
}

(function webxpanelConnection() {
    console.log("configure xpanel");
    WebXPanel.default.addEventListener(WebXPanel.WebXPanelEvents.CONNECT_CIP, ({ detail }) => {
        const { url, ipId, roomId } = detail;
        console.log(`Connected to ${url}, 0x${ipId.toString(16)}, ${roomId}`);
    });

    WebXPanel.default.addEventListener(WebXPanel.WebXPanelEvents.LICENSE_WS, ({ detail }) => {
        const controlSystemSupportsLicense = detail.controlSystemSupportsLicense;  // boolean 
        const licenseApplied = detail.licenseApplied; // optional boolean 
        const licenseDaysRemaining = detail.licenseDaysRemaining; // optional number 
        const licenseHasExpiry = detail.licenseHasExpiry; // optional boolean  
        const trialPeriod = detail.trialPeriod; // optional boolean 
        const trialPeriodDaysRemaining = detail.trialPeriodDaysRemaining; // optional number 
        const resourceAvailable = detail.resourceAvailable; // boolean  

        if (!controlSystemSupportsLicense) {
            console.log("Control system does not support Mobility license");
        } else if (!resourceAvailable) {
            console.log("Mobility license is required (expired or never applied)");
        } else if (licenseApplied) {
            if (!licenseHasExpiry) {
                console.log("Mobility license is valid");
            } else {
                // Display warning 
                console.log(`Mobility license expires in ${licenseDaysRemaining} day(s)`);
            }
        } else if (trialPeriod) {
            console.log(` Trial period expires in ${trialPeriodDaysRemaining} day(s)`);
        }
    });


    if (WebXPanel.isActive) {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
    
        // allow url parameters to override webxpanel default configuration of 
        // * host = window.location.hostname
        // * ipId = 0x03
        // * roomId = ''
        const configuration = {};
        if (urlParams.has('host')) {configuration['host'] = urlParams.get('host');}
        if (urlParams.has('ipId')) {configuration['ipId'] = urlParams.get('ipId');}
        if (urlParams.has('roomId')) {configuration['roomId'] = urlParams.get('roomId');}
        WebXPanel.default.initialize(configuration);
    }
}) ();