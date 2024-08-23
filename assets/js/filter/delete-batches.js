let deleteRow;

const deleteBatches = (id) => {
  $("#delete-btn")
    .html(`Please wait ...  <div class="spinner-border spinner-border-sm text-white mt-1" role="status">
    <span class="visually-hidden"></span>
    </div>`);
  setTimeout(() => {
    batchesApi
      .delete(id)
      .then(({ status, data, message }) => {
        $("#delete-btn").html("Delete");

        if (status == 200) {
          setTimeout(() => {
            $("#deleteModal").modal("hide");
          }, 100);
          showAlert("primary", "", message);
          batchesTable.row(deleteRow).remove().draw();
        } else {
          showDeleteAlert("danger", message);
        }
      })
      .catch(function (message) {
        console.error(message);
      });
  }, 50);
};

const openDeleteModal = (element, id) => {
  deleteRow = $(element).parent().parent();

  $(".delete-element").text("Batches");
  $("#delete-btn").attr("onclick", `deleteBatches(${id})`);
  $("#deleteModal").modal("show");
};
