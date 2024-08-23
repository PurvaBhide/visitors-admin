<!DOCTYPE html>
<html lang="en" class="light-style layout-menu-fixed" dir="ltr" data-theme="theme-default" data-assets-path="./assets/" data-template="vertical-menu-template-free">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />

  <title>Admin dashboard</title>

  <meta name="description" content="" />
  <?php include_once("./include-common-style.php") ?>
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
                      <a href="./index.php">Home</a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="./list-institute.php">Institute</a>
                    </li>
                    <li class="breadcrumb-item active">Register</li>
                  </ol>
                </nav>
              </div>
              <div class="card">
                <!-- content goes here -->
              </div>
            </div>
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
</body>

</html>