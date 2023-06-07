
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
const port = 5050;

// Verbinde dich mit der MongoDB-Datenbank
// Definiere ein Mongoose-Schema für Lebensmittel
/*const foodSchema = new mongoose.Schema({
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
});*/


app.use(cors())
app.get("/", (req, res) => {
  res.send("Hallo von GET");
});

app.listen(port, () => {
  console.log("Server läuft auf: ", port);
});