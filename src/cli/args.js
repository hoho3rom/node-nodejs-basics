import process from 'process';

const parseArgs = () => {
    const args = process.argv.slice(2);

    const result = args.reduce((line, arg, index, { length }) => {
        const isLastArg = index === length - 1;
        return line + (
            arg.startsWith('--') 
            ? `${arg.slice(2)} is `
            : `${arg}${isLastArg ? '' : ', '}`
        );
    }, '');
    
    console.log(result);
};

parseArgs();