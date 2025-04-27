import { createWriteStream } from 'fs';
import process from 'process';

const write = async () => {
    const readFromTerminal = process.stdin;
    const writeToFile = createWriteStream(`${import.meta.dirname}/files/fileToWrite.txt`);

    readFromTerminal.pipe(writeToFile);
};

await write();