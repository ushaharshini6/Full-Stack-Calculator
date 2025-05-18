async function calculate() {
  const num1 = document.getElementById('num1').value;
  const num2 = document.getElementById('num2').value;
  const operation = document.getElementById('operation').value;

  try {
    const response = await fetch('http://localhost:3000/calculate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ num1, num2, operation })
    });

    const data = await response.json();

    if (response.ok) {
      document.getElementById('result').innerText = `Result: ${data.result}`;
    } else {
      document.getElementById('result').innerText = `Error: ${data.error}`;
    }
  } catch (error) {
    document.getElementById('result').innerText = 'Error connecting to backend.';
    console.error('Fetch error:', error);
  }
}


