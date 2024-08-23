$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    if (id !== null && id !== "") {
        studentsApi.get(id)
            .then(({ status, data, message }) => {
                if (status == 200) {
                    displaystudent(data);
                } else {
                    showAlert("warning", "white", message);
                    setTimeout(() => {
                        window.location.href = "list-students.php";
                    }, 700);
                }
            })
            .catch((error) => {
                console.error(error);
                setTimeout(() => {
                    window.location.href = "list-students.php";
                }, 700);
            });
    } else {
        showAlert("warning", "white", "Id not found");
        setTimeout(() => {
            window.location.href = "list-students.php";
        }, 700);
    }
});

const editStudent = () => {
    const studentForm = document.querySelector("#studentsForm");
    const formData = new FormData(studentForm);
    const studentObj = Object.fromEntries(formData);
    const studentData = { ...studentObj };

    studentsApi.update(id, studentData)
        .then(({ status, message, data }) => {
            $("#submit").removeAttr("disabled");
            $("#submit").html("Update");
            if (status == 200) {
                showAlert("success", "white", "Record updated successfully");
                setTimeout(() => {
                    window.location.href = "list-students.php";
                }, 700);
            } else {
                showAlert("warning", "white", message);
            }
        })
        .catch((error) => {
            console.error(error);
        });
};

const displaystudent = (data) => {
    setElements(data);
    const { institute_id, institute } = data;
    console.log(institute_id, institute, "institute_id, institute")
  $('#institute_id').append(`<option value="${institute_id}" selected>${institute}</option>`);
};
