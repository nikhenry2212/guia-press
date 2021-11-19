const Sequelize = require('sequelize');
const connection = require('./../database/database');
const Category = require('../categories/Category');

const Article = connection.define('articles',{
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Category.hasMany(Article) // uma categoria tem muitos artigos 1 -> Para -> Muitos relação entre os dois

Article.belongsTo(Category); // Um artigo pertece a categories 1 -> Para -> 1 relação entre os dois


module.exports = Article; 