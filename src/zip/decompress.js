import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createGunzip } from 'zlib';

const decompress = async () => {
    const gunzip = createGunzip();
    const readFromFile = createReadStream(`${import.meta.dirname}/files/archive.gz`);
    const writeToFile = createWriteStream(`${import.meta.dirname}/files/fileToCompress.txt`);

    await pipeline(
        readFromFile,
        gunzip,
        writeToFile
    );
};

await decompress();