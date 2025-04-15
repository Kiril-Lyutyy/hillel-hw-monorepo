const message = 'Hello again, binary world!';
const buffer = Buffer.from(message, 'utf8');
const helloBuffer = Buffer.alloc(5);

buffer.copy(helloBuffer, 0, 0, 5);

const convertedToString = helloBuffer.toString();

console.log('Original message:', message);
console.log('Modified with buffer:', convertedToString);
