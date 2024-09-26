<?php
$id = isset($_GET['id']) ? $_GET['id'] : null;
?>
<!DOCTYPE html>
<html lang="en" class="light-style layout-menu-fixed" dir="ltr" data-theme="theme-default" data-assets-path="./assets/" data-template="vertical-menu-template-free">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
  <title>Admin Dashboard</title>
  <meta name="description" content="" />
  <?php include_once "./include-common-style.php" ?>
  <link rel="stylesheet" href="./libs/datatable/dataTables.bootstrap5.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <script src="https://cdn.datatables.net/1.13.1/js/jquery.dataTables.min.js"></script>
  <script src="https://cdn.datatables.net/1.13.1/js/dataTables.bootstrap5.min.js"></script>
</head>

<body>
  <!-- Layout wrapper -->
  <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
      <!-- Menu -->
      <?php include_once "./include-sidebar.php"; ?>
      <div class="layout-page">
        <?php include_once "./include-top-nav.php" ?>
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
              <form id="DepartmentForm" action="javascript:saveDepartment();">
                <div class="card-header">
                  <h3 class="card-title"><?php echo $id ? 'Edit' : 'Add'; ?> Department</h3>
                </div>
                <div class="card-body">
                  <input type="hidden" id="departmentId" value="<?php echo $id; ?>">
                  <div class="row ">
                    <div class="col-md-6 form-group">
                      <label for="departmentName" class="form-label">Department Name</label>
                      <input type="text" name="departmentName" class="form-control" id="departmentName" placeholder="Enter Department Name" required>
                    </div>
                    <div class="col-md-6 form-group">
                      <label for="departmentemail" class="form-label">Department Email</label>
                      <input type="email" name="departmentemail" class="form-control" id="departmentemail" placeholder="Enter Department Email" required>
                    </div>
                  </div>
                  <div class="col-md-6 form-group">
                    <button type="submit" class="btn btn-primary my-2" id="submit">Save</button>
                  </div>
                </div>
              </form>

            </div>
          </div>
          <div class="mt-3"></div>
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
                      <th class="text-center">Department Name</th>
                      <th class="text-center">Department Email</th>
                      <th class="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody id="listInstTable">

                  </tbody>
                </table>
              </div>
              <!-- / Content -->
              <!-- Footer -->
              <?php include_once "./include-copy-right.php" ?>
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
      <?php include_once "./include-common-scripts.php" ?>
      <script src="assets/js/parseData.js"></script>
      <script src="./assets/js/filter/listAllDepartment.js"></script>
      <script src="./libs/datatable/datatables.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>
      <script>
        function convertToCSV(data) {
          return Papa.unparse(data, {
            header: true,
          });
        }

        function downloadCSV(csvData) {
          var blob = new Blob([csvData], {
            type: "text/csv;charset=utf-8;"
          });
          var link = document.createElement("a");
          if (link.download !== undefined) {
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", "department.csv");
            link.style.visibility = "hidden";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }
        }

        $("#downloadCsv").on("click", function() {
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

          var csvData = convertToCSV(tableData);
          downloadCSV(csvData);
        });
      </script>
      <script>
        // editVisitor();
        const id = getQueryParamValue("id");
      </script>
      <script>
        // Wait for DOM to load
        document.addEventListener("DOMContentLoaded", function() {
          const departmentId = document.getElementById("departmentId").value;

          if (departmentId) {
            fetchDepartmentData(departmentId);
          }
        });

        function fetchDepartmentData(id) {
          fetch(`http://localhost:8081/department/${id}`)
            .then(response => response.json())
            .then(responseData => {
              const data = responseData.data;
              if (data) {
                document.getElementById("departmentName").value = data.departmentName;
                document.getElementById("departmentemail").value = data.departmentemail;
              } else {
                alert("No department data found.");
              }
            })
            .catch((error) => {
              alert("An error occurred while fetching the department details.");
              console.error("Error:", error);
            });
        }

        function saveDepartment() {
          const departmentId = document.getElementById("departmentId").value;
          const departmentName = document.getElementById("departmentName").value;
          const departmentemail = document.getElementById("departmentemail").value;

          const payload = {
            departmentName,
            departmentemail,
          };

          const method = departmentId ? "PUT" : "POST";
          const url = departmentId ?
            `http://localhost:8081/update/department/${departmentId}` :
            "http://localhost:8081/create/department";

          fetch(url, {
              method,
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(payload),
            })
            .then((response) => response.json())
            .then((data) => {
              alert(`Department ${departmentId ? "updated" : "added"} successfully!`);
              window.location.href = "adddepartment.php"; // Redirect after saving
            })
            .catch((error) => {
              alert(`An error occurred while ${departmentId ? "updating" : "adding"} the department.`);
              console.error("Error:", error);
            });
        }
      </script>
</body>

</html>