const batchesForm = document.querySelector("#batchesForm");
const registerBatches = (() => {
    const formData = new FormData(batchesForm);
    const batchesObj = Object.fromEntries(formData);
    const batchesData = {
        ...batchesObj,
    };
    batchesApi.register(batchesData).then(({ status, data, message }) => {
        $("#submit").removeAttr("disabled")
        $("#submit").html(`Register`)
        if (status === 200) {
            showAlert("primary", "white", "Batches registered succesfully")
            setTimeout(() => {
                window.location.href = "list-batches.php"

            }, 700);
        }
        else {
            showAlert("warning", "white", message)
            console.error("status: " + status)
        };
        return;
    })


})
// student count
$("#batchesForm").validate({
    submitHandler: function (e) {
        $("#submit").attr("disabled", true)
        $("#submit").html(`Please wait ...  <div class="spinner-border spinner-border-sm text-white mt-1" role="status">
        <span class="visually-hidden"></span>
      </div>`)
        e.preventDefault;
        setTimeout(() => {
            if (id != null) {
                editBatches();
            } else {

                registerBatches()
            }
        }, 100);

    },
    rules: {
        // simple rule, converted to {required:true}
        institute_id: {
            required: true,
            minlength:1,
        },
        batch_name: {
            required: true,
        },
        year: {
            required: true,
        },
     
    },
   
});