const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const session = require('express-session');

const categoriesController = require('./categories/CategoriesController');
const articlesController = require('./articles/ArticlesController');
const usersController = require('./users/UsersController');

const Article = require('./articles/Article');
const Category = require('./categories/Category');
const User = require('./users/Users');



// carregando a view engine
app.set('view engine', 'ejs');

// configurando minhas sessions
app.use(session({
    secret: 'qualquercoisa',
    cookie: { maxAge: 3000000 }

}))

app.use(express.static('public'));

//Body-parser para trabalhar com forms no futuro
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Conectando o banco de dados ao meu arquivo principal
connection.authenticate()
    .then(() => {
        console.log('Conexão feita com sucesso com o banco de dados')
    }).catch(error => console.log(error));

app.use('/', categoriesController)
app.use('/', articlesController)
app.use('/', usersController)

app.get('/session', (req, res) => {
    req.session.treinamento = "NodeJS";
    req.session.user = {
        username: 'Nikolas',
        email: 'nik@go.com',
        id: 10
    }
    req.session.ano = 2022;
    req.session.email = 'email@email.com';

    res.send("Sessão gerada com sucesso")
})
app.get('/leitura', (req, res) => {
    res.json({
        treinamento: req.session.treinamento,
        ano: req.session.ano,
        email: req.session.email,
        user: req.session.user
    })
})


app.get('/', (req, res) => {
    Article.findAll({
        order: [
            ['id', 'DESC']
        ],
        limit: 4
    }).then(article => {
        Category.findAll().then(categories => {
            res.render('index', {
                articles: article,
                categories: categories
            })

        })

    })
});
app.get('/:slug', (req, res) => {
    var slug = req.params.slug;
    Article.findOne({
        where: {
            slug: slug
        }

    }).then(article => {
        if (article != undefined) {
            Category.findAll().then(categories => {
                res.render('article', {
                    article: article,
                    categories: categories
                })

            })
        } else {
            res.redirect('/');
        }
    }).catch(error => {
        res.redirect('/');

    })
})
app.get("/category/:slug", (req, res) => {
    var slug = req.params.slug;
    Category.findOne({
        where: {
            slug: slug
        },
        include: [{ model: Article }]
    }).then(category => {
        if (category != undefined) {
            Category.findAll().then(categories => {
                res.render('index', {
                    articles: category.articles,
                    categories: categories
                })

            })
        } else {
            res.redirect('/');
        }
    }).catch(err => {
        res.redirect('/');
    })
})

app.listen(8080, () => console.log('port 8080'))