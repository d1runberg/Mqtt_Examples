//require mqtt
var mqtt = require('mqtt')
//create a client connected to a specific mqtt server
var client = mqtt.connect('URL to mqtt server');
//subscribe to the topic of presence
client.subscribe('presence');
//on a new message log the message to the console
client.on('message', function(topic, message) {
  console.log(message);
});
