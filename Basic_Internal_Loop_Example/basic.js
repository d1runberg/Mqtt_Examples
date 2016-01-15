//require mqtt
var mqtt    = require('mqtt');
//create a client connected to (URL for mqtt server)
var client  = mqtt.connect('mqtt://test.mosquitto.org');

//event triggered on 'connect'
client.on('connect', function () {
  //subscribe to the to pic of 'presence'
  client.subscribe('presence');

});
//publish a message of 'hello mqtt' to 'presesnce' every 10 s econds
setInterval(function(){
   client.publish('presence', 'Hello mqtt');
},10000);

//when client recieves a message on 'presence' that it is subscribed to
//turn the buffer object of message into a string and log to console.
client.on('message', function (topic, message) {
  var inString = message.toString();
  console.log(topic+' : '+inString);
});
