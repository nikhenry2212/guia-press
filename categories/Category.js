const Sequelize = require('sequelize');
const connection = require('./../database/database');

const Category = connection.define('categories', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// Category.sync({ force: true }) linha para criar a tabela no banco de dados

module.exports = Category;