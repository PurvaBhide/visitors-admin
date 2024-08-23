let deleteRow;


const deleteInstitute = ((id) => {
    $("#delete-btn").html(`Please wait ...  <div class="spinner-border spinner-border-sm text-white mt-1" role="status">
    <span class="visually-hidden"></span>
    </div>`)
    setTimeout(() => {

        institute.delete(id).then(({ status, data, message }) => {
                $("#delete-btn").html("Delete")

            if (status == 200) {
                setTimeout(() => {
                    $('#deleteModal').modal('hide');
                }, 100);
                showAlert("primary", "", message)
                instTable.row(deleteRow).remove().draw()

            } else {
                showDeleteAlert("danger", message);
            }

        }).catch(function (message) {
            console.error(message);

        })
    }, 50);

})

const openDeleteModal = ((element, id) => {
    deleteRow = $(element).parent().parent();

    $(".delete-element").text("Institute")
    $("#delete-btn").attr("onclick", `deleteInstitute(${id})`)
    $('#deleteModal').modal('show');
})