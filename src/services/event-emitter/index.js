import EventEmitter from "events";
// Initilization
const eventEmitter = new EventEmitter();
eventEmitter.setMaxListeners(50);
// Export the module
export default eventEmitter;
