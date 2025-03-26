const User = require("../models/user"); // Asegúrate de que la ruta sea correcta

exports.crearUsuario = async (req, res) => {
    try {
        const { nombre, email, password } = req.body;
        
        // Verificar si todos los campos están presentes
        if (!nombre || !email || !password) {
            return res.status(400).json({ error: "El nombre, email y la contraseña son obligatorios" });
        }

        // Verificar si el usuario ya existe
        const usuarioExistente = await User.findOne({ email });
        if (usuarioExistente) {
            return res.status(400).json({ error: "El usuario con este correo electrónico ya existe" });
        }

        // Crear el nuevo usuario
        const usuario = new User({
            nombre,
            email,
            password,
        });
        
        await usuario.save();
        res.status(201).json({
            mensaje: "Usuario creado exitosamente",
            usuario: { id: usuario._id, nombre: usuario.nombre, email: usuario.email }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al crear el usuario" });
    }
};
