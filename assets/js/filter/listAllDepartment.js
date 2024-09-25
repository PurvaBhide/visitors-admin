let instTable;
const setDepartmentList = (data) => {
  const listData = data?.map((value, index) => {
    return ` <tr class="text-center">
        <td>${++index}</td>
        <td>${value?.departmentName} </td>
        <td>${value?.departmentemail} </td>
                                <td>
          <a href="adddepartment.php?id=${value?.id}" class="btn btn-primary">
          Edit
            <i class="fa-solid fa-pen-to-square" aria-hidden="true"></i> 
          </a>
          <a href="javascript:void(0)" onclick=openDeleteModal(this,${
            value?.id
          }) class="btn btn-danger">Delete<i class="fa fa-trash" aria-hidden="true"></i> </a>
        </td>
      </tr>`;
  });
  // deletebutton
  //
  $("#listInstTable").html(listData.join(""));
  instTable = new DataTable("#instTable");
  instTable.options = {
    responsive: false,
    lengthChange: false,
    autoWidth: false,
  };
};

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

function addDepartment() {
  // Get form data
  const departmentName = document.getElementById("departmentName").value;
  const departmentemail = document.getElementById("departmentemail").value;

  // Create payload for API
  const payload = {
    departmentName: departmentName,
    departmentemail: departmentemail,
  };

  // Send a POST request to your API
  fetch("http://localhost:8081/create/department", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle success response
      alert("Department added successfully!");
      console.log("Success:", data);

      // Immediately refresh the department list
      refreshDepartmentList();
    })
    .catch((error) => {
      // Handle error response
      alert("An error occurred while adding the department.");
      console.error("Error:", error);
    });
}

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
