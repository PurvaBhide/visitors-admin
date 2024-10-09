<!DOCTYPE html>


<html lang="en" class="light-style customizer-hide" dir="ltr" data-theme="theme-default" data-assets-path="../assets/" data-template="vertical-menu-template-free">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />

  <title>Admin Dashboard</title>

  <meta name="description" content="" />
  <?php include_once "./include-common-style.php" ?>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

</head>

<body>
  <!-- Content -->

  <div class="container-xxl">
    <div class="authentication-wrapper authentication-basic container-p-y">
      <div class="authentication-inner">
        <!-- Register -->
        <div class="card col-10 mx-auto col-md-6 col-lg-4">
          <div class="card-body">
            <!-- Logo -->
            <div class="app-brand justify-content-center">
              <a href="https://kitintellect.tech/visitors/" class="app-brand-link gap-2">
                <span class="app-brand-logo demo">
                  <img src="./assets/img/portal-logo.png" alt="">
                </span>
              </a>
            </div>
            <!-- /Logo -->

            <form id="loginForm" class="mb-3" method="POST">
              <div class="mb-3">
                <label for="contactNumber" class="form-label">Contact Number</label>
                <input type="number" class="form-control" id="contactNumber" name="contactNumber" placeholder="Enter your contact number" required />
              </div>
              <div class="mb-3">
                <div class="d-flex justify-content-between">
                  <label class="form-label" for="password">Password</label>
                </div>
                <div class="input-group">
                  <input type="password" class="form-control" id="password" name="password" placeholder="Password" required />
                  <div class="input-group-append">
                    <button type="button" id="togglePassword" class="btn btn-outline-secondary">
                      <i class="fas fa-eye" id="toggleIcon"></i>
                    </button>
                  </div>
                </div>

              </div>

              <div id="alert-div" class="mb-3 col-12 d-none"></div>

              <div class="mb-3">
                <button class="btn btn-primary d-grid w-100" type="submit">Sign in</button>
              </div>
            </form>


          </div>
        </div>
        <!-- /Register -->
      </div>
    </div>
  </div>

  <!-- / Content -->


  <!-- Core JS -->
  <?php
  include_once './include-common-scripts.php'
  ?>
  <script src="./assets/js/filter/login.js"></script>

</body>

</html>