import { Pool } from "pg";

const pool = new Pool ({
    user: 'postgres',
    host: 'localhost',
    database: 'recicla_+brasil',
    password: '12345'
})

export default pool;