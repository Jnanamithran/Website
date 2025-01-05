<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $fullName = filter_var($_POST['full-name'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = filter_var($_POST['text'], FILTER_SANITIZE_STRING);

    // Email details
    $to = "your-email@example.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Message body
    $body = "You have received a new message from your website contact form.\n\n";
    $body .= "Full Name: $fullName\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "There was a problem sending the message.";
    }
}
?>
