const event = require("events");
class EmitterClass extends event {}

const eventInstance = new EmitterClass();

const firstEventHandler = () => {
    console.log("First Event Handler");
};

const secondEventHandler = () => {
    console.log("Second Event Handler");
};

eventInstance.on("firstEvent", firstEventHandler);
eventInstance.on("secondEvent", secondEventHandler);

eventInstance.emit("firstEvent");
eventInstance.emit("secondEvent");
