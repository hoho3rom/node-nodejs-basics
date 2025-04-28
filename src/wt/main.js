import { Worker } from 'worker_threads';
import os from 'os';

const performCalculations = async () => {
    const cores = os.cpus().length;
    const results = [];
    const promises = [];

    for (let i = 0; i < cores; i++) {
        promises.push(
            runWorker(cores + i)
                .then((result => results[i] = ({ status: 'resolved', data: result })))
                .catch(() => results[i] = ({ status: 'error', data: null }))
        );
    }

    await Promise.allSettled(promises).then(() => console.log(results));
};

const runWorker = (n) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker(`${import.meta.dirname}/worker.js`, { workerData: { n } });

        worker.on('message', resolve);
        worker.on('error', reject);
    })
}

await performCalculations();