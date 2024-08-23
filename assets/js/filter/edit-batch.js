let teacherHtml;
let subjectHtml;
let teacherArr = [];
let subjectArr = [];
let subjectData = [];
let teacherData = [];
$(document).ready(function () {
    if (id != "") {
        batchesApi.get(id).then(({ status, data, message }) => {
            if (status == 200) {
                displaybatches(data);
            }
            else {
                showAlert("warning", "white", message);

                setTimeout(() => {
                    window.location.href = "list-batches.php"

                }, 700);
            }
        }).catch(function (message) {
            console.error(message);
            setTimeout(() => {
                window.location.href = "list-batches.php"

            }, 700);
        })
    } else {
        showAlert("warning", "white", "Id not found");

        setTimeout(() => {
            window.location.href = "list-batches.php"

        }, 700);

    }
})
const editBatches = (() => {
    const batchesForm = document.querySelector("#batchesForm");
    const formData = new FormData(batchesForm);
    const batchesObj = Object.fromEntries(formData);
    const batchesData = {
        ...batchesObj,
    };
    batchesApi.update(id, batchesData).then(({ status, message, data }) => {
        $("#submit").removeAttr("disabled")
        $("#submit").html("Update")
        if (status == 200) {
            showAlert("success", "white", "Record updated successfully");

            setTimeout(() => {
                window.location.href = "list-batches.php"

            }, 700);
        }
        else {
            showAlert("warning", "white", message);
        }
    }).catch(function (message) {
        console.log(message);

    })
})
const displaybatches = ((data) => {
    // data.unset[data.institute_id]
    setElements(data);
    $(`#institute_id option[value!='${data['institute_id']}']`).remove();



    assignedStudentsApi.get(id).then((response) => {
        if (response.status != 200) return;
        studentsApi.listAll(data['institute_id']).then(({ status, data }) => {
            if (status != 200) return;
            let studentsArr = [];
            // studentsArr.push(`<option value="">Select Students</option>`)
            data.forEach(element => {
                if(response?.data!=undefined)
                {
                    studentsArr.push(`<option value="${element?.id}" ${response.data.some(obj => obj.student_id == element?.id)==true?"selected":""} >${element?.f_name + " " + element?.m_name + " " + element?.l_name}</option>`)
                    return;
                }
                studentsArr.push(`<option value="${element?.id}"  >${element?.f_name + " " + element?.m_name + " " + element?.l_name}</option>`)
                return;
            });
            $("#students").html(studentsArr.join(""));
            $('.form-control-chosen').chosen({
                allow_single_deselect: true,
                placeholder_text_multiple: "Select students"
            });
        })
    })
    teacherApi.listAll($("#institute_id").val()).then(({ status, data }) => {

        if (status != 200) return;
        teacherArr.push("<option value=''>Select</option>")
        data.forEach(element => {
            teacherData.push(element)
            teacherArr.push(`<option value="${element?.id}" >${element?.f_name + " " + element?.f_name + " " + element?.l_name}</option>`)
        });
        teacherHtml = teacherArr.join("")
    })
    subjectApi.listAll().then(({ status, data, message }) => {

        if (status != 200) return;
        subjectArr.push("<option value=''>Select</option>")
        data.forEach(element => {
            subjectData.push(element)
            subjectArr.push(`<option value="${element?.id}" >${element?.title}</option>`)
        });
        subjectHtml = subjectArr.join("");
    })
    assignBatchesApi.getAssignedteachers(id).then(({ status, data, message }) => {
        if (status != 200) {
            return;
        }
        data.forEach(element => {
            addInitRow(element?.subject_id, element?.teacher_id)
        });
    })
});