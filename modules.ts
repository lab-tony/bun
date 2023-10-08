const path = require('path');
// import path from 'path';

const filepath = path.join('folderFoo', 'folderBar', 'image.png');
const filename = path.basename(filepath);
console.log(filename);