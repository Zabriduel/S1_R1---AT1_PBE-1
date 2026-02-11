import express from 'express';
import router from './routes/routes.js';
import 'dotenv/config';

const app = express();
app.use('/', router)

app.listen(process.env.SERVER_PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${process.env.SERVER_PORT}`)
})