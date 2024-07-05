document.getElementById('waitlistForm').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    if (email) {
        document.getElementById('message').textContent = "Thank you! You've been added to the waitlist.";
    } else {
        event.preventDefault();
        document.getElementById('message').textContent = "Please enter a valid email address.";
    }
});
