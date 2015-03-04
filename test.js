/**
 * Created by pl on 3/3/15.
 */
var m = require('mmm');
var fs = require('fs');
var stream = fs.createReadStream('foo.txt');

stream.on('data', function(data){
    var chunk = data.toString();
    console.log(chunk);
});

stream.on('end', function(){
    process.stdout.write(": finished loading a file");
    console.log();
});



console.log('time after first require ' + m.now);
console.log(m.add(3, 5));
console.log(m.multiply(23,3));
console.log(m.factorial(5));

setTimeout(function(){
    m=require('mmm');
    console.log('time after second require ' + m.now);
}, 5000);