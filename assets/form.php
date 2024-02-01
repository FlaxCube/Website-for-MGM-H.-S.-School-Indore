<?php
// Check if form data is posted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $formData = array(
        "name" => $_POST["name"],
        "email" => $_POST["email"],
        "admission_class" => $_POST["admission_class"],
        "message" => $_POST["message"]
    );

    // Store form data in a JSON file
    file_put_contents("form_data.json", json_encode($formData));

    // Send response
    echo "Thank you for your inquiry! We will get back to you soon.";
} else {
    echo "Invalid request.";
}
?>
