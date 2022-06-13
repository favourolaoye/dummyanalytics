// const fs = require('fs');
const EventsEmitter = require('events');
const logEvents = require('./Eventslogger')

class myEmitter extends EventsEmitter {};

const eisis = new EventsEmitter()

eisis.on('log', (msg) => logEvents(msg)
)

setTimeout(()=> {
eisis.emit('log', 'log evnt emitted');
},2000);