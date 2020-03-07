const controller = require('../controller');

const connect = () => controller.send('command');
const takeoff = () => controller.send('takeoff');
const land = () => controller.send('land');
const stop = () => controller.send('stop');
const emergency = () => controller.send('emergency');


module.exports = {
    takeoff,
    connect,
    land,
    stop,
    emergency
}