function validateForm() {
    // Get form elements
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate username
    if (username === "") {
        alert("Username must be filled out");
        return false; // Prevent form submission
    }

    // Validate email
    if (email === "") {
        alert("Email must be filled out");
        return false; // Prevent form submission
    } else if (!validateEmail(email)) {
        alert("Please enter a valid email address");
        return false; // Prevent form submission
    }

    // Validate password
    if (password === "") {
        alert("Password must be filled out");
        return false; // Prevent form submission
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false; // Prevent form submission
    }
}