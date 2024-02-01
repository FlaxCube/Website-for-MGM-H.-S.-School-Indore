// Read more for Streams section 
document.addEventListener('DOMContentLoaded', function() {
    var readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            var additionalContent = this.previousElementSibling;

            if (additionalContent.style.display === 'none') {
                additionalContent.style.display = 'block';
                this.textContent = 'Read Less';
            } else {
                additionalContent.style.display = 'none';
                this.textContent = 'Read More';
            }
        });
    });
});

// Contact form Error if user does not fill out all fields
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

// Arrow to go back to the top of the web
document.addEventListener("DOMContentLoaded", function() {
    var backToTop = document.getElementById("back-to-top");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 100) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var loadingOverlay = document.getElementById("loading-overlay");
    window.addEventListener("load", function() {
        loadingOverlay.style.display = "none";
    });
});

