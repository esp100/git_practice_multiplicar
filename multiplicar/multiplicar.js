///requireds
const fs = require('fs');


/* module.exports. 
if here limite = 10 establesco un value por defectp*/
listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`Valor de entrada: '${base}' para base no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`Valor de entrada: '${limite}' para límite no es un número`);
            return;
        }

        let imptxt = ``;
        for (i = 0; i <= limite; i++) {
            imptxt += (`${base } * ${i} = ${base*i}\n`);
        }
        resolve(imptxt);


    })
}


/* module.exports. */
crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`Valor de entrada: '${base}' no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`Valor de entrada: '${limite}' para límite no es un número`);
            return;
        }

        let txt = ``;

        for (let i = 0; i <= limite; i++) {
            //console.log(`${base } * ${i} = ${base*i}`);
            txt += (`${base } * ${i} = ${base*i}\n`);
        }

        const data = new Uint8Array(Buffer.from(txt));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);

            else {
                resolve(`tabla-${base}.txt`);
                //console.log(`El archivo tabal-${base}.txt ha sido creada`);
            }
        });


    })


}

module.exports = {
    crearArchivo,
    listarTabla
}