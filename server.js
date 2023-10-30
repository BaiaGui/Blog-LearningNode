// import { createServer } from 'node:http';

// const server = createServer((request, response)=> {
//     console.log('oi');
//     return response.end();
// });

// server.listen(3000);
import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send('Hello World');
})


app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})