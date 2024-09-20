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
                    <div class="col-md-3 form-group">
                      <label for="emailAddress" class="form-label">Email Address</label>
                      <input type="email" name="emailAddress" class="form-control" id="emailAddress" value="john.doe@example.com" readonly>
                    </div>
                    <div class="col-md-3 form-group">
                      <label for="age" class="form-label">Age</label>
                      <input type="number" name="age" class="form-control" id="age" value="Age" readonly>
                    </div>
                  </div>
                  <div class="row pt-3">
                    <div class="col-md-3 form-group">
                      <label for="gender" class="form-label">Gender</label>
                      <input type="text" name="gender" class="form-control" id="gender" value="Gender" readonly>
                    </div>
                    <div class="col-md-3 form-group">
                      <label for="organizationName" class="form-label">Organization Name</label>
                      <input type="text" name="organizationName" class="form-control" id="organizationName" value="Organization Name" readonly>
                    </div>
                    <div class="col-md-3 form-group">
                      <label for="designation" class="form-label">Designation</label>
                      <input type="text" name="designation" class="form-control" id="designation" value="Designation" readonly>
                    </div>
                    <div class="col-md-3 form-group">
                      <label for="departmentName" class="form-label">Department Name</label>
                      <input type="text" name="departmentName" class="form-control" id="departmentName" value="Department Name" readonly>
                    </div>

                  </div>
                  <div class="row pt-3">
                  <div class="col-md-3 form-group">
                      <label for="purposeOfVisit" class="form-label">Purpose of Visit</label>
                      <input type="text" name="purposeOfVisit" class="form-control" id="purposeOfVisit" value="Purpose of Visit" readonly>
                    </div>
                    <div class="col-md-3 form-group">
                      <label for="role" class="form-label">Role</label>
                      <input type="text" name="role" class="form-control" id="role" value="role" readonly>
                    </div>
                    <div class="col-md-6 form-group">
                      <label for="officialAddress" class="form-label">Official Address</label>
                      <input type="text" name="officialAddress" class="form-control" id="officialAddress" value="Address" readonly>
                    </div>
                    <!-- <div class="col-md-3 form-group">
                      <label for="grievanceDetails" class="form-label">Grievance Details</label>
                      <input type="text" name="grievanceDetails" class="form-control" id="grievanceDetails" value="Grievance Detail" readonly>
                    </div> -->
</div>
                  <div class="row pt-3">
                  <div class="col-md-3 form-group">
                      <label for="grievanceDetails" class="form-label">Grievance Details</label>
                      <input type="text" name="grievanceDetails" class="form-control" id="grievanceDetails" value="Grievance Detail" readonly>
                    </div>
                    <div class="col-md-3 form-group">
                      <label for="appointmentstartDateTime" class="form-label">Appointment Date</label>
                      <input type="date" name="appointmentstartDateTime" class="form-control" id="appointmentstartDateTime" required>
                    </div>
                    <div class="col-md-3 form-group">
                      <label for="appointmentendDateTime" class="form-label">Meeting Start Time</label>
                      <div class="input-group">
                        <input type="text" name="appointmentendDateTime" class="form-control" id="appointmentendDateTime" placeholder="HH:MM" required>
                        <select name="timePeriod" class="form-control" id="timePeriod" required>
                          <option value="AM">AM</option>
                          <option value="PM">PM</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-md-3 form-group">

                      <label for="meetingDuration" class="form-label">Select Meeting Slot</label>
                      <select name="meetingDuration" class="form-control" id="meetingDuration" required>
                        <option value="15">15 Minutes</option>
                        <option value="30">30 Minutes</option>
                        <option value="45">45 Minutes</option>
                        <option value="60">60 Minutes</option>
                      </select>
                    </div>
                    <!-- <div class="col-md-3 form-group d-flex align-items-end">
                      <button type="button" class="btn btn-primary" id="checkAvailability">Check Slot Availability</button>
                    </div> -->


                  </div>

                                 <div class="row pt-3">

                                                     <div class="col-md-3 form-group">
                      <label for="status" class="form-label">Request Status</label>
                      <select name="status" id="status" class="form-control">
                        <option value="Pending" selected>Pending</option>
                        <option value="Approved">Approved</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    </div>
                    <div class="col-md-3 form-group">
                      <label for="meetingStatus" class="form-label">Meeting Status</label>
                      <select name="meetingStatus" id="meetingStatus" class="form-control">
                        <option value="Pending" selected>Pending</option>
                        <option value="Done">Done</option>
                        <option value="Unresolved">Unresolved</option>
                        <option value="Rescheduled">Rescheduled</option>
                      </select>
                    </div>
                    <div class="col-md-3 form-group">
                      <label for="adminRemark" class="form-label">Admin Remark</label>
                      <input type="text" name="adminRemark" class="form-control" id="adminRemark" >
                    </div>
                    <div class="col-md-3 form-group">
                      <label for="remark" class="form-label">Minister Remark</label>
                      <input type="text" name="remark" class="form-control" id="remark" >
                    </div>
                  </div>

                  <div class="row mt-4">
                    <div class="col-md-12 d-flex justify-content-center">
                      <button type="submit" class="btn btn-primary my-2" id="submit">Update</button>
                    </div>
                  </div>
                  <div id="alert-div" class="mb-1 mt-2 col-md-8 mx-auto d-none"></div>
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
  <script src="assets/js/filter/editVisitor.js"></script>
  <!-- <script src="./assets/js/filter/checkLogin.js"></script> -->
  <script>
    document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    editVisitor();
});

  </script>
  <script>
    // editVisitor();
    const id = getQueryParamValue("id");

    // document.getElementById('checkAvailability').addEventListener('click', function() {
    //   let timeValue = document.getElementById('appointmentendDateTime').value;
    //   const timePeriod = document.getElementById('timePeriod').value;

    //   if (timeValue) {
    //     // Split the input time
    //     let [hours, minutes] = timeValue.split(':');
    //     hours = parseInt(hours);

    //     // Convert to 24-hour format if necessary
    //     if (timePeriod === 'PM' && hours < 12) {
    //       hours += 12;
    //     } else if (timePeriod === 'AM' && hours === 12) {
    //       hours = 0;
    //     }

    //     const finalTime = `${hours.toString().padStart(2, '0')}:${minutes}`;
    //     const meetingDuration = document.getElementById('meetingDuration').value;
    //     const appointmentDate = document.getElementById('appointmentDate').value;
    //     const checkSlotAvailabilityUrl = `http://localhost:8080/api/visitor/checkSlotAvailability?appointmentDate=${appointmentDate}&appointmentendDateTime=${finalTime}&meetingDuration=${meetingDuration}`;

    //     // Fetch logic or any other logic to handle the request
    //   }
    // });


  </script>
</body>

</html>