document.addEventListener("DOMContentLoaded", function () {
    // Handle the Register form validation
    const registerForm = document.querySelector("form#register-form");
    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            const username = document.querySelector("input[name='username']").value;
            const email = document.querySelector("input[name='email']").value;
            const password = document.querySelector("input[name='password']").value;
            const errorMessage = document.querySelector(".error-message");

            // Clear previous error messages
            errorMessage.textContent = "";

            // Validation checks
            if (!username || !email || !password) {
                errorMessage.textContent = "All fields are required!";
                e.preventDefault(); // Prevent form submission
            }
        });
    }

    // Handle the Login form validation
    const loginForm = document.querySelector("form#login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            const email = document.querySelector("input[name='email']").value;
            const password = document.querySelector("input[name='password']").value;
            const errorMessage = document.querySelector(".error-message");

            // Clear previous error messages
            errorMessage.textContent = "";

            // Validation checks
            if (!email || !password) {
                errorMessage.textContent = "Both email and password are required!";
                e.preventDefault(); // Prevent form submission
            }
        });
    }
});
