// we're gonna use it to produce the messages. 

const amqp = require('amqplib');
const config = require('./config');

class Producer {
    channel;

    async createChannel () {
        const connection = await amqp.connect()
    }
}