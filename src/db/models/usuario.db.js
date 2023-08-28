const { DataTypes, sequelize } = require('../dbconnect');


const playList = require('./playlist.db');


const Usuarios = sequelize.define('usuario', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    usuario:{
        type: DataTypes.STRING(45),
        allowNull: false

    },
    contraseña:{
        type: DataTypes.STRING(45),
        allowNull: false

    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
}, {
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'usuarios'
})



Usuarios.sync({ force: false })
.then(() => {
    console.log('la tabla usuarios se creo correctamente ');
}).catch(err => {
    console.error('Error al crear tabla:', err);
});

Usuarios.hasMany(playList, { as: 'usuarioPlaylist', foreignKey: 'id_usuario' });
module.exports = Usuarios;