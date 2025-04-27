import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import process from 'process';

const calculateHash = async () => {
    const hash = createHash('sha256');
    const readFromFile = createReadStream(`${import.meta.dirname}/files/fileToCalculateHashFor.txt`);

    readFromFile.on('data', (chunk) => hash.update(chunk));
    readFromFile.on('end', () => process.stdout.write(hash.digest('hex') + '\n'));
};

await calculateHash();