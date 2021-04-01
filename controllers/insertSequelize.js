const sequelize = require('../config/conectionSequelize')


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

  Pagamento.create({
    nome:"Energia",
    valor:200
})

  //User.sync({force:true})