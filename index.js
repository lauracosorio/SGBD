const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("<h1>Api Academia</h1>");
});

app.get("/estudiantes", (req, res) => {
  let estudiantes = [];
  estudiantes.push({ nombre: "pepito", apellido: "perez", edad: 20 });
  res.json(estudiantes);
//   res.send("<h2>Servicio de Estudiantes</h2>");
});

app.listen(8083, function () {
  console.log("Aplicación corriendo en el puerto 8083");
});
