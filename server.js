// importiert das Express Framework in 
// die Konstante express
const express = require("express");

// Portnummer für den Server wird hier festgelegt
const PORT = process.env.PORT || 5500;

// Express Anwendung wird erstellt und in 
// die Variable "app" importiert
let app = express();

// Alle Dateien, die im Ordner "frontend" enthalten sind 
// werden an den Benutzer ohne weitere Verarbeitung weitergeleitet
app.use(express.static('frontend'));

// Sobald der Server gestartet ist, wird eine 
// Meldung auf der Konsole ausgegeben 5500
app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
});