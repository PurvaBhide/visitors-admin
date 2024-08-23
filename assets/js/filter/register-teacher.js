const teacherForm = document.querySelector("#teacherForm");
const registerTeacher = (() => {
    const formData = new FormData(teacherForm);
    const teacherObj = Object.fromEntries(formData);
    const teacherData = {
        ...teacherObj,
    };
    teacherApi.register(teacherData).then(({ status, data, message }) => {
        $("#submit").removeAttr("disabled")
        $("#submit").html(`Register`)
        if (status === 200) {
            showAlert("primary", "white", "Teacher registered succesfully")
            setTimeout(() => {
                window.location.href = "list-teachers.php"

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
$("#teacherForm").validate({
    submitHandler: function (e) {
        $("#submit").attr("disabled", true)
        $("#submit").html(`Please wait ...  <div class="spinner-border spinner-border-sm text-white mt-1" role="status">
        <span class="visually-hidden"></span>
      </div>`)
        e.preventDefault;
        setTimeout(() => {
            if (id != null) {
                editTeacher();
            } else {

                registerTeacher()
            }
        }, 100);

    },
    rules: {
        // simple rule, converted to {required:true}
        name: "required",
        institute_id: {
            required: true,
            minlength:1,
        },
        l_name: {
            required: true,
        },
        address: {
            required: true,
        },
        contact_number: {
            required: true,
            minlength:10,
            maxlength:15,
            number: true,

        },
        qualifications: {
            required: true,
        },
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
            required: true,
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
        cPassword: {
            required: true,
            minlength: 6,
            maxlength: 20,
            equalTo: "#password"
        }
    },
    messages: {
       
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
        village: {
            minlength: "This field is required",
        },
    }
});