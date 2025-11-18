const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

router.get('/nosotros', (req, res) => {
    res.sendFile(path.resolve('../public/contacto.html'));
  });
app.use(express.urlencoded({ extended: true }));

app.get("/contacto", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "contacto.html"));
});

app.post("/contacto", (req, res) => {
  const { nombre, email, mensaje } = req.body;

  console.log("Nuevo mensaje:", nombre, email, mensaje);

  res.send(`
    <h1>Mensaje recibido</h1>
    <p>Gracias, ${nombre}. Te responderemos a ${email}.</p>
    <a href="/contacto">Volver</a>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:1000`);
});