const { Worker } = require('worker_threads');

const num = process.argv[2];

if (!num || isNaN(num)) {
  console.error('Provide a valid number');
  process.exit(1);
}

const worker = new Worker('./worker.js', {
  workerData: num
});

worker.on('message', (result) => {
  console.log(`Factorial of ${num} is: ${result}`);
});

worker.on('error', (err) => {
  console.error(`Worker error: ${err}`);
});

worker.on('exit', (code) => {
  if (code !== 0) {
    console.error(`Worker stopped with exit code ${code}`);
  }
});
