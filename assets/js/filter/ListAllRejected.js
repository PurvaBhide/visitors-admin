let instTable;
const setVisitorList = (data) => {
   const listData = data?.map((value, index) => {
    const appointmentDateTime = value?.appointmentstartDateTime ? value?.appointmentstartDateTime : "Time not Allocated yet";

    return ` <tr class="text-center">
        <td>${++index}</td>
        <td>${value?.fullName} </td>
        <td>${value?.organizationName} </td>
          <td>${value?.departmentName} </td>
        <td>${appointmentDateTime.split('T')[0]?appointmentDateTime.split('T')[0]:"Time not allocated yet"}</td>
            <td>${value?.purposeOfVisit} </td>
             <td>${value?.status?value?.status:""}</td>
             <td>${value?.meetingStatus?value?.meetingStatus:""}</td>
             <td>
          <a href="edit-visitors.php?id=${value?.id}" class="btn btn-primary">
            <i class="fa-solid fa-pen-to-square" aria-hidden="true"></i> 
          </a>
        </td>
      </tr>`;
  });
  // deletebutton
  //  <a href="javascript:void(0)" onclick=openDeleteModal(this,${value?.id}) class="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i> </a>
  $("#listInstTable").html(listData.join(""));
  instTable = new DataTable("#instTable");
  instTable.options = {
    responsive: false,
    lengthChange: false,
    autoWidth: false,
  };
  // $('#instTable').DataTable({
  //     "responsive": false,
  //     "lengthChange": false,
  //     "autoWidth": false,

  // });
};


visitors.listAllRejected()
  .then(({status, message, data,content }) => {
      if (!content == 0) {
      setVisitorList(content);
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
    // else {
    //   showAlert(
    //     "warning",
    //     "white",
    //     "Something went wrong! please try again later"
    //   );
    // }
  })
  .catch(function (message) {
    showAlert(
      "warning",
      "white",
      "Something went wrong! please try again later"
    );
    console.error(message);
  });
