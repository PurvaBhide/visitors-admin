const instituteForm = document.querySelector("#instituteForm");
const registerInstitute = (() => {
    const formData = new FormData(instituteForm);
    const instObj = Object.fromEntries(formData);
    const instData = {
        ...instObj,
        status:"0",
    };
    institute.register(instData).then(({ status, data, message }) => {
        $("#submit").removeAttr("disabled")
        $("#submit").html(`Register`)
        if (status === 200) {
            showAlert("primary", "white", message)
            setTimeout(() => {
                window.location.href = "list-institute.php"

            }, 700);
        }
        else {
            showAlert("warning", "white", message)
            console.error("status: " + status)
        };
        return;
    })

    // changeBtnState("submit","enable");


})
// student count
$("#instituteForm").validate({
    submitHandler: function (e) {
        $("#submit").attr("disabled", true)
        $("#submit").html(`Please wait ...  <div class="spinner-border spinner-border-sm text-white mt-1" role="status">
        <span class="visually-hidden"></span>
      </div>`)
        e.preventDefault;
        setTimeout(() => {

            if (id != null) {
                editInstitute();
            } else {

                registerInstitute()
            }
        }, 100);

    },
    rules: {
        // simple rule, converted to {required:true}
        institute_type:"required",
        name: "required",
        state: {
            required: true,
            minlength: 1,
        },
        district: {
            required: true,
            minlength: 1,
        },
        block: {
            required: true,
            minlength: 1,
        },
        village: {
            required: false,
            minlength: 1,
        },
        // compound rule
        email: {
            required: true,
            email: true
        },
        contact_number: {
            required: true,
            minlength: 10,
            maxlength: 10,
            number: true,

        },
        password: {
            required: true,
            minlength: 6,
            maxlength: 20,
        },
        Cpassword: {
            required: true,
            minlength: 6,
            maxlength: 20,
            equalTo: "#password"
        }
    },
    messages: {
        institute_type:"Please select institute type",
        name: "Please specify institute name",
        email: {
            required: "Email is required",
            email: "Your email address must be in the format of name@domain.com"
        },
        Cpassword: {
            equalTo: "Password and confirm password didn't macthed",
        },
        state: {
            minlength: "This field is required",
        },
        district: {
            minlength: "This field is required",
        },
        block: {
            minlength: "This field is required",
        },
        // village: {
        //     minlength: "This field is required",
        // },
    }
});