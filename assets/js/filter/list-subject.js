let subjectTable;
const setSubjectList = ((data) => {
    const listData = data?.map((value, index) => {
        return ` <tr class="text-center">
        <td>${++index}</td>
        <td>${value?.title}</td>
       
        <td class="text-center">
          <a href="edit-subject.php?id=${value?.id}" class="mt-2 btn btn-primary"><i class="fas fa-edit    "></i> </a>
          <a href="javascript:void(0)" onclick=openDeleteModal(this,${value?.id}) class="mt-2 btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i> </a>
        </td>
      </tr>`;
    })
    if ($.fn.DataTable.isDataTable('#listsubjectTable')) {
        $('#listsubjectTable').DataTable().destroy();
    }
    $("#listsubjectData").html(listData.join(""))
    subjectTable = new DataTable('#listsubjectTable');

    subjectTable.options = {
        "responsive": false,
        "lengthChange": false,
        "autoWidth": false,
    }


})


subjectApi.listAll().then(({ status, message, data }) => {
    if (status == 200) {
        setSubjectList(data)
        return;
    } else if (status == 204) {
        showAlert("success", "white", "No records found")
        let emptyHtml = `
        <tr class="text-center">
        <td colspan="7">No records found</td>
        </tr>
        `;
        if ($.fn.DataTable.isDataTable('#listsubjectTable')) {
            $('#listsubjectTable').DataTable().destroy();
        }
        $("#listsubjectData").html(emptyHtml)

        return;
    } else {

        showAlert("warning", "white", "Something went wrong! please try again later")
    }


}).catch(function (message) {
    showAlert("warning", "white", "Something went wrong! please try again later")
    console.error(message)
})

