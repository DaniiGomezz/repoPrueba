const playList = require('../db/models/playlist.db');
const ctrlPlayList = {};

// Obtener todas las playlists
ctrlPlayList.obtenerPlayLists = async (req, res) => {
    try {
        const playlists = await playList.findAll({
            where: {
                estado: true
            }
        });

        return res.json(playlists);
    } catch (error) {
        console.log('Hubo un error al obtener las playlists', error);
        return res.status(500).json({
            message:'Hubo un problema para traer las playlists'
        })
    }
}

// Obtener una playlist a traves del identificador
ctrlPlayList.obtenerPlayList = async (req, res) => {
    try {
        const { idPlayList } = req.params;
        const playlist = await playList.findByPk(idPlayList);
        return res.json(playlist);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'hubo un error inesperado al traer la playlist'
        })
    }
}

