const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "El email y la contraseña son obligatorios" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Usuario no encontrado" });
        }

        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(400).json({ error: "Contraseña incorrecta" });
        }

        // Generar el token JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Devolver el token al usuario
        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al iniciar sesión" });
    }
};
