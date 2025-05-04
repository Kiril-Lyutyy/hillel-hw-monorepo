const express = require('express');
const http = require('http');

const app = express();
const port = 3000;

let workers = [3001, 3002, 3003];
let currentWorker = 0;

app.get('/', (_req, res) => {
  const workerPort = workers[currentWorker];
  currentWorker = (currentWorker + 1) % workers.length;

  http.get(`http://localhost:${workerPort}`, (workerRes) => {
    let data = '';

    workerRes.on('data', (chunk) => {
      data += chunk;
    });

    workerRes.on('end', () => {
      res.send(data);
    });
  }).on('error', () => {
    res.status(500).send('Error contacting worker');
  });
});

app.listen(port, () => {
  console.log(`Load balancer running on port ${port}`);
});
