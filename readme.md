# Projeto Blog - Guia do Programador

## Projeto feito com node.js e view engine ejs, para aprender node.js
## integrando a um banco de dados (mysql) usando como interface de banco (mysql-workbench 8.0) 
![Badge](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcUYI3gIcK6QzYJeQyPoUHsSPma0dYF01Y2Q&usqp=CAU)
## a interação entre o back e a base foi feita via (sequelize)
![Badge](./assets/download.png)

# Configurando Ambiente
## NPM
## node.js (versão lts)
## git clone https://github.com/nikhenry2212/guia-press
## npm i
## mysql Workbench (8.0)
## criar schema 
![Badge](./assets/schema.jpeg)
## npm start para criar tabelas e habilitar 
## Article.sync({ force: true }) Article.js
## Categories.sync({ force: true }) Category.js
## User.sync({ force: true }) Users.js
## Esses comando vão sincronizar o seu back com o seu banco
