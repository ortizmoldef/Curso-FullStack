require("dotenv").config();
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.get("/users", async (req, res) => {
    const users = await prisma.user.findMany()
    res.json(users)
})

app.post("/users", async (req, res) => {
    const { name, email } = req.body;
    try{
        const newUser = await prisma.user.create({
            data: { name, email}
        })
        res.json(newUser)
    } catch (error){
        res.status(400).json({ error : "Error al insertar el usuario"})
    }
});


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});