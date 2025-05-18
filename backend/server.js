const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/calculate', (req, res) => {
  const { num1, num2, operation } = req.body;
  const a = parseFloat(num1);
  const b = parseFloat(num2);

  let result;

  switch (operation) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case '*': result = a * b; break;
    case '/': result = b !== 0 ? a / b : 'Error: Divide by zero'; break;
    default: result = 'Invalid operation';
  }

  res.json({ result });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


