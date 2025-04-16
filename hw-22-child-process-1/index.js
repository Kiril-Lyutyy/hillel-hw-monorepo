const { spawn } = require('child_process');

const [,, command, ...args] = process.argv;

if (!command) {
    console.error('Please provide a command to run, e.g.:\nnode index.js dir');
    process.exit(1);
}

const child = spawn(command, args, { shell: true });

child.stdout.on('data', (data) => {
    console.log(`Output:\n${data.toString()}`);
});

child.stderr.on('data', (data) => {
    console.error(`Error:\n${data.toString()}`);
});

child.on('close', (code) => {
    console.log(`Process exited with code: ${code}`);
});
