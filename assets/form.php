<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    $admission_class = $_POST["admission_class"]; // Added for admission class dropdown

    // Replace with your email address
    $to = "rgroyalgaming6@gmail.com";

    // Email subject
    $email_subject = "New Admission Inquiry: $subject";

    // Email content
    $email_body = "You have received a new admission inquiry.\n\n" .
        "Name: $name\n" .
        "Email: $email\n" .
        "Admission Class: $admission_class\n" . // Added for admission class dropdown
        "Subject: $subject\n" .
        "Message:\n$message";

    // Send email
    mail($to, $email_subject, $email_body);

    // Redirect or display success message
    // header("Location: success.html"); // Uncomment this line to redirect to a success page
    echo "Thank you for your inquiry! We will get back to you soon.";
} else {
    // Handle invalid requests or display an error message
    echo "Invalid request.";
}
?>
