const  Sequelize  = require('sequelize');


const sequelize = new Sequelize('celke', 'douglas', '123456', {
    host: 'localhost',
    dialect: "mysql"
  });

  sequelize.authenticate().then(()=>{
    console.log("conexao realizada com sucesso")
  }).catch((err)=>{
    console.log("falha na conexao com bd "+ err)
  })


  const Pagamento = sequelize.define('tableTeste', {
    // attributes
    nome: {
      type: Sequelize.STRING
    },
    valor: {
      type: Sequelize.DOUBLE
      // allowNull defaults to true
    }
  });

  //User.sync({force:true})
  Pagamento.create({
      nome:"Energia",
      valor:200
  })