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

// bot token
var telegram_bot_id = "6715737387:AAFn-0IrdGZZ32PATBTceGKJPBwC10icYUE";
// chat id
var chat_id = 5886671961;
var u_name, email, admission_class, message;

var ready = function() {
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    admission_class = document.getElementById("admission_class").value;
    message = document.getElementById("message").value;
    message = "Name: " + u_name + "\nEmail: " + email + "\nAdmission in: " + admission_class + "\nMessage: " + message;
};

var sender = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
        var thankYouMsg = document.getElementById('thank-you-msg');
        thankYouMsg.style.display = 'block';
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("admission_class").value = "";
    document.getElementById("message").value = "";
    return false;
};