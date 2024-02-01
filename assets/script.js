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

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contact-form');
    var thankYouMsg = document.getElementById('thank-you-msg');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        thankYouMsg.style.display = 'block';
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