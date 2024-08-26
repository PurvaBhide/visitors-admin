<!DOCTYPE html>
<html lang="en" class="light-style layout-menu-fixed" dir="ltr" data-theme="theme-default" data-assets-path="./assets/" data-template="vertical-menu-template-free">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />

  <title>Admin dashboard</title>

  <meta name="description" content="" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <?php include_once("./include-common-style.php") ?>
  <link rel="stylesheet" href="./libs/datatable/dataTables.bootstrap5.min.css">
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
                    <a href="./visitiors.php">Visitors</a>
                  </li>
                  <li class="breadcrumb-item active">List</li>
                </ol>
              </nav>
            </div>
            <div class="card">
              <!-- content goes here -->

              <div class="card-body">
                <div id="alert-div" class="mb-3 col-md-8 mx-auto d-none"></div>

                <div class="col-12 mb-2 d-flex justify-content-end">
                  <button id="downloadCsv" class="btn btn-primary">
                    <i class="fas fa-download"></i> Download
                  </button>
                </div>

                <div class="" style="overflow-x: auto;">
                  <table id="instTable" class="table table-bordered table-responsive">
                    <thead class="  ">
                      <tr>
                        <th class="text-center">Sr. No.</th>
                        <th class="text-center">Visitor Name</th>
                        <th class="text-center">Organization Name</th>
                        <th class="text-center">Department Name</th>
                        <th class="text-center">Appoinment Date/Time</th>
                        <th class="text-center">Purpose of Visit</th>
                        <th class="text-center">Status</th>
                        <th class="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody id="listInstTable">

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <?php
          include_once("./include-delete-modal.php")
          ?>
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
  <script src="./libs/datatable/datatables.min.js"></script>
  <script src="assets/js/parseData.js"></script>

  <script src="./assets/js/filter/checkLogin.js"></script>
  <script src="./assets/js/filter/deleteInstitute.js"></script>
  <script src="./assets/js/filter/ListAllVisitors.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>
  <script>
    // Function to convert the table data to CSV format
    function convertToCSV(data) {
      return Papa.unparse(data, {
        header: true,
      });
    }

    // Function to download the CSV file
    function downloadCSV(csvData) {
      var blob = new Blob([csvData], {
        type: "text/csv;charset=utf-8;"
      });
      var link = document.createElement("a");
      if (link.download !== undefined) {
        var url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", "institute.csv");
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }

    // Event listener for the download button
    $("#downloadCsv").on("click", function() {
      // Extract data from the table and convert it to CSV
      var tableData = [];
      $("#listInstTable tr").each(function() {
        var rowData = [];
        $(this)
          .find("td")
          .each(function() {
            rowData.push($(this).text());
          });
        tableData.push(rowData);
      });

      // Download the CSV file
      var csvData = convertToCSV(tableData);
      downloadCSV(csvData);
    });
  </script>
  <script>
    $(document).ready(function() {
      // let table = new DataTable('#instTable');
    });
  </script>
</body>

</html>