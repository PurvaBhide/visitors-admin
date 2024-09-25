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
          <a href="javascript:void(0)" onclick=openDeleteModal(this,${value?.id}) class="btn btn-danger">Delete<i class="fa fa-trash" aria-hidden="true"></i> </a>
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


visitors.listallDepartments()
  .then(({data }) => {
    console.log(data,"content")
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
  .catch(function (message) {
    // showAlert(
    //   "warning",
    //   "white",
    //   "Something went wrong! please try again later"
    // );
    // console.error(message);
  });
