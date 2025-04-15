import http from 'http';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3001;

const handleRequest = (_req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}

const server = http.createServer(handleRequest);

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});