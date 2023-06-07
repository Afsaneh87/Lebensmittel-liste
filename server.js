const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Verbinde dich mit der MongoDB-Datenbank
mongoose.connect('mongodb://localhost:27017/lebensmittel-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Verbindung zur Datenbank hergestellt');
}).catch((err) => {
  console.error('Fehler beim Verbinden mit der Datenbank:', err);
  process.exit();
});

// Definiere ein Mongoose-Schema für Lebensmittel
const foodSchema = new mongoose.Schema({
  name: String,
  category: String
});

const Food = mongoose.model('Food', foodSchema);

// Middleware für das Verarbeiten von JSON-Daten
app.use(bodyParser.json());

// Routen für Lebensmittel

// GET-Anfrage, um alle Lebensmittel abzurufen
app.get('/foods', (req, res) => {
  Food.find()
    .then((foods) => {
      res.json(foods);
    })
    .catch((err) => {
      console.error('Fehler beim Abrufen der Lebensmittel:', err);
      res.status(500).json({ error: 'Ein Fehler ist aufgetreten' });
    });
});

// POST-Anfrage, um ein neues Lebensmittel hinzuzufügen
app.post('/foods', (req, res) => {
  const { name, category } = req.body;
  
  const newFood = new Food({
    name,
    category
  });
  
  newFood.save()
    .then(() => {
      res.json({ success: true });
    })
    .catch((err) => {
      console.error('Fehler beim Speichern des Lebensmittels:', err);
      res.status(500).json({ error: 'Ein Fehler ist aufgetreten' });
    });
});

// Starte den Server
app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
