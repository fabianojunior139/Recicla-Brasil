import express from 'express';
import router from './Routes';
import cors from 'cors';
import pool from './config/database';

const app = express();
const port = process.env.PORT || 3333;

pool.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Conectado ao banco de dados`);
    }
})

app.use(express.json());

app.use(cors());
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.use(router);
app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
})