const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ mensaje: 'No se proporcionó un token' });
    }
    const tokenSinBearer = token.startsWith('Bearer ') ? token.slice(7, token.length) : token;

    jwt.verify(tokenSinBearer, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ mensaje: 'Token inválido', error: err });
        }
        req.user = decoded;
        next();
    });
};

module.exports = verificarToken;