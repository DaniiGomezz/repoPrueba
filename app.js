// Importaciones de las dependencias
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const Usuarios = require('./src/db/models/usuario.db');
const playList = require('./src/db/models/playlist.db');
const canciones = require('./src/db/models/canciones.db');

const { conexionBaseDatos } = require('./src/db/dbconnect');

conexionBaseDatos();

const app = express();

dotenv.config();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));


app.listen(port, () => console.log(`Servidor funcionando en el puerto ${port}`))