const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "douglas",
    password: "123456",
    database: "celke"
})
connection.connect((err)=>{
    if(err){
        console.log('erro na conexao com banco' + err.stack);
        return;
    }
    console.log("conexao com bd sucess no id " + connection.threadId)
})
module.exports = connection;