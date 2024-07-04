document.getElementById('waitlistForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const response = await fetch('/.netlify/functions/saveEmail', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  });
  const result = await response.json();
  document.getElementById('message').textContent = result.message;
});
