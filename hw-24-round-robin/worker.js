const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.argv[2] || 3001;
const workerId = `worker-${port}`;
const logFile = path.join(__dirname, 'worker.log');

const server = http.createServer((_req, res) => {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] ${workerId} handled request on port ${port}\n`;

  fs.appendFile(logFile, logEntry, (err) => {
    if (err) console.error(`Failed to write log: ${err.message}`);
  });

  res.setHeader('Connection', 'close');
  res.end(`Response from ${workerId}`);
});

server.listen(port, () => {
  console.log(`${workerId} running on port ${port}`);
});
