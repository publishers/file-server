const express = require('express')
const app = express()
const port = 3000

const args = process.argv;
console.log(args);
let baseDir = args[2];
console.log("baseDir:" + baseDir);

if (baseDir !== undefined) {
    app.get('/video/:dir/:filename', (request, response) => {
        let dir = request.params['dir'];
        let filename = request.params['filename'];
        response.sendFile(baseDir + '\\' + dir + '\\' + filename)
    });

    app.get('/video/:dir', (request, response) => {
        let dir = request.params['dir'];
        response.redirect('/video/' + dir + '/index.html')
    });

    app.listen(port, (err) => {
        if (err) {
            return console.log('something bad happened', err)
        }
        console.log(`server is listening on ${port}`)
    });
}