const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors({
  origin: true,
  methods: ['GET', 'OPTION'],
  credentials: true,
}));

app.get('/', (req, res) => {
  res.json({"message": "HTTP API: /"});
});

app.get('/api', (req, res) => {
  res.json({"message": "HTTP API: api"});
});

module.exports = app;