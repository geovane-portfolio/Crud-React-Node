const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user:'root',
    password: 'blog123',
    database: 'blog',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get", (req, res)=> {
    const sqlSelect = "SELECT * FROM noticias";
    db.query(sqlSelect, (err, result) => {
        
        console.log(err);
    });
});

/*app.get("/api/get", (req, res)=> {
    let json = {error:'', result:{}};
    let id = req.params.id;

    const sqlSelectOne = "SELECT * FROM noticias WHERE id = ?";
    db.query(sqlSelectOne, id, (err, result) => {
        
        console.log(err);
    });
});*/

app.post("/api/insert", (req, res) => {

    const autor = req.body.Autor
    const titulo = req.body.Titulo
    const descricao = req.body.Descricao
    
    const sqlInsert = "INSERT INTO noticias (autor, titulo, descricao) VALUES (?,?,?)";
    db.query( sqlInsert, [autor, titulo, descricao], (err, result) => {
        console.log(err);
    })
    
});

// erro não deleta
/*app.delete("/api/delete/:id", (req, res)=>{
    const id = req.params.id;
    const sqlDelete = "DELETE FROM noticias WHERE id = ?";

    db.query(sqlDelete, id, (err,result)=> {
        if(!err)
        res.send('Deletado');
        else
        console.log(err);
    })
});*/

app.update("/api/update/:id", (req, res)=>{
    const id = req.body.id;
    const autor = req.body.Autor
    const titulo = req.body.Titulo
    const descricao = req.body.Descrica

    const sqlUpdate = "UPDATE noticias SET autor = ?, titulo = ?, descricao = ? WHERE id = ?";

    db.query(sqlUpdate, [autor, titulo, descricao], (err,result)=> {
        if(!err)
        res.send('Atualizado!');
        else
        console.log(err);
    })
});


app.listen(3001, () => {
    console.log("porta 3001");
});