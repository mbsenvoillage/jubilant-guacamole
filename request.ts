import { request } from "http";
import * as fs from "fs";

let writeStream = fs.createWriteStream("./req.txt");

const r = request(
  { host: "jsonplaceholder.typicode.com", method: "GET", path: "/todos/1" },
  function (res) {
    res.pipe(writeStream);
  }
);

r.end("This is over");

export default r;
