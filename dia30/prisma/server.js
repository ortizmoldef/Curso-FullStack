require("dotenv").config();
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const prisma = new PrismaClient();

// Obtener todos los usuarios
app.get("/user", async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Crear un nuevo usuario
app.post("/user", async (req, res) => {
    const { name, email } = req.body;
    try {
        const newUser = await prisma.user.create({
            data: { name, email },
        });
        res.json(newUser);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Actualizar un usuario
app.put("/user/:id", async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        const updatedUser = await prisma.user.update({
            where: { id: parseInt(id) },
            data: { name, email },
        });
        res.json({ message: "Usuario actualizado correctamente", updatedUser });
    } catch (error) {
        res.status(500).json(error);
    }
});

// Eliminar un usuario
app.delete("/user/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.user.delete({
            where: { id: parseInt(id) },
        });
        res.json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
        res.status(500).json(error);
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
