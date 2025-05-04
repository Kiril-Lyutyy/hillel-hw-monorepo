const { exec } = require('child_process');
const ports = [3000, 3001, 3002, 3003];

function killPortWin(port) {
  const cmd = `powershell -Command "Get-NetTCPConnection -LocalPort ${port} -ErrorAction SilentlyContinue | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force }"`;
  return new Promise((resolve) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error || stderr) {
        console.log(`[WIN port ${port}] ${stderr || error.message}`);
      } else {
        console.log(`[WIN port ${port}] killed`);
      }
      resolve();
    });
  });
}

function killPortUnix(port) {
  const cmd = `lsof -ti tcp:${port} | xargs kill -9`;
  return new Promise((resolve) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error || stderr) {
        console.log(`[UNIX port ${port}] ${stderr || error.message}`);
      } else {
        console.log(`[UNIX port ${port}] killed`);
      }
      resolve();
    });
  });
}

async function main() {
  console.log('🔪 Killing processes on ports:', ports.join(', '));
  const killFns = ports.map(port =>
    process.platform === 'win32' ? killPortWin(port) : killPortUnix(port)
  );
  await Promise.all(killFns);
  console.log('✅ Ports cleared.\n');
}

main();
