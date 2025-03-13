require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

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

// seleccionar al usuario
app.get("/user", (req, res) => {
    db.query("SELECT * FROM user", (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});


// insertar los datos del usuario
app.post("/user", (req, res) => {
    const { name, email } = req.body;
    db.query("INSERT INTO user (name, email) VALUES (?, ?)", [name, email], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ id: result.insertId, name, email });
    });
});

// Modificar el usuario
app.put("/user/:id", (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    db.query("UPDATE user SET name = ?, email = ? WHERE id = ?", [name, email, id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Usuario actualizado correctamente" });
    });
});

// Eliminar el usuario
app.delete("/user/:id", (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM user WHERE id = ?", [id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Usuario eliminado correctamente" });
    });
});


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
