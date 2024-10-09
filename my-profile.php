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

                <!-- / Navbar -->
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

                                    <li class="breadcrumb-item active">My Profile</li>
                                </ol>
                            </nav>
                        </div>

                        <div class="card">
                            <!-- content goes here -->
                            <form id="studentsForm" action="">
                                <!-- SELECT2 EXAMPLE -->



                                <div class="card card-default">
                                    <div class="card-header">
                                        <h3 class="text-center">My Profile</h3>
                                    </div>
                                    <!-- /.card-header -->
                                    <div class="card-body mt-2">
                                        <div class="row pt-3">

                                            <!-- <div class="col-md-4 mb-3">
                                                <label for="institute_id" class="form-label ">Institute<sup class="text-danger">*</sup></label>
                                                <select name="institute_id" class="form-control" id="institute_id">
                                                </select>
                                            </div> -->
                                            <div class="col-md-4 mb-3 form-group">
                                                <label for="" class="form-label">First Name<sup class="text-danger">*</sup></label>
                                                <input type="text" name="f_name" class="form-control" id="f_name" placeholder="First Name" readonly>
                                            </div>
                                            <div class="col-md-4 mb-3 form-group">
                                                <label for="" class="form-label">Middle Name<sup class="text-danger">*</sup></label>
                                                <input type="text" name="m_name" class="form-control" id="m_name" placeholder="Middle Name" readonly>
                                            </div>
                                            <div class="col-md-4 mb-3 form-group">
                                                <label for="" class="form-label">Last Name<sup class="text-danger">*</sup></label>
                                                <input type="text" name="l_name" class="form-control" id="l_name" placeholder="Middle Name" readonly>
                                            </div>
                                            <div class="col-md-4 mb-3 form-group">
                                                <label for="" class="form-label">Email<sup class="text-danger">*</sup></label>
                                                <input type="text" name="email" class="form-control" id="email" placeholder="Middle Name" readonly>
                                            </div>
                                            <div class="col-md-4 mb-3 form-group">
                                                <label for="" class="form-label">Contact Number<sup class="text-danger">*</sup></label>
                                                <input type="text" name="contact_number" class="form-control" id="contact_number" placeholder="Middle Name" readonly>
                                            </div>
                                            <div class="col-md-4 mb-3 form-group">
                                                <label for="" class="form-label">Role<sup class="text-danger">*</sup></label>
                                                <input type="text" name="role_name" class="form-control" id="role_name" placeholder="Middle Name" readonly>
                                            </div>
                                        </div>

                                        <div id="alert-div" class="mb-3 col-md-8 mx-auto  d-none"></div>

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

    <!-- page scripts -->
    <script src="./assets/js/filter/checkLogin.js"></script>
    <script src="./assets/js/filter/list-institute-select.js"></script>
    <!-- <script src="./assets/js/filter/myProfile.js"></script> -->
    <script>
        const id = getQueryParamValue("id");
        appendInstitutes()
        // myProfile()
    </script>
    <script src="./assets/js/filter/register-students.js"></script>
    <script src="./assets/js/filter/student/tableData.js"></script>
    <script>
        // Check if user is logged in by looking for stored session token or contactNumber in localStorage
        if (!localStorage.getItem("contactNumber") ) {
            // If not logged in, redirect to login.php
            window.location.href = "login.php";
        }
    </script>
</body>

</html>