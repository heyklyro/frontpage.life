document.getElementById('waitlistForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var email = document.getElementById('email').value;
    if (email) {
        document.getElementById('message').textContent = "Thank you! You've been added to the waitlist.";
        document.getElementById('waitlistForm').reset();
    } else {
        document.getElementById('message').textContent = "Please enter a valid email address.";
    }
});
