document.addEventListener('DOMContentLoaded', (event) => {
    const getInTouchLink = document.querySelector('.get-in-touch a');

    if (getInTouchLink) {
        getInTouchLink.addEventListener('click', () => {
            console.log('Get in Touch on X link clicked');
            // Add any tracking or additional functionality here
        });
    }

    const waitlistForm = document.getElementById('waitlistForm');
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const message = document.getElementById('message');
            message.textContent = `Thank you for requesting early access, ${email}!`;
        });
    }
});
