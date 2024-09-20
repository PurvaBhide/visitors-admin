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
            <td>${value?.meetingStatus?value?.meetingStatus:""}
             
        </td>
      </tr>`;
  });
 
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



$(document).ready(function() {
  function fetchAndUpdateData() {
        const startDate = $("#startdate").val();
      const endDate = $("#enddate").val();

      if (!startDate || !endDate) {
          showAlert("warning", "white", "Please select both start and end dates.");
          return;
      }

         const formattedStartDate = new Date(startDate).toISOString();
      const formattedEndDate = new Date(endDate).toISOString();

       visitors.listAllprevious(formattedStartDate, formattedEndDate)
          .then(({content }) => {
            if (!content == 0) {
                            setVisitorList(content);
            } else {
                showAlert("success", "white", "No records found");
                let emptyHtml = `
                    <tr class="text-center">
                        <td colspan="6">No records found</td>
                    </tr>
                `;
                $("#listInstTable").html(emptyHtml);
            }
            // if (status === 200 && content.length > 0) {
            //               //       setVisitorList(content);
            //   } else {
            //       showAlert("success", "white", "No records found");
            //       let emptyHtml = `
            //           <tr class="text-center">
            //               <td colspan="6">No records found</td>
            //           </tr>
            //       `;
            //       $("#listInstTable").html(emptyHtml);
            //   }
          })
          .catch(function (message) {
              showAlert(
                  "warning",
                  "white",
                  "Something went wrong! Please try again later."
              );
              console.error(message);
          });
  }

  $("#startdate, #enddate").on("change", function() {
      fetchAndUpdateData();
  });
});
