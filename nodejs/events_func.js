
var events = require("events");
var instance = new events.EventEmitter();

const firstEventHandler = () => {
    console.log("First Event handler Executed");
};

const secondEventHandler = () => {
    console.log("Second Event handler Executed");
};

instance.on("firstEvent", firstEventHandler);
instance.on("secondEvent", secondEventHandler);

instance.emit("firstEvent");
instance.emit("secondEvent");
