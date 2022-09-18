import * as fs from "fs";
import { Readable } from "stream";

// let s = fs.createReadStream("./file.txt", { encoding: "utf-8" });
// let counter = 0;
// s.on("data", (chunk) => {
//   counter++;
//   console.log("chunk number " + counter + "\n\n");
//   console.log(chunk);
// });

// export let f = new Readable();
// f.push("Hello");
// f.push("work");
// f.push(null);

// f.on("data", (data) => {
//   console.log(data);
// });

// f.on("close", () => {
//   console.log("Stream closed");
// });

// export default s;

// export const stream = fs.createWriteStream("./file2.txt");

// stream.write("Hello world!", () => {
//   console.log("File created!");
// });

// stream.end("Goodbye now");

// stream.on("finish", () => {
//   console.log("My work is done here");
// });

export const readable = fs.createReadStream("./file2.txt", {
  encoding: "utf-8",
});
const writable = fs.createWriteStream("./file3.txt");

readable.pipe(writable);

writable.on("finish", () => {
  console.log("All done");
});
