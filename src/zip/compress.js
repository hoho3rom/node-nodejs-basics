import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createGzip } from 'zlib';

const compress = async () => {
    const gzip = createGzip();
    const writeToFile = createWriteStream(`${import.meta.dirname}/files/archive.gz`);
    const readFromFile = createReadStream(`${import.meta.dirname}/files/fileToCompress.txt`);

    await pipeline(
        readFromFile,
        gzip,
        writeToFile
    );
};

await compress();
