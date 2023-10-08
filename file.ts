const data = "I love BUN!";

await Bun.write('output.txt', data);

const file = Bun.file('output.txt');

console.log('file.text() :>> ', await file.text());
console.log('file.size :>> ', await file.size);
console.log('file.stream() :>> ', await file.stream());
console.log('file.arrayBuffer() :>> ', await file.arrayBuffer());