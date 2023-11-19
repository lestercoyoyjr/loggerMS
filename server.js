// we're gonna use it for our API
const express = require("express");
const bodyParser = require("body-parser")
const app = express();

const Producer = require("./producer");
const producer = new Producer();

app.use(bodyParser.json("application/json"));

// Publish the message
app.post("/sendLog", async(req,res,next) => {
    await producer.publishMessage(req.body.logType, req.body.message);
    res.send();
})

app.listen(3000, () => {
    console.log("Server started...")
});