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

  module.exports ={
    Sequelize: sequelize,
    sequelize: sequelize
  }


