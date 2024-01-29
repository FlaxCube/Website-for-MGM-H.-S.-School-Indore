
document.addEventListener('DOMContentLoaded', function() {
    var readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default behavior of the link

            var additionalContent = this.previousElementSibling;

            if (additionalContent.style.display === 'none') {
                additionalContent.style.display = 'block';
                this.textContent = 'Read Less'; // Update the button text
            } else {
                additionalContent.style.display = 'none';
                this.textContent = 'Read More'; // Update the button text
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var subject = document.getElementById("subject").value;
        var message = document.getElementById("message").value;

        if (!name || !email || !subject || !message) {
            alert("Please fill in all fields.");
            event.preventDefault();
        }
    });
});
