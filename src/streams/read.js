import { createReadStream } from 'fs';
import process from 'process';

const read = async () => {
    const readFromFile = createReadStream(`${import.meta.dirname}/files/fileToRead.txt`);
    
    readFromFile.pipe(process.stdout);
    readFromFile.on('end', () => process.stdout.end('\n')); 
};

await read();