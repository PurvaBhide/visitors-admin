const loginForm = document.querySelector("#loginForm");

const userLogin = ((user) => {
    loginForm.reset();
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", user.token);

    window.location.href = "index.php";
})

const checkLogin = (() => {
    const formData = new FormData(loginForm);
    const userObj = Object.fromEntries(formData);
    const userData = {
        ...userObj,
    };
    user.login(userData).then(({ data, message, status }) => {

        $("#submit").removeAttr("disabled")
        $("#submit").html("Login")
        if (status === 200) {
            showAlert("success", "white", message)
            setTimeout(() => {
                userLogin(data);
            }, 700);
        }
        else {
            
            showAlert("warning", "white", message)
            console.error("status: " + status)
        };
        return;
    })
})



$("#loginForm").validate({
    submitHandler: function (e) {
        $("#submit").attr("disabled", true)
        $("#submit").html(`Please wait ...  <div class="spinner-border spinner-border-sm text-white mt-1" role="status">
        <span class="visually-hidden"></span>
      </div>`)
        e.preventDefault;
        setTimeout(() => {

            checkLogin()
        }, 100);
    },
    rules: {
        email: {
            required: true,
            email: true,

        },
        password: {
            required: true,
            minlength: 6,

        },
    },
    messages: {
        email: {
            required: "Email is required",
            email: "Please enter valid email address",
        }
    }
})