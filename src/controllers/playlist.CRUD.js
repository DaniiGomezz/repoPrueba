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

// Crear una nueva playlist
ctrlPlayList.nuevaPlayList = async (req, res) => {
    const {
        nombrePlaylist,
        id_usuario
    } = req.body;

    try {
        const nuevaPlaylist = new playList({
            nombrePlaylist,
            id_usuario
        });

        await nuevaPlaylist.save();

        return res.status(201).json({
            message : 'la playlist se creo exitosamente.'
        });
    } catch (error) {
        console.log('Error al crear la playlist', error);
        return res.status(500).json({
            message: "Hubo un problema al guardar la playlist."
        })
    }
}

// Actualizar una playlist 
ctrlPlayList.actualizarPlayList = async (req, res) => {
    try {
        const { idPlayList } = req.params;
        const playlist = await playList.findByPk(idPlayList);
        await playlist.update(req.body)
        return res.json({
            message:'La playlist se actualizo correctamente'
        });
    } catch (error) {
        console.log('Error al actualizar la playlist', error);
        return res.status(500).json({
            message :"Hubo un problema para actualizar la playlist",
        })
    }
}

// Eliminar una playlist de forma lógica
ctrlPlayList.eliminarPlaylist = async (req, res) => {
    const { idPlayList } = req.params;
    try {
        const playlist = await playList.findByPk(idPlayList);
        await playlist.update({ estado: false });
        return res.json({
            message:"la playlist se elimnino correctamente"
        });
    } catch (error) {
        console.log('Error al eliminar la playlist', error);
        return res.status(500).json({
            message:"se prodeujo un problema al eliminar la playlist"
        })
    }
}

module.exports = ctrlPost;