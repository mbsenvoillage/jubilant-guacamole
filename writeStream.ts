import * as fs from "fs";
import { Writable } from "stream";
import * as util from "util";

const writeFileAsync = util.promisify(fs.writeFile);

class WriteStreamImpl extends Writable {
  path: string;

  constructor(path: string) {
    super();
    this.path = path;
  }

  _write(
    chunk: any,
    encoding: BufferEncoding,
    callback: (error?: Error) => void
  ): void {
    writeFileAsync(this.path, chunk, encoding)
      .then(() => callback())
      .catch((err) => callback(err));
  }
}
