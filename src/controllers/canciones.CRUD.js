
const canciones = require('../db/models/canciones.db');
const ctrlCanciones = {};

ctrlCanciones.obtenerCanciones = async (req, res) => {
    try {
        const Canciones = await canciones.findAll({
            where: {
                estado: true
            }
        });

        return res.json(Canciones);
    } catch (error) {
        console.log('Error al obtener las canciones', error);
        return res.status(500).json({
            message: 'Error al obtener a las canciones'
        })
    }
}

ctrlCanciones.crearCancion = async (req, res) => {
    const {
        nombreCanciones,
        idPlayList
    } = req.body;

    try {
        const nuevaCancion = new canciones({
            nombreCanciones,
            idPlayList
        });

        await nuevaCancion.save();

        return res.status(201).json({ message: '!!La cancion fue creada correctamente!!'})
    } catch (error) {
        console.log('Error al crear la cancion', error);
        return res.status(500).json({ message: 'error al crear cancion'})
    }
}

module.exports = ctrlCanciones;