const http = require('http');
const cluster = require('cluster');
const os = require('os');
require('dotenv').config();

const numCPUs = os.cpus().length;
const port = process.env.PORT || 3000;

if (cluster.isPrimary) {
    console.group('Cluster Master Process');
    console.log(`Master ${process.pid} is running on port ${port}`);
    console.log(`Spawning ${numCPUs} workers...\n`);
    console.groupEnd();

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker) => {
        console.group('Worker Exit Event');
        console.log(`Worker ${worker.process.pid} exited. Respawning...`);
        console.groupEnd();
        cluster.fork();
    });
} else {
    const server = http.createServer((_req, res) => {
        //heavy computation
        let sum = 0;
        for (let i = 0; i < 1e7; i++) {
            sum += i;
        }

        const responseText = `Time: ${new Date().toISOString()}\n Worker ID: ${cluster.worker.id}\n PID: ${process.pid}\n Result: ${sum}\n`;

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(responseText);
    
        console.log(`[Worker: ${cluster.worker.id} PID: ${process.pid}]: handled request`);
    });

    server.listen(port, () => {
        console.log(`[Worker: ${cluster.worker.id} PID: ${process.pid}]: is listening on http://localhost:${port}`);
    });
}
