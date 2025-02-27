const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());  
app.use(express.json()); 


let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' }
];


app.get('/api/items', (req, res) => {
  res.json(items);
});


app.get('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find((item) => item.id === id);

  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item no encontrado' });
  }
});

app.post('/api/items', (req, res) => {
  const { name } = req.body;
  const newItem = { id: items.length + 1, name };

  items.push(newItem);
  res.status(201).json(newItem);
});

app.put('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  const itemIndex = items.findIndex((item) => item.id === id);

  if (itemIndex !== -1) {
    items[itemIndex].name = name;
    res.json(items[itemIndex]);
  } else {
    res.status(404).json({ message: 'Item no encontrado' });
  }
});

app.delete('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const itemIndex = items.findIndex((item) => item.id === id);

  if (itemIndex !== -1) {
    const deletedItem = items.splice(itemIndex, 1);
    res.json(deletedItem);
  } else {
    res.status(404).json({ message: 'Item no encontrado' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
