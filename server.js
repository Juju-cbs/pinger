const express = require('express');
const responseTime = require('response-time');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(responseTime());
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.send('Velkommen! Serveren kører og er klar til ping.');
});

app.get('/ping', (req, res) => {
  res.json({
    pong: true,
    timestamp: Date.now(),
    region: 'Frankfurt'
  });
});

// Hardcoded port and host
const PORT = 8001;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`✅ Server kører på http://${HOST}:${PORT}`);
});
