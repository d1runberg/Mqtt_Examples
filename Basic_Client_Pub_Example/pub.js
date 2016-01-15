//require mqtt
var mqtt = require('mqtt')
//create client connected to specific mqtt server
var client = mqtt.connect('URL to mqtt server');
//publish a message of 'hello!' with topic of presence
cient.publish('presence', 'hello!');
//end connection
client.end();
