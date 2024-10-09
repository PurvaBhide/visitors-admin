// const togglePassword = document.querySelector("#togglePassword");
// const passwordField = document.querySelector("#password");
// const toggleIcon = document.getElementById("toggleIcon");

// togglePassword.addEventListener("click", function () {
//   const type =
//     passwordField.getAttribute("type") === "password" ? "text" : "password";
//   passwordField.setAttribute("type", type);

//   if (type === "password") {
//     toggleIcon.classList.remove("fa-eye-slash");
//     toggleIcon.classList.add("fa-eye");
//   } else {
//     toggleIcon.classList.remove("fa-eye");
//     toggleIcon.classList.add("fa-eye-slash");
//   }
// });

// // Handle form submission
// document
//   .getElementById("loginForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent form submission

//     const contactNumber = document.getElementById("contactNumber").value;
//     const password = document.getElementById("password").value;

//     visitors
//       .Login(contactNumber, password)
//       .then((response) => {
//         if (response.status === "200") {
//           // Store contactNumber or any other necessary data in localStorage
//           localStorage.setItem("contactNumber", contactNumber);

//           // Optionally, store session token if available from response
//           if (response.token) {
//             localStorage.setItem("sessionToken", response.token);
//           }

//           // Redirect on successful login
//           window.location.href = "visitors.php";
//         } else {
//           window.location.href = "login.php";
//           console.error("Unexpected response status:", response.status);
//         }
//       })
//       .catch((error) => {
//         console.error("Login failed:", error);
//         const alertDiv = document.getElementById("alert-div");
//         alertDiv.classList.remove("d-none");
//         alertDiv.classList.add("alert", "alert-danger");
//         alertDiv.innerHTML =
//           "Login failed. Please check your credentials and try again.";
//       });
//   });



// Check if user is logged in (i.e., localStorage has contactNumber or sessionToken)
// if (!localStorage.getItem("contactNumber") || !localStorage.getItem("sessionToken")) {
//   // Redirect to login page if not logged in
//   window.location.href = "login.php";
// }

// Toggle password visibility
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
          // Store contactNumber or any other necessary data in localStorage
          localStorage.setItem("contactNumber", contactNumber);

          // Optionally, store session token if available from response
          if (response.token) {
            localStorage.setItem("sessionToken", response.token);
          }

          // Redirect on successful login
          window.location.href = "visitors.php";
        } else {
          // Redirect to login.php if login fails
          // window.location.href = "login.php";
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





// const togglePassword = document.querySelector("#togglePassword");
// const passwordField = document.querySelector("#password");
// const toggleIcon = document.getElementById("toggleIcon");

// togglePassword.addEventListener("click", function () {
//   const type =
//     passwordField.getAttribute("type") === "password" ? "text" : "password";
//   passwordField.setAttribute("type", type);

//   if (type === "password") {
//     toggleIcon.classList.remove("fa-eye-slash");
//     toggleIcon.classList.add("fa-eye");
//   } else {
//     toggleIcon.classList.remove("fa-eye");
//     toggleIcon.classList.add("fa-eye-slash");
//   }
// });

// // Handle form submission
// document
//   .getElementById("loginForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent form submission

//     const contactNumber = document.getElementById("contactNumber").value;
//     const password = document.getElementById("password").value;

//     visitors
//       .Login(contactNumber, password)
//       .then((response) => {
//         if (response.status === "200") {
//           window.location.href = "visitors.php"; // Redirect on successful login
//         } else {
//           console.error("Unexpected response status:", response.status);
//         }
//       })
//       .catch((error) => {
//         console.error("Login failed:", error);
//         const alertDiv = document.getElementById("alert-div");
//         alertDiv.classList.remove("d-none");
//         alertDiv.classList.add("alert", "alert-danger");
//         alertDiv.innerHTML =
//           "Login failed. Please check your credentials and try again.";
//       });
//   });
