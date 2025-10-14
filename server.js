const express = require('express');
const responseTime = require('response-time');
const app = express();

// Middleware
app.use(responseTime());
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.send('Velkommen! Serveren kører og er klar til ping.');
});

app.get('/ping', (req, res) => {
  res.json({ pong: true, timestamp: Date.now() });
});

app.get('/login', (req, res) => {
  res.send('Login route virker!');
});

// Konfigurer port og IP via miljøvariabler
const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || '0.0.0.0'; // Lyt på alle interfaces

app.listen(PORT, HOST, () => {
  console.log(`✅ Server kører på http://${HOST}:${PORT}`);
});
