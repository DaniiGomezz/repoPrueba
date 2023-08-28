const { DataTypes, sequelize } = require('../dbconnect');

const canciones = sequelize.define('canciones', {
    id_canciones: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombreCancion: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    idPlayList: {
          type: DataTypes.INTEGER,
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
    tableName: 'canciones'
})

canciones.sync({ force: false })
.then(() => {
    console.log('la tabla Canciones se creo correctamente ');
}).catch(err => {
    console.error('Error al crear tabla:', err);
});

module.exports = canciones;