const request = require('supertest');
const app = require('../src/app');

test('GET / responde 200', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
});

test('GET /api/inventario devuelve 3 items', async () => {
  const res = await request(app).get('/api/inventario');
  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBe(3);
});
