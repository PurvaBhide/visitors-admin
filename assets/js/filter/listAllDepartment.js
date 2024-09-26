let instTable;
let currentDeleteId; // To keep track of the department ID to be deleted

// Function to set the department list in the table
const setDepartmentList = (data) => {
  const listData = data?.map((value, index) => {
    return `
      <tr class="text-center">
        <td>${++index}</td>
        <td>${value?.departmentName}</td>
        <td>${value?.departmentemail}</td>
        <td>
          <a href="adddepartment.php?id=${value?.id}" class="btn btn-primary">
            <i class="fa-solid fa-pen-to-square" aria-hidden="true"></i>
          </a>
          <a href="javascript:void(0)" onclick="confirmDelete('${
            value?.id
          }')" class="btn btn-danger">
<i class="fa fa-trash" aria-hidden="true"></i>
          </a>
        </td>
      </tr>`;
  });

  // Insert generated rows into the table
  $("#listInstTable").html(listData.join(""));

  // Initialize DataTable
  instTable = new DataTable("#instTable");
  instTable.options = {
    responsive: false,
    lengthChange: false,
    autoWidth: false,
  };
};

function confirmDelete(id) {
  const confirmation = confirm(
    "Are you sure you want to delete this department?"
  );
  if (confirmation) {
    deleteDepartment(id);
  }
}

// Function to delete a department
function deleteDepartment(id) {
  fetch(`http://localhost:8081/delete/department/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Failed to delete department");
      }
    })
    .then((data) => {
      alert("Department deleted successfully!");
      refreshDepartmentList(); // Refresh the department list after deletion
    })
    .catch((error) => {
      alert("An error occurred while deleting the department.");
      console.error("Error:", error);
    });
}

visitors
  .listallDepartments()
  .then(({ data }) => {
    console.log(data, "content");
    if (!data == 0) {
      setDepartmentList(data);
      return;
    } else {
      // } else if (status == 204) {
      showAlert("success", "white", "No records found");
      let emptyHtml = `
        <tr class="text-center">
        <td colspan="5">No records found</td>
        </tr>
        `;
      $("#listInstTable").html(emptyHtml);

      return;
    }
  })
  .catch(function (message) {});

function refreshDepartmentList() {
  visitors
    .listallDepartments()
    .then(({ data }) => {
      console.log(data, "content");
      if (data && data.length > 0) {
        setDepartmentList(data);
      } else {
        showAlert("success", "white", "No records found");
        let emptyHtml = `
            <tr class="text-center">
              <td colspan="5">No records found</td>
            </tr>`;
        $("#listInstTable").html(emptyHtml);
      }
    })
    .catch(function (message) {
      alert("An error occurred while fetching the department list.");
      console.error(message);
    });
}
