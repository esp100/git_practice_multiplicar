///requireds
const fs = require('fs');
//const fs = require('express');
//const fs = require('./path');

let base = 3.14159265359;
let txt = ``;

for (let i = 0; i <= 10; i++) {
    //console.log(`${base } * ${i} = ${base*i}`);
    txt += (`${base } * ${i} = ${base*i}\n`);
}

const data = new Uint8Array(Buffer.from(txt));
fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabal-${base}.txt ha sido creada`);
});