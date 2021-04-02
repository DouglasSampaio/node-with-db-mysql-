const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

app.engine('handlebars', handlebars({defaultLayout:'main'}))

app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

//rotas
app.get('/pagamento',(req,res)=>{
    res.render('pagamento')
});

app.get('/cad-pagamento',(req,res)=>{
    res.render("cad-pagamento")
});

app.post('/add-pagamento',(req,res)=>{
    res.send("Nome: " + req.body.nome+ "<br>Valor: "+ req.body.valor+ "<br>") 
 })
 
app.get('/listar-pagamento',(req,res)=>{
    res.send("Formulario para listar pagamentos")
});


app.listen(8080);
console.log("SERVIDOR RODANDO")
