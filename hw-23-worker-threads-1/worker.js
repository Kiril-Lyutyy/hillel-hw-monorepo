const { parentPort, workerData } = require('worker_threads');

function factorial(n) {
  let result = 1n;

  for (let i = 2n; i <= n; i++) {
    result *= i;
  }
  
  return result;
}

const num = BigInt(workerData);
const result = factorial(num);

parentPort.postMessage(result.toString());
