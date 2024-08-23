<!DOCTYPE html>
<html
  lang="en"
  class="light-style layout-menu-fixed"
  dir="ltr"
  data-theme="theme-default"
  data-assets-path="./assets/"
  data-template="vertical-menu-template-free"
>
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
    />

    <title>Admin dashboard</title>

    <meta name="description" content="" />
  <?php include_once("./include-common-style.php") ?>
 <style>
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
}

.card {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-bottom: 20px;
    width: auto; /* Adjust according to your layout 
    box-sizing: border-box;
}

.card h2 {
    font-size: 1.2rem;
    margin-top: 0;
}

.card p {
    margin: 0 0 10px;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

li {
    margin-bottom: 10px;
}
</style>
  </head>

  <body>
    <!-- Layout wrapper -->
    <div class="layout-wrapper layout-content-navbar">
      <div class="layout-container">
        <!-- Menu -->
      <?php
        include_once("./include-sidebar.php"); 
       ?>
    
        <!-- / Menu -->

        <!-- Layout container -->
        <div class="layout-page">
        <?php include_once("./include-top-nav.php") ?>
   
          <!-- Content wrapper -->
          <div class="content-wrapper">
            <!-- Content -->

            <div class="container-xxl flex-grow-1 container-p-y">
            <div class="d-flex justify-content-end">
              <nav aria-label="breadcrumb text-end">
                <ol class="breadcrumb breadcrumb-style1">
                  <li class="breadcrumb-item">
                    <a href="./index.php" class="active">Home</a>
                  </li>
            
                </ol>
              </nav>
            </div>
            <!--<div class="card">-->
              <!-- content goes here -->
            <!--<div class="container" id="userDetails"></div>-->
            <!--</div>-->
            <!--</div>-->
<div class="container-fluid" id="userDetails"></div>

            <!-- / Content -->

            <!-- Footer -->
          <?php include_once("./include-copy-right.php") ?>
            <!-- / Footer -->

            <div class="content-backdrop fade"></div>
          </div>
          <!-- Content wrapper -->
        </div>
        <!-- / Layout page -->
      </div>

      <!-- Overlay -->
      <div class="layout-overlay layout-menu-toggle"></div>
    </div>
    <!-- / Layout wrapper -->

  

    <!-- Core JS -->
    <!-- build:js assets/vendor/js/core.js -->
    <?php include_once("./include-common-scripts.php") ?>
    <script src="assets/js/parseData.js"></script>

<script>

const userString = localStorage.getItem('user');
const loggedInUser = JSON.parse(userString);
const userId = loggedInUser.id;
console.log(userId, "userId");
// Check if user ID exists
if (userId) {
    const apiUrl = `https://triuttarakhand.in/api-exam-portal/public/getUserDetails/${userId}`;

    // Fetch user details
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const userDetails = data.data;
            const enrolledExams = userDetails.enrolled_exams;

            // Create card for user details
            const userDetailsCard = document.createElement('div');
            userDetailsCard.classList.add('card', 'mb-3');
            userDetailsCard.innerHTML = `
                <div class="card-body">
                    <h2 class="card-title">User Details</h2>
                    <p class="card-text">Name: ${userDetails.f_name} ${userDetails.m_name} ${userDetails.l_name}</p>
                    <p class="card-text">Email: ${userDetails.email}</p>
                    <p class="card-text">Contact Number: ${userDetails.contact_number}</p>
                    <p class="card-text">Institute Name: ${userDetails.institute_name}</p>
                </div>
            `;
            document.getElementById('userDetails').appendChild(userDetailsCard);

            // Create cards for enrolled exams
            enrolledExams.forEach(exam => {
                const examCard = document.createElement('div');
                examCard.classList.add('card', 'mb-3');
                examCard.innerHTML = `
                    <div class="card-body">
                        <h2 class="card-title">${exam.exam_title}</h2>
                        <p class="card-text">Created At: ${exam.created_at}</p>
                    </div>
                `;
                const questionsList = document.createElement('ul');
                // questionsList.classList.add('list-group', 'list-group-flush');
                // exam.questions.forEach(question => {
                //     const optionText = question.options.find(option => option.is_correct === "1").option_text;
                //     const questionItem = document.createElement('li');
                //     questionItem.classList.add('list-group-item');
                //     questionItem.innerHTML = `
                //         <p>${question.question_text}</p>
                //         <p>Correct Answer: ${optionText}</p>
                //     `;
                //     questionsList.appendChild(questionItem);
                // });
                examCard.appendChild(questionsList);
                document.getElementById('userDetails').appendChild(examCard);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
} else {
    console.error('User ID not found in local storage.');
}

</script>

<script src="./assets/js/filter/checkLogin.js"></script>
  </body>
</html>
