const subjectForm = document.querySelector("#subjectForm");
const registerSubject = (() => {
    const formData = new FormData(subjectForm);
    const subjectObj = Object.fromEntries(formData);
    const subjectData = {
        ...subjectObj,
    };
    subjectApi.register(subjectData).then(({ status, data, message }) => {
        $("#submit").removeAttr("disabled")
        $("#submit").html(`Register`)
        if (status === 200) {
            showAlert("primary", "white", "Subject created succesfully")
            setTimeout(() => {
                window.location.href = "list-subjects.php"

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
$("#subjectForm").validate({
    submitHandler: function (e) {
        $("#submit").attr("disabled", true)
        $("#submit").html(`Please wait ...  <div class="spinner-border spinner-border-sm text-white mt-1" role="status">
        <span class="visually-hidden"></span>
      </div>`)
        e.preventDefault;
        setTimeout(() => {
            if (id != null) {
                editSubject();
            } else {

                registerSubject()
            }
        }, 100);

    },
    rules: {
        // simple rule, converted to {required:true}
        title: {
            required: true,
            minlength:3,
        },
       
    },
    messages: {
       
        title: {
            required: "Subject title is required",
            minlength: "Minimum length should be 3"
        },
      
    }
});