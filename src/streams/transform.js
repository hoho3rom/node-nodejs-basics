import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const reverse = new Transform({
    transform(chunk, _, callback) {
        const reversedString = chunk.toString().trim().split('').reverse().join('') + '\n';
        callback(null, reversedString)
    },
});

const transform = async () => {
    const readFromTerminal = process.stdin;
    const writeToTerminal = process.stdout;

    await pipeline(
        readFromTerminal,
        reverse,
        writeToTerminal
    );
};

await transform();