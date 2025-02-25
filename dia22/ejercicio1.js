const express = require('express');
const fs = require('fs');
const app = express();
const port = 3001;

app.use(express.json());

// - Crear archivo CSV -
const writeCSV = (path, data) => {
    if (data.length === 0) return;

    const headers = Object.keys(data[0]);

    const escapeValue = (value) => {
        value = String(value);

        if (value == null) {
            value = '';
        }

        if (value.includes('"')) {
            value = value.replace(/"/g, '""');
        }

        if (value.includes(',') || value.includes('\n')) {
            value = `"${value}"`;
        }

        return value;
    };

    const rows = data.map(obj => headers.map(header => escapeValue(obj[header])).join(',')).join('\n');

    const csvContent = [headers.join(','), rows].join('\n');

    fs.writeFileSync(path, csvContent, 'utf8');
};

// -- Leer los archivos CSV --
const parseCSV = (path) => {
    if (!fs.existsSync(path)) return []; 

    const data = fs.readFileSync(path, 'utf-8');
    const [headers, ...rows] = data.split('\n').map(row => row.split(','));

    return rows.map(row =>
        row.reduce((obj, value, index) => {
            obj[headers[index]] = value;
            return obj;
        }, {})
    );
};

// --- Crear la persona con POST ---
app.post('/person', async (req, res) => {
    const { name, surname, isTeacher, Birthdate } = req.body;

    const persons = parseCSV('./output.csv');

    
    const newID = persons.length > 0 ? Math.max(...persons.map(p => parseInt(p.Id))) + 1 : 1;

   
    const newPerson = { Id: newID.toString(), name, surname, isTeacher, Birthdate };

    persons.push(newPerson);

    writeCSV('./output.csv', persons);

    res.status(201).json(newPerson);
});

// ---- Leer la persona con GET ----
app.get('/persons', (req, res) => {
    const persons = parseCSV('./output.csv');

    res.status(200).json(persons);
});



// Iniciar el servidor
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
