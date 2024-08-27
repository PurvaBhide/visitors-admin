let instTable;
const setVisitorList = (data) => {
  console.log("From List Visitor",data);

  const listData = data?.map((value, index) => {
    const appointmentDateTime = value?.appointmentDateTime ? value?.appointmentDateTime : "Time not Allocated yet";

    return ` <tr class="text-center">
        <td>${++index}</td>
        <td>${value?.fullName} </td>
        <td>${value?.organizationName} </td>
          <td>${value?.departmentName} </td>
          <td>${appointmentDateTime}</td>
            <td>${value?.purposeOfVisit} </td>
             
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
          .then(({status,content }) => {
            if (!content == 0) {
              console.log(content,"prevouyytttsds")
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
            //     console.log(content,"prevouyytttsds")
            //       setVisitorList(content);
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
