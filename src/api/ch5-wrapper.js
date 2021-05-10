import * as CrComLib from '@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib'

const joinType = {
    Digital: 'b',
    Analog: 'n',
    Serial: 's'
}

function press(join) {
    console.log(`ch5-wrapper - press (${join})`)
    CrComLib.publishEvent(joinType.Digital, join.toString(), true)
}

function release(join) {
    console.log(`ch5-wrapper - release (${join})`)
    CrComLib.publishEvent(joinType.Digital, join.toString(), false)
}

function pulse(join) {
    console.log(`ch5-wrapper - pulse (${join})`)
    press(join)
    setTimeout(() => {
        release(join)
    }, 250);
}

function publish(type, join, value) {
    console.log(`ch5-wrapper - publish (${type}, ${join}, ${value})`)
    CrComLib.publishEvent(`${type}`, join.toString(), value)
}

function subscribe(type, join, func) {
    console.log(`ch5-wrapper - subscribe (${type}, ${join})`)
    CrComLib.subscribeState(`${type}`, join.toString(), func)
}

function setAnalog(join, value) {
    console.log(`ch5-wrapper - setAnalog (${join})`)
    CrComLib.publishEvent(joinType.Analog, join.toString(), value)
}

function setSerial(join, value) {
    console.log(`ch5-wrapper - setAnalog (${join})`)
    CrComLib.publishEvent(joinType.Analog, join.toString(), value)
}

export { joinType, press, release, pulse, publish, subscribe, setAnalog, setSerial }
