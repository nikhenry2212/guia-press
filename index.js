const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection =  require('./database/database');

const categoriesController = require('./categories/CategoriesController');
const articlesController = require('./articles/ArticlesController');

const Article =  require('./articles/Article');
const Category = require('./categories/Category');



// carregando a view engine
app.set('view engine', 'ejs');

app.use(express.static('public'));

//Body-parser para trabalhar com forms no futuro
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//Conectando o banco de dados ao meu arquivo principal
connection.authenticate()
.then(()=>{
    console.log('Conexão feita com sucesso com o banco de dados')
}).catch(error => console.log(error));

app.use('/', categoriesController)


app.use('/', articlesController)


app.get('/',(req, res)=>{
    res.render('index')
});

app.listen(8080, () => console.log('port 8080'))