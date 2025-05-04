const http = require('http');

const servers = [
  { host: 'localhost', port: 3001 },
  { host: 'localhost', port: 3002 },
  { host: 'localhost', port: 3003 }
];

let current = 0;

const balancer = http.createServer((req, res) => {
  const target = servers[current];
  current = (current + 1) % servers.length;

  const proxy = http.request(
    {
      host: target.host,
      port: target.port,
      path: req.url,
      method: req.method,
      headers: req.headers
    },
    (proxyRes) => {
      res.writeHead(proxyRes.statusCode, proxyRes.headers);
      proxyRes.pipe(res, { end: true });
    }
  );

  req.pipe(proxy, { end: true });
});

balancer.listen(3000, () => {
  console.log('Load balancer running on port 3000');
});
