const express = require('express')
const connection = require('./conectionSequelize')

const app = express();

let listagem = connection.query('select * from users', function(err, rows,fields){
    if(!err){
        console.log(listagem._results)
    }else{
        console.log("nao foi possivel listar usaurios")
    }
})

// let inserir = connection.query("INSERT INTO users(nome, email) VALUES('Daniel', 'Daniel@teste.com.br')",function(err,result){
//     if(!err){
//         console.log("USUARIO CADASTRADO COM SUCESSO")
//     }else{
//         console.log("ERRO AO CADASTRAR USAURIO")
//     }
// })



//criação de uma rota
app.get("/usuarios", (req, res) => {
    //res.sendFile(__dirname + "diretorio pasta")
    res.send("oi")
});

app.listen(8080);