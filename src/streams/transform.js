import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';

const transformReverse = new Transform({
    transform(chunk, _, callback) {
        const reversedString = chunk.toString().trim().split('').reverse().join('');
        callback(null, reversedString)
    },
});

const transform = async () => {
    const readFromTerminal = process.stdin;
    const writeToTerminal = process.stdout;

    await pipeline(
        readFromTerminal,
        transformReverse,
        writeToTerminal
    );
};

await transform();