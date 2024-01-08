import express from 'express';
import http2 from 'http2';
import fs from 'fs';

const app = express();
const port = 3000;

// Your Express app configuration and routes go here

const serverOptions = {
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.crt'),
};

const server = http2.createSecureServer(serverOptions, app);

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
