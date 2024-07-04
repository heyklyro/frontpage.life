document.getElementById('waitlistForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const messageElement = document.getElementById('message');

    try {
        const response = await fetch('/.netlify/functions/saveEmail', {
            method: 'POST',
            body: JSON.stringify({ email: email }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            const result = await response.json();
            messageElement.textContent = result.message || 'Email saved successfully!';
            messageElement.style.color = 'green';
        } else {
            const errorResult = await response.json();
            messageElement.textContent = errorResult.message || 'Error saving email. Please try again.';
            messageElement.style.color = 'red';
        }
    } catch (error) {
        messageElement.textContent = 'Error saving email. Please try again.';
        messageElement.style.color = 'red';
    }
});
