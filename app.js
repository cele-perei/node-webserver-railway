import express from 'express'
import { engine } from 'express-handlebars';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express()
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
import hbs from'hbs';
import * as dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT;
hbs.registerPartials(__dirname + '/views/partials');


app.use( express.static('public') );


app.get('/', (req, res) => {
    res.render('home.hbs', {
      nombre: 'Celeste Pereira',
      titulo: 'Curso de Node'
    });
  })

app.get('/generic', (req, res) => {
    //res.sendFile( __dirname + '/public/generic.html');
    res.render('generic.hbs', {
      nombre: 'Celeste Pereira',
      titulo: 'Generic - Curso de Node'
    });
  })

  app.get('/elements', (req, res) => {
    //res.sendFile( __dirname + '/public/generic.html');
    res.render('elements.hbs', {
      nombre: 'Celeste Pereira',
      titulo: 'Elements - Curso de Node'
    });
  })

app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html');
    //res.sendFile('C:/Users/celes/Downloads/templated-roadtrip/index.html');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost/${port}`);
})