var password = "gettwisted";

var passwordForm = document.getElementById("password-form");
var content = document.getElementById("content");
var passwordInput = document.getElementById("password-input");
var submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function() {
  var userPassword = passwordInput.value;

  if (userPassword === password) {
    // Password is correct, show the content
    passwordForm.style.display = "none";
    content.style.display = "block";
  } else {
    // Password is incorrect, display an error message
    alert("Incorrect password. Please try again.");
  }
});
