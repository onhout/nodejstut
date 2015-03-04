/**
 * Created by pl on 3/3/15.
 */
var util = require('util');
var EventEmitter = require('events').EventEmitter;

function Counter(){
    var self = this;
    EventEmitter.call(this);
    var count = 0;

    self.start = function(){
        self.emit('start');
        setInterval(function(){
            self.emit('count', count);
            count++;
        }, 500);
    };
}

util.inherits(Counter, EventEmitter);

var counter = new Counter();

counter.once('start', function(){
    console.log('start event and the current file is '+__filename);
});

counter.on('count', function(count){
    console.log('count = ' + count);
});

counter.start();
