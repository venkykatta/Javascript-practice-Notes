const firstTime = performance.now();

something();

const secondTime = performance.now();

console.log(`The something function ${secondTime - firstTime} milliseconds.`);
