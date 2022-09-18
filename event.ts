import * as EventEmitter from "events";

const eventEmitter = new EventEmitter();

eventEmitter.on("ev", (data) => {
  console.log("Received ev with data: ");
  console.log(data);
});

eventEmitter.emit("ev", { word: "hello" });

export default eventEmitter;
