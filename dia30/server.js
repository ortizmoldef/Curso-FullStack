require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Conexión a la base de datos MySQL
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect((err) => {
    if (err) {
        console.error("Error conectando a MySQL:", err);
    } else {
        console.log("Conectado a MySQL");
    }
});

// Rutas de la API

// Seleccionar usuario
app.get("/user", async (req, res) => {
    try {
        db.query("SELECT * FROM user", (err, results) => {
            if (err) {
                console.error("Error al obtener usuarios:", err);
                return res.status(500).json(err);
            }
            res.json(results);
        });
    } catch (error) {
        console.error("Error inesperado:", error);
        res.status(500).json({ message: "Error inesperado al obtener los usuarios" });
    }
});

// Insertar usuario
app.post("/user", async (req, res) => {
    const { name, email } = req.body;
    try {
        db.query("INSERT INTO user (name, email) VALUES (?, ?)", [name, email], (err, result) => {
            if (err) {
                console.error("Error al insertar usuario:", err);
                return res.status(500).json(err);
            }
            res.json({ id: result.insertId, name, email });
        });
    } catch (error) {
        console.error("Error inesperado:", error);
        res.status(500).json({ message: "Error inesperado al insertar el usuario" });
    }
});

// Modificar usuario
app.put("/user/:id", async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        db.query("UPDATE user SET name = ?, email = ? WHERE id = ?", [name, email, id], (err, result) => {
            if (err) {
                console.error("Error al actualizar usuario:", err);
                return res.status(500).json(err);
            }
            res.json({ message: "Usuario actualizado correctamente" });
        });
    } catch (error) {
        console.error("Error inesperado:", error);
        res.status(500).json({ message: "Error inesperado al actualizar el usuario" });
    }
});

// Eliminar usuario
app.delete("/user/:id", async (req, res) => {
    const { id } = req.params;
    try {
        db.query("DELETE FROM user WHERE id = ?", [id], (err, result) => {
            if (err) {
                console.error("Error al eliminar usuario:", err);
                return res.status(500).json(err);
            }
            res.json({ message: "Usuario eliminado correctamente" });
        });
    } catch (error) {
        console.error("Error inesperado:", error);
        res.status(500).json({ message: "Error inesperado al eliminar el usuario" });
    }
});

// Configuración del puerto (Vercel manejará el puerto automáticamente)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
