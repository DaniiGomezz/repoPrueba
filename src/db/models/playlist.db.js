const { DataTypes, sequelize } = require('../dbconnect');

const playList = sequelize.define('playlist', {
    idPlayList: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombrePlaylist: {
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
    tableName: 'playlists'
})

playList.sync({ force: true })
.then(() => {
    console.log('la tabla playlist se creo correctamente ');
});

module.exports = playList;