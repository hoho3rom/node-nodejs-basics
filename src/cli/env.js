const parseEnv = () => {
    const result = Object.entries(process.env)
        .reduce((line, [key, value]) => line + (key.startsWith('RSS_') ? `${key}=${value}; ` : ''), '');

    console.log(result.slice(0, result.length - 2));
};

parseEnv();