let batchesTable;
const setbatchesList = ((data) => {
    const listData = data?.map((value, index) => {
        return ` <tr class="text-center">
        <td>${++index}</td>
        <td>${value?.batch_name}</td>
        <td>${value?.institute}</td>
        <td>${value?.year}</td>
        <td class="text-center">
          <a href="edit-batches.php?id=${value?.id}" class="mt-2 btn btn-primary"><i class="fas fa-edit    "></i> </a>
          <a href="javascript:void(0)" onclick=openDeleteModal(this,${value?.id}) class="mt-2 btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i> </a>
        </td>
      </tr>`;
    })
    if ($.fn.DataTable.isDataTable('#listBatchesTable')) {
        $('#listBatchesTable').DataTable().destroy();
    }
    $("#listBatchesData").html(listData.join(""))
    batchesTable = new DataTable('#listBatchesTable');

    batchesTable.options = {
        "responsive": false,
        "lengthChange": false,
        "autoWidth": false,
    }


})
const getBatchesList = (() => {

    let instituteId = $("#institute_id").val();
    instituteId == null || instituteId == "" ? instituteId = 0 : instituteId;

    batchesApi.listAll(instituteId).then(({ status, message, data }) => {
        if (status == 200) {
            setbatchesList(data)
            return;
        } else if (status == 204) {
            showAlert("success", "white", "No records found")
            let emptyHtml = `
        <tr class="text-center">
        <td colspan="7">No records found</td>
        </tr>
        `;
            if ($.fn.DataTable.isDataTable('#listBatchesTable')) {
                $('#listBatchesTable').DataTable().destroy();
            }
            $("#listBatchesData").html(emptyHtml)
      
            return;
        } else {

            showAlert("warning", "white", "Something went wrong! please try again later")
        }


    }).catch(function (message) {
        showAlert("warning", "white", "Something went wrong! please try again later")
        console.error(message)
    })

})
$("#search-btn").click(getBatchesList)
getBatchesList()

