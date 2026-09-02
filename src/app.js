const express = require('express');
const app = express();

// Datos fijos de ejemplo (solo para demostrar la app en el contenedor)
const inventario = [
  { id: 1, producto: 'Pallet de repuestos', cantidad: 120 },
  { id: 2, producto: 'Caja de embalaje', cantidad: 500 },
  { id: 3, producto: 'Montacargas', cantidad: 3 }
];

app.get('/', (req, res) => {
  res.send('Sistema de Inventario - Logistica Andina Huancayo: operativo');
});

app.get('/api/inventario', (req, res) => {
  res.status(200).json(inventario);
});

module.exports = app;
