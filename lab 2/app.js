
const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.get('/api/items', (req, res) => {
  // Simulate data (replace with actual data or database query)
  const items = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];
  res.json(items);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
