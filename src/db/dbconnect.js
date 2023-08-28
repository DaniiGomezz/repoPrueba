const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

//Conexion a la base de datos
const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    }
);

const conexionBaseDatos = async () => {
    try {
        await sequelize.authenticate();
        console.log('la conexion a la base de datos fue exitosa!!!');
    } catch (error) {
        console.log('Hubo un error de conxion a la base de datos ', error);
    }
};

module.exports = { sequelize, DataTypes, conexionBaseDatos  };