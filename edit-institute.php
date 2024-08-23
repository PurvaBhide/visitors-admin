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
                  <li class="breadcrumb-item active">Update</li>
                </ol>
              </nav>
            </div>
            <div class="card">
              <!-- content goes here -->
              <form id="instituteForm" action="">
                <!-- SELECT2 EXAMPLE -->

                <div class="card card-default">
                  <div class="card-header">
                    <h3 class="card-">Update institute </h3>
                  </div>
                  <!-- /.card-header -->
                  <div class="card-body">
                    <div class="row pt-3">
                      <div class="col-md-4 form-group">
                        <label for="" class="form-label">Institute Name<sup class="text-danger">*</sup></label>
                        <input type="text" name="name" class="form-control" id="name" placeholder="Institute Name" required>
                      </div>
                      <div class="col-md-4 form-group">
                        <label for="" class="form-label">Institute Address<sup class="text-danger">*</sup></label>
                        <input type="text" name="address" class="form-control" id="address" placeholder="Institute Address " required>
                      </div>
                      <!--<div class="col-md-4">-->
                      <!--  <div class="form-group">-->
                      <!--    <label for="state" class="form-label ">State<sup class="text-danger">*</sup></label>-->
                      <!--    <select name="state" class="form-control" id="state">-->

                      <!--    </select>-->
                      <!--  </div>-->
                      <!--</div>-->
                      <!--<div class="col-md-4 ">-->
                      <!--  <div class="form-group">-->
                      <!--    <label for="" class="form-label">District<sup class="text-danger">*</sup></label>-->
                      <!--    <select name="district" class="form-control" id="district">-->
                      <!--      <option value=''>Select</option>-->
                      <!--    </select>-->
                      <!--  </div>-->
                      <!--</div>-->
                      <!--<div class="col-md-4">-->
                      <!--  <div class="form-group">-->
                      <!--    <label>Block <sup class="text-danger">*</sup></label>-->
                      <!--    <select name="block" class="form-control" id="block">-->
                      <!--      <option value="">Select</option>-->
                      <!--    </select>-->
                      <!--  </div>-->
                      <!--</div>-->
                      <!-- <div class="col-md-4">
                        <div class="form-group">
                          <label>Village <sup class="text-danger">*</sup></label>
                          <select name="village" class="form-control" id="village">
                            <option value="">Select</option>
                          </select>
                        </div>
                      </div> -->



                    </div>
                    <hr>

                    <div class="card-header">
                      <h3 class="card-">Institute Admin </h3>
                    </div>
                    <div class="row">
                      <div class="col-md-4 form-group">
                        <label for="" class="form-label">First Name<sup class="text-danger">*</sup></label>
                        <input type="text" name="f_name" class="form-control" id="f_name" placeholder="First  Name" required>
                      </div>

                      <div class="col-md-4 form-group">
                        <label for="" class="form-label">Last Name</label>
                        <input type="text" name="l_name" class="form-control" id="l_name" placeholder="Last Name" required>
                      </div>
                      <div class="col-md-4 form-group">
                        <label for="" class="form-label">Email<sup class="text-danger">*</sup></label>
                        <input type="email" name="email" class="form-control" id="email" placeholder="example@mail.com" required>
                      </div>
                      <div class="col-md-4 form-group">
                        <label for="" class="form-label">Contact Number<sup class="text-danger">*</sup></label>
                        <input type="text" name="contact_number" class="form-control" id="contact_number" placeholder="Contact Number" required>
                      </div>
                      <!-- <div class="col-md-4 form-group">
                        <label for="" class="form-label">Password<sup class="text-danger">*</sup></label>
                        <input type="password" name="password" class="form-control" id="password" placeholder="Password" required>
                      </div>
                      <div class="col-md-4 form-group">
                        <label for="" class="form-label">Confirm Password<sup class="text-danger">*</sup></label>
                        <input type="password" name="Cpassword" class="form-control" id="Cpassword" placeholder="Confirm Password" required>
                      </div> -->
                    </div>
                    <div class="row">
                      <div class="col-md-12 d-flex justify-content-center" id="">
                        <button type="submit" class="btn btn-primary my-2" id="submit"> Update</button>
                      </div>
                    </div>
                    <div id="alert-div" class="mb-3 mt-2 col-md-8 mx-auto  d-none"></div>
                  </div>
              </form>
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
  <script src="assets/js/parseData.js"></script>
  <script src="./assets/js/filter/checkLogin.js"></script>
  <script>
    const id = getQueryParamValue("id");
  </script>
  <script src="./assets/js/filter/editInstitute.js"></script>
  <script src="./assets/js/filter/registerInstitute.js"></script>

</body>

</html>