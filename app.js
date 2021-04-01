const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

app.engine('handlebars', handlebars({defaultLayout:'main'}))

app.set('view engine', 'handlebars')

//rotas
app.get('/pagamento',(req,res)=>{
    res.render('pagamento')
});

app.get('/add-pagamento',(req,res)=>{
    res.send("Formulario para fazer pagamento")
});

app.get('/listar-pagamento',(req,res)=>{
    res.send("Formulario para listar pagamentos")
});

app.listen(8080);
console.log("SERVIDOR RODANDO")
