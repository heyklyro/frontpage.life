document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('waitlistForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        submitEmail(email);
    });
});

function submitEmail(email) {
    fetch('https://your-app-name.herokuapp.com/waitlist', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').textContent = data.message;
    })
    .catch(error => {
        document.getElementById('message').textContent = 'An error occurred. Please try again.';
    });
}
