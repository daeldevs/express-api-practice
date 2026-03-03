const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Example API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Kali Linux Express API!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
