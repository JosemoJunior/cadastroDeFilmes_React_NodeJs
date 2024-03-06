import express from "express";
import router from "./routes/filmesRoutes.js";
import db from "./db/db.js";
import cors from 'cors';

let app = express();
app.use(express.json());
app.use(cors());
app.use(router);

db.sync().then(()=>{
    console.log("Aplicação conectada ao banco de dados db_agenda");
}).then(()=>{
    app.listen(5000, ()=>{
        console.log("Servidor excutando na porta 5000!");
    });
});

