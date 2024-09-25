<!DOCTYPE html>
<html lang="en" class="light-style layout-menu-fixed" dir="ltr" data-theme="theme-default" data-assets-path="./assets/" data-template="vertical-menu-template-free">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
  <title>Admin Dashboard</title>
  <meta name="description" content="" />
  <?php include_once "./include-common-style.php"?>
</head>

<body>
  <!-- Layout wrapper -->
  <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
      <!-- Menu -->
      <?php include_once "./include-sidebar.php";?>
      <div class="layout-page">
        <?php include_once "./include-top-nav.php"?>
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
                    <a href="./visitors.php">Visitor</a>
                  </li>
                  <li class="breadcrumb-item active">Update</li>
                </ol>
              </nav>
            </div>
            <div class="card">
              <!-- content goes here -->
              <form id="visitorForm" action="javascript:editVisitor();">
                <div class="card-header">
                  <h3 class="card-title">Update Visitor</h3>
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                  <div class="row ">
                    <div class="col-md-3 form-group">
                      <label for="visitorName" class="form-label">Visitor Name</label>
                      <input type="text" name="fullName" class="form-control" id="visitorName" value="Visitor Name" readonly>
                    </div>
                    <div class="col-md-3 form-group">
                      <label for="contactNumber" class="form-label">Contact Number</label>
                      <input type="number" name="contactNumber" class="form-control" id="contactNumber" value="Contact Number" readonly>
                    </div>
                  
                  </div>
                
<div class="col-md-6 form-group">
<button type="submit" class="btn btn-primary my-2" id="submit">Submit</button>
</div>

              </form>
            </div>
          </div>
          <!-- / Content -->
          <!-- Footer -->
          <?php include_once "./include-copy-right.php"?>
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
  <!-- build:js assets/vendor/js/core.js -->
  <?php include_once "./include-common-scripts.php"?>
  <script src="assets/js/parseData.js"></script>
  <!-- <script src="assets/js/filter/editVisitor.js"></script> -->
  <!-- <script src="./assets/js/filter/checkLogin.js"></script> -->
  <!-- <script>
    document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    editVisitor();
});

  </script> -->
  <script>
    // editVisitor();
    const id = getQueryParamValue("id");

  </script>
</body>

</html>