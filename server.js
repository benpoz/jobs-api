import express from "express";
import cors from 'cors';
import knex from 'knex';
import { response } from "express";

const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      port : 5432,
      user : 'postgres',
      password : 'Cipuz9497',
      database : 'Jobs'
    }
});

const app = express()

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors())

app.get('/getajob', (req,res) => {
    db.select('*').from('Openings').limit(10)
    .then(jobs => res.json(jobs))
})

app.listen(4000, () => {
    console.log('app is running on port 4000')
})