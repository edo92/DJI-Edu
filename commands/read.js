const dgram = require('dgram');
const throttle = require('lodash/throttle');

const speed = (cb) => {
    const droneState = dgram.createSocket('udp4');
    droneState.bind(8890);

    const parseState = state => {
        if (state) {
            let obj = {};
            state.toString().split(';').map(item => {
                obj[item] = item
            });
            cb(obj)
        }
    }

    droneState.on(
        'message',
        throttle(state => { parseState(state) }));

}

module.exports = {
    speed
}