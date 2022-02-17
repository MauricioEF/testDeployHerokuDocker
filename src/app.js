import express from 'express';
import { __dirname } from './utils.js';

const app = express();
const PORT = process.env.PORT||8081;
const server = app.listen(8080,()=>console.log(`Listening on PORT ${PORT}`))
app.use(express.static(__dirname+'/public'))

app.get('/info',(req,res)=>{
    res.send({PORT:PORT})
})
app.get('/env',(req,res)=>{
    res.send(process.env.papas)
})