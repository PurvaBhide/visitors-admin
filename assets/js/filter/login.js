
document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault(); 
 
  const contactNumber = document.getElementById('contactNumber').value;
  const password = document.getElementById('password').value;

  visitors.Login(contactNumber, password)
    .then(response => {
          if (response.status === "200") {
        window.location.href = 'visitors.php'; 
      } else {
               console.error("Unexpected response status:", response.status);
      }
    })
    .catch(error => {
      console.error("Login failed:", error);
      const alertDiv = document.getElementById('alert-div');
      alertDiv.classList.remove('d-none');
      alertDiv.classList.add('alert', 'alert-danger');
      alertDiv.innerHTML = "Login failed. Please check your credentials and try again.";
    });
});
