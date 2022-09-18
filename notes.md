## Modules

In NodeJs, any file is treated a module. The module acts as a scope which means that local variables are not available in the global scope.
Each file is wrapped in a function, and the "this" keyword references the module.

`console.log(this === module.exports) // true`

## Process

The process object is a property of the global object. CLI arguments passed when launching a Node.js process are available through process.argv property.

## Node and Typescript

To use Typescript with node, you need `ts-node`, `typescript` and `@types/node` : `npm install -D ts-node typescript @types/node`

## tsconfig

### sourceMap

Enables the generation of sourcemap files. These files allow debuggers and other tools to display the original TypeScript source code when actually working with the emitted JavaScript files.

### alwaysStrict

Ensures that your files are parsed in the ECMAScript strict mode, and emit “use strict” for each source file.

### noImplicitAny

In some cases where no type annotations are present, TypeScript will fall back to a type of any for a variable when it cannot infer the type. Turning on noImplicitAny however TypeScript will issue an error whenever it would have inferred any.

## EventEmitter

Define an event listener with "on" or "once". Emit events with "emit". Extra data can be passed as the second arg of "emit".

## Buffer

- What is the purpose of a buffer ? >> It helps manipulating binary data.

- What is a buffer ? >> An array of numbers. It has a fixed size. Once declared you cannot change it.

## Streams

- What is the purpose of a stream ? >> Deal with data that might not be available all at once. Since you do not have to load all data into memory, you can work with large amounts of data. Plus you can start processing the data as it comes through without having to wait until it is completely available.

### ReadableStream

Readable streams have two modes : - paused - flowing
A stream is set to paused mode by default. Attaching an event listener on the 'data' event switches it to flowing mode.
In order to switch manually the stream to flowing, `stream.resume` can be used.
If you turn a readable stream into a flowing mode without handlers ready to consume the incoming chunks, the data is lost.

### WritableStream

When writing large amounts of data, a writable stream is preferable to invoking the writeFile function. To write some data, use the `write` method. To close the stream, use the `end` method.

### Pipe

The `pipe`method is available for readable streams. A writable stream can be passed as argument to the `pipe`method, and whatever stream is read will become the input of the writable stream. When all data is transmitted, the readable fires and 'end' event, which causes the writable to close.

### Reimplemeting WritableStream

To reimplement, extend `Writable` and provide a `_write`method, which takes a chunk, an encoding and a callback as arguments. The callback is called when processing of the current chunk is complete. It takes an error as argument if call fails, otherwise it takes null;

- What does `_write` do ? >> It writes chunks of data to the selected destination.
  It must not be called directly, which is why it is prefixed with an underscore.
