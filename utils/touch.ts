import * as fs from "fs";
import * as util from "util";

const writeFile = util.promisify(fs.writeFile);

export default function touch(path: string) {
  writeFile(path, "")
    .then(() => console.log("File successfully created"))
    .catch((err) => console.error(err));
}
