const Sequelize =  require('sequelize');

const connection = new Sequelize('guiapress', 'root', 'root',{
    host: 'localhost', // referencia de servidor === maquina
    dialect: 'mysql',//nome banco q vai se conectar
    timezone: "-03:00"
})

module.exports = connection