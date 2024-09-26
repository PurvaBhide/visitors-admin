const togglePassword = document.querySelector("#togglePassword");
const passwordField = document.querySelector("#password");
const toggleIcon = document.getElementById("toggleIcon");

togglePassword.addEventListener("click", function () {
  const type =
    passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);

  if (type === "password") {
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  } else {
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  }
});

// Handle form submission
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const contactNumber = document.getElementById("contactNumber").value;
    const password = document.getElementById("password").value;

    visitors
      .Login(contactNumber, password)
      .then((response) => {
        if (response.status === "200") {
          window.location.href = "visitors.php"; // Redirect on successful login
        } else {
          console.error("Unexpected response status:", response.status);
        }
      })
      .catch((error) => {
        console.error("Login failed:", error);
        const alertDiv = document.getElementById("alert-div");
        alertDiv.classList.remove("d-none");
        alertDiv.classList.add("alert", "alert-danger");
        alertDiv.innerHTML =
          "Login failed. Please check your credentials and try again.";
      });
  });
