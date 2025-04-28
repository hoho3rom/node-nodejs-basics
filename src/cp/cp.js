import { fork } from 'child_process';

const spawnChildProcess = async (args) => {
    fork(
        `${import.meta.dirname}/files/script.js`, 
        args, 
        { stdio: ['inherit', 'inherit', 'inherit', 'ipc'] }
    );
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['kek', "lol", "mem", 3])
