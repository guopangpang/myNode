var event = require('events');
var emitter = new event.EventEmitter();
emitter.on('someEvent', function (arg1, arg2) {
    console.log('listener1', arg1, arg2);
});
emitter.on('someEvent', function (arg1, arg2) {
    console.log('listener2', arg1, arg2);
});
emitter.emit('someEvent','1','3');