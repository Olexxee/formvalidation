// // alert("Olexxee is back");

var form = document.getElementById("myForm");

let fullName = document.getElementById("fullname");
let userName = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Validate full name
  if (fullName.value.trim() === "") {
    alert("You didn't input anything");
  }
  // Validate username
  else if (userName.value.trim() === "") {
    alert("Username is required");
  }
  // Validate email with proper regex
  else if (
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value.trim())
  ) {
    alert("Enter a valid Email");
  }
  // Validate password length
  else if (password.value.length < 8) {
    alert("Password must be at least 8 characters");
  }
  // Success
  else {
    alert("Form is submitted successfully");
  }
});
