const Sequelize = require('sequelize')
const sequelize = new Sequelize('contato', 'root', '12345678',{
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})
const Msg = sequelize.define('mensagens', {
    idmensagens: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: Sequelize.STRING
    },
    mensagem: {
        type: Sequelize.STRING
    }
})
Msg.sync({force:true})

module.exports = Msg