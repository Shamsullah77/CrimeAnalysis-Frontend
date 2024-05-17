document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");

    function showError(input, message) {
      const formControl = input.parentElement;
      formControl.className = "form-control error";
      const small = formControl.querySelector(".error");
      small.innerText = message;
    }

    function showSuccess(input) {
      const formControl = input.parentElement;
      formControl.className = "form-control success";
    }

    function isValidEmail(email) {
      const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    form.addEventListener("submit", function(e) {
      e.preventDefault();

      var fullNameInput = document.getElementById('fullName');
      var emailInput = document.getElementById('email');
      var passwordInput = document.getElementById('password');
      var confirmPasswordInput = document.getElementById('confirmPassword');

      if (fullNameInput.value === "") {
        showError(fullNameInput, "Full Name is required");
      } else {
        showSuccess(fullNameInput);
      }

      if (emailInput.value === "") {
        showError(emailInput, "Email is required");
      } else if (!isValidEmail(emailInput.value)) {
        showError(emailInput, "Email is not valid");
      } else {
        showSuccess(emailInput);
      }

      if (passwordInput.value === "") {
        showError(passwordInput, "Password is required");
      } else {
        showSuccess(passwordInput);
      }

      if (confirmPasswordInput.value === "") {
        showError(confirmPasswordInput, "Confirm Password is required");
      } else if (confirmPasswordInput.value !== passwordInput.value) {
        showError(confirmPasswordInput, "Passwords do not match");
      } else {
        showSuccess(confirmPasswordInput);
      }
    });
  });