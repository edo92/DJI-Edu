const control = require('./commands/control');
const connect = require('./controller');
const read = require('./commands/read');
const set = require('./commands/set');
const state = require('./streams/state');
const video = require('./streams/video');


module.exports = {
    connect,
    control,
    read,
    set,
    receiver: {
        state: state,
        video: video
    }
}