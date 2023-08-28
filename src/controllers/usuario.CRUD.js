const Usuarios = require('../db/models/usuario.db');
const ctrlUsuarios = {};

// Obtener todas las reservas
ctrlUsuarios.obtenerlosUsuarios = async (req, res) => {
    try {
        const Users = await Usuarios.findAll({
            where: {
                estado: true
            }
        });

        return res.json(Users);
    } catch (error) {
        console.log('Error al obtener los usuarios', error);
        return res.status(500).json({
            message: 'Error al obtener a los usuarios'
        })
    }
}

// Crear una reserva
ctrlUsuarios.crearUsuario = async (req, res) => {
    const {
        nombre,
        apellido,
        email,
        usuario,
        contraseña
    } = req.body;

    try {
        const nuevoUsuario = new Usuarios({
            nombre,
            apellido,
            email,
            usuario,
            contraseña
        });

        await nuevoUsuario.save();

        return res.status(201).json({ message: '!!EL usuario fue creado exitosamente!!'})
    } catch (error) {
        console.log('Error al crear al usuario', error);
        return res.status(500).json({ message: 'Hubo un error inesperado al crear al usuario'})
    }
}

module.exports = ctrlUsuarios;